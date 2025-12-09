"use client";
import React, { useRef, useEffect } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const gridSpacing = 50; // spacing for grid lines

    let particles: Particle[] = [];
    const particleCount = 20;
    for (let i = 0; i < particleCount; i++) {
      // Randomly decide if this bullet will travel horizontally or vertically.
      const orientation = Math.random() < 0.5 ? "horizontal" : "vertical";
      if (orientation === "horizontal") {
        // Fix y to a grid line; x is random.
        const y =
          Math.floor(Math.random() * (height / gridSpacing)) * gridSpacing;
        const x = Math.random() * width;
        particles.push({
          x,
          y,
          vx: (Math.random() < 0.5 ? 1 : -1) * 1.0, // constant horizontal speed
          vy: 0,
          size: Math.random() * 0.5 + 0.5, // smaller bullet size
        });
      } else {
        // Fix x to a grid line; y is random.
        const x =
          Math.floor(Math.random() * (width / gridSpacing)) * gridSpacing;
        const y = Math.random() * height;
        particles.push({
          x,
          y,
          vx: 0,
          vy: (Math.random() < 0.5 ? 1 : -1) * 1.0, // constant vertical speed
          size: Math.random() * 0.5 + 0.5,
        });
      }
    }

    const handleResize = (): void => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    let animationFrameId: number;
    const animate = () => {
      // Draw a semi-transparent overlay to create a fading trail effect.

      // This returns a MediaQueryList object
      const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
      // To get the current state:
      const isSystemDark = darkModeQuery.matches; // Returns true or false

      ctx.fillStyle = isSystemDark
        ? "rgba(0, 0, 0, 0.1)"
        : "rgba(255, 255, 255, 0.1)";
      ctx.fillRect(0, 0, width, height);

      // Draw grid lines.
      ctx.strokeStyle = isSystemDark
        ? "rgba(255, 255, 255, 0.05)"
        : "rgba(0, 0, 0, 0.05)";
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and draw the particles.
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce particles off the canvas edges based on the axis they're moving on.
        if (p.vx !== 0 && (p.x < 0 || p.x > width)) {
          p.vx *= -1;
        }
        if (p.vy !== 0 && (p.y < 0 || p.y > height)) {
          p.vy *= -1;
        }

        // Create a smaller radial gradient for the particle.
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size * 3
        );
        gradient.addColorStop(
          0,
          isSystemDark ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)"
        );
        gradient.addColorStop(
          1,
          isSystemDark ? "rgba(255, 255, 255, 0)" : "rgba(0, 0, 0, 0)"
        );
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        backgroundColor: "#000",
      }}
    />
  );
};

export default AnimatedBackground;
