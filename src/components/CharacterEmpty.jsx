import empty from '../images/empty.png'

export const CharacterEmpty = () => {
    return (
        <div>
            <h1 className='flex justify-center md:text-2xl font-bold text-light'>Prueba con otro nombre</h1>
            <img src={empty} alt="No hay personaje con ese nombre" className='sm:min-w-[500px]' />
        </div>
    )
}