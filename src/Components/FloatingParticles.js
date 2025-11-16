import React, { useRef, useEffect } from "react";

const FloatingParticles = ({ color = "#ffffff", count = 60 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // 🌌 Normal floating particles
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.8 + 0.2,
    }));

    // 🌠 Shooting stars
    const shootingStars = [];

    const createShootingStar = () => {
      if (Math.random() < 0.02) {
        // 2% chance each frame (~every few seconds)
        const startX = Math.random() * canvas.width;
        const startY = Math.random() * canvas.height * 0.5; // upper half
        const speed = Math.random() * 8 + 4;
        const angle = (Math.random() * Math.PI) / 4 + Math.PI / 8; // 20–65 degrees
        shootingStars.push({
          x: startX,
          y: startY,
          speedX: Math.cos(angle) * speed,
          speedY: Math.sin(angle) * speed,
          life: 0,
          maxLife: 60 + Math.random() * 40, // frames
        });
      }
    };

    const drawParticles = () => {
      for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
        ctx.fill();
      }
    };

    const drawShootingStars = () => {
      for (let s of shootingStars) {
        const trailLength = 80;
        const grad = ctx.createLinearGradient(
          s.x,
          s.y,
          s.x - s.speedX * 8,
          s.y - s.speedY * 8
        );
        grad.addColorStop(0, "rgba(255,255,255,1)");
        grad.addColorStop(1, "rgba(255,255,255,0)");

        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.speedX * 8, s.y - s.speedY * 8);
        ctx.stroke();
      }
    };

    const updateParticles = () => {
      for (let p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      }
    };

    const updateShootingStars = () => {
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.x += s.speedX;
        s.y += s.speedY;
        s.life++;
        if (
          s.life > s.maxLife ||
          s.x > canvas.width + 100 ||
          s.y > canvas.height + 100
        ) {
          shootingStars.splice(i, 1);
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // faint fade for trailing effect
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      updateParticles();
      updateShootingStars();
      createShootingStar();

      drawParticles();
      drawShootingStars();

      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("resize", resize);
  }, [count, color]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default FloatingParticles;
