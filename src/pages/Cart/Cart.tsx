import { FaLessThan, FaCreditCard } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import CartCard from '../../components/Cart/CartCard/CartCard';

function Cart() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-12 bg-[#FAEBD7]">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden w-full lg:w-1/2">
        <div className="m-6 w-full">
          <p className="text-gray-400 text-sm font-medium">CARRINHO</p>
          <hr className="mt-4"/>

          {/* Componente card cart */}
          <CartCard />
          {/* Fim Componente card cart */}
          <hr />
          {/* Componente card cart */}
          <CartCard />
          {/* Fim Componente card cart */}
          <hr />
          {/* Componente card cart */}
          <CartCard />
          {/* Fim Componente card cart */}

          <hr className='mb-4'/>

          <div className='flex items-center mxs-2'>
            <div className='w-1/2'>
              <Link to='/home' className=' flex items-center gap-1 text-xs text-green-700 hover:text-green-500 font-extralight'>
                <FaLessThan size={8}/>
                Continuar comprando
              </Link>
            </div>
            <div className='w-1/2 flex justify-end'>
              <p className='text-gray-600 font-medium'>SUBTOTAL: R$ 109,99</p>
            </div>
          </div>
          
        </div>
      </div>
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden w-full lg:w-3/4 xl:w-1/2 mt-2 xl:mt-4">
        <div className='m-6 flex items-center justify-between w-full'>
          <div>
            <p className='text-gray-600 font-normal text-xs mb-1'>SUBTOTAL: R$ 109,99</p>
            <p className='text-gray-600 font-normal text-xs mb-2'>FRETE: R$ 00,00</p>
            <p className='text-gray-600 font-medium text-xl'>TOTAL: R$ 109,99</p>
          </div>
          <button className='bg-green-500 flex items-center gap-3 text-white p-4 rounded'>
            <FaCreditCard size={20} />
            Ir para pagamento</button>
        </div>
      </div>
    </div>
  )
}

export default Cart