import { Context } from 'hono'
import { Layout } from '../components/Layout'

export const renderPracticeAreasPage = (c: Context, lang: 'ar' | 'en') => {
  const isArabic = lang === 'ar'
  const title = isArabic ? 'مجالات الممارسة - ناصر شايع الهاجري' : 'Practice Areas - Nasser Shayea Al Hajeri'

  const areas = [
    { icon: 'fa-building', titleAr: 'القضايا التجارية', titleEn: 'Commercial Cases' },
    { icon: 'fa-balance-scale', titleAr: 'القضايا المدنية', titleEn: 'Civil Cases' },
    { icon: 'fa-hard-hat', titleAr: 'القضايا العمالية', titleEn: 'Labor Cases' },
    { icon: 'fa-home', titleAr: 'الأحوال الشخصية', titleEn: 'Family Law' },
    { icon: 'fa-handshake', titleAr: 'قضايا الشركات', titleEn: 'Corporate Law' },
    { icon: 'fa-key', titleAr: 'العقارات والإيجارات', titleEn: 'Real Estate' }
  ]

  const content = (
    <>
      <section class="hero-gradient text-white py-32">
        <div class="container mx-auto px-6">
          <div class={`max-w-4xl ${isArabic ? 'mr-auto text-right' : 'ml-auto text-left'}`}>
            <h1 class="text-6xl md:text-7xl font-bold mb-6 gold-text">
              {isArabic ? 'مجالات الممارسة' : 'Practice Areas'}
            </h1>
            <p class="text-2xl text-gray-300">
              {isArabic ? 'خبرة شاملة في جميع المجالات' : 'Comprehensive Expertise in All Fields'}
            </p>
          </div>
        </div>
      </section>

      <section class="py-32 bg-black">
        <div class="container mx-auto px-6">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area) => (
              <a href={isArabic ? '/ar/contact' : '/en/contact'} 
                 class="luxury-card rounded-3xl p-12 group hover:scale-105 transition-all">
                <i class={`fas ${area.icon} text-6xl gold-text mb-6 block`}></i>
                <h3 class="text-3xl font-bold text-white">
                  {isArabic ? area.titleAr : area.titleEn}
                </h3>
              </a>
            ))}
          </div>

          <div class="text-center mt-16">
            <a href={isArabic ? '/ar/contact' : '/en/contact'} 
               class="gold-bg text-black px-12 py-6 rounded-full font-bold text-xl hover-gold transition inline-flex items-center gap-4">
              <span>{isArabic ? 'استشر محامي' : 'Consult Lawyer'}</span>
              <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  )

  return c.html(Layout({ title, lang, children: content }))
}
