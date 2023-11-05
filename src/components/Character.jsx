import { useState } from "react";
import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi'

export const Character = ({ id, name, status, species, location, gender, origin, image, shortName }) => {
    const [isInfoVisible, setIsInfoVisible] = useState(false);

    const toggleInfo = () => {
        setIsInfoVisible(!isInfoVisible);
    };

    

    return (
        <div className="md:max-w-xs">
            <div className={`sm:min-h-[300px] rounded overflow-hidden shadow-lg shadow-detLight dark:shadow-black w-[100%] ${isInfoVisible ? 'h-auto' : ''}`} >
                <img src={image} alt="Character" className="w-full h-[220px] object-fit" />
                <div className="p-6 text-white">
                    <div className="flex items-center justify-between mb-2 ">
                        <h2 className="text-1xl sm:text-2xl font-semibold border-b-[2px] border-light font-bold">{shortName(name)}</h2>
                            <button onClick={toggleInfo}> {isInfoVisible ? <BiUpArrowAlt /> : <BiDownArrowAlt />} </button>

                    </div>
                    {isInfoVisible && (
                        <div className="py-1">
                            <div className="flex justify-between">
                                <p>{status}</p>
                                <p> - </p>
                                <p>{species}</p>
                                <p> - </p>
                                <p>{gender}</p>
                            </div>
                            <p className="py-1 text-sm">Nacido en <span className="text-light text-base">{shortName(origin)}</span></p>
                            <p className="text-sm">Visto por ultima vez en <span className="text-light text-base">{shortName(location)}</span></p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}