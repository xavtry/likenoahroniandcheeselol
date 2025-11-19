import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function App() {
  const canvas = useRef(null);

  useEffect(() => {
    const c = canvas.current.getContext("2d");
    canvas.current.width = innerWidth;
    canvas.current.height = innerHeight;

    const matrix = "67DIDDYBLUD";
    const drops = [];
    for (let i = 0; i < innerWidth / 18; i++) drops[i] = 1;

    const draw = () => {
      c.fillStyle = "rgba(0,0,0,0.04)";
      c.fillRect(0, 0, innerWidth, innerHeight);
      c.fillStyle = "#a855f7";
      c.font = "18px VT323";
      drops.forEach((y, x) => {
        c.fillText(matrix[Math.floor(Math.random() * matrix.length)], x * 18, y * 18);
        if (y * 18 > innerHeight && Math.random() > 0.975) drops[x] = 0;
        drops[x]++;
      });
    };
    setInterval(draw, 33);

    let clicks = 0;
    const ascend = () => {
      if (++clicks === 67) {
        document.body.innerHTML = `<h1 style="color:#f0f;font-size:300px;text-align:center;margin-top:30vh;font-family:Orbitron">67</h1>`;
      }
    };
    window.addEventListener("click", ascend);
  }, []);

  return (
    <>
      <canvas ref={canvas} />
      <div className="portal">67</div>

      <motion.div className="fixed inset-0 flex items-center justify-center text-center">
        <div>
          <h1 style={{fontSize:"28rem",fontWeight:900,background:"linear-gradient(45deg,#a855f7,#ec4899)",WebkitBackgroundClip:"text",backgroundClip:"text",color:"transparent"}}>
            67
          </h1>
          <h2 className="text-9xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            THE DIDDY BLUD
          </h2>
          <p className="text-6xl text-purple-300 animate-bounce mt-10">
            CLICK 67 TIMES TO ASCEND
          </p>
        </div>
      </motion.div>
    </>
  );
}
