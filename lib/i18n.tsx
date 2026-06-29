"use client"

import { createContext, useContext, useState, useCallback,useEffect, type ReactNode } from 'react'

type Language = 'en' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isRTL: boolean
}

const translations = {
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.testimonials': 'Testimonials',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hello, I am',
    'hero.name': 'Ghada ABDULLA',
    'hero.title': 'Laravel & SaaS Developer',
    'hero.description': 'I build scalable SaaS applications and modern web systems using Laravel, React, and Tailwind CSS. Focused on clean architecture, performance optimization, and reliable solutions built for real-world use.',
    'hero.cta.projects': 'View Projects',
    'hero.cta.contact': 'Contact Me',
    
    // Services
    'services.title': 'What I Help Businesses Build',
    'services.subtitle': 'Scalable systems, optimized performance, and production-ready web applications built for real usage.',
    'services.laravel.title': 'Laravel Systems Development',
    'services.laravel.description': 'Build and improve Laravel applications with clean architecture, scalable structure, and maintainable codebases..',
    'services.saas.title': 'SaaS MVP Development',
    'services.saas.description': 'Develop scalable SaaS applications with secure authentication, user management, and production-ready architecture.',
    'services.payment.title': 'Payment System Integration',
    'services.payment.description': 'Integrate secure payment flows using Stripe and Paddle with reliable checkout and subscription handling.',
    'services.performance.title': 'Performance Optimization',
    'services.performance.description': 'Improve slow Laravel applications by optimizing frontend performance, backend logic, and database queries.',
    'services.api.title': 'System Stabilization & Optimization',
    'services.api.description': 'Refactor unstable codebases, improve responsiveness, and make existing systems more reliable and maintainable.',
    'services.frontend.title': 'Responsive User Interfaces',
    'services.frontend.description': 'Build fast, mobile-friendly interfaces using React and Tailwind CSS with clean, modern design.',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Real-world solutions with measurable impact',
    'projects.problem': 'Challenge',
    'projects.solution': 'Solution',
    'projects.result': 'Result',
    'projects.tech': 'Technologies',
    'projects.viewProject': 'View Project',
    
    // Project 1
    'projects.1.title': 'Privacy-First SaaS Processing Platform',
    'projects.1.problem': 'Traditional file converters upload sensitive files to servers, creating privacy and performance concerns for users.',
    'projects.1.solution': 'Built a fully client-side SaaS platform with browser-based processing, modular architecture, drag-and-drop uploads, and HEIC-to-JPG conversion without server uploads.',
    'projects.1.result': '98/100 Lighthouse score • Zero-upload privacy architecture • WASM-ready system',
    
    // Project 2
    'projects.2.title': 'Laravel Payment Recovery System',
    'projects.2.problem': 'The platform suffered from broken Paddle payments, unstable storage behavior, and production issues after major third-party API changes.',
    'projects.2.solution': 'Rebuilt the Paddle payment flow for the latest API changes, stabilized Cloudflare R2 storage behavior, improved mobile responsiveness, and secured protected download access without breaking the existing platform.',
    'projects.2.result': 'Paddle integration restored • Cloudflare R2 storage fixed • Secure payment flow rebuilt • Production platform stabilized',
    // Project 3
    'projects.3.title': 'Secure Laravel SaaS Platform & Access Control System',
    'projects.3.problem':'The project started as a simple Laravel landing page and gradually evolved into a secure SaaS-style platform requiring scalable admin workflows, protected downloads, and secure user access.',
    'projects.3.solution': 'Built and expanded the platform in multiple stages using Laravel, adding secure authentication, reCAPTCHA protection, dynamic admin management, and protected download access for authenticated users.',
    'projects.3.result': 'Custom admin panel • Protected authenticated downloads • Secure SaaS-style architecture • Responsive Tailwind interface',
    
    // Testimonials
    'testimonials.title': 'Client Testimonials',
    'testimonials.subtitle': 'What clients say about working with me',
    
    'testimonials.1.text': 'Ghada meticulously creates the code. She shares the process clearly and delivers successful results with great attention to detail.',
    'testimonials.1.name': 'Mehmet A.',
    'testimonials.1.role': 'High-Performance SaaS MVP.',
    
    
    'testimonials.2.text': 'One of the most professional developers I have worked with. Excellent communication, deep problem-solving skills, and outstanding attention to detail throughout the entire project.',
    'testimonials.2.name': 'Adam Y.',
    'testimonials.2.role': 'System Optimization Project.',
    
    
    'testimonials.3.text': 'Completed: Secure Admin Panel • Protected Downloads • reCAPTCHA Integration • Responsive Tailwind UI',
    'testimonials.3.name': 'Mehmet A.',
    'testimonials.3.role': 'Laravel SaaS Platform.',

   
  
    // Tech Stack
    'tech.title': 'Technologies & Tools',
    'tech.subtitle': 'Technologies I work with daily',
    'tech.backend': 'Backend',
    'tech.frontend': 'Frontend',
    'tech.database': 'SaaS & Integrations',
    'tech.devops': 'Workflow & Tools',
    
    // About
    'about.title': 'About',
    'about.p1': 'I’m a Laravel-focused full stack developer who enjoys building clean, scalable web applications and improving existing systems for real-world usage.',
    'about.p2': 'My work combines backend development, performance optimization, and responsive frontend interfaces using Laravel, React, and Tailwind CSS.',
    'about.p3': 'I focus on building reliable, maintainable systems with clean architecture and user-focused experiences that perform well across devices.',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to discuss your project? Let\'s connect.',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.upwork': 'Upwork',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    // 'footer.built': 'Focused on building fast, scalable, and production-ready web applications.',
    'footer.built': 'Focused on building fast, scalable, and reliable web applications.',
    
  },
  ar: {
    // Navigation
    'nav.services': 'الخدمات',
    'nav.projects': 'المشاريع',
    'nav.testimonials': 'الشهادات',
    'nav.about': 'عني',
    'nav.contact': 'تواصل',
    
    // Hero
    'hero.greeting': 'مرحباً، أنا',
    'hero.name': 'غادة عبدالله',
    'hero.title': 'مطور Laravel و أنظمة SaaS',
    'hero.description': 'أبني تطبيقات SaaS وأنظمة ويب حديثة وقابلة للتوسع باستخدام Laravel وReact وTailwind CSS، مع التركيز على البنية البرمجية النظيفة وتحسين الأداء وتطوير حلول موثوقة جاهزة للاستخدام الفعلي.',
    'hero.cta.projects': 'عرض المشاريع',
    'hero.cta.contact': 'تواصل معي',
    
    // Services
    'services.title': 'الحلول التي أساعد الشركات على بنائها',
    'services.subtitle': 'أنظمة قابلة للتوسع وتطبيقات ويب عالية الاعتمادية مصممة لتحسين الأداء وتلبية احتياجات الاستخدام الفعلي.',
    'services.laravel.title': 'تطوير أنظمة Laravel',
    'services.laravel.description': 'بناء وتطوير تطبيقات Laravel باستخدام بنية برمجية نظيفة وهيكل قابل للتوسع وقواعد برمجية سهلة الصيانة.',
    'services.saas.title': 'تطوير نماذج SaaS الأولية (MVP)',
    'services.saas.description': 'تطوير تطبيقات SaaS قابلة للتوسع تتضمن أنظمة مصادقة آمنة وإدارة للمستخدمين وبنية جاهزة للاستخدام الفعلي.',
    'services.payment.title': 'تكامل أنظمة الدفع الإلكتروني',
    'services.payment.description': 'دمج أنظمة دفع آمنة باستخدام Stripe وPaddle مع إدارة موثوقة لعمليات الشراء والاشتراكات.',
    'services.performance.title': 'تحسين الأداء',
    'services.performance.description': 'تحسين أداء تطبيقات Laravel من خلال رفع كفاءة الواجهة الأمامية والمنطق الخلفي واستعلامات قواعد البيانات.',
    'services.api.title': 'استقرار الأنظمة وتحسينها',
    'services.api.description':'إعادة تنظيم الأنظمة غير المستقرة وتحسين سرعة الاستجابة وجعل الأنظمة الحالية أكثر موثوقية وسهولة في الصيانة.',
    'services.frontend.title':  'واجهات مستخدم متجاوبة',
    'services.frontend.description': 'بناء واجهات سريعة ومتجاوبة مع مختلف الأجهزة باستخدام React وTailwind CSS بتصميم حديث ونظيف.',
    
    // Projects
    'projects.title': 'مشاريع مميزة',
    'projects.subtitle':'حلول عملية مبنية لتقديم نتائج ملموسة وقابلة للقياس',
    'projects.problem': 'التحدي',
    'projects.solution': 'الحل',
    'projects.result': 'النتيجة',
    'projects.tech': 'التقنيات',
    'projects.viewProject': 'عرض المشروع',
    
    // Project 1
    'projects.1.title': 'منصة SaaS لمعالجة الملفات مع حماية الخصوصية',
    'projects.1.problem': 'تعتمد أغلب أدوات تحويل الملفات التقليدية على رفع الملفات إلى الخادم، مما يسبب مشاكل تتعلق بالخصوصية والأداء.',
    'projects.1.solution': 'تم بناء منصة SaaS تعمل بالكامل داخل المتصفح مع بنية معيارية ودعم السحب والإفلات وتحويل ملفات HEIC إلى JPG دون الحاجة إلى رفع الملفات إلى الخادم.',
    'projects.1.result': 'درجة 98/100 في Lighthouse • بنية تحافظ على الخصوصية دون رفع الملفات • نظام جاهز للتكامل مع WebAssembly',
    // Project 2
    'projects.2.title': "إصلاح نظام مدفوعات Laravel واستقرار البيئة التشغيلية",
    // 'projects.2.problem':"عانت المنصة من تعطل نظام دفع Paddle، وعدم استقرار في التخزين، ومشاكل في الإنتاج بعد تحديثات برمجية ضخمة من أطراف ثالثة.",
    'projects.2.problem': 'كانت المنصة تعاني من تعطل تكامل Paddle وعدم استقرار التخزين وظهور مشاكل تشغيلية بعد تحديثات كبيرة في واجهات برمجة التطبيقات الخارجية.',
    // 'projects.2.solution': "إعادة بناء تدفق مدفوعات Paddle لتوافق أحدث التحديثات، إصلاح استقرار تخزين Cloudflare R2، تحسين استجابة الجوال، وتأمين وصول التحميلات المحمية.",
    'projects.2.solution': 'تمت إعادة بناء مسار الدفع ليتوافق مع تحديثات Paddle الأخيرة، وتحسين استقرار Cloudflare R2، وتحسين تجربة الاستخدام على الأجهزة المحمولة، وتأمين الوصول إلى الملفات المحمية دون التأثير على عمل المنصة الحالية.',
    // 'projects.2.result':"استعادة بوابة Paddle • إصلاح تخزين R2 • إعادة بناء تدفق الدفع الآمن • استقرار المنصة بالكامل.",
    'projects.2.result': 'استعادة تكامل Paddle • إصلاح Cloudflare R2 • إعادة بناء مسار الدفع الآمن • تحسين استقرار المنصة',
    
    // Project 3
    'projects.3.title': 'منصة Laravel آمنة مع نظام إدارة وصلاحيات الوصول',
    // 'projects.3.problem': "بدأ المشروع كصفحة هبوط بسيطة وتطور تدريجياً إلى منصة SaaS تتطلب سير عمل إداري قابل للتوسع ونظام تحميل ملفات محمي.",
    'projects.3.problem': 'بدأ المشروع كصفحة هبوط بسيطة باستخدام Laravel ثم تطور تدريجياً إلى منصة بأسلوب SaaS تتطلب إدارة مرنة للمحتوى وتحكماً آمناً في الوصول إلى الملفات والمستخدمين.',
    // 'projects.3.solution':"توسيع المنصة عبر عدة مراحل باستخدام Laravel، إضافة نظام مصادقة آمن، حماية reCAPTCHA، إدارة إدارية ديناميكية، وتقييد التحميل للمستخدمين الموثقين فقط.",
    'projects.3.solution': 'تم تطوير المنصة على عدة مراحل باستخدام Laravel مع إضافة نظام مصادقة آمن وحماية reCAPTCHA ولوحة تحكم ديناميكية وإدارة وصول آمنة للمستخدمين المسجلين.',
    'projects.3.result': "لوحة تحكم مخصصة • تحميلات محمية للمشتركين • بنية SaaS آمنة • واجهة Tailwind متجاوبة.",
    
    // Testimonials
    'testimonials.title': 'آراء العملاء',
    'testimonials.subtitle': 'ماذا يقول العملاء عن تجربة العمل معي',
    
    'testimonials.1.text': 'تعمل غادة بدقة كبيرة في كتابة الكود، وتشرح خطوات العمل بوضوح وتنجز النتائج المطلوبة باهتمام ملحوظ بالتفاصيل.',
    'testimonials.1.name':  'Mehmet A.',
    'testimonials.1.role': 'مشروع SaaS عالي الأداء.',

    'testimonials.2.text': 'من أكثر المطورين احترافية الذين عملت معهم. تواصل ممتاز، وقدرة عالية على حل المشكلات، واهتمام كبير بالتفاصيل طوال فترة المشروع.',
    'testimonials.2.name': 'Adam Y.',
    'testimonials.2.role':'مشروع تحسين واستقرار الأنظمة.',
    
    'testimonials.3.text': 'تم تنفيذ لوحة تحكم مخصصة، ونظام تنزيلات محمية، وتكامل reCAPTCHA، وواجهة متجاوبة باستخدام Tailwind CSS.',  
    'testimonials.3.name':  'Mehmet A.',
    'testimonials.3.role': 'منصة Laravel بأسلوب SaaS.',

    // Tech Stack
    'tech.title': 'التقنيات والأدوات',
    'tech.subtitle': 'التقنيات والأدوات التي أستخدمها بشكل يومي في بناء المشاريع',
    'tech.backend': 'الواجهة الخلفية',
    'tech.frontend': 'الواجهة الأمامية',
    'tech.database': 'أنظمة SaaS والتكاملات',
    'tech.devops': 'أدوات العمل والتطوير',

    // About
    // 'about.title': 'عني',
    // 'about.p1': 'أنا مطور يركز على الأنظمة ويؤمن ببناء برمجيات قابلة للتوسع. مع خبرة واسعة في Laravel ونظام PHP البيئي، أتخصص في تحويل متطلبات الأعمال المعقدة إلى حلول أنيقة وقابلة للصيانة.',
    // 'about.p2': 'نهجي يجمع بين مبادئ الهندسة النظيفة والهندسة العملية. كل سطر كود أكتبه جاهز للإنتاج ومختبر بدقة ومحسن للأداء الفعلي.',
    // 'about.p3': 'أركز على النتائج القابلة للقياس: أوقات تحميل أسرع، معدلات تحويل أعلى، وأنظمة تتعامل مع النمو دون انهيار. عندما تعمل معي، تحصل على شريك هندسي ملتزم بنجاحك.',
    'about.title': 'عني',
    'about.p1': 'أنا مطورة Full Stack متخصصة في Laravel، أستمتع ببناء تطبيقات ويب وأنظمة قابلة للتوسع وتحويل متطلبات الأعمال إلى حلول عملية سهلة الصيانة.',
    'about.p2': 'يجمع عملي بين تطوير الواجهة الخلفية وتحسين الأداء وبناء واجهات مستخدم متجاوبة باستخدام Laravel وReact وTailwind CSS مع التركيز على البنية البرمجية النظيفة.',
    'about.p3': 'أركز على بناء أنظمة موثوقة وسهلة الصيانة تقدم تجربة استخدام جيدة وتعمل بكفاءة على مختلف الأجهزة مع مراعاة قابلية التوسع على المدى الطويل.',

    // Contact
    'contact.title': 'تواصل معي',
    'contact.subtitle': 'هل لديك مشروع أو فكرة ترغب بمناقشتها؟ يسعدني التواصل معك.',
    'contact.email': 'البريد الإلكتروني',
    'contact.linkedin': 'لينكد إن',
    'contact.github': 'جيت هب',
    'contact.upwork': 'أب وورك',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.built': 'أركز على بناء تطبيقات ويب سريعة وقابلة للتوسع وموثوقة.',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
  document.documentElement.lang = language

  document.documentElement.dir =
    language === 'ar'
      ? 'rtl'
      : 'ltr'
}, [language])

  // const setLanguage = useCallback((lang: Language) => {
  //   setLanguageState(lang)
  //   document.documentElement.lang = lang
  //   document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  // }, [])
  const setLanguage = useCallback((lang: Language) => {
  setLanguageState(lang)
}, [])

  const t = useCallback((key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }, [language])

  const isRTL = language === 'ar'

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
