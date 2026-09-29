import {
  Mail,
  MapPin,
  MessageCircle,
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

export default function Contact() {
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
              counseling, or custom institution packages? We'd love to assist you.
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

              <div className="office-locations-card">
                <h4><MapPin size={16} className="text-primary" /> Campus & Office Locations</h4>
                <ul>
                  <li>
                    <strong>Bengaluru:</strong> Koramangala 5th Block, Tech Hub, Bengaluru 560095
                  </li>
                  <li>
                    <strong>New Delhi:</strong> Connaught Place, Inner Circle, New Delhi 110001
                  </li>
                  <li>
                    <strong>Hyderabad:</strong> Hitec City, Mindspace Madhapur, Hyderabad 500081
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg("")} />}
    </div>
  );
}
