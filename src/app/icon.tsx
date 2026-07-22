import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { ImageResponse } from 'next/og';

// Favicon: a console prompt "> _" in mint on ink, mirroring the hero's
// terminal aesthetic. Generated so there's no static .ico to keep in sync.
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

const INK = '#0b0d0e';
const MINT = '#00e5a0';

export default async function Icon() {
  const monoBold = await readFile(
    join(process.cwd(), 'public/fonts/JetBrainsMono-Bold.ttf'),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: INK,
          color: MINT,
          fontFamily: 'JetBrains Mono',
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: '-0.04em',
        }}
      >
        &gt;_
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'JetBrains Mono', data: monoBold, weight: 700, style: 'normal' },
      ],
    },
  );
}
