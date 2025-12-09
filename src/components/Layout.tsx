interface LayoutProps {
  title: string
  lang: 'ar' | 'en'
  children: any
}

export const Layout = ({ title, lang, children }: LayoutProps) => {
  const dir = lang === 'ar' ? 'rtl' : 'ltr'
  const isArabic = lang === 'ar'
  
  return (
    <html lang={lang} dir={dir}>
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{title}</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;900&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
        <style dangerouslySetInnerHTML={{__html: `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: ${isArabic ? "'Tajawal', sans-serif" : "'Poppins', sans-serif"};
            line-height: 1.8;
            color: #1a1a1a;
            overflow-x: hidden;
            background: #0a0a0a;
        }
        .hero-gradient {
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
            position: relative;
            overflow: hidden;
        }
        .hero-gradient::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
                radial-gradient(ellipse at top, rgba(218, 165, 32, 0.15) 0%, transparent 50%),
                radial-gradient(ellipse at bottom right, rgba(218, 165, 32, 0.1) 0%, transparent 50%);
            animation: shimmer 8s ease-in-out infinite;
        }
        @keyframes shimmer {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 0.8; }
        }
        .hero-gradient::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
                linear-gradient(90deg, rgba(218, 165, 32, 0.03) 1px, transparent 1px),
                linear-gradient(rgba(218, 165, 32, 0.03) 1px, transparent 1px);
            background-size: 50px 50px;
        }
        .gold-text {
            background: linear-gradient(135deg, #DAA520 0%, #FFD700 50%, #DAA520 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .gold-bg {
            background: linear-gradient(135deg, #DAA520 0%, #FFD700 50%, #DAA520 100%);
            box-shadow: 0 8px 32px rgba(218, 165, 32, 0.4);
        }
        .dark-green-bg {
            background: #0a0a0a;
        }
        .hover-gold:hover {
            background: linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFD700 100%);
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 15px 40px rgba(255, 215, 0, 0.5);
        }
        .luxury-card {
            background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
            border: 2px solid rgba(218, 165, 32, 0.3);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }
        .luxury-card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(218, 165, 32, 0.1) 0%, transparent 70%);
            opacity: 0;
            transition: opacity 0.5s;
        }
        .luxury-card:hover::before {
            opacity: 1;
        }
        .luxury-card:hover {
            border-color: rgba(255, 215, 0, 0.8);
            transform: translateY(-12px);
            box-shadow: 
                0 25px 50px rgba(218, 165, 32, 0.3),
                0 0 100px rgba(255, 215, 0, 0.2);
        }
        .service-card {
            background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
            border: 2px solid rgba(218, 165, 32, 0.2);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }
        .service-card::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(218, 165, 32, 0.2), transparent);
            transition: left 0.5s;
        }
        .service-card:hover::after {
            left: 100%;
        }
        .service-card:hover {
            border-color: rgba(255, 215, 0, 0.6);
            transform: translateY(-10px);
            box-shadow: 0 20px 60px rgba(218, 165, 32, 0.4);
        }
        .whatsapp-float {
            position: fixed;
            width: 65px;
            height: 65px;
            bottom: 30px;
            ${isArabic ? 'left: 30px;' : 'right: 30px;'}
            background: linear-gradient(135deg, #25d366 0%, #20ba5a 100%);
            color: #FFF;
            border-radius: 50%;
            text-align: center;
            font-size: 32px;
            box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            animation: pulse 2s infinite;
        }
        @keyframes pulse {
            0%, 100% {
                box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
            }
            50% {
                box-shadow: 0 8px 35px rgba(37, 211, 102, 0.6);
            }
        }
        .whatsapp-float:hover {
            background: linear-gradient(135deg, #20ba5a 0%, #1fa851 100%);
            transform: scale(1.1) rotate(5deg);
            animation: none;
        }
        .top-bar {
            background: linear-gradient(90deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
            color: #DAA520;
            border-bottom: 1px solid rgba(218, 165, 32, 0.3);
            backdrop-filter: blur(10px);
        }
        .nav-link {
            position: relative;
            transition: all 0.4s ease;
            padding: 8px 0;
            font-weight: 600;
            letter-spacing: 0.5px;
        }
        .nav-link:hover {
            color: #FFD700;
            text-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
        }
        .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 3px;
            bottom: 0;
            ${isArabic ? 'right: 0;' : 'left: 0;'}
            background: linear-gradient(90deg, #DAA520 0%, #FFD700 50%, #DAA520 100%);
            transition: width 0.4s ease;
            border-radius: 2px;
            box-shadow: 0 0 10px rgba(218, 165, 32, 0.5);
        }
        .nav-link:hover::after {
            width: 100%;
        }
        .section-divider {
            width: 120px;
            height: 4px;
            background: linear-gradient(90deg, transparent 0%, #DAA520 20%, #FFD700 50%, #DAA520 80%, transparent 100%);
            margin: 0 auto 2rem;
            border-radius: 2px;
            box-shadow: 0 0 20px rgba(218, 165, 32, 0.6);
            animation: glow 2s ease-in-out infinite;
        }
        @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(218, 165, 32, 0.6); }
            50% { box-shadow: 0 0 30px rgba(255, 215, 0, 0.8); }
        }
        .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 1.5rem;
        }
        @media (max-width: 768px) {
            .whatsapp-float {
                width: 55px;
                height: 55px;
                font-size: 26px;
                bottom: 20px;
                ${isArabic ? 'left: 20px;' : 'right: 20px;'}
            }
            .container {
                padding: 0 1rem;
            }
        }
    `}}></style>
    </head>
    <body class="bg-black">
        {/* Top Bar */}
        <div class="top-bar py-2">
            <div class="container mx-auto px-4">
                <div class="flex justify-between items-center text-sm">
                    <div class="flex gap-6">
                        <a href="tel:+971501234567" class="hover:text-gold transition flex items-center gap-2">
                            <i class="fas fa-phone"></i>
                            <span>+971 50 123 4567</span>
                        </a>
                        <a href="https://wa.me/971501234567" target="_blank" class="hover:text-gold transition flex items-center gap-2">
                            <i class="fab fa-whatsapp"></i>
                            <span>{isArabic ? 'واتساب' : 'WhatsApp'}</span>
                        </a>
                    </div>
                    <div class="flex gap-4">
                        <a href={isArabic ? '/en' : '/ar'} class="hover:text-gold transition">
                            {isArabic ? 'English' : 'عربي'}
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* Main Navigation */}
        <nav class="bg-black bg-opacity-95 backdrop-blur-md shadow-2xl sticky top-0 z-50 border-b border-gold border-opacity-20">
            <div class="container mx-auto px-4">
                <div class="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div class="flex items-center">
                        <a href={isArabic ? '/' : '/en'}>
                            <img src="/static/logo.png" alt="Logo" class="h-16 md:h-20"/>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div class="hidden md:flex gap-8 items-center">
                        <a href={isArabic ? '/' : '/en'} class="nav-link font-medium text-white">
                            {isArabic ? 'الرئيسية' : 'Home'}
                        </a>
                        <a href={isArabic ? '/ar/about' : '/en/about'} class="nav-link font-medium text-white">
                            {isArabic ? 'من نحن' : 'About Us'}
                        </a>
                        <a href={isArabic ? '/ar/services' : '/en/services'} class="nav-link font-medium text-white">
                            {isArabic ? 'خدماتنا' : 'Our Services'}
                        </a>
                        <a href={isArabic ? '/ar/practice-areas' : '/en/practice-areas'} class="nav-link font-medium text-white">
                            {isArabic ? 'مجالات الممارسة' : 'Practice Areas'}
                        </a>
                        <a href={isArabic ? '/ar/articles' : '/en/articles'} class="nav-link font-medium text-white">
                            {isArabic ? 'المقالات' : 'Articles'}
                        </a>
                        <a href={isArabic ? '/ar/contact' : '/en/contact'} class="gold-bg text-black px-8 py-3 rounded-full hover-gold font-bold">
                            {isArabic ? 'تواصل معنا' : 'Contact Us'}
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button id="mobile-menu-button" class="md:hidden text-gold">
                        <i class="fas fa-bars text-2xl"></i>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div id="mobile-menu" class="hidden md:hidden pb-4">
                    <div class="flex flex-col gap-4">
                        <a href={isArabic ? '/' : '/en'} class="font-medium text-white hover:text-gold">
                            {isArabic ? 'الرئيسية' : 'Home'}
                        </a>
                        <a href={isArabic ? '/ar/about' : '/en/about'} class="font-medium text-white hover:text-gold">
                            {isArabic ? 'من نحن' : 'About Us'}
                        </a>
                        <a href={isArabic ? '/ar/services' : '/en/services'} class="font-medium text-white hover:text-gold">
                            {isArabic ? 'خدماتنا' : 'Our Services'}
                        </a>
                        <a href={isArabic ? '/ar/practice-areas' : '/en/practice-areas'} class="font-medium text-white hover:text-gold">
                            {isArabic ? 'مجالات الممارسة' : 'Practice Areas'}
                        </a>
                        <a href={isArabic ? '/ar/articles' : '/en/articles'} class="font-medium text-white hover:text-gold">
                            {isArabic ? 'المقالات' : 'Articles'}
                        </a>
                        <a href={isArabic ? '/ar/contact' : '/en/contact'} class="gold-bg text-black px-6 py-2 rounded-full text-center font-bold">
                            {isArabic ? 'تواصل معنا' : 'Contact Us'}
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        {/* Main Content */}
        <main>
            {children}
        </main>

        {/* Footer */}
        <footer class="bg-black text-white py-12 border-t border-gold border-opacity-20">
            <div class="container mx-auto px-4">
                <div class="grid md:grid-cols-4 gap-8">
                    {/* About Column */}
                    <div>
                        <img src="/static/logo.png" alt="Logo" class="h-16 mb-4 brightness-0 invert"/>
                        <h3 class="text-xl font-bold mb-3 gold-text">
                            {isArabic ? 'ناصر شايع الهاجري' : 'Nasser Shayea Al Hajeri'}
                        </h3>
                        <p class="text-gray-300 text-sm">
                            {isArabic 
                              ? 'محامي واستشاري قانوني في مدينة العين، نقدم خدمات قانونية شاملة ومتميزة.'
                              : 'Lawyer and Legal Consultant in Al Ain City, providing comprehensive legal services.'
                            }
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 class="text-lg font-bold mb-4 gold-text">
                            {isArabic ? 'روابط سريعة' : 'Quick Links'}
                        </h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href={isArabic ? '/' : '/en'} class="hover:text-gold transition">{isArabic ? 'الرئيسية' : 'Home'}</a></li>
                            <li><a href={isArabic ? '/ar/about' : '/en/about'} class="hover:text-gold transition">{isArabic ? 'من نحن' : 'About Us'}</a></li>
                            <li><a href={isArabic ? '/ar/services' : '/en/services'} class="hover:text-gold transition">{isArabic ? 'خدماتنا' : 'Our Services'}</a></li>
                            <li><a href={isArabic ? '/ar/contact' : '/en/contact'} class="hover:text-gold transition">{isArabic ? 'تواصل معنا' : 'Contact'}</a></li>
                        </ul>
                    </div>

                    {/* Practice Areas */}
                    <div>
                        <h4 class="text-lg font-bold mb-4 gold-text">
                            {isArabic ? 'مجالات الممارسة' : 'Practice Areas'}
                        </h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href={`${isArabic ? '/ar' : '/en'}/practice-areas/commercial`} class="hover:text-gold transition">{isArabic ? 'القضايا التجارية' : 'Commercial Cases'}</a></li>
                            <li><a href={`${isArabic ? '/ar' : '/en'}/practice-areas/civil`} class="hover:text-gold transition">{isArabic ? 'القضايا المدنية' : 'Civil Cases'}</a></li>
                            <li><a href={`${isArabic ? '/ar' : '/en'}/practice-areas/labor`} class="hover:text-gold transition">{isArabic ? 'القضايا العمالية' : 'Labor Cases'}</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 class="text-lg font-bold mb-4 gold-text">
                            {isArabic ? 'معلومات التواصل' : 'Contact Information'}
                        </h4>
                        <ul class="space-y-3 text-sm">
                            <li class="flex items-center gap-2">
                                <i class="fas fa-map-marker-alt gold-text"></i>
                                <span>{isArabic ? 'مدينة العين، الإمارات' : 'Al Ain City, UAE'}</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fas fa-phone gold-text"></i>
                                <a href="tel:+971501234567" class="hover:text-gold transition">+971 50 123 4567</a>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fas fa-envelope gold-text"></i>
                                <a href="mailto:info@alhajeri-law.ae" class="hover:text-gold transition">info@alhajeri-law.ae</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div class="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} {isArabic ? 'ناصر شايع الهاجري - جميع الحقوق محفوظة.' : 'Nasser Shayea Al Hajeri - All rights reserved.'}</p>
                </div>
            </div>
        </footer>

        {/* WhatsApp Float Button */}
        <a href="https://wa.me/971501234567" target="_blank" class="whatsapp-float" aria-label="WhatsApp">
            <i class="fab fa-whatsapp"></i>
        </a>

        {/* Mobile Menu Script */}
        <script dangerouslySetInnerHTML={{__html: `
            const menuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            
            menuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        `}}></script>
    </body>
    </html>
  )
}
