import { Context } from 'hono'
import { Layout } from '../components/Layout'

export const renderAboutPage = (c: Context, lang: 'ar' | 'en') => {
  const isArabic = lang === 'ar'
  const title = isArabic ? 'من نحن - ناصر شايع الهاجري' : 'About Us - Nasser Shayea Al Hajeri'

  const content = (
    <>
      <section class="hero-gradient text-white py-32">
        <div class="container mx-auto px-6">
          <div class={`max-w-4xl ${isArabic ? 'mr-auto text-right' : 'ml-auto text-left'}`}>
            <h1 class="text-6xl md:text-7xl font-bold mb-6 gold-text">
              {isArabic ? 'من نحن' : 'About Us'}
            </h1>
            <p class="text-2xl text-gray-300">
              {isArabic ? 'محامي نخبوي يخدم كبار الشخصيات' : 'Elite Lawyer Serving VIPs'}
            </p>
          </div>
        </div>
      </section>

      <section class="py-32 bg-black">
        <div class="container mx-auto px-6">
          <div class="max-w-5xl mx-auto text-center">
            <h2 class="text-5xl font-bold text-white mb-8">
              <span class="gold-text">{isArabic ? 'خبرة' : 'Experience'}</span> {isArabic ? 'متميزة' : 'Excellence'}
            </h2>
            <p class="text-2xl text-gray-300 leading-relaxed mb-12">
              {isArabic 
                ? 'مع أكثر من 15 عاماً من الخبرة المتميزة في خدمة كبار رجال الأعمال والمستثمرين، نقدم حلولاً قانونية فاخرة ومخصصة.'
                : 'With over 15 years of distinguished experience serving top businessmen and investors, we provide luxury customized legal solutions.'
              }
            </p>
            
            <div class="grid md:grid-cols-3 gap-8 mt-16">
              <div class="luxury-card rounded-3xl p-10">
                <div class="text-6xl gold-text mb-4">15+</div>
                <h3 class="text-xl text-white font-bold">{isArabic ? 'سنة خبرة' : 'Years Experience'}</h3>
              </div>
              <div class="luxury-card rounded-3xl p-10">
                <div class="text-6xl gold-text mb-4">500+</div>
                <h3 class="text-xl text-white font-bold">{isArabic ? 'عميل نخبوي' : 'Elite Clients'}</h3>
              </div>
              <div class="luxury-card rounded-3xl p-10">
                <div class="text-6xl gold-text mb-4">95%</div>
                <h3 class="text-xl text-white font-bold">{isArabic ? 'نسبة النجاح' : 'Success Rate'}</h3>
              </div>
            </div>

            <a href={isArabic ? '/ar/contact' : '/en/contact'} 
               class="gold-bg text-black px-12 py-6 rounded-full font-bold text-xl hover-gold transition inline-flex items-center gap-4 mt-16">
              <span>{isArabic ? 'احجز استشارة' : 'Book Consultation'}</span>
              <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  )

  return c.html(Layout({ title, lang, children: content }))
}
