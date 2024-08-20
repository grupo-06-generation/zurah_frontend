function Cart() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] p-12 bg-[#FAEBD7]">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-3/4">
        <div className="m-6 w-full">
          <p className="text-gray-400 font-medium">CARRINHO</p>
          <hr className="w-1/2 mt-2"/>


          {/* Componente card cart */}
          <div className="p-2 flex items-center">
            <img src='src\assets\bananas.jpg' alt="" className="w-[50px] h-[40px] rounded"/>
            <p className="ml-2 text-sm text-gray-500 font-medium">Nome do produto</p>
            <p className="ml-2 text-sm text-gray-500 font-medium">R$ 70,69</p>
          </div>
          {/* Fim Componente card cart */}
          <hr />
          {/* Componente card cart */}
          <div className="p-2 flex items-center">
            <img src='src\assets\bananas.jpg' alt="" className="w-[50px] h-[40px] rounded"/>
            <p className="ml-2 text-sm text-gray-500 font-medium">Nome do produto</p>
            <p className="ml-2 text-sm text-gray-500 font-medium">R$ 70,69</p>
          </div>
          {/* Fim Componente card cart */}

        </div>
      </div>
    </div>
  )
}

export default Cart