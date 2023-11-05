import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../redux/slices/characterSlice';
import { Character } from './Character';
import { CharacterEmpty } from './CharacterEmpty';

export const Container = ({ name, gender }) => {
    const dispatch = useDispatch();
    const allCharacters = useSelector((state) => state.characters.data);

    useEffect(() => {
        dispatch(fetchCharacters());
    }, [dispatch]);

    const shortName = (nombre) => {
        const palabras = nombre.split(' ');
        if (nombre.length > 11)  return palabras[0] 
        return nombre;
    }

    const characters = allCharacters.filter((c) => shortName(c.name).toLowerCase().includes(shortName(name).toLowerCase()));

    console.log(gender);
    const filteredCharacters = gender ? characters.filter((c) => c.gender === gender) : characters;
    
    return (
        <div className='w-[80%] my-4 mx-auto min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
            {
            !filteredCharacters.length ? <CharacterEmpty /> :
            filteredCharacters?.map(({ id, name, status, species, gender, origin, image, location }) =>  
                        <Character
                            key={id}
                            id={id}
                            name={name}
                            species={species}
                            status={status}
                            gender={gender}
                            image={image}
                            origin={origin.name}
                            location={location.name} 
                            shortName={shortName}/>
            )}
        </div>
    )
}