import { Context } from 'hono'
import { Layout } from '../components/Layout'

export const renderArticlesPage = (c: Context, lang: 'ar' | 'en') => {
  const isArabic = lang === 'ar'
  
  const title = isArabic 
    ? 'المقالات - ناصر شايع الهاجري'
    : 'Articles - Nasser Shayea Al Hajeri'

  const articles = [
    {
      id: 1,
      titleAr: 'حقوق العمال في قانون العمل الإماراتي',
      titleEn: 'Workers Rights in UAE Labor Law',
      excerptAr: 'يوفر قانون العمل الإماراتي حماية شاملة لحقوق العمال، نستعرض أهم هذه الحقوق والضمانات.',
      excerptEn: 'UAE labor law provides comprehensive protection for workers\' rights, we review the most important rights and guarantees.',
      date: '2024-12-01',
      author: isArabic ? 'ناصر شايع الهاجري' : 'Nasser Shayea Al Hajeri'
    },
    {
      id: 2,
      titleAr: 'كيفية صياغة عقد تجاري محكم',
      titleEn: 'How to Draft a Solid Commercial Contract',
      excerptAr: 'نصائح وإرشادات قانونية لصياغة عقود تجارية قوية تحمي مصالحك.',
      excerptEn: 'Legal tips and guidance for drafting strong commercial contracts that protect your interests.',
      date: '2024-11-28',
      author: isArabic ? 'ناصر شايع الهاجري' : 'Nasser Shayea Al Hajeri'
    },
    {
      id: 3,
      titleAr: 'التحكيم التجاري في الإمارات',
      titleEn: 'Commercial Arbitration in UAE',
      excerptAr: 'نظرة شاملة على نظام التحكيم التجاري ومزاياه كوسيلة بديلة لحل النزاعات.',
      excerptEn: 'A comprehensive look at the commercial arbitration system and its advantages as an alternative dispute resolution method.',
      date: '2024-11-20',
      author: isArabic ? 'ناصر شايع الهاجري' : 'Nasser Shayea Al Hajeri'
    },
    {
      id: 4,
      titleAr: 'قانون الشركات الجديد في الإمارات',
      titleEn: 'New Companies Law in UAE',
      excerptAr: 'تعرف على أبرز التعديلات في قانون الشركات الإماراتي وتأثيرها على الأعمال.',
      excerptEn: 'Learn about the most prominent amendments to UAE companies law and their impact on business.',
      date: '2024-11-15',
      author: isArabic ? 'ناصر شايع الهاجري' : 'Nasser Shayea Al Hajeri'
    }
  ]

  const content = `
    <!-- Page Header -->
    <section class="hero-gradient text-white py-16">
        <div class="container mx-auto px-4">
            <div class="max-w-3xl ${isArabic ? 'mr-auto' : 'ml-auto'}">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">
                    ${isArabic ? 'المقالات القانونية' : 'Legal Articles'}
                </h1>
                <p class="text-xl text-gray-200">
                    ${isArabic 
                      ? 'آخر المستجدات والنصائح القانونية'
                      : 'Latest legal updates and advice'
                    }
                </p>
            </div>
        </div>
    </section>

    <!-- Articles Grid -->
    <section class="py-16 md:py-20 bg-white">
        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-2 gap-8">
                ${articles.map(article => `
                    <article class="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                        <div class="h-48 bg-gradient-to-br from-dark-green to-gold flex items-center justify-center">
                            <i class="fas fa-file-alt text-white text-6xl opacity-50"></i>
                        </div>
                        <div class="p-6">
                            <div class="flex items-center gap-4 text-sm text-gray-600 mb-3">
                                <span class="flex items-center gap-2">
                                    <i class="fas fa-calendar"></i>
                                    ${article.date}
                                </span>
                                <span class="flex items-center gap-2">
                                    <i class="fas fa-user"></i>
                                    ${article.author}
                                </span>
                            </div>
                            <h3 class="text-2xl font-bold mb-3 text-dark-green">
                                ${isArabic ? article.titleAr : article.titleEn}
                            </h3>
                            <p class="text-gray-700 mb-4 leading-relaxed">
                                ${isArabic ? article.excerptAr : article.excerptEn}
                            </p>
                            <a href="${isArabic ? `/ar/articles/${article.id}` : `/en/articles/${article.id}`}" class="text-gold font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                                <span>${isArabic ? 'اقرأ المزيد' : 'Read More'}</span>
                                <i class="fas fa-arrow-${isArabic ? 'left' : 'right'}"></i>
                            </a>
                        </div>
                    </article>
                `).join('')}
            </div>
        </div>
    </section>
  `

  return c.html(Layout({ title, lang, children: content }))
}

