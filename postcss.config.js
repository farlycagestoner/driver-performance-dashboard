@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #07131f;
  --panel: #0f1f2d;
  --panel-soft: #162b3d;
  --card: #122436;
  --muted: #8aa0b4;
  --text: #e5edf5;
  --line: rgba(148, 163, 184, 0.16);
  --green: #2dd4bf;
  --amber: #fbbf24;
  --red: #f87171;
  --blue: #60a5fa;
  --purple: #a78bfa;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background:
    radial-gradient(circle at top left, rgba(96, 165, 250, 0.12), transparent 26%),
    radial-gradient(circle at bottom right, rgba(45, 212, 191, 0.09), transparent 22%),
    var(--background);
  color: var(--text);
  font-family: Arial, Helvetica, sans-serif;
}

* {
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  background: rgba(148, 163, 184, 0.32);
  border-radius: 10px;
}

.app-shell {
  min-height: 100vh;
  padding: 24px;
}

.panel {
  background: rgba(15, 31, 45, 0.88);
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: 0 12px 30px rgba(3, 7, 18, 0.24);
}

.kpi-card {
  background: linear-gradient(180deg, rgba(18, 36, 54, 0.9), rgba(12, 25, 36, 0.9));
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 18px;
}

.metric-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 700;
}

.progress-bar {
  position: relative;
  height: 10px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.18);
  overflow: hidden;
}

.progress-fill {
  position: absolute;
  inset: 0 auto 0 0;
  border-radius: 999px;
}

.score-ring {
  width: 92px;
  height: 92px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: conic-gradient(var(--color) calc(var(--score) * 1%), rgba(148, 163, 184, 0.14) 0);
}

.score-ring::before {
  content: "";
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--panel);
  display: block;
  position: relative;
  z-index: 0;
}

.score-ring-inner {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  padding: 12px 14px;
  border-bottom: 1px solid var(--line);
  text-align: left;
}

.data-table th {
  color: var(--muted);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.driver-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 11px;
  font-weight: 700;
  background: linear-gradient(135deg, rgba(96,165,250,.25), rgba(167,139,250,.25));
  color: #dbeafe;
  border: 1px solid rgba(148,163,184,.18);
}

.tile {
  background: rgba(15, 31, 45, 0.8);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 18px;
}

.chart-bars {
  height: 180px;
  display: flex;
  align-items: end;
  gap: 12px;
}

.chart-bar {
  flex: 1;
  border-radius: 12px 12px 0 0;
  min-height: 24px;
  background: linear-gradient(180deg, rgba(96,165,250,.9), rgba(45,212,191,.72));
}
