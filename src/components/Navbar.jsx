function Navbar() {
    return (
        <>
            {/* CABEÇALHO */}
            <header>
                <div className="header-topo">
                    <a href="#inicio" className="logo">
                        <img
                            src="/Imagens/W_AMORAESLOGO.png"
                            alt="W.A Moraes Peças e Acessórios Automotivos"
                            className="logo-icone"
                        />

                        <div className="logo-texto">
                            <span>W.A Moraes</span>
                            <small>Peças e Acessórios Automotivos</small>
                        </div>
                    </a>
                </div>

                <nav>
                    <a href="#inicio">Início</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#destaques">Destaques</a>
                    <a href="#contato">Contato</a>
                </nav>
            </header>
        </>
    )
}

export default Navbar