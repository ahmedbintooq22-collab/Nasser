import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { 
  renderHomePage, 
  renderAboutPage, 
  renderServicesPage, 
  renderPracticeAreasPage,
  renderArticlesPage,
  renderContactPage 
} from './pages'

const app = new Hono()

// Enable CORS
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Arabic routes (default, RTL)
app.get('/', (c) => renderHomePage(c, 'ar'))
app.get('/ar', (c) => renderHomePage(c, 'ar'))
app.get('/ar/about', (c) => renderAboutPage(c, 'ar'))
app.get('/ar/services', (c) => renderServicesPage(c, 'ar'))
app.get('/ar/practice-areas', (c) => renderPracticeAreasPage(c, 'ar'))
app.get('/ar/practice-areas/:area', (c) => renderPracticeAreasPage(c, 'ar'))
app.get('/ar/articles', (c) => renderArticlesPage(c, 'ar'))
app.get('/ar/articles/:id', (c) => renderArticlePage(c, 'ar'))
app.get('/ar/contact', (c) => renderContactPage(c, 'ar'))

// English routes (LTR)
app.get('/en', (c) => renderHomePage(c, 'en'))
app.get('/en/about', (c) => renderAboutPage(c, 'en'))
app.get('/en/services', (c) => renderServicesPage(c, 'en'))
app.get('/en/practice-areas', (c) => renderPracticeAreasPage(c, 'en'))
app.get('/en/practice-areas/:area', (c) => renderPracticeAreasPage(c, 'en'))
app.get('/en/articles', (c) => renderArticlesPage(c, 'en'))
app.get('/en/articles/:id', (c) => renderArticlePage(c, 'en'))
app.get('/en/contact', (c) => renderContactPage(c, 'en'))

// Contact form API
app.post('/api/contact', async (c) => {
  const body = await c.req.json()
  // Here you can add email sending logic or store in database
  console.log('Contact form submission:', body)
  return c.json({ success: true, message: 'تم استلام رسالتك بنجاح' })
})

export default app
