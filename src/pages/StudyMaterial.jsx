import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle,
  Download,
  Eye,
  FileCheck,
  FileText,
  Search,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "../components/common/Badge.jsx";
import Button from "../components/common/Button.jsx";
import Container from "../components/common/Container.jsx";
import Toast from "../components/common/Toast.jsx";
import { studyMaterials } from "../data/studyMaterialData.js";

const categories = [
  "All",
  "Physics",
  "Chemistry",
  "Computer Science",
  "General Studies",
];

export default function StudyMaterial() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedNote, setSelectedNote] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  const filtered = studyMaterials.filter((item) => {
    const matchCat =
      activeCategory === "All" || item.category === activeCategory;
    const matchSearch =
      !search.trim() ||
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  function triggerDownload(title) {
    setToastMessage(`Downloading "${title}"... (PDF saved to Downloads)`);
    setTimeout(() => setToastMessage(""), 3500);
  }

  return (
    <div className="study-material-page">
      {/* Hero */}
      <section className="study-hero">
        <Container>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Study Material</span>
          </div>

          <div className="study-hero-inner">
            <div className="study-hero-copy">
              <Badge variant="primary">High-Yield Knowledge Vault</Badge>
              <h1>Handcrafted Revision Notes & Formula Handbooks</h1>
              <p>
                Download crisp, color-coded summaries, reaction roadmaps, system
                design cheat-sheets, and 15-year solved previous year papers (PYQs).
              </p>

              <div className="study-search-wrap">
                <Search size={18} className="search-ico" />
                <input
                  type="search"
                  placeholder="Search formula sheets, notes by topic or exam..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="study-hero-card">
              <img
                src="/assets/images/study-resources.jpg"
                alt="Study Notes Library"
                className="study-hero-img"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Material Grid */}
      <section className="study-content-section section-space">
        <Container>
          <div className="study-filter-bar">
            <div className="study-cat-pills">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`study-cat-btn ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <span className="material-count-text">
              {filtered.length} resources available
            </span>
          </div>

          <div className="study-grid">
            {filtered.map((item) => (
              <motion.article
                key={item.id}
                className="material-card"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mat-card-header">
                  <div className="mat-icon-tag">
                    <FileText size={20} className="text-primary" />
                    <span>{item.type}</span>
                  </div>
                  <span className="mat-exam-badge">{item.exam}</span>
                </div>

                <h3>{item.title}</h3>
                <p className="mat-preview-desc">{item.previewText}</p>

                <div className="mat-tags-row">
                  {item.tags.map((t) => (
                    <span key={t}>#{t}</span>
                  ))}
                </div>

                <div className="mat-meta-bar">
                  <span>
                    <Star size={13} fill="#f59e0b" color="#f59e0b" /> {item.rating}
                  </span>
                  <span>{item.pages} Pages</span>
                  <span>{item.size}</span>
                  <span>{item.downloads} downloads</span>
                </div>

                <div className="mat-card-actions">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setSelectedNote(item)}
                  >
                    <Eye size={14} /> Quick Preview
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => triggerDownload(item.title)}
                  >
                    <Download size={14} /> Download PDF
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* PDF Quick Preview Modal */}
      <AnimatePresence>
        {selectedNote && (
          <div
            className="note-modal-backdrop"
            onClick={() => setSelectedNote(null)}
          >
            <motion.div
              className="note-preview-modal"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="note-modal-header">
                <div>
                  <Badge variant="primary">{selectedNote.category}</Badge>
                  <h3>{selectedNote.title}</h3>
                </div>
                <button
                  className="close-btn"
                  onClick={() => setSelectedNote(null)}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="note-modal-body">
                <div className="note-summary-box">
                  <Sparkles size={18} className="text-primary" />
                  <p>{selectedNote.previewText}</p>
                </div>

                <div className="note-toc-section">
                  <h4>Included Chapters & Table of Contents ({selectedNote.pages} pages):</h4>
                  <div className="toc-grid">
                    {selectedNote.tableOfContents.map((chap, idx) => (
                      <div key={idx} className="toc-item">
                        <CheckCircle size={15} className="text-green" />
                        <span>
                          Chapter {idx + 1}: <strong>{chap}</strong>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="note-watermark-card">
                  <FileCheck size={28} className="text-accent" />
                  <div>
                    <strong>Verified High-Yield Quality</strong>
                    <p>
                      Compiled and peer-reviewed by top-ranking educators and
                      subject matter specialists.
                    </p>
                  </div>
                </div>
              </div>

              <div className="note-modal-footer">
                <Button
                  size="md"
                  onClick={() => {
                    triggerDownload(selectedNote.title);
                    setSelectedNote(null);
                  }}
                  className="w-full"
                >
                  <Download size={16} /> Download Complete PDF ({selectedNote.size})
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage("")} />
      )}
    </div>
  );
}
