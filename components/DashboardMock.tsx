export function DashboardMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-[0_30px_80px_-30px_rgba(10,16,24,0.25)]">
      <div className="flex items-center justify-between border-b border-ink-100 px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-900" />
          <span className="text-sm font-semibold tracking-tightish text-ink-900">
            Local SEO Dashboard
          </span>
        </div>
        <div className="hidden items-center gap-3 text-xs text-ink-400 md:flex">
          <span>April 2026</span>
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-bold text-emerald-700">
            &#9650; +38% MoM
          </span>
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-full bg-ink-900 text-center text-[10px] font-bold leading-6 text-[#fde68a]">
              JK
            </span>
            <span className="font-semibold text-ink-800">Jordan K.</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-0 bg-[#fafaf9]">
        <aside className="col-span-3 hidden flex-col gap-1 border-r border-ink-100 bg-white px-3 py-5 text-sm md:flex">
          {[
            { label: "Overview", active: true },
            { label: "Rankings" },
            { label: "Reviews" },
            { label: "GBP Posts" },
            { label: "Locations" },
            { label: "Reports" },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center justify-between rounded-md px-3 py-2 ${
                item.active
                  ? "bg-ink-900 text-white"
                  : "text-ink-600 hover:bg-ink-50"
              }`}
            >
              <span className="font-medium">{item.label}</span>
              {item.active && (
                <span className="text-xs text-[#fde68a]">&rarr;</span>
              )}
            </div>
          ))}
        </aside>

        <div className="col-span-12 flex flex-col gap-4 p-5 md:col-span-9">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold tracking-tightish text-ink-900">
                Welcome back, Jordan
              </h3>
              <p className="text-xs text-ink-400">
                Your top 3 keywords held position #1 for 23 of the last 30 days.
              </p>
            </div>
            <button className="rounded-full bg-ink-900 px-4 py-2 text-xs font-medium text-[#fde68a]">
              + New GBP post
            </button>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Top-3 keywords", val: "12", delta: "+3" },
              { label: "GBP impressions", val: "14,287", delta: "+38%" },
              { label: "Phone calls", val: "142", delta: "+22%" },
              { label: "New reviews", val: "8", delta: "4.9 avg" },
            ].map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-xl border border-ink-100 bg-white px-4 py-3"
              >
                <div className="text-[10px] font-semibold uppercase tracking-wider text-ink-400">
                  {kpi.label}
                </div>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="font-mono text-2xl font-bold text-ink-900">
                    {kpi.val}
                  </span>
                  <span className="text-xs font-bold text-emerald-600">
                    {kpi.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-ink-100 bg-white p-4 md:col-span-2">
              <div className="flex items-center justify-between text-xs font-semibold text-ink-400">
                <span>Geo-grid rank · &ldquo;dentist toronto&rdquo;</span>
                <span>Avg pos &mdash; 1.8</span>
              </div>
              <GeoGrid />
            </div>

            <div className="rounded-xl border border-ink-100 bg-white p-4">
              <div className="text-xs font-semibold text-ink-400">
                Latest reviews
              </div>
              <ul className="mt-3 space-y-3 text-xs">
                {[
                  { name: "Sarah K.", stars: 5, note: "Fixed in 30 min." },
                  { name: "David M.", stars: 5, note: "Friendly, clean, fair." },
                  { name: "Priya R.", stars: 4, note: "Solid service, on time." },
                ].map((r) => (
                  <li
                    key={r.name}
                    className="flex flex-col gap-1 rounded-lg border border-ink-100 px-3 py-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-ink-900">
                        {r.name}
                      </span>
                      <span className="text-amber-500">
                        {"★".repeat(r.stars)}
                        <span className="text-ink-200">
                          {"★".repeat(5 - r.stars)}
                        </span>
                      </span>
                    </div>
                    <span className="text-ink-600">{r.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GeoGrid() {
  const cells = Array.from({ length: 49 }, (_, i) => i);
  const rank = (i: number) => {
    const row = Math.floor(i / 7);
    const col = i % 7;
    const dist = Math.abs(row - 3) + Math.abs(col - 3);
    if (dist <= 1) return 1;
    if (dist <= 2) return 2;
    if (dist <= 3) return 3;
    if (dist <= 4) return 5;
    return 8;
  };
  const color = (r: number) => {
    if (r <= 1) return "bg-emerald-500 text-white";
    if (r <= 3) return "bg-emerald-300 text-ink-900";
    if (r <= 5) return "bg-amber-300 text-ink-900";
    return "bg-red-300 text-ink-900";
  };
  return (
    <div className="mt-3 grid grid-cols-7 gap-1">
      {cells.map((i) => {
        const r = rank(i);
        return (
          <div
            key={i}
            className={`flex aspect-square items-center justify-center rounded font-mono text-[10px] font-bold ${color(
              r,
            )}`}
          >
            {r}
          </div>
        );
      })}
    </div>
  );
}
