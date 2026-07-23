export function generateUniqueMemberId(existingIds: string[]): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  while (true) {
    let id = "EM26-";

    for (let i = 0; i < 4; i++) {
      id += chars[Math.floor(Math.random() * chars.length)];
    }

    id += "-";

    for (let i = 0; i < 4; i++) {
      id += chars[Math.floor(Math.random() * chars.length)];
    }

    if (!existingIds.includes(id)) {
      return id;
    }
  }
}