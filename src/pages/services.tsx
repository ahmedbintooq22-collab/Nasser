import { Context } from 'hono'
import { Layout } from '../components/Layout'

export const renderServicesPage = (c: Context, lang: 'ar' | 'en') => {
  const isArabic = lang === 'ar'
  
  const title = isArabic 
    ? 'خدماتنا - ناصر شايع الهاجري'
    : 'Our Services - Nasser Shayea Al Hajeri'

  const content = (
    <>
      {/* Hero Section - Same as Home */}
      <section class="hero-section text-white relative min-h-screen flex items-center">
        <div class="container mx-auto px-6 py-32 relative z-10">
          <div class={`max-w-4xl ${isArabic ? 'mr-auto text-right' : 'ml-auto text-left'}`}>
            <div class="section-badge mb-8">
              {isArabic ? 'خدماتنا القانونية' : 'LEGAL SERVICES'}
            </div>
            
            <h1 class="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              {isArabic 
                ? <span>خدمات قانونية<br/><span class="text-gradient text-6xl md:text-8xl">شاملة</span><br/>ومتكاملة</span>
                : <span>Comprehensive<br/><span class="text-gradient text-6xl md:text-8xl">Legal Services</span><br/>For All Needs</span>
              }
            </h1>
            
            <p class="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed max-w-2xl">
              {isArabic
                ? 'نقدم مجموعة متكاملة من الخدمات القانونية المتخصصة'
                : 'We provide a complete range of specialized legal services'
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
              <div class="stat-number mb-2">6+</div>
              <div class="text-gray-600 font-medium text-sm uppercase tracking-wider">{isArabic ? 'خدمة رئيسية' : 'Main Services'}</div>
            </div>
            <div class="text-center">
              <div class="stat-number mb-2">500+</div>
              <div class="text-gray-600 font-medium text-sm uppercase tracking-wider">{isArabic ? 'عميل راضٍ' : 'Happy Clients'}</div>
            </div>
            <div class="text-center">
              <div class="stat-number mb-2">95%</div>
              <div class="text-gray-600 font-medium text-sm uppercase tracking-wider">{isArabic ? 'نسبة النجاح' : 'Success Rate'}</div>
            </div>
            <div class="text-center">
              <div class="stat-number mb-2">24/7</div>
              <div class="text-gray-600 font-medium text-sm uppercase tracking-wider">{isArabic ? 'دعم متواصل' : 'Support Available'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Same style as Home */}
      <section class="py-32 bg-gradient-to-b from-white to-gray-50">
        <div class="container mx-auto px-6">
          <div class="text-center mb-20">
            <div class="section-badge mb-6">
              {isArabic ? 'خدماتنا المتميزة' : 'OUR PREMIUM SERVICES'}
            </div>
            <h2 class="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              {isArabic ? 'حلول قانونية' : 'Legal Solutions'}
              <br/>
              <span class="text-gradient">{isArabic ? 'متكاملة' : 'Complete & Professional'}</span>
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
                <a href={isArabic ? '/ar/contact' : '/en/contact'} 
                   class="text-gradient font-semibold text-base inline-flex items-center gap-2 hover:gap-3 transition-all">
                  <span>{isArabic ? 'احجز استشارة' : 'Book Consultation'}</span>
                  <i class={`fas fa-arrow-${isArabic ? 'left' : 'right'}`}></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section class="py-32 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-20">
            <div class="section-badge mb-6">
              {isArabic ? 'لماذا نحن' : 'WHY CHOOSE US'}
            </div>
            <h2 class="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              {isArabic ? 'ما يميز' : 'What Makes Us'}
              <br/>
              <span class="text-gradient">{isArabic ? 'خدماتنا' : 'Different'}</span>
            </h2>
            <div class="divider mt-6"></div>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'fa-award', titleAr: 'خبرة واسعة', titleEn: 'Extensive Experience', descAr: '15+ سنة من الخبرة القانونية', descEn: '15+ years of legal experience' },
              { icon: 'fa-shield-alt', titleAr: 'سرية تامة', titleEn: 'Full Confidentiality', descAr: 'حماية كاملة لمعلوماتك', descEn: 'Complete protection of your information' },
              { icon: 'fa-chart-line', titleAr: 'نسبة نجاح عالية', titleEn: 'High Success Rate', descAr: '95% معدل نجاح في القضايا', descEn: '95% success rate in cases' },
              { icon: 'fa-clock', titleAr: 'استجابة سريعة', titleEn: 'Quick Response', descAr: 'رد فوري على استفساراتك', descEn: 'Immediate response to inquiries' },
              { icon: 'fa-users', titleAr: 'فريق محترف', titleEn: 'Professional Team', descAr: 'فريق من المحامين المتخصصين', descEn: 'Team of specialized lawyers' },
              { icon: 'fa-dollar-sign', titleAr: 'أسعار تنافسية', titleEn: 'Competitive Prices', descAr: 'جودة عالية بأسعار معقولة', descEn: 'High quality at reasonable prices' }
            ].map((item) => (
              <div class="elegant-card p-8 text-center">
                <div class="service-icon mx-auto mb-6">
                  <i class={`fas ${item.icon} text-white text-3xl`}></i>
                </div>
                <h3 class="text-xl font-bold mb-3 text-gray-900">
                  {isArabic ? item.titleAr : item.titleEn}
                </h3>
                <p class="text-gray-600 text-sm leading-relaxed">
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
                ? <span>ابدأ <span class="text-gradient">قضيتك</span> اليوم</span>
                : <span>Start Your <span class="text-gradient">Case</span> Today</span>
              }
            </h2>
            <p class="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {isArabic
                ? 'تواصل معنا للحصول على استشارة قانونية متخصصة'
                : 'Contact us for specialized legal consultation'
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
