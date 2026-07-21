import { socialLinks } from '@/lib/social';

const Footer = () => {
  return (
    <footer className="border-t border-rule px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <p className="meta">Suraj Pathak — Kathmandu, Nepal</p>
        <div className="flex items-center gap-5">
          {socialLinks.map(({ name, url, icon: Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-signal"
              aria-label={name}
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
