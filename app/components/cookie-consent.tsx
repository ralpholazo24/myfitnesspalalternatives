'use client';

import { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { CookieConsent as CookieConsentType, getCookieConsent, setCookieConsent } from '@/lib/cookies';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [consent, setConsent] = useState<CookieConsentType>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const savedConsent = getCookieConsent();
    if (!savedConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const newConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setConsent(newConsent);
    setCookieConsent(newConsent);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    setCookieConsent(consent);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      {!isExpanded ? (
        <div className="bg-[var(--accent)] rounded-lg shadow-xl border border-[var(--accent-secondary)]">
          <div className="px-4 py-3">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-sm text-[var(--card-background)] text-center sm:text-left">
              🍪 I need to tell you about cookies. My site uses cookies. If you continue to use the site I'll assume you're alright with that.
              </p>
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={() => setIsExpanded(true)}
                  className="px-3 py-1.5 text-sm font-medium text-[var(--accent)] bg-[var(--card-background)] rounded-md hover:bg-[var(--card-background)]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent)]"
                >
                  Customize
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-3 py-1.5 text-sm font-medium text-[var(--accent)] bg-[var(--card-background)] rounded-md hover:bg-[var(--card-background)]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent)]"
                >
                  I'm alright with cookies
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[var(--accent)] rounded-lg shadow-xl border border-[var(--accent-secondary)]">
          <div className="px-4 py-3">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold text-[var(--card-background)]">
                  Cookie Preferences
                </h3>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-[var(--card-background)] hover:text-[var(--card-background)]/80"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-[var(--accent)]/30 p-3 rounded-md">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={consent.necessary}
                    disabled
                    className="h-4 w-4 text-[var(--accent)] rounded border-[var(--border-color)]"
                  />
                  <label className="ml-2 text-sm text-[var(--card-background)]">
                    Necessary cookies (required)
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={consent.analytics}
                    onChange={(e) =>
                      setConsent((prev) => ({ ...prev, analytics: e.target.checked }))
                    }
                    className="h-4 w-4 text-[var(--accent)] rounded border-[var(--border-color)]"
                  />
                  <label className="ml-2 text-sm text-[var(--card-background)]">
                    Analytics cookies
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={consent.marketing}
                    onChange={(e) =>
                      setConsent((prev) => ({ ...prev, marketing: e.target.checked }))
                    }
                    className="h-4 w-4 text-[var(--accent)] rounded border-[var(--border-color)]"
                  />
                  <label className="ml-2 text-sm text-[var(--card-background)]">
                    Marketing cookies
                  </label>
                </div>
              </div>
              <div className="flex gap-2 justify-end">
                <button
                  onClick={handleSavePreferences}
                  className="px-3 py-1.5 text-sm font-medium text-[var(--accent)] bg-[var(--card-background)] rounded-md hover:bg-[var(--card-background)]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent)]"
                >
                  Save Preferences
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-3 py-3 py-1.5 text-sm font-medium text-[var(--accent)] bg-[var(--card-background)] rounded-md hover:bg-[var(--card-background)]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent)]"
                >
                  I'm alright with cookies
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 