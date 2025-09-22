import React, { useEffect, useState } from 'react'
import TerminalIntro from './components/TerminalIntro'
import Navbar from './components/Navbar'
import NameWave from './components/NameWave'
import ThreatMap from './components/ThreatMap'
import { motion } from 'framer-motion'
import { Shield, Terminal, Cpu, Mail, BookOpenCheck, Trophy, Github } from 'lucide-react'

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
              <h4 className="font-semibold flex items-center gap-2">
                Red & Blue Team Simulation Platform <Github className="w-4 h-4 text-cyber-neon"/>
              </h4>
              <p className="text-gray-300 text-sm mt-2">Comprehensive training platform integrating real tools and telemetry.</p>
              <ul className="text-gray-400 text-sm mt-2 list-disc ml-4">
                <li>React.js frontend, Django REST backend, MongoDB storage</li>
                <li>Wazuh for intrusion detection, ELK for analysis & monitoring</li>
                <li>Automated scenario deployment with Ansible (cut setup 30%)</li>
                <li>Virtualized labs via Proxmox; Python scripting for automation</li>
              </ul>
            </motion.a>

            {/* Chronic Disease Management */}
            <motion.a 
              href="https://github.com/YourGitHubUsername/Chronic-Disease-Management"
              target="_blank" rel="noreferrer"
              whileHover={{scale:1.03}} 
              className="p-5 bg-cyber-panel/60 rounded-xl border border-gray-800 card-glow block"
            >
              <h4 className="font-semibold flex items-center gap-2">
                Chronic Disease Management with AI <Github className="w-4 h-4 text-cyber-neon"/>
              </h4>
              <p className="text-gray-300 text-sm mt-2">Healthcare monitoring system integrating doctor–patient dashboards and AI-powered detection.</p>
              <ul className="text-gray-400 text-sm mt-2 list-disc ml-4">
                <li>Doctor & patient dashboards for health tracking</li>
                <li>AI models for pneumonia & skin disease detection</li>
                <li>Medical store medicine data management</li>
                <li>End-to-end system built around real-world problem statements</li>
              </ul>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {['Python','Flask','TensorFlow','React','MongoDB','AI/ML'].map(tag=>(
                  <span key={tag} className="px-2 py-1 rounded border border-cyber-neon/40 hover:bg-cyber-neon/10 transition">{tag}</span>
                ))}
              </div>
            </motion.a>

            {/* Agribusiness Platform */}
            <motion.a 
              href="https://github.com/Arya-25/Agribuziness-repo.git"
              target="_blank" rel="noreferrer"
              whileHover={{scale:1.03}} 
              className="p-5 bg-cyber-panel/60 rounded-xl border border-gray-800 card-glow block"
            >
              <h4 className="font-semibold flex items-center gap-2">
                Agribusiness Platform <Github className="w-4 h-4 text-cyber-neon"/>
              </h4>
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

            {/* AI-Powered Smart Surveillance */}
            <motion.a 
              href="https://github.com/Arya-25/Real-Time-Vigilance"
              target="_blank" rel="noreferrer"
              whileHover={{scale:1.03}} 
              className="p-5 bg-cyber-panel/60 rounded-xl border border-gray-800 card-glow block"
            >
              <h4 className="font-semibold flex items-center gap-2">
                AI-Powered Smart Surveillance (Real-Time Vigilance) <Github className="w-4 h-4 text-cyber-neon"/>
              </h4>
              <p className="text-gray-300 text-sm mt-2">Real-time vigilance system for weapon & threat detection using AI-powered surveillance.</p>
              <ul className="text-gray-400 text-sm mt-2 list-disc ml-4">
                <li>Problem Statement: Automating real-time threat detection (weapons & anomalies)</li>
                <li>YOLOv8 + OpenCV for live detection & tracking</li>
                <li>Backend with Flask/FastAPI for real-time inference</li>
                <li>React dashboard & Twilio integration for instant alerts</li>
              </ul>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {['YOLOv8','OpenCV','Flask','FastAPI','React','MongoDB','Twilio'].map(tag=>(
                  <span key={tag} className="px-2 py-1 rounded border border-cyber-neon/40 hover:bg-cyber-neon/10 transition">{tag}</span>
                ))}
              </div>
            </motion.a>

          </div>
        </section>

        {/* Skills */}
        {/* ... unchanged rest of your sections ... */}

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
        © 2025 Arya Mangesh Deshpande 
      </footer>
    </div>
  )
}
