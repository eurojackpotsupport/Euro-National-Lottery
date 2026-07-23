type Props = {
  title: string;
  value: string;
  color?: string;
};

export default function DashboardCard({
  title,
  value,
  color = "text-yellow-400",
}: Props) {
  return (
    <div className="rounded-2xl bg-[#102b52] border border-yellow-500/20 p-6 hover:border-yellow-400 transition">

      <p className="text-slate-400 text-sm uppercase tracking-widest">
        {title}
      </p>

      <h2 className={`mt-4 text-4xl font-extrabold ${color}`}>
        {value}
      </h2>

    </div>
  );
}