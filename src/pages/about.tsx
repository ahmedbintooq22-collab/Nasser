import { Context } from 'hono'
import { Layout } from '../components/Layout'

export const renderAboutPage = (c: Context, lang: 'ar' | 'en') => {
  const isArabic = lang === 'ar'
  
  const title = isArabic 
    ? 'من نحن - ناصر شايع الهاجري'
    : 'About Us - Nasser Shayea Al Hajeri'

  const content = (
    <>
      {/* Hero Section */}
      <section class="hero-section text-white relative py-32">
        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <div class="section-badge mb-8">
              {isArabic ? 'من نحن' : 'ABOUT US'}
            </div>
            <h1 class="text-5xl md:text-7xl font-bold mb-6">
              {isArabic 
                ? <span>قصة <span class="text-gradient">التميز</span> والنجاح</span>
                : <span>Story of <span class="text-gradient">Excellence</span> & Success</span>
              }
            </h1>
            <p class="text-xl text-gray-300 max-w-2xl mx-auto">
              {isArabic
                ? 'رحلة امتدت لأكثر من 15 عاماً في تقديم الخدمات القانونية المتميزة'
                : 'A journey spanning over 15 years providing distinguished legal services'
              }
            </p>
          </div>
        </div>
        <div class="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"></div>
        <div class="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
      </section>

      {/* Main About Section */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-6">
          <div class="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div class={isArabic ? 'lg:order-2' : 'lg:order-1'}>
              <div class="gradient-border">
                <div class="gradient-border-inner p-0 overflow-hidden">
                  <img src="/static/lawyer-photo.jpg" 
                       alt={isArabic ? 'المحامي ناصر شايع الهاجري' : 'Lawyer Nasser Shayea Al Hajeri'} 
                       class="w-full object-cover aspect-square rounded-xl"/>
                </div>
              </div>
            </div>
            
            <div class={`${isArabic ? 'lg:order-1 text-right' : 'lg:order-2 text-left'}`}>
              <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                {isArabic ? 'المحامي ناصر شايع الهاجري' : 'Lawyer Nasser Shayea Al Hajeri'}
              </h2>
              
              <div class={`divider mb-8 ${isArabic ? 'mr-0' : 'ml-0'}`}></div>
              
              <p class="text-gray-700 text-lg mb-6 leading-relaxed">
                {isArabic
                  ? 'محامٍ ومستشار قانوني معتمد في دولة الإمارات العربية المتحدة، حاصل على درجة البكالوريوس في القانون ومرخص لمزاولة المهنة أمام جميع المحاكم في الدولة.'
                  : 'Certified lawyer and legal consultant in the United Arab Emirates, holding a Bachelor\'s degree in Law and licensed to practice before all courts in the country.'
                }
              </p>
              
              <p class="text-gray-600 text-base mb-6 leading-relaxed">
                {isArabic
                  ? 'يتمتع بخبرة واسعة تمتد لأكثر من 15 عاماً في مختلف المجالات القانونية، بما في ذلك القضايا التجارية والمدنية والعمالية والأسرية.'
                  : 'Has extensive experience spanning over 15 years in various legal fields, including commercial, civil, labor and family cases.'
                }
              </p>

              <p class="text-gray-600 text-base mb-8 leading-relaxed">
                {isArabic
                  ? 'يتميز بالاحترافية العالية والدقة في العمل والالتزام بأعلى معايير الجودة في تقديم الخدمات القانونية.'
                  : 'Distinguished by high professionalism, precision in work and commitment to the highest quality standards in providing legal services.'
                }
              </p>

              <div class="flex flex-wrap gap-4">
                <a href={isArabic ? '/ar/contact' : '/en/contact'} class="btn-primary inline-flex items-center gap-3">
                  <i class="fas fa-calendar-check"></i>
                  <span>{isArabic ? 'احجز استشارة' : 'Book Consultation'}</span>
                </a>
                <a href="tel:+971501234567" class="btn-secondary inline-flex items-center gap-3">
                  <i class="fas fa-phone"></i>
                  <span>{isArabic ? 'اتصل بنا' : 'Call Us'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section class="py-20 bg-gradient-to-b from-white to-gray-50">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <div class="section-badge mb-6">
              {isArabic ? 'إنجازاتنا' : 'OUR ACHIEVEMENTS'}
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900">
              {isArabic ? 'أرقام' : 'Numbers'}
              <br/>
              <span class="text-gradient">{isArabic ? 'تتحدث عن نفسها' : 'Speak For Themselves'}</span>
            </h2>
            <div class="divider mt-6"></div>
          </div>

          <div class="grid md:grid-cols-4 gap-8">
            <div class="elegant-card p-8 text-center">
              <div class="stat-number mb-3">15+</div>
              <div class="text-gray-600 font-semibold text-sm uppercase tracking-wider">{isArabic ? 'سنة خبرة' : 'Years Experience'}</div>
            </div>
            <div class="elegant-card p-8 text-center">
              <div class="stat-number mb-3">500+</div>
              <div class="text-gray-600 font-semibold text-sm uppercase tracking-wider">{isArabic ? 'عميل سعيد' : 'Happy Clients'}</div>
            </div>
            <div class="elegant-card p-8 text-center">
              <div class="stat-number mb-3">95%</div>
              <div class="text-gray-600 font-semibold text-sm uppercase tracking-wider">{isArabic ? 'معدل النجاح' : 'Success Rate'}</div>
            </div>
            <div class="elegant-card p-8 text-center">
              <div class="stat-number mb-3">1K+</div>
              <div class="text-gray-600 font-semibold text-sm uppercase tracking-wider">{isArabic ? 'قضية منجزة' : 'Cases Won'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <div class="section-badge mb-6">
              {isArabic ? 'خبراتنا' : 'OUR EXPERTISE'}
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {isArabic ? 'مجالات' : 'Areas of'}
              <br/>
              <span class="text-gradient">{isArabic ? 'التخصص' : 'Specialization'}</span>
            </h2>
            <div class="divider mt-6"></div>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'fa-briefcase', titleAr: 'القضايا التجارية', titleEn: 'Commercial Cases' },
              { icon: 'fa-balance-scale', titleAr: 'القضايا المدنية', titleEn: 'Civil Cases' },
              { icon: 'fa-users', titleAr: 'القضايا العمالية', titleEn: 'Labor Cases' },
              { icon: 'fa-home', titleAr: 'القضايا الأسرية', titleEn: 'Family Cases' },
              { icon: 'fa-building', titleAr: 'القضايا العقارية', titleEn: 'Real Estate Cases' },
              { icon: 'fa-handshake', titleAr: 'التحكيم والوساطة', titleEn: 'Arbitration & Mediation' }
            ].map((item) => (
              <div class="elegant-card p-6 flex items-center gap-4">
                <div class="service-icon w-14 h-14">
                  <i class={`fas ${item.icon} text-white text-2xl`}></i>
                </div>
                <h3 class="text-lg font-bold text-gray-900">
                  {isArabic ? item.titleAr : item.titleEn}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section class="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <div class="section-badge mb-6">
              {isArabic ? 'قيمنا' : 'OUR VALUES'}
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {isArabic ? 'ما يميزنا' : 'What Sets'}
              <br/>
              <span class="text-gradient">{isArabic ? 'عن الآخرين' : 'Us Apart'}</span>
            </h2>
            <div class="divider mt-6"></div>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: 'fa-award', 
                titleAr: 'الاحترافية', 
                titleEn: 'Professionalism',
                descAr: 'نلتزم بأعلى معايير الاحترافية في جميع خدماتنا',
                descEn: 'We adhere to the highest standards of professionalism in all our services'
              },
              { 
                icon: 'fa-shield-alt', 
                titleAr: 'السرية', 
                titleEn: 'Confidentiality',
                descAr: 'نحافظ على سرية معلومات عملائنا بشكل تام',
                descEn: 'We maintain complete confidentiality of our clients information'
              },
              { 
                icon: 'fa-clock', 
                titleAr: 'الالتزام', 
                titleEn: 'Commitment',
                descAr: 'نلتزم بمواعيدنا ونحترم وقت عملائنا',
                descEn: 'We honor our appointments and respect our clients time'
              }
            ].map((value) => (
              <div class="elegant-card p-8 text-center">
                <div class="service-icon mx-auto mb-6">
                  <i class={`fas ${value.icon} text-white text-3xl`}></i>
                </div>
                <h3 class="text-2xl font-bold mb-4 text-gray-900">
                  {isArabic ? value.titleAr : value.titleEn}
                </h3>
                <p class="text-gray-600 text-base leading-relaxed">
                  {isArabic ? value.descAr : value.descEn}
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
                ? <span>هل تحتاج <span class="text-gradient">استشارة قانونية؟</span></span>
                : <span>Need <span class="text-gradient">Legal Consultation?</span></span>
              }
            </h2>
            <p class="text-xl text-gray-300 mb-10">
              {isArabic
                ? 'تواصل معنا الآن واحصل على استشارة متخصصة'
                : 'Contact us now and get specialized consultation'
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
