import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { FaChartLine, FaCoins } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";

ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const usageDemo = [
  { date: "2025-06-20", tokens: 18600, cost: 0.05 },
  { date: "2025-06-21", tokens: 0, cost: 0 },
  { date: "2025-06-22", tokens: 0, cost: 0 },
  { date: "2025-06-23", tokens: 0, cost: 0 },
  { date: "2025-06-24", tokens: 0, cost: 0 },
  { date: "2025-06-25", tokens: 0, cost: 0 },
  { date: "2025-06-26", tokens: 0, cost: 0 },
];
const summaryDemo = {
  tokens: usageDemo.reduce((a, b) => a + b.tokens, 0),
  cost: usageDemo.reduce((a, b) => a + b.cost, 0),
};

const UsagePage = () => {
  const [usage] = useState(usageDemo);
  const [summary] = useState(summaryDemo);
  const [loading] = useState(false);
  const [error] = useState(null);
  const [dateRange, setDateRange] = useState({ from: "", to: "" });

  useEffect(() => {
    // Pas d'appel API, données statiques
  }, [dateRange]);

  const dataTokens = {
    labels: usage.map((u) => u.date),
    datasets: [
      {
        label: "Tokens utilisés",
        data: usage.map((u) => u.tokens),
        borderColor: "#2563eb",
        backgroundColor: "#2563eb22",
        tension: 0.3,
        fill: true,
        pointRadius: 3,
      },
    ],
  };

  const dataCost = {
    labels: usage.map((u) => u.date),
    datasets: [
      {
        label: "Coût journalier ($)",
        data: usage.map((u) => u.cost),
        backgroundColor: "#16a34a99",
        borderColor: "#16a34a",
        borderWidth: 1,
        barPercentage: 0.6,
      },
    ],
  };

  const optionsLine = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Évolution des tokens utilisés par jour", font: { size: 18 } },
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: "Tokens" } },
      x: { title: { display: true, text: "Date" } },
    },
  };

  const optionsBar = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Coût OpenAI par jour ($)", font: { size: 18 } },
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: "Coût ($)" } },
      x: { title: { display: true, text: "Date" } },
    },
  };

  return (
    <div className="max-w-6xl mx-auto w-full p-6">
      <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
        <FaChartLine className="text-blue-600" /> Statistiques d’usage OpenAI
      </h1>
      {/* Résumé rapide */}
      <div className="flex flex-col sm:flex-row gap-6 mb-10">
        <div className="flex-1 bg-white rounded-lg shadow-sm p-6 flex items-center gap-4 border border-blue-100 relative">
          <div className="bg-blue-100 text-blue-700 rounded-full p-3 text-3xl"><FaChartLine /></div>
          <div>
            <div className="text-gray-700 text-lg font-semibold mb-1 flex items-center gap-2">
              Tokens utilisés <span className="hidden sm:inline">ce mois</span>
              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded bg-blue-200 text-blue-800 text-xs font-bold"><MdCalendarMonth className="mr-1" />Ce mois</span>
            </div>
            <div className="text-2xl font-bold text-blue-700 tracking-wide">{summary.tokens.toLocaleString()}</div>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-lg shadow-sm p-6 flex items-center gap-4 border border-green-100">
          <div className="bg-green-100 text-green-700 rounded-full p-3 text-3xl"><FaCoins /></div>
          <div>
            <div className="text-gray-700 text-lg font-semibold mb-1">Coût estimé OpenAI</div>
            <div className="text-2xl font-bold text-green-700 tracking-wide">{summary.cost.toFixed(2)} $</div>
          </div>
        </div>
      </div>
      {/* Filtres période */}
      <div className="mb-8 flex flex-wrap gap-4 items-end">
        <div>
          <label className="block text-gray-700 font-medium">Du</label>
          <input type="date" value={dateRange.from} onChange={e => setDateRange(r => ({ ...r, from: e.target.value }))} className="border rounded px-2 py-1" />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Au</label>
          <input type="date" value={dateRange.to} onChange={e => setDateRange(r => ({ ...r, to: e.target.value }))} className="border rounded px-2 py-1" />
        </div>
        {/* Espace pour export CSV ou comparatif futur */}
        <div className="flex-1 text-right text-gray-400 italic text-sm hidden sm:block">Export CSV et comparatif mensuel à venir…</div>
      </div>
      {/* Graphiques */}
      {loading ? (
        <div>Chargement...</div>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <Line data={dataTokens} options={optionsLine} height={300} />
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <Bar data={dataCost} options={optionsBar} height={300} />
          </div>
        </div>
        {/* Tableau de journalisation */}
        <div className="bg-white rounded-lg shadow-sm p-6 overflow-x-auto">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><FaChartLine className="text-blue-600" /> Journal d’usage quotidien</h2>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-2 px-2 font-bold text-gray-900">Date</th>
                <th className="py-2 px-2 font-bold text-gray-900">Tokens</th>
                <th className="py-2 px-2 font-bold text-gray-900">Coût ($)</th>
              </tr>
            </thead>
            <tbody>
              {usage.map((row, idx) => (
                <tr key={row.date || idx} className="border-b border-gray-100 last:border-b-0">
                  <td className="py-2 px-2 text-gray-900">{row.date}</td>
                  <td className="py-2 px-2 text-blue-700 font-semibold">{row.tokens.toLocaleString()}</td>
                  <td className="py-2 px-2 text-green-700 font-semibold">{row.cost.toFixed(4)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </>
      )}
    </div>
  );
};

export default UsagePage;
