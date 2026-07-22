import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { ImageResponse } from 'next/og';

import { roles, tagline, titleWithRoles } from '@/lib/content';

// Dynamic share card, generated at build time so there is no static asset to
// keep in sync with the design. Mirrors the site hero: mono role line, the
// two-line mono name, bio, and a hairline-framed portrait with "available".
export const alt = titleWithRoles;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const INK = '#0b0d0e';
const PAPER = '#f2f2ee';
const MUTED = '#8b9299';
const MINT = '#00e5a0';
const RULE = '#24282a';

const asset = (p: string) => readFile(join(process.cwd(), p));

export default async function OpengraphImage() {
  // ImageResponse resolves neither /public URLs nor next/font, so read the
  // portrait and the two JetBrains Mono weights off disk.
  const [photo, monoRegular, monoBold] = await Promise.all([
    asset('public/images/profile.png'),
    asset('public/fonts/JetBrainsMono-Regular.ttf'),
    asset('public/fonts/JetBrainsMono-Bold.ttf'),
  ]);
  const photoSrc = `data:image/png;base64,${photo.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '64px',
          background: INK,
          color: PAPER,
          padding: '72px',
          fontFamily: 'JetBrains Mono',
        }}
      >
        {/* Left: text column */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          {/* Role line: mint labels, muted slashes — matches the hero meta row */}
          <div
            style={{
              display: 'flex',
              fontSize: 25,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: MINT,
            }}
          >
            {roles.map((role, i) => (
              <span key={role} style={{ display: 'flex' }}>
                {i > 0 && (
                  <span style={{ color: MUTED, opacity: 0.5, margin: '0 16px' }}>
                    /
                  </span>
                )}
                {role}
              </span>
            ))}
          </div>

          {/* Name: mono, tight tracking, two lines like the hero */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 118,
              fontWeight: 700,
              lineHeight: 0.94,
              letterSpacing: '-0.045em',
              marginTop: 36,
            }}
          >
            <span>Suraj</span>
            <span>Pathak</span>
          </div>

          <div
            style={{
              display: 'flex',
              marginTop: 36,
              fontSize: 27,
              color: MUTED,
              lineHeight: 1.4,
              maxWidth: 560,
            }}
          >
            {tagline}
          </div>
        </div>

        {/* Right: hairline-framed portrait, "available" inside the frame */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: 340,
            border: `1px solid ${RULE}`,
            padding: 8,
          }}
        >
          <img
            src={photoSrc}
            width={324}
            height={324}
            style={{ objectFit: 'cover', width: 324, height: 324 }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: 8,
              fontSize: 21,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: MINT,
            }}
          >
            available
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'JetBrains Mono', data: monoRegular, weight: 400, style: 'normal' },
        { name: 'JetBrains Mono', data: monoBold, weight: 700, style: 'normal' },
      ],
    },
  );
}
