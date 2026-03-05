import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Background from "./components/Background";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-bg-0 text-text-0">
      <Nav />
      <Hero />
      <Services />
      <Background />
      <Skills />
      <Contact />
    </div>
  );
}
