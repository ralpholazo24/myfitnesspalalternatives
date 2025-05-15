'use client';
import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // TODO: Implement newsletter subscription logic
    // For now, we'll just simulate a successful subscription
    setTimeout(() => {
      setStatus('success');
      setEmail("");
    }, 1000);
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-2xl w-full text-center">
        <h2 className="text-2xl md:text-3xl font-mono font-bold mb-4">
          Get Notified About New MyFitnessPal Alternatives
        </h2>
        <p className="text-base md:text-lg mb-8">
          Subscribe to our simple newsletter for updates on fresh MyFitnessPal competitors. No spam, just new.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-2 rounded-md border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-2 bg-[var(--accent)] text-white rounded-md hover:bg-[var(--accent-secondary)] transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        
        {status === 'success' && (
          <p className="mt-4 text-green-600">Thanks for subscribing! We'll keep you updated.</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-600">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  );
} 