import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import WhatsAppButton from './components/WhatsAppButton';
import Hero from './components/Hero';
import { SERVICES, PLANS, BLOG_POSTS, WHATSAPP_LINK, COMPANY_PHONE } from './constants';
import { Check, ArrowRight, Calendar, User, Tag } from 'lucide-react';

// -- Page Components --

const HomePage = () => (
  <>
    <Hero />
    
    {/* Services Teaser */}
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary-500 font-bold tracking-wide uppercase text-sm mb-2">Nossas Soluções</h2>
          <h2 className="text-3xl leading-8 font-serif font-bold tracking-tight text-secondary-900 sm:text-4xl">
            Tudo que sua empresa precisa
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-secondary-500 mx-auto font-light">
            Soluções flexíveis para reduzir custos e aumentar a profissionalização do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-secondary-100 hover:border-primary-100">
              <div className="w-14 h-14 bg-secondary-50 text-secondary-600 group-hover:bg-primary-500 group-hover:text-white rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3 font-serif">{service.title}</h3>
              <p className="text-secondary-500 leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Pricing */}
    <section id="plans" className="py-24 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl font-serif">
            Planos Transparentes
          </h2>
          <p className="mt-4 text-lg text-secondary-500 font-light">
            Escolha o plano ideal para o momento atual da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PLANS.map((plan) => (
            <div key={plan.id} className={`relative flex flex-col bg-white rounded-2xl transition-all duration-300 ${plan.recommended ? 'border-2 border-primary-400 shadow-2xl scale-105 z-10' : 'border border-gray-200 shadow-sm hover:shadow-lg'}`}>
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-500 text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                  Recomendado
                </div>
              )}
              <div className="p-8 flex-1">
                <h3 className="text-xl font-semibold text-secondary-900 font-serif">{plan.name}</h3>
                <div className="mt-4 flex items-baseline text-secondary-900">
                  <span className="text-4xl font-extrabold tracking-tight font-sans">{plan.price}</span>
                  <span className="ml-1 text-xl font-medium text-secondary-400">{plan.period}</span>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                         <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="ml-3 text-secondary-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-secondary-50/50 rounded-b-2xl border-t border-gray-100">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={`block w-full py-3.5 px-6 text-center rounded-lg font-bold text-sm tracking-wide transition ${plan.recommended ? 'bg-secondary-900 text-white hover:bg-secondary-800' : 'bg-white border border-secondary-200 text-secondary-900 hover:border-secondary-900'}`}>
                  ESCOLHER {plan.name.toUpperCase()}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 text-secondary-400 text-sm">
           * Plano Fiscal Anual com pagamento único de R$ 600,00.
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-secondary-900 py-20 relative overflow-hidden">
        {/* Abstract shapes/gradient */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6 font-serif">Pronto para profissionalizar seu negócio?</h2>
            <p className="text-secondary-200 text-lg mb-10 max-w-2xl mx-auto font-light">
                Junte-se a centenas de empresas que confiam na Atwork Office para seu endereço fiscal e comercial em Fortaleza.
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-primary-500 text-white font-bold py-4 px-10 rounded-full hover:bg-primary-600 transition shadow-lg shadow-primary-500/25 tracking-wide text-sm">
                FALE CONOSCO NO WHATSAPP
            </a>
        </div>
    </section>
  </>
);

const BlogPage = () => (
  <div className="bg-secondary-50 min-h-screen py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4 font-serif">Blog Atwork</h1>
        <p className="text-lg text-secondary-500 font-light">Insights sobre empreendedorismo e gestão no Ceará.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group">
            <div className="h-56 overflow-hidden relative">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" />
                <div className="absolute inset-0 bg-secondary-900/10 group-hover:bg-transparent transition"></div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 text-xs text-secondary-400 mb-4">
                <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                <span className="flex items-center gap-1 text-primary-600 font-bold bg-primary-50 px-2.5 py-1 rounded-md uppercase tracking-wider text-[10px]"><Tag size={12} /> {post.category}</span>
              </div>
              <h2 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-500 transition cursor-pointer font-serif leading-tight">
                {post.title}
              </h2>
              <p className="text-secondary-500 text-sm mb-6 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
              <a href="#" className="inline-flex items-center text-secondary-900 font-bold hover:text-primary-500 text-sm transition group/link">
                LER ARTIGO <ArrowRight size={16} className="ml-2 transform group-hover/link:translate-x-1 transition" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
);

const ServicesPage = () => (
    <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <h1 className="text-4xl font-bold text-secondary-900 font-serif">Nossos Serviços</h1>
                <p className="mt-4 text-secondary-500 max-w-2xl mx-auto font-light text-lg">Detalhes das nossas soluções premium.</p>
            </div>
            
            <div className="space-y-24">
                {SERVICES.map((service, index) => (
                    <div key={service.id} className={`flex flex-col md:flex-row gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="flex-1">
                            <div className="w-16 h-16 bg-primary-50 text-primary-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                <service.icon size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-secondary-900 mb-6 font-serif">{service.title}</h2>
                            <p className="text-lg text-secondary-500 mb-8 leading-relaxed font-light">{service.description}</p>
                            <ul className="space-y-4 mb-10">
                                {[1,2,3].map(i => (
                                    <li key={i} className="flex items-center text-secondary-600">
                                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-4"></div>
                                        <span className="text-sm">Vantagem exclusiva Atwork para {service.title}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-white bg-secondary-900 hover:bg-secondary-800 px-8 py-3 rounded-full font-bold text-sm inline-flex items-center transition shadow-lg">
                                SOLICITAR ORÇAMENTO <ArrowRight size={16} className="ml-2" />
                            </a>
                        </div>
                        <div className="flex-1 w-full h-96 rounded-2xl overflow-hidden shadow-2xl bg-gray-100 relative group">
                            {/* Logic to show building.jpg for 'fiscal', meeting.jpg for 'reuniao', others get random */}
                            <img 
                                src={
                                    service.id === 'fiscal' ? '/building.jpg' : 
                                    service.id === 'reuniao' ? '/meeting.jpg' :
                                    `https://picsum.photos/800/600?random=${index + 10}`
                                } 
                                alt={service.title} 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" 
                            />
                            <div className="absolute inset-0 bg-secondary-900/10 group-hover:bg-transparent transition"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

// -- Contact Section (Reused on Home) --
const ContactSection = () => (
    <section id="contact" className="bg-secondary-50 py-24 border-t border-secondary-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-5/12 p-12 bg-secondary-900 text-white flex flex-col justify-between relative overflow-hidden group">
                    {/* Background Building Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                         {/* Replace '/building.jpg' with the actual path to the uploaded image in your public folder */}
                        <img 
                          src="/building.jpg" 
                          alt="Edifício Sede Atwork Office - Torre Sul" 
                          className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition duration-700 scale-105 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-secondary-900/60 mix-blend-multiply"></div>
                    </div>
                    
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-6 font-serif">Fale Conosco</h3>
                        <p className="text-secondary-300 mb-10 font-light leading-relaxed">
                            Nossa equipe está pronta para apresentar a melhor solução para o seu negócio.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group/item">
                                <div className="w-10 h-10 rounded-full bg-secondary-800/80 backdrop-blur-sm group-hover/item:bg-primary-500 transition flex items-center justify-center text-white border border-secondary-700">
                                    <User size={18} />
                                </div>
                                <span className="text-sm font-medium">Atendimento Humanizado</span>
                            </div>
                            <div className="flex items-center gap-4 group/item">
                                <div className="w-10 h-10 rounded-full bg-secondary-800/80 backdrop-blur-sm group-hover/item:bg-primary-500 transition flex items-center justify-center text-white border border-secondary-700">
                                    <Check size={18} />
                                </div>
                                <span className="text-sm font-medium">Sem Compromisso</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 relative z-10">
                        <p className="text-xs text-secondary-400 uppercase tracking-wider mb-2">Central de Atendimento</p>
                        <p className="text-2xl font-bold text-white font-serif">{COMPANY_PHONE}</p>
                    </div>
                </div>
                
                <div className="md:w-7/12 p-12 bg-white">
                    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Obrigado pelo contato! Em breve retornaremos."); }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="col-span-1 md:col-span-2">
                                <label className="block text-xs font-bold text-secondary-500 uppercase tracking-wide mb-2">Nome Completo</label>
                                <input type="text" className="w-full px-4 py-3 bg-secondary-50 border border-secondary-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition text-secondary-900 placeholder-secondary-400" placeholder="Seu nome" required />
                            </div>
                            <div className="col-span-1 md:col-span-2">
                                <label className="block text-xs font-bold text-secondary-500 uppercase tracking-wide mb-2">Email Corporativo</label>
                                <input type="email" className="w-full px-4 py-3 bg-secondary-50 border border-secondary-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition text-secondary-900 placeholder-secondary-400" placeholder="seu@email.com" required />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-secondary-500 uppercase tracking-wide mb-2">Interesse</label>
                                <select className="w-full px-4 py-3 bg-secondary-50 border border-secondary-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition text-secondary-900">
                                    <option>Endereço Fiscal</option>
                                    <option>Endereço Comercial</option>
                                    <option>Escritório Virtual</option>
                                    <option>Outros</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-secondary-500 uppercase tracking-wide mb-2">Telefone</label>
                                <input type="tel" className="w-full px-4 py-3 bg-secondary-50 border border-secondary-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition text-secondary-900 placeholder-secondary-400" placeholder="(00) 00000-0000" />
                            </div>
                            <div className="col-span-1 md:col-span-2">
                                <label className="block text-xs font-bold text-secondary-500 uppercase tracking-wide mb-2">Mensagem</label>
                                <textarea rows={3} className="w-full px-4 py-3 bg-secondary-50 border border-secondary-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition text-secondary-900 placeholder-secondary-400" placeholder="Como podemos ajudar?"></textarea>
                            </div>
                        </div>
                        <button type="submit" className="w-full bg-secondary-900 text-white font-bold py-4 rounded-lg hover:bg-secondary-800 transition transform active:scale-[0.98] shadow-lg">
                            ENVIAR MENSAGEM
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
);


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col font-sans text-secondary-900 selection:bg-primary-100 selection:text-primary-900">
        <Navbar />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<><HomePage /><ContactSection /></>} />
            <Route path="/blog" element={<><BlogPage /><ContactSection /></>} />
            <Route path="/services" element={<><ServicesPage /><ContactSection /></>} />
          </Routes>
        </div>

        <Footer />
        <WhatsAppButton />
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;