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

        <div className="flex flex-col items-center">
          <h2 className="font-bold text-[#843c0a] text-center mb-8 text-xl sm:text-2xl md:text-3xl">
            Nosso Time
          </h2>

          <div className="grid grid-cols-3 gap-4">
            <a
              href="https://www.linkedin.com/in/bella-esposito-rei/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQHldzAzd0uT6w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1716419804235?e=1730332800&v=beta&t=PQK67uYopFtrLWwVSZq8I_M4XyOBnbAvR_yRNZ2sXRU"
                alt="Bella Espósito"
                className="rounded-full w-16 h-16 sm:w-24 sm:h-24 object-cover hover:scale-95 transition-transform transform"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/wallacy-menezes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQGtBadx5qPdiA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718217706332?e=1730332800&v=beta&t=K9aERIXb1pYz7sYQUT5HeH4D779DhPJzZ-WHfrhUlbo"
                alt="Wallacy Menezes"
                className="rounded-full w-16 h-16 sm:w-24 sm:h-24 object-cover hover:scale-95 transition-transform transform"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/mariliamarquesrodrigues/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQE64swpMfznxg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1690411810275?e=1730332800&v=beta&t=-2j9qGNyndTEy8xjnQCKHUMwoKmFcmX9A8hmqap1gys"
                alt="Marília Rodrigues"
                className="rounded-full w-16 h-16 sm:w-24 sm:h-24 object-cover hover:scale-95 transition-transform transform"
              />
            </a>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/israeloliveiradev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQGdWPHpj-BOIw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724602645714?e=1730332800&v=beta&t=wKlDHm8dEZXiVF1BztJ5AJbtc0U_LvnyZ8AQ6y2ZaI4"
                alt="Israel Oliveira"
                className="rounded-full w-16 h-16 sm:w-24 sm:h-24 object-cover hover:scale-95 transition-transform transform"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/fernanda-shinoda/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQEWzqqu7yQ4Xw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720638188649?e=1730332800&v=beta&t=EWHyTH8D9tW5CpOgCMLvVl_gBNJ4gKCSvcmpTPQX2Ss"
                alt="Fernanda Shinoda"
                className="rounded-full w-16 h-16 sm:w-24 sm:h-24 object-cover hover:scale-95 transition-transform transform"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/michelgoncalvess/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQE90ojFFjmQNA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722556905758?e=1730332800&v=beta&t=a-QCpigBjWjp8c2lKNJBjqNFtJ0CffzlTMY6L_bXxYc"
                alt="Michel Gonçalves"
                className="rounded-full w-16 h-16 sm:w-24 sm:h-24 object-cover hover:scale-95 transition-transform transform"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/juyoonp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQHFIZ35LpkKxg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718237251490?e=1730332800&v=beta&t=oycAT5EuDSZBkbSmUdvjZBcnMRpCg9qjcYS-SSaXHy4"
                alt="Júlia Almeida"
                className="rounded-full w-16 h-16 sm:w-24 sm:h-24 object-cover hover:scale-95 transition-transform transform"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
