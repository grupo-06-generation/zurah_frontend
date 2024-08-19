import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <>
      <div className="m-28">
        <h1 className=" mb-10 font-['Linden_Hill'] text-center text-[#A0522D] text-7xl font-bold">
          Zurah
        </h1>
        <h2
          style={{ color: "#A0522D", fontSize: "1.5rem", marginBottom: "20px" }}
        >
          ‘Zuraia’ (زراعة - “zurah”) é a palavra em Árabe, transcrita para um
          entendimento ocidental, para “agricultura”. Os egípcios foram um dos
          primeiros povos a cultivar no mundo, por conta disso escolhemos esse
          nome para ser representativo e atrativo para o público em geral.
        </h2>

        <div className="my-8">
          <p>
            <strong>Impacto 1:</strong> A desigualdade financeira perpetua a
            pobreza, especialmente entre pequenos produtores rurais que não têm
            acesso aos mesmos recursos que as grandes empresas.
          </p>
          <p>
            <strong>Consequência:</strong> A pobreza leva à exclusão social,
            onde os indivíduos e famílias não têm acesso a serviços básicos como
            educação, saúde, e moradia adequada, perpetuando um ciclo de
            privação.
          </p>
        </div>

        <div>
          <p>
            <strong>Impacto 2:</strong> Pequenos produtores têm menos acesso a
            crédito, tecnologia, e mercados em comparação com grandes empresas.
          </p>
          <p>
            <strong>Consequência:</strong> Isso resulta em uma desigualdade de
            oportunidades, onde os pequenos produtores não podem competir de
            maneira justa, limitando suas chances de crescimento e
            desenvolvimento econômico.
          </p>
        </div>

        <h2 style={{ color: "#A0522D", fontSize: "1.5rem", marginTop: "20px" }}>
          Nosso Compromisso
        </h2>
        <p>
          Na Zurah, estamos comprometidos em promover a igualdade e oferecer
          suporte aos pequenos produtores rurais. Acreditamos que todos devem
          ter acesso aos recursos necessários para crescer e prosperar.
          Trabalhamos para fornecer ferramentas, conhecimento e oportunidades
          para ajudar esses produtores a competir de forma justa no mercado
          global.
        </p>

        <h2 style={{ color: "#A0522D", fontSize: "1.5rem", marginTop: "20px" }}>
          Nossos Objetivos
        </h2>
        <ul style={{ listStyleType: "none", padding: 0, textAlign: "left" }}>
          <li>🌱 Promover a sustentabilidade agrícola.</li>
          <li>🌍 Reduzir a desigualdade financeira entre produtores rurais.</li>
          <li>
            📈 Facilitar o acesso a tecnologias e mercados para pequenos
            produtores.
          </li>
          <li>
            🤝 Fomentar a cooperação e a troca de conhecimentos entre
            agricultores.
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default About;
