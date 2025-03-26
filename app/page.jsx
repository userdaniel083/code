
'use client';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const [apiMessage, setApiMessage] = useState('');

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => setApiMessage(data.message));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-2xl font-bold">Welkom bij mijn Next.js Applicatie</h1>
        <p>{apiMessage}</p>
      </main>
      <Footer />
    </div>
  );
}
