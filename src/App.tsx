import React from "react"
import {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Contact,
  Footer,
} from "./components";

const App: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main
        className="bg-gradient-to-tr from-background-dark from-60%
      via-background-card via-75% to-background-dark to-90%"
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="w-full pt-16 bg-background-dark">
        <Footer />
      </footer>
    </>
  );
}

export default App;
