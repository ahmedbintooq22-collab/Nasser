import { Context } from 'hono'
import { Layout } from '../components/Layout'

export const renderContactPage = (c: Context, lang: 'ar' | 'en') => {
  const isArabic = lang === 'ar'
  
  const title = isArabic 
    ? 'تواصل معنا - ناصر شايع الهاجري'
    : 'Contact Us - Nasser Shayea Al Hajeri'

  const content = `
    <!-- Page Header -->
    <section class="hero-gradient text-white py-16">
        <div class="container mx-auto px-4">
            <div class="max-w-3xl ${isArabic ? 'mr-auto' : 'ml-auto'}">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">
                    ${isArabic ? 'تواصل معنا' : 'Contact Us'}
                </h1>
                <p class="text-xl text-gray-200">
                    ${isArabic 
                      ? 'نحن هنا للإجابة على استفساراتك ومساعدتك'
                      : 'We are here to answer your questions and help you'
                    }
                </p>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="py-16 md:py-20 bg-white">
        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-2 gap-12">
                <!-- Contact Form -->
                <div>
                    <h2 class="text-3xl font-bold text-dark-green mb-6">
                        ${isArabic ? 'أرسل رسالتك' : 'Send Your Message'}
                    </h2>
                    
                    <form id="contact-form" class="space-y-6">
                        <div>
                            <label class="block text-gray-700 font-semibold mb-2">
                                ${isArabic ? 'الاسم الكامل' : 'Full Name'} *
                            </label>
                            <input type="text" name="name" required 
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold" 
                                   placeholder="${isArabic ? 'أدخل اسمك الكامل' : 'Enter your full name'}">
                        </div>

                        <div>
                            <label class="block text-gray-700 font-semibold mb-2">
                                ${isArabic ? 'البريد الإلكتروني' : 'Email'} *
                            </label>
                            <input type="email" name="email" required 
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold" 
                                   placeholder="${isArabic ? 'example@email.com' : 'example@email.com'}">
                        </div>

                        <div>
                            <label class="block text-gray-700 font-semibold mb-2">
                                ${isArabic ? 'رقم الهاتف' : 'Phone Number'} *
                            </label>
                            <input type="tel" name="phone" required 
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold" 
                                   placeholder="${isArabic ? '+971 50 123 4567' : '+971 50 123 4567'}">
                        </div>

                        <div>
                            <label class="block text-gray-700 font-semibold mb-2">
                                ${isArabic ? 'الدولة' : 'Country'}
                            </label>
                            <select name="country" 
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold">
                                <option value="UAE">${isArabic ? 'الإمارات العربية المتحدة' : 'United Arab Emirates'}</option>
                                <option value="Saudi">${isArabic ? 'السعودية' : 'Saudi Arabia'}</option>
                                <option value="Other">${isArabic ? 'أخرى' : 'Other'}</option>
                            </select>
                        </div>

                        <div>
                            <label class="block text-gray-700 font-semibold mb-2">
                                ${isArabic ? 'طريقة التواصل المفضلة' : 'Preferred Contact Method'}
                            </label>
                            <div class="flex gap-4">
                                <label class="flex items-center gap-2">
                                    <input type="radio" name="contact_method" value="phone" class="text-gold">
                                    <span>${isArabic ? 'هاتف' : 'Phone'}</span>
                                </label>
                                <label class="flex items-center gap-2">
                                    <input type="radio" name="contact_method" value="whatsapp" class="text-gold" checked>
                                    <span>${isArabic ? 'واتساب' : 'WhatsApp'}</span>
                                </label>
                                <label class="flex items-center gap-2">
                                    <input type="radio" name="contact_method" value="email" class="text-gold">
                                    <span>${isArabic ? 'بريد إلكتروني' : 'Email'}</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label class="block text-gray-700 font-semibold mb-2">
                                ${isArabic ? 'الرسالة' : 'Message'} *
                            </label>
                            <textarea name="message" required rows="5" 
                                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold" 
                                      placeholder="${isArabic ? 'اكتب رسالتك هنا...' : 'Write your message here...'}"></textarea>
                        </div>

                        <button type="submit" 
                                class="w-full gold-bg text-white px-8 py-4 rounded-full font-bold text-lg hover-gold transition">
                            ${isArabic ? 'إرسال الرسالة' : 'Send Message'}
                        </button>
                    </form>

                    <div id="form-message" class="mt-4 hidden"></div>
                </div>

                <!-- Contact Info -->
                <div>
                    <h2 class="text-3xl font-bold text-dark-green mb-6">
                        ${isArabic ? 'معلومات التواصل' : 'Contact Information'}
                    </h2>

                    <div class="space-y-6 mb-8">
                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 gold-bg rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fas fa-map-marker-alt text-white"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-dark-green mb-1">
                                    ${isArabic ? 'العنوان' : 'Address'}
                                </h4>
                                <p class="text-gray-700">
                                    ${isArabic ? 'مدينة العين، الإمارات العربية المتحدة' : 'Al Ain City, United Arab Emirates'}
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 gold-bg rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fas fa-phone text-white"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-dark-green mb-1">
                                    ${isArabic ? 'الهاتف' : 'Phone'}
                                </h4>
                                <a href="tel:+971501234567" class="text-gold hover:underline">
                                    +971 50 123 4567
                                </a>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 gold-bg rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fab fa-whatsapp text-white"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-dark-green mb-1">
                                    ${isArabic ? 'واتساب' : 'WhatsApp'}
                                </h4>
                                <a href="https://wa.me/971501234567" target="_blank" class="text-gold hover:underline">
                                    +971 50 123 4567
                                </a>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 gold-bg rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fas fa-envelope text-white"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-dark-green mb-1">
                                    ${isArabic ? 'البريد الإلكتروني' : 'Email'}
                                </h4>
                                <a href="mailto:info@alhajeri-law.ae" class="text-gold hover:underline">
                                    info@alhajeri-law.ae
                                </a>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 gold-bg rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fas fa-clock text-white"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-dark-green mb-1">
                                    ${isArabic ? 'ساعات العمل' : 'Working Hours'}
                                </h4>
                                <p class="text-gray-700">
                                    ${isArabic ? 'الأحد - الخميس' : 'Sunday - Thursday'}<br>
                                    ${isArabic ? '9:00 صباحاً - 6:00 مساءً' : '9:00 AM - 6:00 PM'}
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Quick Actions -->
                    <div class="space-y-4">
                        <a href="tel:+971501234567" 
                           class="block w-full bg-dark-green text-white px-6 py-4 rounded-full font-bold text-center hover:bg-opacity-90 transition">
                            <i class="fas fa-phone ${isArabic ? 'ml-2' : 'mr-2'}"></i>
                            ${isArabic ? 'اتصل الآن' : 'Call Now'}
                        </a>
                        
                        <a href="https://wa.me/971501234567" target="_blank"
                           class="block w-full bg-green-600 text-white px-6 py-4 rounded-full font-bold text-center hover:bg-green-700 transition">
                            <i class="fab fa-whatsapp ${isArabic ? 'ml-2' : 'mr-2'}"></i>
                            ${isArabic ? 'محادثة واتساب' : 'WhatsApp Chat'}
                        </a>
                    </div>

                    <!-- Map -->
                    <div class="mt-8">
                        <h3 class="text-2xl font-bold text-dark-green mb-4">
                            ${isArabic ? 'موقعنا' : 'Our Location'}
                        </h3>
                        <div class="rounded-lg overflow-hidden shadow-lg h-64">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233512.28596794892!2d55.421342!3d24.207460!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ab35f492b0e6f%3A0xf5c5e3c1b9b0f5c5!2sAl%20Ain!5e0!3m2!1sen!2sae!4v1234567890" 
                                width="100%" 
                                height="100%" 
                                style="border:0;" 
                                allowfullscreen="" 
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
    <script>
        document.getElementById('contact-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            const messageDiv = document.getElementById('form-message');
            
            try {
                const response = await axios.post('/api/contact', data);
                
                messageDiv.className = 'mt-4 p-4 bg-green-100 text-green-700 rounded-lg';
                messageDiv.textContent = '${isArabic ? 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.' : 'Your message has been sent successfully! We will contact you soon.'}';
                messageDiv.classList.remove('hidden');
                
                e.target.reset();
                
                setTimeout(() => {
                    messageDiv.classList.add('hidden');
                }, 5000);
            } catch (error) {
                messageDiv.className = 'mt-4 p-4 bg-red-100 text-red-700 rounded-lg';
                messageDiv.textContent = '${isArabic ? 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.' : 'An error occurred while sending the message. Please try again.'}';
                messageDiv.classList.remove('hidden');
            }
        });
    </script>
  `

  return c.html(Layout({ title, lang, children: content }))
}
