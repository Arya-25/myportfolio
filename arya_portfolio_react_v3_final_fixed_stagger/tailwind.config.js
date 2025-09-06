module.exports = {
  darkMode: 'class',
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { cyber:{ bg:"#061018", panel:"#0b1117", neon:"#00ffc3", glow:"#00c6ff", accent:"#7c5cff" } },
      boxShadow: { neon:"0 0 20px rgba(0,255,195,.12)", panel:"inset 0 1px 0 rgba(255,255,255,.04), 0 12px 30px rgba(0,0,0,.35)" },
      keyframes: { wave:{'0%':{transform:'translateY(0)'},'50%':{transform:'translateY(-6px)'},'100%':{transform:'translateY(0)'}}, floaty:{'0%':{transform:'translateY(0)'},'50%':{transform:'translateY(-3px)'},'100%':{transform:'translateY(0)'}} },
      animation: { wave:'wave .9s ease-in-out infinite', floaty:'floaty 3.5s ease-in-out infinite' }
    }
  }, plugins: []
}