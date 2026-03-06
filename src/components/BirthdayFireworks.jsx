import { useEffect, useRef } from "react";

function BirthdayFireworks() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fireworks = [];

    class Firework {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 3 + 2;
        this.color = `hsl(${Math.random() * 360},100%,60%)`;
        this.speedX = (Math.random() - 0.5) * 6;
        this.speedY = (Math.random() - 0.5) * 6;
        this.life = 100;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    function createFirework() {
      const x = Math.random() * canvas.width;
      const y = (Math.random() * canvas.height) / 2;

      for (let i = 0; i < 50; i++) {
        fireworks.push(new Firework(x, y));
      }
    }

    function animate() {
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].draw();

        if (fireworks[i].life <= 0) {
          fireworks.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    }

    setInterval(createFirework, 800);
    animate();
  }, []);

  return (
    <div className="relative w-screen h-screen bg-black flex items-center justify-center px-6 text-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0"></canvas>

      <div className="z-10 space-y-4">
        <h1
          className="text-white font-bold leading-tight
        text-3xl sm:text-4xl md:text-6xl lg:text-7xl
        drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        >
          🎉 Happy Birthday 🎉
        </h1>

        <p
          className="text-white font-semibold
        text-xl sm:text-2xl md:text-3xl
        drop-shadow-[0_0_10px_rgba(255,105,180,0.8)]"
        >
          Unaddd
        </p>
      </div>
    </div>
  );
}

export default BirthdayFireworks;
