import { KPI, performanceData, tripHistory, routeSummary } from '@/lib/mock-data';

function KpiCard({ title, value, delta, trend, tone }: KPI) {
  const toneMap = {
    green: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/15',
    amber: 'bg-amber-500/10 text-amber-300 border border-amber-500/15',
    red: 'bg-rose-500/10 text-rose-300 border border-rose-500/15',
    blue: 'bg-sky-500/10 text-sky-300 border border-sky-500/15',
  };

  return (
    <div className="kpi-card">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm text-slate-300">{title}</p>
        <span className={`metric-pill ${toneMap[tone]}`}>{trend}</span>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <h3 className="text-3xl font-bold text-white">{value}</h3>
          <p className="mt-2 text-sm text-slate-400">{delta}</p>
        </div>
      </div>
    </div>
  );
}

function ScoreRing({ score, label, color }: { score: number; label: string; color: string }) {
  const ringStyle = {
    ['--score' as string]: score,
    ['--color' as string]: color,
  };

  return (
    <div className="relative flex flex-col items-center justify-center gap-2">
      <div className="score-ring" style={ringStyle}>
        <div className="score-ring-inner">{score}</div>
      </div>
      <span className="text-xs uppercase tracking-[0.18em] text-slate-400">{label}</span>
    </div>
  );
}

