import { useState } from 'react';
import { LiaGamepadSolid } from 'react-icons/lia';
import logo from '../images/logo.png'

export const NavBar = ({ setName, gender, setGender }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = () => {
        setName(inputValue);
    };

    const handleGender = (e) => {
        setGender(e.target.value)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <nav className="border-b-[2px] border-light sm:flex mx-auto w-[80%] text-light py-4 justify-between">

            <div className='flex justify-between items-center w-[100%] sm:w-[55%]'>

                <img src={logo} alt="Logo Rick and Morty" className='w-20 md:w-40' />

                <a href="/game"> <LiaGamepadSolid size={24} /> </a>

                <select name="gender" id="gender" value={gender} onChange={handleGender} className='p-1 rounded-lg bg-bg  focus:outline-none '>
                    <option value="">All genders</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>

                {/* <button onClick={() => setName('')} className='pl-2'>Ver todos</button> */}
                <div className="rounded-lg border border-light  font-semibold px-1 my-1 w-[210px] h-[30px] flex mx-auto md:mr-0 mt-3 md:mt-0">
                    <input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        type="text"
                        className="bg-bg px-2 border-none focus:outline-none focus:ring-none text-white max-w-[200px]"
                        placeholder="Buscar"
                        id="search-input"
                    />
                </div>
        </nav>
    );
}
