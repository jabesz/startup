import React from 'react';
import tractorImage from '../../assets/images/tractor_field_spray.jpeg';

const Features: React.FC = () => {
  return (
    <section id="funcionalidades" className="py-16 bg-gradient-to-b from-white to-[#dfffe2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f4235] mb-4">Tudo o que você precisa em um só lugar</h2>
          <p className="text-[#3e5b44] max-w-2xl mx-auto">Nossa plataforma oferece todas as ferramentas necessárias para o gerenciamento completo da sua produção agrícola.</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img 
              src={tractorImage} 
              alt="Tecnologia agrícola em ação" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="flex items-start">
                <div className="bg-[#4CAF50] w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#2f4235] mb-1">Gestão de safras</h3>
                  <p className="text-[#3e5b44]">Controle completo do ciclo de produção, do plantio à colheita.</p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex items-start">
                <div className="bg-[#4CAF50] w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#2f4235] mb-1">Controle de estoque</h3>
                  <p className="text-[#3e5b44]">Monitore insumos, sementes e produtos armazenados.</p>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="flex items-start">
                <div className="bg-[#4CAF50] w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#2f4235] mb-1">Organização financeira</h3>
                  <p className="text-[#3e5b44]">Acompanhe custos, receitas e lucratividade da sua produção.</p>
                </div>
              </div>
              
              {/* Feature 4 */}
              <div className="flex items-start">
                <div className="bg-[#4CAF50] w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#2f4235] mb-1">Previsões climáticas</h3>
                  <p className="text-[#3e5b44]">Acesse dados meteorológicos para planejar suas atividades.</p>
                </div>
              </div>
              
              {/* Feature 5 */}
              <div className="flex items-start">
                <div className="bg-[#4CAF50] w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#2f4235] mb-1">Acesso móvel</h3>
                  <p className="text-[#3e5b44]">Use no celular ou computador, mesmo offline no campo.</p>
                </div>
              </div>
              
              {/* Feature 6 */}
              <div className="flex items-start">
                <div className="bg-[#4CAF50] w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#2f4235] mb-1">Relatórios detalhados</h3>
                  <p className="text-[#3e5b44]">Visualize dados e estatísticas para melhores decisões.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
