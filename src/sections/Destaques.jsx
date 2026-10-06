const destaques = [
    {
        icone: '🔧',
        titulo: 'Qualidade Garantida',
        texto: 'Trabalhamos apenas com marcas reconhecidas e produtos de procedência confiáveis para o seu veículo.'
    },
    {
        icone: '🛒',
        titulo: 'Grande Variedade',
        texto: 'Temos um amplo catálogo com peças e acessórios para os mais diversos tipos de veículos e modelos.'
    },
    {
        icone: '😊',
        titulo: 'Atendimento Especial',
        texto: 'Nossa equipe está sempre pronta para ajudá-lo a encontrar exatamente o que você precisa.'
    }
]
function Destaques() {
    return (
        <>






            {/* DESTAQUES */}
            <section id="destaques">
                <h2 className="titulo-secao">Por que escolher a W.A Moraes?</h2>

                <div className="destaques">

                    {destaques.map((item, index) => (
                        <div className="card-destaque" key={index}>
                            <div className="icone-destaque">{item.icone}</div>
                            <h3>{item.titulo}</h3>
                            <p>{item.texto}</p>
                        </div>
                    ))}


                </div>
            </section>

        </>
    )
}

export default Destaques
