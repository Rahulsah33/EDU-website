import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle2,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Menu,
  Radio,
  Search,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "../common/Button.jsx";
import GlobalSearchModal from "../common/GlobalSearchModal.jsx";
import ThemeToggle from "../common/ThemeToggle.jsx";

const navItems = [
  { label: "Courses", path: "/courses", icon: BookOpen },
  { label: "Live", path: "/live", icon: Radio, isLive: true },
  { label: "AI Tutor", path: "/ai-assistant", icon: Sparkles, isAi: true },
  { label: "Mock Tests", path: "/tests", icon: CheckCircle2 },
  { label: "Study Material", path: "/study-material", icon: FileText },
  { label: "Educators", path: "/educators", icon: Users },
  { label: "Pricing", path: "/pricing", icon: Zap },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onResize = () => {
      if (window.innerWidth > 960) setOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-glow-bar" />
        <div className="container nav-inner">
          {/* Brand Logo with Glowing Mark */}
          <Link
            className="brand"
            to="/"
            onClick={() => setOpen(false)}
            aria-label="R Academy Home"
          >
            <div className="brand-icon-wrapper">
              <GraduationCap size={20} className="brand-cap-icon" />
              <div className="brand-glow-ring" />
            </div>
            <div className="brand-text-wrap">
              <span className="brand-title">R ACADEMY</span>
            </div>
          </Link>

          {/* Desktop Floating Pill Navigation Dock */}
          <nav className="desktop-nav-dock" aria-label="Main Navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `dock-nav-item ${isActive ? "active" : ""} ${item.isAi ? "ai-pill-item" : ""
                    } ${item.isLive ? "live-pill-item" : ""}`
                  }
                >
                  <Icon
                    size={14}
                    className={`dock-icon ${item.isAi ? "ai-sparkle-anim" : ""} ${item.isLive ? "live-radio-anim" : ""
                      }`}
                  />
                  <span>{item.label}</span>

                  {item.isLive && (
                    <span className="live-mini-dot">
                      <span className="dot-ping" />
                      <span className="dot-core" />
                    </span>
                  )}

                  {item.isAi && <span className="ai-neon-tag">NEW</span>}

                  {isActive && (
                    <motion.div
                      layoutId="navActiveIndicator"
                      className="dock-active-glow"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Desktop Right Action Bar */}
          <div className="nav-actions desktop-actions">
            {/* Group 1: Utilities (Spotlight Search + Dark/Light Theme Switcher) */}
            <div className="nav-action-group utility-group">
              <button
                className="spotlight-search-trigger"
                onClick={() => setSearchOpen(true)}
                aria-label="Spotlight Search"
                title="Quick Spotlight Search (Ctrl+K or ⌘K)"
              >
                <Search size={14} className="search-lens" />
                <span className="search-placeholder">Search...</span>
                <kbd className="search-kbd-shortcut">⌘K</kbd>
              </button>

              <div className="theme-toggle-capsule" title="Toggle theme">
                <ThemeToggle />
              </div>
            </div>

            <div className="nav-action-divider" aria-hidden="true" />

            {/* Group 2: Account & Access */}
            <div className="nav-action-group user-group">
              <Link
                className="nav-dashboard-button"
                to="/dashboard"
                title="My Learning Dashboard"
              >
                <LayoutDashboard size={14} />
                <span>Dashboard</span>
              </Link>

              <Link className="login-link-pill" to="/login">
                Sign In
              </Link>
            </div>
          </div>

          {/* Mobile Right Controls */}
          <div className="mobile-actions">
            <button
              className="mobile-search-btn"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
            >
              <Search size={18} />
            </button>
            <ThemeToggle />
            <button
              className="mobile-hamburger-btn"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Glass Navigation */}
        <AnimatePresence>
          {open && (
            <motion.nav
              className="mobile-glass-nav"
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              aria-label="Mobile navigation"
            >
              <div className="mobile-nav-inner-list">
                <div className="mobile-quick-search-bar">
                  <button
                    className="mobile-search-bar-btn"
                    onClick={() => {
                      setOpen(false);
                      setSearchOpen(true);
                    }}
                  >
                    <Search size={16} />
                    <span>Search courses, exams, AI notes...</span>
                    <kbd>⌘K</kbd>
                  </button>
                </div>

                <div className="mobile-nav-grid-links">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                          `mobile-grid-link ${isActive ? "active" : ""}`
                        }
                        onClick={() => setOpen(false)}
                      >
                        <div className="m-link-icon-wrap">
                          <Icon size={16} />
                        </div>
                        <div className="m-link-text">
                          <strong>{item.label}</strong>
                          {item.isLive && <span className="m-live-tag">● LIVE NOW</span>}
                          {item.isAi && <span className="m-ai-tag">✨ AI Powered</span>}
                        </div>
                      </NavLink>
                    );
                  })}
                </div>

                <div className="mobile-nav-secondary-links">
                  <NavLink to="/dashboard" onClick={() => setOpen(false)}>
                    <LayoutDashboard size={15} /> Student Dashboard
                  </NavLink>
                  <NavLink to="/about" onClick={() => setOpen(false)}>
                    About R Academy
                  </NavLink>
                  <NavLink to="/contact" onClick={() => setOpen(false)}>
                    Contact Support
                  </NavLink>
                </div>

                <div className="mobile-nav-auth-actions">
                  <Link
                    to="/login"
                    className="button button-outline button-md w-full"
                    onClick={() => setOpen(false)}
                  >
                    Log in
                  </Link>
                  <Link
                    to="/signup"
                    className="cta-get-started-btn mobile-cta-full"
                    onClick={() => setOpen(false)}
                  >
                    <span>Get Started Free</span>
                    <div className="btn-shine-sweep" />
                  </Link>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Global Spotlight Search Modal */}
      <GlobalSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}
