"use client";

import { motion } from "framer-motion";

type Props = {
  onSuccess: () => void;
};

export default function FingerprintScanner({ onSuccess }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        onClick={onSuccess}
        className="
          relative
          flex
          h-40
          w-40
          items-center
          justify-center
          rounded-full
          border
          border-cyan-400/40
          bg-[#081B33]
          shadow-[0_0_45px_rgba(34,211,238,.25)]
        "
      >
        {/* Pulse Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border border-cyan-400"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.8, 0, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        <svg
          width="82"
          height="82"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#22D3EE"
          strokeWidth="1.5"
        >
          <path d="M12 3C8.7 3 6 5.7 6 9v2m12-2c0-3.3-2.7-6-6-6m0 18v-5m-4-4v4c0 2.2 1.8 4 4 4m4-8v4c0 2.2-1.8 4-4 4m-2-8v6m4-6v6m-8-2v2m12-2v2" />
        </svg>
      </motion.button>

      <h2 className="mt-8 text-2xl font-bold text-cyan-300">
        Biometric Authentication
      </h2>

      <p className="mt-3 max-w-md text-center text-slate-400">
        Touch the fingerprint scanner to verify your VIP membership.
      </p>
    </div>
  );
}