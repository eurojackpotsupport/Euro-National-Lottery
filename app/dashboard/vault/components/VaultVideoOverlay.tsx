"use client";

import { useEffect, useState } from "react";

type Props = {
  open: boolean;
  onFinished: () => void;
};

export default function VaultVideoOverlay({
  open,
  onFinished,
}: Props) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      setMobile(window.innerWidth < 768);
    };

    check();

    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-black">

      <video
        autoPlay
        playsInline
        className="h-full w-full object-cover"
        onEnded={onFinished}
      >
        <source
          src={
            mobile
              ? "/videos/vault-mobile.mp4"
              : "/videos/vault-desktop.mp4"
          }
          type="video/mp4"
        />
      </video>

    </div>
  );
}