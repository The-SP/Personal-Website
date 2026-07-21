import Image from 'next/image';

import SectionHeader from '@/components/SectionHeader';

/*
  Grouped by role rather than listed flat. Fifteen equal cards say nothing
  about how the work is organised; the grouping is the information.
*/
const skillGroups = [
  {
    label: 'Backend',
    items: [
      { name: 'Python', image: '/images/skills/python.svg' },
      { name: 'FastAPI', image: '/images/skills/fastapi.svg' },
      {
        name: 'Django',
        image: '/images/skills/django.svg',
        imageDark: '/images/skills/django-dark.svg',
      },
      { name: 'Node.js', image: '/images/skills/node.svg' },
    ],
  },
  {
    label: 'Storage',
    items: [
      { name: 'PostgreSQL', image: '/images/skills/postgresql.svg' },
      { name: 'Redis', image: '/images/skills/redis.svg' },
    ],
  },
  {
    label: 'Infrastructure',
    items: [
      {
        name: 'AWS',
        image: '/images/skills/aws.svg',
        imageDark: '/images/skills/aws-dark.svg',
      },
      { name: 'Docker', image: '/images/skills/docker.svg' },
      { name: 'Git', image: '/images/skills/git.svg' },
    ],
  },
  {
    label: 'Data & LLM',
    items: [
      {
        name: 'LangChain',
        image: '/images/skills/langchain.svg',
        imageDark: '/images/skills/langchain-dark.svg',
      },
      { name: 'Scikit-Learn', image: '/images/skills/scikitlearn.svg' },
      { name: 'TensorFlow', image: '/images/skills/tensorflow.svg' },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { name: 'TypeScript', image: '/images/skills/typescript.svg' },
      { name: 'React', image: '/images/skills/react.svg' },
      {
        name: 'Next.js',
        image: '/images/skills/nextjs.svg',
        imageDark: '/images/skills/nextjs-dark.svg',
      },
    ],
  },
];

/*
  A few devicon marks are dark-on-transparent and vanish against the ink
  background, so they ship a recoloured variant. Both render and CSS picks one
  via the <html> class — same approach as the theme toggle, so server and
  client markup stay identical through hydration. Keeping the dual render here
  means a new skill only has to declare `imageDark`, never repeat the wiring.
*/
const SkillIcon = ({
  image,
  imageDark,
}: {
  image: string;
  imageDark?: string;
}) => {
  const base = 'h-6 w-6 shrink-0 object-contain';
  return (
    <>
      <Image
        src={image}
        alt=""
        width={24}
        height={24}
        className={imageDark ? `${base} dark:hidden` : base}
      />
      {imageDark && (
        <Image
          src={imageDark}
          alt=""
          width={24}
          height={24}
          aria-hidden
          className={`hidden ${base} dark:block`}
        />
      )}
    </>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="border-b border-rule px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader label="Stack" />

        <dl className="mt-12 space-y-0">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="grid gap-x-8 gap-y-4 border-t border-rule py-6 md:grid-cols-[10rem_1fr]"
            >
              <dt className="meta pt-1">{group.label}</dt>
              <dd className="flex flex-wrap gap-x-7 gap-y-4">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-3 text-base"
                  >
                    <SkillIcon image={item.image} imageDark={item.imageDark} />
                    {item.name}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Skills;
