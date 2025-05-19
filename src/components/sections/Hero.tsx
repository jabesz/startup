import React from 'react';
import cornFieldImage from '../../assets/images/corn_field_sunset.jpeg';
import tractorImage from '../../assets/images/tractor_field_spray.jpeg';
import droneImage from '../../assets/images/drone_corn_field.jpeg';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#dfffe2] to-[#c2e9c6] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2f4235] mb-4">
              Gerencie sua produção agrícola com eficiência e precisão
            </h1>
            <p className="text-xl text-[#3e5b44] mb-8">
              A plataforma completa que ajuda pequenos produtores rurais a aumentar sua produtividade e lucros
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#4CAF50] hover:bg-[#3a9141] text-white px-6 py-3 rounded-md text-lg font-medium transition-colors">
                Comece Gratuitamente
              </button>
              <button className="border-2 border-[#3e5b44] text-[#3e5b44] hover:bg-[#3e5b44] hover:text-white px-6 py-3 rounded-md text-lg font-medium transition-colors">
                Saiba Mais
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src={cornFieldImage} 
                alt="Agricultor gerenciando produção" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg hidden md:block">
                <img 
                  src={droneImage} 
                  alt="Tecnologia agrícola" 
                  className="w-32 h-32 object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
