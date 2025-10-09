'use client';

import { useState } from 'react';

export default function Home() {
  const [results, setResults] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchResults = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:3000/results');
      const data = await res.json();
      setResults(data.results);
    } catch (error) {
      console.error('Error fetching results:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">ボートレースアプリ</h1>

      <button
        onClick={fetchResults}
        disabled={loading}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? '読み込み中...' : 'スタート'}
      </button>

      {results.length > 0 && (
        <div className="mt-6 text-xl font-semibold">
          結果: {results.join(', ')}
        </div>
      )}
    </main>
  );
}
