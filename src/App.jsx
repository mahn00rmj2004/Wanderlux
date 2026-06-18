import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignInPage from "./SignInPage";
import PlanTripPage from "./PlanTripPage";

// ─── Data ──────────────────────────────────────────────────────────────────────

const destinations = [
  { id: 1, name: "Santorini", country: "Greece", tag: "Island Escape", description: "Whitewashed villages cascading down volcanic cliffs, with sunsets that paint the Aegean gold.", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80", price: "$1,240", duration: "7 nights", rating: 4.9 },
  { id: 2, name: "Kyoto", country: "Japan", tag: "Cultural Immersion", description: "Ancient temples, bamboo groves, and tea ceremonies — Japan's soul lives here.", image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80", price: "$1,890", duration: "10 nights", rating: 4.8 },
  { id: 3, name: "Patagonia", country: "Argentina", tag: "Wild Adventure", description: "Jagged granite towers, turquoise lakes, and glaciers that crack like thunder at dawn.", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80", price: "$2,100", duration: "12 nights", rating: 4.9 },
  { id: 4, name: "Marrakech", country: "Morocco", tag: "Sensory Journey", description: "Spice-laden medinas, riads with rose-petal pools, and souks alive with colour.", image: "https://images.unsplash.com/photo-1512958789358-4dac0f4109a5?w=800&q=80", price: "$980", duration: "6 nights", rating: 4.7 },
  { id: 5, name: "Amalfi Coast", country: "Italy", tag: "La Dolce Vita", description: "Cliffside villages, cerulean waters, and lemon groves perfuming the Mediterranean air.", image: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=800&q=80", price: "$1,560", duration: "8 nights", rating: 4.8 },
  { id: 6, name: "Bali", country: "Indonesia", tag: "Spiritual Retreat", description: "Rice terraces, temple incense, and surf-washed shores — a land of morning offerings.", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80", price: "$1,120", duration: "9 nights", rating: 4.7 },
];

const heroImages = [
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80",
  "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1600&q=80",
];
const heroDestinations = ["Santorini", "Patagonia", "Kyoto", "Marrakech", "Amalfi"];

const testimonials = [
  { name: "Sofia R.", location: "Berlin, Germany", text: "The Kyoto itinerary felt like a private invitation — temples before the crowds, a kaiseki dinner no guidebook would ever find. Pure magic.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80" },
  { name: "James K.", location: "New York, USA", text: "Patagonia exceeded every expectation. Our guide knew every trail and the lodge was extraordinary. Wanderlux handles every detail so you just experience.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80" },
  { name: "Aisha M.", location: "Dubai, UAE", text: "Marrakech through their eyes is a different city entirely. I've never felt more immersed in a culture or more at ease in a foreign place.", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80" },
];

const stats = [
  { value: "180+", label: "Destinations" },
  { value: "94K", label: "Happy Travellers" },
  { value: "12 yrs", label: "Crafting Journeys" },
  { value: "4.9★", label: "Average Rating" },
];

const experiences = [
  { icon: "✈️", title: "Curated Flights", desc: "Hand-picked routes with premium carriers, optimised layovers, and seat upgrades." },
  { icon: "🏨", title: "Boutique Stays", desc: "Only hotels and riads we've personally vetted for design, service, and soul." },
  { icon: "🗺️", title: "Local Guides", desc: "Certified local storytellers who reveal the city beneath the guidebook." },
  { icon: "🍽️", title: "Culinary Access", desc: "Reservations at impossible tables and hidden street-food trails." },
];

// ─── Colours ──────────────────────────────────────────────────────────────────
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

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Destinations", "Experiences", "Stories", "About"];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? C.white : "rgba(255,255,255,0.95)",
      backdropFilter: "blur(12px)",
      borderBottom: `1px solid ${scrolled ? C.border : "transparent"}`,
      boxShadow: scrolled ? "0 2px 20px rgba(26,107,90,0.08)" : "none",
      transition: "all 0.3s ease",
      padding: "0 6%",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <div style={{
            width: 34, height: 34, borderRadius: 10,
            background: `linear-gradient(135deg, ${C.primary}, #2A9D8F)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1rem", color: C.white, fontWeight: 800,
          }}>W</div>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 800, color: C.dark }}>
            Wander<span style={{ color: C.primary }}>lux</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 36 }} className="nav-links">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{
              color: C.mid, textDecoration: "none", fontSize: "0.9rem", fontWeight: 500,
              position: "relative", padding: "4px 0",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => e.target.style.color = C.primary}
              onMouseLeave={e => e.target.style.color = C.mid}
            >{link}</a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="nav-cta">
          <Link to="/signin" style={{ textDecoration: "none" }}>
            <button style={{
              padding: "9px 20px", borderRadius: 8, border: `1.5px solid ${C.primary}`,
              background: "transparent", color: C.primary, fontWeight: 600, fontSize: "0.875rem",
              cursor: "pointer", transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.target.style.background = C.primaryLight; }}
              onMouseLeave={e => { e.target.style.background = "transparent"; }}
            >Sign In</button>
          </Link>
          <Link to="/plan" style={{ textDecoration: "none" }}>
            <button style={{
              padding: "9px 22px", borderRadius: 8, border: "none",
              background: `linear-gradient(135deg, ${C.primary}, #2A9D8F)`,
              color: C.white, fontWeight: 700, fontSize: "0.875rem",
              cursor: "pointer", boxShadow: `0 4px 14px rgba(26,107,90,0.3)`,
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = `0 8px 20px rgba(26,107,90,0.35)`; }}
              onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = `0 4px 14px rgba(26,107,90,0.3)`; }}
            >Plan a Trip</button>
          </Link>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(o => !o)} style={{
          display: "none", background: "none", border: "none", cursor: "pointer",
          flexDirection: "column", gap: 5, padding: 4,
        }}>
          {[0,1,2].map(i => (
            <span key={i} style={{ display: "block", width: 24, height: 2, background: C.dark, borderRadius: 2, transition: "all 0.3s",
              transform: menuOpen ? (i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "scaleX(0)") : "none",
            }} />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          borderTop: `1px solid ${C.border}`, padding: "16px 0 20px",
          display: "flex", flexDirection: "column", gap: 4,
        }}>
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "12px 16px", color: C.dark, textDecoration: "none",
                fontWeight: 500, borderRadius: 8, transition: "background 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = C.primaryLight}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >{link}</a>
          ))}
          <Link to="/signin" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
            <button style={{
              margin: "8px 16px 0", padding: "12px", borderRadius: 8, border: "none",
              background: `linear-gradient(135deg, ${C.primary}, #2A9D8F)`,
              color: C.white, fontWeight: 700, cursor: "pointer",
              width: "calc(100% - 32px)",
            }}>Sign In</button>
          </Link>
          <Link to="/plan" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
            <button style={{
              margin: "8px 16px 0", padding: "12px", borderRadius: 8, border: "none",
              background: C.white,
              border: `1.5px solid ${C.primary}`,
              color: C.primary, fontWeight: 700, cursor: "pointer",
              width: "calc(100% - 32px)",
            }}>Plan a Trip</button>
          </Link>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  const [bgIndex, setBgIndex] = useState(0);
  const [destIndex, setDestIndex] = useState(0);
  const [tickerIn, setTickerIn] = useState(true);

  useEffect(() => {
    const iv = setInterval(() => {
      setBgIndex(i => (i + 1) % heroImages.length);
      setTickerIn(false);
      setTimeout(() => { setDestIndex(i => (i + 1) % heroDestinations.length); setTickerIn(true); }, 350);
    }, 4000);
    return () => clearInterval(iv);
  }, []);

  return (
    <section id="home" style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", paddingTop: 70 }}>
      {heroImages.map((img, i) => (
        <div key={i} style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center",
          opacity: i === bgIndex ? 1 : 0, transition: "opacity 1.5s ease",
        }} />
      ))}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(255,255,255,0.92) 45%, rgba(255,255,255,0.3) 100%)" }} />

      <div style={{ position: "relative", zIndex: 2, padding: "0 8%", maxWidth: 680 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: C.primaryLight, border: `1px solid rgba(26,107,90,0.2)`,
          borderRadius: 30, padding: "6px 16px", marginBottom: 24,
        }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: C.primary, display: "inline-block" }} />
          <span style={{ color: C.primary, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Premium Travel Experiences</span>
        </div>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2.8rem, 6vw, 5rem)",
          color: C.dark, fontWeight: 800, lineHeight: 1.08,
          margin: "0 0 16px",
        }}>
          Escape to<br />
          <span style={{
            color: C.primary,
            display: "inline-block",
            opacity: tickerIn ? 1 : 0,
            transform: tickerIn ? "translateY(0)" : "translateY(14px)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
          }}>{heroDestinations[destIndex]}</span>
        </h1>

        <p style={{ color: C.mid, fontSize: "1.1rem", lineHeight: 1.75, maxWidth: 500, marginBottom: 40 }}>
          Crafted itineraries for those who travel not to escape life, but so life doesn't escape them.
        </p>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 56 }}>
          <Link to="/plan" style={{ textDecoration: "none" }}>
            <button style={{
              padding: "15px 36px", borderRadius: 50,
              background: `linear-gradient(135deg, ${C.primary}, #2A9D8F)`,
              border: "none", color: C.white, fontWeight: 700, fontSize: "1rem",
              cursor: "pointer", boxShadow: `0 8px 28px rgba(26,107,90,0.35)`,
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 14px 36px rgba(26,107,90,0.4)"; }}
              onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 8px 28px rgba(26,107,90,0.35)"; }}
            >Start Your Journey →</button>
          </Link>
          <button style={{
            padding: "15px 36px", borderRadius: 50,
            background: C.white, border: `1.5px solid ${C.border}`,
            color: C.dark, fontWeight: 600, fontSize: "1rem", cursor: "pointer",
            boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
            transition: "box-shadow 0.2s, border-color 0.2s",
          }}
            onMouseEnter={e => { e.target.style.borderColor = C.primary; e.target.style.boxShadow = "0 4px 20px rgba(26,107,90,0.12)"; }}
            onMouseLeave={e => { e.target.style.borderColor = C.border; e.target.style.boxShadow = "0 4px 14px rgba(0,0,0,0.06)"; }}
          >▶ Watch Story</button>
        </div>

        {/* Search card */}
        <div style={{
          background: C.white, borderRadius: 18, padding: "20px 24px",
          boxShadow: "0 16px 50px rgba(26,107,90,0.1), 0 4px 16px rgba(0,0,0,0.06)",
          display: "flex", gap: 0, flexWrap: "wrap",
          border: `1px solid ${C.border}`,
          maxWidth: 620,
        }}>
          {[
            { label: "Where", placeholder: "Destination", icon: "📍" },
            { label: "When", placeholder: "Add dates", icon: "📅" },
            { label: "Guests", placeholder: "2 adults", icon: "👤" },
          ].map((f, i) => (
            <div key={f.label} style={{
              flex: 1, minWidth: 130,
              borderRight: i < 2 ? `1px solid ${C.border}` : "none",
              paddingLeft: i === 0 ? 0 : 18, paddingRight: 18,
            }}>
              <p style={{ margin: "0 0 3px", fontSize: "0.68rem", fontWeight: 700, color: C.primary, letterSpacing: "1.5px", textTransform: "uppercase" }}>{f.label}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: "0.9rem" }}>{f.icon}</span>
                <input placeholder={f.placeholder} style={{
                  border: "none", outline: "none", background: "none",
                  fontSize: "0.9rem", color: C.dark, fontWeight: 500, width: "100%",
                }} />
              </div>
            </div>
          ))}
          <Link to="/plan" style={{ textDecoration: "none", alignSelf: "center" }}>
            <button style={{
              padding: "10px 20px", borderRadius: 10, border: "none",
              background: `linear-gradient(135deg, ${C.primary}, #2A9D8F)`,
              color: C.white, fontWeight: 700, fontSize: "0.875rem",
              cursor: "pointer", whiteSpace: "nowrap",
              transition: "transform 0.2s",
            }}
              onMouseEnter={e => e.target.style.transform = "scale(1.04)"}
              onMouseLeave={e => e.target.style.transform = "scale(1)"}
            >Search</button>
          </Link>
        </div>
      </div>

      {/* Floating badge */}
      <div style={{
        position: "absolute", right: "8%", bottom: "18%", zIndex: 3,
        background: C.white, borderRadius: 16, padding: "16px 20px",
        boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
        border: `1px solid ${C.border}`,
        animation: "floatBadge 3s ease-in-out infinite",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ fontSize: "1.6rem" }}>🌍</div>
          <div>
            <p style={{ margin: 0, fontWeight: 800, color: C.dark, fontSize: "0.95rem" }}>94K+ Travellers</p>
            <p style={{ margin: "2px 0 0", fontSize: "0.75rem", color: C.mid }}>Trust Wanderlux</p>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 10, gap: -8 }}>
          {["https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&q=80","https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&q=80","https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&q=80"].map((src, i) => (
            <img key={i} src={src} alt="" style={{ width: 28, height: 28, borderRadius: "50%", border: `2px solid ${C.white}`, marginLeft: i > 0 ? -8 : 0, objectFit: "cover" }} />
          ))}
          <span style={{ marginLeft: 8, fontSize: "0.75rem", fontWeight: 600, color: C.primary, alignSelf: "center" }}>★ 4.9/5</span>
        </div>
      </div>
    </section>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────
