import {
  Building2,
  Calendar,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "../components/common/Badge.jsx";
import Button from "../components/common/Button.jsx";
import Container from "../components/common/Container.jsx";
import Toast from "../components/common/Toast.jsx";

const campusCenters = [
  {
    id: "bengaluru",
    city: "Bengaluru",
    name: "RR Edu Headquarters & Innovation Center",
    tag: "National HQ",
    address: "Koramangala 5th Block, 80 Feet Main Road, Bengaluru, Karnataka 560095",
    phone: "+91 80 4567 8900",
    email: "bengaluru@rr.edu",
    hours: "Mon - Sat: 8:00 AM – 8:00 PM IST",
    metro: "Near Sony World Junction / Forum South Metro",
    query: "Koramangala%205th%20Block%20Bengaluru%20India",
  },
  {
    id: "delhi",
    city: "New Delhi",
    name: "RR Edu Academic & Exam Counseling Hub",
    tag: "Northern Hub",
    address: "Barakhamba Road, Statesman House, Connaught Place, New Delhi 110001",
    phone: "+91 11 2345 6789",
    email: "delhi@rr.edu",
    hours: "Mon - Sat: 8:30 AM – 8:30 PM IST",
    metro: "Rajiv Chowk Gate 2 / Barakhamba Road Metro",
    query: "Connaught%20Place%20New%20Delhi%20India",
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    name: "RR Edu Tech & Hybrid Classroom Arena",
    tag: "Tech Hub",
    address: "Mindspace IT Park, Building 12B, Madhapur, Hitec City, Hyderabad 500081",
    phone: "+91 40 6789 0123",
    email: "hyderabad@rr.edu",
    hours: "Mon - Sat: 9:00 AM – 8:00 PM IST",
    metro: "Hitec City / Raidurg Metro Station",
    query: "Hitec%20City%20Madhapur%20Hyderabad%20India",
  },
];

export default function Contact() {
  const [selectedCenter, setSelectedCenter] = useState(campusCenters[0]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Course Inquiry",
    message: "",
  });
  const [toastMsg, setToastMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setToastMsg("Please fill out all required fields.");
      setTimeout(() => setToastMsg(""), 3000);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setToastMsg(`Thank you, ${formData.name}! Your message has been sent to our student advisory team. We'll reply within 2 hours.`);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Course Inquiry",
        message: "",
      });
      setTimeout(() => setToastMsg(""), 4500);
    }, 800);
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <Container>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>

          <div className="contact-hero-inner">
            <Badge variant="primary">We're Here To Help</Badge>
            <h1>Get In Touch With Our Learning Advisors</h1>
            <p>
              Have a question about course syllabi, live batch timings, exam
              counseling, or campus visits? We'd love to assist you.
            </p>
          </div>
        </Container>
      </section>

      <section className="contact-main-section section-space">
        <Container>
          <div className="contact-layout-grid">
            {/* Contact Form */}
            <div className="contact-form-panel">
              <div className="form-panel-header">
                <Sparkles size={20} className="text-primary" />
                <h3>Send Us A Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="contact-form-inner">
                <div className="form-row-dual">
                  <div className="form-field">
                    <label>Your Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="form-row-dual">
                  <div className="form-field">
                    <label>Phone Number (Optional)</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-field">
                    <label>Inquiry Topic *</label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    >
                      <option value="Course Inquiry">Course & Curriculum Inquiry</option>
                      <option value="Live Batches">Live Batch Timings</option>
                      <option value="Campus Visit">Schedule In-Person Campus Visit</option>
                      <option value="Technical Support">Technical & Platform Support</option>
                      <option value="Educator Partnership">Educator / Teacher Partnership</option>
                      <option value="Billing & Refunds">Subscription & Billing</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label>Your Message *</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your learning goals or question..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                <Button
                  size="lg"
                  type="submit"
                  disabled={submitting}
                  className="w-full"
                >
                  <Send size={16} /> {submitting ? "Sending..." : "Submit Message"}
                </Button>
              </form>
            </div>

            {/* Info & Channels Column */}
            <div className="contact-info-panel">
              <div className="contact-channel-card">
                <div className="channel-icon-box">
                  <Mail size={22} className="text-primary" />
                </div>
                <div>
                  <h4>Email Student Support</h4>
                  <p>support@rr.edu • admissions@rr.edu</p>
                  <small>Typical response time: Under 2 hours</small>
                </div>
              </div>

              <div className="contact-channel-card">
                <div className="channel-icon-box">
                  <Phone size={22} className="text-accent" />
                </div>
                <div>
                  <h4>Toll-Free Student Helpline</h4>
                  <p>1800-123-RR EDU (9 AM – 9 PM IST)</p>
                  <small>Available Monday to Sunday</small>
                </div>
              </div>

              <div className="contact-channel-card">
                <div className="channel-icon-box">
                  <MessageCircle size={22} className="text-green" />
                </div>
                <div>
                  <h4>Live WhatsApp Advisory</h4>
                  <p>+91 91234 56789</p>
                  <small>Chat directly with an exam mentor</small>
                </div>
              </div>

              <div className="campus-quick-card">
                <div className="channel-icon-box">
                  <Building2 size={22} className="text-primary" />
                </div>
                <div>
                  <h4>Visit Our Physical Centers</h4>
                  <p>Walk in for free diagnostic tests & 1-on-1 career counseling.</p>
                  <small>3 Major Hubs: Bengaluru, Delhi & Hyderabad</small>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Google Map & Campus Center Locator Section */}
          <div className="map-locator-section">
            <div className="map-section-header">
              <div>
                <Badge variant="primary">Visit Our Centers</Badge>
                <h2>Interactive Campus & Headquarters Map</h2>
                <p>Explore our state-of-the-art offline coaching facilities, smart classrooms, and student libraries.</p>
              </div>

              {/* City Selection Tabs */}
              <div className="campus-tabs-bar">
                {campusCenters.map((center) => (
                  <button
                    key={center.id}
                    type="button"
                    className={`campus-tab-btn ${
                      selectedCenter.id === center.id ? "active" : ""
                    }`}
                    onClick={() => setSelectedCenter(center)}
                  >
                    <MapPin size={14} />
                    <span>{center.city}</span>
                    <span className="campus-tab-tag">{center.tag}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Map & Detail Container */}
            <div className="map-display-grid">
              {/* Left Detail Card */}
              <div className="map-info-card">
                <div className="map-card-head">
                  <span className="location-active-badge">
                    <span className="pulse-green-dot" /> Open For Visits
                  </span>
                  <h3>{selectedCenter.name}</h3>
                </div>

                <div className="map-info-list">
                  <div className="map-info-item">
                    <MapPin size={18} className="map-icon" />
                    <div>
                      <strong>Address:</strong>
                      <p>{selectedCenter.address}</p>
                    </div>
                  </div>

                  <div className="map-info-item">
                    <Navigation size={18} className="map-icon" />
                    <div>
                      <strong>Nearest Transit / Metro:</strong>
                      <p>{selectedCenter.metro}</p>
                    </div>
                  </div>

                  <div className="map-info-item">
                    <Clock size={18} className="map-icon" />
                    <div>
                      <strong>Visiting Hours:</strong>
                      <p>{selectedCenter.hours}</p>
                    </div>
                  </div>

                  <div className="map-info-item">
                    <Phone size={18} className="map-icon" />
                    <div>
                      <strong>Direct Desk Phone:</strong>
                      <p>{selectedCenter.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="map-card-actions">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${selectedCenter.query}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-primary button-md w-full"
                  >
                    <ExternalLink size={15} /> Get Directions on Google Maps
                  </a>
                </div>
              </div>

              {/* Right Live Embedded Google Map */}
              <div className="map-embed-wrapper">
                <iframe
                  title={`Google Map Location for ${selectedCenter.name}`}
                  src={`https://maps.google.com/maps?q=${selectedCenter.query}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="google-map-iframe"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg("")} />}
    </div>
  );
}
