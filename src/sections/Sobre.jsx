function Sobre() {
  return (
    <>
    {/* HISTÓRIA */}
        <section id="sobre" className="sobre-intro">
            <div className="sobre-texto">
                <h2>Nossa História</h2>
                <p>
                    A W.A Moraes Peças e Acessórios Automotivos foi fundada em 1985 pelos empreendedores
                    Waldemar Alexandre de Moraes, que desde jovem tinha paixão pelo mundo automotivo.
                    O que começou como uma pequena loja de bairro foi crescendo ao longo dos anos, graças
                    à dedicação da família e ao carinho dos clientes fiéis.
                </p>
                <p>
                    Hoje, com mais de 40 anos de mercado, somos referência na região em venda de peças
                    e acessórios automotivos, atendendo tanto mecânicos profissionais quanto proprietários
                    de veículos que buscam produtos de qualidade com o melhor custo-benefício.
                </p>
            </div>
        </section>

        {/* MISSÃO, VISÃO E VALORES */}
        <section>
            <h2 className="titulo-secao">Missão, Visão e Valores</h2>

            <div className="missao-visao">

                <div className="card-mv">
                    <h3>🎯 Missão</h3>
                    <p>
                        Oferecer peças e acessórios automotivos de qualidade, com atendimento personalizado
                        e preços justos, contribuindo para a segurança e satisfação dos nossos clientes no
                        cuidado com seus veículos.
                    </p>
                </div>

                <div className="card-mv">
                    <h3>👁️ Visão</h3>
                    <p>
                        Ser reconhecida como a loja automotiva mais confiável e completa da região,
                        expandindo nosso catálogo e nosso atendimento para cada vez mais cidades e clientes.
                    </p>
                </div>

                <div className="card-mv">
                    <h3>💛 Compromisso</h3>
                    <p>
                        Tratamos cada cliente como único. Nosso compromisso é garantir que você saia
                        satisfeito, com o produto certo, na hora certa e dentro do seu orçamento.
                    </p>
                </div>

            </div>
        </section>

        {/* VALORES */}
        <section>
            <h2 className="titulo-secao">Nossos Valores</h2>
            <ul className="valores-lista">
                <li>Honestidade</li>
                <li>Qualidade</li>
                <li>Responsabilidade</li>
                <li>Respeito ao cliente</li>
                <li>Comprometimento</li>
                <li>Transparência</li>
                <li>Inovação</li>
            </ul>
        </section>

        {/* DIFERENCIAIS */}
        <section className="diferenciais">
            <h2>Nossos Diferenciais</h2>
            <ul>
                <li>Mais de 40 anos de experiência no mercado automotivo</li>
                <li>Produtos originais e de procedência garantida</li>
                <li>Equipe treinada para indicar a peça certa para cada veículo</li>
                <li>Preços competitivos com condições de pagamento facilitadas</li>
                <li>Entrega disponível para toda a região metropolitana</li>
                <li>Estoque amplo com grande variedade de marcas e modelos</li>
                <li>Atendimento rápido e sem burocracia</li>
            </ul>
        </section>
 

    



    

   
    

   

    

        </>
  )
}

export default Sobre



