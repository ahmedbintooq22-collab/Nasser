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
            line-height: 1.7;
            color: #2d3748;
            overflow-x: hidden;
        }
        .hero-gradient {
            background: linear-gradient(135deg, #0B3B2E 0%, #1a5f4a 100%);
            position: relative;
        }
        .hero-gradient::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="none"/><path d="M0 0L50 50L0 100" stroke="rgba(255,255,255,0.03)" stroke-width="1"/><path d="M50 0L100 50L50 100" stroke="rgba(255,255,255,0.03)" stroke-width="1"/></svg>');
            opacity: 0.5;
        }
        .gold-text {
            color: #C9A44F;
        }
        .gold-bg {
            background-color: #C9A44F;
        }
        .dark-green-bg {
            background-color: #0B3B2E;
        }
        .hover-gold:hover {
            background-color: #B89440;
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(184, 148, 64, 0.3);
        }
        .service-card {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid #e2e8f0;
            background: white;
        }
        .service-card:hover {
            border-color: #C9A44F;
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(201, 164, 79, 0.15);
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
            background-color: #0B3B2E;
            color: white;
            border-bottom: 2px solid #C9A44F;
        }
        .nav-link {
            position: relative;
            transition: all 0.3s ease;
            padding: 8px 0;
            font-weight: 500;
        }
        .nav-link:hover {
            color: #C9A44F;
        }
        .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 3px;
            bottom: 0;
            ${isArabic ? 'right: 0;' : 'left: 0;'}
            background: linear-gradient(90deg, #C9A44F 0%, #B89440 100%);
            transition: width 0.3s ease;
            border-radius: 2px;
        }
        .nav-link:hover::after {
            width: 100%;
        }
        .section-divider {
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, #C9A44F 0%, #B89440 100%);
            margin: 0 auto 2rem;
            border-radius: 2px;
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
    <body class="bg-gray-50">
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
        <nav class="bg-white shadow-md sticky top-0 z-50">
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
                        <a href={isArabic ? '/' : '/en'} class="nav-link font-medium">
                            {isArabic ? 'الرئيسية' : 'Home'}
                        </a>
                        <a href={isArabic ? '/ar/about' : '/en/about'} class="nav-link font-medium">
                            {isArabic ? 'من نحن' : 'About Us'}
                        </a>
                        <a href={isArabic ? '/ar/services' : '/en/services'} class="nav-link font-medium">
                            {isArabic ? 'خدماتنا' : 'Our Services'}
                        </a>
                        <a href={isArabic ? '/ar/practice-areas' : '/en/practice-areas'} class="nav-link font-medium">
                            {isArabic ? 'مجالات الممارسة' : 'Practice Areas'}
                        </a>
                        <a href={isArabic ? '/ar/articles' : '/en/articles'} class="nav-link font-medium">
                            {isArabic ? 'المقالات' : 'Articles'}
                        </a>
                        <a href={isArabic ? '/ar/contact' : '/en/contact'} class="gold-bg text-white px-6 py-2 rounded-full hover-gold font-medium">
                            {isArabic ? 'تواصل معنا' : 'Contact Us'}
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button id="mobile-menu-button" class="md:hidden text-gray-700">
                        <i class="fas fa-bars text-2xl"></i>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div id="mobile-menu" class="hidden md:hidden pb-4">
                    <div class="flex flex-col gap-4">
                        <a href={isArabic ? '/' : '/en'} class="font-medium hover:text-gold">
                            {isArabic ? 'الرئيسية' : 'Home'}
                        </a>
                        <a href={isArabic ? '/ar/about' : '/en/about'} class="font-medium hover:text-gold">
                            {isArabic ? 'من نحن' : 'About Us'}
                        </a>
                        <a href={isArabic ? '/ar/services' : '/en/services'} class="font-medium hover:text-gold">
                            {isArabic ? 'خدماتنا' : 'Our Services'}
                        </a>
                        <a href={isArabic ? '/ar/practice-areas' : '/en/practice-areas'} class="font-medium hover:text-gold">
                            {isArabic ? 'مجالات الممارسة' : 'Practice Areas'}
                        </a>
                        <a href={isArabic ? '/ar/articles' : '/en/articles'} class="font-medium hover:text-gold">
                            {isArabic ? 'المقالات' : 'Articles'}
                        </a>
                        <a href={isArabic ? '/ar/contact' : '/en/contact'} class="gold-bg text-white px-6 py-2 rounded-full text-center">
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
        <footer class="dark-green-bg text-white py-12">
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
