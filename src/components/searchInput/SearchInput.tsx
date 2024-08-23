// import { MagnifyingGlass } from 'phosphor-react'
// import React, { useEffect, useState } from 'react'
// import CardProduct from '../Products/CardProduct/CardProduct';

// function SearchInput() {

//     const [products, setProducts] = useState([]);
//     const [busca, setBusca] = useState('');
//     const [produtosFiltrados, setProdutosFiltrados] = useState([]);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await fetch('https://zurah-backend.onrender.com/product');
//                 const data = await response.json();
//                 console.log(data);
//                 setProducts(data);
//                 setProdutosFiltrados(data);
//             } catch (error) {
//                 console.log(error);
//             }
//         };

//         fetchProducts();
//     }, []);

//     const handleSearch = () => {
//         const resultado = products.filter((product) =>
//             product.toLowerCase().includes(busca.toLowerCase())
//         );
//         setProdutosFiltrados(resultado);
//     };

//     return (
//         <div>
//         <div className='relative flex items-center'>
//           <input
//             type="text"
//             placeholder="Digite o que você procura"
//             className="w-[440px] h-10 px-4 placeholder-[#843C0A] bg-[#f3f3f3] outline-none"
//             value={busca}
//             onChange={handleSearch}
//           />
//           <button
//             className='absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-transparent z-10'
//             type="submit"
//           >
//             <MagnifyingGlass size={24} />
//           </button>
//         </div>
  
//         <div>
//           <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
//             {produtosFiltrados.map((product) => (
//               <CardProduct key={product.id} product={product} onDeleteSuccess={() => {}} />
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default SearchInput;