import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container.jsx";

const columns = [
  [
    "Platform",
    [
      ["Courses", "/courses"],
      ["Exams", "/exams"],
      ["Educators", "/educators"],
      ["Live Classes", "/live"],
    ],
  ],
  [
    "Resources",
    [
      ["Study Material", "/study-material"],
      ["Mock Tests", "/tests"],
      ["AI Assistant", "/ai-assistant"],
    ],
  ],
  [
    "Company",
    [
      ["About", "/about"],
      ["Contact", "/contact"],
      ["Pricing", "/pricing"],
    ],
  ],
  [
    "Support",
    [
      ["Help Center", "/contact"],
      ["Privacy", "/about"],
      ["Terms", "/about"],
    ],
  ],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-top">
          <div className="footer-brand">
            <Link className="brand" to="/">
              <span className="brand-mark">
                <span />
              </span>
              <span>RREDU</span>
            </Link>
            <p>Learn smarter. Go further.</p>
            <div className="socials">
              <a href="#linkedin" aria-label="LinkedIn">
                <span className="x-social">in</span>
              </a>
              <a href="#instagram" aria-label="Instagram">
                <span className="x-social">ig</span>
              </a>
              <a href="#youtube" aria-label="YouTube">
                <span className="x-social">yt</span>
              </a>
              <a href="#x" aria-label="X">
                <span className="x-social">X</span>
              </a>
            </div>
          </div>
          <div className="footer-columns">
            {columns.map(([title, items]) => (
              <div key={title}>
                <h3>{title}</h3>
                {items.map(([label, path]) => (
                  <Link key={label} to={path}>
                    {label}
                    <ArrowUpRight size={13} />
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 RREDU. All rights reserved.</span>
          <span>Built for the next chapter.</span>
        </div>
      </Container>
    </footer>
  );
}