export const renderArticlePage = (c: Context, lang: 'ar' | 'en') => {
  const isArabic = lang === 'ar'
  const articleId = c.req.param('id')
  
  const title = isArabic 
    ? 'مقال - ناصر شايع الهاجري'
    : 'Article - Nasser Shayea Al Hajeri'

  const content = `
    <!-- Page Header -->
    <section class="hero-gradient text-white py-16">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto">
                <a href="${isArabic ? '/ar/articles' : '/en/articles'}" class="text-gold hover:text-white transition mb-4 inline-flex items-center gap-2">
                    <i class="fas fa-arrow-${isArabic ? 'right' : 'left'}"></i>
                    <span>${isArabic ? 'العودة للمقالات' : 'Back to Articles'}</span>
                </a>
                <h1 class="text-4xl md:text-5xl font-bold mb-4 mt-6">
                    ${isArabic ? 'حقوق العمال في قانون العمل الإماراتي' : 'Workers Rights in UAE Labor Law'}
                </h1>
                <div class="flex items-center gap-6 text-gray-200">
                    <span class="flex items-center gap-2">
                        <i class="fas fa-calendar"></i>
                        2024-12-01
                    </span>
                    <span class="flex items-center gap-2">
                        <i class="fas fa-user"></i>
                        ${isArabic ? 'ناصر شايع الهاجري' : 'Nasser Shayea Al Hajeri'}
                    </span>
                </div>
            </div>
        </div>
    </section>

    <!-- Article Content -->
    <section class="py-16 md:py-20 bg-white">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto">
                <article class="prose prose-lg max-w-none">
                    <p class="text-xl text-gray-700 leading-relaxed mb-6">
                        ${isArabic 
                          ? 'يوفر قانون العمل الإماراتي حماية شاملة لحقوق العمال، ويضع إطاراً قانونياً واضحاً لتنظيم العلاقة بين العامل وصاحب العمل.'
                          : 'UAE labor law provides comprehensive protection for workers\' rights and establishes a clear legal framework to regulate the relationship between workers and employers.'
                        }
                    </p>

                    <h2 class="text-2xl font-bold text-dark-green mt-8 mb-4">
                        ${isArabic ? 'أهم حقوق العمال' : 'Most Important Workers Rights'}
                    </h2>

                    <p class="text-gray-700 leading-relaxed mb-4">
                        ${isArabic 
                          ? 'هذا محتوى تجريبي. يمكنك إضافة المحتوى الفعلي للمقالات لاحقاً من خلال نظام إدارة المحتوى.'
                          : 'This is placeholder content. You can add actual article content later through the content management system.'
                        }
                    </p>

                    <ul class="list-disc ${isArabic ? 'pr-6' : 'pl-6'} mb-6 space-y-2 text-gray-700">
                        <li>${isArabic ? 'الحق في الأجر العادل' : 'Right to fair wages'}</li>
                        <li>${isArabic ? 'الحق في ساعات عمل محددة' : 'Right to defined working hours'}</li>
                        <li>${isArabic ? 'الحق في الإجازات السنوية' : 'Right to annual leave'}</li>
                        <li>${isArabic ? 'الحق في بيئة عمل آمنة' : 'Right to safe working environment'}</li>
                        <li>${isArabic ? 'الحق في مكافأة نهاية الخدمة' : 'Right to end of service gratuity'}</li>
                    </ul>

                    <div class="bg-gold bg-opacity-10 border-${isArabic ? 'r' : 'l'}-4 border-gold p-6 my-8">
                        <p class="text-gray-800">
                            <strong>${isArabic ? 'نصيحة قانونية:' : 'Legal Advice:'}</strong>
                            ${isArabic 
                              ? ' احرص دائماً على الاحتفاظ بنسخة من عقد العمل وجميع المستندات المتعلقة بعملك.'
                              : ' Always keep a copy of your employment contract and all documents related to your work.'
                            }
                        </p>
                    </div>
                </article>

                <!-- CTA -->
                <div class="mt-12 bg-gray-50 rounded-lg p-8 text-center">
                    <h3 class="text-2xl font-bold text-dark-green mb-4">
                        ${isArabic ? 'هل تحتاج إلى استشارة قانونية؟' : 'Do You Need Legal Consultation?'}
                    </h3>
                    <p class="text-gray-700 mb-6">
                        ${isArabic 
                          ? 'تواصل معنا للحصول على استشارة قانونية متخصصة'
                          : 'Contact us to get specialized legal consultation'
                        }
                    </p>
                    <a href="${isArabic ? '/ar/contact' : '/en/contact'}" class="gold-bg text-white px-8 py-3 rounded-full hover-gold transition inline-flex items-center gap-2 font-semibold">
                        <span>${isArabic ? 'تواصل معنا' : 'Contact Us'}</span>
                        <i class="fas fa-arrow-${isArabic ? 'left' : 'right'}"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
  `

  return c.html(Layout({ title, lang, children: content }))
}
