import { Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./pages/Home.jsx";
import Courses from "./pages/Courses.jsx";
import CourseDetails from "./pages/CourseDetails.jsx";
import Exams from "./pages/Exams.jsx";
import ExamDetails from "./pages/ExamDetails.jsx";
import Educators from "./pages/Educators.jsx";
import EducatorProfile from "./pages/EducatorProfile.jsx";
import LiveClasses from "./pages/LiveClasses.jsx";
import AiAssistant from "./pages/AiAssistant.jsx";
import Tests from "./pages/Tests.jsx";
import StudyMaterial from "./pages/StudyMaterial.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Pricing from "./pages/Pricing.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import "./App.css";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="app-shell">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/exams/:id" element={<ExamDetails />} />
            <Route path="/educators" element={<Educators />} />
            <Route path="/educators/:id" element={<EducatorProfile />} />
            <Route path="/live" element={<LiveClasses />} />
            <Route path="/ai-assistant" element={<AiAssistant />} />
            <Route path="/tests" element={<Tests />} />
            <Route path="/study-material" element={<StudyMaterial />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;

