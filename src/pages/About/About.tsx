//import React from "react";

function About() {
  return (
    <>
      <div>
        <div>
          <span>sobre nós</span>
          <h1>Uma frase sobre o projeto e a gente</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eum similique ex cum delectus iusto error numquam suscipit ratione! Consectetur vel odit maiores aliquid. Sint alias quo odio maxime doloremque.</p>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <div>
              <img src="https://cdn-icons-png.flaticon.com/512/261/261997.png" alt="" className="w-[64px] h-[64px]"/>
              <h2>titulo de um dos valores</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti cumque, maiores quidem sit quaerat vel exercitationem repudiandae voluptas</p>
            </div>
            <div>
              <img src="https://cdn-icons-png.flaticon.com/512/261/261997.png" alt="" className="w-[64px] h-[64px]"/>
              <h2>titulo de um dos valores</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti cumque, maiores quidem sit quaerat vel exercitationem repudiandae voluptas</p>
            </div>
          </div>
          <div className="col-span-4">
            <img src="../src/assets/legumes-verduras.png" alt="" className="rounded-3xl w-[358px] h-[556px]"/>
          </div>
          <div className="col-span-4">
            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/261/261997.png" alt="" className="w-[64px] h-[64px]"/>
                <h2>titulo de um dos valores</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti cumque, maiores quidem sit quaerat vel exercitationem repudiandae voluptas</p>
              </div>
              <div>
                <img src="https://cdn-icons-png.flaticon.com/512/261/261997.png" alt="" className="w-[64px] h-[64px]"/>
                <h2>titulo de um dos valores</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti cumque, maiores quidem sit quaerat vel exercitationem repudiandae voluptas</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
