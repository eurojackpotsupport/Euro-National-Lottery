"use client";

const notifications = [
 
  {
    title: "Jackpot Increased",
    date: "09 Jul 2026",
    icon: "💰",
    message: "The current jackpot has increased to €150,000,000.",
  },
  {
    title: "New Results Published",
    date: "07 Jul 2026",
    icon: "🎯",
    message: "The latest EuroMillions draw results are now available.",
  },
  {
    title: "System Maintenance",
    date: "05 Jul 2026",
    icon: "📢",
    message: "Scheduled maintenance completed successfully.",
  },
];

export default function NotificationsPage() {
  return (
    <div className="space-y-8 px-4 py-6 sm:px-6 lg:px-8">

      {/* Header */}

      <div>

        <p className="text-xs font-semibold uppercase tracking-[5px] text-yellow-400 sm:text-sm">
          Notifications
        </p>

        <h1 className="mt-2 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          Notification Center
        </h1>

        <p className="mt-3 max-w-2xl text-sm text-slate-400 sm:text-base">
          Stay updated with the latest membership news and announcements.
        </p>

      </div>

      {/* Notifications */}

      <div className="space-y-5">

        {notifications.map((notification, index) => (

          <div
            key={index}
            className="rounded-2xl border border-yellow-500/20 bg-[#112B52] p-5 transition hover:border-yellow-400 sm:p-6"
          >

            <div className="flex items-start gap-4 sm:gap-5">

              {/* Icon */}

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-500 text-xl sm:h-14 sm:w-14 sm:text-2xl">
                {notification.icon}
              </div>

              {/* Content */}

              <div className="min-w-0 flex-1">

                {/* Mobile */}

                <div className="sm:hidden">

                  <h2 className="text-xl font-bold leading-tight text-white">
                    {notification.title}
                  </h2>

                  <p className="mt-1 text-sm text-slate-400">
                    {notification.date}
                  </p>

                </div>

                {/* Desktop */}

                <div className="hidden items-start justify-between sm:flex">

                  <h2 className="text-2xl font-bold text-white">
                    {notification.title}
                  </h2>

                  <span className="ml-6 whitespace-nowrap text-slate-400">
                    {notification.date}
                  </span>

                </div>

                <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                  {notification.message}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}