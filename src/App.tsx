import React, { useState, useEffect } from "react";
import { 
  motion, 
  AnimatePresence 
} from "motion/react";
import { 
  Music, 
  Calendar, 
  Users, 
  MapPin, 
  ChevronRight, 
  X, 
  Youtube, 
  Instagram, 
  Github, 
  ExternalLink, 
  Send, 
  Check, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Radio, 
  Mic2, 
  Disc, 
  Compass, 
  Guitar, 
  Heart,
  MessageSquare,
  Award
} from "lucide-react";

// Performance Playlist / Videos
const VIDEOS = [
  { id: "1", title: "Live Session #1: Rock & Roll On Stage", embedId: "dQw4w9WgXcQ", duration: "03:45" },
  { id: "2", title: "Acoustic Night: Senja di Kampus", embedId: "dQw4w9WgXcQ", duration: "04:12" },
  { id: "3", title: "Nutasi Annual Concert 2025 Highlights", embedId: "dQw4w9WgXcQ", duration: "05:50" }
];

// Structural Kepengurusan Data
const KEPENGURUSAN = [
  { role: "Ketua Umum", name: "Rian Samudra", instrument: "Vocalist / Rhythm Guitar", periode: "2025/2026", quote: "Musik adalah bahasa yang menyatukan jiwa-jiwa kampus." },
  { role: "Wakil Ketua", name: "Amelia Putri", instrument: "Keyboardist / Synthesizer", periode: "2025/2026", quote: "Harmoni bukan hanya tentang nada, tapi juga tentang kerja sama." },
  { role: "Sekretaris I", name: "Fajar Nugraha", instrument: "Bassist", periode: "2025/2026", quote: "Mengatur tempo organisasi sepresisi ketukan drum." },
  { role: "Bendahara I", name: "Dina Lestari", instrument: "Violinist", periode: "2025/2026", quote: "Setiap aliran dana tertata rapi bagaikan partitur klasik." },
  { role: "Kadiv Operasional", name: "Bimo Wicaksono", instrument: "Drummer", periode: "2025/2026", quote: "Ketukan keras untuk kesuksesan event kita." },
  { role: "Kadiv Humas & Media", name: "Chandra Wijaya", instrument: "Lead Guitarist", periode: "2025/2026", quote: "Menyebarluaskan gaung kreativitas Nutasi ke seluruh penjuru." }
];

// Operational Schedule
const SCHEDULES = [
  { day: "Senin", time: "16:00 - 18:00", activity: "Latihan Rutin Band Divisi Rock", location: "Studio Utama UKM" },
  { day: "Rabu", time: "15:30 - 17:30", activity: "Acoustic Jamming & Unplugged Session", location: "Pendopo Kampus Barat" },
  { day: "Kamis", time: "19:00 - 21:00", activity: "Workshop Produksi Musik & Audio Engineering", location: "Lab Musik / Studio" },
  { day: "Sabtu", time: "13:00 - 17:00", activity: "Latihan Bersama All-Gears & Sound Check", location: "Studio Utama UKM" }
];

// Target Event Countdown Configuration
const NEXT_EVENT = {
  title: "Nutasi Grand Concert 2026",
  date: "2026-10-25T19:00:00", // Format: YYYY-MM-DDTHH:mm:ss
};

