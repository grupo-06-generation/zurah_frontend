import ProductForm from '../productForm/ProductForm';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import './ProductModal.css';

function ProductModal() {
  return (
    <>
      <Popup 
      trigger={<button className='rounded bg-[#ff8000] text-[#1f2937] py-3 px-4'>Novo Produto</button>} modal>
        <div>
          <ProductForm />
        </div>
      </Popup>
    </>
  );
}

export default ProductModal;