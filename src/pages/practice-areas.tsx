import { Context } from 'hono'
import { Layout } from '../components/Layout'

export const renderPracticeAreasPage = (c: Context, lang: 'ar' | 'en') => {
  const isArabic = lang === 'ar'
  
  const title = isArabic 
    ? 'مجالات الممارسة - ناصر شايع الهاجري'
    : 'Practice Areas - Nasser Shayea Al Hajeri'

  const content = (
    <>
      {/* Hero Section */}
      <section class="hero-section text-white relative py-32">
        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <div class="section-badge mb-8">
              {isArabic ? 'مجالات الممارسة' : 'PRACTICE AREAS'}
            </div>
            <h1 class="text-5xl md:text-7xl font-bold mb-6">
              {isArabic 
                ? <span>خبرة قانونية <span class="text-gradient">متنوعة</span></span>
                : <span>Diverse Legal <span class="text-gradient">Expertise</span></span>
              }
            </h1>
            <p class="text-xl text-gray-300 max-w-2xl mx-auto">
              {isArabic
                ? 'نتخصص في مختلف المجالات القانونية لخدمة احتياجاتكم'
                : 'We specialize in various legal fields to serve your needs'
              }
            </p>
          </div>
        </div>
        <div class="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"></div>
        <div class="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
      </section>

      {/* Practice Areas Grid */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-6">
          <div class="grid lg:grid-cols-2 gap-10">
            {[
              {
                icon: 'fa-briefcase',
                titleAr: 'القضايا التجارية',
                titleEn: 'Commercial Law',
                descAr: 'نقدم خدمات قانونية شاملة في مجال القانون التجاري، بما في ذلك تأسيس الشركات، النزاعات التجارية، الإفلاس والتصفية.',
                descEn: 'We provide comprehensive legal services in commercial law, including company formation, commercial disputes, bankruptcy and liquidation.',
                services: [
                  { ar: 'تأسيس الشركات', en: 'Company Formation' },
                  { ar: 'النزاعات التجارية', en: 'Commercial Disputes' },
                  { ar: 'الإفلاس والتصفية', en: 'Bankruptcy & Liquidation' },
                  { ar: 'الشراكات التجارية', en: 'Business Partnerships' },
                  { ar: 'التراخيص التجارية', en: 'Commercial Licenses' }
                ]
              },
              {
                icon: 'fa-balance-scale',
                titleAr: 'القضايا المدنية',
                titleEn: 'Civil Law',
                descAr: 'نتعامل مع جميع أنواع القضايا المدنية بما فيها التعويضات، المسؤولية التقصيرية، والمنازعات المالية.',
                descEn: 'We handle all types of civil cases including compensation, torts, and financial disputes.',
                services: [
                  { ar: 'قضايا التعويضات', en: 'Compensation Cases' },
                  { ar: 'المسؤولية التقصيرية', en: 'Tort Liability' },
                  { ar: 'المنازعات المالية', en: 'Financial Disputes' },
                  { ar: 'الضرر والخسائر', en: 'Damages & Losses' },
                  { ar: 'دعاوى الحقوق', en: 'Rights Lawsuits' }
                ]
              },
              {
                icon: 'fa-users',
                titleAr: 'القضايا العمالية',
                titleEn: 'Labor Law',
                descAr: 'نمثل أصحاب العمل والموظفين في النزاعات العمالية، ونقدم استشارات في قانون العمل الإماراتي.',
                descEn: 'We represent employers and employees in labor disputes and provide consultations on UAE labor law.',
                services: [
                  { ar: 'نزاعات الرواتب', en: 'Salary Disputes' },
                  { ar: 'إنهاء الخدمات', en: 'Termination Cases' },
                  { ar: 'مستحقات نهاية الخدمة', en: 'End of Service Benefits' },
                  { ar: 'إصابات العمل', en: 'Work Injuries' },
                  { ar: 'عقود العمل', en: 'Employment Contracts' }
                ]
              },
              {
                icon: 'fa-home',
                titleAr: 'القضايا الأسرية',
                titleEn: 'Family Law',
                descAr: 'نتعامل بحساسية مع قضايا الأسرة بما فيها الطلاق، الحضانة، النفقة، والميراث.',
                descEn: 'We sensitively handle family cases including divorce, custody, alimony, and inheritance.',
                services: [
                  { ar: 'قضايا الطلاق', en: 'Divorce Cases' },
                  { ar: 'حضانة الأطفال', en: 'Child Custody' },
                  { ar: 'النفقة', en: 'Alimony' },
                  { ar: 'قضايا الميراث', en: 'Inheritance Cases' },
                  { ar: 'الزيارة والرؤية', en: 'Visitation Rights' }
                ]
              },
              {
                icon: 'fa-building',
                titleAr: 'القضايا العقارية',
                titleEn: 'Real Estate Law',
                descAr: 'نقدم خدمات قانونية متكاملة في مجال العقارات بما في ذلك البيع والشراء، الإيجار، والنزاعات العقارية.',
                descEn: 'We provide comprehensive legal services in real estate including buying & selling, leasing, and property disputes.',
                services: [
                  { ar: 'عقود البيع والشراء', en: 'Sale & Purchase Contracts' },
                  { ar: 'عقود الإيجار', en: 'Lease Contracts' },
                  { ar: 'النزاعات العقارية', en: 'Property Disputes' },
                  { ar: 'التسجيل العقاري', en: 'Property Registration' },
                  { ar: 'إخلاء العقارات', en: 'Property Eviction' }
                ]
              },
              {
                icon: 'fa-university',
                titleAr: 'القضايا الجنائية',
                titleEn: 'Criminal Law',
                descAr: 'نمثل العملاء في القضايا الجنائية ونقدم الدفاع القانوني في مختلف أنواع الجرائم.',
                descEn: 'We represent clients in criminal cases and provide legal defense in various types of crimes.',
                services: [
                  { ar: 'الجرائم المالية', en: 'Financial Crimes' },
                  { ar: 'جرائم الإنترنت', en: 'Cybercrime' },
                  { ar: 'القضايا الجنائية', en: 'Criminal Cases' },
                  { ar: 'الاستئناف الجنائي', en: 'Criminal Appeals' },
                  { ar: 'الدفاع القانوني', en: 'Legal Defense' }
                ]
              }
            ].map((area) => (
              <div class="elegant-card p-10">
                <div class="flex items-start gap-6 mb-6">
                  <div class="service-icon flex-shrink-0">
                    <i class={`fas ${area.icon} text-white text-3xl`}></i>
                  </div>
                  <div>
                    <h2 class="text-3xl font-bold text-gray-900 mb-3">
                      {isArabic ? area.titleAr : area.titleEn}
                    </h2>
                    <div class={`divider ${isArabic ? 'mr-0' : 'ml-0'} mb-4`}></div>
                  </div>
                </div>
                
                <p class="text-gray-700 text-base leading-relaxed mb-6">
                  {isArabic ? area.descAr : area.descEn}
                </p>

                <div class="space-y-3">
                  {area.services.map((service) => (
                    <div class="flex items-center gap-3 text-gray-700">
                      <div class="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
                      <span>{isArabic ? service.ar : service.en}</span>
                    </div>
                  ))}
                </div>

                <div class="mt-8 pt-6 border-t border-gray-100">
                  <a href={isArabic ? '/ar/contact' : '/en/contact'} 
                     class="text-gradient font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                    <span>{isArabic ? 'استشر محامي' : 'Consult Lawyer'}</span>
                    <i class={`fas fa-arrow-${isArabic ? 'left' : 'right'}`}></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section class="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <div class="section-badge mb-6">
              {isArabic ? 'كيف نعمل' : 'HOW WE WORK'}
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {isArabic ? 'خطوات' : 'Steps to'}
              <br/>
              <span class="text-gradient">{isArabic ? 'العمل معنا' : 'Work With Us'}</span>
            </h2>
            <div class="divider mt-6"></div>
          </div>

          <div class="grid md:grid-cols-4 gap-6">
            {[
              { 
                number: '01',
                icon: 'fa-phone-alt',
                titleAr: 'تواصل معنا', 
                titleEn: 'Contact Us',
                descAr: 'اتصل أو احجز موعداً للاستشارة'
              },
              { 
                number: '02',
                icon: 'fa-comments',
                titleAr: 'الاستشارة', 
                titleEn: 'Consultation',
                descAr: 'نستمع لقضيتك ونفهم احتياجاتك'
              },
              { 
                number: '03',
                icon: 'fa-file-signature',
                titleAr: 'التخطيط', 
                titleEn: 'Planning',
                descAr: 'نضع خطة عمل واضحة ومحددة'
              },
              { 
                number: '04',
                icon: 'fa-gavel',
                titleAr: 'التنفيذ', 
                titleEn: 'Execution',
                descAr: 'نبدأ العمل على قضيتك باحترافية'
              }
            ].map((step) => (
              <div class="elegant-card p-8 text-center relative">
                <div class="text-6xl font-bold text-gradient mb-4 opacity-20">
                  {step.number}
                </div>
                <div class="service-icon mx-auto mb-6 w-16 h-16">
                  <i class={`fas ${step.icon} text-white text-2xl`}></i>
                </div>
                <h3 class="text-xl font-bold mb-3 text-gray-900">
                  {isArabic ? step.titleAr : step.titleEn}
                </h3>
                <p class="text-gray-600 text-sm">
                  {isArabic ? step.descAr : step.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-24 hero-section text-white relative">
        <div class="container mx-auto px-6 text-center relative z-10">
          <div class="max-w-3xl mx-auto">
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              {isArabic 
                ? <span>هل لديك <span class="text-gradient">قضية قانونية؟</span></span>
                : <span>Do You Have a <span class="text-gradient">Legal Case?</span></span>
              }
            </h2>
            <p class="text-xl text-gray-300 mb-10">
              {isArabic
                ? 'تواصل معنا اليوم للحصول على استشارة متخصصة'
                : 'Contact us today for specialized consultation'
              }
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <a href={isArabic ? '/ar/contact' : '/en/contact'} class="btn-primary inline-flex items-center gap-3">
                <i class="fas fa-calendar-check"></i>
                <span>{isArabic ? 'احجز موعد' : 'Book Appointment'}</span>
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
    </>
  )

  return c.html(Layout({ title, lang, children: content }))
}
