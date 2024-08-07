import React from 'react';
import Footer from '../../components/Footer/Footer';

function Home() {
    return (

        <div className="min-h-screen bg-[#FAEBD7] flex flex-col items-center">

            <main className="flex-grow w-full max-w-screen-lg p-8">
                <section id="home" className="mb-12">
                    <h2 className="font text-[#A0522D] text-3xl font-bold text-center">Novidades</h2>
                    <div className="mt-4 flex flex-col items-center justify-center">
                    <img src="src/assets/techagro.jpg" alt="Agricultor" className="w-full h-40 object-cover rounded" />
                    <div className="bg-[#FAEBD7] border border-[#A0522D] rounded-full w-12 h-12 flex items-center justify-center mt-2">...</div>
                    </div>
                </section>

                <section id="categorias" className="mb-12">
                    <h2 className="text-[#A0522D] text-3xl font-bold">Categorias</h2>
                    <div className="grid grid-cols-3 gap-8 mt-4">
                        <div className="relative">
                            <img src="src/assets/cenouras.jpg" alt="Cenouras" className="w-full h-40 object-cover rounded" />
                            <div className="absolute bottom-0 left-0 w-full bg-green-800 text-white text-center">Vegetais</div>
                        </div>
                        <div className="relative">
                            <img src="src/assets/couveflor.jpg" alt="Verduras" className="w-full h-40 object-cover rounded" />
                            <div className="absolute bottom-0 left-0 w-full bg-green-800 text-white text-center">Verduras</div>
                        </div>
                        <div className="relative">
                            <img src="src/assets/macaverde.jpg" alt="Frutas" className="w-full h-40 object-cover rounded" />
                            <div className="absolute bottom-0 left-0 w-full bg-green-800 bg-opacity-1 text-white text-center">Frutas</div>
                        </div>

                    </div>
                </section>

                <section id="promocoes">
                    <h2 className="text-[#A0522D] text-3xl font-bold">Promoções</h2>
                    <div className="grid grid-cols-3 gap-8 mt-4">
                    <div className="relative">
                            <img src="src/assets/frutinhas-veg.jpg" alt="Vegetais e frutas" className="w-full h-40 object-cover rounded" />
                            <div className="absolute bottom-0 left-0 w-full bg-orange-500 text-white text-center">Mix de frutas e vegetais</div>
                    </div>

                    <div className="relative">
                            <img src="src/assets/bananas.jpg" alt="Bananas" className="w-full h-40 object-cover rounded" />
                            <div className="absolute bottom-0 left-0 w-full bg-orange-500 text-white text-center">Frutas em época de colheita</div>
                    </div>

                    <div className="relative">
                            <img src="src/assets/legumes-verduras.png" alt="Cenouras" className="w-full h-40 object-cover rounded" />
                            <div className="absolute bottom-0 left-0 w-full bg-orange-500 text-white text-center">Oferta de combos</div>
                    </div>



                    </div>
                </section>
            </main>

            <Footer />
        </div>
    
    );
}

export default Home;