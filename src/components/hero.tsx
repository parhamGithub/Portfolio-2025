import React from "react";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-24 pb-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-lg">
          <p className="text-accent-teal text-lg mb-4">Hi, my name is</p>
          {/* Name */}
          <h1 className="text-text-light font-ringtail text-5xl font-bold mb-4">
            Parham Afshari
          </h1>
          {/* Headline */}
          <h2 className="text-text-muted text-4xl font-bold mb-8">
            I build things with{" "}
            <strong className="text-text-light">React</strong>,{" "}
            <strong className="text-text-light">Python</strong>, and{" "}
            <strong className="text-text-light">Flutter</strong>.
          </h2>
          {/* Description Paragraph */}
          <p className="text-text-muted text-lg leading-relaxed mb-12">
            I&apos;m a developer specializing in building web and mobile
            applications. Currently focusing on expanding my skills with
            React.js and exploring cross-platform development with Flutter.
          </p>
          {/* Call to Action Button */}
          <a href="#projects" className="btn-outline-accent">
            Check out my work
          </a>
        </div>
      </div>
    </section>
  );
};
