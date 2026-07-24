"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Lock, KeyRound, X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MembershipModal({
  open,
  onClose,
}: Props) {
  const [code, setCode] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setCode("");
      setSubmitted(false);
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
            initial={{ scale: .9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: .95, opacity: 0 }}
            transition={{ duration: .25 }}
            className="relative w-full max-w-md rounded-3xl border border-yellow-500/20 bg-[#081B33] shadow-2xl"
          >

            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2"
            >
              <X className="text-white" size={18}/>
            </button>

            <div className="p-8">

              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#12345A]">
                <Lock size={40} className="text-yellow-400"/>
              </div>

              <div className="mt-6 text-center">

                <span className="rounded-full bg-yellow-500/10 border border-yellow-500/20 px-4 py-2 text-xs tracking-[.25em] text-yellow-400 font-bold">
                  MEMBERS ONLY
                </span>

                <h2 className="mt-6 text-3xl font-black text-white">
                  VIP Vault
                </h2>

                <p className="mt-4 text-slate-300 leading-7">
                  Enter your membership code to unlock this package.
                </p>

              </div>

              {!submitted ? (
                <>
                  <div className="mt-8">

                    <div className="relative">

                      <KeyRound
                        size={18}
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-yellow-400"
                      />

                      <input
                        value={code}
                        onChange={(e)=>setCode(e.target.value)}
                        placeholder="Membership Code"
                        className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-4 text-white outline-none focus:border-yellow-400"
                      />

                    </div>

                  </div>

                  <button
                    onClick={()=>setSubmitted(true)}
                    className="mt-8 w-full rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 py-4 text-lg font-bold text-[#081B33]"
                  >
                    Verify Membership
                  </button>
                </>
              ) : (
                <>
                  <div className="mt-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-5 text-center">
                    <h3 className="text-xl font-bold text-yellow-400">
                      Verification Unavailable
                    </h3>

                    <p className="mt-3 text-slate-300">
                      Please contact support to activate your membership.
                    </p>
                  </div>

                  <button
                    onClick={onClose}
                    className="mt-8 w-full rounded-2xl border border-white/10 py-4 text-white"
                  >
                    Close
                  </button>
                </>
              )}

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}