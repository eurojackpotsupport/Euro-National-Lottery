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
      className={`group rounded-3xl border ${style.border} bg-[#102C57]/80 backdrop-blur-sm p-6 transition-all duration-300 hover:-translate-y-1 ${style.glow}`}
    >
      {/* Icon */}

      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl text-3xl ${style.icon}`}
      >
        {icon}
      </div>

      {/* Title */}

      <p className="mt-6 text-xs uppercase tracking-[4px] text-slate-400">
        {title}
      </p>

      {/* Value */}

      <h2
        className={`mt-3 text-3xl font-black leading-tight ${style.value}`}
      >
        {value}
      </h2>

      {/* Subtitle */}

      {subtitle && (
        <p className="mt-3 text-sm text-slate-400">
          {subtitle}
        </p>
      )}

      {/* Accent line */}

      <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-yellow-400 to-transparent opacity-70"></div>
    </div>
  );
}