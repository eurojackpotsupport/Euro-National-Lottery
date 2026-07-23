type NumberBallProps = {
  number: number;
  type?: "main" | "star";
  size?: "sm" | "md" | "lg";
};

export default function NumberBall({
  number,
  type = "main",
  size = "md",
}: NumberBallProps) {
  const sizeMap = {
    sm: "w-9 h-9 text-sm",
    md: "w-11 h-11 text-base",
    lg: "w-14 h-14 text-xl",
  };

  const blue =
    "bg-gradient-to-b from-blue-300 via-blue-500 to-blue-800 border border-blue-200 text-white shadow-[0_0_18px_rgba(59,130,246,.45)]";

  const gold =
    "bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 border border-yellow-100 text-slate-900 shadow-[0_0_18px_rgba(250,204,21,.45)]";

  return (
    <div
      className={`
        ${sizeMap[size]}
        ${type === "main" ? blue : gold}
        rounded-full
        flex
        items-center
        justify-center
        font-black
        transition-all
        duration-300
        hover:scale-110
        hover:rotate-6
        select-none
      `}
    >
      {number}
    </div>
  );
}