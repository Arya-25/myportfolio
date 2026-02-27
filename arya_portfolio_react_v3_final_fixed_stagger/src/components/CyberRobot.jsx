import React, { useEffect, useRef, useState } from "react";

export default function PremiumBot() {
  const containerRef = useRef(null);
  const [eye, setEye] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [smoothTilt, setSmoothTilt] = useState({ x: 0, y: 0 });
  const [blink, setBlink] = useState(false);
  const [hover, setHover] = useState(false);

  // Apple-like smooth physics interpolation
  useEffect(() => {
    let animationFrame;
    const smooth = () => {
      setSmoothTilt((prev) => ({
        x: prev.x + (tilt.x - prev.x) * 0.08,
        y: prev.y + (tilt.y - prev.y) * 0.08,
      }));
      animationFrame = requestAnimationFrame(smooth);
    };
    smooth();
    return () => cancelAnimationFrame(animationFrame);
  }, [tilt]);

  // Eye tracking + tilt target
  useEffect(() => {
    const handleMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dx =
        (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const dy =
        (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

      setEye({ x: dx * 5, y: dy * 5 });
      setTilt({ x: dy * 12, y: -dx * 12 });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Natural blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 140);
    }, 4200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(11 17 23 / 0.6)",
        perspective: "1400px",
      }}
    >
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          transform: `rotateX(${smoothTilt.x}deg) rotateY(${smoothTilt.y}deg)`,
          transition: "transform 0.1s linear",
          animation: "float 6s cubic-bezier(0.37,0,0.63,1) infinite",
          position: "relative",
          willChange: "transform",
        }}
      >
        <svg width="260" height="420" viewBox="0 0 260 420">
          <defs>
            <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#e5edf3" />
            </linearGradient>

            <radialGradient id="eyeGrad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#a6fff7" />
              <stop offset="50%" stopColor="#29e0d0" />
              <stop offset="100%" stopColor="#009e96" />
            </radialGradient>

            <filter id="softGlow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Subtle floating particles */}
          {[...Array(6)].map((_, i) => (
            <circle key={i} cx={95 + i * 18} cy="45" r="2" fill="#29e0d0">
              <animate
                attributeName="cy"
                values="45;30;45"
                dur={`${4 + i}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.8;0;0.8"
                dur={`${4 + i}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}

          {/* HEAD */}
          <g>
            <rect
              x="55"
              y="20"
              width="150"
              height="130"
              rx="40"
              fill="url(#bodyGrad)"
            />

            {/* Premium neon visor */}
            <rect
              x="75"
              y="50"
              width="110"
              height="60"
              rx="30"
              fill="#1c2730"
              filter="url(#softGlow)"
              style={{
                animation:
                  "neonPulse 3s cubic-bezier(0.4,0,0.2,1) infinite alternate",
              }}
            />

            {/* Eyes */}
            <circle
              cx={105 + eye.x}
              cy={80 + eye.y}
              r={blink ? 2 : 15}
              fill="url(#eyeGrad)"
            />
            <circle
              cx={155 + eye.x}
              cy={80 + eye.y}
              r={blink ? 2 : 15}
              fill="url(#eyeGrad)"
            />
          </g>

          {/* BODY - natural breathing */}
          <g
            style={{
              animation:
                "breath 5s cubic-bezier(0.37,0,0.63,1) infinite",
              transformOrigin: "130px 230px",
            }}
          >
            <rect
              x="75"
              y="160"
              width="110"
              height="140"
              rx="35"
              fill="url(#bodyGrad)"
            />

            {/* Mouth */}
            <rect
              x="115"
              y="215"
              width="30"
              height={hover ? 6 : 12}
              rx="8"
              fill="#29e0d0"
              style={{
                transition:
                  "all 0.35s cubic-bezier(0.4,0,0.2,1)",
              }}
            />
          </g>

          {/* Arms */}
          <g fill="url(#bodyGrad)">
            <rect x="35" y="170" width="35" height="100" rx="20" />
            <rect x="190" y="170" width="35" height="100" rx="20" />
          </g>

          {/* Legs */}
          <g fill="url(#bodyGrad)">
            <rect x="90" y="310" width="35" height="80" rx="18" />
            <rect x="135" y="310" width="35" height="80" rx="18" />
          </g>

          {/* Small refined Hello bubble */}
          <g>
            <rect
              x="185"
              y="45"
              width="70"
              height="32"
              rx="14"
              fill="#29e0d0"
              opacity="0.95"
            />
            <text
              x="220"
              y="66"
              textAnchor="middle"
              fill="#000"
              fontSize="11"
              fontWeight="600"
            >
              Hello
            </text>
          </g>

          <style>
            {`
              @keyframes float {
                0%,100% { transform: translateY(0px); }
                50% { transform: translateY(-8px); }
              }

              @keyframes neonPulse {
                from { filter: drop-shadow(0 0 4px #29e0d0); }
                to { filter: drop-shadow(0 0 18px #29e0d0); }
              }

              @keyframes breath {
                0%,100% { transform: scale(1) translateY(0px); }
                50% { transform: scale(1.03) translateY(-3px); }
              }
            `}
          </style>
        </svg>
      </div>
    </div>
  );
}