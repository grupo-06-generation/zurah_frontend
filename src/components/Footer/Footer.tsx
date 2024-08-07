import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <div className='w-full px-32 py-8 bg-[#D1B69A] justify-center min-h-72 font-["Montserrat"] font-medium text-sm divide-y divide-double divide-[#843C0A]'>
                <div className='bg-[#D1B69A] flex pb-12'>
                    <div className='bg-[#D1B69A] h-4/6'>
                        <h2 className="font-['Linden_Hill'] font-normal text-4xl text-[#843C0A] pb-3">Zurah</h2>
                        <p className='pr-32'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nulla rem facere eaque! Odio, consequatur harum. Veritatis totam animi nam ratione corrupti? Sunt qui ullam voluptatum? Ea voluptatem consequuntur sunt?</p>
                    </div>
                    <div className='bg-[#D1B69A] px-16 h-1/6 '>
                        <h2 className='font-bold text-xl text-[#843C0A] pb-2'>Páginas</h2>
                        <Link to='/home' className='hover:underline block pb-2'>Menu principal</Link>
                        {/* <Link to="/produtores" className='hover:underline block pb-2'>Produtores </Link> */}
                        <Link to="/login" className='hover:underline block pb-2'>Login</Link>
                        <Link to="/sobre" className='hover:underline block pb-2'>Sobre</Link>
                    </div>
                    <div className='bg-[#D1B69A] pl-12 h-1/6'>
                        <h2 className='font-bold text-xl text-[#843C0A] pb-2'>Contato</h2>
                        <p className='pb-2'><span className='font-bold'>Email:</span> projetozurah@gmail.com</p>
                        <p><span className='font-bold'>Github:</span> https://github.com/grupo-06-generation </p>
                    </div>
                </div>
                <div className='pt-8'>
                    <p className='text-sm text-gray-700'>&copy; 2024 Zurah. All rights reserved.</p>
                </div>
        </div>
    </>
  )
}

export default Footer