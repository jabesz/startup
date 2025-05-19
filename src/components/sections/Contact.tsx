import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f4235] mb-4">Fique por dentro das novidades</h2>
          <p className="text-[#3e5b44] max-w-2xl mx-auto">Receba dicas, atualizações e informações relevantes para o seu negócio agrícola.</p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-[#dfffe2] to-[#c2e9c6] p-8 rounded-lg shadow-md">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#2f4235] mb-2">Inscreva-se em nossa newsletter</h3>
            <p className="text-[#3e5b44]">Prometemos enviar apenas conteúdo relevante para ajudar na gestão da sua produção.</p>
          </div>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-[#2f4235] font-medium mb-1">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 rounded-md border border-[#c2e9c6] focus:outline-none focus:ring-2 focus:ring-[#4CAF50]" 
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#2f4235] font-medium mb-1">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 rounded-md border border-[#c2e9c6] focus:outline-none focus:ring-2 focus:ring-[#4CAF50]" 
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="production" className="block text-[#2f4235] font-medium mb-1">Tipo de produção</label>
              <select 
                id="production" 
                className="w-full px-4 py-2 rounded-md border border-[#c2e9c6] focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
              >
                <option value="">Selecione o tipo de produção</option>
                <option value="grains">Grãos (milho, soja, trigo, etc.)</option>
                <option value="fruits">Frutas</option>
                <option value="vegetables">Hortaliças</option>
                <option value="coffee">Café</option>
                <option value="dairy">Leite e derivados</option>
                <option value="livestock">Pecuária</option>
                <option value="other">Outro</option>
              </select>
            </div>
            
            <div className="flex items-start">
              <input 
                type="checkbox" 
                id="terms" 
                className="mt-1 mr-2"
              />
              <label htmlFor="terms" className="text-[#3e5b44] text-sm">
                Concordo em receber e-mails com novidades, dicas e ofertas. Você pode cancelar a inscrição a qualquer momento.
              </label>
            </div>
            
            <button 
              type="submit" 
              className="bg-[#4CAF50] hover:bg-[#3a9141] text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Inscrever-se
            </button>
          </form>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-[#2f4235] mb-4">Precisa de ajuda?</h3>
          <p className="text-[#3e5b44] mb-4">Nossa equipe está pronta para responder suas dúvidas e ajudar você a começar.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="mailto:contato@agrotech.com" 
              className="inline-flex items-center text-[#4CAF50] hover:text-[#3a9141] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              contato@agrotech.com
            </a>
            <a 
              href="tel:+551199999999" 
              className="inline-flex items-center text-[#4CAF50] hover:text-[#3a9141] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (11) 9999-9999
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
