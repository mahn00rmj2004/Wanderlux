import { useState } from "react";

// ─── Colours (match your App.jsx) ────────────────────────────────────────────
const C = {
  primary: "#1A6B5A",
  primaryLight: "#e8f5f2",
  accent: "#E8622A",
  accentLight: "#fff3ee",
  dark: "#1A2332",
  mid: "#4A5568",
  light: "#F7F9FC",
  white: "#FFFFFF",
  border: "#E8EDF2",
  gold: "#D4A843",
};

// ─── SignIn Page ────────────────────────────────────────────────────────────
export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500); // simulate API call
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      fontFamily: "'Inter', sans-serif",
      background: C.light,
    }}>
      {/* Left Panel — Image & Branding */}
      <div style={{
        flex: 1,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "48px",
        overflow: "hidden",
      }} className="signin-left">
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(26,35,50,0.92) 20%, rgba(26,35,50,0.3) 100%)",
        }} />

        {/* Logo */}
        <div style={{ position: "relative", zIndex: 2, marginBottom: "auto", paddingTop: 8 }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{
              width: 34, height: 34, borderRadius: 10,
              background: `linear-gradient(135deg, ${C.primary}, #2A9D8F)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1rem", color: C.white, fontWeight: 800,
            }}>W</div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 800, color: C.white }}>
              Wander<span style={{ color: "#4ECDC4" }}>lux</span>
            </span>
          </a>
        </div>

        {/* Quote */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: 380 }}>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.6rem",
            color: C.white,
            fontWeight: 700,
            lineHeight: 1.35,
            margin: "0 0 16px",
          }}>
            "The world is a book, and those who do not travel read only one page."
          </p>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", margin: 0 }}>
            Join 94,000+ travellers who've discovered their next chapter with us.
          </p>
        </div>
      </div>

      {/* Right Panel — Form */}
      <div style={{
        width: "100%",
        maxWidth: 520,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "48px 56px",
        background: C.white,
      }} className="signin-right">

        <div style={{ marginBottom: 36 }}>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "2rem",
            fontWeight: 800,
            color: C.dark,
            margin: "0 0 8px",
          }}>
            Welcome back
          </h1>
          <p style={{ color: C.mid, fontSize: "0.95rem", margin: 0, lineHeight: 1.6 }}>
            Sign in to access your saved itineraries, upcoming trips, and exclusive member perks.
          </p>
        </div>

        {/* Social Buttons */}
        <div style={{ display: "flex", gap: 12, marginBottom: 28 }}>
          {[
            { label: "Google", icon: "G" },
            { label: "Apple", icon: "🍎" },
          ].map((btn) => (
            <button key={btn.label} style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "11px 16px",
              borderRadius: 10,
              border: `1.5px solid ${C.border}`,
              background: C.white,
              color: C.dark,
              fontWeight: 600,
              fontSize: "0.85rem",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.primary; e.currentTarget.style.background = C.primaryLight; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = C.white; }}
            >
              <span style={{ fontSize: "1rem" }}>{btn.icon}</span>
              {btn.label}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
          <div style={{ flex: 1, height: 1, background: C.border }} />
          <span style={{ color: "#9AA5B4", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>
            or continue with email
          </span>
          <div style={{ flex: 1, height: 1, background: C.border }} />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>

          {/* Email */}
          <div>
            <label style={{
              display: "block",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: C.primary,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: 6,
            }}>
              Email Address
            </label>
            <div style={{
              position: "relative",
              borderRadius: 10,
              border: `1.5px solid ${focused === 'email' ? C.primary : C.border}`,
              background: focused === 'email' ? C.primaryLight : C.white,
              transition: "all 0.2s",
            }}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                placeholder="you@example.com"
                required
                style={{
                  width: "100%",
                  padding: "13px 16px",
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  fontSize: "0.9rem",
                  color: C.dark,
                  fontWeight: 500,
                  borderRadius: 10,
                }}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <label style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: C.primary,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}>
                Password
              </label>
              <a href="#" style={{
                fontSize: "0.78rem",
                color: C.primary,
                fontWeight: 600,
                textDecoration: "none",
              }}
                onMouseEnter={e => e.target.style.textDecoration = "underline"}
                onMouseLeave={e => e.target.style.textDecoration = "none"}
              >
                Forgot password?
              </a>
            </div>
            <div style={{
              position: "relative",
              borderRadius: 10,
              border: `1.5px solid ${focused === 'password' ? C.primary : C.border}`,
              background: focused === 'password' ? C.primaryLight : C.white,
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
            }}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={e => setPassword(e.target.value)}
                onFocus={() => setFocused('password')}
                onBlur={() => setFocused(null)}
                placeholder="••••••••"
                required
                style={{
                  flex: 1,
                  padding: "13px 16px",
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  fontSize: "0.9rem",
                  color: C.dark,
                  fontWeight: 500,
                  borderRadius: 10,
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "0 16px",
                  color: C.mid,
                  fontSize: "0.8rem",
                  fontWeight: 600,
                }}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: 6,
              padding: "14px 24px",
              borderRadius: 10,
              border: "none",
              background: `linear-gradient(135deg, ${C.primary}, #2A9D8F)`,
              color: C.white,
              fontWeight: 700,
              fontSize: "0.95rem",
              cursor: loading ? "wait" : "pointer",
              boxShadow: "0 4px 14px rgba(26,107,90,0.3)",
              transition: "all 0.2s",
              opacity: loading ? 0.8 : 1,
            }}
            onMouseEnter={e => { if (!loading) { e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = "0 8px 20px rgba(26,107,90,0.35)"; }}}
            onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 4px 14px rgba(26,107,90,0.3)"; }}
          >
            {loading ? (
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                <span style={{
                  width: 16, height: 16,
                  border: `2px solid rgba(255,255,255,0.3)`,
                  borderTopColor: C.white,
                  borderRadius: "50%",
                  animation: "spin 0.8s linear infinite",
                  display: "inline-block",
                }} />
                Signing in...
              </span>
            ) : "Sign In →"}
          </button>
        </form>

        {/* Sign Up Link */}
        <p style={{
          textAlign: "center",
          marginTop: 28,
          color: C.mid,
          fontSize: "0.9rem",
        }}>
          Don't have an account?{" "}
          <a href="#" style={{
            color: C.primary,
            fontWeight: 700,
            textDecoration: "none",
          }}
            onMouseEnter={e => e.target.style.textDecoration = "underline"}
            onMouseLeave={e => e.target.style.textDecoration = "none"}
          >
            Create one free
          </a>
        </p>

        {/* Trust badges */}
        <div style={{
          marginTop: "auto",
          paddingTop: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}>
          {[
            { icon: "🔒", text: "256-bit SSL" },
            { icon: "✓", text: "GDPR Compliant" },
          ].map(badge => (
            <div key={badge.text} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: "0.85rem" }}>{badge.icon}</span>
              <span style={{ fontSize: "0.72rem", color: "#9AA5B4", fontWeight: 600 }}>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile-only: hide left panel */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 860px) {
          .signin-left { display: none !important; }
          .signin-right { max-width: 100% !important; padding: 40px 28px !important; }
        }
      `}</style>
    </div>
  );
}