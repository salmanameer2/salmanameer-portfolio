import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Database, Layers, Atom, Terminal, Rocket, Award, 
  Mail, MapPin, Link as LinkIcon, Code2, Share2, 
  Eye, Github, Linkedin, ChevronRight, Cpu, Menu, X, 
  Activity, FileJson, Check, Lock, Trash2, ExternalLink,
  Sun, Moon, Globe, ArrowUp
} from 'lucide-react';
import { assets, aboutInfo, skills as assetsSkills, projects as assetsProjects } from './assets/assets';
import { AboutCard } from './components/AboutCard';
import { SkillCard } from './components/SkillCard';
import { ProjectCard } from './components/ProjectCard';
import { GitHubStats } from './components/GitHubStats';

const dict = {
  en: {
    home: "Home",
    projects: "Projects",
    stack: "Stack",
    experience: "Experience",
    contact: "Contact",
    hireMe: "Hire Me",
    role: "MERN STACK ARCHITECT",
    heroTitlePrefix: "Building the",
    heroTitleSuffix: "of Web.",
    heroTitleHighlight: "Future",
    heroDesc: "I engineer scalable full-stack applications with MongoDB, Express, React, and Node.js. My focus is on high-performance architecture and immersive user experiences.",
    exploreProjects: "Explore Projects",
    viewResume: "View Resume",
    activeSystemState: "Active System State",
    coreCompetencies: "CORE COMPETENCIES",
    engineRoom: "The Engine Room",
    expertLevel: "Expertise Level",
    clickTechCard: "⚡ Click any tech card to view the modular micro-skill clusters",
    productionDeliverables: "PRODUCTION DELIVERABLES",
    featuredWork: "Featured Work",
    featuredDesc: "A selection of my recent full-stack builds, focusing on complexity and performance.",
    requestCustom: "Request Custom Builds",
    livePreview: "Live Preview",
    githubSource: "GitHub Source",
    engPhilosophy: "ENGINEERING PHILOSOPHY",
    archEcosystems: "Architecting Digital Ecosystems",
    fiveYearsTitle: "5+ Years Coding Experience",
    fiveYearsDesc: "Deep expertise in modern JavaScript frameworks, distributed microservices, and scalable backend database environments.",
    fortyDeploymentsTitle: "40+ Production Deployments",
    fortyDeploymentsDesc: "From highly reactive custom SaaS platforms to complex enterprise ecommerce ecosystems, maintaining zero-downtime integration loops.",
    cloudCertifiedTitle: "Cloud Certified Architect",
    cloudCertifiedDesc: "Specialized in automated cloud deployment containers, serverless micro-workers, edge caching layers, and redundant database clusters.",
    liveTelemetry: "// live telemetry",
    systemConsole: "System Console",
    pingActive: "Ping Active...",
    pingNode: "Ping Node",
    serverLatency: "Server Latency",
    bundleSize: "Bundle Size",
    toggleUnzipped: "Toggle Unzipped Size",
    toggleGzip: "Toggle Gzip Compression",
    coreWebVitals: "Core Web Vitals",
    pipelineChannel: "Pipeline Channel",
    gatewayDatacenter: "Gateway Datacenter Node",
    letsBuildTitlePrefix: "Let's Build",
    letsBuildTitleSuffix: "Great",
    letsBuildTitleHighlight: "Something",
    letsBuildDesc: "Available for freelance opportunities and Full-Time MERN Stack Developer.",
    basedIn: "Based in Lahore, Pakistan",
    clusterActions: "Cluster Actions",
    fullName: "Full Name",
    emailAddress: "Email Address",
    messagePayload: "Message payload",
    placeholderSpecs: "Tell me about your project specifications...",
    sendTransmission: "Send Message",
    encryptingPackets: "ENCRYPTING TRANSMISSION PACKETS...",
    sha256Cipher: "Hashing payload using SHA-256 cipher streams",
    establishingHandshake: "ESTABLISHING CRYPTO HANDSHAKE...",
    resolvingWss: "Resolving wss://devarchitecture.com node tunnels",
    dispatchingNodes: "DISPATCHING TRANS-NODES...",
    mongodbCommit: "Atomic write commit in MongoDB memory banks",
    transmissionSecured: "TRANSMISSION SECURED & DELIVERED!",
    mongodbOk: "The simulated MongoDB write query returned 200 OK. Packets are stored in local storage buffer frames.",
    transmitNew: "Transmit New Payload",
    hideLogs: "Hide Saved Transmissions Log",
    viewLogs: "View Saved Transmissions Log",
    clearBuffer: "Clear Buffer",
    noTransmissions: "No simulated transmissions found in local storage buffer yet. Submit the contact form to trigger write cycles!",
    sandboxFooter: "Designed & Built as a sandbox showcase platform for the MERN Ecosystem.",
    synapseChat: "Synapse Real-time Chat",
    nexusCms: "Nexus E-commerce CMS",
    backToTop: "Back to Top",
    github: "GitHub",
    footerDesc: "Certified MERN Stack Developer.",
    footerNavigation: "Quick Navigation",
    footerSpecialties: "Specialties",
    footerSpec1: "High-Performance API Design",
    footerSpec2: "Real-Time Systems Integration",
    footerSpec3: "Scalable Database Schemas",
    footerSpec4: "Modern UI Engineering"
  },
  ur: {
    home: "ہوم",
    projects: "پروژیکٹس",
    stack: "ٹیکنالوجی اسٹیک",
    experience: "تجربہ",
    contact: "رابطہ کریں",
    hireMe: "مجھے ہائر کریں",
    role: "MERN اسٹیک آرکیٹیکٹ",
    heroTitlePrefix: "ویب کا",
    heroTitleSuffix: "تعمیر کرنا۔",
    heroTitleHighlight: "مستقبل",
    heroDesc: "میں مونوگو ڈی بی، ایکسپریس، ری ایکٹ، اور نوڈ جے ایس کے ساتھ اسکیل ایبل فل اسٹیک ایپلی کیشنز تیار کرتا ہوں۔ میری توجہ اعلی کارکردگی والے آرکیٹیکچر اور دلکش صارف کے تجربات پر ہے۔",
    exploreProjects: "پروژیکٹس تلاش کریں",
    viewResume: "ریزیومے دیکھیں",
    activeSystemState: "سسٹم کی فعال حالت",
    coreCompetencies: "بنیادی مہارتیں",
    engineRoom: "انجن روم",
    expertLevel: "مہارت کی سطح",
    clickTechCard: "⚡ تفصیلی مائیکرو ہنر کلسٹرز دیکھنے کے لیے کسی بھی کارڈ پر کلک کریں",
    productionDeliverables: "پروڈکشن ڈیلیوریبلز",
    featuredWork: "نمایاں کام",
    featuredDesc: "میرے حالیہ فل اسٹیک پروجیکٹس کا ایک انتخاب، جو پیچیدگی اور کارکردگی پر مرکوز ہے۔",
    requestCustom: "اپنی مرضی کے مطابق پروژیکٹس",
    livePreview: "لائیو پیش نظارہ",
    githubSource: "گٹ ہب سورس",
    engPhilosophy: "انجینئرنگ فلسفہ",
    archEcosystems: "ڈیجیٹل ایکو سسٹم کی تعمیر",
    fiveYearsTitle: "5+ سال کا کوڈنگ کا تجربہ",
    fiveYearsDesc: "جدید جاوا اسکرپٹ فریم ورکس، تقسیم شدہ مائیکرو سروسز، اور اسکیل ایبل بیک اینڈ ڈیٹا بیس ماحول میں گہرا تجربہ۔",
    fortyDeploymentsTitle: "40+ پروڈکشن ڈیپلائمنٹس",
    fortyDeploymentsDesc: "انتہائی فعال کسٹم ساس پلیٹ فارمز سے لے کر پیچیدہ انٹرپرائز ای کامرس ماحولیاتی نظام تک، بلا تعطل انضمام کو برقرار رکھنا۔",
    cloudCertifiedTitle: "سرٹیفائیڈ کلاؤڈ آرکیٹیکٹ",
    cloudCertifiedDesc: "خودکار کلاؤڈ ڈیپلائمنٹ کنٹینرز، سرور لیس مائیکرو ورکرز، ایج کیشنگ لیئرز، اور ریڈنڈنٹ ڈیٹا بیس کلسٹرز میں مہارت۔",
    liveTelemetry: "// لائیو ٹیلی میٹری",
    systemConsole: "سسٹم کنسول",
    pingActive: "پنگ فعال ہے...",
    pingNode: "نوڈ پنگ کریں",
    serverLatency: "سرور لیٹنسی",
    bundleSize: "بنڈل کا سائز",
    toggleUnzipped: "بغیر زپ کا سائز دیکھیں",
    toggleGzip: "Gzip کمپریشن دیکھیں",
    coreWebVitals: "بنیادی ویب وائٹلز",
    pipelineChannel: "پائپ لائن چینل",
    gatewayDatacenter: "گیٹ وے ڈیٹا سینٹر نوڈ",
    letsBuildTitlePrefix: "آئیں مل کر کچھ",
    letsBuildTitleSuffix: "تعمیر کریں",
    letsBuildTitleHighlight: "بہترین",
    letsBuildDesc: "فری لانس مواقع اور کل وقتی MERN اسٹیک ڈویلپر کے لیے دستیاب ہے۔",
    basedIn: "مقیم لاہور، پاکستان",
    clusterActions: "کلسٹر کے اقدامات",
    fullName: "پورا نام",
    emailAddress: "ای میل ایڈریس",
    messagePayload: "پیغام کا مواد",
    placeholderSpecs: "مجھے اپنے پروجیکٹ کی تفصیلات کے بارے میں بتائیں...",
    sendTransmission: "پیغام بھیجیں",
    encryptingPackets: "ٹرانسمیشن پیکٹ کو انکرپٹ کیا جا رہا ہے...",
    sha256Cipher: "SHA-256 سائفر اسٹریمز کا استعمال کرتے ہوئے پے لوڈ کو ہیش کرنا",
    establishingHandshake: "سیکیورٹی ہینڈ شیک قائم کیا جا رہا ہے...",
    resolvingWss: "wss://devarchitecture.com نوڈ ٹنلز کو حل کیا جا رہا ہے",
    dispatchingNodes: "ٹرانس نوڈس بھیجے جا رہے ہیں...",
    mongodbCommit: "منگو ڈی بی میموری بینکوں میں ایٹمی رائٹ کمٹ",
    transmissionSecured: "ٹرانسمیشن محفوظ اور پہنچا دی گئی!",
    mongodbOk: "منگو ڈی بی رائٹ کیوری نے 200 اوکے واپس کیا۔ پیکٹ مقامی اسٹوریج بفر فریموں میں محفوظ ہیں۔",
    transmitNew: "نیا پے لوڈ منتقل کریں",
    hideLogs: "محفوظ کردہ ٹرانسمیشن لاگ چھپائیں",
    viewLogs: "محفوظ کردہ ٹرانسمیشن لاگ دیکھیں",
    clearBuffer: "بفر صاف کریں",
    noTransmissions: "مقامی اسٹوریج بفر میں ابھی تک کوئی ٹرانسمیشن نہیں ملی۔ رائٹ سائیکل شروع کرنے کے لیے رابطہ فارم جمع کرائیں!",
    sandboxFooter: "ایم ای آر این ایکو سسٹم کے لیے بطور سینڈ باکس شوکیس پلیٹ فارم ڈیزائن اور بنایا گیا ہے۔",
    synapseChat: "Synapse ریئل ٹائم چیٹ",
    nexusCms: "Nexus ای کامرس CMS",
    backToTop: "واپس اوپر جائیں",
    github: "گٹ ہب",
    footerDesc: "سرٹیفائیڈ MERN اسٹیک ڈویلپر۔",
    footerNavigation: "فوری نیویگیشن",
    footerSpecialties: "خصوصیات",
    footerSpec1: "اعلی کارکردگی والی API ڈیزائننگ",
    footerSpec2: "ریئل ٹائم سسٹم انٹیگریشن",
    footerSpec3: "اسکیل ایبل ڈیٹا بیس ڈیزائن",
    footerSpec4: "جدید یوزر انٹرفیس انجینئرنگ"
  },
  ar: {
    home: "الرئيسية",
    projects: "المشاريع",
    stack: "التقنيات",
    experience: "الخبرة",
    contact: "اتصل بي",
    hireMe: "وظفني",
    role: "مهندس تقنيات MERN",
    heroTitlePrefix: "بناء",
    heroTitleSuffix: "الويب.",
    heroTitleHighlight: "مستقبل",
    heroDesc: "أقوم بهندسة تطبيقات كاملة قابلة للتطوير باستخدام MongoDB و Express و React و Node.js. ينصب تركيزي على البنية عالية الأداء وتجارب المستخدم الغامرة.",
    exploreProjects: "استكشاف المشاريع",
    viewResume: "عرض السيرة الذاتية",
    activeSystemState: "حالة النظام النشطة",
    coreCompetencies: "الكفاءات الأساسية",
    engineRoom: "غرفة المحرك",
    expertLevel: "مستوى الخبرة",
    clickTechCard: "⚡ انقر على أي بطاقة تقنية لعرض مجموعات المهارات التفصيلية",
    productionDeliverables: "مخرجات الإنتاج",
    featuredWork: "الأعمال المتميزة",
    featuredDesc: "مجموعة مختارة من مشاريعي الأخيرة، مع التركيز على التعقيد والأداء الجيد.",
    requestCustom: "طلب مشاريع مخصصة",
    livePreview: "المعاينة المباشرة",
    githubSource: "المصدر على GitHub",
    engPhilosophy: "فلسفة الهندسة",
    archEcosystems: "بناء الأنظمة الرقمية",
    fiveYearsTitle: "أكثر من 5 سنوات من الخبرة",
    fiveYearsDesc: "خبرة عميقة في أطر عمل جافا سكريبت الحديثة، والخدمات المصغرة الموزعة، وبيئات قواعد البيانات القابلة للتطوير.",
    fortyDeploymentsTitle: "أكثر من 40 عملية نشر",
    fortyDeploymentsDesc: "من منصات SaaS عالية الاستجابة إلى أنظمة التجارة الإلكترونية المعقدة للمؤسسات، مع الحفاظ على دورات تكامل خالية من التوقف.",
    cloudCertifiedTitle: "مهندس سحابي معتمد",
    cloudCertifiedDesc: "متخصص في حاويات النشر السحابي الآلي، والعمال المصغرين بدون خوادم، وطبقات التخزين المؤقت، ومجموعات قواعد البيانات المتكررة.",
    liveTelemetry: "// القياس عن بعد المباشر",
    systemConsole: "لوحة تحكم النظام",
    pingActive: "نشط...",
    pingNode: "فحص الاتصال بالعقدة",
    serverLatency: "زمن استجابة الخادم",
    bundleSize: "حجم الحزمة",
    toggleUnzipped: "تبديل الحجم غير المضغوط",
    toggleGzip: "تبديل ضغط Gzip",
    coreWebVitals: "مؤشرات الويب الحيوية",
    pipelineChannel: "قناة خط الأنابيب",
    gatewayDatacenter: "عقدة مركز بيانات البوابة",
    letsBuildTitlePrefix: "لنقم ببناء شيء",
    letsBuildTitleSuffix: "رائع",
    letsBuildTitleHighlight: "مميز",
    letsBuildDesc: "متاح للفرص المستقلة ومطور MERN Stack بدوام كامل.",
    basedIn: "مقيم في لاهور، باكستان",
    clusterActions: "إجراءات المجموعة",
    fullName: "الاسم الكامل",
    emailAddress: "البريد الإلكتروني",
    messagePayload: "محتوى الرسالة",
    placeholderSpecs: "أخبرني عن مواصفات مشروعك...",
    sendTransmission: "إرسال الرسالة",
    encryptingPackets: "تشفير حزم الإرسال...",
    sha256Cipher: "تشفير المحتوى باستخدام خوارزمية SHA-256",
    establishingHandshake: "تأسيس مصافحة التشفير...",
    resolvingWss: "حل أنفاق عقد wss://devarchitecture.com",
    dispatchingNodes: "إرسال العقد الناقلة...",
    mongodbCommit: "التزام الكتابة الذرية في بنوك ذاكرة MongoDB",
    transmissionSecured: "تم تأمين الإرسال وتسليمه!",
    mongodbOk: "أعاد استعلام كتابة MongoDB المحاكى 200 OK. يتم تخزين الحزم في إطارات ذاكرة التخزين المؤقت المحلية.",
    transmitNew: "إرسال حمولة جديدة",
    hideLogs: "إخفاء سجل الإرسال المحفوظ",
    viewLogs: "عرض سجل الإرسال المحفوظ",
    clearBuffer: "مسح الذاكرة المؤقتة",
    noTransmissions: "لم يتم العثور على أي عمليات إرسال محاكاة في ذاكرة التخزين المؤقت المحلية بعد. أرسل نموذج الاتصال لبدء دورات الكتابة!",
    sandboxFooter: "تم التصميم والبناء كمنصة عرض تجريبية لنظام MERN البيئي.",
    synapseChat: "دردشة Synapse في الوقت الفعلي",
    nexusCms: "نظام إدارة المحتوى للتجارة الإلكترونية Nexus",
    backToTop: "الرجوع إلى الأعلى",
    github: "GitHub",
    footerDesc: "مطور MERN Stack معتمد.",
    footerNavigation: "التنقل السريع",
    footerSpecialties: "التخصصات",
    footerSpec1: "تصميم واجهة برمجة تطبيقات عالية الأداء",
    footerSpec2: "تكامل الأنظمة في الوقت الفعلي",
    footerSpec3: "مخططات قواعد البيانات القابلة للتطوير",
    footerSpec4: "هندسة واجهات المستخدم الحديثة"
  }
};

