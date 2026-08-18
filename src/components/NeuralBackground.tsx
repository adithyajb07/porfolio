import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  hue: number;
}

export const NeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse position
    let mouse = {
      x: -1000,
      y: -1000,
      radius: 180,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    // Particle count scaled by screen size
    let particles: Particle[] = [];
    const maxConnectionDistance = 140;

    const initParticles = () => {
      const count = Math.min(Math.floor((width * height) / 22000), 55);
      particles = [];

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 1.8 + 1.2,
          baseAlpha: Math.random() * 0.4 + 0.25,
          hue: Math.random() > 0.4 ? 160 : 175, // Emerald (160) & Cyber Teal (175)
        });
      }
    };

    initParticles();

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges with soft wrap
        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        // Mouse interaction (gentle attraction / hover activation)
        const dxMouse = mouse.x - p.x;
        const dyMouse = mouse.y - p.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        let alphaMultiplier = 1;

        if (distMouse < mouse.radius) {
          const force = (1 - distMouse / mouse.radius) * 0.02;
          p.x += dxMouse * force;
          p.y += dyMouse * force;
          alphaMultiplier = 2.2;
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 85%, 60%, ${p.baseAlpha * alphaMultiplier})`;
        ctx.shadowBlur = distMouse < mouse.radius ? 12 : 4;
        ctx.shadowColor = `hsla(${p.hue}, 90%, 50%, 0.6)`;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow for lines

        // Draw synaptic connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectionDistance) {
            const proximity = 1 - dist / maxConnectionDistance;
            let lineAlpha = proximity * 0.22;

            // Brighten lines near mouse
            if (distMouse < mouse.radius) {
              lineAlpha *= 2.0;
            }

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `hsla(160, 80%, 55%, ${lineAlpha})`;
            ctx.lineWidth = proximity * 1.2;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Drifting Organic Aurora Glows */}
      <div className="absolute -top-[15%] -left-[10%] w-[65vw] h-[65vw] rounded-full bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent filter blur-[150px] animate-aurora pointer-events-none" />
      <div className="absolute top-[35%] -right-[15%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-bl from-teal-500/8 via-emerald-500/4 to-transparent filter blur-[160px] animate-aurora [animation-delay:6s] pointer-events-none" />
      <div className="absolute -bottom-[15%] left-[20%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-tr from-emerald-400/8 via-cyan-500/4 to-transparent filter blur-[140px] animate-aurora [animation-delay:12s] pointer-events-none" />

      {/* Interactive Neural Synapse Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-65"
      />

      {/* Ultra-subtle Film Grain / Noise Overlay for tactile texture */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:32px_32px] opacity-60 pointer-events-none" />
    </div>
  );
};
