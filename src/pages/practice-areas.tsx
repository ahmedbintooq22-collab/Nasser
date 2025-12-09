import { Context } from 'hono'
import { Layout } from '../components/Layout'

export const renderPracticeAreasPage = (c: Context, lang: 'ar' | 'en') => {
  const isArabic = lang === 'ar'
  
  const title = isArabic 
    ? 'مجالات الممارسة - ناصر شايع الهاجري'
    : 'Practice Areas - Nasser Shayea Al Hajeri'

  const content = (
    <>
      {/* Hero Section - Same as Home */}
      <section class="hero-section text-white relative min-h-screen flex items-center">
        <div class="container mx-auto px-6 py-32 relative z-10">
          <div class={`max-w-4xl ${isArabic ? 'mr-auto text-right' : 'ml-auto text-left'}`}>
            <div class="section-badge mb-8">
              {isArabic ? 'مجالات الممارسة' : 'PRACTICE AREAS'}
            </div>
            
            <h1 class="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              {isArabic 
                ? <span>خبرة قانونية<br/><span class="text-gradient text-6xl md:text-8xl">متنوعة</span><br/>في كل المجالات</span>
                : <span>Diverse Legal<br/><span class="text-gradient text-6xl md:text-8xl">Expertise</span><br/>In All Fields</span>
              }
            </h1>
            
            <p class="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed max-w-2xl">
              {isArabic
                ? 'نتخصص في مختلف المجالات القانونية لخدمة احتياجاتكم'
                : 'We specialize in various legal fields to serve your needs'
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
              <div class="text-gray-600 font-medium text-sm uppercase tracking-wider">{isArabic ? 'مجال رئيسي' : 'Main Areas'}</div>
            </div>
            <div class="text-center">
              <div class="stat-number mb-2">1000+</div>
              <div class="text-gray-600 font-medium text-sm uppercase tracking-wider">{isArabic ? 'قضية منجزة' : 'Cases Won'}</div>
            </div>
            <div class="text-center">
              <div class="stat-number mb-2">95%</div>
              <div class="text-gray-600 font-medium text-sm uppercase tracking-wider">{isArabic ? 'نسبة النجاح' : 'Success Rate'}</div>
            </div>
            <div class="text-center">
              <div class="stat-number mb-2">15+</div>
              <div class="text-gray-600 font-medium text-sm uppercase tracking-wider">{isArabic ? 'سنة خبرة' : 'Years Exp'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section class="py-32 bg-gradient-to-b from-white to-gray-50">
        <div class="container mx-auto px-6">
          <div class="text-center mb-20">
            <div class="section-badge mb-6">
              {isArabic ? 'تخصصاتنا' : 'OUR SPECIALIZATIONS'}
            </div>
            <h2 class="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              {isArabic ? 'مجالات' : 'Legal Practice'}
              <br/>
              <span class="text-gradient">{isArabic ? 'الممارسة القانونية' : 'Areas'}</span>
            </h2>
            <div class="divider mt-6"></div>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'fa-briefcase', titleAr: 'القضايا التجارية', titleEn: 'Commercial Law', descAr: 'تأسيس الشركات والنزاعات التجارية والإفلاس', descEn: 'Company formation, commercial disputes and bankruptcy' },
              { icon: 'fa-balance-scale', titleAr: 'القضايا المدنية', titleEn: 'Civil Law', descAr: 'التعويضات والمسؤولية والمنازعات المالية', descEn: 'Compensation, liability and financial disputes' },
              { icon: 'fa-users', titleAr: 'القضايا العمالية', titleEn: 'Labor Law', descAr: 'نزاعات العمل ومستحقات الموظفين', descEn: 'Labor disputes and employee benefits' },
              { icon: 'fa-home', titleAr: 'القضايا الأسرية', titleEn: 'Family Law', descAr: 'الطلاق والحضانة والنفقة والميراث', descEn: 'Divorce, custody, alimony and inheritance' },
              { icon: 'fa-building', titleAr: 'القضايا العقارية', titleEn: 'Real Estate Law', descAr: 'البيع والشراء والإيجار والنزاعات العقارية', descEn: 'Sale, purchase, leasing and property disputes' },
              { icon: 'fa-gavel', titleAr: 'القضايا الجنائية', titleEn: 'Criminal Law', descAr: 'الدفاع في القضايا الجنائية والاستئناف', descEn: 'Criminal defense and appeals' }
            ].map((area) => (
              <div class="elegant-card p-8 group">
                <div class="service-icon mb-6">
                  <i class={`fas ${area.icon} text-white text-3xl`}></i>
                </div>
                <h3 class="text-2xl font-bold mb-4 text-gray-900">
                  {isArabic ? area.titleAr : area.titleEn}
                </h3>
                <p class="text-gray-600 text-base mb-6 leading-relaxed">
                  {isArabic ? area.descAr : area.descEn}
                </p>
                <a href={isArabic ? '/ar/contact' : '/en/contact'} 
                   class="text-gradient font-semibold text-base inline-flex items-center gap-2 hover:gap-3 transition-all">
                  <span>{isArabic ? 'استشر محامي' : 'Consult Lawyer'}</span>
                  <i class={`fas fa-arrow-${isArabic ? 'left' : 'right'}`}></i>
                </a>
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
                ? <span>هل لديك <span class="text-gradient">قضية قانونية؟</span></span>
                : <span>Have a <span class="text-gradient">Legal Case?</span></span>
              }
            </h2>
            <p class="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {isArabic
                ? 'تواصل معنا اليوم للحصول على استشارة متخصصة'
                : 'Contact us today for specialized consultation'
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
