function Categories() {
  return (
    <section id="categorias" className="mb-12">
      <h2 className="text-[#A0522D] text-3xl font-bold">Categorias</h2>
      <div className="grid grid-cols-3 gap-8 mt-4">
        <div className="relative">
          <img
            src="src/assets/cenouras.jpg"
            alt="Cenouras"
            className="w-full h-40 object-cover rounded"
          />
          <div className="absolute bottom-0 left-0 w-full bg-green-800 text-white text-center">
            Vegetais
          </div>
        </div>
        <div className="relative">
          <img
            src="src/assets/couveflor.jpg"
            alt="Verduras"
            className="w-full h-40 object-cover rounded"
          />
          <div className="absolute bottom-0 left-0 w-full bg-green-800 text-white text-center">
            Verduras
          </div>
        </div>
        <div className="relative">
          <img
            src="src/assets/macaverde.jpg"
            alt="Frutas"
            className="w-full h-40 object-cover rounded"
          />
          <div className="absolute bottom-0 left-0 w-full bg-green-800 bg-opacity-1 text-white text-center">
            Frutas
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
