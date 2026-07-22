import Image from 'next/image';

import { bio, roles } from '@/lib/content';
import { socialLinks } from '@/lib/social';

const About = () => {
  return (
    <section
      id="about"
      className="border-b border-rule px-6 pt-8 pb-20 md:px-10 md:pt-20 md:pb-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_20rem] lg:gap-16">
        <div className="rise">
          {/* Role line replaces the typewriter: same information, stated once. */}
          <p className="meta flex flex-wrap items-center gap-x-3 gap-y-1">
            {roles.map((role, i) => (
              <span key={role} className="flex items-center gap-3">
                {i > 0 && <span className="text-muted/50">/</span>}
                {role}
              </span>
            ))}
          </p>

          <h1 className="display mt-6 text-[clamp(2.75rem,9vw,5.25rem)]">
              Suraj <br />Pathak
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-[1.0625rem]">
            {bio}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {socialLinks.map(({ name, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill group gap-2.5 px-4 py-2.5"
              >
                <Icon className="h-4 w-4" />
                {name}
                <span
                  aria-hidden
                  className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-signal"
                >
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Portrait: squared off and hairline-framed, full colour, no glow. */}
        <div className="rise order-first lg:order-none" style={{ animationDelay: '120ms' }}>
          <div className="group relative mx-auto w-full max-w-[17rem] border border-rule p-2 transition-colors duration-300 hover:border-signal lg:mx-0 lg:max-w-none">
            <Image
              src="/images/profile.png"
              alt="Suraj Pathak"
              width={400}
              height={400}
              className="aspect-square w-full object-cover transition-[filter] duration-300 group-hover:saturate-110"
              priority
            />
            <p className="meta mt-2 flex justify-end px-0.5">
              <span className="text-signal">available</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
