import { Context } from 'hono'
import { Layout } from '../components/Layout'

export const renderHomePage = (c: Context, lang: 'ar' | 'en') => {
  const isArabic = lang === 'ar'
  
  const title = isArabic 
    ? 'ناصر شايع الهاجري - محامي واستشاري قانوني في مدينة العين'
    : 'Nasser Shayea Al Hajeri - Lawyer and Legal Consultant in Al Ain'

  const content = (
    <>
      {/* Hero Section */}
      <section class="hero-gradient text-white relative">
        <div class="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <div class={`max-w-4xl ${isArabic ? 'mr-auto text-right' : 'ml-auto text-left'}`}>
            <div class="inline-flex items-center gap-3 mb-8 bg-white bg-opacity-10 px-6 py-3 rounded-full backdrop-blur-sm">
              <i class="fas fa-balance-scale text-gold text-xl"></i>
              <span class="text-white font-semibold text-lg">
                {isArabic ? 'محامي واستشاري قانوني معتمد' : 'Licensed Lawyer and Legal Consultant'}
              </span>
            </div>
            
            <h1 class="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              {isArabic 
                ? <span>نحمي حقوقك<br/><span class="text-gold">القانونية</span></span>
                : <span>Protecting Your<br/><span class="text-gold">Legal Rights</span></span>
              }
            </h1>
            
            <p class="text-xl md:text-2xl mb-10 text-gray-100 leading-relaxed max-w-2xl">
              {isArabic
                ? 'مكتب محاماة واستشارات قانونية في مدينة العين، نقدم خدمات قانونية متخصصة بخبرة تتجاوز 15 عاماً'
                : 'Law Office and Legal Consultancy in Al Ain City, providing specialized legal services with over 15 years of experience'
              }
            </p>
            
            <div class="flex flex-wrap gap-4">
              <a href={isArabic ? '/ar/contact' : '/en/contact'} 
                 class="gold-bg text-white px-10 py-5 rounded-full font-bold text-lg hover-gold transition inline-flex items-center gap-3 shadow-2xl">
                <i class="fas fa-envelope text-xl"></i>
                <span>{isArabic ? 'استشارة قانونية' : 'Legal Consultation'}</span>
              </a>
              <a href="tel:+971501234567" 
                 class="bg-white text-dark-green px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition inline-flex items-center gap-3">
                <i class="fas fa-phone text-xl"></i>
                <span>{isArabic ? 'اتصل الآن' : 'Call Now'}</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative Wave */}
        <div class="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section class="py-12 bg-gray-50 border-y border-gray-200">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="text-5xl font-bold text-dark-green mb-2">15+</div>
              <div class="text-gray-600 font-medium">{isArabic ? 'سنة خبرة' : 'Years Experience'}</div>
            </div>
            <div class="text-center">
              <div class="text-5xl font-bold text-dark-green mb-2">500+</div>
              <div class="text-gray-600 font-medium">{isArabic ? 'عميل راضٍ' : 'Satisfied Clients'}</div>
            </div>
            <div class="text-center">
              <div class="text-5xl font-bold text-dark-green mb-2">95%</div>
              <div class="text-gray-600 font-medium">{isArabic ? 'نسبة النجاح' : 'Success Rate'}</div>
            </div>
            <div class="text-center">
              <div class="text-5xl font-bold text-dark-green mb-2">1000+</div>
              <div class="text-gray-600 font-medium">{isArabic ? 'قضية ناجحة' : 'Successful Cases'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About/Founder Section */}
      <section class="py-20 md:py-32 bg-white">
        <div class="container mx-auto px-6">
          <div class="grid md:grid-cols-2 gap-16 items-center">
            <div class={isArabic ? 'md:order-2' : 'md:order-1'}>
              <div class="relative">
                <div class={`absolute -top-6 -${isArabic ? 'right' : 'left'}-6 w-72 h-72 bg-gold opacity-10 rounded-3xl`}></div>
                <img src="/static/lawyer-photo.jpg" 
                     alt={isArabic ? 'المحامي ناصر شايع الهاجري' : 'Lawyer Nasser Shayea Al Hajeri'} 
                     class="relative rounded-3xl shadow-2xl w-full object-cover aspect-square"/>
              </div>
            </div>
            
            <div class={`${isArabic ? 'md:order-1 text-right' : 'md:order-2 text-left'}`}>
              <div class="inline-block mb-6">
                <span class="text-gold font-bold text-sm uppercase tracking-wider px-4 py-2 bg-gold bg-opacity-10 rounded-full">
                  {isArabic ? 'المؤسس' : 'The Founder'}
                </span>
              </div>
              
              <h2 class="text-4xl md:text-5xl font-bold mb-6 text-dark-green">
                {isArabic ? 'ناصر شايع الهاجري' : 'Nasser Shayea Al Hajeri'}
              </h2>
              
              <div class={`section-divider ${isArabic ? 'mr-0' : 'ml-0'}`}></div>
              
              <p class="text-gray-700 text-xl mb-6 leading-relaxed">
                {isArabic
                  ? 'محامي ومستشار قانوني معتمد في دولة الإمارات العربية المتحدة، يتمتع بخبرة واسعة تزيد عن 15 عاماً في مختلف المجالات القانونية والقضائية.'
                  : 'Licensed Lawyer and Legal Consultant in the United Arab Emirates, with extensive experience of over 15 years in various legal and judicial fields.'
                }
              </p>
              
              <p class="text-gray-600 text-lg mb-8 leading-relaxed">
                {isArabic
                  ? 'نقدم خدمات قانونية شاملة تشمل التقاضي، الاستشارات القانونية، صياغة العقود، التحكيم، وحل النزاعات بأعلى معايير الاحترافية.'
                  : 'We provide comprehensive legal services including litigation, legal consultations, contract drafting, arbitration, and dispute resolution with the highest standards of professionalism.'
                }
              </p>
              
              <a href={isArabic ? '/ar/about' : '/en/about'} 
                 class="inline-flex items-center gap-3 text-gold font-bold text-lg hover:gap-4 transition-all group">
                <span>{isArabic ? 'اقرأ المزيد' : 'Read More'}</span>
                <i class={`fas fa-arrow-${isArabic ? 'left' : 'right'} group-hover:translate-x-${isArabic ? '-' : ''}1 transition-transform`}></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section class="py-20 md:py-32 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <span class="text-gold font-bold text-sm uppercase tracking-wider px-4 py-2 bg-white rounded-full inline-block mb-4">
              {isArabic ? 'ما نقدمه' : 'What We Offer'}
            </span>
            <h2 class="text-4xl md:text-6xl font-bold text-dark-green mb-6">
              {isArabic ? 'خدماتنا القانونية' : 'Our Legal Services'}
            </h2>
            <div class="section-divider"></div>
            <p class="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              {isArabic
                ? 'نقدم مجموعة شاملة من الخدمات القانونية المتخصصة لحماية حقوقكم وتحقيق مصالحكم'
                : 'We offer a comprehensive range of specialized legal services to protect your rights and achieve your interests'
              }
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'fa-gavel', titleAr: 'التقاضي والترافع', titleEn: 'Litigation & Advocacy', descAr: 'تمثيل قانوني احترافي أمام جميع المحاكم والهيئات القضائية في دولة الإمارات', descEn: 'Professional legal representation before all courts and judicial bodies in the UAE' },
              { icon: 'fa-handshake', titleAr: 'الاستشارات القانونية', titleEn: 'Legal Consultations', descAr: 'استشارات قانونية متخصصة لحماية مصالحكم وتوجيهكم نحو القرارات الصحيحة', descEn: 'Specialized legal consultations to protect your interests and guide you towards the right decisions' },
              { icon: 'fa-file-contract', titleAr: 'صياغة العقود', titleEn: 'Contract Drafting', descAr: 'إعداد وصياغة جميع أنواع العقود والاتفاقيات القانونية بدقة واحترافية', descEn: 'Preparing and drafting all types of contracts and legal agreements with precision and professionalism' },
              { icon: 'fa-users', titleAr: 'التحكيم وحل النزاعات', titleEn: 'Arbitration & Dispute Resolution', descAr: 'حل النزاعات بطرق ودية وفعالة من خلال التحكيم والوساطة', descEn: 'Resolving disputes through friendly and effective arbitration and mediation methods' },
              { icon: 'fa-money-bill-wave', titleAr: 'تحصيل الديون', titleEn: 'Debt Collection', descAr: 'استرداد حقوقكم المالية بطرق قانونية فعالة وسريعة', descEn: 'Recovering your financial rights through effective and swift legal methods' },
              { icon: 'fa-briefcase', titleAr: 'القضايا العمالية', titleEn: 'Labor Cases', descAr: 'حماية حقوق العمال وأصحاب العمل وفقاً لقانون العمل الإماراتي', descEn: 'Protecting the rights of workers and employers according to UAE labor law' }
            ].map((service) => (
              <div class="service-card rounded-2xl p-8 group">
                <div class="w-20 h-20 gold-bg rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <i class={`fas ${service.icon} text-white text-3xl`}></i>
                </div>
                <h3 class="text-2xl font-bold mb-4 text-dark-green">
                  {isArabic ? service.titleAr : service.titleEn}
                </h3>
                <p class="text-gray-600 mb-6 leading-relaxed">
                  {isArabic ? service.descAr : service.descEn}
                </p>
                <a href={isArabic ? '/ar/services' : '/en/services'} 
                   class="text-gold font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  <span>{isArabic ? 'عرض المزيد' : 'Learn More'}</span>
                  <i class={`fas fa-arrow-${isArabic ? 'left' : 'right'}`}></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="hero-gradient text-white py-20 md:py-28 relative">
        <div class="container mx-auto px-6 text-center relative z-10">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            {isArabic ? 'هل تحتاج إلى استشارة قانونية؟' : 'Do You Need Legal Consultation?'}
          </h2>
          <p class="text-xl md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto leading-relaxed">
            {isArabic
              ? 'في مكتبنا في مدينة العين نرحب بتواصلك لأي استشارة قانونية. نحن هنا لحماية حقوقك'
              : 'At our office in Al Ain City, we welcome your contact for any legal consultation. We are here to protect your rights'
            }
          </p>
          
          <div class="flex flex-wrap justify-center gap-4">
            <a href="tel:+971501234567" 
               class="bg-white text-dark-green px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition inline-flex items-center gap-3">
              <i class="fas fa-phone text-xl"></i>
              <span>{isArabic ? 'اتصل الآن' : 'Call Now'}</span>
            </a>
            <a href="https://wa.me/971501234567" target="_blank" 
               class="bg-green-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-green-700 transition inline-flex items-center gap-3 shadow-xl">
              <i class="fab fa-whatsapp text-xl"></i>
              <span>{isArabic ? 'واتساب' : 'WhatsApp'}</span>
            </a>
            <a href={isArabic ? '/ar/contact' : '/en/contact'} 
               class="gold-bg text-white px-10 py-5 rounded-full font-bold text-lg hover-gold transition inline-flex items-center gap-3 shadow-xl">
              <i class="fas fa-envelope text-xl"></i>
              <span>{isArabic ? 'نموذج التواصل' : 'Contact Form'}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )

  return c.html(Layout({ title, lang, children: content }))
}
