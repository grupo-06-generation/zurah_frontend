//import React from "react";

function About() {
  return (
    <>
      <div className="py-16 px-8">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-green-100 text-green-600 rounded-xl py-[4px] px-[6px] flex justify-center items-center">
            <p className="font-semibold uppercase text-[12px] inline-block">sobre nós</p>
          </div>
          <h1 className="font-bold text-[32px] text-gray-900 text-center my-3">Uma frase sobre o projeto e a gente</h1>
          <p className="text-gray-500 text-[14px] text-center w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eum similique ex cum delectus iusto error numquam suscipit ratione! Consectetur vel odit maiores aliquid. Sint alias quo odio maxime doloremque.</p>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-4 p-6">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center m-6 mb-10">
                  <img src="src\assets\img-sobre\contact.svg" alt="" className="w-[52px] h-[52px]"/>
                  <h2 className="font-bold text-[20px] text-gray-900 text-center my-3">titulo de um dos valores</h2>
                  <p className="text-gray-500 text-[14px] text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti cumque, maiores quidem sit quaerat vel exercitationem repudiandae voluptas</p>
                </div>
                <div className="flex flex-col items-center justify-center m-6">
                  <img src="src\assets\img-sobre\pen.svg" alt="" className="w-[52px] h-[52px]"/>
                  <h2 className="font-bold text-[20px] text-gray-900 text-center my-3">titulo de um dos valores</h2>
                  <p className="text-gray-500 text-[14px] text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti cumque, maiores quidem sit quaerat vel exercitationem repudiandae voluptas</p>
                </div>
            </div>
            </div>
            <div className="col-span-4 p-4">
              <div className="flex items-center justify-center m-6">
                <img src="../src/assets/legumes-verduras.png" alt="" className="rounded-3xl w-[370px] h-[500px] "/>
              </div>
            </div>
            <div className="col-span-4 p-6">
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center m-6 mb-10">
                    <img src="src\assets\img-sobre\analytics.svg" alt="" className="w-[52px] h-[52px]"/>
                    <h2 className="font-bold text-[20px] text-gray-900 text-center my-3">titulo de um dos valores</h2>
                    <p className="text-gray-500 text-[14px] text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti cumque, maiores quidem sit quaerat vel exercitationem repudiandae voluptas</p>
                  </div>
                  <div className="flex flex-col items-center justify-center m-6">
                    <img src="src\assets\img-sobre\tools.svg" alt="" className="w-[52px] h-[52px]"/>
                    <h2 className="font-bold text-[20px] text-gray-900 text-center my-3">titulo de um dos valores</h2>
                    <p className="text-gray-500 text-[14px] text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti cumque, maiores quidem sit quaerat vel exercitationem repudiandae voluptas</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default About;