export default function HomePage() {
  const highlight = performanceData[0];

  return (
    <main className="app-shell">
      <div className="mx-auto max-w-7xl">
        <header className="panel mb-6 px-6 py-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-300">Fleet performance</p>
              <h1 className="text-3xl font-bold text-white">Driver Performance Dashboard</h1>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="metric-pill bg-sky-500/10 text-sky-300 border border-sky-500/15">Fleet: 148 drivers</span>
              <span className="metric-pill bg-emerald-500/10 text-emerald-300 border border-emerald-500/15">Avg score: 87/100</span>
              <span className="metric-pill bg-amber-500/10 text-amber-300 border border-amber-500/15">Bonus-ready: 62%</span>
            </div>
          </div>
        </header>

        <section className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {performanceData.map((item) => (
            <KpiCard key={item.title} {...item} />
          ))}
        </section>

        <section className="mb-6 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
          <div className="panel p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Performance overview</p>
                <h2 className="mt-2 text-xl font-bold text-white">Driver standard score</h2>
              </div>
              <span className="metric-pill bg-emerald-500/10 text-emerald-300 border border-emerald-500/15">+3.8% vs last month</span>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <ScoreRing score={92} label="Safety" color="#2dd4bf" />
              <ScoreRing score={88} label="Operation" color="#60a5fa" />
              <ScoreRing score={91} label="Compliance" color="#a78bfa" />
            </div>

            <div className="mt-8">
              <div className="mb-4 flex items-center justify-between text-sm text-slate-300">
                <span>Driver score trend</span>
                <span className="text-slate-400">Last 12 weeks</span>
              </div>
              <div className="chart-bars">
                {[46, 56, 54, 68, 72, 79, 82, 91, 88, 93, 94, 96].map((value, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center justify-end gap-2">
                    <div
                      className="chart-bar w-full"
                      style={{ height: `${value}%` }}
                    />
                    <span className="text-[10px] uppercase tracking-[0.14em] text-slate-500">{['J','F','M','A','M','J','J','A','S','O','N','D'][idx]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="panel p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Top driver</p>
            <div className="mt-5 flex items-center gap-4">
              <div className="driver-avatar text-lg">AR</div>
              <div>
                <h3 className="text-xl font-bold text-white">Ari Pratama</h3>
                <p className="text-sm text-slate-400">SPBU - West route</p>
              </div>
            </div>

            <div className="mt-8 space-y-5">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                  <span>Safety score</span>
                  <span className="font-bold text-white">95</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill bg-gradient-to-r from-emerald-400 to-teal-400" style={{ width: '95%' }} />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                  <span>Operation score</span>
                  <span className="font-bold text-white">90</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill bg-gradient-to-r from-sky-400 to-blue-500" style={{ width: '90%' }} />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                  <span>Compliance score</span>
                  <span className="font-bold text-white">97</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill bg-gradient-to-r from-violet-400 to-purple-500" style={{ width: '97%' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="panel p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Driver ranking</p>
                <h2 className="mt-2 text-xl font-bold text-white">Performance leaderboard</h2>
              </div>
              <button className="metric-pill bg-slate-800 text-slate-200 border border-slate-600">Export</button>
            </div>

            <table className="data-table">
              <thead>
                <tr>
                  <th>Driver</th>
                  <th>Score</th>
                  <th>Trips</th>
                  <th>Safety</th>
                  <th>Reward</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Ari Pratama', score: 95, trips: 41, safety: 'Excellent', reward: 'Eligible' },
                  { name: 'M. Fadli', score: 92, trips: 38, safety: 'Excellent', reward: 'Eligible' },
                  { name: 'Dina Kusuma', score: 89, trips: 34, safety: 'Good', reward: 'Eligible' },
                  { name: 'Rizky H.', score: 84, trips: 31, safety: 'Fair', reward: 'Review' },
                  { name: 'Iwan S.', score: 76, trips: 29, safety: 'Needs attention', reward: 'Review' },
                ].map((driver) => (
                  <tr key={driver.name}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="driver-avatar">{driver.name.split(' ').map((n) => n[0]).slice(0,2).join('')}</div>
                        <span>{driver.name}</span>
                      </div>
                    </td>
                    <td className="font-bold text-white">{driver.score}</td>
                    <td>{driver.trips}</td>
                    <td>{driver.safety}</td>
                    <td>
                      <span className={`metric-pill ${driver.reward === 'Eligible' ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/15' : 'bg-amber-500/10 text-amber-300 border border-amber-500/15'}`}>
                        {driver.reward}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="panel p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Risk alerts</p>
            <h2 className="mt-2 text-xl font-bold text-white">Safety focus points</h2>

            <div className="mt-6 space-y-4">
              {[
                { label: 'Harsh braking', value: '12 events', tone: 'red' },
                { label: 'Overspeed', value: '8 zones', tone: 'amber' },
                { label: 'Idling', value: '14 hrs', tone: 'blue' },
                { label: 'Fatigue detection', value: '3 alerts', tone: 'purple' },
              ].map((alert) => (
                <div key={alert.label} className="tile">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-300">{alert.label}</p>
                    <span className={`metric-pill ${alert.tone === 'red' ? 'bg-rose-500/10 text-rose-300 border border-rose-500/15' : alert.tone === 'amber' ? 'bg-amber-500/10 text-amber-300 border border-amber-500/15' : alert.tone === 'blue' ? 'bg-sky-500/10 text-sky-300 border border-sky-500/15' : 'bg-violet-500/10 text-violet-300 border border-violet-500/15'}`}>
                      {alert.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="panel p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Operational detail</p>
              <h2 className="mt-2 text-xl font-bold text-white">Recent trips</h2>
            </div>
            <span className="metric-pill bg-slate-800 text-slate-200 border border-slate-600">Updated 1h ago</span>
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Driver</th>
                <th>SPBU</th>
                <th>Trip window</th>
                <th>Target</th>
                <th>Throughput</th>
                <th>Mileage</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {tripHistory.map((trip) => (
                <tr key={trip.id}>
                  <td>{trip.id}</td>
                  <td>{trip.driver}</td>
                  <td>{trip.destination}</td>
                  <td>{trip.window}</td>
                  <td>{trip.target}</td>
                  <td>{trip.throughput}</td>
                  <td>{trip.mileage}</td>
                  <td>
                    <span className={`metric-pill ${trip.status === 'On time' ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/15' : trip.status === 'At risk' ? 'bg-amber-500/10 text-amber-300 border border-amber-500/15' : 'bg-rose-500/10 text-rose-300 border border-rose-500/15'}`}>
                      {trip.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}
