import { Context } from 'hono'
import { Layout } from '../components/Layout'

export const renderHomePage = (c: Context, lang: 'ar' | 'en') => {
  const isArabic = lang === 'ar'
  
  const title = isArabic 
    ? 'ناصر شايع الهاجري - محامي واستشاري قانوني في مدينة العين'
    : 'Nasser Shayea Al Hajeri - Lawyer and Legal Consultant in Al Ain'

  const content = (
    <>
      {/* Hero Section - Modern & Light */}
      <section class="hero-gradient text-gray-800 relative min-h-[90vh] flex items-center">
        <div class="container mx-auto px-6 py-20 relative z-10">
          <div class={`max-w-4xl ${isArabic ? 'mr-auto text-right' : 'ml-auto text-left'}`}>
            <div class="inline-flex items-center gap-3 mb-8 bg-white bg-opacity-80 px-6 py-3 rounded-full backdrop-blur-sm border border-blue-200 shadow-sm">
              <i class="fas fa-shield-alt text-blue-600 text-xl"></i>
              <span class="primary-text font-bold text-base tracking-wide">
                {isArabic ? 'محامي واستشاري قانوني معتمد' : 'CERTIFIED LEGAL CONSULTANT'}
              </span>
            </div>
            
            <h1 class="text-5xl md:text-7xl font-bold mb-8 leading-tight text-gray-900">
              {isArabic 
                ? <span>نحمي<br/><span class="primary-text text-6xl md:text-8xl">حقوقك</span><br/>بمهنية وتفان</span>
                : <span>Protecting<br/><span class="primary-text text-6xl md:text-8xl">Your Rights</span><br/>With Excellence</span>
              }
            </h1>
            
            <p class="text-xl md:text-2xl mb-10 text-gray-600 leading-relaxed max-w-2xl">
              {isArabic
                ? 'خدمات قانونية متميزة وشاملة لأفراد والشركات في دولة الإمارات'
                : 'Professional and comprehensive legal services for individuals and companies in the UAE'
              }
            </p>
            
            <div class="flex flex-wrap gap-4">
              <a href={isArabic ? '/ar/contact' : '/en/contact'} 
                 class="primary-bg text-white px-10 py-4 rounded-full font-bold text-lg hover-primary transition inline-flex items-center gap-3 shadow-lg">
                <i class="fas fa-calendar-check text-xl"></i>
                <span>{isArabic ? 'احجز استشارة' : 'Book Consultation'}</span>
              </a>
              <a href="tel:+971501234567" 
                 class="bg-white border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-600 hover:text-white transition inline-flex items-center gap-3 shadow-lg">
                <i class="fas fa-phone text-xl"></i>
                <span>{isArabic ? 'اتصل الآن' : 'Call Now'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section class="py-16 bg-white border-b border-gray-100">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center group">
              <div class="text-5xl md:text-6xl font-bold primary-text mb-2 group-hover:scale-110 transition-transform">15+</div>
              <div class="text-gray-600 font-medium text-base">{isArabic ? 'سنة خبرة' : 'YEARS EXPERIENCE'}</div>
            </div>
            <div class="text-center group">
              <div class="text-5xl md:text-6xl font-bold primary-text mb-2 group-hover:scale-110 transition-transform">500+</div>
              <div class="text-gray-600 font-medium text-base">{isArabic ? 'عميل راضٍ' : 'HAPPY CLIENTS'}</div>
            </div>
            <div class="text-center group">
              <div class="text-5xl md:text-6xl font-bold primary-text mb-2 group-hover:scale-110 transition-transform">95%</div>
              <div class="text-gray-600 font-medium text-base">{isArabic ? 'نسبة النجاح' : 'SUCCESS RATE'}</div>
            </div>
            <div class="text-center group">
              <div class="text-5xl md:text-6xl font-bold primary-text mb-2 group-hover:scale-110 transition-transform">1000+</div>
              <div class="text-gray-600 font-medium text-base">{isArabic ? 'قضية مكتملة' : 'CASES COMPLETED'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About/Founder Section */}
      <section class="py-24 bg-gradient-to-b from-white to-gray-50">
        <div class="container mx-auto px-6">
          <div class="grid md:grid-cols-2 gap-16 items-center">
            <div class={isArabic ? 'md:order-2' : 'md:order-1'}>
              <div class="relative">
                <div class="overflow-hidden rounded-3xl shadow-2xl">
                  <img src="/static/lawyer-photo.jpg" 
                       alt={isArabic ? 'المحامي ناصر شايع الهاجري' : 'Lawyer Nasser Shayea Al Hajeri'} 
                       class="w-full object-cover aspect-square"/>
                </div>
                <div class="absolute -bottom-6 -right-6 bg-blue-600 text-white px-8 py-4 rounded-2xl shadow-xl">
                  <div class="text-3xl font-bold">15+</div>
                  <div class="text-sm">{isArabic ? 'سنة خبرة' : 'Years Exp.'}</div>
                </div>
              </div>
            </div>
            
            <div class={`${isArabic ? 'md:order-1 text-right' : 'md:order-2 text-left'}`}>
              <div class="inline-block mb-6">
                <span class="secondary-text font-bold text-sm uppercase tracking-widest px-5 py-2 bg-blue-50 rounded-full">
                  {isArabic ? 'المؤسس' : 'THE FOUNDER'}
                </span>
              </div>
              
              <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                <span class="primary-text">{isArabic ? 'ناصر شايع' : 'Nasser Shayea'}</span>
                <br/>
                {isArabic ? 'الهاجري' : 'Al Hajeri'}
              </h2>
              
              <div class="section-divider"></div>
              
              <p class="text-gray-700 text-xl mb-6 leading-relaxed">
                {isArabic
                  ? 'محامٍ ومستشار قانوني معتمد في دولة الإمارات، يقدم خدمات قانونية شاملة للأفراد والشركات.'
                  : 'Certified lawyer and legal consultant in the UAE, providing comprehensive legal services to individuals and companies.'
                }
              </p>
              
              <p class="text-gray-600 text-lg mb-8 leading-relaxed">
                {isArabic
                  ? 'مع أكثر من 15 عاماً من الخبرة، نضمن حماية حقوقك ومصالحك بأعلى معايير الاحترافية.'
                  : 'With over 15 years of experience, we ensure the protection of your rights and interests with the highest standards of professionalism.'
                }
              </p>
              
              <a href={isArabic ? '/ar/about' : '/en/about'} 
                 class="inline-flex items-center gap-3 primary-text font-bold text-lg hover:gap-4 transition-all group">
                <span>{isArabic ? 'اعرف المزيد' : 'Learn More'}</span>
                <i class={`fas fa-arrow-${isArabic ? 'left' : 'right'} text-xl`}></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <span class="secondary-text font-bold text-sm uppercase tracking-widest px-5 py-2 bg-blue-50 rounded-full inline-block mb-6">
              {isArabic ? 'خدماتنا' : 'OUR SERVICES'}
            </span>
            <h2 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {isArabic ? 'خدمات قانونية' : 'Professional Legal'}
              <br/>
              <span class="primary-text">{isArabic ? 'متكاملة' : 'Services'}</span>
            </h2>
            <div class="section-divider"></div>
            <p class="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              {isArabic
                ? 'نقدم مجموعة شاملة من الخدمات القانونية المتخصصة'
                : 'We offer a comprehensive range of specialized legal services'
              }
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'fa-gavel', titleAr: 'التقاضي والترافع', titleEn: 'Litigation', descAr: 'تمثيل قانوني احترافي أمام جميع المحاكم والهيئات القضائية', descEn: 'Professional legal representation before all courts and judicial bodies' },
              { icon: 'fa-handshake', titleAr: 'الاستشارات القانونية', titleEn: 'Legal Consultation', descAr: 'استشارات قانونية متخصصة لحماية حقوقك ومصالحك', descEn: 'Specialized legal consultations to protect your rights and interests' },
              { icon: 'fa-file-signature', titleAr: 'صياغة العقود', titleEn: 'Contract Drafting', descAr: 'إعداد وصياغة العقود والاتفاقيات القانونية بدقة', descEn: 'Accurate preparation and drafting of legal contracts and agreements' },
              { icon: 'fa-balance-scale', titleAr: 'التحكيم', titleEn: 'Arbitration', descAr: 'حل النزاعات التجارية عبر التحكيم المحلي والدولي', descEn: 'Resolving commercial disputes through local and international arbitration' },
              { icon: 'fa-money-check-alt', titleAr: 'تحصيل الديون', titleEn: 'Debt Collection', descAr: 'تحصيل الحقوق المالية بالطرق القانونية', descEn: 'Collecting financial rights through legal means' },
              { icon: 'fa-users', titleAr: 'القضايا العمالية', titleEn: 'Labor Cases', descAr: 'حل المنازعات العمالية وحماية حقوق العمال', descEn: 'Resolving labor disputes and protecting workers rights' }
            ].map((service) => (
              <div class="service-card rounded-3xl p-8 group">
                <div class="w-20 h-20 primary-bg rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <i class={`fas ${service.icon} text-white text-3xl`}></i>
                </div>
                <h3 class="text-2xl font-bold mb-4 text-gray-900">
                  {isArabic ? service.titleAr : service.titleEn}
                </h3>
                <p class="text-gray-600 text-base mb-6 leading-relaxed">
                  {isArabic ? service.descAr : service.descEn}
                </p>
                <a href={isArabic ? '/ar/services' : '/en/services'} 
                   class="secondary-text font-bold text-base inline-flex items-center gap-2 hover:gap-3 transition-all">
                   <span>{isArabic ? 'المزيد' : 'Learn More'}</span>
                  <i class={`fas fa-arrow-${isArabic ? 'left' : 'right'} text-lg`}></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section class="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <span class="accent-text font-bold text-sm uppercase tracking-widest px-5 py-2 bg-amber-50 rounded-full inline-block mb-6">
              {isArabic ? 'آراء العملاء' : 'CLIENT REVIEWS'}
            </span>
            <h2 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {isArabic ? 'ماذا يقول' : 'What Our'}
              <br/>
              <span class="accent-text">{isArabic ? 'عملاؤنا' : 'Clients Say'}</span>
            </h2>
            <div class="section-divider"></div>
            
            {/* Google Rating Summary */}
            <div class="flex items-center justify-center gap-4 mb-8">
              <div class="flex items-center gap-2">
                <span class="text-5xl font-bold text-gray-900">4.9</span>
                <div>
                  <div class="flex gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i class="fas fa-star text-amber-400 text-xl"></i>
                    ))}
                  </div>
                  <p class="text-sm text-gray-600">{isArabic ? 'على جوجل' : 'on Google'}</p>
                </div>
              </div>
              <div class="h-12 w-px bg-gray-300"></div>
              <div class="text-left">
                <p class="text-2xl font-bold text-gray-900">150+</p>
                <p class="text-sm text-gray-600">{isArabic ? 'تقييم' : 'Reviews'}</p>
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            {[
              {
                nameAr: 'أحمد محمد',
                nameEn: 'Ahmed Mohammed',
                reviewAr: 'خدمة متميزة واحترافية عالية. المحامي ناصر ساعدني كثيراً في قضيتي وحصلت على حقي كاملاً. أنصح به بشدة.',
                reviewEn: 'Excellent and highly professional service. Lawyer Nasser helped me greatly in my case and I got all my rights. Highly recommended.',
                rating: 5
              },
              {
                nameAr: 'فاطمة علي',
                nameEn: 'Fatima Ali',
                reviewAr: 'تجربة ممتازة، استشارات قانونية دقيقة ومتابعة مستمرة. أشكر المحامي على اهتمامه بقضيتي.',
                reviewEn: 'Excellent experience, accurate legal consultations and continuous follow-up. Thank you for your attention to my case.',
                rating: 5
              },
              {
                nameAr: 'خالد سالم',
                nameEn: 'Khaled Salem',
                reviewAr: 'محامي ممتاز وخبرة واسعة في القضايا التجارية. حل قضيتي بسرعة وكفاءة. شكراً جزيلاً.',
                reviewEn: 'Excellent lawyer with extensive experience in commercial cases. Solved my case quickly and efficiently. Thank you very much.',
                rating: 5
              }
            ].map((review) => (
              <div class="review-card p-8 group hover:scale-105 transition-transform">
                <div class="flex items-center gap-1 mb-6">
                  {[...Array(review.rating)].map(() => (
                    <i class="fas fa-star text-amber-400 text-lg"></i>
                  ))}
                </div>
                <p class="text-gray-700 text-base mb-6 leading-relaxed italic">
                  "{isArabic ? review.reviewAr : review.reviewEn}"
                </p>
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 primary-bg rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {(isArabic ? review.nameAr : review.nameEn).charAt(0)}
                  </div>
                  <div>
                    <p class="font-bold text-gray-900">{isArabic ? review.nameAr : review.nameEn}</p>
                    <p class="text-sm text-gray-600">{isArabic ? 'عميل Google' : 'Google Client'}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Reviews Button */}
          <div class="text-center mt-12">
            <a href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review" target="_blank" 
               class="inline-flex items-center gap-3 accent-bg text-white px-10 py-4 rounded-full font-bold text-lg hover-accent transition shadow-lg">
              <i class="fab fa-google text-xl"></i>
              <span>{isArabic ? 'شاهد جميع التقييمات' : 'View All Reviews'}</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div class="container mx-auto px-6 text-center relative z-10">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-4xl md:text-6xl font-bold mb-6">
              {isArabic 
                ? <span>هل تحتاج <span class="text-amber-400">مساعدة قانونية؟</span></span>
                : <span>Need <span class="text-amber-400">Legal Help?</span></span>
              }
            </h2>
            <p class="text-xl md:text-2xl mb-12 text-blue-100 max-w-2xl mx-auto leading-relaxed">
              {isArabic
                ? 'تواصل معنا اليوم واحصل على استشارة قانونية متخصصة'
                : 'Contact us today and get specialized legal consultation'
              }
            </p>
            
            <div class="flex flex-wrap justify-center gap-4">
              <a href="tel:+971501234567" 
                 class="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition inline-flex items-center gap-3 shadow-2xl">
                <i class="fas fa-phone text-xl"></i>
                <span>{isArabic ? 'اتصل الآن' : 'Call Now'}</span>
              </a>
              <a href="https://wa.me/971501234567" target="_blank" 
                 class="bg-green-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition inline-flex items-center gap-3 shadow-2xl">
                <i class="fab fa-whatsapp text-xl"></i>
                <span>{isArabic ? 'واتساب' : 'WhatsApp'}</span>
              </a>
              <a href={isArabic ? '/ar/contact' : '/en/contact'} 
                 class="accent-bg text-white px-10 py-4 rounded-full font-bold text-lg hover-accent transition inline-flex items-center gap-3 shadow-2xl">
                <i class="fas fa-calendar-alt text-xl"></i>
                <span>{isArabic ? 'احجز موعد' : 'Book Appointment'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )

  return c.html(Layout({ title, lang, children: content }))
}
