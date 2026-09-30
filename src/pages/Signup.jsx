import { motion } from "framer-motion";
import { ArrowRight, Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/common/Button.jsx";
import Container from "../components/common/Container.jsx";
import Toast from "../components/common/Toast.jsx";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [examGoal, setExamGoal] = useState("JEE Main & Advanced");
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(true);
  const [toastMsg, setToastMsg] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !password) {
      setToastMsg("Please fill in all required fields.");
      setTimeout(() => setToastMsg(""), 3000);
      return;
    }
    setToastMsg(`Welcome aboard, ${name}! Your R Academy account is ready.`);
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  }

  return (
    <div className="auth-page">
      <Container>
        <div className="auth-card-wrap">
          <motion.div
            className="auth-card"
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="auth-header">
              <Link to="/" className="auth-brand">
                <span className="brand-mark">
                  <span />
                </span>
                <span>R Academy</span>
              </Link>
              <h2>Create your free account</h2>
              <p>Join 1M+ learners preparing smarter for competitive exams and tech careers.</p>
            </div>

            {/* Social Logins */}
            <div className="social-auth-row">
              <button
                type="button"
                className="social-btn"
                onClick={() => {
                  setToastMsg("Signed up with Google! Welcome to R Academy.");
                  setTimeout(() => navigate("/dashboard"), 1000);
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                Sign up with Google
              </button>
            </div>

            <div className="auth-divider">
              <span>or register with email</span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="auth-field">
                <label>Full Name</label>
                <div className="input-icon-group">
                  <User size={16} className="field-icon" />
                  <input
                    type="text"
                    placeholder="e.g. Aanya Patel"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="auth-field">
                <label>Email Address</label>
                <div className="input-icon-group">
                  <Mail size={16} className="field-icon" />
                  <input
                    type="email"
                    placeholder="name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="auth-field">
                <label>Primary Learning Goal</label>
                <select
                  value={examGoal}
                  onChange={(e) => setExamGoal(e.target.value)}
                  className="auth-select"
                >
                  <option value="JEE Main & Advanced">JEE Main & Advanced</option>
                  <option value="NEET UG">NEET Medical UG</option>
                  <option value="UPSC Civil Services">UPSC Civil Services</option>
                  <option value="Full Stack Software Engineering">Full Stack & Software Engineering</option>
                  <option value="GATE & PSU Exams">GATE Engineering</option>
                  <option value="School CBSE/ICSE">Class 10-12 Boards</option>
                </select>
              </div>

              <div className="auth-field">
                <label>Create Password</label>
                <div className="input-icon-group">
                  <Lock size={16} className="field-icon" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="At least 8 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="terms-row">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    required
                  />
                  <span>
                    I agree to R Academy's <a href="#terms">Terms of Service</a> &{" "}
                    <a href="#privacy">Privacy Policy</a>
                  </span>
                </label>
              </div>

              <Button size="lg" type="submit" className="w-full">
                Create Free Account <ArrowRight size={16} />
              </Button>
            </form>

            <div className="auth-footer">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="auth-link-bold">
                  Log in
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </Container>

      {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg("")} />}
    </div>
  );
}
