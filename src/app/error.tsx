'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error('Captured error:', error);
  }, [error]);

  return (
    <html>
      <body className="min-h-screen flex flex-col items-center justify-center bg-red-100 text-red-800 p-8">
        <h2 className="text-3xl font-bold mb-4">Noget gik galt</h2>
        <p className="mb-6">Der opstod en uventet fejl.</p>
        <button
          onClick={reset}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Prøv igen
        </button>
      </body>
    </html>
  );
}
