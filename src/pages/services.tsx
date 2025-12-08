import { Context } from 'hono'
import { Layout } from '../components/Layout'

export const renderServicesPage = (c: Context, lang: 'ar' | 'en') => {
  const isArabic = lang === 'ar'
  
  const title = isArabic 
    ? 'خدماتنا - ناصر شايع الهاجري'
    : 'Our Services - Nasser Shayea Al Hajeri'

  const services = [
    {
      icon: 'fa-gavel',
      titleAr: 'التقاضي والترافع',
      titleEn: 'Litigation & Advocacy',
      descAr: 'تمثيل قانوني احترافي أمام جميع المحاكم والهيئات القضائية في دولة الإمارات العربية المتحدة. نحن نقدم خدمات الدفاع والترافع في القضايا المدنية، التجارية، العمالية، والجنائية.',
      descEn: 'Professional legal representation before all courts and judicial bodies in the United Arab Emirates. We provide defense and advocacy services in civil, commercial, labor, and criminal cases.',
      points: isArabic 
        ? ['الترافع أمام المحاكم الاتحادية والمحلية', 'صياغة اللوائح والمذكرات القانونية', 'متابعة القضايا في جميع مراحل التقاضي', 'الطعون والاستئناف']
        : ['Advocacy before federal and local courts', 'Drafting legal pleadings and memoranda', 'Following up cases at all litigation stages', 'Appeals and objections']
    },
    {
      icon: 'fa-handshake',
      titleAr: 'الاستشارات القانونية',
      titleEn: 'Legal Consultations',
      descAr: 'نقدم استشارات قانونية متخصصة وشاملة في مختلف المجالات القانونية. نساعد عملاءنا على فهم حقوقهم والتزاماتهم القانونية واتخاذ القرارات الصحيحة.',
      descEn: 'We provide specialized and comprehensive legal consultations in various legal fields. We help our clients understand their rights and legal obligations and make the right decisions.',
      points: isArabic 
        ? ['استشارات قانونية عامة', 'استشارات متخصصة في القانون التجاري', 'استشارات العقود والاتفاقيات', 'الاستشارات الشفوية والكتابية']
        : ['General legal consultations', 'Specialized commercial law consultations', 'Contract and agreement consultations', 'Oral and written consultations']
    },
    {
      icon: 'fa-file-contract',
      titleAr: 'صياغة العقود والاتفاقيات',
      titleEn: 'Contract Drafting',
      descAr: 'إعداد وصياغة جميع أنواع العقود والاتفاقيات القانونية بدقة واحترافية. نضمن حماية حقوق عملائنا من خلال صياغة عقود محكمة وواضحة.',
      descEn: 'Preparing and drafting all types of contracts and legal agreements with precision and professionalism. We ensure protection of our clients\' rights through tight and clear contract drafting.',
      points: isArabic 
        ? ['عقود الشركات والتأسيس', 'عقود البيع والشراء', 'عقود الإيجار التجاري والسكني', 'عقود العمل والخدمات']
        : ['Company incorporation contracts', 'Sale and purchase agreements', 'Commercial and residential lease contracts', 'Employment and service contracts']
    },
    {
      icon: 'fa-users',
      titleAr: 'التحكيم وحل النزاعات',
      titleEn: 'Arbitration & Dispute Resolution',
      descAr: 'تقديم خدمات التحكيم والوساطة لحل النزاعات بطرق ودية وفعالة. نسعى لتحقيق حلول سريعة ومرضية لجميع الأطراف.',
      descEn: 'Providing arbitration and mediation services to resolve disputes through friendly and effective methods. We strive to achieve quick and satisfactory solutions for all parties.',
      points: isArabic 
        ? ['التحكيم التجاري الدولي والمحلي', 'الوساطة في النزاعات', 'التفاوض نيابة عن العملاء', 'الحلول البديلة لفض المنازعات']
        : ['International and local commercial arbitration', 'Mediation in disputes', 'Negotiation on behalf of clients', 'Alternative dispute resolution']
    },
    {
      icon: 'fa-money-bill-wave',
      titleAr: 'تحصيل الديون',
      titleEn: 'Debt Collection',
      descAr: 'استرداد حقوقكم المالية بطرق قانونية فعالة وسريعة. نساعد عملاءنا في تحصيل ديونهم من خلال الإجراءات القانونية المناسبة.',
      descEn: 'Recovering your financial rights through effective and swift legal methods. We help our clients collect their debts through appropriate legal procedures.',
      points: isArabic 
        ? ['متابعة الديون التجارية والشخصية', 'إجراءات التنفيذ الجبري', 'التفاوض على جداول السداد', 'رفع دعاوى المطالبة المالية']
        : ['Following up commercial and personal debts', 'Enforcement procedures', 'Negotiating payment schedules', 'Filing financial claim lawsuits']
    },
    {
      icon: 'fa-briefcase',
      titleAr: 'القضايا العمالية',
      titleEn: 'Labor Cases',
      descAr: 'تمثيل العمال وأصحاب العمل في القضايا العمالية. نقدم خدمات قانونية شاملة في مجال قانون العمل الإماراتي.',
      descEn: 'Representing workers and employers in labor cases. We provide comprehensive legal services in the field of UAE labor law.',
      points: isArabic 
        ? ['نزاعات عقود العمل', 'مستحقات نهاية الخدمة', 'الفصل التعسفي', 'إصابات العمل']
        : ['Employment contract disputes', 'End of service benefits', 'Wrongful termination', 'Work injuries']
    }
  ]

  const content = `
    <!-- Page Header -->
    <section class="hero-gradient text-white py-16">
        <div class="container mx-auto px-4">
            <div class="max-w-3xl ${isArabic ? 'mr-auto' : 'ml-auto'}">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">
                    ${isArabic ? 'خدماتنا القانونية' : 'Our Legal Services'}
                </h1>
                <p class="text-xl text-gray-200">
                    ${isArabic 
                      ? 'نقدم مجموعة شاملة من الخدمات القانونية المتخصصة'
                      : 'We offer a comprehensive range of specialized legal services'
                    }
                </p>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="py-16 md:py-20 bg-white">
        <div class="container mx-auto px-4">
            <div class="space-y-12">
                ${services.map((service, index) => `
                    <div class="grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}">
                        <div class="${index % 2 === 1 ? 'md:order-2' : ''}">
                            <div class="w-20 h-20 gold-bg rounded-full flex items-center justify-center mb-6">
                                <i class="fas ${service.icon} text-white text-3xl"></i>
                            </div>
                            <h2 class="text-3xl font-bold mb-4 text-dark-green">
                                ${isArabic ? service.titleAr : service.titleEn}
                            </h2>
                            <p class="text-gray-700 text-lg mb-6 leading-relaxed">
                                ${isArabic ? service.descAr : service.descEn}
                            </p>
                            <ul class="space-y-3 mb-8">
                                ${service.points.map(point => `
                                    <li class="flex items-start gap-3">
                                        <i class="fas fa-check-circle text-gold mt-1"></i>
                                        <span class="text-gray-700">${point}</span>
                                    </li>
                                `).join('')}
                            </ul>
                            <a href="${isArabic ? '/ar/contact' : '/en/contact'}" class="gold-bg text-white px-6 py-3 rounded-full hover-gold transition inline-flex items-center gap-2 font-semibold">
                                <span>${isArabic ? 'اطلب الخدمة' : 'Request Service'}</span>
                                <i class="fas fa-arrow-${isArabic ? 'left' : 'right'}"></i>
                            </a>
                        </div>
                        <div class="${index % 2 === 1 ? 'md:order-1' : ''}">
                            <div class="bg-gray-50 rounded-lg p-12 text-center">
                                <i class="fas ${service.icon} text-gold text-9xl opacity-20"></i>
                            </div>
                        </div>
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
                  ? 'هل تحتاج إلى مساعدة قانونية؟'
                  : 'Do You Need Legal Assistance?'
                }
            </h2>
            <p class="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
                ${isArabic
                  ? 'تواصل معنا الآن للحصول على الخدمة القانونية التي تحتاجها'
                  : 'Contact us now to get the legal service you need'
                }
            </p>
            
            <div class="flex flex-wrap justify-center gap-4">
                <a href="${isArabic ? '/ar/contact' : '/en/contact'}" class="gold-bg text-white px-8 py-4 rounded-full font-bold text-lg hover-gold transition inline-flex items-center gap-2">
                    <i class="fas fa-envelope"></i>
                    <span>${isArabic ? 'تواصل معنا' : 'Contact Us'}</span>
                </a>
                <a href="https://wa.me/971501234567" target="_blank" class="bg-white text-dark-green px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition inline-flex items-center gap-2">
                    <i class="fab fa-whatsapp"></i>
                    <span>${isArabic ? 'واتساب' : 'WhatsApp'}</span>
                </a>
            </div>
        </div>
    </section>
  `

  return c.html(Layout({ title, lang, children: content }))
}
