"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Lock, KeyRound, X, Eye, EyeOff } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  onVerify: (code: string) => Promise<void>;
  loading?: boolean;
  error?: string;
};

export default function MembershipModal({
  open,
  onClose,
  onVerify,
  loading = false,
  error = "",
}: Props) {
  const [code, setCode] = useState("");
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setCode("");
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-md rounded-3xl border border-yellow-500/20 bg-[#081B33] shadow-2xl"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 transition hover:bg-white/20"
            >
              <X className="text-white" size={18} />
            </button>

            <div className="p-8">
              {/* Icon */}
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#12345A]">
                <Lock size={40} className="text-yellow-400" />
              </div>

              {/* Header */}
              <div className="mt-6 text-center">
                <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs font-bold tracking-[0.25em] text-yellow-400">
                  MEMBERS ONLY
                </span>

                <h2 className="mt-6 text-3xl font-black text-white">
                  VIP Vault
                </h2>

                <p className="mt-4 leading-7 text-slate-300">
                  Enter your membership code to unlock this package.
                </p>
              </div>

              {/* Input */}
              <div className="mt-8">
                <div className="relative">
  <KeyRound
    size={18}
    className="absolute left-5 top-1/2 -translate-y-1/2 text-yellow-400"
  />

  <input
    type={showCode ? "text" : "password"}
    value={code}
    onChange={(e) => setCode(e.target.value)}
    placeholder="Membership Code"
    className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-14 text-white outline-none transition focus:border-yellow-400"
  />

  <button
    type="button"
    onClick={() => setShowCode(!showCode)}
    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-yellow-400"
    aria-label={showCode ? "Hide membership code" : "Show membership code"}
  >
    {showCode ? <EyeOff size={20} /> : <Eye size={20} />}
  </button>
</div>

                {error && (
                  <p className="mt-3 text-center text-sm text-red-400">
                    {error}
                  </p>
                )}
              </div>

              {/* Verify Button */}
              <button
                disabled={loading || !code.trim()}
                onClick={() => onVerify(code.trim())}
                className="mt-8 w-full rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 py-4 text-lg font-bold text-[#081B33] transition disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Verifying..." : "Verify Membership"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}