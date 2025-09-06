import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ShieldAlert, Map, RefreshCw } from 'lucide-react'

const SOURCES = [
  { key: 'radware', label: 'Radware (if embeddable)', url: 'https://livethreatmap.radware.com/' },
  { key: 'checkpoint', label: 'Check Point (if embeddable)', url: 'https://threatmap.checkpoint.com/' }
]

export default function ThreatMap() {
  const [srcIdx, setSrcIdx] = useState(0)
  const src = SOURCES[srcIdx]

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2 text-white/90">
          <ShieldAlert className="w-5 h-5 text-cyan-300" />
          <h4 className="text-lg font-semibold">Live Threat Map (Demo)</h4>
        </div>
        <div className="flex items-center gap-2">
          <select
            className="badge bg-white/10 text-white"
            value={srcIdx}
            onChange={(e) => setSrcIdx(parseInt(e.target.value, 10))}
          >
            {SOURCES.map((s, i) => <option key={s.key} value={i}>{s.label}</option>)}
          </select>
          <button className="btn btn-ghost" onClick={() => setSrcIdx((i) => (i + 1) % SOURCES.length)}>
            <RefreshCw className="w-4 h-4" /> Cycle
          </button>
        </div>
      </div>

      <div className="threat-frame bg-black/40">
        <iframe src={src.url} title="Live Threat Map Demo" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />
      </div>

      <p className="text-xs text-white/60">
        This is a safe, public demo embed. Some vendor maps may block embedding in iframes; if a source doesn&apos;t load, pick another.
      </p>
    </motion.div>
  )
}