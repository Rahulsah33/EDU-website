import { motion } from "framer-motion";
import {
  BookOpen,
  Bot,
  BrainCircuit,
  Check,
  Copy,
  Flame,
  HelpCircle,
  Lightbulb,
  RotateCcw,
  Send,
  Sparkles,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/common/Container.jsx";
import Toast from "../components/common/Toast.jsx";

const quickPrompts = [
  {
    mode: "Explain",
    icon: Lightbulb,
    title: "Explain Dijkstra's Algorithm",
    prompt: "Explain Dijkstra's shortest path algorithm using a real-world GPS navigation analogy and give time complexity.",
  },
  {
    mode: "Solve",
    icon: Zap,
    title: "Solve Physics Kinematics",
    prompt: "A ball is thrown vertically upward with 20 m/s from a 25m tall building. Find the time it takes to strike the ground.",
  },
  {
    mode: "Flashcards",
    icon: BookOpen,
    title: "Organic Chemistry Reactions",
    prompt: "Generate 4 high-yield flashcards with named reactions (Aldol, Cannizzaro, Sandmeyer, Friedel-Crafts) for JEE/NEET.",
  },
  {
    mode: "Quiz",
    icon: HelpCircle,
    title: "System Design Practice",
    prompt: "Give me 3 tough multiple-choice questions on Database Sharding and Consistent Hashing with detailed explanations.",
  },
];

const initialMessages = [
  {
    id: "m-1",
    sender: "ai",
    text: "👋 Hi there! I'm your **RR Edu AI Tutor**.\n\nI can help you solve tricky problems step-by-step, explain complex formulas with simple analogies, generate revision flashcards, or practice mock questions for JEE, NEET, UPSC, and Software Engineering.\n\nWhat would you like to master today?",
    time: "Just now",
  },
];

const simulatedResponses = {
  dijkstra: `### 🚀 Dijkstra's Shortest Path Algorithm

Imagine you are using Google Maps to find the fastest route through a city of interconnected toll roads:

#### 1. The Core Intuition
* **Greedy Strategy**: You always pick the unvisited intersection that is currently reachable with the **lowest total cost**.
* Once an intersection is finalized, its shortest distance from the start is permanently locked in because all road costs (edge weights) are non-negative ($w \\ge 0$).

#### 2. Step-by-Step Algorithm
1. Initialize distances: $dist[start] = 0$, all other vertices $dist[v] = \\infty$.
2. Insert $(0, start)$ into a **Min-Priority Queue (Min-Heap)**.
3. While queue is not empty:
   - Pop vertex $u$ with minimum distance.
   - For each adjacent neighbor $v$ with weight $w$:
     $$\\text{if } dist[u] + w < dist[v] \\implies dist[v] = dist[u] + w$$
     Push $(dist[v], v)$ into Priority Queue.

\`\`\`python
import heapq

def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    pq = [(0, start)]
    
    while pq:
        curr_dist, u = heapq.heappop(pq)
        if curr_dist > distances[u]:
            continue
        for v, weight in graph[u].items():
            if curr_dist + weight < distances[v]:
                distances[v] = curr_dist + weight
                heapq.heappush(pq, (distances[v], v))
    return distances
\`\`\`

#### 3. Complexity Analysis
* **Time Complexity**: $\\mathcal{O}((V + E) \\log V)$ using Min-Heap.
* **Space Complexity**: $\\mathcal{O}(V)$ for storing distance array & heap.`,

  physics: `### 🎯 Step-by-Step Solution: Projectile from Height

**Given Parameters:**
* Initial position: $y_0 = +25\\text{ m}$ (taking ground as $y = 0$)
* Initial velocity: $u = +20\\text{ m/s}$ (upwards)
* Acceleration due to gravity: $g = -10\\text{ m/s}^2$ (downwards)
* Final position at ground: $y = 0\\text{ m}$

---

#### Step 1: Use Kinematics Equation
$$y = y_0 + u t + \\frac{1}{2} a t^2$$

Substitute known values:
$$0 = 25 + 20t - \\frac{1}{2}(10)t^2$$
$$0 = 25 + 20t - 5t^2$$

#### Step 2: Divide equation by 5 and rearrange
$$t^2 - 4t - 5 = 0$$

Factorize the quadratic polynomial:
$$(t - 5)(t + 1) = 0$$

#### Step 3: Choose Physical Solution
Since time $t > 0$:
$$t = 5\\text{ seconds}$$

**Answer:** The ball will strike the ground after exactly **5 seconds** with a velocity of $v = u - gt = 20 - (10)(5) = -30\\text{ m/s}$ (downward).`,

  flashcards: `### 📚 High-Yield Flashcards: Organic Chemistry Named Reactions

---

🗂️ **Card 1: Aldol Condensation**
* **Reactants**: Carbonyl compounds containing $\\alpha$-hydrogen with dilute base (e.g., dil. $\\text{NaOH}$).
* **Key Intermediate**: Enolate ion nucleophile attacking another carbonyl.
* **Final Product**: $\\beta$-hydroxy aldehyde / ketone $\\xrightarrow{\\Delta}$ $\\alpha,\\beta$-unsaturated carbonyl.

---

🗂️ **Card 2: Cannizzaro Reaction**
* **Condition**: Aldehydes with **NO $\\alpha$-hydrogen** (e.g., $\\text{HCHO}$, $\\text{PhCHO}$) in conc. $\\text{NaOH}$ (50%).
* **Nature**: Self oxidation-reduction (Disproportionation).
* **Products**: One molecule oxidized to Carboxylate salt + one molecule reduced to primary alcohol.

---

🗂️ **Card 3: Sandmeyer Reaction**
* **Starting Material**: Benzene diazonium chloride ($\\text{Ar}-\\text{N}_2^+\\text{Cl}^-$).
* **Reagent**: $\\text{Cu}_2\\text{Cl}_2/\\text{HCl}$ or $\\text{Cu}_2\\text{Br}_2/\\text{HBr}$ or $\\text{CuCN}/\\text{KCN}$.
* **Product**: Chlorobenzene, Bromobenzene, or Benzonitrile with $\\text{N}_2\\uparrow$ gas release.

---

🗂️ **Card 4: Friedel-Crafts Acylation**
* **Reagent**: $\\text{R-COCl} + \\text{Anhydrous } \\text{AlCl}_3$.
* **Electrophile**: Acylium ion ($\\text{R-C}^+=\\text{O}$), resonance stabilized (No carbocation rearrangement!).
* **Product**: Aromatic Ketone.`,

  quiz: `### 🧠 System Design Practice: Database Sharding & Consistent Hashing

**Q1. What problem does Consistent Hashing solve when scaling a distributed cache?**
* **A)** Ensures ACID transactions across multi-region databases.
* **B)** Minimizes key redistribution when nodes are added or removed from $\\mathcal{O}(N)$ to $\\mathcal{O}(K/N)$. *(Correct)*
* **C)** Encrypts cached keys in memory using RSA public keys.
* **D)** Replaces SQL query planners with graph indexes.

**Explanation:** In traditional modular hashing ($hash(key) \\pmod N$), changing $N$ (adding/removing a node) causes almost 100% of keys to be remapped. Consistent Hashing maps keys and servers onto a circular 360° ring ($2^{32}-1$), so modifying a node only relocates keys in that node's immediate neighborhood.

---

**Q2. In range-based database sharding, what is the primary risk?**
* **Answer:** **Hotspotting**. If data has natural sequential clustering (e.g., timestamps or alphabetical names starting with 'S'), a single shard receives disproportionate traffic, creating a severe bottleneck.`
};

export default function AiAssistant() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [activeMode, setActiveMode] = useState("Concept Explainer");
  const [toastMessage, setToastMessage] = useState("");

  function triggerToast(msg) {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  }

  function handleSend(userText) {
    const textToSend = userText || input;
    if (!textToSend.trim() || isTyping) return;

    const newMsg = {
      id: `m-${Date.now()}`,
      sender: "user",
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, newMsg]);
    if (!userText) setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "";
      const lower = textToSend.toLowerCase();
      if (lower.includes("dijkstra") || lower.includes("shortest path")) {
        botResponse = simulatedResponses.dijkstra;
      } else if (lower.includes("ball") || lower.includes("kinematics") || lower.includes("physics")) {
        botResponse = simulatedResponses.physics;
      } else if (lower.includes("organic") || lower.includes("flashcard") || lower.includes("reaction")) {
        botResponse = simulatedResponses.flashcards;
      } else if (lower.includes("system design") || lower.includes("sharding") || lower.includes("quiz")) {
        botResponse = simulatedResponses.quiz;
      } else {
        botResponse = `### 💡 Analysis & Explanation\n\nHere is the breakdown for **"${textToSend}"**:\n\n1. **Core Concept**: When approaching this topic in exams, identify the fundamental governing principles and baseline boundary conditions.\n2. **Formulas & Relations**: Double check dimensional consistency and unit conversions.\n3. **Practical Tip**: Solve 3-5 previous year exam questions on this exact topic to cement your pattern recognition!\n\n*Would you like me to generate a 3-question rapid quiz on this topic?*`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          sender: "ai",
          text: botResponse,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setIsTyping(false);
    }, 1100);
  }

  function handleCopy(text) {
    navigator.clipboard.writeText(text);
    triggerToast("Copied to clipboard!");
  }

  function handleClear() {
    setMessages(initialMessages);
    triggerToast("Conversation refreshed");
  }

  return (
    <div className="ai-assistant-page">
      <section className="ai-hero">
        <Container>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>AI Assistant</span>
          </div>

          <div className="ai-hero-inner">
            <div className="ai-hero-copy">
              <div className="ai-status-badge">
                <Sparkles size={14} className="text-primary" />
                <span>Powered by RR Edu Quantum</span>
              </div>
              <h1>Your 24/7 Personal AI Tutor</h1>
              <p>
                Get instant step-by-step solutions, intuitive real-world analogies,
                custom flashcards, and exam-grade doubt resolution anytime, anywhere.
              </p>

              <div className="ai-modes-row">
                {["Concept Explainer", "Step-by-Step Solver", "Flashcards", "Mock Quiz"].map(
                  (mode) => (
                    <button
                      key={mode}
                      className={`ai-mode-pill ${activeMode === mode ? "active" : ""}`}
                      onClick={() => setActiveMode(mode)}
                    >
                      {activeMode === mode && <Check size={13} />} {mode}
                    </button>
                  ),
                )}
              </div>
            </div>

            <div className="ai-hero-avatar-card">
              <img
                src="/assets/images/ai-tutor.jpg"
                alt="AI Tutor Avatar"
                className="ai-avatar-glow-img"
              />
              <div className="ai-avatar-tag">
                <span className="ai-online-dot" />
                <div>
                  <strong>RR Edu Tutor</strong>
                  <small>Always online • 0.2s latency</small>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Interactive Chat Arena */}
      <section className="ai-chat-section section-space">
        <Container>
          <div className="ai-chat-wrapper">
            {/* Quick Prompts Bar */}
            <div className="ai-prompts-bar">
              <div className="prompts-heading">
                <Flame size={16} className="text-accent" />
                <span>Popular prompts to try:</span>
              </div>
              <div className="prompts-grid">
                {quickPrompts.map((p) => {
                  const Icon = p.icon;
                  return (
                    <button
                      key={p.title}
                      className="prompt-card-btn"
                      onClick={() => handleSend(p.prompt)}
                    >
                      <Icon size={16} className="prompt-icon" />
                      <div>
                        <strong>{p.title}</strong>
                        <p>{p.prompt.slice(0, 52)}...</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Chat Conversation Box */}
            <div className="ai-conversation-box">
              <div className="conversation-header">
                <div className="header-left">
                  <Bot size={20} className="text-primary" />
                  <div>
                    <strong>Interactive Session</strong>
                    <span>Mode: {activeMode}</span>
                  </div>
                </div>
                <button
                  className="reset-btn"
                  onClick={handleClear}
                  title="Clear Conversation"
                >
                  <RotateCcw size={15} /> Clear Chat
                </button>
              </div>

              <div className="conversation-stream">
                {messages.map((m) => (
                  <motion.div
                    key={m.id}
                    className={`stream-bubble ${m.sender === "ai" ? "ai-msg" : "user-msg"}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="bubble-header">
                      <div className="sender-tag">
                        {m.sender === "ai" ? (
                          <>
                            <BrainCircuit size={15} className="text-primary" />
                            <strong>RR Edu</strong>
                          </>
                        ) : (
                          <>
                            <span className="user-avatar-dot">You</span>
                          </>
                        )}
                      </div>
                      <div className="bubble-actions">
                        <small>{m.time}</small>
                        {m.sender === "ai" && (
                          <button
                            className="copy-btn"
                            onClick={() => handleCopy(m.text)}
                            title="Copy response"
                          >
                            <Copy size={13} />
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="bubble-content">
                      {m.text.split("\n\n").map((para, i) => (
                        <div key={i} className="content-paragraph">
                          {para.startsWith("### ") ? (
                            <h3>{para.replace("### ", "")}</h3>
                          ) : para.startsWith("#### ") ? (
                            <h4>{para.replace("#### ", "")}</h4>
                          ) : para.startsWith("```") ? (
                            <pre className="code-block">
                              <code>{para.replace(/```[a-z]*/g, "")}</code>
                            </pre>
                          ) : (
                            <p>{para}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <div className="stream-bubble ai-msg typing-bubble">
                    <div className="typing-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <em>RR Edu Tutor is formulating step-by-step explanation...</em>
                  </div>
                )}
              </div>

              {/* Input bar */}
              <form
                className="ai-input-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
              >
                <input
                  type="text"
                  placeholder="Ask any question, paste code, or type a math formula..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="send-button"
                  aria-label="Send message"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage("")} />}
    </div>
  );
}
