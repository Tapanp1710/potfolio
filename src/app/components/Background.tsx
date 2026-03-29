// "use client";

// import { useEffect, useRef } from "react";

// export default function Background() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current!;
//     const ctx = canvas.getContext("2d")!;

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*";
//     const fontSize = 14;
//     const columns = canvas.width / fontSize;

//     const drops: number[] = Array(Math.floor(columns)).fill(1);

//     function draw() {
//       ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       ctx.fillStyle = "#888"; // subtle gray (not green)
//       ctx.font = `${fontSize}px monospace`;

//       for (let i = 0; i < drops.length; i++) {
//         const text = letters[Math.floor(Math.random() * letters.length)];

//         ctx.fillText(text, i * fontSize, drops[i] * fontSize);

//         if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
//           drops[i] = 0;
//         }

//         drops[i]++;
//       }
//     }

//     const interval = setInterval(draw, 40);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         zIndex: -1,
//       }}
//     />
//   );
// }
 

"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef } from "react";

function Particles() {
    const ref = useRef<any>(null);
  const count = 2000;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = t * 0.05;
    ref.current.rotation.y = t * 0.08;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function Background() {
  return (
    <div className="hero-bg">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <Particles />
      </Canvas>
    </div>
  );
}