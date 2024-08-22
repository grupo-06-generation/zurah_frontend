//import React from "react";

import { Flower, FlowerLotus, Tractor, Tree } from "@phosphor-icons/react";

function About() {
  return (
    <>
      <div className="py-16 px-8">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-green-100 text-olive rounded-xl py-[4px] px-[6px] flex justify-center items-center">
            <p className="font-semibold uppercase text-[25px] inline-block">sobre nós</p>
          </div>
          <h1 className="font-bold text-[32px] text-gray-900 text-center my-3 px-40">Cultivando conexões justas entre o campo e a mesa, promovendo a agricultura familiar e garantindo alimentos frescos e de qualidade.</h1>
          <p className="text-gray-500 text-[14px] text-center w-3/4">Zurah é mais que um marketplace, somos a raiz de uma nova cadeia alimentar. Inspirados na palavra árabe "zurah", que significa agricultura, conectamos pequenos produtores rurais diretamente com restaurantes, promovendo uma relação comercial justa e sustentável. Nossa missão é cultivar conexões que fortaleçam a agricultura familiar, garantindo alimentos frescos e de qualidade para todos. Acreditamos nos valores das raízes, do florescimento e da colheita, construindo um futuro mais saboroso e sustentável para todos..</p>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-4 p-6">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center m-6 mb-10">
              <Tree size={32} color="#556b2f" weight="bold" />
                  <h2 className="font-bold text-[20px] text-gray-900 text-center my-3">Raízes</h2>
                  <p className="text-gray-500 text-[14px] text-center">Valorizamos a tradição e o conhecimento dos pequenos produtores, preservando a cultura e as técnicas agrícolas ancestrais.</p>
                </div>
                <div className="flex flex-col items-center justify-center m-6">
                <Flower size={32} color="#556b2f" weight="bold" />
                  <h2 className="font-bold text-[20px] text-gray-900 text-center my-3">Florescimento</h2>
                  <p className="text-gray-500 text-[14px] text-center">Incentivamos o crescimento dos pequenos produtores, oferecendo ferramentas e oportunidades para que seus negócios prosperem.</p>
                </div>
            </div>
            </div>
            <div className="col-span-4 p-4">
              <div className="flex items-center justify-center m-6">
                <img src="../src/assets/about-image.jpg" alt="cesta de leguminosas" className="rounded-3xl w-[370px] h-[400px] "/>
              </div>
            </div>
            <div className="col-span-4 p-6">
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center m-6 mb-10">
                <Tractor size={32} color="#556b2f" weight="bold" />
                    <h2 className="font-bold text-[20px] text-gray-900 text-center my-3">Colheita</h2>
                    <p className="text-gray-500 text-[14px] text-center">Celebramos os frutos do trabalho dos produtores, oferecendo aos consumidores alimentos saudáveis e saborosos, colhidos com cuidado e respeito à natureza.</p>
                  </div>
                  <div className="flex flex-col items-center justify-center m-6">
                  <FlowerLotus size={32} color="#556b2f" weight="bold" />
                    <h2 className="font-bold text-[20px] text-gray-900 text-center my-3">Qualidade</h2>
                    <p className="text-gray-500 text-[14px] text-center">Oferecemos produtos frescos, de alta qualidade e com sabor inigualável, valorizando a diversidade da produção local.</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default About;
