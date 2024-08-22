import { BadgePercent, Beef, Carrot, Milk, Vegan } from 'lucide-react';
import { Link } from 'react-router-dom';
import Category from '../../models/Category';
function CategoryConsumer() {

    return (
        <>
            <div className="flex justify-center items-center flex-wrap">
                <div className="flex flex-col flex-wrap border-b-[1px] w-[1400px] mb-5 py-2">
                    <h2 className="text-[20px] text-olive leading-3 font-medium">
                        Compre por
                    </h2>
                    <h1 className="text-[30px] text-[#757575] font-medium">
                        Categorias
                    </h1>
                </div>
                <div className="w-[1400px] h-[200px] flex flex-row justify-between items-center">

                    <Link to={`/produtos/`}>
                    <div className="w-[180px] h-[180px] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    <BadgePercent className='text-olive w-[100px] h-[100px]' />
                    </div>                   
                    </Link>

                    <Link to={'/adicionar-categoria'}>
                    <div className="w-[180px] h-[180px] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    <Vegan className='text-olive w-[100px] h-[100px]' />
                    </div>
                    </Link>
                    
                    <div className="w-[180px] h-[180px] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    <Carrot className='text-olive w-[100px] h-[100px]' />
                    </div>

                    <div className="w-[180px] h-[180px] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    <Beef className='text-olive w-[100px] h-[100px]' />
                    </div>
                    
                    <div className="w-[180px] h-[180px] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    <Milk className='text-olive w-[100px] h-[100px]' />
                    </div>
                </div>
                <div>
                    <ul className='flex justify-between items-center'>
                        <li className=''>
                            <a href="#">OFERTAS</a>
                        </li>

                        <li>
                            <a href="#">ORGÂNICOS</a>
                        </li>

                        <li>
                            <a href="#">HORTIFRUTI</a>
                        </li>

                        <li>
                            <a href="#">AÇOUGUE & PEIXARIA</a>
                        </li>

                        <li>
                            <a href="#">FRIOS, QUEIJOS E LATICÍNIOS</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default CategoryConsumer;
