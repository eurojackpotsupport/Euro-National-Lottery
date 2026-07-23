export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#071426]">
      <div className="text-center">
        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-yellow-500 border-t-transparent"></div>
        <p className="mt-6 text-lg font-semibold text-white">
          Opening VIP Vault...
        </p>
      </div>
    </div>
  );
}