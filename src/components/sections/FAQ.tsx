import React from 'react';

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-16 bg-gradient-to-b from-white to-[#dfffe2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f4235] mb-4">Perguntas Frequentes</h2>
          <p className="text-[#3e5b44] max-w-2xl mx-auto">Tire suas dúvidas sobre nossa plataforma e como ela pode ajudar na gestão da sua produção agrícola.</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-[#2f4235] mb-2">Preciso ter conhecimento em tecnologia para usar a plataforma?</h3>
              <p className="text-[#3e5b44]">
                Não, nossa plataforma foi desenvolvida pensando em produtores rurais de todos os níveis de conhecimento tecnológico. A interface é intuitiva e fácil de usar, e oferecemos tutoriais e suporte para ajudar você a começar.
              </p>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-[#2f4235] mb-2">Posso acessar a plataforma sem internet no campo?</h3>
              <p className="text-[#3e5b44]">
                Sim, nos planos Profissional e Premium, você pode usar o aplicativo móvel em modo offline e sincronizar os dados quando tiver conexão com a internet novamente.
              </p>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-[#2f4235] mb-2">Como a plataforma pode me ajudar a reduzir custos?</h3>
              <p className="text-[#3e5b44]">
                Nossa plataforma permite que você acompanhe todos os seus gastos, identifique onde estão os maiores custos e planeje melhor o uso de insumos. Além disso, as previsões climáticas ajudam a evitar perdas por condições adversas.
              </p>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-[#2f4235] mb-2">Posso experimentar a plataforma antes de assinar?</h3>
              <p className="text-[#3e5b44]">
                Sim, oferecemos um período de teste gratuito de 14 dias com todas as funcionalidades do plano Profissional. Você pode cancelar a qualquer momento durante esse período sem nenhum custo.
              </p>
            </div>
            
            {/* FAQ Item 5 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-[#2f4235] mb-2">Meus dados estão seguros na plataforma?</h3>
              <p className="text-[#3e5b44]">
                Absolutamente. Utilizamos tecnologias avançadas de criptografia e seguimos rigorosos protocolos de segurança para proteger todos os seus dados. Além disso, você mantém total propriedade sobre suas informações.
              </p>
            </div>
            
            {/* FAQ Item 6 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-[#2f4235] mb-2">Posso mudar de plano depois?</h3>
              <p className="text-[#3e5b44]">
                Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças entram em vigor no próximo ciclo de faturamento, e os valores são ajustados proporcionalmente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
