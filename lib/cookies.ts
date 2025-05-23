export type CookieConsent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export const COOKIE_CONSENT_KEY = 'cookie-consent';

export function getCookieConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null;
  
  const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (!savedConsent) return null;
  
  try {
    return JSON.parse(savedConsent) as CookieConsent;
  } catch {
    return null;
  }
}

export function setCookieConsent(consent: CookieConsent): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
}

export function hasCookieConsent(): boolean {
  return getCookieConsent() !== null;
}

export function canUseAnalytics(): boolean {
  const consent = getCookieConsent();
  return consent?.analytics ?? false;
}

export function canUseMarketing(): boolean {
  const consent = getCookieConsent();
  return consent?.marketing ?? false;
} 