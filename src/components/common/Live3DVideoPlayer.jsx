import { AnimatePresence, motion } from "framer-motion";
import {
  Eye,
  Flame,
  Heart,
  Lightbulb,
  Maximize2,
  Mic,
  PartyPopper,
  Pause,
  Play,
  Radio,
  Rocket,
  Settings,
  Sparkles,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Live3DVideoPlayer({
  streamTitle = "System Design & Distributed Cloud Architecture",
  educatorName = "Prof. Verma (Ex-Google L6)",
  viewers = "2,450",
  onRaiseHand,
}) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [reactions, setReactions] = useState([]);
  const [activeTab, setActiveTab] = useState("board"); // 'board' | '3d-sim' | 'code'
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16; // -8 to 8 deg
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16; // -8 to 8 deg
    setMousePos({ x, y });
  }

  function handleMouseLeave() {
    setMousePos({ x: 0, y: 0 });
  }

  function triggerReaction(emoji) {
    const id = Date.now() + Math.random();
    const randomLeft = 20 + Math.random() * 60; // 20% to 80%
    setReactions((prev) => [...prev, { id, emoji, left: randomLeft }]);
    setTimeout(() => {
      setReactions((prev) => prev.filter((r) => r.id !== id));
    }, 2000);
  }

  return (
    <div
      className="live-3d-player-outer"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="live-3d-screen-card"
        animate={{
          rotateY: mousePos.x,
          rotateX: mousePos.y,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 25 }}
      >
        {/* Holographic 3D Ambient Glow */}
        <div className="player-3d-ambient-glow" />

        {/* Top Floating Stream Bar */}
        <div className="player-top-header">
          <div className="player-live-badge-wrap">
            <span className="player-live-badge">
              <Radio size={12} className="pulse-red" />
              <span>3D LIVE ON AIR</span>
            </span>
            <span className="player-viewers-pill">
              <Eye size={12} /> {viewers} watching
            </span>
          </div>

          <div className="player-stream-tabs">
            <button
              type="button"
              className={`p-tab-btn ${activeTab === "board" ? "active" : ""}`}
              onClick={() => setActiveTab("board")}
            >
              Interactive Board
            </button>
            <button
              type="button"
              className={`p-tab-btn ${activeTab === "3d-sim" ? "active" : ""}`}
              onClick={() => setActiveTab("3d-sim")}
            >
              3D Hologram Sim
            </button>
            <button
              type="button"
              className={`p-tab-btn ${activeTab === "code" ? "active" : ""}`}
              onClick={() => setActiveTab("code")}
            >
              Live Code
            </button>
          </div>
        </div>

        {/* Central 3D Video Content Canvas */}
        <div className="player-video-canvas">
          {activeTab === "board" && (
            <div className="canvas-board-view">
              <div className="board-grid-bg" />
              <div className="board-hologram-content">
                <div className="board-header-tag">
                  <Sparkles size={14} /> Microservices Architecture & Raft Consensus
                </div>

                <div className="board-diagram-3d">
                  <div className="node node-client">
                    <span>Edge API Gateway</span>
                    <small>Latency: 8ms</small>
                  </div>
                  <div className="diagram-line-flow">
                    <span className="flow-dot" />
                    <span className="flow-dot" />
                  </div>
                  <div className="node node-service">
                    <span>Auth & Session Cluster</span>
                    <small>3 Replicas Active</small>
                  </div>
                  <div className="diagram-line-flow">
                    <span className="flow-dot" />
                    <span className="flow-dot" />
                  </div>
                  <div className="node node-db">
                    <span>Distributed Redis + Kafka</span>
                    <small>99.999% SLA</small>
                  </div>
                </div>

                <div className="board-live-notes">
                  <p>
                    📌 <strong>Live Key Takeaway:</strong> Leader election achieves quorum in
                    under 150ms using randomized election timeouts.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "3d-sim" && (
            <div className="canvas-3d-sim-view">
              <div className="sim-sphere-core">
                <div className="orbit-ring ring-1" />
                <div className="orbit-ring ring-2" />
                <div className="orbit-ring ring-3" />
                <div className="sim-center-pulse">
                  <span>3D SIMULATION</span>
                </div>
              </div>
              <div className="sim-caption">
                <strong>Real-time 3D Particle & Physics Vector Field</strong>
                <small>Simulating electrostatic potential across 10,000 charge nodes</small>
              </div>
            </div>
          )}

          {activeTab === "code" && (
            <div className="canvas-code-view">
              <div className="code-editor-mock">
                <div className="code-tab-header">
                  <span className="code-dot red" />
                  <span className="code-dot yellow" />
                  <span className="code-dot green" />
                  <span className="code-filename">raft_consensus.go</span>
                </div>
                <pre className="code-body">
                  <code>{`func (rf *Raft) StartElection() {
    rf.currentTerm++
    rf.state = Candidate
    rf.votedFor = rf.me
    votesReceived := 1
    
    // Broadcast RequestVote RPCs in parallel 3D async
    for peer := range rf.peers {
        go rf.sendRequestVote(peer, &args, &reply)
    }
}`}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Floating 3D Educator PiP Avatar & Audio Visualizer */}
          <div className="educator-3d-pip-card">
            <div className="pip-avatar-wrap">
              <img
                src="/assets/images/ai-tutor.jpg"
                alt="Educator Live Feed"
                className="pip-avatar-img"
              />
              <span className="pip-live-mic-dot" title="Microphone Active">
                <Mic size={10} />
              </span>
            </div>
            <div className="pip-info">
              <strong>{educatorName}</strong>
              <div className="soundwave-equalizer">
                <span className="bar bar-1" />
                <span className="bar bar-2" />
                <span className="bar bar-3" />
                <span className="bar bar-4" />
                <span className="bar bar-5" />
              </div>
            </div>
          </div>

          {/* Floating Upward Emoji Reactions */}
          <div className="reactions-float-arena">
            <AnimatePresence>
              {reactions.map((r) => (
                <motion.div
                  key={r.id}
                  className="floating-emoji-item"
                  style={{ left: `${r.left}%` }}
                  initial={{ opacity: 0, y: 30, scale: 0.5 }}
                  animate={{ opacity: 1, y: -180, scale: 1.25 }}
                  exit={{ opacity: 0, scale: 1.5 }}
                  transition={{ duration: 1.8, ease: "easeOut" }}
                >
                  {r.emoji}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Floating Control Bar */}
        <div className="player-bottom-controls">
          <div className="control-left-group">
            <button
              type="button"
              className="player-ctrl-btn"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause Stream" : "Play Stream"}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} fill="currentColor" />}
            </button>

            <button
              type="button"
              className="player-ctrl-btn"
              onClick={() => setIsMuted(!isMuted)}
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>

            <span className="spatial-audio-badge">
              <Sparkles size={12} /> 3D Spatial Audio ON
            </span>
          </div>

          {/* Emoji Reaction Click Bar */}
          <div className="reaction-trigger-bar">
            <button
              type="button"
              className="rx-btn"
              onClick={() => triggerReaction("🔥")}
              title="Fire"
            >
              🔥
            </button>
            <button
              type="button"
              className="rx-btn"
              onClick={() => triggerReaction("🚀")}
              title="Rocket"
            >
              🚀
            </button>
            <button
              type="button"
              className="rx-btn"
              onClick={() => triggerReaction("💡")}
              title="Idea"
            >
              💡
            </button>
            <button
              type="button"
              className="rx-btn"
              onClick={() => triggerReaction("👏")}
              title="Clap"
            >
              👏
            </button>
            <button
              type="button"
              className="rx-btn"
              onClick={() => triggerReaction("❤️")}
              title="Love"
            >
              ❤️
            </button>
          </div>

          <div className="control-right-group">
            <span className="resolution-chip">4K 60FPS</span>
            {onRaiseHand && (
              <button
                type="button"
                className="raise-hand-pill-btn"
                onClick={onRaiseHand}
              >
                ✋ Raise Hand
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
