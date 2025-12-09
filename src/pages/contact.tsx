import { Context } from 'hono'
import { Layout } from '../components/Layout'

export const renderContactPage = (c: Context, lang: 'ar' | 'en') => {
  const isArabic = lang === 'ar'
  const title = isArabic ? 'تواصل معنا - ناصر شايع الهاجري' : 'Contact Us - Nasser Shayea Al Hajeri'

  const content = (
    <>
      <section class="hero-gradient text-white py-32">
        <div class="container mx-auto px-6">
          <div class={`max-w-4xl ${isArabic ? 'mr-auto text-right' : 'ml-auto text-left'}`}>
            <h1 class="text-6xl md:text-7xl font-bold mb-6 gold-text">
              {isArabic ? 'تواصل معنا' : 'Contact Us'}
            </h1>
            <p class="text-2xl text-gray-300">
              {isArabic ? 'نحن هنا لخدمتك' : 'We Are Here to Serve You'}
            </p>
          </div>
        </div>
      </section>

      <section class="py-32 bg-black">
        <div class="container mx-auto px-6">
          <div class="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div class="luxury-card rounded-3xl p-12">
              <h2 class="text-4xl font-bold text-white mb-8 gold-text">
                {isArabic ? 'معلومات التواصل' : 'Contact Information'}
              </h2>
              
              <div class="space-y-8">
                <div class="flex items-start gap-6">
                  <div class="w-16 h-16 gold-bg rounded-2xl flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-phone text-black text-2xl"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-white text-xl mb-2">
                      {isArabic ? 'الهاتف' : 'Phone'}
                    </h4>
                    <a href="tel:+971501234567" class="text-gold text-xl hover:underline">
                      +971 50 123 4567
                    </a>
                  </div>
                </div>

                <div class="flex items-start gap-6">
                  <div class="w-16 h-16 gold-bg rounded-2xl flex items-center justify-center flex-shrink-0">
                    <i class="fab fa-whatsapp text-black text-2xl"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-white text-xl mb-2">
                      {isArabic ? 'واتساب' : 'WhatsApp'}
                    </h4>
                    <a href="https://wa.me/971501234567" target="_blank" class="text-gold text-xl hover:underline">
                      +971 50 123 4567
                    </a>
                  </div>
                </div>

                <div class="flex items-start gap-6">
                  <div class="w-16 h-16 gold-bg rounded-2xl flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-envelope text-black text-2xl"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-white text-xl mb-2">
                      {isArabic ? 'البريد الإلكتروني' : 'Email'}
                    </h4>
                    <a href="mailto:info@alhajeri-law.ae" class="text-gold text-xl hover:underline">
                      info@alhajeri-law.ae
                    </a>
                  </div>
                </div>

                <div class="flex items-start gap-6">
                  <div class="w-16 h-16 gold-bg rounded-2xl flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-map-marker-alt text-black text-2xl"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-white text-xl mb-2">
                      {isArabic ? 'الموقع' : 'Location'}
                    </h4>
                    <p class="text-gray-400 text-lg">
                      {isArabic ? 'مدينة العين، الإمارات العربية المتحدة' : 'Al Ain City, United Arab Emirates'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="luxury-card rounded-3xl p-12">
              <h2 class="text-4xl font-bold text-white mb-8 gold-text">
                {isArabic ? 'احجز استشارة' : 'Book Consultation'}
              </h2>
              
              <form class="space-y-6">
                <div>
                  <input type="text" placeholder={isArabic ? 'الاسم الكامل' : 'Full Name'} 
                         class="w-full px-6 py-4 bg-gray-900 border border-gold border-opacity-30 rounded-xl text-white focus:border-gold focus:outline-none text-lg"/>
                </div>
                
                <div>
                  <input type="email" placeholder={isArabic ? 'البريد الإلكتروني' : 'Email'} 
                         class="w-full px-6 py-4 bg-gray-900 border border-gold border-opacity-30 rounded-xl text-white focus:border-gold focus:outline-none text-lg"/>
                </div>
                
                <div>
                  <input type="tel" placeholder={isArabic ? 'رقم الهاتف' : 'Phone Number'} 
                         class="w-full px-6 py-4 bg-gray-900 border border-gold border-opacity-30 rounded-xl text-white focus:border-gold focus:outline-none text-lg"/>
                </div>
                
                <div>
                  <textarea rows="5" placeholder={isArabic ? 'رسالتك' : 'Your Message'} 
                            class="w-full px-6 py-4 bg-gray-900 border border-gold border-opacity-30 rounded-xl text-white focus:border-gold focus:outline-none text-lg"></textarea>
                </div>
                
                <button type="submit" 
                        class="w-full gold-bg text-black px-8 py-5 rounded-full font-bold text-xl hover-gold transition">
                  {isArabic ? 'إرسال الطلب' : 'Send Request'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )

  return c.html(Layout({ title, lang, children: content }))
}