function StatsBar() {
  return (
    <section style={{ background: C.white, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: "36px 8%" }}>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 24 }}>
        {stats.map((s, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <p style={{ margin: 0, fontSize: "2rem", fontFamily: "'Playfair Display', serif", fontWeight: 800, color: C.primary }}>{s.value}</p>
            <p style={{ margin: "4px 0 0", fontSize: "0.78rem", fontWeight: 600, color: C.mid, letterSpacing: "1.5px", textTransform: "uppercase" }}>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Destinations ─────────────────────────────────────────────────────────────
function DestCard({ dest }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      borderRadius: 20, overflow: "hidden", position: "relative", height: 400,
      cursor: "pointer",
      transform: hov ? "translateY(-8px)" : "translateY(0)",
      boxShadow: hov ? "0 28px 56px rgba(26,107,90,0.18), 0 8px 24px rgba(0,0,0,0.1)" : "0 4px 20px rgba(0,0,0,0.08)",
      transition: "transform 0.4s cubic-bezier(.25,.46,.45,.94), box-shadow 0.4s ease",
      background: C.white,
    }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(${dest.image})`, backgroundSize: "cover", backgroundPosition: "center",
        transform: hov ? "scale(1.06)" : "scale(1)", transition: "transform 0.6s ease",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: hov
          ? "linear-gradient(to top, rgba(26,35,50,0.92) 45%, rgba(26,35,50,0.15) 100%)"
          : "linear-gradient(to top, rgba(26,35,50,0.8) 38%, rgba(26,35,50,0.05) 100%)",
        transition: "background 0.4s ease",
      }} />
      <div style={{ position: "absolute", top: 16, left: 16 }}>
        <span style={{
          background: C.white, color: C.primary,
          fontSize: "0.68rem", fontWeight: 700, padding: "4px 12px",
          borderRadius: 20, textTransform: "uppercase", letterSpacing: "1px",
        }}>{dest.tag}</span>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px 20px" }}>
        <div style={{ color: C.gold, fontSize: "0.78rem", marginBottom: 4 }}>
          {"★".repeat(Math.floor(dest.rating))} <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.72rem" }}>{dest.rating}</span>
        </div>
        <h3 style={{ margin: "0 0 2px", color: C.white, fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 800 }}>{dest.name}</h3>
        <p style={{ margin: 0, color: "rgba(255,255,255,0.6)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase" }}>{dest.country}</p>
        <p style={{
          margin: "10px 0 0", color: "rgba(255,255,255,0.82)", fontSize: "0.85rem", lineHeight: 1.5,
          maxHeight: hov ? "55px" : "0", overflow: "hidden", opacity: hov ? 1 : 0,
          transition: "max-height 0.4s ease, opacity 0.4s ease",
        }}>{dest.description}</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 14 }}>
          <div>
            <span style={{ color: C.gold, fontWeight: 800, fontSize: "1.15rem" }}>{dest.price}</span>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.72rem", marginLeft: 4 }}>/ person</span>
          </div>
          <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.78rem" }}>{dest.duration}</span>
        </div>
        <Link to="/plan" style={{ textDecoration: "none" }}>
          <button style={{
            marginTop: 12, width: "100%", padding: "10px", borderRadius: 10,
            background: hov ? C.white : "transparent",
            border: `1.5px solid ${hov ? C.white : "rgba(255,255,255,0.4)"}`,
            color: hov ? C.primary : C.white,
            fontWeight: 700, fontSize: "0.82rem", cursor: "pointer",
            transition: "all 0.3s ease",
          }}>Explore Journey →</button>
        </Link>
      </div>
    </div>
  );
}

function DestinationsSection() {
  const [filter, setFilter] = useState("All");
  const tags = ["All", "Island Escape", "Cultural Immersion", "Wild Adventure", "Sensory Journey", "La Dolce Vita", "Spiritual Retreat"];
  const filtered = filter === "All" ? destinations : destinations.filter(d => d.tag === filter);
  return (
    <section id="destinations" style={{ background: C.light, padding: "100px 8%" }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <span style={{ display: "inline-block", background: C.primaryLight, color: C.primary, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "2.5px", padding: "5px 14px", borderRadius: 20, textTransform: "uppercase", marginBottom: 14 }}>Where Will You Go?</span>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4.5vw, 3.2rem)", color: C.dark, fontWeight: 800, margin: "0 0 16px", lineHeight: 1.1 }}>Handpicked Destinations</h2>
        <p style={{ color: C.mid, fontSize: "1rem", maxWidth: 480, margin: "0 auto" }}>Every destination chosen for its power to transform — not just impress.</p>
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 48 }}>
        {tags.map(t => (
          <button key={t} onClick={() => setFilter(t)} style={{
            padding: "8px 18px", borderRadius: 30, cursor: "pointer", fontSize: "0.8rem", fontWeight: 600,
            border: `1.5px solid ${filter === t ? C.primary : C.border}`,
            background: filter === t ? C.primary : C.white,
            color: filter === t ? C.white : C.mid,
            transition: "all 0.25s ease",
          }}>{t}</button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 26 }}>
        {filtered.map(d => <DestCard key={d.id} dest={d} />)}
      </div>
    </section>
  );
}

// ─── Experiences ──────────────────────────────────────────────────────────────
function ExperiencesSection() {
  return (
    <section id="experiences" style={{ background: C.white, padding: "100px 8%" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }} className="exp-grid">
        <div>
          <span style={{ display: "inline-block", background: C.primaryLight, color: C.primary, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "2.5px", padding: "5px 14px", borderRadius: 20, textTransform: "uppercase", marginBottom: 14 }}>Our Promise</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: C.dark, fontWeight: 800, margin: "0 0 20px", lineHeight: 1.15 }}>
            Travel That Goes Beyond the Postcard
          </h2>
          <p style={{ color: C.mid, fontSize: "0.975rem", lineHeight: 1.8, marginBottom: 36 }}>
            We believe every journey should leave you permanently changed — with stories that make your dinner table go quiet. We obsess over the details so you can be fully present.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            {experiences.map((e, i) => (
              <div key={i} style={{
                padding: "20px 18px", borderRadius: 14, border: `1px solid ${C.border}`,
                background: C.white, transition: "all 0.3s",
                cursor: "default",
              }}
                onMouseEnter={ev => { ev.currentTarget.style.borderColor = C.primary; ev.currentTarget.style.background = C.primaryLight; ev.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={ev => { ev.currentTarget.style.borderColor = C.border; ev.currentTarget.style.background = C.white; ev.currentTarget.style.transform = "translateY(0)"; }}
              >
                <span style={{ fontSize: "1.5rem", display: "block", marginBottom: 10 }}>{e.icon}</span>
                <h4 style={{ margin: "0 0 5px", color: C.dark, fontWeight: 700, fontSize: "0.9rem" }}>{e.title}</h4>
                <p style={{ margin: 0, color: C.mid, fontSize: "0.78rem", lineHeight: 1.6 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ borderRadius: 24, overflow: "hidden", height: 480, boxShadow: "0 24px 64px rgba(0,0,0,0.12)" }}>
            <img src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=700&q=80" alt="experience" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{
            position: "absolute", bottom: -24, left: -24,
            background: C.white, borderRadius: 16, padding: "16px 20px",
            boxShadow: "0 12px 36px rgba(0,0,0,0.1)", border: `1px solid ${C.border}`,
          }}>
            <p style={{ margin: "0 0 2px", color: C.primary, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Next Departure</p>
            <p style={{ margin: 0, fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 800, color: C.dark }}>Bali, Indonesia</p>
            <p style={{ margin: "3px 0 0", color: C.mid, fontSize: "0.75rem" }}>14 spots remaining</p>
          </div>
          <div style={{
            position: "absolute", top: -18, right: -18,
            background: `linear-gradient(135deg, ${C.primary}, #2A9D8F)`, borderRadius: "50%",
            width: 80, height: 80, display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            boxShadow: "0 8px 24px rgba(26,107,90,0.35)",
          }}>
            <p style={{ margin: 0, fontSize: "1rem", fontWeight: 800, color: C.white }}>4.9</p>
            <p style={{ margin: 0, fontSize: "0.56rem", fontWeight: 700, color: "rgba(255,255,255,0.8)", letterSpacing: "1px" }}>RATING</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function TestimonialsSection() {
  const [active, setActive] = useState(0);
  return (
    <section style={{ background: C.light, padding: "100px 8%" }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <span style={{ display: "inline-block", background: C.primaryLight, color: C.primary, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "2.5px", padding: "5px 14px", borderRadius: 20, textTransform: "uppercase", marginBottom: 14 }}>Traveller Stories</span>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4.5vw, 3rem)", color: C.dark, fontWeight: 800, margin: 0 }}>Journeys That Stayed</h2>
      </div>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{
          background: C.white, borderRadius: 24, padding: "52px 52px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.07)", border: `1px solid ${C.border}`,
          textAlign: "center", minHeight: 220,
        }}>
          <span style={{ fontSize: "3rem", color: C.primary, opacity: 0.25, display: "block", marginBottom: 8, fontFamily: "Georgia, serif" }}>"</span>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", lineHeight: 1.8, color: C.dark, fontStyle: "italic", margin: "0 0 32px" }}>
            {testimonials[active].text}
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
            <img src={testimonials[active].avatar} alt="" style={{ width: 48, height: 48, borderRadius: "50%", objectFit: "cover", border: `3px solid ${C.primaryLight}` }} />
            <div style={{ textAlign: "left" }}>
              <p style={{ margin: 0, fontWeight: 700, color: C.dark, fontSize: "0.92rem" }}>{testimonials[active].name}</p>
              <p style={{ margin: 0, color: C.primary, fontSize: "0.75rem", fontWeight: 600 }}>{testimonials[active].location}</p>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 24 }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              width: i === active ? 28 : 10, height: 10, borderRadius: 5,
              background: i === active ? C.primary : C.border,
              border: "none", cursor: "pointer", padding: 0,
              transition: "all 0.3s ease",
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Gallery ──────────────────────────────────────────────────────────────────
function GallerySection() {
  const imgs = [
    { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=80", col: "span 2" },
    { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80", col: "span 1" },
    { src: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=400&q=80", col: "span 1" },
    { src: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&q=80", col: "span 1" },
    { src: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=700&q=80", col: "span 2" },
  ];
  return (
    <section id="stories" style={{ background: C.white, padding: "100px 8%" }}>
      <div style={{ textAlign: "center", marginBottom: 52 }}>
        <span style={{ display: "inline-block", background: C.primaryLight, color: C.primary, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "2.5px", padding: "5px 14px", borderRadius: 20, textTransform: "uppercase", marginBottom: 14 }}>Visual Diary</span>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4.5vw, 3rem)", color: C.dark, fontWeight: 800, margin: 0 }}>Frames Worth Chasing</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridAutoRows: 230, gap: 14 }}>
        {imgs.map((img, i) => (
          <div key={i} style={{ gridColumn: img.col, borderRadius: 16, overflow: "hidden", cursor: "pointer" }}>
            <img src={img.src} alt="" style={{
              width: "100%", height: "100%", objectFit: "cover", display: "block",
              transition: "transform 0.5s ease",
            }}
              onMouseEnter={e => e.target.style.transform = "scale(1.07)"}
              onMouseLeave={e => e.target.style.transform = "scale(1)"}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section style={{
      background: `linear-gradient(135deg, ${C.primary} 0%, #2A9D8F 100%)`,
      padding: "110px 8%", textAlign: "center", position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
      <div style={{ position: "absolute", bottom: -60, left: -60, width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
      <div style={{ position: "relative", zIndex: 2 }}>
        <span style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", color: C.white, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "2.5px", padding: "5px 14px", borderRadius: 20, textTransform: "uppercase", marginBottom: 20 }}>Your Next Chapter</span>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.4rem, 5.5vw, 4rem)", color: C.white, fontWeight: 800, lineHeight: 1.1, margin: "0 0 24px" }}>
          The World Is Waiting.<br />Are You Ready?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.05rem", maxWidth: 480, margin: "0 auto 44px", lineHeight: 1.75 }}>
          Tell us where you've dreamed of going. We handle every last detail — you just show up.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/plan" style={{ textDecoration: "none" }}>
            <button style={{
              padding: "16px 44px", borderRadius: 50, background: C.white,
              border: "none", color: C.primary, fontWeight: 800, fontSize: "1rem",
              cursor: "pointer", boxShadow: "0 8px 28px rgba(0,0,0,0.15)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { e.target.style.transform = "translateY(-3px)"; e.target.style.boxShadow = "0 16px 40px rgba(0,0,0,0.2)"; }}
              onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 8px 28px rgba(0,0,0,0.15)"; }}
            >Begin Your Journey →</button>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <button style={{
              padding: "16px 44px", borderRadius: 50, background: "transparent",
              border: "2px solid rgba(255,255,255,0.6)", color: C.white,
              fontWeight: 600, fontSize: "1rem", cursor: "pointer",
              transition: "border-color 0.3s, background 0.3s",
            }}
              onMouseEnter={e => { e.target.style.borderColor = C.white; e.target.style.background = "rgba(255,255,255,0.1)"; }}
              onMouseLeave={e => { e.target.style.borderColor = "rgba(255,255,255,0.6)"; e.target.style.background = "transparent"; }}
            >Browse All Trips</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer id="about" style={{ background: C.dark, padding: "72px 8% 36px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 52 }} className="footer-grid">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
            <div style={{ width: 30, height: 30, borderRadius: 8, background: `linear-gradient(135deg, ${C.primary}, #2A9D8F)`, display: "flex", alignItems: "center", justifyContent: "center", color: C.white, fontWeight: 800, fontSize: "0.9rem" }}>W</div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 800, color: C.white }}>Wander<span style={{ color: "#4ECDC4" }}>lux</span></span>
          </div>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", lineHeight: 1.75, maxWidth: 240, margin: "0 0 24px" }}>
            Premium travel experiences for the discerning explorer. We turn dreams into directions.
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            {["𝕏", "IG", "FB", "YT"].map(s => (
              <button key={s} style={{
                width: 36, height: 36, borderRadius: "50%",
                background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.5)", cursor: "pointer", fontSize: "0.75rem",
                transition: "all 0.3s",
              }}
                onMouseEnter={e => { e.target.style.background = C.primary; e.target.style.color = C.white; e.target.style.borderColor = C.primary; }}
                onMouseLeave={e => { e.target.style.background = "rgba(255,255,255,0.07)"; e.target.style.color = "rgba(255,255,255,0.5)"; e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
              >{s}</button>
            ))}
          </div>
        </div>
        {[
          { title: "Explore", links: ["All Destinations", "Adventure Trips", "Luxury Escapes", "Family Travel", "Honeymoons"] },
          { title: "Company", links: ["About Us", "Our Guides", "Press", "Careers", "Sustainability"] },
          { title: "Support", links: ["Help Centre", "Booking Guide", "Cancellations", "Travel Insurance", "Contact"] },
        ].map(col => (
          <div key={col.title}>
            <h4 style={{ color: C.white, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 18 }}>{col.title}</h4>
            {col.links.map(l => (
              <a key={l} href="#" style={{ display: "block", color: "rgba(255,255,255,0.42)", fontSize: "0.85rem", textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#4ECDC4"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.42)"}
              >{l}</a>
            ))}
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <p style={{ margin: 0, color: "rgba(255,255,255,0.28)", fontSize: "0.78rem" }}>© 2025 Wanderlux. All rights reserved.</p>
        <div style={{ display: "flex", gap: 20 }}>
          {["Privacy Policy", "Terms", "Cookies"].map(l => (
            <a key={l} href="#" style={{ color: "rgba(255,255,255,0.28)", fontSize: "0.78rem", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#4ECDC4"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.28)"}
            >{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Home Page Component ─────────────────────────────────────────────────────
function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <DestinationsSection />
      <ExperiencesSection />
      <TestimonialsSection />
      <GallerySection />
      <CTASection />
      <Footer />
    </>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', sans-serif; background: #F7F9FC; overflow-x: hidden; color: #1A2332; }
        input::placeholder { color: #9AA5B4 !important; }

        @keyframes floatBadge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .hamburger { display: none !important; }

        @media (max-width: 860px) {
          .nav-links, .nav-cta { display: none !important; }
          .hamburger { display: flex !important; }
          .exp-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/plan" element={<PlanTripPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}