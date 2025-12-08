import { Context } from 'hono'
import { Layout } from '../components/Layout'

export const renderHomePage = (c: Context, lang: 'ar' | 'en') => {
  const isArabic = lang === 'ar'
  
  const title = isArabic 
    ? 'ناصر شايع الهاجري - محامي واستشاري قانوني في مدينة العين'
    : 'Nasser Shayea Al Hajeri - Lawyer and Legal Consultant in Al Ain'

  const content = `
    <!-- Hero Section -->
    <section class="hero-gradient text-white py-20 md:py-32">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl ${isArabic ? 'mr-auto' : 'ml-auto'}">
                <div class="flex items-center gap-3 mb-6">
                    <div class="w-16 h-1 gold-bg"></div>
                    <span class="text-gold font-semibold text-lg">
                        ${isArabic ? 'محامي واستشاري قانوني معتمد' : 'Licensed Lawyer and Legal Consultant'}
                    </span>
                </div>
                
                <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    ${isArabic 
                      ? 'مكتب محاماة واستشارات قانونية<br>في مدينة العين'
                      : 'Law Office and Legal Consultancy<br>in Al Ain City'
                    }
                </h1>
                
                <p class="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                    ${isArabic
                      ? 'نحمي حقوقك القانونية بخبرة واحترافية في جميع أنحاء دولة الإمارات العربية المتحدة'
                      : 'Protecting your legal rights with expertise and professionalism throughout the United Arab Emirates'
                    }
                </p>
                
                <div class="flex flex-wrap gap-4">
                    <a href="${isArabic ? '/ar/contact' : '/en/contact'}" class="gold-bg text-white px-8 py-4 rounded-full font-bold text-lg hover-gold transition inline-flex items-center gap-2">
                        <i class="fas fa-envelope"></i>
                        <span>${isArabic ? 'تواصل معنا' : 'Contact Us'}</span>
                    </a>
                    <a href="https://wa.me/971501234567" target="_blank" class="bg-white text-dark-green px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition inline-flex items-center gap-2">
                        <i class="fab fa-whatsapp"></i>
                        <span>${isArabic ? 'حجز استشارة' : 'Book Consultation'}</span>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- About/Founder Section -->
    <section class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="${isArabic ? 'md:order-2' : 'md:order-1'}">
                    <img src="/static/lawyer-photo.jpg" alt="${isArabic ? 'المحامي ناصر شايع الهاجري' : 'Lawyer Nasser Shayea Al Hajeri'}" class="rounded-lg shadow-2xl w-full">
                </div>
                
                <div class="${isArabic ? 'md:order-1' : 'md:order-2'}">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-12 h-1 gold-bg"></div>
                        <span class="text-gold font-semibold">
                            ${isArabic ? 'المؤسس' : 'The Founder'}
                        </span>
                    </div>
                    
                    <h2 class="text-3xl md:text-4xl font-bold mb-6 text-dark-green">
                        ${isArabic 
                          ? 'ناصر شايع الهاجري'
                          : 'Nasser Shayea Al Hajeri'
                        }
                    </h2>
                    
                    <p class="text-gray-700 text-lg mb-4 leading-relaxed">
                        ${isArabic
                          ? 'محامي ومستشار قانوني معتمد في دولة الإمارات العربية المتحدة، يتمتع بخبرة واسعة في مختلف المجالات القانونية والقضائية.'
                          : 'Licensed Lawyer and Legal Consultant in the United Arab Emirates, with extensive experience in various legal and judicial fields.'
                        }
                    </p>
                    
                    <p class="text-gray-700 text-lg mb-6 leading-relaxed">
                        ${isArabic
                          ? 'نقدم في مكتبنا في مدينة العين خدمات قانونية شاملة تشمل التقاضي، الاستشارات القانونية، صياغة العقود، التحكيم، وحل النزاعات. نلتزم بأعلى معايير الاحترافية والأخلاقيات المهنية في خدمة عملائنا.'
                          : 'At our office in Al Ain City, we provide comprehensive legal services including litigation, legal consultations, contract drafting, arbitration, and dispute resolution. We are committed to the highest standards of professionalism and professional ethics in serving our clients.'
                        }
                    </p>
                    
                    <div class="flex flex-wrap gap-6 mb-8">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 gold-bg rounded-full flex items-center justify-center">
                                <i class="fas fa-balance-scale text-white text-xl"></i>
                            </div>
                            <div>
                                <div class="text-2xl font-bold text-dark-green">15+</div>
                                <div class="text-gray-600 text-sm">${isArabic ? 'سنة خبرة' : 'Years Experience'}</div>
                            </div>
                        </div>
                        
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 gold-bg rounded-full flex items-center justify-center">
                                <i class="fas fa-users text-white text-xl"></i>
                            </div>
                            <div>
                                <div class="text-2xl font-bold text-dark-green">500+</div>
                                <div class="text-gray-600 text-sm">${isArabic ? 'عميل راضٍ' : 'Satisfied Clients'}</div>
                            </div>
                        </div>
                        
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 gold-bg rounded-full flex items-center justify-center">
                                <i class="fas fa-trophy text-white text-xl"></i>
                            </div>
                            <div>
                                <div class="text-2xl font-bold text-dark-green">95%</div>
                                <div class="text-gray-600 text-sm">${isArabic ? 'نسبة النجاح' : 'Success Rate'}</div>
                            </div>
                        </div>
                    </div>
                    
                    <a href="${isArabic ? '/ar/about' : '/en/about'}" class="gold-bg text-white px-6 py-3 rounded-full hover-gold transition inline-flex items-center gap-2 font-semibold">
                        <span>${isArabic ? 'اقرأ المزيد' : 'Read More'}</span>
                        <i class="fas fa-arrow-${isArabic ? 'left' : 'right'}"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="py-16 md:py-24 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <div class="flex items-center justify-center gap-3 mb-4">
                    <div class="w-12 h-1 gold-bg"></div>
                    <span class="text-gold font-semibold">
                        ${isArabic ? 'ما نقدمه' : 'What We Offer'}
                    </span>
                    <div class="w-12 h-1 gold-bg"></div>
                </div>
                
                <h2 class="text-3xl md:text-5xl font-bold text-dark-green mb-4">
                    ${isArabic ? 'خدماتنا القانونية' : 'Our Legal Services'}
                </h2>
                
                <p class="text-gray-600 text-lg max-w-2xl mx-auto">
                    ${isArabic
                      ? 'نقدم مجموعة شاملة من الخدمات القانونية لتلبية جميع احتياجاتكم القانونية'
                      : 'We offer a comprehensive range of legal services to meet all your legal needs'
                    }
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <!-- Service Card 1 -->
                <div class="service-card bg-white rounded-lg p-8 shadow-lg">
                    <div class="w-16 h-16 gold-bg rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-gavel text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4 text-dark-green">
                        ${isArabic ? 'التقاضي والترافع' : 'Litigation & Advocacy'}
                    </h3>
                    <p class="text-gray-600 mb-6">
                        ${isArabic
                          ? 'تمثيل قانوني احترافي أمام جميع المحاكم والهيئات القضائية في دولة الإمارات'
                          : 'Professional legal representation before all courts and judicial bodies in the UAE'
                        }
                    </p>
                    <a href="${isArabic ? '/ar/services' : '/en/services'}" class="text-gold font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                        <span>${isArabic ? 'عرض المزيد' : 'Learn More'}</span>
                        <i class="fas fa-arrow-${isArabic ? 'left' : 'right'}"></i>
                    </a>
                </div>

                <!-- Service Card 2 -->
                <div class="service-card bg-white rounded-lg p-8 shadow-lg">
                    <div class="w-16 h-16 gold-bg rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-handshake text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4 text-dark-green">
                        ${isArabic ? 'الاستشارات القانونية' : 'Legal Consultations'}
                    </h3>
                    <p class="text-gray-600 mb-6">
                        ${isArabic
                          ? 'استشارات قانونية متخصصة لحماية مصالحكم وتوجيهكم نحو القرارات الصحيحة'
                          : 'Specialized legal consultations to protect your interests and guide you towards the right decisions'
                        }
                    </p>
                    <a href="${isArabic ? '/ar/services' : '/en/services'}" class="text-gold font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                        <span>${isArabic ? 'عرض المزيد' : 'Learn More'}</span>
                        <i class="fas fa-arrow-${isArabic ? 'left' : 'right'}"></i>
                    </a>
                </div>

                <!-- Service Card 3 -->
                <div class="service-card bg-white rounded-lg p-8 shadow-lg">
                    <div class="w-16 h-16 gold-bg rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-file-contract text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4 text-dark-green">
                        ${isArabic ? 'صياغة العقود' : 'Contract Drafting'}
                    </h3>
                    <p class="text-gray-600 mb-6">
                        ${isArabic
                          ? 'إعداد وصياغة جميع أنواع العقود والاتفاقيات القانونية بدقة واحترافية'
                          : 'Preparing and drafting all types of contracts and legal agreements with precision and professionalism'
                        }
                    </p>
                    <a href="${isArabic ? '/ar/services' : '/en/services'}" class="text-gold font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                        <span>${isArabic ? 'عرض المزيد' : 'Learn More'}</span>
                        <i class="fas fa-arrow-${isArabic ? 'left' : 'right'}"></i>
                    </a>
                </div>

                <!-- Service Card 4 -->
                <div class="service-card bg-white rounded-lg p-8 shadow-lg">
                    <div class="w-16 h-16 gold-bg rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-users text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4 text-dark-green">
                        ${isArabic ? 'التحكيم وحل النزاعات' : 'Arbitration & Dispute Resolution'}
                    </h3>
                    <p class="text-gray-600 mb-6">
                        ${isArabic
                          ? 'حل النزاعات بطرق ودية وفعالة من خلال التحكيم والوساطة'
                          : 'Resolving disputes through friendly and effective arbitration and mediation methods'
                        }
                    </p>
                    <a href="${isArabic ? '/ar/services' : '/en/services'}" class="text-gold font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                        <span>${isArabic ? 'عرض المزيد' : 'Learn More'}</span>
                        <i class="fas fa-arrow-${isArabic ? 'left' : 'right'}"></i>
                    </a>
                </div>

                <!-- Service Card 5 -->
                <div class="service-card bg-white rounded-lg p-8 shadow-lg">
                    <div class="w-16 h-16 gold-bg rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-money-bill-wave text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4 text-dark-green">
                        ${isArabic ? 'تحصيل الديون' : 'Debt Collection'}
                    </h3>
                    <p class="text-gray-600 mb-6">
                        ${isArabic
                          ? 'استرداد حقوقكم المالية بطرق قانونية فعالة وسريعة'
                          : 'Recovering your financial rights through effective and swift legal methods'
                        }
                    </p>
                    <a href="${isArabic ? '/ar/services' : '/en/services'}" class="text-gold font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                        <span>${isArabic ? 'عرض المزيد' : 'Learn More'}</span>
                        <i class="fas fa-arrow-${isArabic ? 'left' : 'right'}"></i>
                    </a>
                </div>

                <!-- Service Card 6 -->
                <div class="service-card bg-white rounded-lg p-8 shadow-lg">
                    <div class="w-16 h-16 gold-bg rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-briefcase text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4 text-dark-green">
                        ${isArabic ? 'القضايا العمالية' : 'Labor Cases'}
                    </h3>
                    <p class="text-gray-600 mb-6">
                        ${isArabic
                          ? 'حماية حقوق العمال وأصحاب العمل وفقاً لقانون العمل الإماراتي'
                          : 'Protecting the rights of workers and employers according to UAE labor law'
                        }
                    </p>
                    <a href="${isArabic ? '/ar/services' : '/en/services'}" class="text-gold font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                        <span>${isArabic ? 'عرض المزيد' : 'Learn More'}</span>
                        <i class="fas fa-arrow-${isArabic ? 'left' : 'right'}"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Practice Areas Section -->
    <section class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <div class="flex items-center justify-center gap-3 mb-4">
                    <div class="w-12 h-1 gold-bg"></div>
                    <span class="text-gold font-semibold">
                        ${isArabic ? 'تخصصاتنا' : 'Our Expertise'}
                    </span>
                    <div class="w-12 h-1 gold-bg"></div>
                </div>
                
                <h2 class="text-3xl md:text-5xl font-bold text-dark-green mb-4">
                    ${isArabic ? 'مجالات الممارسة' : 'Practice Areas'}
                </h2>
                
                <p class="text-gray-600 text-lg max-w-2xl mx-auto">
                    ${isArabic
                      ? 'نغطي جميع المجالات القانونية لضمان حماية شاملة لحقوقكم'
                      : 'We cover all legal fields to ensure comprehensive protection of your rights'
                    }
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-6">
                <a href="${isArabic ? '/ar/practice-areas/commercial' : '/en/practice-areas/commercial'}" class="group bg-gray-50 rounded-lg p-6 hover:bg-dark-green transition-all duration-300">
                    <div class="flex items-center gap-4">
                        <i class="fas fa-building text-3xl text-gold"></i>
                        <h3 class="text-xl font-bold text-dark-green group-hover:text-white transition">
                            ${isArabic ? 'القضايا التجارية' : 'Commercial Cases'}
                        </h3>
                    </div>
                </a>

                <a href="${isArabic ? '/ar/practice-areas/civil' : '/en/practice-areas/civil'}" class="group bg-gray-50 rounded-lg p-6 hover:bg-dark-green transition-all duration-300">
                    <div class="flex items-center gap-4">
                        <i class="fas fa-balance-scale text-3xl text-gold"></i>
                        <h3 class="text-xl font-bold text-dark-green group-hover:text-white transition">
                            ${isArabic ? 'القضايا المدنية' : 'Civil Cases'}
                        </h3>
                    </div>
                </a>

                <a href="${isArabic ? '/ar/practice-areas/labor' : '/en/practice-areas/labor'}" class="group bg-gray-50 rounded-lg p-6 hover:bg-dark-green transition-all duration-300">
                    <div class="flex items-center gap-4">
                        <i class="fas fa-hard-hat text-3xl text-gold"></i>
                        <h3 class="text-xl font-bold text-dark-green group-hover:text-white transition">
                            ${isArabic ? 'القضايا العمالية' : 'Labor Cases'}
                        </h3>
                    </div>
                </a>

                <a href="${isArabic ? '/ar/practice-areas/family' : '/en/practice-areas/family'}" class="group bg-gray-50 rounded-lg p-6 hover:bg-dark-green transition-all duration-300">
                    <div class="flex items-center gap-4">
                        <i class="fas fa-home text-3xl text-gold"></i>
                        <h3 class="text-xl font-bold text-dark-green group-hover:text-white transition">
                            ${isArabic ? 'قضايا الأحوال الشخصية' : 'Family Law'}
                        </h3>
                    </div>
                </a>

                <a href="${isArabic ? '/ar/practice-areas/corporate' : '/en/practice-areas/corporate'}" class="group bg-gray-50 rounded-lg p-6 hover:bg-dark-green transition-all duration-300">
                    <div class="flex items-center gap-4">
                        <i class="fas fa-handshake text-3xl text-gold"></i>
                        <h3 class="text-xl font-bold text-dark-green group-hover:text-white transition">
                            ${isArabic ? 'قضايا الشركات' : 'Corporate Law'}
                        </h3>
                    </div>
                </a>

                <a href="${isArabic ? '/ar/practice-areas/real-estate' : '/en/practice-areas/real-estate'}" class="group bg-gray-50 rounded-lg p-6 hover:bg-dark-green transition-all duration-300">
                    <div class="flex items-center gap-4">
                        <i class="fas fa-key text-3xl text-gold"></i>
                        <h3 class="text-xl font-bold text-dark-green group-hover:text-white transition">
                            ${isArabic ? 'قضايا الإيجارات والعقارات' : 'Real Estate & Rental'}
                        </h3>
                    </div>
                </a>
            </div>

            <div class="text-center mt-12">
                <a href="${isArabic ? '/ar/practice-areas' : '/en/practice-areas'}" class="gold-bg text-white px-8 py-4 rounded-full hover-gold transition inline-flex items-center gap-2 font-semibold">
                    <span>${isArabic ? 'عرض جميع المجالات' : 'View All Areas'}</span>
                    <i class="fas fa-arrow-${isArabic ? 'left' : 'right'}"></i>
                </a>
            </div>
        </div>
    </section>

    <!-- Google Reviews Section -->
    <section class="py-16 md:py-24 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <div class="flex items-center justify-center gap-3 mb-4">
                    <div class="w-12 h-1 gold-bg"></div>
                    <span class="text-gold font-semibold">
                        ${isArabic ? 'آراء عملائنا' : 'Client Testimonials'}
                    </span>
                    <div class="w-12 h-1 gold-bg"></div>
                </div>
                
                <h2 class="text-3xl md:text-5xl font-bold text-dark-green mb-4">
                    ${isArabic ? 'ماذا يقول عملاؤنا' : 'What Our Clients Say'}
                </h2>
            </div>

            <div class="grid md:grid-cols-3 gap-8 mb-12">
                <!-- Review 1 -->
                <div class="bg-white rounded-lg p-8 shadow-lg">
                    <div class="flex items-center gap-1 mb-4">
                        <i class="fas fa-star text-gold"></i>
                        <i class="fas fa-star text-gold"></i>
                        <i class="fas fa-star text-gold"></i>
                        <i class="fas fa-star text-gold"></i>
                        <i class="fas fa-star text-gold"></i>
                    </div>
                    <p class="text-gray-700 mb-6 italic">
                        "${isArabic 
                          ? 'خدمة متميزة واحترافية عالية. تعاملت مع المكتب في قضية تجارية وكانت النتيجة أفضل من المتوقع.'
                          : 'Excellent service and high professionalism. I dealt with the office in a commercial case and the result was better than expected.'
                        }"
                    </p>
                    <div class="flex items-center gap-3">
                        <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                            <i class="fas fa-user text-white"></i>
                        </div>
                        <div>
                            <div class="font-bold text-dark-green">${isArabic ? 'أحمد المنصوري' : 'Ahmed Al Mansouri'}</div>
                            <div class="text-sm text-gray-500">${isArabic ? 'رجل أعمال' : 'Businessman'}</div>
                        </div>
                    </div>
                </div>

                <!-- Review 2 -->
                <div class="bg-white rounded-lg p-8 shadow-lg">
                    <div class="flex items-center gap-1 mb-4">
                        <i class="fas fa-star text-gold"></i>
                        <i class="fas fa-star text-gold"></i>
                        <i class="fas fa-star text-gold"></i>
                        <i class="fas fa-star text-gold"></i>
                        <i class="fas fa-star text-gold"></i>
                    </div>
                    <p class="text-gray-700 mb-6 italic">
                        "${isArabic 
                          ? 'مكتب موثوق به وذو خبرة واسعة. ساعدوني في حل قضيتي العمالية بكل احترافية وسرعة.'
                          : 'A reliable office with extensive experience. They helped me resolve my labor case with professionalism and speed.'
                        }"
                    </p>
                    <div class="flex items-center gap-3">
                        <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                            <i class="fas fa-user text-white"></i>
                        </div>
                        <div>
                            <div class="font-bold text-dark-green">${isArabic ? 'فاطمة الكتبي' : 'Fatima Al Ketbi'}</div>
                            <div class="text-sm text-gray-500">${isArabic ? 'موظفة' : 'Employee'}</div>
                        </div>
                    </div>
                </div>

                <!-- Review 3 -->
                <div class="bg-white rounded-lg p-8 shadow-lg">
                    <div class="flex items-center gap-1 mb-4">
                        <i class="fas fa-star text-gold"></i>
                        <i class="fas fa-star text-gold"></i>
                        <i class="fas fa-star text-gold"></i>
                        <i class="fas fa-star text-gold"></i>
                        <i class="fas fa-star text-gold"></i>
                    </div>
                    <p class="text-gray-700 mb-6 italic">
                        "${isArabic 
                          ? 'أنصح بشدة بالتعامل مع هذا المكتب. فريق محترف وملتزم بحماية حقوق العملاء.'
                          : 'I highly recommend dealing with this office. A professional team committed to protecting clients\' rights.'
                        }"
                    </p>
                    <div class="flex items-center gap-3">
                        <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                            <i class="fas fa-user text-white"></i>
                        </div>
                        <div>
                            <div class="font-bold text-dark-green">${isArabic ? 'سالم النعيمي' : 'Salem Al Nuaimi'}</div>
                            <div class="text-sm text-gray-500">${isArabic ? 'صاحب شركة' : 'Company Owner'}</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Google Reviews Button -->
            <div class="text-center">
                <a href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review" target="_blank" class="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition">
                    <i class="fab fa-google text-3xl" style="color: #4285F4;"></i>
                    <div class="text-${isArabic ? 'right' : 'left'}">
                        <div class="font-bold text-dark-green">${isArabic ? 'اترك تقييمك على جوجل' : 'Leave Your Review on Google'}</div>
                        <div class="text-sm text-gray-600">${isArabic ? 'شاركنا رأيك وتجربتك' : 'Share your opinion and experience'}</div>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="hero-gradient text-white py-16 md:py-20">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
                ${isArabic 
                  ? 'هل تحتاج إلى استشارة قانونية؟'
                  : 'Do You Need Legal Consultation?'
                }
            </h2>
            <p class="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
                ${isArabic
                  ? 'في مكتبنا في مدينة العين نرحب بتواصلك لأي استشارة قانونية. نحن هنا لحماية حقوقك'
                  : 'At our office in Al Ain City, we welcome your contact for any legal consultation. We are here to protect your rights'
                }
            </p>
            
            <div class="flex flex-wrap justify-center gap-4">
                <a href="tel:+971501234567" class="bg-white text-dark-green px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition inline-flex items-center gap-2">
                    <i class="fas fa-phone"></i>
                    <span>${isArabic ? 'اتصل الآن' : 'Call Now'}</span>
                </a>
                <a href="https://wa.me/971501234567" target="_blank" class="gold-bg text-white px-8 py-4 rounded-full font-bold text-lg hover-gold transition inline-flex items-center gap-2">
                    <i class="fab fa-whatsapp"></i>
                    <span>${isArabic ? 'أرسل رسالة' : 'Send Message'}</span>
                </a>
                <a href="${isArabic ? '/ar/contact' : '/en/contact'}" class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-dark-green transition inline-flex items-center gap-2">
                    <i class="fas fa-envelope"></i>
                    <span>${isArabic ? 'نموذج التواصل' : 'Contact Form'}</span>
                </a>
            </div>
        </div>
    </section>
  `

  return c.html(Layout({ title, lang, children: content }))
}
