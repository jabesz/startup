import React from 'react';
import droneImage from '../../assets/images/drone_corn_field.jpeg';

const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f4235] mb-4">Simples de usar, poderoso nos resultados</h2>
          <p className="text-[#3e5b44] max-w-2xl mx-auto">Em apenas três passos, você transforma a gestão da sua produção agrícola.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#4CAF50] w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold text-[#2f4235] mb-2">Cadastre-se na plataforma</h3>
            <p className="text-[#3e5b44]">Crie sua conta gratuitamente e configure seu perfil de produtor rural em poucos minutos.</p>
            <div className="mt-4 h-48 w-full bg-gradient-to-br from-[#dfffe2] to-[#c2e9c6] rounded-lg flex items-center justify-center p-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-[#3e5b44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#4CAF50] w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold text-[#2f4235] mb-2">Insira os dados da sua produção</h3>
            <p className="text-[#3e5b44]">Cadastre suas áreas de cultivo, insumos, equipamentos e informações financeiras.</p>
            <div className="mt-4 h-48 w-full bg-gradient-to-br from-[#dfffe2] to-[#c2e9c6] rounded-lg flex items-center justify-center p-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-[#3e5b44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#4CAF50] w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold text-[#2f4235] mb-2">Comece a gerenciar e tomar melhores decisões</h3>
            <p className="text-[#3e5b44]">Utilize as ferramentas e relatórios para otimizar sua produção e aumentar seus lucros.</p>
            <div className="mt-4 h-48 w-full bg-gradient-to-br from-[#dfffe2] to-[#c2e9c6] rounded-lg flex items-center justify-center p-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-[#3e5b44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <img 
            src={droneImage} 
            alt="Tecnologia agrícola moderna" 
            className="rounded-lg shadow-xl max-w-3xl mx-auto h-auto object-cover"
          />
          <button className="mt-8 bg-[#4CAF50] hover:bg-[#3a9141] text-white px-6 py-3 rounded-md text-lg font-medium transition-colors inline-block">
            Comece sua jornada agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