export default function App() {
  // Mobile navigation state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Theme state: dark (default) or cyber-light
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('devarch_theme');
    return saved === 'cyber-light' ? 'cyber-light' : 'dark';
  });

  // Language state: 'en' (default), 'ur' or 'ar'
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('devarch_lang');
    return (saved === 'ur' || saved === 'ar') ? saved : 'en';
  });

  // Sticky scroll navbar effect state
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Sync theme selection to document element attribute for CSS styling
  useEffect(() => {
    if (theme === 'cyber-light') {
      document.documentElement.setAttribute('data-theme', 'cyber-light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('devarch_theme', theme);
  }, [theme]);

  // Sync language selection to localStorage
  useEffect(() => {
    localStorage.setItem('devarch_lang', lang);
    if (lang === 'ur' || lang === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = lang;
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  }, [lang]);

  // Translation helper function
  const t = (key) => {
    return dict[lang][key] || dict['en'][key] || key;
  };

  // Active Tech Stack details selection
  const [selectedSkillId, setSelectedSkillId] = useState(null);

  // Interactive System Metrics State
  const [metrics, setMetrics] = useState({
    serverLatency: 12,
    bundleSize: 42,
    coreWebVitals: 100,
    pipelineStatus: 'Stable',
    serverRegion: 'San Francisco (SF-1)'
  });
  const [isPingActive, setIsPingActive] = useState(false);
  const [isGzipEnabled, setIsGzipEnabled] = useState(true);

  // Contact Form State & Packet Submission Simulation
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [submissionStep, setSubmissionStep] = useState('idle');
  const [transmissions, setTransmissions] = useState([]);
  const [showLogs, setShowLogs] = useState(false);
  const [copied, setCopied] = useState(false);

  // Custom navigation handler for smooth scrolling without layout jerks
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    
    const isMobile = mobileMenuOpen;
    
    // Close the mobile menu immediately to initiate the collapse and avoid layout overlaps
    if (isMobile) {
      setMobileMenuOpen(false);
    }

    const performScroll = () => {
      if (targetId === 'home' || !targetId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (window.history.pushState) {
          window.history.pushState(null, null, ' ');
        }
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          // A stable header height of 70px avoids scrolling too far or too little
          const headerHeight = 70;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          if (window.history.pushState) {
            window.history.pushState(null, null, `#${targetId}`);
          }
        }
      }
    };

    // On mobile, defer the scroll slightly to allow the menu collapse transition to start
    // and avoid active layout shifts disrupting browser smooth scrolling.
    if (isMobile) {
      setTimeout(performScroll, 200);
    } else {
      performScroll();
    }
  };

  // Track scroll position for header blur styling and back-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch saved messages from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('devarch_transmissions');
    if (saved) {
      try {
        setTransmissions(JSON.parse(saved));
      } catch (e) {
        console.error('Error parsing stored transmissions', e);
      }
    }
  }, []);

  // Handle server ping simulation
  const handlePing = () => {
    if (isPingActive) return;
    setIsPingActive(true);
    
    let interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        serverLatency: Math.floor(Math.random() * 25) + 8
      }));
    }, 150);

    setTimeout(() => {
      clearInterval(interval);
      setIsPingActive(false);
    }, 1200);
  };

  // Toggle zip compression bundle metrics
  const toggleCompression = () => {
    setIsGzipEnabled(!isGzipEnabled);
    setMetrics(prev => ({
      ...prev,
      bundleSize: !isGzipEnabled ? 42 : 148
    }));
  };

  // Change telemetry datacenter server location
  const handleRegionChange = (e) => {
    const region = e.target.value;
    let baseLat = 12;
    if (region.includes('Tokyo')) baseLat = 110;
    else if (region.includes('London')) baseLat = 85;
    else if (region.includes('New York')) baseLat = 45;

    setMetrics(prev => ({
      ...prev,
      serverRegion: region,
      serverLatency: baseLat + Math.floor(Math.random() * 10)
    }));
  };

  // Portfolio URL share copy to clipboard
  const handleSharePortfolio = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Handle Contact submission packet flow
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) return;

    // Trigger step-by-step transmission pipeline simulation
    setSubmissionStep('encrypting');

    setTimeout(() => {
      setSubmissionStep('handshake');
    }, 1000);

    setTimeout(() => {
      setSubmissionStep('delivering');
    }, 2000);

    setTimeout(() => {
      const newTransmission = {
        id: `TX-${Math.floor(1000 + Math.random() * 9000)}`,
        name: contactForm.name,
        email: contactForm.email,
        message: contactForm.message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        status: 'delivered'
      };

      const updated = [newTransmission, ...transmissions];
      setTransmissions(updated);
      localStorage.setItem('devarch_transmissions', JSON.stringify(updated));

      setSubmissionStep('success');
      setContactForm({ name: '', email: '', message: '' });
    }, 3200);
  };

  // Reset submission state
  const resetFormState = () => {
    setSubmissionStep('idle');
  };

  // Delete message transmission log item
  const deleteLog = (id) => {
    const updated = transmissions.filter(t => t.id !== id);
    setTransmissions(updated);
    localStorage.setItem('devarch_transmissions', JSON.stringify(updated));
  };

  // Projects filtering and pagination states
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = ['All', 'React', 'Node.js', 'Tailwind CSS', 'HTML', 'JavaScript'];

  const filteredProjects = assetsProjects.filter(project => {
    if (selectedCategory === 'All') return true;
    return project.tech.some(t => t.toLowerCase().includes(selectedCategory.toLowerCase()));
  });

  return (
    <div className="relative min-h-screen bg-surface-base text-brand-on-surface overflow-x-hidden selection:bg-brand-primary/20 selection:text-brand-primary">
      
      {/* Background radial ambient glow spheres */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-15%] w-[60%] h-[60%] bg-brand-primary/5 blur-[130px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-15%] w-[60%] h-[60%] bg-brand-secondary/5 blur-[130px] rounded-full"></div>
      </div>

      {/* Glassmorphic Top Navigation */}
      <nav 
        id="main-navigation" 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled 
            ? 'py-3 bg-surface-container/65 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]' 
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-5 lg:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <motion.a 
            href="#"
            onClick={(e) => handleNavClick(e, 'home')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="font-display text-lg md:text-lg lg:text-2xl font-bold text-brand-primary tracking-tighter flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0"
          >
            <Terminal className="w-5 h-5 text-brand-primary" />
            Salman Ameer
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-3 lg:gap-6 xl:gap-8">
            <a 
              href="#" 
              onClick={(e) => handleNavClick(e, 'home')}
              className="font-mono text-xs md:text-[10px] lg:text-xs text-brand-on-surface-variant hover:text-brand-primary transition-colors whitespace-nowrap"
            >
              {t('home')}
            </a>
            <a 
              href="#stack" 
              onClick={(e) => handleNavClick(e, 'stack')}
              className="font-mono text-xs md:text-[10px] lg:text-xs text-brand-on-surface-variant hover:text-brand-primary transition-colors whitespace-nowrap"
            >
              {t('stack')}
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleNavClick(e, 'projects')}
              className="font-mono text-xs md:text-[10px] lg:text-xs text-brand-on-surface-variant hover:text-brand-primary transition-colors whitespace-nowrap"
            >
              {t('projects')}
            </a>
            <a 
              href="#github-stats" 
              onClick={(e) => handleNavClick(e, 'github-stats')}
              className="font-mono text-xs md:text-[10px] lg:text-xs text-brand-on-surface-variant hover:text-brand-primary transition-colors whitespace-nowrap"
            >
              {t('github')}
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="font-mono text-xs md:text-[10px] lg:text-xs text-brand-on-surface-variant hover:text-brand-primary transition-colors whitespace-nowrap"
            >
              {t('contact')}
            </a>
            
            {/* Language Switcher */}
            <div id="desktop-lang-switcher" className="relative flex items-center bg-white/5 border border-white/10 rounded-lg px-1.5 py-1 md:px-1 md:py-0.5 lg:px-2 lg:py-1.5 backdrop-blur-sm shadow-sm gap-1 hover:border-brand-primary/40 transition-all shrink-0">
              <Globe className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-brand-primary" />
              <select
                id="lang-select"
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="bg-transparent text-[10px] md:text-[9px] lg:text-[11px] font-mono font-bold text-brand-on-surface focus:outline-none cursor-pointer pr-0.5 lg:pr-1 [&>option]:bg-surface-container [&>option]:text-brand-on-surface border-none"
                title="Select Language"
              >
                <option value="en">English (EN)</option>
                <option value="ur">اردو (UR)</option>
                <option value="ar">العربية (AR)</option>
              </select>
            </div>

            {/* Direct Hire CTA */}
            <motion.a 
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-1.5 md:px-2.5 md:py-1 lg:px-5 lg:py-2 rounded-lg bg-brand-primary-container text-surface-base font-mono font-bold text-[11px] md:text-[10px] lg:text-xs shadow-[0_0_15px_rgba(0,229,255,0.25)] hover:bg-brand-primary hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all flex items-center gap-1 lg:gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
            >
              {t('hireMe')}
            </motion.a>
          </div>

          {/* Mobile Drawer Trigger */}
          <button 
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 md:hidden rounded-lg bg-white/5 border border-white/10 text-brand-primary flex items-center justify-center cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              id="mobile-nav-panel"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden w-full bg-surface-container-low border-b border-white/10 overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                <a 
                  href="#" 
                  onClick={(e) => handleNavClick(e, 'home')}
                  className="font-mono text-sm text-brand-on-surface-variant py-2 border-b border-white/5 cursor-pointer"
                >
                  {t('home')}
                </a>
                <a 
                  href="#stack" 
                  onClick={(e) => handleNavClick(e, 'stack')}
                  className="font-mono text-sm text-brand-on-surface-variant py-2 border-b border-white/5 cursor-pointer"
                >
                  {t('stack')}
                </a>
                <a 
                  href="#projects" 
                  onClick={(e) => handleNavClick(e, 'projects')}
                  className="font-mono text-sm text-brand-on-surface-variant py-2 border-b border-white/5 cursor-pointer"
                >
                  {t('projects')}
                </a>
                <a 
                  href="#github-stats" 
                  onClick={(e) => handleNavClick(e, 'github-stats')}
                  className="font-mono text-sm text-brand-on-surface-variant py-2 border-b border-white/5 cursor-pointer"
                >
                  {t('github')}
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="font-mono text-sm text-brand-on-surface-variant py-2 border-b border-white/5 cursor-pointer"
                >
                  {t('contact')}
                </a>

                {/* Mobile Language Switcher */}
                <div id="mobile-lang-switcher" className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="font-mono text-xs text-brand-on-surface-variant flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-brand-primary" />
                    {lang === 'en' ? 'Language' : lang === 'ur' ? 'زبان' : 'اللغة'}
                  </span>
                  <div className="relative flex items-center bg-white/5 border border-white/10 rounded-lg px-2 py-1 gap-1.5">
                    <select
                      id="mobile-lang-select"
                      value={lang}
                      onChange={(e) => setLang(e.target.value)}
                      className="bg-transparent text-xs font-mono font-bold text-brand-on-surface focus:outline-none cursor-pointer [&>option]:bg-surface-container [&>option]:text-brand-on-surface border-none"
                    >
                      <option value="en">English (EN)</option>
                      <option value="ur">اردو (UR)</option>
                      <option value="ar">العربية (AR)</option>
                    </select>
                  </div>
                </div>

                <a 
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="w-full text-center py-3 rounded-lg bg-brand-primary text-surface-base font-mono font-bold text-xs mt-2 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {t('hireMe')}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content Body Container */}
      <main className="relative z-10 pt-28 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 space-y-20 md:space-y-28 lg:space-y-36 pb-24">
        
        {/* ==================== HERO HERO SECTION ==================== */}
        <section id="hero" className="min-h-[75vh] flex items-center py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
            
            {/* Left intro copy */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="md:col-span-7 space-y-6"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 font-mono text-xs text-brand-primary tracking-widest uppercase">
                {t('role')}
              </span>
              <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-brand-on-surface leading-none">
                {t('heroTitlePrefix')} <br className="hidden sm:inline" />
                <span className="text-brand-primary-dim bg-gradient-to-r from-brand-primary to-brand-primary-dim bg-clip-text text-transparent">{t('heroTitleHighlight')}</span> {t('heroTitleSuffix')}
              </h1>
              <p className="font-sans text-base md:text-lg text-brand-on-surface-variant max-w-xl leading-relaxed">
                {t('heroDesc')}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.a 
                  href="#projects"
                  onClick={(e) => handleNavClick(e, 'projects')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3.5 rounded-lg bg-brand-primary text-surface-base font-mono font-bold text-sm flex items-center gap-2 hover:bg-brand-primary-dim transition-colors group shadow-[0_0_20px_rgba(0,218,243,0.2)] cursor-pointer"
                >
                  {t('exploreProjects')}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a 
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3.5 rounded-lg border border-brand-outline-variant text-brand-primary font-mono font-bold text-sm transition-all cursor-pointer"
                >
                  {t('viewResume')}
                </motion.a>
              </div>
            </motion.div>

            {/* Right floating headshot */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="md:col-span-5 flex justify-center md:justify-end"
            >
              <div className="relative group">
                {/* Background colored ambient drop shadow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-brand-secondary/20 blur-2xl rounded-3xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                {/* Main Glass Photo Card */}
                <div className="floating relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden glass p-1.5 neon-glow-primary border-white/10 flex items-center justify-center">
                  
                  {/* Moving cyber cyber scanline effect overlay */}
                  <div className="scanline" />

                  {/* Hotlinked headshot image */}
                  <img 
                    src={assets.profileImg} 
                    alt="MERN Specialist Developer Headshot" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-[1.3rem]"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </section>


        {/* ==================== SECTION: PHILOSOPHY & ABOUT ==================== */}
        <motion.section 
          id="about" 
          className="space-y-12 scroll-mt-24 md:scroll-mt-28"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center space-y-3">
            <span className="font-mono text-xs text-brand-primary tracking-widest uppercase text-center block">
              {lang === 'en' ? 'OVERVIEW' : lang === 'ur' ? 'جائزہ' : 'نظرة عامة'}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-on-surface text-center">
              {lang === 'en' ? 'Engineering Philosophy' : lang === 'ur' ? 'انجینئرنگ فلسفہ' : 'فلسفة الهندسة'}
            </h2>
            <div className="h-1 w-20 bg-brand-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutInfo.map((info, index) => (
              <AboutCard
                key={index}
                icon={info.icon}
                title={info.title}
                description={info.description}
                color={info.color}
                index={index}
              />
            ))}
          </div>
        </motion.section>


        {/* ==================== SECTION 2: TECH STACK ==================== */}
        <motion.section 
          id="stack" 
          className="space-y-12 scroll-mt-24 md:scroll-mt-28"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          
          <div className="text-center space-y-3">
            <span className="font-mono text-xs text-brand-primary tracking-widest uppercase">{t('coreCompetencies')}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-on-surface">{t('engineRoom')}</h2>
            <div className="h-1 w-20 bg-brand-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assetsSkills.map((skill, index) => (
              <SkillCard
                key={index}
                title={skill.title}
                icon={skill.icon}
                description={skill.description}
                tags={skill.tags}
                index={index}
              />
            ))}
          </div>

        </motion.section>


        {/* ==================== SECTION 3: PORTFOLIO ==================== */}
        <motion.section 
          id="projects" 
          className="space-y-12 scroll-mt-24 md:scroll-mt-28"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center space-y-3">
            <span className="font-mono text-xs text-brand-primary tracking-widest uppercase block">
              {lang === 'en' ? 'COMPLETE PORTFOLIO' : lang === 'ur' ? 'مکمل پورٹ فولیو' : 'المعرض الكامل'}
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-on-surface">
              {lang === 'en' ? 'MERN Specialist Sandbox Grid' : lang === 'ur' ? 'MERN سپیشلسٹ سینڈ باکس گرڈ' : 'شبكة مشاريع MERN المتخصصة'}
            </h3>
            <p className="font-sans text-xs md:text-sm text-brand-on-surface-variant max-w-xl mx-auto leading-relaxed pb-2">
              {lang === 'en' 
                ? 'Explore all 17 assets and interactive builds. Filter by technology and launch the virtualization sandbox dev-server for any project node.'
                : lang === 'ur'
                ? 'تمام 17 اثاثے اور انٹرایکٹو پراجیکٹس دیکھیں۔ ٹیکنالوجی کے لحاظ سے فلٹر کریں اور کسی بھی پراجیکٹ کا سینڈ باکس لانچ کریں۔'
                : 'استكشف جميع المشاريع الـ 17. قم بالتصفية حسب التكنولوجيا وقم بتشغيل خادم التطوير الافتراضي لأي مشروع.'}
            </p>
            <div className="h-1 w-20 bg-brand-primary mx-auto rounded-full"></div>
          </div>

          {/* Infinite Horizontal Technology Marquee Slider */}
          <div className="relative w-full overflow-hidden py-4 bg-surface-container/15 border-y border-white/5">
              {/* Fade masks */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface-base via-surface-base/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface-base via-surface-base/80 to-transparent z-10 pointer-events-none" />
              
              <div className="flex animate-marquee gap-8 items-center whitespace-nowrap">
                {[
                  'HTML', 'CSS', 'JavaScript', 'React JS', 'MongoDB', 'Express JS', 'Supabase', 'Lovable', 'Bolt', 'Google AI Studio', 'Figma',
                  'HTML', 'CSS', 'JavaScript', 'React JS', 'MongoDB', 'Express JS', 'Supabase', 'Lovable', 'Bolt', 'Google AI Studio', 'Figma',
                  'HTML', 'CSS', 'JavaScript', 'React JS', 'MongoDB', 'Express JS', 'Supabase', 'Lovable', 'Bolt', 'Google AI Studio', 'Figma',
                  'HTML', 'CSS', 'JavaScript', 'React JS', 'MongoDB', 'Express JS', 'Supabase', 'Lovable', 'Bolt', 'Google AI Studio', 'Figma'
                ].map((tech, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-brand-primary/40 hover:bg-white/10 transition-colors duration-300 group shrink-0 cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary group-hover:scale-125 transition-transform" />
                    <span className="font-mono text-[11px] font-bold text-brand-on-surface-variant group-hover:text-brand-primary transition-colors tracking-wide uppercase">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Grid of other projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.slice(0, visibleCount).map((project, index) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tech={project.tech}
                  icons={project.icons}
                  demo={project.demo}
                  code={project.code}
                  index={index}
                />
              ))}
            </div>

            {/* Pagination / Expand Action buttons */}
            {filteredProjects.length > visibleCount ? (
              <div className="text-center pt-4">
                <button
                  onClick={() => setVisibleCount(prev => prev + 6)}
                  className="px-6 py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high border border-white/5 text-brand-primary font-mono text-xs font-bold transition-all hover:scale-102 active:scale-98 cursor-pointer"
                >
                  {lang === 'en' ? 'LOAD MORE ASSETS' : lang === 'ur' ? 'مزید اثاثے لوڈ کریں' : 'تحميل المزيد من المشاريع'}
                </button>
              </div>
            ) : filteredProjects.length > 6 && (
              <div className="text-center pt-4">
                <button
                  onClick={() => setVisibleCount(6)}
                  className="px-6 py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high border border-white/5 text-brand-on-surface-variant font-mono text-xs font-bold transition-all hover:scale-102 active:scale-98 cursor-pointer"
                >
                  {lang === 'en' ? 'COLLAPSE GRID' : lang === 'ur' ? 'گرڈ سکیڑیں' : 'طي الشبكة'}
                </button>
              </div>
            )}
        </motion.section>


        {/* ==================== SECTION: GITHUB LIVE ANALYTICS ==================== */}
        <motion.section 
          id="github-stats" 
          className="scroll-mt-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <GitHubStats lang={lang} />
        </motion.section>


        {/* ==================== CONTACT TRANSMISSION CONTROLLER ==================== */}
        <motion.section 
          id="contact" 
          className="space-y-12 scroll-mt-24 md:scroll-mt-28"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          
          <div className="glass p-8 md:p-10 lg:p-16 rounded-3xl border border-white/5 relative overflow-hidden">
            
            {/* Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 relative z-10">
              
              {/* Left Column Information */}
              <div className="md:col-span-5 lg:col-span-5 space-y-6 lg:space-y-8 flex flex-col justify-between">
                <div className="space-y-6">
                  <h2 className="font-display text-3xl md:text-5xl font-extrabold text-brand-on-surface leading-tight">
                    {t('letsBuildTitlePrefix')} <br className="hidden sm:inline" />
                    {t('letsBuildTitleHighlight')} <span className="text-brand-primary">{t('letsBuildTitleSuffix')}</span>
                  </h2>
                  <p className="font-sans text-sm md:text-base text-brand-on-surface-variant leading-relaxed">
                    {t('letsBuildDesc')}
                  </p>
                </div>

                {/* Live Contacts cards */}
                <div className="space-y-4">
                  <a 
                    href="mailto:salman.leo2@gmail.com" 
                    className="flex items-center gap-4 text-brand-on-surface hover:text-brand-primary transition-colors group"
                  >
                    <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary group-hover:scale-105 transition-transform shrink-0 border border-brand-primary/10">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs md:text-sm">salman.leo2@gmail.com</span>
                  </a>

                  <div className="flex items-center gap-4 text-brand-on-surface">
                    <div className="w-10 h-10 bg-brand-secondary/10 rounded-full flex items-center justify-center text-brand-secondary shrink-0 border border-brand-secondary/10">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs md:text-sm text-brand-on-surface-variant">
                      {t('basedIn')}
                    </span>
                  </div>
                </div>


              </div>

              {/* Right Column Form & Encryption Simulator */}
              <div className="md:col-span-7 lg:col-span-7">
                <AnimatePresence mode="wait">
                  
                  {submissionStep === 'idle' ? (
                    /* Regular Form Fields */
                    <motion.form 
                      key="contact-form"
                      onSubmit={handleContactSubmit}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block font-mono text-[10px] text-brand-on-surface-variant uppercase tracking-widest mb-2">
                          {t('fullName')}
                        </label>
                        <input 
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Enter Your Full Name"
                          className="w-full bg-surface-base/50 border border-brand-outline-variant rounded-lg p-4 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all placeholder:text-brand-outline-variant text-sm font-sans"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-[10px] text-brand-on-surface-variant uppercase tracking-widest mb-2">
                          {t('emailAddress')}
                        </label>
                        <input 
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="Enter Your E-Mial"
                          className="w-full bg-surface-base/50 border border-brand-outline-variant rounded-lg p-4 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all placeholder:text-brand-outline-variant text-sm font-sans"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-[10px] text-brand-on-surface-variant uppercase tracking-widest mb-2">
                          {t('messagePayload')}
                        </label>
                        <textarea 
                          required
                          value={contactForm.message}
                          onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                          placeholder={t('placeholderSpecs')}
                          rows={4}
                          className="w-full bg-surface-base/50 border border-brand-outline-variant rounded-lg p-4 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all placeholder:text-brand-outline-variant text-sm font-sans resize-none"
                        />
                      </div>

                      <motion.button 
                        type="submit"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="w-full bg-brand-primary text-surface-base font-mono font-bold text-xs py-4 rounded-lg hover:bg-brand-primary-dim transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(0,218,243,0.2)] cursor-pointer"
                      >
                        {t('sendTransmission')}
                      </motion.button>
                    </motion.form>
                  ) : submissionStep === 'encrypting' ? (
                    /* Step 1: Encrypting payload animation */
                    <motion.div 
                      key="step-encrypt"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-80 flex flex-col justify-center items-center space-y-4 font-mono text-xs text-brand-primary bg-surface-base/40 rounded-xl border border-white/5 p-8"
                    >
                      <Lock className="w-12 h-12 text-brand-primary animate-bounce" />
                      <span className="font-bold text-brand-primary animate-pulse">{t('encryptingPackets')}</span>
                      <span className="text-[10px] text-brand-on-surface-variant">{t('sha256Cipher')}</span>
                    </motion.div>
                  ) : submissionStep === 'handshake' ? (
                    /* Step 2: Handshake connection */
                    <motion.div 
                      key="step-handshake"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-80 flex flex-col justify-center items-center space-y-4 font-mono text-xs text-brand-secondary bg-surface-base/40 rounded-xl border border-white/5 p-8"
                    >
                      <Activity className="w-12 h-12 text-brand-secondary animate-pulse" />
                      <span className="font-bold text-brand-secondary animate-pulse">{t('establishingHandshake')}</span>
                      <span className="text-[10px] text-brand-on-surface-variant">{t('resolvingWss')}</span>
                    </motion.div>
                  ) : submissionStep === 'delivering' ? (
                    /* Step 3: Delivering */
                    <motion.div 
                      key="step-delivering"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-80 flex flex-col justify-center items-center space-y-4 font-mono text-xs text-brand-primary-container bg-surface-base/40 rounded-xl border border-white/5 p-8"
                    >
                      <Cpu className="w-12 h-12 text-brand-primary-container animate-spin" />
                      <span className="font-bold text-brand-primary-container animate-pulse">{t('dispatchingNodes')}</span>
                      <span className="text-[10px] text-brand-on-surface-variant">{t('mongodbCommit')}</span>
                    </motion.div>
                  ) : (
                    /* Step 4: Success notification state */
                    <motion.div 
                      key="step-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-80 flex flex-col justify-center items-center space-y-5 font-mono text-xs text-emerald-400 bg-surface-base/40 rounded-xl border border-emerald-500/20 p-8 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center">
                        <Check className="w-8 h-8 text-emerald-400" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-emerald-400 text-sm">{t('transmissionSecured')}</h4>
                        <p className="text-[10px] text-brand-on-surface-variant max-w-sm">
                          {t('mongodbOk')}
                        </p>
                      </div>
                      <button 
                        onClick={resetFormState}
                        className="px-4 py-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] hover:bg-emerald-500/20 transition-all cursor-pointer"
                      >
                        {t('transmitNew')}
                      </button>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

            </div>



          </div>
        </motion.section>

      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="w-full mt-24 bg-surface-container-lowest border-t border-brand-outline-variant/30 relative z-10 pt-16 pb-12 font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-brand-outline-variant/10">
          
          {/* Column 1: Brand Info & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div 
              onClick={(e) => handleNavClick(e, 'home')}
              className="flex items-center gap-1.5 text-brand-primary font-display font-bold text-xl cursor-pointer hover:opacity-95 transition-opacity w-fit"
            >
              <Terminal className="w-5.5 h-5.5" />
              <span className="tracking-tight">Salman Ameer</span>
            </div>
            <p className="text-xs text-brand-on-surface-variant/90 max-w-sm leading-relaxed">
              {t('footerDesc')}
            </p>
            {/* Social connection icons with nice hover glow/styling */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-xl bg-surface-container/30 border border-brand-outline-variant/20 hover:border-brand-primary/40 hover:text-brand-primary hover:bg-surface-container/60 text-brand-on-surface-variant transition-all duration-300"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-xl bg-surface-container/30 border border-brand-outline-variant/20 hover:border-brand-primary/40 hover:text-brand-primary hover:bg-surface-container/60 text-brand-on-surface-variant transition-all duration-300"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="mailto:salman.leo2@gmail.com" 
                className="p-2.5 rounded-xl bg-surface-container/30 border border-brand-outline-variant/20 hover:border-brand-primary/40 hover:text-brand-primary hover:bg-surface-container/60 text-brand-on-surface-variant transition-all duration-300"
                title="Email Connection"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-brand-primary font-bold">
              {t('footerNavigation')}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a 
                  href="#" 
                  onClick={(e) => handleNavClick(e, 'home')}
                  className="text-brand-on-surface-variant hover:text-brand-primary transition-colors duration-200"
                >
                  {t('home')}
                </a>
              </li>
              <li>
                <a 
                  href="#stack" 
                  onClick={(e) => handleNavClick(e, 'stack')}
                  className="text-brand-on-surface-variant hover:text-brand-primary transition-colors duration-200"
                >
                  {t('stack')}
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={(e) => handleNavClick(e, 'projects')}
                  className="text-brand-on-surface-variant hover:text-brand-primary transition-colors duration-200"
                >
                  {t('projects')}
                </a>
              </li>
              <li>
                <a 
                  href="#github-stats" 
                  onClick={(e) => handleNavClick(e, 'github-stats')}
                  className="text-brand-on-surface-variant hover:text-brand-primary transition-colors duration-200"
                >
                  {t('github')}
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="text-brand-on-surface-variant hover:text-brand-primary transition-colors duration-200"
                >
                  {t('contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialties */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-brand-primary font-bold">
              {t('footerSpecialties')}
            </h4>
            <ul className="space-y-3 text-xs text-brand-on-surface-variant/90">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0" />
                <span>{t('footerSpec1')}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0" />
                <span>{t('footerSpec2')}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0" />
                <span>{t('footerSpec3')}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0" />
                <span>{t('footerSpec4')}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright notice bar */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left text-brand-on-surface-variant/80 font-mono text-[10px]">
            {lang === 'en' 
              ? `© ${new Date().getFullYear()} Salman Ameer.`
              : lang === 'ur'
                ? `© ${new Date().getFullYear()} سلمان امیر۔`
                : `© ${new Date().getFullYear()} سلمان أمير.`}
          </div>
        </div>
      </footer>



      {/* Futuristic Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            key="back-to-top"
            id="back-to-top-button"
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-[5.25rem] right-7 z-50 p-3 rounded-full bg-surface-container/90 border border-brand-outline-variant/50 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-brand-primary hover:text-white transition-colors cursor-pointer group flex items-center justify-center"
            title={t('backToTop')}
          >
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Futuristic Floating Theme Toggle Widget */}
      <motion.div 
        id="theme-controller-widget"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-1.5 p-1.5 rounded-full bg-surface-container/90 border border-brand-outline-variant/50 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
      >
        <button
          onClick={() => setTheme('dark')}
          className={`p-2.5 rounded-full transition-all flex items-center justify-center relative cursor-pointer group ${
            theme === 'dark' 
              ? 'text-brand-primary bg-surface-base border border-brand-primary/20 shadow-[0_0_12px_rgba(195,245,255,0.2)]' 
              : 'text-brand-on-surface-variant hover:text-brand-on-surface'
          }`}
          title="Switch to Dark Mode"
        >
          <Moon className="w-4 h-4 transition-transform group-hover:rotate-12" />
        </button>
        
        <button
          onClick={() => setTheme('cyber-light')}
          className={`p-2.5 rounded-full transition-all flex items-center justify-center relative cursor-pointer group ${
            theme === 'cyber-light' 
              ? 'text-brand-primary bg-surface-base border border-brand-primary/25 shadow-[0_0_12px_rgba(0,90,112,0.2)]' 
              : 'text-brand-on-surface-variant hover:text-brand-on-surface'
          }`}
          title="Switch to Cyber-Light Mode"
        >
          <Sun className="w-4 h-4 transition-transform group-hover:rotate-45" />
        </button>
      </motion.div>

    </div>
  );
}
