"use client";

type Props = {
  icon: string;
  title: string;
  value: string;
  subtitle?: string;
  color?: "yellow" | "green" | "blue";
};

export default function StatCard({
  icon,
  title,
  value,
  subtitle,
  color = "blue",
}: Props) {
  const colors = {
    yellow: {
      border: "border-yellow-500/20",
      icon: "bg-yellow-500/15 text-yellow-400",
      value: "text-yellow-400",
      glow: "hover:shadow-[0_0_30px_rgba(250,204,21,0.15)]",
    },

    green: {
      border: "border-green-500/20",
      icon: "bg-green-500/15 text-green-400",
      value: "text-green-400",
      glow: "hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]",
    },

    blue: {
      border: "border-blue-500/20",
      icon: "bg-blue-500/15 text-blue-300",
      value: "text-white",
      glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    },
  };

  const style = colors[color];

  return (
  <div
    className={`
      group
      relative
      overflow-hidden
      rounded-[30px]
      border
      ${style.border}
      bg-gradient-to-br
      from-[#102C57]/95
      via-[#123A68]/90
      to-[#0A1F3D]/95
      p-7
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-2
      ${style.glow}
    `}
  >
    {/* Gold Glow */}
    <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl" />

    {/* Shine */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-1/2 top-0 h-full w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-700 group-hover:left-[140%] group-hover:opacity-100" />
    </div>

    <div className="relative z-10">

      {/* Icon */}

      <div
        className={`
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          text-3xl
          shadow-lg
          ${style.icon}
        `}
      >
        {icon}
      </div>

      {/* Title */}

      <p className="mt-6 text-[11px] font-semibold uppercase tracking-[5px] text-slate-400">
        {title}
      </p>

      {/* Value */}

      <h2
        className={`mt-4 text-4xl font-black leading-none ${style.value}`}
      >
        {value}
      </h2>

      {/* Subtitle */}

      {subtitle && (
        <p className="mt-4 text-sm leading-6 text-slate-300">
          {subtitle}
        </p>
      )}

      {/* Bottom Accent */}

      <div className="mt-7 flex items-center gap-3">

        <div className="h-[3px] w-20 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-transparent" />

        <div className="h-2 w-2 rounded-full bg-yellow-400" />

      </div>

    </div>
  </div>
);
}