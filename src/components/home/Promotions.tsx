function Promotions() {
  return (
    <section id="promocoes">
      <h2 className="text-[#A0522D] text-3xl font-bold">Promoções</h2>
      <div className="grid grid-cols-3 gap-8 mt-4">
        <div className="relative">
          <img
            src="src/assets/frutinhas-veg.jpg"
            alt="Vegetais e frutas"
            className="w-full h-40 object-cover rounded"
          />
          <div className="absolute bottom-0 left-0 w-full bg-orange-500 text-white text-center">
            Mix de frutas e vegetais
          </div>
        </div>

        <div className="relative">
          <img
            src="src/assets/bananas.jpg"
            alt="Bananas"
            className="w-full h-40 object-cover rounded"
          />
          <div className="absolute bottom-0 left-0 w-full bg-orange-500 text-white text-center">
            Frutas em época de colheita
          </div>
        </div>

        <div className="relative">
          <img
            src="src/assets/legumes-verduras.png"
            alt="Cenouras"
            className="w-full h-40 object-cover rounded"
          />
          <div className="absolute bottom-0 left-0 w-full bg-orange-500 text-white text-center">
            Oferta de combos
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promotions;
