import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Portfolio } from "@/components/sections/portfolio";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Portfolio />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
