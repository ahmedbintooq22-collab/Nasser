import { Context } from 'hono'
import { Layout } from '../components/Layout'

export const renderContactPage = (c: Context, lang: 'ar' | 'en') => {
  const isArabic = lang === 'ar'
  
  const title = isArabic 
    ? 'تواصل معنا - ناصر شايع الهاجري'
    : 'Contact Us - Nasser Shayea Al Hajeri'

  const content = (
    <>
      {/* Hero Section */}
      <section class="hero-section text-white relative min-h-screen flex items-center">
        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <div class="section-badge mb-8">
              {isArabic ? 'تواصل معنا' : 'CONTACT US'}
            </div>
            <h1 class="text-5xl md:text-7xl font-bold mb-6">
              {isArabic 
                ? <span>نحن هنا <span class="text-gradient">لمساعدتك</span></span>
                : <span>We're Here <span class="text-gradient">To Help</span></span>
              }
            </h1>
            <p class="text-xl text-gray-300 max-w-2xl mx-auto">
              {isArabic
                ? 'تواصل معنا اليوم للحصول على استشارة قانونية متخصصة'
                : 'Contact us today for specialized legal consultation'
              }
            </p>
          </div>
        </div>
        <div class="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"></div>
        <div class="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
      </section>

      {/* Contact Section */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-6">
          <div class="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div class="mb-10">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'احجز استشارة' : 'Book a Consultation'}
                </h2>
                <div class={`divider ${isArabic ? 'mr-0' : 'ml-0'} mb-6`}></div>
                <p class="text-gray-600 text-lg">
                  {isArabic
                    ? 'املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن'
                    : 'Fill out the form below and we will contact you as soon as possible'
                  }
                </p>
              </div>

              <form class="space-y-6">
                <div>
                  <label class="block text-gray-700 font-semibold mb-2">
                    {isArabic ? 'الاسم الكامل' : 'Full Name'} *
                  </label>
                  <input 
                    type="text" 
                    required
                    class="w-full px-6 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                    placeholder={isArabic ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                  />
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-gray-700 font-semibold mb-2">
                      {isArabic ? 'رقم الهاتف' : 'Phone Number'} *
                    </label>
                    <input 
                      type="tel" 
                      required
                      class="w-full px-6 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                      placeholder="+971 50 123 4567"
                    />
                  </div>

                  <div>
                    <label class="block text-gray-700 font-semibold mb-2">
                      {isArabic ? 'البريد الإلكتروني' : 'Email'} *
                    </label>
                    <input 
                      type="email" 
                      required
                      class="w-full px-6 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                      placeholder={isArabic ? 'بريدك الإلكتروني' : 'your@email.com'}
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-gray-700 font-semibold mb-2">
                    {isArabic ? 'نوع القضية' : 'Case Type'} *
                  </label>
                  <select 
                    required
                    class="w-full px-6 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  >
                    <option value="">{isArabic ? 'اختر نوع القضية' : 'Select case type'}</option>
                    <option value="commercial">{isArabic ? 'قضايا تجارية' : 'Commercial'}</option>
                    <option value="civil">{isArabic ? 'قضايا مدنية' : 'Civil'}</option>
                    <option value="labor">{isArabic ? 'قضايا عمالية' : 'Labor'}</option>
                    <option value="family">{isArabic ? 'قضايا أسرية' : 'Family'}</option>
                    <option value="real-estate">{isArabic ? 'قضايا عقارية' : 'Real Estate'}</option>
                    <option value="other">{isArabic ? 'أخرى' : 'Other'}</option>
                  </select>
                </div>

                <div>
                  <label class="block text-gray-700 font-semibold mb-2">
                    {isArabic ? 'الرسالة' : 'Message'} *
                  </label>
                  <textarea 
                    required
                    rows="6"
                    class="w-full px-6 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none"
                    placeholder={isArabic ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  class="btn-primary w-full inline-flex items-center justify-center gap-3"
                >
                  <i class="fas fa-paper-plane"></i>
                  <span>{isArabic ? 'إرسال الطلب' : 'Send Request'}</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div class="elegant-card p-10 mb-8">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">
                  {isArabic ? 'معلومات الاتصال' : 'Contact Information'}
                </h3>
                <div class={`divider ${isArabic ? 'mr-0' : 'ml-0'} mb-8`}></div>

                <div class="space-y-6">
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i class="fas fa-map-marker-alt text-white text-lg"></i>
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-900 mb-1">
                        {isArabic ? 'العنوان' : 'Address'}
                      </h4>
                      <p class="text-gray-600">
                        {isArabic ? 'مدينة العين، الإمارات العربية المتحدة' : 'Al Ain City, United Arab Emirates'}
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i class="fas fa-phone text-white text-lg"></i>
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-900 mb-1">
                        {isArabic ? 'الهاتف' : 'Phone'}
                      </h4>
                      <a href="tel:+971501234567" class="text-gradient font-semibold hover:underline">
                        +971 50 123 4567
                      </a>
                    </div>
                  </div>

                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i class="fab fa-whatsapp text-white text-lg"></i>
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-900 mb-1">
                        {isArabic ? 'واتساب' : 'WhatsApp'}
                      </h4>
                      <a href="https://wa.me/971501234567" target="_blank" class="text-gradient font-semibold hover:underline">
                        +971 50 123 4567
                      </a>
                    </div>
                  </div>

                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i class="fas fa-envelope text-white text-lg"></i>
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-900 mb-1">
                        {isArabic ? 'البريد الإلكتروني' : 'Email'}
                      </h4>
                      <a href="mailto:info@alhajeri-law.ae" class="text-gradient font-semibold hover:underline">
                        info@alhajeri-law.ae
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div class="elegant-card p-10">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">
                  {isArabic ? 'ساعات العمل' : 'Working Hours'}
                </h3>
                <div class={`divider ${isArabic ? 'mr-0' : 'ml-0'} mb-8`}></div>

                <div class="space-y-4">
                  <div class="flex justify-between items-center">
                    <span class="text-gray-700 font-medium">
                      {isArabic ? 'الأحد - الخميس' : 'Sunday - Thursday'}
                    </span>
                    <span class="text-gradient font-bold">
                      {isArabic ? '9:00 ص - 6:00 م' : '9:00 AM - 6:00 PM'}
                    </span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-gray-700 font-medium">
                      {isArabic ? 'الجمعة' : 'Friday'}
                    </span>
                    <span class="text-gray-500 font-bold">
                      {isArabic ? 'مغلق' : 'Closed'}
                    </span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-gray-700 font-medium">
                      {isArabic ? 'السبت' : 'Saturday'}
                    </span>
                    <span class="text-gray-500 font-bold">
                      {isArabic ? 'مغلق' : 'Closed'}
                    </span>
                  </div>
                </div>

                <div class="mt-8 pt-6 border-t border-gray-100">
                  <p class="text-sm text-gray-600 text-center">
                    {isArabic 
                      ? '* يمكن ترتيب مواعيد خارج أوقات العمل الرسمية'
                      : '* Appointments can be arranged outside official hours'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section class="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <div class="section-badge mb-6">
              {isArabic ? 'موقعنا' : 'OUR LOCATION'}
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {isArabic ? 'زرنا' : 'Visit'}
              <br/>
              <span class="text-gradient">{isArabic ? 'في مكتبنا' : 'Our Office'}</span>
            </h2>
            <div class="divider mt-6"></div>
          </div>

          <div class="elegant-card p-4 overflow-hidden">
            <div class="w-full h-96 bg-gray-100 rounded-xl flex items-center justify-center">
              <div class="text-center">
                <i class="fas fa-map-marked-alt text-6xl text-gray-300 mb-4"></i>
                <p class="text-gray-500 text-lg">
                  {isArabic ? 'خريطة جوجل - قريباً' : 'Google Maps - Coming Soon'}
                </p>
                <p class="text-gray-400 text-sm mt-2">
                  {isArabic ? 'مدينة العين، الإمارات' : 'Al Ain City, UAE'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section class="py-24 hero-section text-white relative">
        <div class="container mx-auto px-6 text-center relative z-10">
          <div class="max-w-3xl mx-auto">
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              {isArabic 
                ? <span>استشارة <span class="text-gradient">فورية؟</span></span>
                : <span>Need <span class="text-gradient">Immediate</span> Help?</span>
              }
            </h2>
            <p class="text-xl text-gray-300 mb-10">
              {isArabic
                ? 'اتصل بنا الآن للحصول على استشارة قانونية فورية'
                : 'Call us now for immediate legal consultation'
              }
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <a href="tel:+971501234567" class="btn-primary inline-flex items-center gap-3">
                <i class="fas fa-phone"></i>
                <span>{isArabic ? 'اتصل الآن' : 'Call Now'}</span>
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
