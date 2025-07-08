/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { CoolMode } from "./magicui/cool-mode";
import { SpringButton } from "../../components/gsap/spring-button";

const AboutSection = () => {
  const skills = [
    "React.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "HTML/CSS",
    "Tailwind CSS",
    "Next.js",
    "MongoDB",
    "PostgreSQL",
    "Git/Github",
    "AWS",
    "Figma",
    "Adobe XD",
    "Photoshop",
    "UI/UX",
  ];

  return (
    <section className="py-20 px-4 bg-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - About text */}
          <div className="space-y-6">
            <div>
              <h2 className="scout-font text-6xl font-thin text-gray-900">
                About Me
              </h2>
              <div className="w-16 h-1 bg-blue-600 mb-6"></div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-3xl mb-2 leading-normal">
                I'm a passionate UI/UX Designer and Frontend Developer with over
                5 years of experience creating digital experiences that are both
                beautiful and functional. I believe in the power of clean,
                intuitive design to solve real-world problems.
              </p>

              {/* <p>
                My journey began with a curiosity for how things work, which led
                me to explore both the technical and creative aspects of web
                development. I enjoy bridging the gap between design and
                development, ensuring that every pixel serves a purpose.
              </p>

              <p>
                When I'm not coding or designing, you can find me exploring new
                technologies, contributing to open-source projects, or sharing
                knowledge with the developer community. I'm always excited to
                collaborate on projects that make a positive impact.
              </p> */}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <SpringButton scale={0.6}>
                <CoolMode>
                  <button className="inclusive-sans rounded-full px-2 py-3 bg-[#0070f3] shadow-[0_4px_14px_0_rgb(0,118,255,39%)] text-white font-medium hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] transition-colors mt-4 py-6 px-8 text-2xl ">
                    Download Resume
                  </button>
                </CoolMode>
              </SpringButton>
            </div>
          </div>

          {/* Right side - Skills */}
          <div className="space-y-6">
            <div>
              <h3 className="scout-font text-5xl font-thin text-gray-900">
                Skills & Technologies
              </h3>
              <div className="w-12 h-1 bg-blue-600 mb-6"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="rounded-full px-4 py-3 bg-white border border-gray-200 text-center text-3xl font-thin text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-200 cursor-pointer relative scout-font mb-4"
                >
                  <GlowingEffect
                    blur={0}
                    borderWidth={1.5}
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                  />
                  {skill}
                </div>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-sm text-gray-600 italic">
                Always learning and exploring new technologies to stay current
                with industry trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
