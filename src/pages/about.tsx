import { Context } from 'hono'
import { Layout } from '../components/Layout'

export const renderAboutPage = (c: Context, lang: 'ar' | 'en') => {
  const isArabic = lang === 'ar'
  
  const title = isArabic 
    ? 'من نحن - ناصر شايع الهاجري'
    : 'About Us - Nasser Shayea Al Hajeri'

  const content = `
    <!-- Page Header -->
    <section class="hero-gradient text-white py-16">
        <div class="container mx-auto px-4">
            <div class="max-w-3xl ${isArabic ? 'mr-auto' : 'ml-auto'}">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">
                    ${isArabic ? 'من نحن' : 'About Us'}
                </h1>
                <p class="text-xl text-gray-200">
                    ${isArabic 
                      ? 'تعرف على مكتبنا وخبراتنا في تقديم الخدمات القانونية المتميزة'
                      : 'Learn about our office and expertise in providing distinguished legal services'
                    }
                </p>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="py-16 md:py-20 bg-white">
        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
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
                          ? 'محامي ومستشار قانوني معتمد في دولة الإمارات العربية المتحدة، حاصل على درجة البكالوريوس في القانون، ويتمتع بخبرة تزيد عن 15 عاماً في مجال المحاماة والاستشارات القانونية.'
                          : 'Licensed Lawyer and Legal Consultant in the United Arab Emirates, holding a Bachelor\'s degree in Law, with over 15 years of experience in law practice and legal consultations.'
                        }
                    </p>
                    
                    <p class="text-gray-700 text-lg mb-6 leading-relaxed">
                        ${isArabic
                          ? 'عضو في نقابة المحامين الإماراتيين، ومتخصص في مختلف مجالات القانون المدني والتجاري والعمالي والشركات. قمت بتمثيل مئات العملاء أمام مختلف المحاكم والهيئات القضائية في الدولة.'
                          : 'Member of the UAE Lawyers Association, specializing in various fields of civil, commercial, labor, and corporate law. I have represented hundreds of clients before various courts and judicial bodies in the country.'
                        }
                    </p>
                </div>
            </div>

            <!-- Mission & Vision -->
            <div class="grid md:grid-cols-2 gap-8 mb-16">
                <div class="bg-gray-50 rounded-lg p-8">
                    <div class="w-16 h-16 gold-bg rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-bullseye text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4 text-dark-green">
                        ${isArabic ? 'رسالتنا' : 'Our Mission'}
                    </h3>
                    <p class="text-gray-700 leading-relaxed">
                        ${isArabic
                          ? 'تقديم خدمات قانونية متميزة ومتخصصة لعملائنا، والعمل بأعلى معايير الأخلاقيات المهنية والشفافية، لحماية حقوق موكلينا وتحقيق العدالة.'
                          : 'Providing distinguished and specialized legal services to our clients, working with the highest standards of professional ethics and transparency, to protect our clients\' rights and achieve justice.'
                        }
                    </p>
                </div>

                <div class="bg-gray-50 rounded-lg p-8">
                    <div class="w-16 h-16 gold-bg rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-eye text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4 text-dark-green">
                        ${isArabic ? 'رؤيتنا' : 'Our Vision'}
                    </h3>
                    <p class="text-gray-700 leading-relaxed">
                        ${isArabic
                          ? 'أن نكون المكتب القانوني الأول والأكثر ثقة في منطقة العين والإمارات العربية المتحدة، من خلال الاحترافية والخبرة والتفاني في خدمة العملاء.'
                          : 'To be the first and most trusted legal office in Al Ain and the United Arab Emirates, through professionalism, expertise, and dedication to client service.'
                        }
                    </p>
                </div>
            </div>

            <!-- Values -->
            <div class="mb-16">
                <div class="text-center mb-12">
                    <div class="flex items-center justify-center gap-3 mb-4">
                        <div class="w-12 h-1 gold-bg"></div>
                        <span class="text-gold font-semibold">
                            ${isArabic ? 'قيمنا' : 'Our Values'}
                        </span>
                        <div class="w-12 h-1 gold-bg"></div>
                    </div>
                    
                    <h2 class="text-3xl md:text-4xl font-bold text-dark-green">
                        ${isArabic ? 'المبادئ التي نلتزم بها' : 'The Principles We Uphold'}
                    </h2>
                </div>

                <div class="grid md:grid-cols-4 gap-6">
                    <div class="text-center">
                        <div class="w-20 h-20 gold-bg rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-shield-alt text-white text-3xl"></i>
                        </div>
                        <h4 class="text-xl font-bold mb-2 text-dark-green">
                            ${isArabic ? 'المصداقية' : 'Credibility'}
                        </h4>
                        <p class="text-gray-600">
                            ${isArabic ? 'نلتزم بالشفافية والصدق مع عملائنا' : 'We commit to transparency and honesty with our clients'}
                        </p>
                    </div>

                    <div class="text-center">
                        <div class="w-20 h-20 gold-bg rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-medal text-white text-3xl"></i>
                        </div>
                        <h4 class="text-xl font-bold mb-2 text-dark-green">
                            ${isArabic ? 'الاحترافية' : 'Professionalism'}
                        </h4>
                        <p class="text-gray-600">
                            ${isArabic ? 'نقدم خدمات بأعلى معايير الجودة' : 'We provide services with the highest quality standards'}
                        </p>
                    </div>

                    <div class="text-center">
                        <div class="w-20 h-20 gold-bg rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-user-check text-white text-3xl"></i>
                        </div>
                        <h4 class="text-xl font-bold mb-2 text-dark-green">
                            ${isArabic ? 'التفاني' : 'Dedication'}
                        </h4>
                        <p class="text-gray-600">
                            ${isArabic ? 'نعمل بجد لتحقيق أفضل النتائج' : 'We work hard to achieve the best results'}
                        </p>
                    </div>

                    <div class="text-center">
                        <div class="w-20 h-20 gold-bg rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-handshake text-white text-3xl"></i>
                        </div>
                        <h4 class="text-xl font-bold mb-2 text-dark-green">
                            ${isArabic ? 'الثقة' : 'Trust'}
                        </h4>
                        <p class="text-gray-600">
                            ${isArabic ? 'نبني علاقات طويلة الأمد مع عملائنا' : 'We build long-term relationships with our clients'}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Experience Timeline -->
            <div class="mb-16">
                <div class="text-center mb-12">
                    <div class="flex items-center justify-center gap-3 mb-4">
                        <div class="w-12 h-1 gold-bg"></div>
                        <span class="text-gold font-semibold">
                            ${isArabic ? 'مسيرتنا' : 'Our Journey'}
                        </span>
                        <div class="w-12 h-1 gold-bg"></div>
                    </div>
                    
                    <h2 class="text-3xl md:text-4xl font-bold text-dark-green">
                        ${isArabic ? 'سنوات من الخبرة والإنجازات' : 'Years of Experience and Achievements'}
                    </h2>
                </div>

                <div class="space-y-8">
                    <div class="flex gap-6">
                        <div class="flex-shrink-0">
                            <div class="w-16 h-16 gold-bg rounded-full flex items-center justify-center">
                                <span class="text-white font-bold text-xl">2008</span>
                            </div>
                        </div>
                        <div class="flex-grow">
                            <h4 class="text-xl font-bold mb-2 text-dark-green">
                                ${isArabic ? 'بداية المسيرة المهنية' : 'Start of Professional Career'}
                            </h4>
                            <p class="text-gray-700">
                                ${isArabic 
                                  ? 'التحاق بهيئة المحامين الإماراتيين والبدء في ممارسة المحاماة'
                                  : 'Joining the UAE Lawyers Association and beginning law practice'
                                }
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-6">
                        <div class="flex-shrink-0">
                            <div class="w-16 h-16 gold-bg rounded-full flex items-center justify-center">
                                <span class="text-white font-bold text-xl">2015</span>
                            </div>
                        </div>
                        <div class="flex-grow">
                            <h4 class="text-xl font-bold mb-2 text-dark-green">
                                ${isArabic ? 'تأسيس المكتب الخاص' : 'Establishing Private Office'}
                            </h4>
                            <p class="text-gray-700">
                                ${isArabic 
                                  ? 'افتتاح مكتب المحاماة الخاص في مدينة العين'
                                  : 'Opening private law office in Al Ain City'
                                }
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-6">
                        <div class="flex-shrink-0">
                            <div class="w-16 h-16 gold-bg rounded-full flex items-center justify-center">
                                <span class="text-white font-bold text-xl">2020</span>
                            </div>
                        </div>
                        <div class="flex-grow">
                            <h4 class="text-xl font-bold mb-2 text-dark-green">
                                ${isArabic ? 'التوسع والنمو' : 'Expansion and Growth'}
                            </h4>
                            <p class="text-gray-700">
                                ${isArabic 
                                  ? 'توسيع نطاق الخدمات القانونية وزيادة قاعدة العملاء'
                                  : 'Expanding the scope of legal services and increasing client base'
                                }
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-6">
                        <div class="flex-shrink-0">
                            <div class="w-16 h-16 gold-bg rounded-full flex items-center justify-center">
                                <span class="text-white font-bold text-xl">2023</span>
                            </div>
                        </div>
                        <div class="flex-grow">
                            <h4 class="text-xl font-bold mb-2 text-dark-green">
                                ${isArabic ? 'الريادة والتميز' : 'Leadership and Excellence'}
                            </h4>
                            <p class="text-gray-700">
                                ${isArabic 
                                  ? 'أصبحنا من أبرز مكاتب المحاماة في منطقة العين'
                                  : 'Becoming one of the leading law offices in Al Ain area'
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Stats -->
            <div class="grid md:grid-cols-4 gap-8 bg-gray-50 rounded-lg p-8">
                <div class="text-center">
                    <div class="text-4xl font-bold text-dark-green mb-2">15+</div>
                    <div class="text-gray-600">${isArabic ? 'سنة خبرة' : 'Years Experience'}</div>
                </div>

                <div class="text-center">
                    <div class="text-4xl font-bold text-dark-green mb-2">500+</div>
                    <div class="text-gray-600">${isArabic ? 'عميل راضٍ' : 'Satisfied Clients'}</div>
                </div>

                <div class="text-center">
                    <div class="text-4xl font-bold text-dark-green mb-2">95%</div>
                    <div class="text-gray-600">${isArabic ? 'نسبة النجاح' : 'Success Rate'}</div>
                </div>

                <div class="text-center">
                    <div class="text-4xl font-bold text-dark-green mb-2">1000+</div>
                    <div class="text-gray-600">${isArabic ? 'قضية ناجحة' : 'Successful Cases'}</div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="hero-gradient text-white py-16">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
                ${isArabic 
                  ? 'نحن هنا لخدمتك'
                  : 'We Are Here to Serve You'
                }
            </h2>
            <p class="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
                ${isArabic
                  ? 'تواصل معنا الآن للحصول على استشارة قانونية متخصصة'
                  : 'Contact us now to get a specialized legal consultation'
                }
            </p>
            
            <a href="${isArabic ? '/ar/contact' : '/en/contact'}" class="gold-bg text-white px-8 py-4 rounded-full font-bold text-lg hover-gold transition inline-flex items-center gap-2">
                <span>${isArabic ? 'تواصل معنا' : 'Contact Us'}</span>
                <i class="fas fa-arrow-${isArabic ? 'left' : 'right'}"></i>
            </a>
        </div>
    </section>
  `

  return c.html(Layout({ title, lang, children: content }))
}
