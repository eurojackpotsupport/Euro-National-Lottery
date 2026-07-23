export type VaultStep =
  | "locked"
  | "opening"
  | "fingerprint"
  | "verifying"
  | "decrypting"
  | "countdown"
  | "revealed";