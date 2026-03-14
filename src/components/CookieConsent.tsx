import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CONSENT_KEY = "taaffeite-cookie-consent";

type ConsentState = {
  essential: boolean;
  analytics: boolean;
  preferences: boolean;
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    essential: true,
    analytics: false,
    preferences: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      // Small delay for elegant entrance
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (c: ConsentState) => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(c));
    setVisible(false);
  };

  const acceptAll = () => {
    saveConsent({ essential: true, analytics: true, preferences: true });
  };

  const acceptSelected = () => {
    saveConsent(consent);
  };

  const declineOptional = () => {
    saveConsent({ essential: true, analytics: false, preferences: false });
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[9990] transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 py-6 sm:py-8">
          {/* Main bar */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="flex-1">
              <h3 className="font-serif text-lg sm:text-xl mb-2">
                We value your privacy
              </h3>
              <p className="font-body text-xs sm:text-sm text-primary-foreground/70 leading-relaxed max-w-2xl">
                We use cookies to enhance your browsing experience and analyze site
                traffic. Essential cookies are always active. You can choose to accept
                or customize your preferences below.{" "}
                <Link
                  to="/privacy"
                  className="underline underline-offset-4 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="font-body text-[11px] uppercase tracking-[0.2em] text-primary-foreground/60 hover:text-primary-foreground transition-colors px-4 py-2"
              >
                {showDetails ? "Hide" : "Customize"}
              </button>
              <button
                onClick={declineOptional}
                className="font-body text-[11px] uppercase tracking-[0.2em] border border-primary-foreground/30 text-primary-foreground/80 hover:text-primary-foreground hover:border-primary-foreground/60 transition-all px-5 py-3"
              >
                Essential Only
              </button>
              <button
                onClick={acceptAll}
                className="font-body text-[11px] uppercase tracking-[0.2em] bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all px-5 py-3"
              >
                Accept All
              </button>
            </div>
          </div>

          {/* Detail panel */}
          <div
            className={`grid transition-all duration-500 ease-out ${
              showDetails
                ? "grid-rows-[1fr] opacity-100 mt-6"
                : "grid-rows-[0fr] opacity-0 mt-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="border-t border-primary-foreground/15 pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Essential */}
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-4 h-4 border border-primary-foreground/40 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-primary-foreground/60" />
                    </div>
                    <div>
                      <span className="font-body text-xs uppercase tracking-[0.15em] text-primary-foreground block mb-1">
                        Essential
                      </span>
                      <span className="font-body text-[11px] text-primary-foreground/50 leading-relaxed">
                        Required for the website to function. Always active.
                      </span>
                    </div>
                  </div>

                  {/* Analytics */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <button
                      onClick={() =>
                        setConsent((c) => ({ ...c, analytics: !c.analytics }))
                      }
                      className="mt-1 w-4 h-4 border border-primary-foreground/40 flex items-center justify-center flex-shrink-0 group-hover:border-primary-foreground/70 transition-colors"
                    >
                      {consent.analytics && (
                        <div className="w-2 h-2 bg-primary-foreground" />
                      )}
                    </button>
                    <div>
                      <span className="font-body text-xs uppercase tracking-[0.15em] text-primary-foreground block mb-1">
                        Analytics
                      </span>
                      <span className="font-body text-[11px] text-primary-foreground/50 leading-relaxed">
                        Help us understand how visitors interact with our site.
                      </span>
                    </div>
                  </label>

                  {/* Preferences */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <button
                      onClick={() =>
                        setConsent((c) => ({
                          ...c,
                          preferences: !c.preferences,
                        }))
                      }
                      className="mt-1 w-4 h-4 border border-primary-foreground/40 flex items-center justify-center flex-shrink-0 group-hover:border-primary-foreground/70 transition-colors"
                    >
                      {consent.preferences && (
                        <div className="w-2 h-2 bg-primary-foreground" />
                      )}
                    </button>
                    <div>
                      <span className="font-body text-xs uppercase tracking-[0.15em] text-primary-foreground block mb-1">
                        Preferences
                      </span>
                      <span className="font-body text-[11px] text-primary-foreground/50 leading-relaxed">
                        Remember your settings and personalize your experience.
                      </span>
                    </div>
                  </label>
                </div>

                <div className="mt-5 flex justify-end">
                  <button
                    onClick={acceptSelected}
                    className="font-body text-[11px] uppercase tracking-[0.2em] border border-primary-foreground/30 text-primary-foreground/80 hover:text-primary-foreground hover:border-primary-foreground/60 transition-all px-5 py-2.5"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
