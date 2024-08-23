import ProductForm from '../productForm/ProductForm';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import './ProductModal.css';
import { ScrollArea } from '@/components/ui/scroll-area';

function ProductModal() {
  return (
    <>
        <Popup 
        trigger={<button className='rounded bg-olive text-[#fff8eb] py-3 px-3'>Novo Produto</button>} modal>
          <ScrollArea className='h-[550px] rounded-md border'>
            <div>
              <ProductForm />
            </div>
          </ScrollArea>
        </Popup>
    </>
  );
}

export default ProductModal;