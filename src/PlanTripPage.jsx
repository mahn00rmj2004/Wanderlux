import { useState } from "react";
import { Link } from "react-router-dom";

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

const destinations = [
  { name: "Santorini", country: "Greece", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&q=80" },
  { name: "Kyoto", country: "Japan", image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&q=80" },
  { name: "Patagonia", country: "Argentina", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80" },
  { name: "Marrakech", country: "Morocco", image: "https://images.unsplash.com/photo-1512958789358-4dac0f4109a5?w=400&q=80" },
  { name: "Amalfi Coast", country: "Italy", image: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=400&q=80" },
  { name: "Bali", country: "Indonesia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80" },
  { name: "Dolomites", country: "Italy", image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=400&q=80" },
  { name: "Maldives", country: "Maldives", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80" },
];

const tripTypes = [
  { icon: "🏝️", label: "Beach Escape", desc: "Unwind on pristine shores" },
  { icon: "🏔️", label: "Mountain Adventure", desc: "Conquer breathtaking peaks" },
  { icon: "🏛️", label: "Cultural Journey", desc: "Immerse in local heritage" },
  { icon: "🍷", label: "Food & Wine", desc: "Savor culinary masterpieces" },
  { icon: "💑", label: "Romantic Getaway", desc: "Perfect for two" },
  { icon: "👨‍👩‍👧‍👦", label: "Family Trip", desc: "Memories for everyone" },
];

export default function PlanTripPage() {
  const [step, setStep] = useState(1);
  const [selectedDest, setSelectedDest] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [dates, setDates] = useState({ start: "", end: "" });
  const [travelers, setTravelers] = useState(2);
  const [budget, setBudget] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  const progress = (step / 4) * 100;

  if (submitted) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, " + C.primary + " 0%, #2A9D8F 100%)",
        fontFamily: "'Inter', sans-serif",
        padding: "40px 20px",
      }}>
        <div style={{
          background: C.white,
          borderRadius: 24,
          padding: "60px 48px",
          maxWidth: 480,
          width: "100%",
          textAlign: "center",
          boxShadow: "0 24px 64px rgba(0,0,0,0.15)",
        }}>
          <div style={{
            width: 80, height: 80,
            borderRadius: "50%",
            background: "linear-gradient(135deg, " + C.primary + ", #2A9D8F)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
            fontSize: "2.5rem",
            color: C.white,
          }}>✓</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "2rem",
            color: C.dark,
            margin: "0 0 12px",
          }}>Request Received!</h2>
          <p style={{ color: C.mid, fontSize: "1rem", lineHeight: 1.7, margin: "0 0 32px" }}>
            Our travel designers will craft your perfect {selectedDest ? selectedDest.name : ""} itinerary and send it to <strong>{email}</strong> within 24 hours.
          </p>
          <div style={{
            background: C.primaryLight,
            borderRadius: 12,
            padding: "16px 20px",
            marginBottom: 28,
            textAlign: "left",
          }}>
            <p style={{ margin: "0 0 8px", fontSize: "0.75rem", fontWeight: 700, color: C.primary, letterSpacing: "1.5px", textTransform: "uppercase" }}>Trip Summary</p>
            <p style={{ margin: "0 0 4px", color: C.dark, fontSize: "0.9rem" }}><strong>Destination:</strong> {selectedDest ? selectedDest.name + ", " + selectedDest.country : ""}</p>
            <p style={{ margin: "0 0 4px", color: C.dark, fontSize: "0.9rem" }}><strong>Type:</strong> {selectedType ? selectedType.label : ""}</p>
            <p style={{ margin: "0 0 4px", color: C.dark, fontSize: "0.9rem" }}><strong>Travelers:</strong> {travelers} adults</p>
            <p style={{ margin: 0, color: C.dark, fontSize: "0.9rem" }}><strong>Budget:</strong> {budget}</p>
          </div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <button style={{
              padding: "14px 32px",
              borderRadius: 50,
              border: "none",
              background: "linear-gradient(135deg, " + C.primary + ", #2A9D8F)",
              color: C.white,
              fontWeight: 700,
              fontSize: "0.95rem",
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(26,107,90,0.3)",
            }}>← Back to Home</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: C.light,
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* Header */}
      <div style={{
        background: C.white,
        borderBottom: "1px solid " + C.border,
        padding: "16px 6%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <div style={{
            width: 34, height: 34, borderRadius: 10,
            background: "linear-gradient(135deg, " + C.primary + ", #2A9D8F)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1rem", color: C.white, fontWeight: 800,
          }}>W</div>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 800, color: C.dark }}>
            Wander<span style={{ color: C.primary }}>lux</span>
          </span>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 120, height: 6, background: C.border, borderRadius: 3, overflow: "hidden",
          }}>
            <div style={{
              width: progress + "%", height: "100%",
              background: "linear-gradient(135deg, " + C.primary + ", #2A9D8F)",
              borderRadius: 3,
              transition: "width 0.4s ease",
            }} />
          </div>
          <span style={{ fontSize: "0.75rem", color: C.mid, fontWeight: 600 }}>Step {step} of 4</span>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 24px" }}>

        {/* Step 1: Choose Destination */}
        {step === 1 && (
          <div>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
              color: C.dark,
              margin: "0 0 8px",
            }}>Where do you want to go?</h1>
            <p style={{ color: C.mid, fontSize: "1rem", margin: "0 0 36px" }}>Select your dream destination from our curated collection.</p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: 16,
            }}>
              {destinations.map((dest) => (
                <div
                  key={dest.name}
                  onClick={() => setSelectedDest(dest)}
                  style={{
                    borderRadius: 16,
                    overflow: "hidden",
                    cursor: "pointer",
                    position: "relative",
                    height: 220,
                    border: selectedDest && selectedDest.name === dest.name ? "3px solid " + C.primary : "2px solid transparent",
                    transform: selectedDest && selectedDest.name === dest.name ? "scale(1.02)" : "scale(1)",
                    transition: "all 0.3s ease",
                    boxShadow: selectedDest && selectedDest.name === dest.name ? "0 8px 24px rgba(26,107,90,0.2)" : "0 2px 8px rgba(0,0,0,0.06)",
                  }}
                >
                  <img src={dest.image} alt={dest.name} style={{
                    width: "100%", height: "100%", objectFit: "cover", display: "block",
                  }} />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(26,35,50,0.85) 30%, transparent 100%)",
                  }} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px" }}>
                    <p style={{ margin: 0, color: C.white, fontWeight: 700, fontSize: "1.1rem" }}>{dest.name}</p>
                    <p style={{ margin: "2px 0 0", color: "rgba(255,255,255,0.7)", fontSize: "0.8rem" }}>{dest.country}</p>
                  </div>
                  {selectedDest && selectedDest.name === dest.name && (
                    <div style={{
                      position: "absolute", top: 12, right: 12,
                      width: 28, height: 28,
                      borderRadius: "50%",
                      background: C.primary,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: C.white,
                      fontSize: "0.9rem",
                      fontWeight: 700,
                    }}>✓</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Trip Type */}
        {step === 2 && (
          <div>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
              color: C.dark,
              margin: "0 0 8px",
            }}>What kind of trip?</h1>
            <p style={{ color: C.mid, fontSize: "1rem", margin: "0 0 36px" }}>Pick the experience that matches your travel style.</p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: 16,
            }}>
              {tripTypes.map((type) => (
                <div
                  key={type.label}
                  onClick={() => setSelectedType(type)}
                  style={{
                    padding: "24px 20px",
                    borderRadius: 16,
                    background: selectedType && selectedType.label === type.label ? C.primary : C.white,
                    border: "2px solid " + (selectedType && selectedType.label === type.label ? C.primary : C.border),
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: selectedType && selectedType.label === type.label ? "0 8px 24px rgba(26,107,90,0.15)" : "0 2px 8px rgba(0,0,0,0.04)",
                  }}
                >
                  <span style={{ fontSize: "2rem", display: "block", marginBottom: 12 }}>{type.icon}</span>
                  <p style={{
                    margin: "0 0 4px",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: selectedType && selectedType.label === type.label ? C.white : C.dark,
                  }}>{type.label}</p>
                  <p style={{
                    margin: 0,
                    fontSize: "0.85rem",
                    color: selectedType && selectedType.label === type.label ? "rgba(255,255,255,0.8)" : C.mid,
                  }}>{type.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Details */}
        {step === 3 && (
          <div>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
              color: C.dark,
              margin: "0 0 8px",
            }}>Trip Details</h1>
            <p style={{ color: C.mid, fontSize: "1rem", margin: "0 0 36px" }}>Tell us when and who is traveling.</p>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* Dates */}
              <div style={{
                background: C.white,
                borderRadius: 16,
                padding: "24px",
                border: "1px solid " + C.border,
              }}>
                <p style={{ margin: "0 0 16px", fontSize: "0.75rem", fontWeight: 700, color: C.primary, letterSpacing: "1.5px", textTransform: "uppercase" }}>Travel Dates</p>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <label style={{ display: "block", fontSize: "0.8rem", color: C.mid, marginBottom: 6, fontWeight: 500 }}>Start Date</label>
                    <input
                      type="date"
                      value={dates.start}
                      onChange={e => setDates({ ...dates, start: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: 10,
                        border: "1.5px solid " + C.border,
                        fontSize: "0.9rem",
                        color: C.dark,
                        outline: "none",
                      }}
                    />
                  </div>
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <label style={{ display: "block", fontSize: "0.8rem", color: C.mid, marginBottom: 6, fontWeight: 500 }}>End Date</label>
                    <input
                      type="date"
                      value={dates.end}
                      onChange={e => setDates({ ...dates, end: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: 10,
                        border: "1.5px solid " + C.border,
                        fontSize: "0.9rem",
                        color: C.dark,
                        outline: "none",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Travelers */}
              <div style={{
                background: C.white,
                borderRadius: 16,
                padding: "24px",
                border: "1px solid " + C.border,
              }}>
                <p style={{ margin: "0 0 16px", fontSize: "0.75rem", fontWeight: 700, color: C.primary, letterSpacing: "1.5px", textTransform: "uppercase" }}>Travelers</p>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <button
                    onClick={() => setTravelers(Math.max(1, travelers - 1))}
                    style={{
                      width: 40, height: 40,
                      borderRadius: "50%",
                      border: "1.5px solid " + C.border,
                      background: C.white,
                      fontSize: "1.2rem",
                      cursor: "pointer",
                      color: C.dark,
                    }}
                  >−</button>
                  <span style={{ fontSize: "1.3rem", fontWeight: 700, color: C.dark, minWidth: 30, textAlign: "center" }}>{travelers}</span>
                  <button
                    onClick={() => setTravelers(travelers + 1)}
                    style={{
                      width: 40, height: 40,
                      borderRadius: "50%",
                      border: "1.5px solid " + C.border,
                      background: C.white,
                      fontSize: "1.2rem",
                      cursor: "pointer",
                      color: C.dark,
                    }}
                  >+</button>
                  <span style={{ color: C.mid, fontSize: "0.9rem" }}>adult{travelers > 1 ? "s" : ""}</span>
                </div>
              </div>

              {/* Budget */}
              <div style={{
                background: C.white,
                borderRadius: 16,
                padding: "24px",
                border: "1px solid " + C.border,
              }}>
                <p style={{ margin: "0 0 16px", fontSize: "0.75rem", fontWeight: 700, color: C.primary, letterSpacing: "1.5px", textTransform: "uppercase" }}>Budget Range</p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {["$1,000 - $3,000", "$3,000 - $5,000", "$5,000 - $10,000", "$10,000+"].map(b => (
                    <button
                      key={b}
                      onClick={() => setBudget(b)}
                      style={{
                        padding: "10px 20px",
                        borderRadius: 30,
                        border: "1.5px solid " + (budget === b ? C.primary : C.border),
                        background: budget === b ? C.primary : C.white,
                        color: budget === b ? C.white : C.mid,
                        fontWeight: 600,
                        fontSize: "0.85rem",
                        cursor: "pointer",
                        transition: "all 0.25s",
                      }}
                    >{b}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Contact */}
        {step === 4 && (
          <div>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
              color: C.dark,
              margin: "0 0 8px",
            }}>Almost there!</h1>
            <p style={{ color: C.mid, fontSize: "1rem", margin: "0 0 36px" }}>Enter your email and we will send your custom itinerary.</p>

            <div style={{
              background: C.white,
              borderRadius: 16,
              padding: "32px",
              border: "1px solid " + C.border,
              textAlign: "center",
            }}>
              <div style={{
                width: 64, height: 64,
                borderRadius: "50%",
                background: C.primaryLight,
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 20px",
                fontSize: "1.8rem",
              }}>✉️</div>

              <p style={{ margin: "0 0 20px", color: C.mid, fontSize: "0.9rem" }}>
                We will send your <strong>{selectedDest ? selectedDest.name : ""}</strong> {selectedType ? selectedType.label.toLowerCase() : ""} itinerary to:
              </p>

              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                style={{
                  width: "100%",
                  maxWidth: 360,
                  padding: "14px 18px",
                  borderRadius: 10,
                  border: "1.5px solid " + C.border,
                  fontSize: "1rem",
                  color: C.dark,
                  outline: "none",
                  marginBottom: 20,
                  textAlign: "center",
                }}
              />

              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <button
                  onClick={handleSubmit}
                  disabled={!email || loading}
                  style={{
                    padding: "14px 36px",
                    borderRadius: 50,
                    border: "none",
                    background: "linear-gradient(135deg, " + C.primary + ", #2A9D8F)",
                    color: C.white,
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    cursor: !email || loading ? "not-allowed" : "pointer",
                    opacity: !email || loading ? 0.6 : 1,
                    boxShadow: "0 4px 14px rgba(26,107,90,0.3)",
                  }}
                >
                  {loading ? (
                    <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{
                        width: 16, height: 16,
                        border: "2px solid rgba(255,255,255,0.3)",
                        borderTopColor: C.white,
                        borderRadius: "50%",
                        animation: "spin 0.8s linear infinite",
                        display: "inline-block",
                      }} />
                      Sending...
                    </span>
                  ) : "Get My Itinerary →"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 40,
          gap: 12,
        }}>
          <button
            onClick={() => setStep(Math.max(1, step - 1))}
            disabled={step === 1}
            style={{
              padding: "12px 28px",
              borderRadius: 10,
              border: "1.5px solid " + C.border,
              background: C.white,
              color: C.mid,
              fontWeight: 600,
              fontSize: "0.9rem",
              cursor: step === 1 ? "not-allowed" : "pointer",
              opacity: step === 1 ? 0.5 : 1,
            }}
          >← Back</button>

          <button
            onClick={() => {
              if (step === 4) return;
              setStep(step + 1);
            }}
            disabled={
              (step === 1 && !selectedDest) ||
              (step === 2 && !selectedType) ||
              (step === 3 && (!dates.start || !dates.end || !budget))
            }
            style={{
              padding: "12px 28px",
              borderRadius: 10,
              border: "none",
              background: "linear-gradient(135deg, " + C.primary + ", #2A9D8F)",
              color: C.white,
              fontWeight: 700,
              fontSize: "0.9rem",
              cursor: (
                (step === 1 && !selectedDest) ||
                (step === 2 && !selectedType) ||
                (step === 3 && (!dates.start || !dates.end || !budget))
              ) ? "not-allowed" : "pointer",
              opacity: (
                (step === 1 && !selectedDest) ||
                (step === 2 && !selectedType) ||
                (step === 3 && (!dates.start || !dates.end || !budget))
              ) ? 0.5 : 1,
              boxShadow: "0 4px 14px rgba(26,107,90,0.3)",
            }}
          >
            {step === 3 ? "Review →" : "Next →"}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}