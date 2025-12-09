import { Context } from 'hono'
import { Layout } from '../components/Layout'

export const renderHomePage = (c: Context, lang: 'ar' | 'en') => {
  const isArabic = lang === 'ar'
  
  const title = isArabic 
    ? 'ناصر شايع الهاجري - محامي واستشاري قانوني في مدينة العين'
    : 'Nasser Shayea Al Hajeri - Lawyer and Legal Consultant in Al Ain'

  const content = (
    <>
      {/* Hero Section - Elegant & Classy */}
      <section class="hero-section text-white relative min-h-screen flex items-center">
        <div class="container mx-auto px-6 py-32 relative z-10">
          <div class={`max-w-4xl ${isArabic ? 'mr-auto text-right' : 'ml-auto text-left'}`}>
            <div class="section-badge mb-8">
              {isArabic ? 'محامي واستشاري قانوني معتمد' : 'CERTIFIED LEGAL CONSULTANT'}
            </div>
            
            <h1 class="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              {isArabic 
                ? <span>خبرة قانونية<br/><span class="text-gradient text-6xl md:text-8xl">متميزة</span><br/>لحماية حقوقك</span>
                : <span>Premium Legal<br/><span class="text-gradient text-6xl md:text-8xl">Expertise</span><br/>For Your Rights</span>
              }
            </h1>
            
            <p class="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed max-w-2xl">
              {isArabic
                ? 'أكثر من 15 عاماً من التميز في تقديم الحلول القانونية الشاملة'
                : 'Over 15 years of excellence in providing comprehensive legal solutions'
              }
            </p>
            
            <div class="flex flex-wrap gap-4">
              <a href={isArabic ? '/ar/contact' : '/en/contact'} class="btn-primary inline-flex items-center gap-3">
                <i class="fas fa-calendar-check"></i>
                <span>{isArabic ? 'احجز استشارة' : 'Book Consultation'}</span>
              </a>
              <a href="tel:+971501234567" class="btn-secondary inline-flex items-center gap-3">
                <i class="fas fa-phone"></i>
                <span>{isArabic ? 'اتصل الآن' : 'Call Now'}</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative gradient orbs */}
        <div class="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"></div>
        <div class="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
      </section>

      {/* Stats Section */}
      <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div class="text-center">
              <div class="stat-number mb-2">15+</div>
              <div class="text-gray-600 font-medium text-sm uppercase tracking-wider">{isArabic ? 'سنة خبرة' : 'Years Experience'}</div>
            </div>
            <div class="text-center">
              <div class="stat-number mb-2">500+</div>
              <div class="text-gray-600 font-medium text-sm uppercase tracking-wider">{isArabic ? 'عميل سعيد' : 'Happy Clients'}</div>
            </div>
            <div class="text-center">
              <div class="stat-number mb-2">95%</div>
              <div class="text-gray-600 font-medium text-sm uppercase tracking-wider">{isArabic ? 'معدل النجاح' : 'Success Rate'}</div>
            </div>
            <div class="text-center">
              <div class="stat-number mb-2">1K+</div>
              <div class="text-gray-600 font-medium text-sm uppercase tracking-wider">{isArabic ? 'قضية منجزة' : 'Cases Won'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About/Founder Section */}
      <section class="py-32 bg-gradient-to-b from-white to-gray-50">
        <div class="container mx-auto px-6">
          <div class="grid lg:grid-cols-2 gap-20 items-center">
            <div class={isArabic ? 'lg:order-2' : 'lg:order-1'}>
              <div class="relative">
                <div class="gradient-border">
                  <div class="gradient-border-inner p-0 overflow-hidden">
                    <img src="/static/lawyer-photo.jpg" 
                         alt={isArabic ? 'المحامي ناصر شايع الهاجري' : 'Lawyer Nasser Shayea Al Hajeri'} 
                         class="w-full object-cover aspect-square rounded-xl"/>
                  </div>
                </div>
                <div class="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                  <div class="text-4xl font-bold text-gradient">15+</div>
                  <div class="text-sm text-gray-600 font-medium">{isArabic ? 'سنة خبرة' : 'Years Exp.'}</div>
                </div>
              </div>
            </div>
            
            <div class={`${isArabic ? 'lg:order-1 text-right' : 'lg:order-2 text-left'}`}>
              <div class="section-badge mb-6">
                {isArabic ? 'المؤسس' : 'THE FOUNDER'}
              </div>
              
              <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                {isArabic ? 'ناصر شايع الهاجري' : 'Nasser Shayea Al Hajeri'}
              </h2>
              
              <div class={`divider mb-8 ${isArabic ? 'mr-0' : 'ml-0'}`}></div>
              
              <p class="text-gray-700 text-lg mb-6 leading-relaxed">
                {isArabic
                  ? 'محامٍ ومستشار قانوني معتمد في دولة الإمارات، متخصص في تقديم الحلول القانونية المتكاملة للأفراد والشركات.'
                  : 'Certified lawyer and legal consultant in the UAE, specializing in providing comprehensive legal solutions for individuals and companies.'
                }
              </p>
              
              <p class="text-gray-600 text-base mb-8 leading-relaxed">
                {isArabic
                  ? 'بفضل الخبرة الممتدة لأكثر من 15 عاماً، نضمن تقديم أفضل الخدمات القانونية بأعلى معايير الجودة والاحترافية.'
                  : 'With over 15 years of experience, we ensure the best legal services with the highest standards of quality and professionalism.'
                }
              </p>
              
              <a href={isArabic ? '/ar/about' : '/en/about'} 
                 class="inline-flex items-center gap-3 text-gradient font-bold text-lg hover:gap-4 transition-all">
                <span>{isArabic ? 'اعرف المزيد' : 'Learn More'}</span>
                <i class={`fas fa-arrow-${isArabic ? 'left' : 'right'}`}></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section class="py-32 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-20">
            <div class="section-badge mb-6">
              {isArabic ? 'خدماتنا المتميزة' : 'OUR PREMIUM SERVICES'}
            </div>
            <h2 class="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              {isArabic ? 'خدمات قانونية' : 'Legal Services'}
              <br/>
              <span class="text-gradient">{isArabic ? 'شاملة ومتكاملة' : 'Comprehensive & Complete'}</span>
            </h2>
            <div class="divider mt-6"></div>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: 'fa-gavel', 
                titleAr: 'التقاضي والترافع', 
                titleEn: 'Litigation & Advocacy', 
                descAr: 'تمثيل قانوني احترافي أمام جميع المحاكم والهيئات القضائية في الدولة', 
                descEn: 'Professional legal representation before all courts and judicial bodies in the country' 
              },
              { 
                icon: 'fa-handshake', 
                titleAr: 'الاستشارات القانونية', 
                titleEn: 'Legal Consultations', 
                descAr: 'استشارات قانونية متخصصة ودقيقة لحماية حقوقك ومصالحك', 
                descEn: 'Specialized and accurate legal consultations to protect your rights and interests' 
              },
              { 
                icon: 'fa-file-contract', 
                titleAr: 'صياغة العقود', 
                titleEn: 'Contract Drafting', 
                descAr: 'إعداد وصياغة جميع أنواع العقود والاتفاقيات بدقة واحترافية', 
                descEn: 'Preparation and drafting of all types of contracts and agreements with precision' 
              },
              { 
                icon: 'fa-balance-scale', 
                titleAr: 'التحكيم التجاري', 
                titleEn: 'Commercial Arbitration', 
                descAr: 'حل النزاعات التجارية عبر التحكيم المحلي والدولي', 
                descEn: 'Resolving commercial disputes through local and international arbitration' 
              },
              { 
                icon: 'fa-money-bill-wave', 
                titleAr: 'تحصيل الديون', 
                titleEn: 'Debt Collection', 
                descAr: 'استرداد الحقوق المالية بالطرق القانونية السليمة', 
                descEn: 'Recovering financial rights through proper legal means' 
              },
              { 
                icon: 'fa-briefcase', 
                titleAr: 'القضايا العمالية', 
                titleEn: 'Labor Disputes', 
                descAr: 'حل النزاعات العمالية وحماية حقوق أصحاب العمل والعمال', 
                descEn: 'Resolving labor disputes and protecting rights of employers and employees' 
              }
            ].map((service) => (
              <div class="elegant-card p-8 group">
                <div class="service-icon mb-6">
                  <i class={`fas ${service.icon} text-white text-3xl`}></i>
                </div>
                <h3 class="text-2xl font-bold mb-4 text-gray-900">
                  {isArabic ? service.titleAr : service.titleEn}
                </h3>
                <p class="text-gray-600 text-base mb-6 leading-relaxed">
                  {isArabic ? service.descAr : service.descEn}
                </p>
                <a href={isArabic ? '/ar/services' : '/en/services'} 
                   class="text-gradient font-semibold text-base inline-flex items-center gap-2 hover:gap-3 transition-all">
                  <span>{isArabic ? 'اعرف المزيد' : 'Learn More'}</span>
                  <i class={`fas fa-arrow-${isArabic ? 'left' : 'right'}`}></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section class="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-20">
            <div class="section-badge mb-6">
              {isArabic ? 'آراء العملاء' : 'CLIENT TESTIMONIALS'}
            </div>
            <h2 class="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              {isArabic ? 'ماذا يقول' : 'What Our'}
              <br/>
              <span class="text-gradient">{isArabic ? 'عملاؤنا' : 'Clients Say'}</span>
            </h2>
            <div class="divider mt-6 mb-12"></div>
            
            {/* Google Rating */}
            <div class="inline-flex items-center gap-6 bg-white rounded-2xl shadow-sm border border-gray-100 px-10 py-6">
              <div class="text-center">
                <div class="text-5xl font-bold text-gray-900 mb-2">4.9</div>
                <div class="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map(() => (
                    <i class="fas fa-star text-yellow-400 text-lg"></i>
                  ))}
                </div>
                <div class="text-sm text-gray-600 font-medium">{isArabic ? 'تقييم جوجل' : 'Google Rating'}</div>
              </div>
              <div class="h-16 w-px bg-gray-200"></div>
              <div class="text-center">
                <div class="text-3xl font-bold text-gray-900 mb-2">150+</div>
                <div class="text-sm text-gray-600 font-medium">{isArabic ? 'تقييم' : 'Reviews'}</div>
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            {[
              {
                nameAr: 'أحمد محمد العلي',
                nameEn: 'Ahmed Mohammed Al Ali',
                reviewAr: 'تجربة رائعة مع المحامي ناصر. خدمة احترافية ومتابعة دقيقة لقضيتي. حصلت على حقي كاملاً بفضل خبرته. أنصح به بشدة.',
                reviewEn: 'Amazing experience with Lawyer Nasser. Professional service and accurate follow-up of my case. Got all my rights thanks to his expertise. Highly recommended.',
                rating: 5
              },
              {
                nameAr: 'فاطمة علي الشامسي',
                nameEn: 'Fatima Ali Al Shamsi',
                reviewAr: 'محامي ممتاز وخدمة متميزة. استشارات دقيقة وحلول فعالة. أشكره على اهتمامه بقضيتي وحل جميع المشاكل القانونية بكفاءة.',
                reviewEn: 'Excellent lawyer and outstanding service. Accurate consultations and effective solutions. Thank him for his attention to my case and solving all legal issues efficiently.',
                rating: 5
              },
              {
                nameAr: 'خالد سالم المزروعي',
                nameEn: 'Khaled Salem Al Mazrouei',
                reviewAr: 'خبرة واسعة وكفاءة عالية في القضايا التجارية. حل قضيتي بسرعة واحترافية. سعيد جداً بالنتيجة. شكراً جزيلاً.',
                reviewEn: 'Extensive experience and high efficiency in commercial cases. Solved my case quickly and professionally. Very happy with the result. Thank you very much.',
                rating: 5
              }
            ].map((review) => (
              <div class="review-card">
                <div class="flex gap-1 mb-6">
                  {[...Array(review.rating)].map(() => (
                    <i class="fas fa-star text-yellow-400 text-base"></i>
                  ))}
                </div>
                <p class="text-gray-700 text-base mb-6 leading-relaxed">
                  "{isArabic ? review.reviewAr : review.reviewEn}"
                </p>
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                    {(isArabic ? review.nameAr : review.nameEn).charAt(0)}
                  </div>
                  <div>
                    <div class="font-bold text-gray-900">{isArabic ? review.nameAr : review.nameEn}</div>
                    <div class="text-sm text-gray-500">{isArabic ? 'عميل على جوجل' : 'Google Client'}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div class="text-center mt-12">
            <a href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review" target="_blank" 
               class="btn-secondary inline-flex items-center gap-3">
              <i class="fab fa-google"></i>
              <span>{isArabic ? 'شاهد جميع التقييمات' : 'View All Reviews on Google'}</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-32 hero-section text-white relative overflow-hidden">
        <div class="container mx-auto px-6 text-center relative z-10">
          <div class="max-w-4xl mx-auto">
            <div class="section-badge mb-8">
              {isArabic ? 'ابدأ الآن' : 'GET STARTED NOW'}
            </div>
            <h2 class="text-4xl md:text-6xl font-bold mb-6">
              {isArabic 
                ? <span>هل تحتاج <span class="text-gradient">مساعدة قانونية؟</span></span>
                : <span>Need <span class="text-gradient">Legal Assistance?</span></span>
              }
            </h2>
            <p class="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {isArabic
                ? 'تواصل معنا الآن واحصل على استشارة قانونية متخصصة'
                : 'Contact us now and get specialized legal consultation'
              }
            </p>
            
            <div class="flex flex-wrap justify-center gap-4">
              <a href="tel:+971501234567" class="btn-secondary inline-flex items-center gap-3">
                <i class="fas fa-phone"></i>
                <span>{isArabic ? 'اتصل الآن' : 'Call Now'}</span>
              </a>
              <a href="https://wa.me/971501234567" target="_blank" 
                 class="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full font-semibold transition inline-flex items-center gap-3 shadow-lg">
                <i class="fab fa-whatsapp text-xl"></i>
                <span>{isArabic ? 'واتساب' : 'WhatsApp'}</span>
              </a>
              <a href={isArabic ? '/ar/contact' : '/en/contact'} class="btn-primary inline-flex items-center gap-3">
                <i class="fas fa-calendar-alt"></i>
                <span>{isArabic ? 'احجز موعد' : 'Book Appointment'}</span>
              </a>
            </div>
          </div>
        </div>
        
        <div class="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"></div>
        <div class="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
      </section>
    </>
  )

  return c.html(Layout({ title, lang, children: content }))
}
