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
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;900&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
        <style dangerouslySetInnerHTML={{__html: `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: ${isArabic ? "'Tajawal', sans-serif" : "'Inter', sans-serif"};
            line-height: 1.6;
            color: #1a1a1a;
            overflow-x: hidden;
            background: #fafafa;
        }
        .hero-section {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            position: relative;
            overflow: hidden;
        }
        .hero-section::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
        }
        .elegant-card {
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid rgba(0, 0, 0, 0.04);
        }
        .elegant-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
            border-color: rgba(139, 92, 246, 0.2);
        }
        .gradient-border {
            position: relative;
            background: white;
            border-radius: 16px;
            padding: 2px;
            background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
        }
        .gradient-border-inner {
            background: white;
            border-radius: 14px;
            padding: 2rem;
        }
        .text-gradient {
            background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .btn-primary {
            background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
            color: white;
            padding: 14px 32px;
            border-radius: 50px;
            font-weight: 600;
            transition: all 0.3s ease;
            border: none;
            box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
        }
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
            background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
        }
        .btn-secondary {
            background: white;
            color: #1a1a1a;
            padding: 14px 32px;
            border-radius: 50px;
            font-weight: 600;
            transition: all 0.3s ease;
            border: 2px solid rgba(0, 0, 0, 0.1);
        }
        .btn-secondary:hover {
            border-color: #8b5cf6;
            color: #8b5cf6;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
        }
        .whatsapp-float {
            position: fixed;
            width: 60px;
            height: 60px;
            bottom: 30px;
            ${isArabic ? 'left: 30px;' : 'right: 30px;'}
            background: linear-gradient(135deg, #25d366 0%, #20ba5a 100%);
            color: #FFF;
            border-radius: 50%;
            text-align: center;
            font-size: 28px;
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }
        .whatsapp-float:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 30px rgba(37, 211, 102, 0.5);
        }
        .top-bar {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }
        .nav-main {
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        .nav-link {
            position: relative;
            transition: all 0.3s ease;
            padding: 8px 0;
            font-weight: 500;
            color: #4a5568;
            font-size: 15px;
        }
        .nav-link:hover {
            color: #8b5cf6;
        }
        .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -4px;
            ${isArabic ? 'right: 0;' : 'left: 0;'}
            background: linear-gradient(90deg, #8b5cf6 0%, #3b82f6 100%);
            transition: width 0.3s ease;
            border-radius: 2px;
        }
        .nav-link:hover::after {
            width: 100%;
        }
        .section-badge {
            display: inline-block;
            padding: 8px 20px;
            background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%);
            border-radius: 50px;
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #8b5cf6;
            border: 1px solid rgba(139, 92, 246, 0.2);
        }
        .review-card {
            background: white;
            border-radius: 16px;
            padding: 28px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
            border: 1px solid rgba(0, 0, 0, 0.04);
            transition: all 0.3s ease;
        }
        .review-card:hover {
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
            transform: translateY(-4px);
        }
        .stat-number {
            font-size: 3.5rem;
            font-weight: 800;
            background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1;
        }
        .divider {
            width: 60px;
            height: 3px;
            background: linear-gradient(90deg, #8b5cf6 0%, #3b82f6 100%);
            border-radius: 2px;
            margin: 0 auto;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.5rem;
        }
        .service-icon {
            width: 64px;
            height: 64px;
            background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }
        .elegant-card:hover .service-icon {
            transform: scale(1.1) rotate(5deg);
        }
        footer {
            background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
            color: #cbd5e1;
        }
        @media (max-width: 768px) {
            .whatsapp-float {
                width: 52px;
                height: 52px;
                font-size: 24px;
                bottom: 20px;
                ${isArabic ? 'left: 20px;' : 'right: 20px;'}
            }
            .stat-number {
                font-size: 2.5rem;
            }
        }
    `}}></style>
    </head>
    <body>
        {/* Top Bar */}
        <div class="top-bar py-2">
            <div class="container mx-auto px-4">
                <div class="flex justify-between items-center text-sm text-gray-600">
                    <div class="flex gap-6">
                        <a href="tel:+971501234567" class="hover:text-purple-600 transition flex items-center gap-2">
                            <i class="fas fa-phone"></i>
                            <span class="hidden sm:inline">+971 50 123 4567</span>
                        </a>
                        <a href="https://wa.me/971501234567" target="_blank" class="hover:text-purple-600 transition flex items-center gap-2">
                            <i class="fab fa-whatsapp"></i>
                            <span class="hidden sm:inline">{isArabic ? 'واتساب' : 'WhatsApp'}</span>
                        </a>
                    </div>
                    <div class="flex gap-4">
                        <a href={isArabic ? '/en' : '/ar'} class="hover:text-purple-600 transition font-medium">
                            {isArabic ? 'English' : 'عربي'}
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* Main Navigation */}
        <nav class="nav-main sticky top-0 z-50">
            <div class="container mx-auto px-4">
                <div class={`flex justify-between items-center py-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
                    {/* Logo */}
                    <div class="flex items-center">
                        <a href={isArabic ? '/' : '/en'}>
                            <img src="/static/logo.png" alt="Logo" class="h-14 md:h-16"/>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div class={`hidden lg:flex gap-10 items-center ${isArabic ? 'flex-row-reverse' : ''}`}>
                        <a href={isArabic ? '/' : '/en'} class="nav-link">
                            {isArabic ? 'الرئيسية' : 'Home'}
                        </a>
                        <a href={isArabic ? '/ar/about' : '/en/about'} class="nav-link">
                            {isArabic ? 'من نحن' : 'About'}
                        </a>
                        <a href={isArabic ? '/ar/services' : '/en/services'} class="nav-link">
                            {isArabic ? 'خدماتنا' : 'Services'}
                        </a>
                        <a href={isArabic ? '/ar/practice-areas' : '/en/practice-areas'} class="nav-link">
                            {isArabic ? 'مجالات الممارسة' : 'Practice Areas'}
                        </a>
                        <a href={isArabic ? '/ar/articles' : '/en/articles'} class="nav-link">
                            {isArabic ? 'المقالات' : 'Articles'}
                        </a>
                        <a href={isArabic ? '/ar/contact' : '/en/contact'} class="btn-primary inline-block">
                            {isArabic ? 'تواصل معنا' : 'Contact'}
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button id="mobile-menu-button" class="lg:hidden text-gray-700">
                        <i class="fas fa-bars text-xl"></i>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div id="mobile-menu" class="hidden lg:hidden pb-4 border-t border-gray-100 pt-4">
                    <div class="flex flex-col gap-4">
                        <a href={isArabic ? '/' : '/en'} class="font-medium text-gray-700 hover:text-purple-600">
                            {isArabic ? 'الرئيسية' : 'Home'}
                        </a>
                        <a href={isArabic ? '/ar/about' : '/en/about'} class="font-medium text-gray-700 hover:text-purple-600">
                            {isArabic ? 'من نحن' : 'About'}
                        </a>
                        <a href={isArabic ? '/ar/services' : '/en/services'} class="font-medium text-gray-700 hover:text-purple-600">
                            {isArabic ? 'خدماتنا' : 'Services'}
                        </a>
                        <a href={isArabic ? '/ar/practice-areas' : '/en/practice-areas'} class="font-medium text-gray-700 hover:text-purple-600">
                            {isArabic ? 'مجالات الممارسة' : 'Practice Areas'}
                        </a>
                        <a href={isArabic ? '/ar/articles' : '/en/articles'} class="font-medium text-gray-700 hover:text-purple-600">
                            {isArabic ? 'المقالات' : 'Articles'}
                        </a>
                        <a href={isArabic ? '/ar/contact' : '/en/contact'} class="btn-primary text-center inline-block">
                            {isArabic ? 'تواصل معنا' : 'Contact'}
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
        <footer class="py-16">
            <div class="container mx-auto px-4">
                <div class="grid md:grid-cols-4 gap-10 mb-12">
                    {/* About Column */}
                    <div>
                        <img src="/static/logo.png" alt="Logo" class="h-14 mb-4 brightness-0 invert"/>
                        <h3 class="text-lg font-bold mb-3 text-white">
                            {isArabic ? 'ناصر شايع الهاجري' : 'Nasser Shayea Al Hajeri'}
                        </h3>
                        <p class="text-sm leading-relaxed">
                            {isArabic 
                              ? 'محامي واستشاري قانوني متميز في مدينة العين'
                              : 'Distinguished Lawyer and Legal Consultant in Al Ain'
                            }
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 class="text-base font-bold mb-4 text-white">
                            {isArabic ? 'روابط سريعة' : 'Quick Links'}
                        </h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href={isArabic ? '/' : '/en'} class="hover:text-purple-400 transition">{isArabic ? 'الرئيسية' : 'Home'}</a></li>
                            <li><a href={isArabic ? '/ar/about' : '/en/about'} class="hover:text-purple-400 transition">{isArabic ? 'من نحن' : 'About'}</a></li>
                            <li><a href={isArabic ? '/ar/services' : '/en/services'} class="hover:text-purple-400 transition">{isArabic ? 'خدماتنا' : 'Services'}</a></li>
                            <li><a href={isArabic ? '/ar/contact' : '/en/contact'} class="hover:text-purple-400 transition">{isArabic ? 'اتصل بنا' : 'Contact'}</a></li>
                        </ul>
                    </div>

                    {/* Practice Areas */}
                    <div>
                        <h4 class="text-base font-bold mb-4 text-white">
                            {isArabic ? 'المجالات' : 'Practice Areas'}
                        </h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href={`${isArabic ? '/ar' : '/en'}/practice-areas`} class="hover:text-purple-400 transition">{isArabic ? 'التجاري' : 'Commercial'}</a></li>
                            <li><a href={`${isArabic ? '/ar' : '/en'}/practice-areas`} class="hover:text-purple-400 transition">{isArabic ? 'المدني' : 'Civil'}</a></li>
                            <li><a href={`${isArabic ? '/ar' : '/en'}/practice-areas`} class="hover:text-purple-400 transition">{isArabic ? 'العمالي' : 'Labor'}</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 class="text-base font-bold mb-4 text-white">
                            {isArabic ? 'تواصل معنا' : 'Contact Us'}
                        </h4>
                        <ul class="space-y-3 text-sm">
                            <li class="flex items-center gap-2">
                                <i class="fas fa-map-marker-alt text-purple-400"></i>
                                <span>{isArabic ? 'العين، الإمارات' : 'Al Ain, UAE'}</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fas fa-phone text-purple-400"></i>
                                <a href="tel:+971501234567" class="hover:text-purple-400 transition">+971 50 123 4567</a>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fas fa-envelope text-purple-400"></i>
                                <a href="mailto:info@alhajeri-law.ae" class="hover:text-purple-400 transition">info@alhajeri-law.ae</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div class="border-t border-gray-700 pt-8 text-center text-sm">
                    <p>© {new Date().getFullYear()} {isArabic ? 'جميع الحقوق محفوظة' : 'All rights reserved'} • {isArabic ? 'ناصر شايع الهاجري' : 'Nasser Shayea Al Hajeri'}</p>
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
