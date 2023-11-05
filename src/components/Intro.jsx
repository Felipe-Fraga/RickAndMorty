import background from '../images/background.png'
import fondomobile from '../images/fondomobile.jpg'
import { LiaGamepadSolid } from 'react-icons/lia'
import { AiOutlineEye } from 'react-icons/ai'


export const Intro = () => {
    return (
        <div className="w-full h-screen flex justify-center">
            <div className='absolute z-10 md:flex p-8'>
                <a href='/home' className="opacity-90 hover:opacity-100">
                    <span className="w-full h-full flex items-center gap-2 px-8 py-3  text-[#f1d5fe] rounded-[14px] bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">
                        <AiOutlineEye size={24} />
                        See more</span>
                </a>

                <a href='game' className="opacity-90 hover:opacity-100">
                    <span className="w-full h-full flex items-center gap-2 px-8 py-3  text-[#f1d5fe] rounded-[14px] bg-gradient-to-t from-[#a62ce2] to-[#c045fc] mt-2 md:mt-0 md:ml-2">
                        <LiaGamepadSolid size={24}/>
                        Play Game</span>
                </a>
            </div>


            <img src={background} alt="Imagen de fondo" className='hidden md:inline h-screen w-full relative' />
            <img src={fondomobile} alt="Imagen de fondo" className='md:hidden h-screen w-full relative' />

        </div>
    )
}


