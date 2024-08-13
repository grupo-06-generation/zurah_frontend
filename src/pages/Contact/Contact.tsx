import React from "react";

function Contact() {
  return (
    <>
      <div className="m-28">
        <h2 className=" mb-10  text-center text-[#A0522D] text-5xl font-bold">
          Contato
        </h2>
        <h3 className="my-8">E-mail: projetozurah@gmail.com</h3>
        <h3 className="my-8">
          Github: https://github.com/grupo-06-generation{" "}
        </h3>

        <h2 className=" mb-10  text-left text-[#A0522D] text-3xl font-bold">
          Entre em contato conosco:
        </h2>

        <div className="">
          <form action="" className="flex flex-col">
            <label form="nome">Nome:</label>
            <input type="text" id="nome" className="border my-200" />

            <label htmlFor="email">E-mail:</label>
            <input type="email" name="email" id="email" className="border"/>

            <label htmlFor="assunto">Assunto:</label>
            <input
              type="assunto"
              name="assunto"
              id="assunto"
              className="border"
            />

            <label htmlFor="mensagem">Mensagem:</label>
            <textarea name="mensagem" id="mensagem" className="border" />

            <button className="font-bold py-2 px-4 w-56 text-white bg-green-500 rounded-md hover:bg-green-700">
              Enviar
            </button>
            
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
