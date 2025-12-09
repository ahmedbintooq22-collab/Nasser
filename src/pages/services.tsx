import { Context } from 'hono'
import { Layout } from '../components/Layout'

export const renderServicesPage = (c: Context, lang: 'ar' | 'en') => {
  const isArabic = lang === 'ar'
  const title = isArabic ? 'خدماتنا - ناصر شايع الهاجري' : 'Our Services - Nasser Shayea Al Hajeri'

  const services = [
    { icon: 'fa-gavel', titleAr: 'التقاضي النخبوي', titleEn: 'Elite Litigation', descAr: 'تمثيل قانوني حصري أمام أعلى المحاكم', descEn: 'Exclusive legal representation before the highest courts' },
    { icon: 'fa-handshake', titleAr: 'استشارات خاصة', titleEn: 'Private Consultations', descAr: 'جلسات استشارية خاصة ومخصصة', descEn: 'Private customized consultation sessions' },
    { icon: 'fa-file-signature', titleAr: 'عقود حصرية', titleEn: 'Exclusive Contracts', descAr: 'صياغة عقود فاخرة ومحكمة', descEn: 'Luxury tight contract drafting' },
    { icon: 'fa-balance-scale', titleAr: 'تحكيم دولي', titleEn: 'International Arbitration', descAr: 'حل النزاعات التجارية الكبرى', descEn: 'Resolving major commercial disputes' },
    { icon: 'fa-gem', titleAr: 'استشارات الثروات', titleEn: 'Wealth Advisory', descAr: 'حماية ثرواتك وأصولك', descEn: 'Protecting your wealth and assets' },
    { icon: 'fa-crown', titleAr: 'خدمات VIP', titleEn: 'VIP Services', descAr: 'خدمة قانونية متميزة 24/7', descEn: 'Distinguished 24/7 legal service' }
  ]

  const content = (
    <>
      <section class="hero-gradient text-white py-32">
        <div class="container mx-auto px-6">
          <div class={`max-w-4xl ${isArabic ? 'mr-auto text-right' : 'ml-auto text-left'}`}>
            <h1 class="text-6xl md:text-7xl font-bold mb-6 gold-text">
              {isArabic ? 'خدماتنا الحصرية' : 'Exclusive Services'}
            </h1>
            <p class="text-2xl text-gray-300">
              {isArabic ? 'حلول قانونية فاخرة للنخبة' : 'Luxury Legal Solutions for Elite'}
            </p>
          </div>
        </div>
      </section>

      <section class="py-32 bg-black">
        <div class="container mx-auto px-6">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
              <div class="luxury-card rounded-3xl p-10 group">
                <div class="w-24 h-24 gold-bg rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all">
                  <i class={`fas ${service.icon} text-black text-4xl`}></i>
                </div>
                <h3 class="text-3xl font-bold mb-6 text-white">
                  {isArabic ? service.titleAr : service.titleEn}
                </h3>
                <p class="text-gray-400 text-lg mb-8">
                  {isArabic ? service.descAr : service.descEn}
                </p>
                <a href={isArabic ? '/ar/contact' : '/en/contact'} 
                   class="gold-text font-bold text-lg inline-flex items-center gap-3">
                  <span>{isArabic ? 'احجز الآن' : 'Book Now'}</span>
                  <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )

  return c.html(Layout({ title, lang, children: content }))
}
