import { Context } from 'hono'
import { Layout } from '../components/Layout'

export const renderAboutPage = (c: Context, lang: 'ar' | 'en') => {
  const isArabic = lang === 'ar'
  
  const title = isArabic 
    ? 'من نحن - ناصر شايع الهاجري'
    : 'About Us - Nasser Shayea Al Hajeri'

  const content = (
    <>
      {/* Hero Section - Same as Home */}
      <section class="hero-section text-white relative min-h-screen flex items-center">
        <div class="container mx-auto px-6 py-32 relative z-10">
          <div class={`max-w-4xl ${isArabic ? 'mr-auto text-right' : 'ml-auto text-left'}`}>
            <div class="section-badge mb-8">
              {isArabic ? 'من نحن' : 'ABOUT US'}
            </div>
            
            <h1 class="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              {isArabic 
                ? <span>قصة<br/><span class="text-gradient text-6xl md:text-8xl">التميز</span><br/>والنجاح</span>
                : <span>Story of<br/><span class="text-gradient text-6xl md:text-8xl">Excellence</span><br/>& Success</span>
              }
            </h1>
            
            <p class="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed max-w-2xl">
              {isArabic
                ? 'رحلة امتدت لأكثر من 15 عاماً في تقديم الخدمات القانونية المتميزة'
                : 'A journey spanning over 15 years providing distinguished legal services'
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
              
              <a href={isArabic ? '/ar/services' : '/en/services'} 
                 class="inline-flex items-center gap-3 text-gradient font-bold text-lg hover:gap-4 transition-all">
                <span>{isArabic ? 'شاهد خدماتنا' : 'View Our Services'}</span>
                <i class={`fas fa-arrow-${isArabic ? 'left' : 'right'}`}></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Cards Section */}
      <section class="py-32 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-20">
            <div class="section-badge mb-6">
              {isArabic ? 'خبراتنا' : 'OUR EXPERTISE'}
            </div>
            <h2 class="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              {isArabic ? 'مجالات' : 'Areas of'}
              <br/>
              <span class="text-gradient">{isArabic ? 'التخصص' : 'Specialization'}</span>
            </h2>
            <div class="divider mt-6"></div>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'fa-briefcase', titleAr: 'القضايا التجارية', titleEn: 'Commercial Cases', descAr: 'خبرة واسعة في القضايا التجارية والشركات', descEn: 'Extensive experience in commercial and corporate cases' },
              { icon: 'fa-balance-scale', titleAr: 'القضايا المدنية', titleEn: 'Civil Cases', descAr: 'تمثيل قانوني في جميع القضايا المدنية', descEn: 'Legal representation in all civil cases' },
              { icon: 'fa-users', titleAr: 'القضايا العمالية', titleEn: 'Labor Cases', descAr: 'حل النزاعات العمالية وحماية الحقوق', descEn: 'Resolving labor disputes and protecting rights' },
              { icon: 'fa-home', titleAr: 'القضايا الأسرية', titleEn: 'Family Cases', descAr: 'معالجة حساسة لقضايا الأسرة', descEn: 'Sensitive handling of family matters' },
              { icon: 'fa-building', titleAr: 'القضايا العقارية', titleEn: 'Real Estate', descAr: 'خدمات قانونية شاملة للعقارات', descEn: 'Comprehensive real estate legal services' },
              { icon: 'fa-handshake', titleAr: 'التحكيم والوساطة', titleEn: 'Arbitration', descAr: 'حلول بديلة لحل النزاعات', descEn: 'Alternative dispute resolution solutions' }
            ].map((item) => (
              <div class="elegant-card p-8 group">
                <div class="service-icon mb-6">
                  <i class={`fas ${item.icon} text-white text-3xl`}></i>
                </div>
                <h3 class="text-2xl font-bold mb-4 text-gray-900">
                  {isArabic ? item.titleAr : item.titleEn}
                </h3>
                <p class="text-gray-600 text-base leading-relaxed">
                  {isArabic ? item.descAr : item.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Same as Home */}
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
