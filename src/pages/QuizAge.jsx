import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import questions6to8 from "../data/quiz6to8.json";
import questions9to12 from "../data/quiz9to12.json";
import questions13to15 from "../data/quiz13to15.json";
import questions16to18 from "../data/quiz16to18.json";
import { motion, AnimatePresence } from "framer-motion";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const initialScores = { S: 0, A: 0, L: 0, K: 0, N: 0 };

const QuizAge = () => {
  const { age } = useParams();
  const [index, setIndex] = useState(0);
  const [scores, setScores] = useState(initialScores);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState([]); // store chosen options for tie-breaker
  const [projects, setProjects] = useState([]);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [showProjectForm, setShowProjectForm] = useState(false);
  // selected interests (kept minimal; search UI removed)
  const [selectedInterests, setSelectedInterests] = useState([]);
  const confettiRef = useRef(null);
  const confettiAnimRef = useRef(null);

  useEffect(() => {
    // reset when age or params change
    setIndex(0);
    setScores(initialScores);
    setAnswers([]);
    setFinished(false);
  }, [age]);

  const questions = age === "16-18" ? questions16to18 : age === "13-15" ? questions13to15 : age === "9-12" ? questions9to12 : questions6to8;
  const isTeen = age === "13-15";
  const isLaunch = age === "16-18";

  const handleAnswer = (opt, weights) => {
    // increment scores by weights object
    const next = { ...scores };
    Object.keys(weights).forEach((k) => {
      next[k] = (next[k] || 0) + weights[k];
    });
    setScores(next);
    // record answer for tie-breaker (store by question id)
    const qId = questions[index]?.id ?? index + 1;
    setAnswers((prev) => [...prev, { qId, key: opt.key, weights }]);

    if (index + 1 >= questions.length) {
      setFinished(true);
      // small delay to let last button click settle, then celebrate
      setTimeout(() => {
        setStars(makeStars(10));
        startConfetti();
        playChime();
      }, 250);
    } else {
      // subtle delay/animation between questions
      setTimeout(() => setIndex(index + 1), 200);
    }
  };

  const addInterest = (t) => { if (!t) return; if (!selectedInterests.includes(t)) setSelectedInterests((s) => [...s, t]); };
  const removeInterest = (t) => setSelectedInterests((s) => s.filter((x) => x !== t));

  const reset = () => {
    setIndex(0);
    setScores(initialScores);
    setFinished(false);
  };

  // labels/values for mini-map removed


  const categoryMap = {
    S: { name: "STEM", title: "Creative Engineer", desc: "Likes to understand how things work, build and solve puzzles." },
    A: { name: "Artistry", title: "Imaginative Creator", desc: "Draws, plays, and makes things with imagination and color." },
    L: { name: "Leadership", title: "Natural Leader", desc: "Helps others, organizes play, and takes care of the team." },
    K: { name: "Academic", title: "Curious Scholar", desc: "Loves stories, facts, and learning new words and ideas." },
    N: { name: "Nature Scout", title: "Nature Explorer", desc: "Enjoys plants, animals and building with natural materials." },
  };

  const getCategoryInfo = (k) => {
    // For 13-15, the fifth pillar is treated as Innovation (Future Builder)
    if (age === "13-15" && k === "N") {
      return { name: "Innovation", title: "Future Builder", desc: "Thinks of sustainable, entrepreneurial solutions to community problems." };
    }
    return categoryMap[k];
  };

  // Benchmarks for 16-18 profiles (example values)
  const benchmarks = {
    STEM: [10,3,5,4,6],
    Artistry: [3,10,4,5,4],
    Leadership: [4,4,10,5,3],
    Academic: [3,5,4,10,2],
    Innovation: [6,4,5,3,10],
  };

  const getBenchmark = (name) => {
    return benchmarks[name] || [5,5,5,5,5];
  };

  const getRoadmap = (name) => {
    const map = {
      STEM: [
        "Year 1: Choose advanced maths & physics; start coding bootcamp.",
        "Year 2: Intern at a local tech shop; contribute to open-source projects.",
        "Year 3: Apply for engineering scholarships and build a capstone project."
      ],
      Artistry: [
        "Year 1: Build a portfolio with 4 strong pieces.",
        "Year 2: Attend a regional arts workshop; submit to festivals.",
        "Year 3: Apply to creative programs or launch a paid creative service."
      ],
      Leadership: [
        "Year 1: Lead school initiatives; join student government.",
        "Year 2: Internship in an NGO or local government office.",
        "Year 3: Apply for leadership fellowships and civic programs."
      ],
      Academic: [
        "Year 1: Focus on deep reading and research skills.",
        "Year 2: Publish a paper or enter academic competitions.",
        "Year 3: Apply for university research programs and scholarships."
      ],
      Innovation: [
        "Year 1: Build a small prototype or service; test locally.",
        "Year 2: Join incubators or startup bootcamps; find a mentor.",
        "Year 3: Seek seed funding and scale the solution regionally."
      ]
    };
    return map[name] || map.STEM;
  };

  // Internship / course links for 16-18
  const internshipLinks = {
    STEM: [
      { label: "Intro to CS (Coursera)", url: "https://www.coursera.org/learn/cs" },
      { label: "FreeCodeCamp Curriculum", url: "https://www.freecodecamp.org/learn" },
      { label: "Local Tech Internship Portal", url: "https://example.org/internships" }
    ],
    Artistry: [
      { label: "Film & Media Courses (edX)", url: "https://www.edx.org/learn/film" },
      { label: "Portfolio Workshops", url: "https://example.org/portfolio" }
    ],
    Leadership: [
      { label: "Youth Leadership Programs", url: "https://example.org/leadership" },
      { label: "NGO Internships", url: "https://example.org/ngointern" }
    ],
    Academic: [
      { label: "Research Methods Course", url: "https://www.coursera.org/learn/research-methods" },
      { label: "Academic Mentorships", url: "https://example.org/mentorship" }
    ],
    Innovation: [
      { label: "Startup Bootcamp", url: "https://example.org/startup-bootcamp" },
      { label: "Sustainability Certification", url: "https://example.org/sustainability" }
    ]
  };

  const getInternships = (name) => internshipLinks[name] || [];

  // Simple certificate generator (PNG) — creates a canvas and opens image in new tab
  const generateCertificate = (primary) => {
    try {
      const width = 1200, height = 800;
      const c = document.createElement('canvas');
      c.width = width; c.height = height;
      const ctx = c.getContext('2d');
      // background
      const grad = ctx.createLinearGradient(0,0,width,0);
      grad.addColorStop(0, '#0f1724');
      grad.addColorStop(1, '#0b1220');
      ctx.fillStyle = grad; ctx.fillRect(0,0,width,height);
      // header
      ctx.fillStyle = '#fff'; ctx.font = '40px serif';
      ctx.textAlign = 'center'; ctx.fillText('WeKraft Certificate of Achievement', width/2, 120);
      ctx.font = '28px serif'; ctx.fillStyle = '#EAB308'; ctx.fillText(primary.title || primary.name, width/2, 190);
      ctx.font = '22px serif'; ctx.fillStyle = '#fff'; ctx.fillText(`Awarded: ${new Date().toLocaleDateString()}`, width/2, 240);
      // body
      ctx.font = '20px serif'; ctx.fillStyle = '#d1d5db';
      ctx.fillText('This certifies that the learner demonstrated strong potential in:', width/2, 320);
      ctx.font = '32px serif'; ctx.fillStyle = '#fff'; ctx.fillText(primary.title || primary.name, width/2, 380);
      // footer
      ctx.font = '18px serif'; ctx.fillStyle = '#9ca3af'; ctx.fillText('WeKraft • Launchpad', width/2, height - 80);
      const url = c.toDataURL('image/png');
      const w = window.open('about:blank');
      if (w) {
        const img = w.document.createElement('img'); img.src = url; img.style.maxWidth = '100%';
        w.document.body.style.margin = '0'; w.document.body.style.background = '#081026';
        w.document.body.appendChild(img);
      } else {
        // fallback: download
        const a = document.createElement('a'); a.href = url; a.download = 'wekraft-certificate.png'; a.click();
      }
    } catch (e) {
      // ignore
    }
  };

  // compute top two with tie-breaker using question 15 answer if needed
  const computeTopTwo = () => {
    const entries = Object.entries(scores).map(([k, v]) => ({ key: k, score: v, ...getCategoryInfo(k) }));
    entries.sort((a, b) => b.score - a.score);
    // check ties for top
    if (entries.length > 1 && entries[0].score === entries[1].score) {
      // try tie-breaker using answer to question id 15
      const q15 = answers.find((a) => a.qId === 15) || answers[answers.length - 1];
      if (q15 && q15.weights) {
        // find which category in q15.weights is set (weight > 0) and matches the tied keys
        const tieKeys = entries.filter((e) => e.score === entries[0].score).map((e) => e.key);
        const chosen = Object.keys(q15.weights).find((k) => q15.weights[k] > 0 && tieKeys.includes(k));
        if (chosen) {
          // move chosen to front
          const chosenIdx = entries.findIndex((e) => e.key === chosen);
          if (chosenIdx > -1) {
            const [picked] = entries.splice(chosenIdx, 1);
            entries.unshift(picked);
          }
        }
      }
    }
    return entries.slice(0, 2);
  };

  const topTwo = computeTopTwo();

  const saveResult = async () => {
    const payload = {
      age,
      scores,
      primary: topTwo[0],
      secondary: topTwo[1],
      portfolio: projects,
      interests: selectedInterests,
      timestamp: new Date().toISOString(),
    };

    // Try to POST to local API (node server). If not available, fallback to localStorage.
    try {
      await fetch("http://localhost:4000/save-result", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (e) {
      const existing = JSON.parse(localStorage.getItem("wekraft_quiz_results") || "[]");
      existing.push(payload);
      localStorage.setItem("wekraft_quiz_results", JSON.stringify(existing));
    }
  };

  // confetti effect for children
  const startConfetti = () => {
    const canvas = confettiRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = (canvas.width = window.innerWidth);
    const h = (canvas.height = window.innerHeight * 0.6);
    const particles = [];
    const colors = ["#FFD166", "#06D6A0", "#118AB2", "#EF476F", "#5C7CFA"];
    const particleCount = 200; // tuned particle count
    const duration = 5000; // ms

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h - h,
        r: Math.random() * 8 + 3,
        d: Math.random() * 40 + 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.random() * 10 - 10,
        tiltAngle: 0,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.tiltAngle += 0.12;
        p.y += Math.cos(p.d) + 1 + p.r / 2;
        p.x += Math.sin(p.d) * 0.6;
        p.tilt = Math.sin(p.tiltAngle) * 12;

        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x + p.tilt, p.y, p.r, p.r * 0.7);
        ctx.closePath();
      });
      confettiAnimRef.current = requestAnimationFrame(draw);
    };

    draw();

    // stop after duration
    setTimeout(() => {
      if (confettiAnimRef.current) cancelAnimationFrame(confettiAnimRef.current);
      ctx.clearRect(0, 0, w, h);
    }, duration);
  };

  // small generated chime using Web Audio API (no external file required)
  const playChime = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();
      const now = ctx.currentTime;
      const freqs = [880, 1100, 1320];
      freqs.forEach((f, i) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = "sine";
        o.frequency.setValueAtTime(f, now + i * 0.12);
        g.gain.setValueAtTime(0, now + i * 0.12);
        g.gain.linearRampToValueAtTime(0.12, now + i * 0.12 + 0.02);
        g.gain.linearRampToValueAtTime(0, now + i * 0.12 + 0.32);
        o.connect(g);
        g.connect(ctx.destination);
        o.start(now + i * 0.12);
        o.stop(now + i * 0.12 + 0.35);
      });
      // close context after sound
      setTimeout(() => { if (ctx.close) ctx.close(); }, 1000);
    } catch (e) {
      // ignore if WebAudio not available
    }
  };

  // stars for burst animation
  const [stars, setStars] = useState([]);
  const makeStars = (count = 8) => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        id: i,
        left: Math.random() * 80 + 10, // percent
        top: Math.random() * 40 + 10,
        delay: Math.random() * 0.6,
        size: Math.random() * 18 + 18,
      });
    }
    return arr;
  };

  return (
    <div className="w-full min-h-screen bg-[#F7F9FB] p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-nexa text-center mb-6">{age === "6-8" ? "Ages 6 - 8 Quiz" : `Quiz: ${age}`}</h1>

        {!finished ? (
          <div className={`${isLaunch ? 'rounded-2xl shadow-md p-5 md:p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white' : 'bg-white rounded-2xl shadow-md p-6 md:p-10'}`}>
            {/* interest search removed for a cleaner teen UI */}
                {isLaunch ? (
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm text-gray-300 mb-2">
                      <div>Question {index + 1} of {questions.length}</div>
                      <div>{Math.round(((index) / questions.length) * 100)}%</div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                      <div className="bg-indigo-500 h-2 rounded-full" style={{ width: `${Math.round(((index) / questions.length) * 100)}%` }} />
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold mt-2 text-white">{questions[index].question}</h2>
                  </div>
                ) : (
                  <div className="mb-4 text-center">
                    <div className="text-sm text-gray-500">Question {index + 1} of {questions.length}</div>
                    <h2 className="text-xl md:text-2xl font-semibold mt-2">{questions[index].question}</h2>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {questions[index].options.map((opt, i) => {
                    const kidBg = [
                      "from-pink-400 to-pink-500",
                      "from-yellow-300 to-yellow-400",
                      "from-sky-400 to-sky-500",
                      "from-emerald-400 to-emerald-500",
                    ];
                    if (isLaunch) {
                      const icons = ["💻","🎨","🗳️","📚","🚀"];
                      return (
                        <motion.button
                          key={opt.key}
                          onClick={() => handleAnswer(opt, opt.weights)}
                          className={`p-3 rounded-lg bg-gradient-to-br from-slate-800 to-slate-700 border border-gray-700 hover:border-indigo-500 transition text-left flex items-start gap-3`}
                          aria-label={`Option ${opt.key}`}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.995 }}
                        >
                          <div className="w-10 h-10 rounded-md flex items-center justify-center text-xl bg-white/5 text-indigo-300">{icons[i % icons.length]}</div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold">{opt.text}</div>
                            <div className="text-xs text-gray-400 mt-1">{Object.keys(opt.weights).map(k=> getCategoryInfo(k).name).join(', ')}</div>
                          </div>
                          <div className="text-xs text-gray-400">{opt.key}</div>
                        </motion.button>
                      );
                    }
                    const isTeenLocal = age === "13-15";
                    const bgClass = `bg-gradient-to-br ${kidBg[i % 4]}`;
                    const icon = isTeenLocal ? ["🧑‍💻","🎨","🤝","📚","🌍","🎵"][i % 6] : ["🎨","💡","🤝","🌿"][i % 4];
                    return (
                      <motion.button
                        key={opt.key}
                        onClick={() => handleAnswer(opt, opt.weights)}
                        className={`p-4 md:p-5 rounded-xl ${isTeenLocal ? "shadow-xl border border-gray-700" : "shadow-lg"} transform hover:-translate-y-1 transition-all text-left flex items-center gap-4 ${bgClass}`}
                        aria-label={`Option ${opt.key}`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className={`w-12 h-12 rounded-md flex items-center justify-center text-xl ${isTeenLocal ? "bg-white/5" : "bg-white/10"}`}>
                          <span className="select-none">{icon}</span>
                        </div>
                        <div className="flex-1">
                          <div className={`${isTeenLocal ? "text-sm md:text-base font-semibold" : "text-base md:text-lg font-medium"} drop-shadow`}>{opt.text}</div>
                          {isTeenLocal && <div className="text-xs text-gray-300 mt-1">{opt.key} • {Object.keys(opt.weights).map(k=> getCategoryInfo(k).name).join(', ')}</div>}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
          </div>
        ) : (
          <div className={`relative rounded-2xl shadow-md p-6 md:p-10 text-center overflow-hidden ${isLaunch ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white' : age === "13-15" ? "bg-[#0f1724] text-white" : "bg-white"}`}>
            <canvas ref={confettiRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />
            {/* star bursts */}
            {stars.map((s) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: [0, 1, 0], scale: [0.2, 1.1, 0.6] }}
                transition={{ delay: s.delay, duration: 1.1 }}
                className="absolute z-20"
                style={{ left: `${s.left}%`, top: `${s.top}%`, fontSize: s.size }}
              >
                <span className="select-none">✨</span>
              </motion.div>
            ))}

            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="relative z-30">
                <div className="flex flex-col items-center gap-4">
                <div className={`w-36 h-36 rounded-full flex items-center justify-center text-4xl shadow-2xl ${isLaunch ? 'bg-gradient-to-br from-indigo-700 to-indigo-900' : 'bg-gradient-to-br from-[#FFD166] to-[#FAB548]' }`}> 
                  {isLaunch ? '🚀' : '🏆'}
                </div>
                {isLaunch ? (
                  <>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Launchpad — Your Profile</h2>
                    <p className="text-sm md:text-lg text-gray-300 max-w-2xl">Career-ready insights, benchmark comparison, and a focused 3‑year roadmap to help you launch.</p>
                  </>
                ) : age === "13-15" ? (
                  <>
                    <h2 className={`text-3xl font-bold text-white`}>Congratulations!</h2>
                    <p className={`text-lg text-gray-300`}>You found your superpower!</p>
                  </>
                ) : (
                  <>
                    <h2 className={`text-3xl font-bold text-gray-900`}>Congratulations!</h2>
                    <p className={`text-lg text-gray-700`}>You found your superpower!</p>
                  </>
                )}

                <div className="mt-4">
                  <div className={`${isLaunch ? 'text-3xl md:text-4xl font-extrabold text-amber-300' : age === '13-15' ? 'text-amber-300' : 'text-[#3C91BA]'}`}>{topTwo[0].title}</div>
                  <div className={`mt-2 ${isLaunch ? 'text-gray-300' : age === '13-15' ? 'text-gray-300' : 'text-gray-600'}`}>{topTwo[0].desc}</div>
                </div>

                <div className="mt-6 text-left max-w-xl mx-auto">
                  <h3 className={`text-lg font-medium ${isLaunch ? 'text-gray-100' : age === "13-15" ? "text-white" : "text-gray-900"}`}>Also good at</h3>
                  <div className={`mt-2 ${isLaunch ? 'text-gray-300' : age === "13-15" ? "text-gray-300" : "text-gray-700"}`}>{topTwo[1].title} — {topTwo[1].desc}</div>
                </div>

                {/* Achievement badges + career insight for 13-15 */}
                {age === "13-15" && (
                  <div className="mt-6 w-full max-w-2xl text-left">
                    <h4 className="font-semibold text-lg">Achievement Badges</h4>
                    <div className="flex gap-3 mt-3">
                      <div className="px-3 py-2 rounded-full bg-white/10">🏅 Quick Learner</div>
                      <div className="px-3 py-2 rounded-full bg-white/10">🔧 Problem Solver</div>
                      <div className="px-3 py-2 rounded-full bg-white/10">🌍 Community Minded</div>
                    </div>

                    <h4 className="font-semibold text-lg mt-4">Career Insights</h4>
                    <div className="mt-2 text-sm text-gray-200">
                      {topTwo[0].name === "STEM" && <div>Suggested: Software Architect, Electrical Technician, Data Scientist</div>}
                      {topTwo[0].name === "Artistry" && <div>Suggested: Filmmaker, Designer, Music Producer</div>}
                      {topTwo[0].name === "Leadership" && <div>Suggested: Community Organizer, Project Manager, Policy Advocate</div>}
                      {topTwo[0].name === "Academic" && <div>Suggested: Researcher, Historian, Educator</div>}
                      {topTwo[0].name === "Nature Scout" && <div>Suggested: Agricultural Engineer, Conservationist, Environmental Planner</div>}
                    </div>
                  </div>
                )}

                {/* Portfolio / Add Project */}
                <div className="mt-6 w-full max-w-md">
                    <div className="flex gap-3 justify-center">
                      <motion.button onClick={reset} whileHover={{ scale: 1.03 }} className={`px-6 py-2 rounded-full ${isLaunch ? 'bg-gray-700 text-white' : 'bg-gray-200'}`}>Try again</motion.button>
                      <motion.button
                        onClick={() => setShowProjectForm((s) => !s)}
                        className={`px-6 py-2 rounded-full ${isLaunch ? 'bg-indigo-600 text-white' : 'bg-[#6EE7B7] text-black'}`}
                        whileHover={{ scale: 1.03 }}
                      >
                        {showProjectForm ? "Close" : "Add a Project"}
                      </motion.button>
                      <motion.button
                        onClick={() => { saveResult(); }}
                        className={`px-6 py-2 rounded-full ${isLaunch ? 'bg-amber-500 text-white' : 'bg-[#FAB548] text-white'}`}
                      >
                        Save Result
                      </motion.button>
                      {age === "16-18" && (
                        <motion.button onClick={() => generateCertificate(topTwo[0])} className={`px-6 py-2 rounded-full ${isLaunch ? 'bg-emerald-500 text-white' : 'bg-indigo-700 text-white'}`}>Download Certificate</motion.button>
                      )}
                    </div>

                  {showProjectForm && (
                    <div className={`mt-4 p-4 rounded-lg ${isLaunch ? 'bg-slate-700 text-gray-100' : 'bg-white/5'}`}>
                      <label className="block text-sm mb-1">Project Title</label>
                      <input value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)} className={`w-full p-2 rounded-md mb-2 ${isLaunch ? 'bg-slate-800 text-white' : 'text-black'}`} placeholder="My Solar Lamp Project" />
                      <label className="block text-sm mb-1">Short Description</label>
                      <textarea value={projectDesc} onChange={(e) => setProjectDesc(e.target.value)} className={`w-full p-2 rounded-md mb-2 ${isLaunch ? 'bg-slate-800 text-white' : 'text-black'}`} placeholder="Built a reading lamp using recycled batteries and LEDs..." />
                      <div className="text-right">
                        <button
                          onClick={() => {
                            if (!projectTitle) return;
                            setProjects((p) => [...p, { title: projectTitle, desc: projectDesc }]);
                            setProjectTitle("");
                            setProjectDesc("");
                            setShowProjectForm(false);
                          }}
                          className={`px-4 py-2 rounded-md ${isLaunch ? 'bg-indigo-500 text-white' : 'bg-indigo-600 text-white'}`}
                        >
                          Add Project
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                {/* For 16-18 show benchmark radar & 3-year roadmap */}
                {age === "16-18" && (
                  <div className="mt-8 w-full max-w-3xl mx-auto text-left text-sm">
                    <h4 className={`font-semibold text-lg mb-3 ${isLaunch ? 'text-gray-100' : 'text-gray-900'}`}>Benchmark & Roadmap</h4>
                    <div className={`${isLaunch ? 'bg-slate-800 text-gray-200' : 'bg-white'} p-4 rounded-lg shadow-sm`}>
                      <div className="h-56">
                        <Radar
                          data={{
                            labels: ["STEM","Artistry","Leadership","Academic","Innovation"],
                            datasets: [
                              { label: 'You', data: [scores.S, scores.A, scores.L, scores.K, scores.N], backgroundColor: 'rgba(59,130,246,0.15)', borderColor: 'rgba(59,130,246,0.9)', borderWidth: 2 },
                              { label: 'Benchmark', data: getBenchmark(topTwo[0].name), backgroundColor: 'rgba(16,185,129,0.12)', borderColor: 'rgba(16,185,129,0.8)', borderWidth: 1, borderDash: [4,4] }
                            ]
                          }}
                          options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } }, scales: { r: { suggestedMin: 0, suggestedMax: 12 } } }}
                        />
                      </div>

                      <div className="mt-4">
                        <h5 className="font-semibold">3-Year Roadmap</h5>
                        <ol className="list-decimal ml-5 mt-2 text-gray-700">
                          {getRoadmap(topTwo[0].name).map((r, i) => (<li key={i} className="mb-2">{r}</li>))}
                        </ol>
                      </div>
                        <div className="mt-4">
                          <h5 className="font-semibold">Courses & Internships</h5>
                          <div className="mt-2 flex flex-col gap-2">
                            {getInternships(topTwo[0].name).map((link, i) => (
                              <a key={i} href={link.url} target="_blank" rel="noreferrer" className="text-indigo-600 underline">{link.label}</a>
                            ))}
                          </div>
                        </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizAge;
