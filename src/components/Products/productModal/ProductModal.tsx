import ProductForm from '../productForm/ProductForm';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import './ProductModal.css';

function ProductModal() {
  return (
    <>
      <Popup 
      trigger={<button className='rounded bg-olive text-[#fff8eb] py-3 px-3'>Novo Produto</button>} modal>
        <div>
          <ProductForm />
        </div>
      </Popup>
    </>
  );
}

export default ProductModal;