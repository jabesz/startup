import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#dfffe2] to-[#c2e9c6] shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-[#2f4235] text-xl md:text-2xl font-bold">AgroTech</h1>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#beneficios" className="text-[#3e5b44] hover:text-[#2f4235] transition-colors">Benefícios</a>
          <a href="#funcionalidades" className="text-[#3e5b44] hover:text-[#2f4235] transition-colors">Funcionalidades</a>
          <a href="#como-funciona" className="text-[#3e5b44] hover:text-[#2f4235] transition-colors">Como Funciona</a>
          <a href="#planos" className="text-[#3e5b44] hover:text-[#2f4235] transition-colors">Planos</a>
          <a href="#contato" className="text-[#3e5b44] hover:text-[#2f4235] transition-colors">Contato</a>
        </nav>
        
        <button className="bg-[#4CAF50] hover:bg-[#3a9141] text-white px-4 py-2 rounded-md transition-colors">
          Comece Agora
        </button>
        
        <button className="md:hidden text-[#2f4235]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
