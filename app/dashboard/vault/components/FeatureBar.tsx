"use client";

import {
  ShieldCheck,
  Lock,
  Gem,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "256-bit Encryption",
    subtitle: "Military Grade",
  },
  {
    icon: Lock,
    title: "VIP Protected",
    subtitle: "Secure Access",
  },
  {
    icon: Gem,
    title: "Diamond Members",
    subtitle: "Exclusive Access",
  },
  {
    icon: Sparkles,
    title: "Premium Prediction",
    subtitle: "Latest Package",
  },
];

export default function FeatureBar() {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <div
        className="
          rounded-[28px]

          border
          border-white/10

          bg-white/[0.045]

          backdrop-blur-2xl

          shadow-[0_30px_80px_rgba(0,0,0,.45)]

          px-8
          py-7
        "
      >
        <div className="grid grid-cols-4 gap-8">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  flex
                  items-center
                  gap-4
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center

                    rounded-2xl

                    bg-gradient-to-br
                    from-yellow-400/20
                    to-yellow-500/10

                    border
                    border-yellow-400/20

                    text-yellow-400
                  "
                >
                  <Icon size={28} />
                </div>

                {/* Text */}
                <div>
                  <h3
                    className="
                      text-base
                      font-semibold
                      text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-slate-400
                    "
                  >
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}