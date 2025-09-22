import { motion } from "framer-motion";
import { Terminal, Github, ExternalLink } from "lucide-react";
import SectionTitle from "./components/SectionTitle";
import ThreatMap from "./components/ThreatMap";

function App() {
  return (
    <div className="App">
      <main className="max-w-5xl mx-auto px-6 py-12">

        {/* Projects */}
        <section id="projects" className="reveal-hidden">
          <SectionTitle icon={<Terminal />} text="Projects" />
          <div className="grid md:grid-cols-2 gap-6 mt-4">

            {/* Red & Blue Team Simulation */}
            <motion.a
              href="https://github.com/Arya-25/Red-Team-Blue-Team-"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="block p-5 bg-cyber-panel/60 rounded-xl border border-gray-800 card-glow"
            >
              <div className="flex items-center gap-2">
                <h4 className="font-semibold">Red & Blue Team Simulation Platform</h4>
                <Github className="w-4 h-4 text-cyber-neon" />
              </div>
              <p className="text-gray-300 text-sm mt-2">
                Comprehensive training platform integrating real tools and telemetry.
              </p>
              <ul className="text-gray-400 text-sm mt-2 list-disc ml-4">
                <li>React.js frontend, Django REST backend, MongoDB storage</li>
                <li>Wazuh for intrusion detection, ELK for analysis & monitoring</li>
                <li>Automated scenario deployment with Ansible (cut setup 30%)</li>
                <li>Virtualized labs via Proxmox; Python scripting for automation</li>
              </ul>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {["React","Django","MongoDB","ELK","Wazuh","Proxmox"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded border border-cyber-neon/40 hover:bg-cyber-neon/10 transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>

            {/* Agribusiness Platform */}
            <motion.a
              href="https://github.com/Arya-25/Agribuziness-repo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="block p-5 bg-cyber-panel/60 rounded-xl border border-gray-800 card-glow"
            >
              <div className="flex items-center gap-2">
                <h4 className="font-semibold">AgriBusiness Platform</h4>
                <Github className="w-4 h-4 text-cyber-neon" />
              </div>
              <p className="text-gray-300 text-sm mt-2">
                A development project connecting farmers, corporates, and FPOs with digital solutions.
              </p>
              <ul className="text-gray-400 text-sm mt-2 list-disc ml-4">
                <li>Role-based authentication for Farmers, Corporates, FPOs</li>
                <li>Secure dashboards and transaction management</li>
                <li>Scalable MSSQL backend integration</li>
                <li>Bridges agriculture with technology for business efficiency</li>
              </ul>
            </motion.a>

            {/* Chronic Disease Management */}
            <motion.a
              href="https://github.com/YourGitHubUsername/Chronic-Disease-Management"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="block p-5 bg-cyber-panel/60 rounded-xl border border-gray-800 card-glow"
            >
              <div className="flex items-center gap-2">
                <h4 className="font-semibold">Chronic Disease Management</h4>
                <Github className="w-4 h-4 text-cyber-neon" />
              </div>
              <p className="text-gray-300 text-sm mt-2">
                AI-driven healthcare platform to monitor chronic illnesses and assist medical store owners.
              </p>
              <ul className="text-gray-400 text-sm mt-2 list-disc ml-4">
                <li>Doctor–Patient dashboards with real-time health tracking</li>
                <li>Pneumonia & skin disease detection using AI/ML models</li>
                <li>Medicine inventory & analytics for medical store owners</li>
                <li>Problem statement driven design — improving patient outcomes</li>
              </ul>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {["React","Node.js","Express","MongoDB","AI/ML","Tailwind"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded border border-cyber-neon/40 hover:bg-cyber-neon/10 transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>

            {/* Placeholder */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center justify-center p-5 bg-cyber-panel/30 rounded-xl border border-dashed border-gray-700 text-gray-500"
            >
              <span className="text-sm">🚧 New Project Coming Soon...</span>
            </motion.div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="reveal-hidden mt-12">
          <SectionTitle icon={<Terminal />} text="Experience" />
          <div className="p-5 bg-cyber-panel/60 rounded-xl border border-gray-800 card-glow mt-4">
            <h4 className="font-semibold flex items-center gap-2">
              InnoBytes (Erfinden Technologies Pvt. Ltd.)
              <a
                href="http://innobytes.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-neon hover:underline"
              >
                <ExternalLink className="w-4 h-4 inline" />
              </a>
            </h4>
            <p className="text-gray-300 text-sm mt-2">
              Contributed to projects with focus on cybersecurity, automation, and scalable solutions.
            </p>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="reveal-hidden mt-12">
          <SectionTitle icon={<Terminal />} text="Certifications" />
          <ul className="space-y-2 mt-4 text-sm">
            <li>
              <span className="font-semibold">Imperative Security</span> —
              Ethical Hacking & Pentesting 
              <a
                href="https://imperativesecurity.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-neon ml-1"
              >
                <ExternalLink className="w-4 h-4 inline" />
              </a>
            </li>
            <li>
              <span className="font-semibold">Amazure</span> —
              Cloud Security Fundamentals 
              <a
                href="https://azure.microsoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-neon ml-1"
              >
                <ExternalLink className="w-4 h-4 inline" />
              </a>
            </li>
            <li>
              <span className="font-semibold">Nexgensis</span> —
              Network Security Essentials 
              <a
                href="https://nexgensis.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-neon ml-1"
              >
                <ExternalLink className="w-4 h-4 inline" />
              </a>
            </li>
          </ul>
        </section>

        {/* Live Threats */}
        <section id="threats" className="reveal-hidden mt-12">
          <h3 className="text-lg font-semibold text-cyber-neon flex items-center gap-2">
            <span className="inline-flex -translate-y-0.5">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </span> Live Threats
          </h3>
          <div className="mt-6">
            <ThreatMap />
          </div>
        </section>
      </main>

      <footer className="text-center text-gray-500 py-6 text-sm">
        © 2025 Arya Mangesh Deshpande
      </footer>
    </div>
  );
}

export default App;
