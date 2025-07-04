import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main className="min-h-screen">
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
