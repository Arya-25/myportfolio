import React, { useEffect, useState } from 'react'
import TerminalIntro from './components/TerminalIntro'
import Navbar from './components/Navbar'
import NameWave from './components/NameWave'
import ThreatMap from './components/ThreatMap'
import { motion } from 'framer-motion'
import { Shield, Terminal, Cpu, Mail, BookOpenCheck, Trophy } from 'lucide-react'

// ✅ Sections & Resume path
const sections = ['home','projects','skills','experience','education','certifications','contact','threats']
const RESUME = 'arya-resume.pdf'

// Card wrapper
function Card({children}) {
  return (
    <div className="p-5 bg-cyber-panel/60 rounded-xl border border-gray-800 shadow-inner hover:shadow-neon transition">
      {children}
    </div>
  )
}

// Section title helper
function SectionTitle({icon,text}) {
  return (
    <h3 className="text-3xl font-bold text-cyber-neon flex items-center gap-2">
      {icon} {text}
    </h3>
  )
}

export default function App() {
  const [introDone,setIntroDone] = useState(false)

  // Theme sync
  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'cyber'
    const root = document.documentElement, body = document.body
    root.classList.remove('theme-cyber','theme-matrix'); body.classList.remove('theme-cyber','theme-matrix');
    if(stored==='matrix'){ root.classList.add('theme-matrix'); body.classList.add('theme-matrix') }
    else { root.classList.add('theme-cyber'); body.classList.add('theme-cyber') }
  }, [])

  // Reveal animations
  useEffect(()=>{
    const obs=new IntersectionObserver(es=>{
      es.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('reveal-visible') })
    },{threshold:.2})
    document.querySelectorAll('.reveal-hidden').forEach(el=>obs.observe(el))
    return ()=>obs.disconnect()
  },[])

  return (
    <div className="min-h-screen relative">
      {!introDone && <TerminalIntro onFinish={()=>setIntroDone(true)}/>}

      <Navbar sections={sections} resume={RESUME}/>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">

        {/* Home */}
        <section id="home" className="pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="reveal-hidden">
              <NameWave name={'Arya Mangesh Deshpande'} />
              <p className="mt-4 text-gray-300">
                Aspiring Cybersecurity Analyst — B.Tech (CSIT, Cybersecurity) with hands-on in network security, ethical hacking, VAPT, ELK/Wazuh, Proxmox, and DLP (Trellix, Forcepoint). I build Red/Blue training platforms and secure full-stack apps.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`/${RESUME}`} download className="px-4 py-2 rounded-md bg-gradient-to-r from-cyber-neon to-cyber-glow text-black font-semibold">Download Resume</a>
                <a href="#projects" className="px-4 py-2 rounded-md border border-gray-700 text-gray-200">See Projects</a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="reveal-hidden">
          <SectionTitle icon={<Terminal/>} text="Projects" />
          <div className="grid md:grid-cols-2 gap-6 mt-4">

            {/* Red & Blue Team Simulation Platform */}
            <motion.a 
              href="https://github.com/Arya-25/Red-Team-Blue-Team-.git"
              target="_blank" rel="noreferrer"
              whileHover={{scale:1.03}} 
              className="p-5 bg-cyber-panel/60 rounded-xl border border-gray-800 card-glow block"
            >
              <h4 className="font-semibold">Red & Blue Team Simulation Platform</h4>
              <p className="text-gray-300 text-sm mt-2">Comprehensive training platform integrating real tools and telemetry.</p>
              <ul className="text-gray-400 text-sm mt-2 list-disc ml-4">
                <li>React.js frontend, Django REST backend, MongoDB storage</li>
                <li>Wazuh for intrusion detection, ELK for analysis & monitoring</li>
                <li>Automated scenario deployment with Ansible (cut setup 30%)</li>
                <li>Virtualized labs via Proxmox; Python scripting for automation</li>
              </ul>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {['React','Django','MongoDB','ELK','Wazuh','Proxmox'].map(tag=>(
                  <span key={tag} className="px-2 py-1 rounded border border-cyber-neon/40 hover:bg-cyber-neon/10 transition">{tag}</span>
                ))}
              </div>
            </motion.a>

            {/* Cyber Bot Hygiene */}
            <motion.div whileHover={{scale:1.03}} className="p-5 bg-cyber-panel/60 rounded-xl border border-gray-800 card-glow">
              <h4 className="font-semibold">Cyber Bot Hygiene (Security Advisor)</h4>
              <p className="text-gray-300 text-sm mt-2">AI assistant for cyber hygiene, guides secure practices and performs automated checks.</p>
              <ul className="text-gray-400 text-sm mt-2 list-disc ml-4">
                <li>Playbooks for common misconfigurations and phishing awareness</li>
                <li>Extensible rules for endpoint and network posture hints</li>
              </ul>
            </motion.div>

            {/* Chronic Disease Management */}
            <motion.div whileHover={{scale:1.03}} className="p-5 bg-cyber-panel/60 rounded-xl border border-gray-800 card-glow">
              <h4 className="font-semibold">Chronic Disease Management with AI</h4>
              <p className="text-gray-300 text-sm mt-2">Healthcare monitoring system integrating doctor–patient dashboards and AI-powered detection.</p>
              <ul className="text-gray-400 text-sm mt-2 list-disc ml-4">
                <li>Doctor & patient dashboards for health tracking</li>
                <li>AI models for pneumonia & skin disease detection</li>
                <li>Medical store medicine data management</li>
                <li>End-to-end system built around real-world problem statements</li>
              </ul>
            </motion.div>

            {/* Agribusiness Platform */}
            <motion.a 
              href="https://github.com/Arya-25/Agribuziness-repo.git"
              target="_blank" rel="noreferrer"
              whileHover={{scale:1.03}} 
              className="p-5 bg-cyber-panel/60 rounded-xl border border-gray-800 card-glow block"
            >
              <h4 className="font-semibold">Agribusiness Platform</h4>
              <p className="text-gray-300 text-sm mt-2">Full-stack platform designed for farmers, FPOs, and corporate buyers to streamline agribusiness operations.</p>
              <ul className="text-gray-400 text-sm mt-2 list-disc ml-4">
                <li>Role-based authentication (Farmer, FPO, Corporate)</li>
                <li>Email verification & secure login system</li>
                <li>Product & order management with dashboards</li>
                <li>Focus on scalability and data-driven insights</li>
              </ul>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {['MSSQL','.NET','React','Tailwind'].map(tag=>(
                  <span key={tag} className="px-2 py-1 rounded border border-cyber-neon/40 hover:bg-cyber-neon/10 transition">{tag}</span>
                ))}
              </div>
            </motion.a>

          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="reveal-hidden">
          <SectionTitle icon={<Shield/>} text="Skills" />
          <div className="grid md:grid-cols-3 gap-6 mt-4">
            {[
              {title:"Security & Platforms", skills:["Network Security","Kali Linux","NOC & SOC","Wireshark","AlienVault","Proxmox","ELK / Wazuh","DLP (Trellix, Forcepoint)"]},
              {title:"Programming & Backend", skills:["Python","Django REST","API Testing","MongoDB","React.js","Log Analysis"]},
              {title:"Soft Skills", skills:["Threat Analysis","Agile Collaboration","Documentation","Problem Solving"]}
            ].map((group,idx)=>(
              <Card key={idx}>
                <h4 className="font-semibold text-white">{group.title}</h4>
                <div className="mt-3 grid grid-cols-2 gap-2 text-gray-300">
                  {group.skills.map(skill=>(
                    <motion.span
                      whileHover={{ scale: 1.1, color: "#00fff7", textShadow: "0px 0px 8px #00fff7" }}
                      key={skill}
                      className="card px-3 py-2 cursor-pointer rounded-md border border-cyber-neon/20 hover:border-cyber-neon/60 transition"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience & Internships */}
        <section id="experience" className="reveal-hidden">
          <SectionTitle icon={<Cpu/>} text="Experience & Internships" />
          <div className="mt-6 grid md:grid-cols-2 gap-6">

            <a href="https://theimperative.in/" target="_blank" rel="noreferrer" className="p-5 rounded-xl border border-cyber-neon/40 bg-cyber-panel/60 card-glow">
              <h4 className="font-semibold">Security Analyst Intern — Imperative Business Ventures Pvt. Ltd.</h4>
              <p className="text-xs text-gray-400">Aug 2025 – Present · Pune</p>
              <ul className="mt-3 text-gray-300 text-sm list-disc ml-5">
                <li>Red/Blue Team operations, SOC/NOC monitoring</li>
                <li>Worked with ELK, Wazuh, Zabbix, AlienVault</li>
                <li>Vulnerability scanning & penetration testing</li>
              </ul>
            </a>

            <Card>
              <h4 className="font-semibold">Software Developer Intern — Erfinden Technologies Pvt. Ltd.</h4>
              <p className="text-xs text-gray-400">Jun 2025 – Aug 2025 · Pune</p>
              <ul className="text-gray-300 text-sm mt-3 list-disc ml-5">
                <li>Responsive React interfaces with HTML/CSS/JS</li>
                <li>Database design & integration with Supabase</li>
                <li>End-to-end Agribusiness project contribution</li>
              </ul>
            </Card>

            <a href="https://amazuretec.com/" target="_blank" rel="noreferrer" className="p-5 rounded-xl border border-cyber-neon/40 bg-cyber-panel/60 card-glow">
              <h4 className="font-semibold">Cybersecurity Analyst Intern — Amazure Technologies Pvt. Ltd.</h4>
              <p className="text-xs text-gray-400">Jun 2024 – Aug 2024 · Pune</p>
              <ul className="mt-3 text-gray-300 text-sm list-disc ml-5">
                <li>Installed & optimized Trellix and Forcepoint DLP</li>
                <li>Built secure backend Tenant Management System</li>
                <li>Log monitoring with ELK Stack</li>
              </ul>
            </a>

            <a href="https://nexgensis.com/" target="_blank" rel="noreferrer" className="p-5 rounded-xl border border-cyber-neon/40 bg-cyber-panel/60 card-glow">
              <h4 className="font-semibold">Software Developer Intern — Nexgensis</h4>
              <p className="text-xs text-gray-400">Jun 2023 – Aug 2023 · Pune</p>
              <ul className="mt-3 text-gray-300 text-sm list-disc ml-5">
                <li>Interactive dashboards with React.js for data visualization</li>
                <li>Developed & tested secure APIs using Django & MongoDB</li>
                <li>Collaborated in Agile sprints to meet milestones</li>
              </ul>
            </a>

          </div>
        </section>

        {/* Education */}
        <section id="education" className="reveal-hidden">
          <SectionTitle icon={<BookOpenCheck/>} text="Education" />
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <Card>
              <h4 className="font-semibold">B.Tech in CSIT — Cyber Security</h4>
              <p className="text-gray-300 text-sm mt-1">Symbiosis Skills and Professional University, Pune</p>
              <p className="text-gray-400 text-xs">Aug 2022 — Jun 2026 · CGPA: 8.3</p>
            </Card>
            <Card>
              <h4 className="font-semibold">Higher Secondary (XII)</h4>
              <p className="text-gray-300 text-sm mt-1">Prathibha Junior College, Pune</p>
              <p className="text-gray-400 text-xs">2022 · 70%</p>
            </Card>
            <Card>
              <h4 className="font-semibold">Secondary (X)</h4>
              <p className="text-gray-300 text-sm mt-1">Vidya Niketan English Medium School, Pune</p>
              <p className="text-gray-400 text-xs">2020 · 86%</p>
            </Card>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="reveal-hidden">
          <SectionTitle icon={<Trophy/>} text="Certifications" />
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <Card>
              <h4 className="font-semibold text-cyber-neon">Data Loss Prevention (DLP)</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Trellix — DLP Network Essentials','Trellix — DLP Endpoint Essentials','Forcepoint — Data Security Level 1']
                  .map(c=>(
                    <span key={c} className="px-3 py-1 rounded-md border border-cyber-neon/40 text-gray-200 hover:bg-cyber-neon/10 transition">{c}</span>
                ))}
              </div>
            </Card>
            <Card>
              <h4 className="font-semibold text-cyber-neon">Other Credentials</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Fundamentals of Microsoft 365 Generative AI','AmbujaTech CTF — Participant']
                  .map(c=>(
                    <span key={c} className="px-3 py-1 rounded-md border border-cyber-neon/40 text-gray-200 hover:bg-cyber-neon/10 transition">{c}</span>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="reveal-hidden">
          <SectionTitle icon={<Mail/>} text="Contact" />
          <div className="mt-2 text-gray-300">
            Email: <a href="mailto:aryadeshpande2510@gmail.com" className="text-cyber-neon underline">aryadeshpande2510@gmail.com</a><br/>
            LinkedIn: <a href="https://www.linkedin.com/in/arya-deshpande2510/" target="_blank" className="text-cyber-neon underline" rel="noreferrer">linkedin.com/in/arya-deshpande</a>
          </div>
        </section>

        {/* Threats */}
        <section id="threats" className="max-w-6xl mx-auto container-pad py-20">
          <h3 className="text-3xl font-bold text-cyan-300 flex items-center gap-2">
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
        © 2025 Arya Mangesh Deshpande — Built with React, Tailwind & Framer Motion.
      </footer>
    </div>
  )
}
