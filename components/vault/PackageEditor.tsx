"use client";


type PackageData = {
  package_name: string;
  package_type: string;

  ball1: number | null;
  ball2: number | null;
  ball3: number | null;
  ball4: number | null;
  ball5: number | null;

  star1: number | null;
  star2: number | null;

  draw_date: string;
  code: string;
  active: boolean;
};

type Props = {
  data: PackageData;
  onChange: (field: keyof PackageData, value: any) => void;
  onSave: () => void;
};

export default function PackageEditor({
  data,
  onChange,
  onSave,
}: Props) {
  return (
    <div className="rounded-3xl border border-yellow-500/20 bg-[#0B2345] p-8 mb-8">

      <h2 className="mb-8 text-3xl font-black text-yellow-400">
        {data.package_name}
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

        {[1,2,3,4,5].map((n) => (
          <div key={n}>
            <label className="mb-2 block text-yellow-400">
              Ball {n}
            </label>

            <input
              type="number"
              value={(data as any)[`ball${n}`] ?? ""}
              onChange={(e)=>
                onChange(`ball${n}` as keyof PackageData, Number(e.target.value))
              }
              className="w-full rounded-xl bg-[#10284A] p-3 text-white"
            />
          </div>
        ))}

        <div>
          <label className="mb-2 block text-yellow-400">
            Lucky Star 1
          </label>

          <input
            type="number"
            value={data.star1 ?? ""}
            onChange={(e)=>onChange("star1", Number(e.target.value))}
            className="w-full rounded-xl bg-[#10284A] p-3 text-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-yellow-400">
            Lucky Star 2
          </label>

          <input
            type="number"
            value={data.star2 ?? ""}
            onChange={(e)=>onChange("star2", Number(e.target.value))}
            className="w-full rounded-xl bg-[#10284A] p-3 text-white"
          />
        </div>

        <div className="lg:col-span-2">
          <label className="mb-2 block text-yellow-400">
            Membership Code
          </label>

          <input
            value={data.code}
            onChange={(e)=>onChange("code", e.target.value)}
            className="w-full rounded-xl bg-[#10284A] p-3 text-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-yellow-400">
            Draw Date
          </label>

          <input
            type="date"
            value={data.draw_date}
            onChange={(e)=>onChange("draw_date", e.target.value)}
            className="w-full rounded-xl bg-[#10284A] p-3 text-white"
          />
        </div>

        <div className="flex items-end">
          <label className="flex items-center gap-3 text-white">
            <input
              type="checkbox"
              checked={data.active}
              onChange={(e)=>onChange("active", e.target.checked)}
            />
            Active
          </label>
        </div>

      </div>

      <button
        onClick={onSave}
        className="mt-8 w-full rounded-xl bg-yellow-400 py-4 text-xl font-bold text-black hover:bg-yellow-300"
      >
        Save {data.package_name}
      </button>

    </div>
  );
}