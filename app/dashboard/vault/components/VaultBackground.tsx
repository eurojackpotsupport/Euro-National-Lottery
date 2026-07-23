"use client";

export default function VaultBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Base Background */}
      <div className="absolute inset-0 bg-[#071426]" />

      {/* Top Blue Glow */}
      <div
        className="
          absolute
          left-1/2
          top-[-220px]
          h-[900px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[220px]
        "
      />

      {/* Center Gold Glow */}
      <div
        className="
          absolute
          left-1/2
          top-[42%]
          h-[900px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-yellow-400/12
          blur-[220px]
        "
      />

      {/* Left Blue Glow */}
      <div
        className="
          absolute
          left-[-260px]
          top-1/3
          h-[700px]
          w-[700px]
          rounded-full
          bg-blue-500/8
          blur-[220px]
        "
      />

      {/* Right Purple Glow */}
      <div
        className="
          absolute
          right-[-260px]
          top-1/3
          h-[700px]
          w-[700px]
          rounded-full
          bg-indigo-500/8
          blur-[220px]
        "
      />

      {/* Bottom Gold Glow */}
      <div
        className="
          absolute
          left-1/2
          bottom-[-180px]
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-yellow-500/8
          blur-[200px]
        "
      />

      {/* Radial Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,.18)_65%,rgba(0,0,0,.62)_100%)]
        "
      />

      {/* Grid Pattern */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
          [background-size:64px_64px]
        "
      />

      {/* Bottom Fade */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-80
          bg-gradient-to-t
          from-[#030914]
          via-[#071426]/60
          to-transparent
        "
      />

      {/* Soft Vignette */}
      <div
        className="
          absolute
          inset-0
          shadow-[inset_0_0_220px_rgba(0,0,0,.65)]
        "
      />

    </div>
  );
}