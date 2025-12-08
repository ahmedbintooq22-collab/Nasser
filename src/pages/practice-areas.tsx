import { Context } from 'hono'
import { Layout } from '../components/Layout'

export const renderPracticeAreasPage = (c: Context, lang: 'ar' | 'en') => {
  const isArabic = lang === 'ar'
  const area = c.req.param('area')
  
  const title = isArabic 
    ? 'مجالات الممارسة - ناصر شايع الهاجري'
    : 'Practice Areas - Nasser Shayea Al Hajeri'

  const practiceAreas = [
    {
      id: 'commercial',
      icon: 'fa-building',
      titleAr: 'القضايا التجارية',
      titleEn: 'Commercial Cases',
      descAr: 'نقدم خدمات قانونية متخصصة في القضايا التجارية بما في ذلك النزاعات التجارية، عقود البيع والشراء، الوكالات التجارية، والشراكات التجارية.',
      descEn: 'We provide specialized legal services in commercial cases including commercial disputes, sale and purchase contracts, commercial agencies, and commercial partnerships.'
    },
    {
      id: 'civil',
      icon: 'fa-balance-scale',
      titleAr: 'القضايا المدنية',
      titleEn: 'Civil Cases',
      descAr: 'تمثيل شامل في جميع أنواع القضايا المدنية بما فيها قضايا التعويضات، المسؤولية التقصيرية، والنزاعات الشخصية.',
      descEn: 'Comprehensive representation in all types of civil cases including compensation claims, tort liability, and personal disputes.'
    },
    {
      id: 'labor',
      icon: 'fa-hard-hat',
      titleAr: 'القضايا العمالية',
      titleEn: 'Labor Cases',
      descAr: 'خبرة واسعة في قانون العمل الإماراتي، تمثيل العمال وأصحاب العمل في نزاعات العمل والمستحقات.',
      descEn: 'Extensive expertise in UAE labor law, representing workers and employers in labor disputes and entitlements.'
    },
    {
      id: 'family',
      icon: 'fa-home',
      titleAr: 'قضايا الأحوال الشخصية',
      titleEn: 'Family Law',
      descAr: 'تعامل حساس ومهني مع قضايا الأسرة بما في ذلك الطلاق، الحضانة، النفقة، والميراث.',
      descEn: 'Sensitive and professional handling of family matters including divorce, custody, alimony, and inheritance.'
    },
    {
      id: 'corporate',
      icon: 'fa-handshake',
      titleAr: 'قضايا الشركات',
      titleEn: 'Corporate Law',
      descAr: 'مساعدة الشركات في التأسيس، الحوكمة، الاندماج والاستحواذ، وحل النزاعات بين الشركاء.',
      descEn: 'Assisting companies with incorporation, governance, mergers and acquisitions, and partner disputes resolution.'
    },
    {
      id: 'real-estate',
      icon: 'fa-key',
      titleAr: 'قضايا الإيجارات والعقارات',
      titleEn: 'Real Estate & Rental',
      descAr: 'خدمات قانونية في مجال العقارات بما في ذلك البيع والشراء، النزاعات الإيجارية، والإخلاء.',
      descEn: 'Legal services in real estate including sale and purchase, rental disputes, and eviction matters.'
    }
  ]

  const content = `
    <!-- Page Header -->
    <section class="hero-gradient text-white py-16">
        <div class="container mx-auto px-4">
            <div class="max-w-3xl ${isArabic ? 'mr-auto' : 'ml-auto'}">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">
                    ${isArabic ? 'مجالات الممارسة' : 'Practice Areas'}
                </h1>
                <p class="text-xl text-gray-200">
                    ${isArabic 
                      ? 'نغطي جميع المجالات القانونية لحماية حقوقك'
                      : 'We cover all legal fields to protect your rights'
                    }
                </p>
            </div>
        </div>
    </section>

    <!-- Practice Areas Grid -->
    <section class="py-16 md:py-20 bg-white">
        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-2 gap-8">
                ${practiceAreas.map(pa => `
                    <div class="service-card bg-gray-50 rounded-lg p-8 shadow-lg">
                        <div class="w-16 h-16 gold-bg rounded-full flex items-center justify-center mb-6">
                            <i class="fas ${pa.icon} text-white text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-4 text-dark-green">
                            ${isArabic ? pa.titleAr : pa.titleEn}
                        </h3>
                        <p class="text-gray-700 mb-6 leading-relaxed">
                            ${isArabic ? pa.descAr : pa.descEn}
                        </p>
                        <a href="${isArabic ? '/ar/contact' : '/en/contact'}" class="text-gold font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                            <span>${isArabic ? 'استشر محامي' : 'Consult Lawyer'}</span>
                            <i class="fas fa-arrow-${isArabic ? 'left' : 'right'}"></i>
                        </a>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="hero-gradient text-white py-16">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
                ${isArabic 
                  ? 'تحتاج إلى محامي متخصص؟'
                  : 'Need a Specialized Lawyer?'
                }
            </h2>
            <a href="${isArabic ? '/ar/contact' : '/en/contact'}" class="gold-bg text-white px-8 py-4 rounded-full font-bold text-lg hover-gold transition inline-flex items-center gap-2">
                <span>${isArabic ? 'تواصل معنا' : 'Contact Us'}</span>
                <i class="fas fa-arrow-${isArabic ? 'left' : 'right'}"></i>
            </a>
        </div>
    </section>
  `

  return c.html(Layout({ title, lang, children: content }))
}
