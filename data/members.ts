export type Member = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  country: string;
  membership: string;
  status: string;
  joined_date: string;
  avatar_url: string;
};

export const members: Member[] = [
  {
    id: "EM-2026-VIP",
    full_name: "Official Member",
    email: "member@example.com",
    phone: "+44 7123 456789",
    country: "Europe",
    membership: "VIP GOLD",
    status: "ACTIVE",
    joined_date: "2026-07-10",
    avatar_url: "/default-avatar.png",
  },
];