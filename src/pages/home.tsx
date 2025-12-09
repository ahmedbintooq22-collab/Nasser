import { Context } from 'hono'
import { Layout } from '../components/Layout'

export const renderHomePage = (c: Context, lang: 'ar' | 'en') => {
  const isArabic = lang === 'ar'
  
  const title = isArabic 
    ? 'ناصر شايع الهاجري - محامي واستشاري قانوني في مدينة العين'
    : 'Nasser Shayea Al Hajeri - Lawyer and Legal Consultant in Al Ain'

  const content = (
    <>
      {/* Hero Section - Ultra Luxury */}
      <section class="hero-gradient text-white relative min-h-screen flex items-center">
        <div class="container mx-auto px-6 py-32 relative z-10">
          <div class={`max-w-5xl ${isArabic ? 'mr-auto text-right' : 'ml-auto text-left'}`}>
            <div class="inline-flex items-center gap-4 mb-10 bg-gradient-to-r from-transparent via-gold via-transparent to-transparent bg-opacity-10 px-8 py-4 rounded-full backdrop-blur-lg border border-gold border-opacity-30">
              <i class="fas fa-shield-alt text-gold text-2xl"></i>
              <span class="text-gold font-bold text-xl tracking-wider">
                {isArabic ? 'محامي واستشاري قانوني معتمد' : 'CERTIFIED LEGAL CONSULTANT'}
              </span>
            </div>
            
            <h1 class="text-6xl md:text-8xl font-bold mb-10 leading-tight">
              {isArabic 
                ? <span>نحمي<br/><span class="gold-text text-7xl md:text-9xl">حقوقك</span><br/>بفخامة</span>
                : <span>Protecting<br/><span class="gold-text text-7xl md:text-9xl">Your Rights</span><br/>With Excellence</span>
              }
            </h1>
            
            <p class="text-2xl md:text-3xl mb-12 text-gray-300 leading-relaxed max-w-3xl font-light">
              {isArabic
                ? 'خدمات قانونية فاخرة وحصرية لنخبة رجال الأعمال والمستثمرين في الإمارات'
                : 'Exclusive luxury legal services for elite businessmen and investors in the UAE'
              }
            </p>
            
            <div class="flex flex-wrap gap-6">
              <a href={isArabic ? '/ar/contact' : '/en/contact'} 
                 class="gold-bg text-black px-12 py-6 rounded-full font-bold text-xl hover-gold transition inline-flex items-center gap-4 shadow-2xl">
                <i class="fas fa-calendar-check text-2xl"></i>
                <span>{isArabic ? 'احجز استشارة خاصة' : 'Book Private Consultation'}</span>
              </a>
              <a href="tel:+971501234567" 
                 class="bg-transparent border-2 border-gold text-gold px-12 py-6 rounded-full font-bold text-xl hover:bg-gold hover:text-black transition inline-flex items-center gap-4">
                <i class="fas fa-phone text-2xl"></i>
                <span>{isArabic ? 'اتصل مباشرة' : 'Direct Call'}</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Luxury Decorative Elements */}
        <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        <div class="absolute top-20 right-10 w-96 h-96 bg-gold opacity-5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-10 w-96 h-96 bg-gold opacity-5 rounded-full blur-3xl"></div>
      </section>

      {/* Premium Stats Bar */}
      <section class="py-16 bg-gradient-to-b from-black via-gray-900 to-black border-y border-gold border-opacity-20">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div class="text-center group">
              <div class="text-6xl md:text-7xl font-bold gold-text mb-3 group-hover:scale-110 transition-transform">15+</div>
              <div class="text-gray-400 font-semibold text-lg tracking-wider">{isArabic ? 'سنة تميّز' : 'YEARS OF EXCELLENCE'}</div>
            </div>
            <div class="text-center group">
              <div class="text-6xl md:text-7xl font-bold gold-text mb-3 group-hover:scale-110 transition-transform">500+</div>
              <div class="text-gray-400 font-semibold text-lg tracking-wider">{isArabic ? 'عميل نخبوي' : 'ELITE CLIENTS'}</div>
            </div>
            <div class="text-center group">
              <div class="text-6xl md:text-7xl font-bold gold-text mb-3 group-hover:scale-110 transition-transform">95%</div>
              <div class="text-gray-400 font-semibold text-lg tracking-wider">{isArabic ? 'نسبة النجاح' : 'SUCCESS RATE'}</div>
            </div>
            <div class="text-center group">
              <div class="text-6xl md:text-7xl font-bold gold-text mb-3 group-hover:scale-110 transition-transform">1000+</div>
              <div class="text-gray-400 font-semibold text-lg tracking-wider">{isArabic ? 'قضية منجزة' : 'CASES WON'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About/Founder Section - Luxury */}
      <section class="py-32 bg-black">
        <div class="container mx-auto px-6">
          <div class="grid md:grid-cols-2 gap-20 items-center">
            <div class={isArabic ? 'md:order-2' : 'md:order-1'}>
              <div class="relative">
                <div class="absolute -inset-4 bg-gradient-to-r from-gold via-yellow-500 to-gold opacity-20 blur-2xl"></div>
                <div class="relative overflow-hidden rounded-3xl border-2 border-gold border-opacity-40">
                  <img src="/static/lawyer-photo.jpg" 
                       alt={isArabic ? 'المحامي ناصر شايع الهاجري' : 'Lawyer Nasser Shayea Al Hajeri'} 
                       class="relative w-full object-cover aspect-square"/>
                  <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                </div>
              </div>
            </div>
            
            <div class={`${isArabic ? 'md:order-1 text-right' : 'md:order-2 text-left'}`}>
              <div class="inline-block mb-8">
                <span class="gold-text font-bold text-sm uppercase tracking-widest px-6 py-3 border border-gold border-opacity-50 rounded-full">
                  {isArabic ? 'المؤسس' : 'THE FOUNDER'}
                </span>
              </div>
              
              <h2 class="text-5xl md:text-6xl font-bold mb-8 text-white">
                <span class="gold-text">{isArabic ? 'ناصر شايع' : 'Nasser Shayea'}</span>
                <br/>
                {isArabic ? 'الهاجري' : 'Al Hajeri'}
              </h2>
              
              <div class="section-divider"></div>
              
              <p class="text-gray-300 text-2xl mb-8 leading-relaxed font-light">
                {isArabic
                  ? 'محامٍ ومستشار قانوني نخبوي معتمد في دولة الإمارات، يُقدم خدمات قانونية استثنائية لكبار رجال الأعمال والمستثمرين.'
                  : 'Elite certified lawyer and legal consultant in the UAE, providing exceptional legal services to top businessmen and investors.'
                }
              </p>
              
              <p class="text-gray-400 text-xl mb-10 leading-relaxed font-light">
                {isArabic
                  ? 'مع أكثر من 15 عاماً من الخبرة المتميزة، نضمن حماية مصالحكم بأعلى معايير الاحترافية والسرية.'
                  : 'With over 15 years of distinguished experience, we guarantee the protection of your interests with the highest standards of professionalism and confidentiality.'
                }
              </p>
              
              <a href={isArabic ? '/ar/about' : '/en/about'} 
                 class="inline-flex items-center gap-4 gold-text font-bold text-xl hover:gap-5 transition-all group border-b-2 border-gold pb-2">
                <span>{isArabic ? 'السيرة الكاملة' : 'Full Biography'}</span>
                <i class={`fas fa-arrow-${isArabic ? 'left' : 'right'} text-2xl`}></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Luxury Cards */}
      <section class="py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div class="container mx-auto px-6">
          <div class="text-center mb-20">
            <span class="gold-text font-bold text-sm uppercase tracking-widest px-6 py-3 border border-gold border-opacity-50 rounded-full inline-block mb-6">
              {isArabic ? 'خدماتنا الحصرية' : 'EXCLUSIVE SERVICES'}
            </span>
            <h2 class="text-5xl md:text-7xl font-bold text-white mb-8">
              {isArabic ? 'حلول قانونية' : 'Premium Legal'}
              <br/>
              <span class="gold-text">{isArabic ? 'متميزة' : 'Solutions'}</span>
            </h2>
            <div class="section-divider"></div>
            <p class="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed font-light">
              {isArabic
                ? 'نقدم خدمات قانونية فاخرة مصممة خصيصاً لتلبية احتياجات كبار الشخصيات والمستثمرين'
                : 'We offer luxury legal services specifically designed to meet the needs of VIPs and investors'
              }
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: 'fa-gavel', titleAr: 'التقاضي النخبوي', titleEn: 'Elite Litigation', descAr: 'تمثيل قانوني حصري أمام أعلى المحاكم مع ضمان السرية التامة', descEn: 'Exclusive legal representation before the highest courts with complete confidentiality' },
              { icon: 'fa-handshake', titleAr: 'استشارات خاصة', titleEn: 'Private Consultations', descAr: 'جلسات استشارية خاصة ومخصصة لحماية استثماراتك ومصالحك', descEn: 'Private customized consultation sessions to protect your investments and interests' },
              { icon: 'fa-file-signature', titleAr: 'عقود حصرية', titleEn: 'Exclusive Contracts', descAr: 'صياغة عقود فاخرة ومحكمة لحماية أصولك التجارية', descEn: 'Luxury tight contract drafting to protect your business assets' },
              { icon: 'fa-balance-scale', titleAr: 'تحكيم دولي', titleEn: 'International Arbitration', descAr: 'حل النزاعات التجارية الكبرى بسرية وكفاءة عالية', descEn: 'Resolving major commercial disputes with high confidentiality and efficiency' },
              { icon: 'fa-gem', titleAr: 'استشارات الثروات', titleEn: 'Wealth Advisory', descAr: 'حماية ثرواتك وأصولك بحلول قانونية استراتيجية', descEn: 'Protecting your wealth and assets with strategic legal solutions' },
              { icon: 'fa-crown', titleAr: 'خدمات VIP', titleEn: 'VIP Services', descAr: 'خدمة قانونية متميزة متاحة 24/7 لكبار الشخصيات', descEn: 'Distinguished 24/7 legal service available for VIPs' }
            ].map((service) => (
              <div class="luxury-card rounded-3xl p-10 group">
                <div class="w-24 h-24 gold-bg rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-2xl">
                  <i class={`fas ${service.icon} text-black text-4xl`}></i>
                </div>
                <h3 class="text-3xl font-bold mb-6 text-white group-hover:text-gold transition-colors">
                  {isArabic ? service.titleAr : service.titleEn}
                </h3>
                <p class="text-gray-400 text-lg mb-8 leading-relaxed">
                  {isArabic ? service.descAr : service.descEn}
                </p>
                <a href={isArabic ? '/ar/services' : '/en/services'} 
                   class="gold-text font-bold text-lg inline-flex items-center gap-3 hover:gap-4 transition-all group-hover:underline">
                  <span>{isArabic ? 'التفاصيل' : 'Learn More'}</span>
                  <i class={`fas fa-arrow-${isArabic ? 'left' : 'right'} text-xl`}></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Ultra Luxury */}
      <section class="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-gold via-transparent to-transparent opacity-5"></div>
        <div class="container mx-auto px-6 text-center relative z-10">
          <div class="max-w-5xl mx-auto">
            <h2 class="text-5xl md:text-7xl font-bold mb-8 text-white">
              {isArabic 
                ? <span>جاهز <span class="gold-text">لحماية</span><br/>مصالحك؟</span>
                : <span>Ready to <span class="gold-text">Protect</span><br/>Your Interests?</span>
              }
            </h2>
            <p class="text-2xl md:text-3xl mb-14 text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              {isArabic
                ? 'احجز استشارة خاصة مع محامٍ نخبوي اليوم'
                : 'Book a private consultation with an elite lawyer today'
              }
            </p>
            
            <div class="flex flex-wrap justify-center gap-6">
              <a href="tel:+971501234567" 
                 class="bg-transparent border-2 border-gold text-gold px-12 py-6 rounded-full font-bold text-xl hover:bg-gold hover:text-black transition inline-flex items-center gap-4 shadow-2xl">
                <i class="fas fa-phone text-2xl"></i>
                <span>{isArabic ? 'اتصل الآن' : 'Call Now'}</span>
              </a>
              <a href="https://wa.me/971501234567" target="_blank" 
                 class="bg-gradient-to-r from-green-600 to-green-700 text-white px-12 py-6 rounded-full font-bold text-xl hover:from-green-700 hover:to-green-800 transition inline-flex items-center gap-4 shadow-2xl">
                <i class="fab fa-whatsapp text-2xl"></i>
                <span>{isArabic ? 'واتساب' : 'WhatsApp'}</span>
              </a>
              <a href={isArabic ? '/ar/contact' : '/en/contact'} 
                 class="gold-bg text-black px-12 py-6 rounded-full font-bold text-xl hover-gold transition inline-flex items-center gap-4 shadow-2xl">
                <i class="fas fa-calendar-alt text-2xl"></i>
                <span>{isArabic ? 'احجز موعد' : 'Book Appointment'}</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div class="absolute top-0 right-0 w-96 h-96 bg-gold opacity-10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-gold opacity-10 rounded-full blur-3xl"></div>
      </section>
    </>
  )

  return c.html(Layout({ title, lang, children: content }))
}
