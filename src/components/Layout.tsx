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
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;900&family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
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
            background: #ffffff;
        }
        .hero-gradient {
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%);
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
            background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="dots" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="2" fill="rgba(59, 130, 246, 0.1)"/></pattern></defs><rect width="100%" height="100%" fill="url(%23dots)"/></svg>');
            opacity: 0.5;
        }
        .primary-text {
            color: #1e40af;
        }
        .secondary-text {
            color: #0284c7;
        }
        .accent-text {
            color: #f59e0b;
        }
        .primary-bg {
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
            box-shadow: 0 4px 20px rgba(59, 130, 246, 0.25);
        }
        .secondary-bg {
            background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
            box-shadow: 0 4px 20px rgba(14, 165, 233, 0.25);
        }
        .accent-bg {
            background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
            box-shadow: 0 4px 20px rgba(251, 191, 36, 0.25);
        }
        .hover-primary:hover {
            background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(37, 99, 235, 0.35);
        }
        .hover-accent:hover {
            background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(245, 158, 11, 0.35);
        }
        .card {
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 1.5rem;
            transition: all 0.4s ease;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }
        .card:hover {
            border-color: #3b82f6;
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(59, 130, 246, 0.12);
        }
        .service-card {
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 1.5rem;
            transition: all 0.4s ease;
            overflow: hidden;
        }
        .service-card:hover {
            border-color: #0ea5e9;
            transform: translateY(-8px);
            box-shadow: 0 25px 50px rgba(14, 165, 233, 0.15);
        }
        .review-card {
            background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
            border: 1px solid #e2e8f0;
            border-radius: 1.25rem;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }
        .review-card:hover {
            border-color: #fbbf24;
            box-shadow: 0 10px 30px rgba(251, 191, 36, 0.15);
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
            background: linear-gradient(90deg, #1e40af 0%, #3b82f6 50%, #1e40af 100%);
            color: #ffffff;
            border-bottom: 1px solid rgba(59, 130, 246, 0.2);
            backdrop-filter: blur(10px);
        }
        .nav-link {
            position: relative;
            transition: all 0.3s ease;
            padding: 8px 0;
            font-weight: 600;
            letter-spacing: 0.3px;
        }
        .nav-link:hover {
            color: #3b82f6;
        }
        .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 3px;
            bottom: 0;
            ${isArabic ? 'right: 0;' : 'left: 0;'}
            background: linear-gradient(90deg, #3b82f6 0%, #0ea5e9 50%, #3b82f6 100%);
            transition: width 0.4s ease;
            border-radius: 2px;
            box-shadow: 0 0 8px rgba(59, 130, 246, 0.4);
        }
        .nav-link:hover::after {
            width: 100%;
        }
        .section-divider {
            width: 100px;
            height: 3px;
            background: linear-gradient(90deg, transparent 0%, #3b82f6 20%, #0ea5e9 50%, #3b82f6 80%, transparent 100%);
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
    <body class="bg-white">
        {/* Top Bar */}
        <div class="top-bar py-2">
            <div class="container mx-auto px-4">
                <div class="flex justify-between items-center text-sm">
                    <div class="flex gap-6">
                        <a href="tel:+971501234567" class="hover:text-blue-200 transition flex items-center gap-2">
                            <i class="fas fa-phone"></i>
                            <span>+971 50 123 4567</span>
                        </a>
                        <a href="https://wa.me/971501234567" target="_blank" class="hover:text-blue-200 transition flex items-center gap-2">
                            <i class="fab fa-whatsapp"></i>
                            <span>{isArabic ? 'واتساب' : 'WhatsApp'}</span>
                        </a>
                    </div>
                    <div class="flex gap-4">
                        <a href={isArabic ? '/en' : '/ar'} class="hover:text-blue-200 transition font-semibold">
                            {isArabic ? 'English' : 'عربي'}
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* Main Navigation */}
        <nav class="bg-white bg-opacity-95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200">
            <div class="container mx-auto px-4">
                <div class={`flex justify-between items-center py-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
                    {/* Logo */}
                    <div class="flex items-center">
                        <a href={isArabic ? '/' : '/en'}>
                            <img src="/static/logo.png" alt="Logo" class="h-16 md:h-20"/>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div class={`hidden md:flex gap-8 items-center ${isArabic ? 'flex-row-reverse' : ''}`}>
                        <a href={isArabic ? '/' : '/en'} class="nav-link font-medium text-gray-700">
                            {isArabic ? 'الرئيسية' : 'Home'}
                        </a>
                        <a href={isArabic ? '/ar/about' : '/en/about'} class="nav-link font-medium text-gray-700">
                            {isArabic ? 'من نحن' : 'About Us'}
                        </a>
                        <a href={isArabic ? '/ar/services' : '/en/services'} class="nav-link font-medium text-gray-700">
                            {isArabic ? 'خدماتنا' : 'Our Services'}
                        </a>
                        <a href={isArabic ? '/ar/practice-areas' : '/en/practice-areas'} class="nav-link font-medium text-gray-700">
                            {isArabic ? 'مجالات الممارسة' : 'Practice Areas'}
                        </a>
                        <a href={isArabic ? '/ar/articles' : '/en/articles'} class="nav-link font-medium text-gray-700">
                            {isArabic ? 'المقالات' : 'Articles'}
                        </a>
                        <a href={isArabic ? '/ar/contact' : '/en/contact'} class="primary-bg text-white px-8 py-3 rounded-full hover-primary font-bold">
                            {isArabic ? 'تواصل معنا' : 'Contact Us'}
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button id="mobile-menu-button" class="md:hidden text-blue-600">
                        <i class="fas fa-bars text-2xl"></i>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div id="mobile-menu" class="hidden md:hidden pb-4">
                    <div class="flex flex-col gap-4">
                        <a href={isArabic ? '/' : '/en'} class="font-medium text-gray-700 hover:text-blue-600">
                            {isArabic ? 'الرئيسية' : 'Home'}
                        </a>
                        <a href={isArabic ? '/ar/about' : '/en/about'} class="font-medium text-gray-700 hover:text-blue-600">
                            {isArabic ? 'من نحن' : 'About Us'}
                        </a>
                        <a href={isArabic ? '/ar/services' : '/en/services'} class="font-medium text-gray-700 hover:text-blue-600">
                            {isArabic ? 'خدماتنا' : 'Our Services'}
                        </a>
                        <a href={isArabic ? '/ar/practice-areas' : '/en/practice-areas'} class="font-medium text-gray-700 hover:text-blue-600">
                            {isArabic ? 'مجالات الممارسة' : 'Practice Areas'}
                        </a>
                        <a href={isArabic ? '/ar/articles' : '/en/articles'} class="font-medium text-gray-700 hover:text-blue-600">
                            {isArabic ? 'المقالات' : 'Articles'}
                        </a>
                        <a href={isArabic ? '/ar/contact' : '/en/contact'} class="primary-bg text-white px-6 py-2 rounded-full text-center font-bold">
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
        <footer class="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-700 py-12 border-t border-gray-200">
            <div class="container mx-auto px-4">
                <div class="grid md:grid-cols-4 gap-8">
                    {/* About Column */}
                    <div>
                        <img src="/static/logo.png" alt="Logo" class="h-16 mb-4"/>
                        <h3 class="text-xl font-bold mb-3 primary-text">
                            {isArabic ? 'ناصر شايع الهاجري' : 'Nasser Shayea Al Hajeri'}
                        </h3>
                        <p class="text-gray-600 text-sm">
                            {isArabic 
                              ? 'محامي واستشاري قانوني في مدينة العين، نقدم خدمات قانونية شاملة ومتميزة.'
                              : 'Lawyer and Legal Consultant in Al Ain City, providing comprehensive legal services.'
                            }
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 class="text-lg font-bold mb-4 primary-text">
                            {isArabic ? 'روابط سريعة' : 'Quick Links'}
                        </h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href={isArabic ? '/' : '/en'} class="hover:text-blue-600 transition">{isArabic ? 'الرئيسية' : 'Home'}</a></li>
                            <li><a href={isArabic ? '/ar/about' : '/en/about'} class="hover:text-blue-600 transition">{isArabic ? 'من نحن' : 'About Us'}</a></li>
                            <li><a href={isArabic ? '/ar/services' : '/en/services'} class="hover:text-blue-600 transition">{isArabic ? 'خدماتنا' : 'Our Services'}</a></li>
                            <li><a href={isArabic ? '/ar/contact' : '/en/contact'} class="hover:text-blue-600 transition">{isArabic ? 'تواصل معنا' : 'Contact'}</a></li>
                        </ul>
                    </div>

                    {/* Practice Areas */}
                    <div>
                        <h4 class="text-lg font-bold mb-4 primary-text">
                            {isArabic ? 'مجالات الممارسة' : 'Practice Areas'}
                        </h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href={`${isArabic ? '/ar' : '/en'}/practice-areas`} class="hover:text-blue-600 transition">{isArabic ? 'القضايا التجارية' : 'Commercial Cases'}</a></li>
                            <li><a href={`${isArabic ? '/ar' : '/en'}/practice-areas`} class="hover:text-blue-600 transition">{isArabic ? 'القضايا المدنية' : 'Civil Cases'}</a></li>
                            <li><a href={`${isArabic ? '/ar' : '/en'}/practice-areas`} class="hover:text-blue-600 transition">{isArabic ? 'القضايا العمالية' : 'Labor Cases'}</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 class="text-lg font-bold mb-4 primary-text">
                            {isArabic ? 'معلومات التواصل' : 'Contact Information'}
                        </h4>
                        <ul class="space-y-3 text-sm">
                            <li class="flex items-center gap-2">
                                <i class="fas fa-map-marker-alt text-blue-600"></i>
                                <span>{isArabic ? 'مدينة العين، الإمارات' : 'Al Ain City, UAE'}</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fas fa-phone text-blue-600"></i>
                                <a href="tel:+971501234567" class="hover:text-blue-600 transition">+971 50 123 4567</a>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fas fa-envelope text-blue-600"></i>
                                <a href="mailto:info@alhajeri-law.ae" class="hover:text-blue-600 transition">info@alhajeri-law.ae</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div class="border-t border-gray-300 mt-8 pt-6 text-center text-sm text-gray-600">
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
