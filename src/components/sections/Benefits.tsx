import React from 'react';

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f4235] mb-4">Por que escolher nossa plataforma?</h2>
          <p className="text-[#3e5b44] max-w-2xl mx-auto">Nossa solução foi desenvolvida especialmente para pequenos produtores rurais, com foco em simplicidade e resultados.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-[#dfffe2] to-[#c2e9c6] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-[#4CAF50] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#2f4235] mb-2">Organização e controle total</h3>
            <p className="text-[#3e5b44]">Gerencie todas as informações da sua produção em um só lugar, de forma organizada e acessível.</p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-gradient-to-br from-[#dfffe2] to-[#c2e9c6] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-[#4CAF50] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#2f4235] mb-2">Redução de desperdício</h3>
            <p className="text-[#3e5b44]">Otimize o uso de recursos e reduza perdas com planejamento baseado em dados reais da sua produção.</p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-gradient-to-br from-[#dfffe2] to-[#c2e9c6] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-[#4CAF50] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#2f4235] mb-2">Aumento da lucratividade</h3>
            <p className="text-[#3e5b44]">Tome decisões mais inteligentes que impactam diretamente nos resultados financeiros da sua produção.</p>
          </div>
          
          {/* Card 4 */}
          <div className="bg-gradient-to-br from-[#dfffe2] to-[#c2e9c6] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-[#4CAF50] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#2f4235] mb-2">Planejamento eficiente</h3>
            <p className="text-[#3e5b44]">Antecipe-se aos desafios com previsões climáticas e planejamento estratégico da sua produção.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
