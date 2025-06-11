import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <>
      <div className="flex justify-end p-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="border px-3 py-1 rounded text-sm"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      <main className="min-h-screen p-6 bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        <section className="mb-12">
          <h1 className="text-4xl font-bold">Jermaine T Lennon</h1>
          <p className="mt-2 text-lg">Electrical & Computer Engineering Graduate</p>
          <p className="mt-1 text-sm">Baltimore, MD | jermainetlennon3@gmail.com</p>
          <div className="mt-4 flex gap-4">
            <a href="https://linkedin.com/in/jermaine-l-52452a248" target="_blank">
              <Button>LinkedIn</Button>
            </a>
            <a href="/resume.pdf" target="_blank">
              <Button variant="outline">Resume</Button>
            </a>
          </div>
        </section>

        {/* ✅ About Me Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-sm leading-relaxed max-w-2xl">
            I'm Jermaine Lennon, an Electrical and Computer Engineering graduate from Morgan State University with a passion for embedded systems, data-driven design, and real-world problem solving. Whether I'm building a 40 GHz signal generator or crafting intuitive UIs for system control, I enjoy bridging the gap between hardware and software. I bring curiosity, grit, and a mission to create things that matter — especially in communities that are often overlooked in tech. Right now, I'm seeking opportunities where I can keep learning, contribute to a meaningful team, and grow as both an engineer and a person.
          </p>
        </section>

        {/* ✅ Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-medium mb-2">Data Analysis & Engineering</h3>
              <div className="flex flex-wrap gap-2">
                {["SQL", "Power BI", "Excel", "Data Visualization"].map(skill => (
                  <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Programming</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "C", "C++"].map(skill => (
                  <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Compliance & Reporting</h3>
              <div className="flex flex-wrap gap-2">
                {["Data Integrity", "Process Documentation"].map(skill => (
                  <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Software & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Business Objects", "Oracle", "Microsoft Office Suite"].map(skill => (
                  <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["Project Management", "Problem-Solving", "Communication", "Team Collaboration"].map(skill => (
                  <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ✅ Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardContent className="p-4 bg-white dark:bg-gray-900 rounded-xl">
                <h3 className="text-xl font-medium">Power BI Operations Dashboard</h3>
                <p className="mt-2 text-sm">
                  Developed an interactive dashboard using Power BI to analyze thousands of records from local datasets. Streamlined insights for internal operations during an internship by enabling better visibility into trends and metrics.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 bg-white dark:bg-gray-900 rounded-xl">
                <h3 className="text-xl font-medium">40 GHz Signal Generator</h3>
                <p className="mt-2 text-sm">Designed a low-cost signal generator using LMX2820 and Raspberry Pi SPI control. Integrated amplifier and filtering path with web-based UI.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 bg-white dark:bg-gray-900 rounded-xl">
                <h3 className="text-xl font-medium">ADS RF Path Simulation</h3>
                <p className="mt-2 text-sm">Simulated RF path using Keysight ADS to verify amplifier and switch performance from 0–40 GHz. Collaborated with industry experts for validation.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 bg-white dark:bg-gray-900 rounded-xl">
                <h3 className="text-xl font-medium">Embedded System Dashboard</h3>
                <p className="mt-2 text-sm">Built a React + Flask dashboard to control switches and amplifiers in real-time from Raspberry Pi. Used Tailwind and SPI programming techniques.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ✅ Contact Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Let’s Connect</h2>
          <p className="text-sm">Open to roles in Embedded Systems, Data Analysis, or RF Engineering. Let’s build something meaningful together.</p>
        </section>
      </main>
    </>
  );
}
