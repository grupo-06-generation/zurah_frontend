import Team from "@/components/Team/Team";
import {
  Flower,
  FlowerLotus,
  Tractor,
  Tree,
  UsersFour,
} from "@phosphor-icons/react";

function About() {
  return (
    <>
      <div className="py-8 px-4 sm:px-8">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-green-100 text-olive rounded-xl py-2 px-4 flex justify-center items-center">
            <p className="font-semibold uppercase text-lg sm:text-xl md:text-2xl">
              Sobre nós
            </p>
          </div>
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl text-gray-900 text-center my-3 px-4 sm:px-8">
            Cultivando conexões justas entre o campo e a mesa, promovendo a
            agricultura familiar e garantindo alimentos frescos e de qualidade.
          </h1>
          <p className="text-gray-500 text-sm sm:text-base text-center w-full sm:w-3/4 md:w-2/3">
            Zurah é mais que um marketplace, somos a raiz de uma nova cadeia
            alimentar. Inspirados na palavra árabe "zurah", que significa
            agricultura, conectamos pequenos produtores rurais diretamente com
            restaurantes, promovendo uma relação comercial justa e sustentável.
            Nossa missão é cultivar conexões que fortaleçam a agricultura
            familiar, garantindo alimentos frescos e de qualidade para todos.
            Acreditamos nos valores das raízes, do florescimento e da colheita,
            construindo um futuro mais saboroso e sustentável para todos.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center m-6 mb-10">
                <Tree size={32} color="#556b2f" weight="bold" />
                <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-gray-900 text-center my-3">
                  Raízes
                </h2>
                <p className="text-gray-500 text-sm sm:text-base text-center">
                  Valorizamos a tradição e o conhecimento dos pequenos
                  produtores, preservando a cultura e as técnicas agrícolas
                  ancestrais.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center m-6">
                <Flower size={32} color="#556b2f" weight="bold" />
                <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-gray-900 text-center my-3">
                  Florescimento
                </h2>
                <p className="text-gray-500 text-sm sm:text-base text-center">
                  Incentivamos o crescimento dos pequenos produtores, oferecendo
                  ferramentas e oportunidades para que seus negócios prosperem.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 flex items-center justify-center">
            <img
              src="https://i.imgur.com/x15L6Rb.jpeg"
              alt="cesta de legumes"
              className="rounded-3xl w-full max-w-[370px] h-auto"
            />
          </div>
          <div className="p-6">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center m-6 mb-10">
                <Tractor size={32} color="#556b2f" weight="bold" />
                <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-gray-900 text-center my-3">
                  Colheita
                </h2>
                <p className="text-gray-500 text-sm sm:text-base text-center">
                  Celebramos os frutos do trabalho dos produtores, oferecendo
                  aos consumidores alimentos saudáveis e saborosos, colhidos com
                  cuidado e respeito à natureza.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center m-6">
                <FlowerLotus size={32} color="#556b2f" weight="bold" />
                <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-gray-900 text-center my-3">
                  Qualidade
                </h2>
                <p className="text-gray-500 text-sm sm:text-base text-center">
                  Oferecemos produtos frescos, de alta qualidade e com sabor
                  inigualável, valorizando a diversidade da produção local.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-16 border-t border-gray-300"></div>

        <Team />
      </div>
    </>
  );
}

export default About;