export default function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isPlayingWave, setIsPlayingWave] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(VIDEOS[0]);
  
  // Countdown Timer State
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(NEXT_EVENT.date) - +new Date();
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true };
      }
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isOver: false
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  
  // Registration Form States
  const [formData, setFormData] = useState({
    name: "",
    nim: "",
    prodi: "",
    instrument: "Vokalis",
    reason: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [registeredMembers, setRegisteredMembers] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("nutasi_members");
    if (saved) {
      try {
        setRegisteredMembers(JSON.parse(saved));
      } catch (e) {
        // Safe fallback
      }
    }
  }, []);

  const handleSubmitOprec = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.nim || !formData.prodi) return;

    const newMember = {
      ...formData,
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("id-ID")
    };

    const updated = [newMember, ...registeredMembers];
    setRegisteredMembers(updated);
    localStorage.setItem("nutasi_members", JSON.stringify(updated));
    setFormSubmitted(true);
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      nim: "",
      prodi: "",
      instrument: "Vokalis",
      reason: ""
    });
    setFormSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[#07070a] text-slate-200 antialiased flex flex-col items-center justify-start p-3 sm:p-6 overflow-x-hidden relative selection:bg-purple-600/40 selection:text-purple-200">
      
      {/* Decorative Neon Blurs */}
      <div className="absolute top-[-10%] left-[-20%] w-[80vw] h-[80vw] sm:w-[500px] sm:h-[500px] rounded-full bg-purple-900/15 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-20%] w-[80vw] h-[80vw] sm:w-[500px] sm:h-[500px] rounded-full bg-emerald-900/10 blur-[90px] pointer-events-none" />
      <div className="absolute top-[40%] right-[10%] w-[40vw] h-[40vw] sm:w-[300px] sm:h-[300px] rounded-full bg-indigo-900/10 blur-[100px] pointer-events-none" />

      {/* Main Container tailored for Link-in-Bio mobile feel, scaleable on desktop */}
      <div className="w-full max-w-md bg-[#0F0F15]/90 border border-slate-800/60 backdrop-blur-xl rounded-[32px] p-6 shadow-2xl relative z-10 my-4 flex flex-col gap-6 overflow-hidden">
        
        {/* Dynamic Equalizer Ribbon */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-600 via-indigo-500 to-emerald-400" />

        {/* Ambient Top Soundbar Switcher */}
        <div className="flex justify-between items-center bg-slate-900/40 border border-slate-800/40 px-3 py-1.5 rounded-full text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[10px]">NUTASI SYNC ACTIVE</span>
          </div>
          <button 
            onClick={() => setIsPlayingWave(!isPlayingWave)} 
            className="flex items-center gap-1.5 text-[11px] hover:text-white transition-colors duration-200 cursor-pointer"
          >
            {isPlayingWave ? (
              <>
                <span className="font-mono text-purple-400">SINE ON</span>
                <Volume2 className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
              </>
            ) : (
              <>
                <span className="font-mono text-slate-500">MUTED</span>
                <VolumeX className="w-3.5 h-3.5 text-slate-500" />
              </>
            )}
          </button>
        </div>

        {/* Dynamic Wave Visualizer Visuals */}
        <div className="h-6 flex items-center justify-center gap-[3px] px-4 overflow-hidden">
          {Array.from({ length: 28 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-[3px] bg-gradient-to-t from-purple-600/70 to-emerald-400 rounded-full"
              animate={{
                height: isPlayingWave 
                  ? [8, Math.max(6, Math.sin(i * 0.5) * 24 + 14), 10, Math.cos(i * 0.7) * 18 + 12, 8] 
                  : 4
              }}
              transition={{
                duration: 1.5 + (i % 4) * 0.25,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* HEADER SECTION */}
        <div className="flex flex-col items-center text-center mt-2">
          {/* Animated Glowing Logo Frame */}
          <div className="relative group mb-3">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-emerald-500 opacity-70 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative w-20 h-20 rounded-full bg-[#13131c] border border-slate-700 flex items-center justify-center shadow-lg">
              <Music className="w-10 h-10 text-purple-400 animate-bounce" />
            </div>
            {/* Tiny Badge */}
            <div className="absolute bottom-0 right-0 bg-emerald-500 text-black font-extrabold text-[9px] px-1.5 py-0.5 rounded-full uppercase tracking-wider shadow-md">
              Intra
            </div>
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            UKM MUSIK NUTASI
          </h1>
          <p className="text-xs text-purple-400 font-medium tracking-widest uppercase mt-1">
            Universitas Nahdlatul Ulama Sunan Giri
          </p>
          <div className="inline-flex items-center gap-1.5 bg-slate-900/60 border border-slate-800/80 rounded-full px-3 py-1 mt-2">
            <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span className="text-[11px] text-slate-300 font-semibold uppercase tracking-wider">Organisasi Intra-Kampus</span>
          </div>
        </div>

        {/* EVENT COUNTDOWN */}
        <div id="event-countdown" className="bg-gradient-to-br from-purple-950/35 via-[#13111c] to-indigo-950/20 border border-purple-900/40 rounded-2xl p-3.5 relative overflow-hidden flex flex-col gap-2 shadow-inner">
          <div className="absolute -right-3 -top-3 w-12 h-12 bg-purple-500/10 rounded-full blur-xl pointer-events-none" />
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs text-purple-300 font-semibold tracking-wide">
              <Calendar className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
              <span>Event Mendatang:</span>
            </div>
            <span className="text-[10px] bg-purple-500/20 border border-purple-500/45 text-purple-300 font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              {timeLeft.isOver ? "Selesai" : "Info Live"}
            </span>
          </div>

          <h3 className="text-xs font-extrabold text-white tracking-wide truncate">
            {NEXT_EVENT.title}
          </h3>

          {!timeLeft.isOver ? (
            <div id="countdown-timer-values" className="grid grid-cols-4 gap-2 mt-1 select-none">
              <div id="days-box" className="bg-[#11111a]/95 border border-slate-850/80 rounded-xl p-2 text-center flex flex-col justify-center">
                <span className="text-lg font-black font-mono text-purple-400 leading-none">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className="text-[9px] text-slate-500 uppercase font-semibold font-sans tracking-wider mt-1">Hari</span>
              </div>
              <div id="hours-box" className="bg-[#11111a]/95 border border-slate-850/80 rounded-xl p-2 text-center flex flex-col justify-center">
                <span className="text-lg font-black font-mono text-purple-400 leading-none">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-[9px] text-slate-500 uppercase font-semibold font-sans tracking-wider mt-1">Jam</span>
              </div>
              <div id="minutes-box" className="bg-[#11111a]/95 border border-slate-850/80 rounded-xl p-2 text-center flex flex-col justify-center">
                <span className="text-lg font-black font-mono text-purple-400 leading-none">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-[9px] text-slate-500 uppercase font-semibold font-sans tracking-wider mt-1">Menit</span>
              </div>
              <div id="seconds-box" className="bg-[#11111a]/95 border border-slate-850/80 rounded-xl p-2 text-center flex flex-col justify-center">
                <span className="text-lg font-black font-mono text-emerald-400 leading-none">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-[9px] text-slate-500 uppercase font-semibold font-sans tracking-wider mt-1">Detik</span>
              </div>
            </div>
          ) : (
            <div id="countdown-over-banner" className="text-center py-2 text-xs text-emerald-400 font-semibold bg-emerald-950/20 border border-emerald-900/30 rounded-xl">
              🎉 Event sedang berlangsung / sudah terlaksana! Stay tuned!
            </div>
          )}
        </div>

        {/* HERO SECTION */}
        <div className="bg-slate-900/40 border border-slate-800/50 rounded-2xl p-4 text-center">
          <p className="text-sm text-slate-300 leading-relaxed italic">
            "Wadah kreativitas musisi kampus intra-akademik. Mengalun dalam visi rasa, melangkah dalam harmoni aksi."
          </p>
        </div>

        {/* TOMBOL AKSI UTAMA (Link Components) */}
        <div className="flex flex-col gap-3.5 mt-2">
          
          {/* Action 1: Pendaftaran / Oprec (Pulse Animation requested) */}
          <button
            onClick={() => setActiveModal("oprec")}
            className="w-full relative py-4 px-5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold flex items-center justify-between shadow-lg shadow-purple-900/20 hover:shadow-purple-600/40 transition-all duration-300 cursor-pointer overflow-hidden group focus:outline-none"
          >
            {/* Blinking Glow Background behind button */}
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Pulse Wave Animation requested: */}
            <div className="absolute inset-0 border border-purple-400 rounded-2xl animate-ping opacity-25 pointer-events-none" />

            <div className="flex items-center gap-3.5 z-10">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
              </div>
              <div className="text-left">
                <p className="text-sm tracking-wide">Pendaftaran Anggota Baru (Oprec)</p>
                <p className="text-[10px] text-purple-200/80 font-normal">Gabung Generasi Harmony 2026</p>
              </div>
            </div>
            <motion.div 
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="z-10"
            >
              <ChevronRight className="w-5 h-5 text-white/85" />
            </motion.div>
          </button>

          {/* Action 2: Jadwal & Agenda */}
          <button
            onClick={() => setActiveModal("jadwal")}
            className="w-full py-4 px-5 rounded-2xl bg-[#14141f] hover:bg-[#1a1a2b] border border-slate-800/80 hover:border-slate-700/80 text-white font-medium flex items-center justify-between transition-all duration-300 cursor-pointer group focus:outline-none"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                <Calendar className="w-5 h-5 text-purple-400" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold tracking-wide text-slate-200">Jadwal Latihan & Agenda</p>
                <p className="text-[10px] text-slate-400 font-normal">Ketahui agenda studio mingguan</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-slate-300 transition-colors" />
          </button>

          {/* Action 3: Struktur Kepengurusan */}
          <button
            onClick={() => setActiveModal("pengurus")}
            className="w-full py-4 px-5 rounded-2xl bg-[#14141f] hover:bg-[#1a1a2b] border border-slate-800/80 hover:border-slate-700/80 text-white font-medium flex items-center justify-between transition-all duration-300 cursor-pointer group focus:outline-none"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                <Users className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold tracking-wide text-slate-200">Struktur Kepengurusan</p>
                <p className="text-[10px] text-slate-400 font-normal">Kabinet Harmoni Nutasi 2025/2026</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-slate-300 transition-colors" />
          </button>

          {/* Action 4: Lokasi Basecamp */}
          <button
            onClick={() => setActiveModal("lokasi")}
            className="w-full py-4 px-5 rounded-2xl bg-[#14141f] hover:bg-[#1a1a2b] border border-slate-800/80 hover:border-slate-700/80 text-white font-medium flex items-center justify-between transition-all duration-300 cursor-pointer group focus:outline-none"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                <MapPin className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold tracking-wide text-slate-200">Lokasi Basecamp & Studio</p>
                <p className="text-[10px] text-slate-400 font-normal">Kunjungi studio musik internal kami</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-slate-300 transition-colors" />
          </button>

        </div>

        {/* MEDIA SHOWCASE WITH EMBED (Glowing estetik frame & Playlist Switcher) */}
        <div className="mt-2 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 align-middle">
              <Disc className="w-4 h-4 text-purple-400 animate-spin" />
              <h2 className="text-xs font-bold text-slate-350 uppercase tracking-widest">
                PERFORMANCE SHOWCASE
              </h2>
            </div>
            <span className="text-[10px] text-slate-400 font-mono italic">
              {VIDEOS.indexOf(selectedVideo) + 1} of {VIDEOS.length}
            </span>
          </div>

          <div className="relative group rounded-2xl overflow-hidden border border-slate-800/90 shadow-lg mb-1">
            {/* Neon Frame Glow Effect */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 to-emerald-500 opacity-20 group-hover:opacity-40 transition duration-500 blur-sm pointer-events-none" />
            
            <div className="relative w-full aspect-video bg-[#0c0c10] overflow-hidden">
              {/* Embed with safe frame fallback */}
              <iframe
                id="youtube-player"
                src={`https://www.youtube.com/embed/${selectedVideo.embedId}?enablejsapi=1&origin=${window.location.origin}`}
                className="w-full h-full border-0 absolute top-0 left-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={selectedVideo.title}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Mini Performance Selectors */}
          <div className="flex flex-col gap-2 bg-slate-900/30 border border-slate-800/40 p-2.5 rounded-xl">
            {VIDEOS.map((vid) => (
              <button
                key={vid.id}
                onClick={() => setSelectedVideo(vid)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-all cursor-pointer ${
                  selectedVideo.id === vid.id
                    ? "bg-purple-950/40 text-purple-300 font-semibold border border-purple-800/40"
                    : "hover:bg-slate-900/60 text-slate-400 border border-transparent"
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <div className={`w-1.5 h-1.5 rounded-full ${selectedVideo.id === vid.id ? "bg-purple-400 animate-ping" : "bg-slate-600"}`} />
                  <span className="truncate">{vid.title}</span>
                </div>
                <span className="text-[10px] font-mono opacity-80 pl-2">{vid.duration}</span>
              </button>
            ))}
          </div>
        </div>

        {/* FOOTER SECTION */}
        <div className="flex flex-col items-center gap-3.5 pt-4 border-t border-slate-800/50 mt-2 text-center text-xs text-slate-500">
          
          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a 
              href="https://www.instagram.com/musicnutasi?igsh=MWp5cWdweTc5aGw3ag==" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-400 hover:text-purple-400 transition-colors p-1"
              id="inst-link"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://youtube.com/@ukmmusicnu-tasi4406?si=xwehsVQHg2poPskn" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-400 hover:text-red-500 transition-colors p-1"
              id="yt-link"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-400 hover:text-emerald-400 transition-colors p-1"
              id="gh-link"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-col gap-1 items-center">
            <p className="font-medium text-slate-400">© 2026 UKM Musik Nutasi Universitas Nahdlatul Ulama Sunan Giri</p>
            <p className="text-[10px] text-slate-600 tracking-wide uppercase font-mono">
              Designed for Campus Harmonization
            </p>
          </div>
        </div>

      </div>

      {/* FOOTNOTE DATA SUMMARY SHOWCASE */}
      {registeredMembers.length > 0 && (
        <div className="w-full max-w-md bg-[#0F0F15]/60 border border-slate-800/40 backdrop-blur-md rounded-2xl p-4 text-xs text-slate-400 text-center mb-6">
          <span className="text-purple-400 font-semibold">{registeredMembers.length} Orang</span> telah mendaftar mandiri via browser ini!
        </div>
      )}

      {/* INTERACTIVE MODALS POPUP COMPONENT */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.93, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.93, y: 15 }}
              className="w-full max-w-md bg-[#111116] border border-slate-800 rounded-3xl p-6 relative overflow-hidden shadow-2xl flex flex-col max-h-[85vh]"
            >
              {/* Modal header accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-indigo-500 to-emerald-400" />

              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 bg-slate-900 border border-slate-800 hover:border-slate-700 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer focus:outline-none"
              >
                <X className="w-4 h-4" />
              </button>

              {/* MODAL CONTENTS */}
              {activeModal === "oprec" && (
                <div className="flex flex-col gap-4 overflow-y-auto pr-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="p-2 bg-purple-500/10 rounded-xl border border-purple-500/20 text-purple-400">
                      <Sparkles className="w-5 h-5 animate-spin" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Formulir Oprec Nutasi</h3>
                      <p className="text-xs text-slate-400">Pendaftaran UKM Musik Resmi</p>
                    </div>
                  </div>

                  {!formSubmitted ? (
                    <form onSubmit={handleSubmitOprec} className="flex flex-col gap-3.5 mt-2">
                      <div className="flex flex-col gap-1">
                        <label className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Nama Lengkap</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Masukkan nama lengkap"
                          className="w-full bg-slate-950/60 border border-slate-800 focus:border-purple-500 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1">
                          <label className="text-xs text-slate-400 font-semibold uppercase tracking-wider">NIM</label>
                          <input
                            type="text"
                            required
                            value={formData.nim}
                            onChange={(e) => setFormData({ ...formData, nim: e.target.value })}
                            placeholder="NIM Kampus"
                            className="w-full bg-slate-950/60 border border-slate-800 focus:border-purple-500 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none transition-colors"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Program Studi</label>
                          <input
                            type="text"
                            required
                            value={formData.prodi}
                            onChange={(e) => setFormData({ ...formData, prodi: e.target.value })}
                            placeholder="Fakultas / Prodi"
                            className="w-full bg-slate-950/60 border border-slate-800 focus:border-purple-500 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Spesialisasi / Alat Musik</label>
                        <select
                          value={formData.instrument}
                          onChange={(e) => setFormData({ ...formData, instrument: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-800 focus:border-purple-500 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="Vokalis">Vokalis / Singer</option>
                          <option value="Gitaris">Gitaris (Lead / Rhythm)</option>
                          <option value="Bassist">Bassist</option>
                          <option value="Drummer">Drummer / Perkusi</option>
                          <option value="Keyboardist">Keyboardist / Pianist / Synth</option>
                          <option value="Violinist / Klasik">Alat musik Klasik (Violin / Flute)</option>
                          <option value="Sound Engineer">Digital Audio Production / Soundman</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Alasan Bergabung</label>
                        <textarea
                          rows={3}
                          value={formData.reason}
                          onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                          placeholder="Ceritakan motivasi atau pengalaman musikmu..."
                          className="w-full bg-slate-950/60 border border-slate-800 focus:border-purple-500 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full mt-2 py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Kirim Pendaftaran</span>
                      </button>
                    </form>
                  ) : (
                    <div className="flex flex-col items-center text-center py-8 gap-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-400 flex items-center justify-center text-emerald-400">
                        <Check className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">Pendaftaran Berhasil!</h4>
                        <p className="text-sm text-slate-400 mt-1 max-w-[280px] mx-auto">
                          Data kamu telah tersimpan lokal di browser. Tim Humas Nutasi akan segera menghubungimu!
                        </p>
                      </div>
                      <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-left">
                        <p className="text-slate-400 font-semibold text-[11px] uppercase tracking-wider">Resume Data:</p>
                        <p className="text-xs text-white mt-1">Nama: <span className="font-mono">{formData.name}</span></p>
                        <p className="text-xs text-white">NIM: <span className="font-mono">{formData.nim}</span></p>
                        <p className="text-xs text-emerald-300">Minat: <span className="font-mono">{formData.instrument}</span></p>
                      </div>
                      <button
                        onClick={handleResetForm}
                        className="text-xs text-purple-400 hover:text-purple-300 underline font-medium cursor-pointer"
                      >
                        Daftar Anggota Lain
                      </button>
                    </div>
                  )}
                </div>
              )}

              {activeModal === "jadwal" && (
                <div className="flex flex-col gap-4 overflow-y-auto pr-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 bg-purple-500/10 rounded-xl border border-purple-500/20 text-purple-400">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Jadwal Studio & Kegiatan</h3>
                      <p className="text-xs text-slate-400">Agenda reguler angkatan aktif</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    {SCHEDULES.map((sched, idx) => (
                      <div 
                        key={idx} 
                        className="p-3.5 bg-slate-900/80 border border-slate-800/80 rounded-2xl flex flex-col gap-1"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
                            {sched.day}
                          </span>
                          <span className="font-mono text-xs text-slate-400">{sched.time}</span>
                        </div>
                        <h4 className="text-sm font-semibold text-white mt-1">{sched.activity}</h4>
                        <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                          <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                          <span>{sched.location}</span>
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="text-[10px] text-slate-500 text-center italic mt-1">
                    *Jadwal dapat berubah jika mendekati tanggal festival atau konser kampus
                  </div>
                </div>
              )}

              {activeModal === "pengurus" && (
                <div className="flex flex-col gap-4 overflow-y-auto pr-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="p-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-emerald-400">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Struktur Organisasi</h3>
                      <p className="text-xs text-slate-400">Kepengurusan Hub Nutasi</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3 overflow-y-auto max-h-[50vh]">
                    {KEPENGURUSAN.map((member, idx) => (
                      <div 
                        key={idx}
                        className="p-3.5 bg-slate-900/60 border border-slate-800/80 rounded-2xl flex flex-col gap-1.5"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-xs text-purple-300 font-bold uppercase tracking-wider">{member.role}</h4>
                            <p className="text-sm font-bold text-white">{member.name}</p>
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded-full border border-slate-800">
                            {member.instrument}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 italic font-serif leading-relaxed border-l-2 border-emerald-500/60 pl-2">
                          "{member.quote}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeModal === "lokasi" && (
                <div className="flex flex-col gap-4 overflow-y-auto pr-1">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-blue-500/10 rounded-xl border border-blue-500/20 text-blue-400">
                      <MapPin className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Basecamp & Studio</h3>
                      <p className="text-xs text-slate-400">Pusat Kreativitas UKM Musik</p>
                    </div>
                  </div>

                  {/* Static Aesthetic Mockup Map representing the Studio location rules */}
                  <div className="relative rounded-2xl overflow-hidden border border-slate-800 h-44 bg-slate-950 flex flex-col items-center justify-center text-center p-4">
                    <div className="absolute inset-0 bg-[radial-gradient(#1e1e2d_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
                    <Guitar className="w-10 h-10 text-slate-500 mb-2 relative z-10" />
                    <p className="text-sm font-semibold text-slate-300 relative z-10">Studio Musik Lantai 3 Gedung PKM</p>
                    <p className="text-xs text-slate-500 mt-1 max-w-[280px] relative z-10">
                      Kampus Pusat, Jalan Airlangga No. 12, Kota Seni Musik
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 bg-slate-950 p-4 border border-slate-800/80 rounded-2xl">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                      <Award className="w-4 h-4 text-emerald-400" />
                      Aturan Masuk Studio:
                    </h4>
                    <ul className="text-xs text-slate-300 flex flex-col gap-1.5 pl-4 list-decimal">
                      <li>Hanya untuk mahasiswa aktif anggota UKM Nutasi.</li>
                      <li>Wajib melakukan booking jadwal via sekretaris minimum 1 hari sebelumnya.</li>
                      <li>Dilarang membawa makanan/minuman berisiko tumpah di dekat instrumen/synthesizer.</li>
                      <li>Kembalikan semua knob volume mixer utama ke titik 0 desibel setelah latihan selesai.</li>
                    </ul>
                  </div>

                  {/* Button to simulate opening external real map app */}
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer justify-self-end mt-1 text-xs"
                    id="map-link"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Buka Peta Navigasi Hub</span>
                  </a>
                </div>
              )}

              {/* Close Overlay helper */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex justify-end">
                <button
                  onClick={() => setActiveModal(null)}
                  className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Tutup Panel
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
