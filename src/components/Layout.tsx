import { html } from 'hono/html'

interface LayoutProps {
  title: string
  lang: 'ar' | 'en'
  children: any
}

export const Layout = ({ title, lang, children }: LayoutProps) => {
  const dir = lang === 'ar' ? 'rtl' : 'ltr'
  const isArabic = lang === 'ar'
  
  return html`<!DOCTYPE html>
<html lang="${lang}" dir="${dir}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;900&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: ${isArabic ? "'Tajawal', sans-serif" : "'Poppins', sans-serif"};
        }
        .hero-gradient {
            background: linear-gradient(135deg, #0B3B2E 0%, #1a5f4a 100%);
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
        }
        .service-card {
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }
        .service-card:hover {
            border-color: #C9A44F;
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(201, 164, 79, 0.2);
        }
        .whatsapp-float {
            position: fixed;
            width: 60px;
            height: 60px;
            bottom: 40px;
            ${isArabic ? 'left: 40px;' : 'right: 40px;'}
            background-color: #25d366;
            color: #FFF;
            border-radius: 50px;
            text-align: center;
            font-size: 30px;
            box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
            z-index: 100;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
        }
        .whatsapp-float:hover {
            background-color: #20ba5a;
            transform: scale(1.1);
        }
        .top-bar {
            background-color: #0B3B2E;
            color: white;
        }
        .nav-link {
            position: relative;
            transition: color 0.3s;
        }
        .nav-link:hover {
            color: #C9A44F;
        }
        .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -5px;
            ${isArabic ? 'right: 0;' : 'left: 0;'}
            background-color: #C9A44F;
            transition: width 0.3s;
        }
        .nav-link:hover::after {
            width: 100%;
        }
        @media (max-width: 768px) {
            .whatsapp-float {
                width: 50px;
                height: 50px;
                font-size: 24px;
                bottom: 20px;
                ${isArabic ? 'left: 20px;' : 'right: 20px;'}
            }
        }
    </style>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'dark-green': '#0B3B2E',
                        'gold': '#C9A44F',
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-gray-50">
    <!-- Top Bar -->
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
                        <span>${isArabic ? 'واتساب' : 'WhatsApp'}</span>
                    </a>
                </div>
                <div class="flex gap-4">
                    <a href="${isArabic ? '/en' : '/ar'}" class="hover:text-gold transition">
                        ${isArabic ? 'English' : 'عربي'}
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Main Navigation -->
    <nav class="bg-white shadow-md sticky top-0 z-50">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center py-4">
                <!-- Logo -->
                <div class="flex items-center">
                    <a href="${isArabic ? '/' : '/en'}">
                        <img src="/static/logo.png" alt="Logo" class="h-16 md:h-20">
                    </a>
                </div>

                <!-- Desktop Menu -->
                <div class="hidden md:flex gap-8 items-center">
                    <a href="${isArabic ? '/' : '/en'}" class="nav-link font-medium">
                        ${isArabic ? 'الرئيسية' : 'Home'}
                    </a>
                    <a href="${isArabic ? '/ar/about' : '/en/about'}" class="nav-link font-medium">
                        ${isArabic ? 'من نحن' : 'About Us'}
                    </a>
                    <a href="${isArabic ? '/ar/services' : '/en/services'}" class="nav-link font-medium">
                        ${isArabic ? 'خدماتنا' : 'Our Services'}
                    </a>
                    <a href="${isArabic ? '/ar/practice-areas' : '/en/practice-areas'}" class="nav-link font-medium">
                        ${isArabic ? 'مجالات الممارسة' : 'Practice Areas'}
                    </a>
                    <a href="${isArabic ? '/ar/articles' : '/en/articles'}" class="nav-link font-medium">
                        ${isArabic ? 'المقالات' : 'Articles'}
                    </a>
                    <a href="${isArabic ? '/ar/contact' : '/en/contact'}" class="gold-bg text-white px-6 py-2 rounded-full hover-gold font-medium">
                        ${isArabic ? 'تواصل معنا' : 'Contact Us'}
                    </a>
                </div>

                <!-- Mobile Menu Button -->
                <button id="mobile-menu-button" class="md:hidden text-gray-700">
                    <i class="fas fa-bars text-2xl"></i>
                </button>
            </div>

            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden md:hidden pb-4">
                <div class="flex flex-col gap-4">
                    <a href="${isArabic ? '/' : '/en'}" class="font-medium hover:text-gold">
                        ${isArabic ? 'الرئيسية' : 'Home'}
                    </a>
                    <a href="${isArabic ? '/ar/about' : '/en/about'}" class="font-medium hover:text-gold">
                        ${isArabic ? 'من نحن' : 'About Us'}
                    </a>
                    <a href="${isArabic ? '/ar/services' : '/en/services'}" class="font-medium hover:text-gold">
                        ${isArabic ? 'خدماتنا' : 'Our Services'}
                    </a>
                    <a href="${isArabic ? '/ar/practice-areas' : '/en/practice-areas'}" class="font-medium hover:text-gold">
                        ${isArabic ? 'مجالات الممارسة' : 'Practice Areas'}
                    </a>
                    <a href="${isArabic ? '/ar/articles' : '/en/articles'}" class="font-medium hover:text-gold">
                        ${isArabic ? 'المقالات' : 'Articles'}
                    </a>
                    <a href="${isArabic ? '/ar/contact' : '/en/contact'}" class="gold-bg text-white px-6 py-2 rounded-full text-center">
                        ${isArabic ? 'تواصل معنا' : 'Contact Us'}
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main>
        ${children}
    </main>

    <!-- Footer -->
    <footer class="dark-green-bg text-white py-12">
        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-4 gap-8">
                <!-- About Column -->
                <div>
                    <img src="/static/logo.png" alt="Logo" class="h-16 mb-4 brightness-0 invert">
                    <h3 class="text-xl font-bold mb-3 gold-text">
                        ${isArabic ? 'ناصر شايع الهاجري' : 'Nasser Shayea Al Hajeri'}
                    </h3>
                    <p class="text-gray-300 text-sm">
                        ${isArabic 
                          ? 'محامي واستشاري قانوني في مدينة العين، نقدم خدمات قانونية شاملة ومتميزة لعملائنا في جميع أنحاء الإمارات العربية المتحدة.'
                          : 'Lawyer and Legal Consultant in Al Ain City, providing comprehensive and distinguished legal services to our clients throughout the United Arab Emirates.'
                        }
                    </p>
                </div>

                <!-- Quick Links -->
                <div>
                    <h4 class="text-lg font-bold mb-4 gold-text">
                        ${isArabic ? 'روابط سريعة' : 'Quick Links'}
                    </h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="${isArabic ? '/' : '/en'}" class="hover:text-gold transition">${isArabic ? 'الرئيسية' : 'Home'}</a></li>
                        <li><a href="${isArabic ? '/ar/about' : '/en/about'}" class="hover:text-gold transition">${isArabic ? 'من نحن' : 'About Us'}</a></li>
                        <li><a href="${isArabic ? '/ar/services' : '/en/services'}" class="hover:text-gold transition">${isArabic ? 'خدماتنا' : 'Our Services'}</a></li>
                        <li><a href="${isArabic ? '/ar/practice-areas' : '/en/practice-areas'}" class="hover:text-gold transition">${isArabic ? 'مجالات الممارسة' : 'Practice Areas'}</a></li>
                        <li><a href="${isArabic ? '/ar/articles' : '/en/articles'}" class="hover:text-gold transition">${isArabic ? 'المقالات' : 'Articles'}</a></li>
                    </ul>
                </div>

                <!-- Practice Areas -->
                <div>
                    <h4 class="text-lg font-bold mb-4 gold-text">
                        ${isArabic ? 'مجالات الممارسة' : 'Practice Areas'}
                    </h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="${isArabic ? '/ar/practice-areas/commercial' : '/en/practice-areas/commercial'}" class="hover:text-gold transition">${isArabic ? 'القضايا التجارية' : 'Commercial Cases'}</a></li>
                        <li><a href="${isArabic ? '/ar/practice-areas/civil' : '/en/practice-areas/civil'}" class="hover:text-gold transition">${isArabic ? 'القضايا المدنية' : 'Civil Cases'}</a></li>
                        <li><a href="${isArabic ? '/ar/practice-areas/labor' : '/en/practice-areas/labor'}" class="hover:text-gold transition">${isArabic ? 'القضايا العمالية' : 'Labor Cases'}</a></li>
                        <li><a href="${isArabic ? '/ar/practice-areas/family' : '/en/practice-areas/family'}" class="hover:text-gold transition">${isArabic ? 'قضايا الأحوال الشخصية' : 'Family Law'}</a></li>
                        <li><a href="${isArabic ? '/ar/practice-areas/corporate' : '/en/practice-areas/corporate'}" class="hover:text-gold transition">${isArabic ? 'قضايا الشركات' : 'Corporate Law'}</a></li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div>
                    <h4 class="text-lg font-bold mb-4 gold-text">
                        ${isArabic ? 'معلومات التواصل' : 'Contact Information'}
                    </h4>
                    <ul class="space-y-3 text-sm">
                        <li class="flex items-center gap-2">
                            <i class="fas fa-map-marker-alt gold-text"></i>
                            <span>${isArabic ? 'مدينة العين، الإمارات العربية المتحدة' : 'Al Ain City, United Arab Emirates'}</span>
                        </li>
                        <li class="flex items-center gap-2">
                            <i class="fas fa-phone gold-text"></i>
                            <a href="tel:+971501234567" class="hover:text-gold transition">+971 50 123 4567</a>
                        </li>
                        <li class="flex items-center gap-2">
                            <i class="fas fa-envelope gold-text"></i>
                            <a href="mailto:info@alhajeri-law.ae" class="hover:text-gold transition">info@alhajeri-law.ae</a>
                        </li>
                        <li class="flex items-center gap-2">
                            <i class="fas fa-clock gold-text"></i>
                            <span>${isArabic ? 'الأحد - الخميس: 9:00 - 18:00' : 'Sun - Thu: 9:00 AM - 6:00 PM'}</span>
                        </li>
                    </ul>
                    
                    <!-- Social Media -->
                    <div class="flex gap-3 mt-4">
                        <a href="#" class="w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:bg-opacity-80 transition">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:bg-opacity-80 transition">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:bg-opacity-80 transition">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:bg-opacity-80 transition">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Copyright -->
            <div class="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
                <p>© ${new Date().getFullYear()} ${isArabic ? 'ناصر شايع الهاجري - محامي واستشاري قانوني. جميع الحقوق محفوظة.' : 'Nasser Shayea Al Hajeri - Lawyer and Legal Consultant. All rights reserved.'}</p>
            </div>
        </div>
    </footer>

    <!-- WhatsApp Float Button -->
    <a href="https://wa.me/971501234567" target="_blank" class="whatsapp-float" aria-label="WhatsApp">
        <i class="fab fa-whatsapp"></i>
    </a>

    <!-- Mobile Menu Script -->
    <script>
        const menuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    </script>
</body>
</html>`
}
