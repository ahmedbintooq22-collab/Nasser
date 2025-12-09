import { Context } from 'hono'
import { Layout } from '../components/Layout'

export const renderServicesPage = (c: Context, lang: 'ar' | 'en') => {
  const isArabic = lang === 'ar'
  
  const title = isArabic 
    ? 'خدماتنا - ناصر شايع الهاجري'
    : 'Our Services - Nasser Shayea Al Hajeri'

  const content = (
    <>
      {/* Hero Section */}
      <section class="hero-section text-white relative py-32">
        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <div class="section-badge mb-8">
              {isArabic ? 'خدماتنا' : 'OUR SERVICES'}
            </div>
            <h1 class="text-5xl md:text-7xl font-bold mb-6">
              {isArabic 
                ? <span>خدمات قانونية <span class="text-gradient">شاملة</span></span>
                : <span>Comprehensive <span class="text-gradient">Legal Services</span></span>
              }
            </h1>
            <p class="text-xl text-gray-300 max-w-2xl mx-auto">
              {isArabic
                ? 'نقدم مجموعة متكاملة من الخدمات القانونية المتخصصة'
                : 'We provide a complete range of specialized legal services'
              }
            </p>
          </div>
        </div>
        <div class="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"></div>
        <div class="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
      </section>

      {/* Main Services Section */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-6">
          <div class="grid md:grid-cols-2 gap-10">
            {[
              { 
                icon: 'fa-gavel', 
                titleAr: 'التقاضي والترافع', 
                titleEn: 'Litigation & Advocacy',
                descAr: 'نقدم خدمات التمثيل القانوني الاحترافي أمام جميع المحاكم والهيئات القضائية في دولة الإمارات، بما في ذلك المحاكم الابتدائية والاستئنافية والتمييز.',
                descEn: 'We provide professional legal representation services before all courts and judicial bodies in the UAE, including Courts of First Instance, Appeal and Cassation.',
                features: [
                  { ar: 'التمثيل أمام المحاكم', en: 'Court Representation' },
                  { ar: 'إعداد المذكرات القانونية', en: 'Legal Briefs Preparation' },
                  { ar: 'الطعن بالأحكام', en: 'Appeals' },
                  { ar: 'تنفيذ الأحكام', en: 'Judgments Execution' }
                ]
              },
              { 
                icon: 'fa-handshake', 
                titleAr: 'الاستشارات القانونية', 
                titleEn: 'Legal Consultations',
                descAr: 'نوفر استشارات قانونية متخصصة ودقيقة في مختلف المجالات القانونية، مع تقديم الحلول العملية والفعالة لجميع المسائل القانونية.',
                descEn: 'We provide specialized and accurate legal consultations in various legal fields, offering practical and effective solutions to all legal matters.',
                features: [
                  { ar: 'استشارات تجارية', en: 'Commercial Consultations' },
                  { ar: 'استشارات مدنية', en: 'Civil Consultations' },
                  { ar: 'استشارات عمالية', en: 'Labor Consultations' },
                  { ar: 'استشارات أسرية', en: 'Family Consultations' }
                ]
              },
              { 
                icon: 'fa-file-contract', 
                titleAr: 'صياغة العقود', 
                titleEn: 'Contract Drafting',
                descAr: 'نتخصص في إعداد وصياغة جميع أنواع العقود والاتفاقيات القانونية بدقة واحترافية عالية، مع مراعاة جميع الجوانب القانونية والتنظيمية.',
                descEn: 'We specialize in preparing and drafting all types of contracts and legal agreements with high precision and professionalism, considering all legal and regulatory aspects.',
                features: [
                  { ar: 'عقود تجارية', en: 'Commercial Contracts' },
                  { ar: 'عقود عمل', en: 'Employment Contracts' },
                  { ar: 'عقود إيجار', en: 'Lease Contracts' },
                  { ar: 'اتفاقيات شراكة', en: 'Partnership Agreements' }
                ]
              },
              { 
                icon: 'fa-balance-scale', 
                titleAr: 'التحكيم التجاري', 
                titleEn: 'Commercial Arbitration',
                descAr: 'نقدم خدمات التحكيم التجاري المحلي والدولي، مع خبرة واسعة في حل النزاعات التجارية بطرق بديلة سريعة وفعالة.',
                descEn: 'We provide local and international commercial arbitration services, with extensive experience in resolving commercial disputes through fast and effective alternative methods.',
                features: [
                  { ar: 'التحكيم المحلي', en: 'Local Arbitration' },
                  { ar: 'التحكيم الدولي', en: 'International Arbitration' },
                  { ar: 'الوساطة', en: 'Mediation' },
                  { ar: 'التوفيق', en: 'Conciliation' }
                ]
              },
              { 
                icon: 'fa-money-bill-wave', 
                titleAr: 'تحصيل الديون', 
                titleEn: 'Debt Collection',
                descAr: 'نساعدك في استرداد حقوقك المالية من خلال الطرق القانونية السليمة، سواء بالطرق الودية أو عبر التقاضي.',
                descEn: 'We help you recover your financial rights through proper legal means, either amicably or through litigation.',
                features: [
                  { ar: 'التحصيل الودي', en: 'Amicable Collection' },
                  { ar: 'رفع دعاوى التحصيل', en: 'Filing Collection Lawsuits' },
                  { ar: 'التنفيذ على الأموال', en: 'Asset Execution' },
                  { ar: 'الحجز التحفظي', en: 'Precautionary Seizure' }
                ]
              },
              { 
                icon: 'fa-briefcase', 
                titleAr: 'القضايا العمالية', 
                titleEn: 'Labor Disputes',
                descAr: 'نتعامل مع جميع أنواع النزاعات العمالية، ونمثل كلاً من أصحاب العمل والعمال في المحاكم العمالية.',
                descEn: 'We handle all types of labor disputes and represent both employers and employees in labor courts.',
                features: [
                  { ar: 'نزاعات الرواتب', en: 'Salary Disputes' },
                  { ar: 'إنهاء الخدمات', en: 'Termination Cases' },
                  { ar: 'مستحقات نهاية الخدمة', en: 'End of Service Benefits' },
                  { ar: 'إصابات العمل', en: 'Work Injuries' }
                ]
              }
            ].map((service, index) => (
              <div class="elegant-card p-10">
                <div class="flex items-start gap-6 mb-6">
                  <div class="service-icon flex-shrink-0">
                    <i class={`fas ${service.icon} text-white text-3xl`}></i>
                  </div>
                  <div>
                    <h2 class="text-3xl font-bold text-gray-900 mb-3">
                      {isArabic ? service.titleAr : service.titleEn}
                    </h2>
                    <div class={`divider ${isArabic ? 'mr-0' : 'ml-0'} mb-4`}></div>
                  </div>
                </div>
                
                <p class="text-gray-700 text-base leading-relaxed mb-6">
                  {isArabic ? service.descAr : service.descEn}
                </p>

                <div class="bg-gray-50 rounded-xl p-6">
                  <h4 class="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <i class="fas fa-check-circle text-gradient"></i>
                    {isArabic ? 'نقدم:' : 'We Offer:'}
                  </h4>
                  <ul class="space-y-2">
                    {service.features.map((feature) => (
                      <li class="flex items-center gap-3 text-gray-700">
                        <i class="fas fa-chevron-left text-purple-600 text-xs"></i>
                        <span>{isArabic ? feature.ar : feature.en}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div class="mt-6 pt-6 border-t border-gray-100">
                  <a href={isArabic ? '/ar/contact' : '/en/contact'} 
                     class="text-gradient font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                    <span>{isArabic ? 'احجز استشارة' : 'Book Consultation'}</span>
                    <i class={`fas fa-arrow-${isArabic ? 'left' : 'right'}`}></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section class="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <div class="section-badge mb-6">
              {isArabic ? 'لماذا نحن' : 'WHY CHOOSE US'}
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {isArabic ? 'ما يميز' : 'What Makes'}
              <br/>
              <span class="text-gradient">{isArabic ? 'خدماتنا' : 'Our Services Different'}</span>
            </h2>
            <div class="divider mt-6"></div>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: 'fa-user-tie', 
                titleAr: 'خبرة واسعة', 
                titleEn: 'Extensive Experience',
                descAr: 'أكثر من 15 عاماً من الخبرة في مختلف المجالات القانونية'
              },
              { 
                icon: 'fa-shield-alt', 
                titleAr: 'سرية تامة', 
                titleEn: 'Complete Confidentiality',
                descAr: 'نحافظ على سرية معلومات عملائنا بشكل كامل'
              },
              { 
                icon: 'fa-chart-line', 
                titleAr: 'معدل نجاح عالي', 
                titleEn: 'High Success Rate',
                descAr: '95% معدل نجاح في القضايا التي نتعامل معها'
              },
              { 
                icon: 'fa-clock', 
                titleAr: 'استجابة سريعة', 
                titleEn: 'Quick Response',
                descAr: 'نستجيب لاستفساراتكم بسرعة وفعالية'
              },
              { 
                icon: 'fa-comments', 
                titleAr: 'تواصل مستمر', 
                titleEn: 'Continuous Communication',
                descAr: 'نبقيكم على اطلاع دائم بآخر التطورات'
              },
              { 
                icon: 'fa-dollar-sign', 
                titleAr: 'أسعار تنافسية', 
                titleEn: 'Competitive Prices',
                descAr: 'نقدم خدمات عالية الجودة بأسعار معقولة'
              }
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

      {/* CTA Section */}
      <section class="py-24 hero-section text-white relative">
        <div class="container mx-auto px-6 text-center relative z-10">
          <div class="max-w-3xl mx-auto">
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              {isArabic 
                ? <span>ابدأ <span class="text-gradient">قضيتك</span> اليوم</span>
                : <span>Start Your <span class="text-gradient">Case</span> Today</span>
              }
            </h2>
            <p class="text-xl text-gray-300 mb-10">
              {isArabic
                ? 'تواصل معنا للحصول على استشارة قانونية متخصصة'
                : 'Contact us for specialized legal consultation'
              }
            </p>
            <div class="flex flex-wrap justify-center gap-4">
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
    </>
  )

  return c.html(Layout({ title, lang, children: content }))
}
