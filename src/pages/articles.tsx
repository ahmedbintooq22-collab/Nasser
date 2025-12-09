import { Context } from 'hono'
import { Layout } from '../components/Layout'

export const renderArticlesPage = (c: Context, lang: 'ar' | 'en') => {
  const isArabic = lang === 'ar'
  
  const title = isArabic 
    ? 'المقالات القانونية - ناصر شايع الهاجري'
    : 'Legal Articles - Nasser Shayea Al Hajeri'

  const content = (
    <>
      {/* Hero Section */}
      <section class="hero-section text-white relative min-h-screen flex items-center">
        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <div class="section-badge mb-8">
              {isArabic ? 'المقالات' : 'ARTICLES'}
            </div>
            <h1 class="text-5xl md:text-7xl font-bold mb-6">
              {isArabic 
                ? <span>مقالات <span class="text-gradient">قانونية</span></span>
                : <span>Legal <span class="text-gradient">Articles</span></span>
              }
            </h1>
            <p class="text-xl text-gray-300 max-w-2xl mx-auto">
              {isArabic
                ? 'معلومات قانونية مفيدة ونصائح قانونية متخصصة'
                : 'Useful legal information and specialized legal advice'
              }
            </p>
          </div>
        </div>
        <div class="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"></div>
        <div class="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
      </section>

      {/* Coming Soon Section */}
      <section class="min-h-screen flex items-center bg-white">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto text-center">
            <div class="elegant-card p-16">
              <div class="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto mb-8 flex items-center justify-center">
                <i class="fas fa-newspaper text-white text-5xl"></i>
              </div>
              
              <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'قريباً' : 'Coming Soon'}
              </h2>
              
              <div class="divider mb-8"></div>
              
              <p class="text-xl text-gray-700 mb-10 leading-relaxed">
                {isArabic
                  ? 'نعمل حالياً على إضافة مقالات قانونية متخصصة تغطي مواضيع مهمة في القانون الإماراتي'
                  : 'We are currently working on adding specialized legal articles covering important topics in UAE law'
                }
              </p>

              <div class="bg-gray-50 rounded-xl p-8 mb-10">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">
                  {isArabic ? 'المواضيع القادمة:' : 'Upcoming Topics:'}
                </h3>
                <div class="grid md:grid-cols-2 gap-4 text-left">
                  {[
                    { ar: 'قانون العمل الإماراتي', en: 'UAE Labor Law' },
                    { ar: 'القضايا التجارية', en: 'Commercial Cases' },
                    { ar: 'قانون الأسرة', en: 'Family Law' },
                    { ar: 'حقوق العقارات', en: 'Real Estate Rights' },
                    { ar: 'التحكيم التجاري', en: 'Commercial Arbitration' },
                    { ar: 'تحصيل الديون', en: 'Debt Collection' }
                  ].map((topic) => (
                    <div class="flex items-center gap-3 text-gray-700">
                      <i class="fas fa-check-circle text-gradient"></i>
                      <span>{isArabic ? topic.ar : topic.en}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p class="text-gray-600 mb-8">
                {isArabic
                  ? 'في غضون ذلك، يمكنك التواصل معنا للحصول على استشارة قانونية مباشرة'
                  : 'Meanwhile, you can contact us for direct legal consultation'
                }
              </p>

              <div class="flex flex-wrap justify-center gap-4">
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

      {/* Legal Topics Section */}
      <section class="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <div class="section-badge mb-6">
              {isArabic ? 'مواضيع قانونية' : 'LEGAL TOPICS'}
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {isArabic ? 'مواضيع' : 'Topics We Will'}
              <br/>
              <span class="text-gradient">{isArabic ? 'سنغطيها' : 'Cover'}</span>
            </h2>
            <div class="divider mt-6"></div>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'fa-briefcase',
                titleAr: 'القانون التجاري',
                titleEn: 'Commercial Law',
                descAr: 'مقالات حول تأسيس الشركات والعقود التجارية'
              },
              {
                icon: 'fa-users',
                titleAr: 'قانون العمل',
                titleEn: 'Labor Law',
                descAr: 'معلومات عن حقوق العمال وأصحاب العمل'
              },
              {
                icon: 'fa-home',
                titleAr: 'قانون الأسرة',
                titleEn: 'Family Law',
                descAr: 'نصائح حول القضايا الأسرية والزواج'
              },
              {
                icon: 'fa-building',
                titleAr: 'القانون العقاري',
                titleEn: 'Real Estate Law',
                descAr: 'إرشادات حول شراء وبيع العقارات'
              },
              {
                icon: 'fa-balance-scale',
                titleAr: 'التحكيم',
                titleEn: 'Arbitration',
                descAr: 'معلومات عن التحكيم التجاري والوساطة'
              },
              {
                icon: 'fa-gavel',
                titleAr: 'التقاضي',
                titleEn: 'Litigation',
                descAr: 'نصائح حول المحاكم والإجراءات القانونية'
              }
            ].map((topic) => (
              <div class="elegant-card p-8 text-center">
                <div class="service-icon mx-auto mb-6">
                  <i class={`fas ${topic.icon} text-white text-3xl`}></i>
                </div>
                <h3 class="text-xl font-bold mb-3 text-gray-900">
                  {isArabic ? topic.titleAr : topic.titleEn}
                </h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                  {isArabic ? topic.descAr : topic.descEn}
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
                : <span>Need <span class="text-gradient">Legal Advice?</span></span>
              }
            </h2>
            <p class="text-xl text-gray-300 mb-10">
              {isArabic
                ? 'لا تتردد في التواصل معنا للحصول على مشورة قانونية متخصصة'
                : 'Do not hesitate to contact us for specialized legal advice'
              }
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <a href={isArabic ? '/ar/contact' : '/en/contact'} class="btn-primary inline-flex items-center gap-3">
                <i class="fas fa-envelope"></i>
                <span>{isArabic ? 'راسلنا' : 'Email Us'}</span>
              </a>
              <a href="https://wa.me/971501234567" target="_blank" 
                 class="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full font-semibold transition inline-flex items-center gap-3 shadow-lg">
                <i class="fab fa-whatsapp text-xl"></i>
                <span>{isArabic ? 'واتساب' : 'WhatsApp'}</span>
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
