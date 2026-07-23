"use client";

const particles = [
  { x: "8%", y: "12%", s: 2, d: "0s" },
  { x: "15%", y: "24%", s: 3, d: ".5s" },
  { x: "22%", y: "40%", s: 2, d: "1.2s" },
  { x: "28%", y: "18%", s: 4, d: "2.1s" },
  { x: "34%", y: "58%", s: 2, d: ".8s" },
  { x: "42%", y: "26%", s: 3, d: "1.7s" },
  { x: "48%", y: "70%", s: 2, d: ".2s" },
  { x: "55%", y: "15%", s: 3, d: "2.5s" },
  { x: "62%", y: "48%", s: 2, d: "1.1s" },
  { x: "69%", y: "28%", s: 4, d: "3s" },
  { x: "76%", y: "62%", s: 2, d: ".9s" },
  { x: "82%", y: "20%", s: 3, d: "2.2s" },
  { x: "88%", y: "42%", s: 2, d: "1.5s" },
  { x: "92%", y: "68%", s: 3, d: ".4s" },
  { x: "12%", y: "78%", s: 2, d: "2.8s" },
  { x: "38%", y: "82%", s: 3, d: "1.9s" },
  { x: "58%", y: "84%", s: 2, d: ".7s" },
  { x: "72%", y: "80%", s: 3, d: "2.6s" },
];

export default function GoldParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, index) => (
        <span
          key={index}
          className="absolute rounded-full animate-[sparkle_4s_ease-in-out_infinite]"
          style={{
            left: p.x,
            top: p.y,
            width: `${p.s}px`,
            height: `${p.s}px`,
            animationDelay: p.d,
            background: "#FACC15",
            boxShadow:
              "0 0 8px rgba(250,204,21,.9), 0 0 16px rgba(250,204,21,.45)",
          }}
        />
      ))}
    </div>
  );
}