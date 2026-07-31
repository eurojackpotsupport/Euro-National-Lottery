"use client";

import HeroCard from "./HeroCard";
import StatsGrid from "./StatsGrid";

type Props = {
  memberId: string;
};

export default function DashboardGrid({ memberId }: Props) {
  return (
   <main className="mx-auto max-w-7xl space-y-8 px-6 pt-0 pb-8 lg:py-8">
      <HeroCard memberId={memberId} />
      <StatsGrid memberId={memberId} />
    </main>
  );
}