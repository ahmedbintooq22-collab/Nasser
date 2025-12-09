import { Context } from 'hono'
import { Layout } from '../components/Layout'

export const renderArticlesPage = (c: Context, lang: 'ar' | 'en') => {
  const isArabic = lang === 'ar'
  const title = isArabic ? 'المقالات - ناصر شايع الهاجري' : 'Articles - Nasser Shayea Al Hajeri'

  const content = (
    <>
      <section class="hero-gradient text-white py-32">
        <div class="container mx-auto px-6">
          <div class={`max-w-4xl ${isArabic ? 'mr-auto text-right' : 'ml-auto text-left'}`}>
            <h1 class="text-6xl md:text-7xl font-bold mb-6 gold-text">
              {isArabic ? 'المقالات القانونية' : 'Legal Articles'}
            </h1>
            <p class="text-2xl text-gray-300">
              {isArabic ? 'رؤى قانونية للنخبة' : 'Legal Insights for Elite'}
            </p>
          </div>
        </div>
      </section>

      <section class="py-32 bg-black">
        <div class="container mx-auto px-6">
          <div class="text-center text-gray-400 text-2xl">
            {isArabic ? 'قريباً - مقالات قانونية حصرية' : 'Coming Soon - Exclusive Legal Articles'}
          </div>
        </div>
      </section>
    </>
  )

  return c.html(Layout({ title, lang, children: content }))
}

export const renderArticlePage = (c: Context, lang: 'ar' | 'en') => {
  return renderArticlesPage(c, lang)
}
