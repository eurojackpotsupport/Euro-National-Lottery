"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import StatCard from "./StatCard";
import LatestDrawCard from "./LatestDrawCard";

type Props = {
  memberId: string;
};

export default function StatsGrid({ memberId }: Props) {
  const [member, setMember] = useState<any>(null);
  const [jackpot, setJackpot] = useState<any>(null);
  const [results, setResults] = useState<any>(null);

  useEffect(() => {
    loadData();
  }, [memberId]);

  async function loadData() {
  try {
    // Member
    const { data: member, error: memberError } = await supabase
      .from("members")
      .select("*")
      .eq("id", memberId)
      .single();

    // Jackpot
    const { data: jackpot, error: jackpotError } = await supabase
      .from("jackpot")
      .select("*")
      .order("id", { ascending: false })
      .limit(1)
      .single();

    // Latest 5 Results
    const { data: resultsList, error: resultsError } = await supabase
      .from("results")
      .select("*")
      .order("draw_date", { ascending: false })
      .limit(5);

    if (memberError) console.error(memberError);
    if (jackpotError) console.error(jackpotError);
    if (resultsError) console.error(resultsError);


    const latestResult = resultsList?.[0] ?? null;

    setMember(member);
    setJackpot(jackpot);
    setResults(latestResult);
  } catch (err) {
    console.error(err);
  }
}

  return (
    <div className="space-y-6">

      {/* Top Row */}

      <div className="grid gap-6 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <StatCard
            icon="💰"
            title="Current Jackpot"
            value={jackpot?.amount ?? "€0"}
            subtitle={`Next Draw: ${jackpot?.next_draw ?? "-"}`}
            color="yellow"
          />
        </div>

        <StatCard
          icon="👑"
          title="Membership"
          value={member?.membership ?? "-"}
          subtitle={member?.status ?? "-"}
          color="green"
        />

      </div>

      {/* Latest Draw */}

      <LatestDrawCard results={results} />

      {/* Support */}

      <StatCard
        icon="🛡"
        title="Support"
        value="24 / 7"
        subtitle="Official Membership Support"
      />

    </div>
  );
}