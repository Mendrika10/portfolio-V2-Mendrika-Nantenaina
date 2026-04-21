"use client";
import { useEffect, useRef } from "react";

export function CryptoRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const CHARS =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;,.<>?/~`\\${}[]<>#@!%*";

    const FS = 13;
    const colW = 10;
    let cols = Math.floor(canvas.width / colW);
    let drops = Array.from(
      { length: cols },
      () => Math.random() * -(canvas.height / FS) * 2,
    );
    const speeds = Array.from(
      { length: cols },
      () => 0.4 + Math.random() * 0.8,
    );

    const draw = () => {
      const W = canvas.width,
        H = canvas.height;
      ctx.fillStyle = "rgba(10,10,18,0.12)";
      ctx.fillRect(0, 0, W, H);
      ctx.font = `bold ${FS}px monospace`;

      cols = Math.floor(W / colW);
      while (drops.length < cols) drops.push(Math.random() * -(H / FS));

      for (let i = 0; i < cols; i++) {
        const y = drops[i] * FS;
        const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
        const r = Math.random();

        if (drops[i] > 0 && drops[i] < 2) {
          ctx.fillStyle = "rgba(255,255,255,1)";
        } else if (r > 0.88) {
          ctx.fillStyle = "rgba(0,212,255,1)";
        } else if (r > 0.6) {
          ctx.fillStyle = "rgba(0,212,255,0.85)";
        } else if (r > 0.35) {
          ctx.fillStyle = "rgba(0,127,153,0.65)";
        } else {
          ctx.fillStyle = "rgba(0,63,76,0.4)";
        }

        ctx.fillText(ch, i * colW, y);
        if (y > H && Math.random() > 0.97) drops[i] = 0;
        drops[i] += speeds[i] ?? 0.5;
      }
    };

    const interval = setInterval(draw, 35);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        minHeight: "320px",
        borderRadius: "12px",
        background: "#0a0a12",
        display: "block",
      }}
    />
  );
}
