import { FaCartArrowDown } from 'react-icons/fa6';

function CartEmpty() {
  return (
    <div className='flex flex-col justify-center items-center my-6 text-gray-200'>
        <FaCartArrowDown size={48} />
        <p className='text-gray-300'>Seu carrinho está vazio</p>
    </div>
  )
}

export default CartEmpty