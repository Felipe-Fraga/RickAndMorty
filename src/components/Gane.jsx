import { useState } from "react"
import { questions } from "./GameQuestions"
import { useEffect } from "react"
import { GameContainer } from "./GameContainer"
import { AiOutlineEye } from "react-icons/ai"
import resultadoGame from '../images/resultadoGame.png'

export const Game = () => {
    const [preguntaActual, setPreguntaActual] = useState(0)
    const [puntuacion, setPuntuacion] = useState(0)
    const [isFinished, setIsFinished] = useState(false)
    const [tiempoRestante, setTiempoRestante] = useState(20)
    const [areDisabled, setAreDisabled] = useState(false)

    const handleSubmit = (isCorrect, e) => {
        if (isCorrect) setPuntuacion(puntuacion + 1);
        e.target.classList.add(isCorrect ? 'bg-green-500' : 'bg-red-500')

        setTimeout(() => {
            if (preguntaActual === questions.length - 1) {
                setIsFinished(true)
            } else {
                setPreguntaActual(preguntaActual + 1)
            }
        }, 1000)
    }

    useEffect(() => {
        const intervalo = setInterval(() => {
            if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1)
            if (tiempoRestante === 0) setAreDisabled(true)
        }, 2000)
        return () => clearInterval(intervalo)
    }, [tiempoRestante])

    if (isFinished) return (
        <div className="text-white h-screen">
            <div className="max-w-[50%] mx-auto flex-row justify-center items-center p-2 mt-10">
                <h1 className="text-2xl sm:text-4xl mb-4">Has acertado: {puntuacion} / {questions.length}</h1>
                <div className="flex gap-2">

                    <button onClick={() => { window.location.href = '/game' }} className="flex items-center gap-2 p-2 text-[#f1d5fe] rounded-[12px] bg-gradient-to-t from-[#a62ce2] to-[#c045fc] text-sm mb-2">Jugar de nuevo</button>
                    <a href='/home' className="opacity-90 hover:opacity-100">
                        <span className="flex items-center gap-2 p-2 text-[#f1d5fe] rounded-[12px] bg-gradient-to-t from-[#a62ce2] to-[#c045fc] text-sm">
                            Ver personajes</span>
                    </a>
                </div>
            </div>
            <img src={resultadoGame} alt="Rick" className="absolute bottom-0 max-h-[70%]" />
        </div>
    )


    return (
        <div className="flex justify-center mt-20 text-dark">
            <a href='/home' className="opacity-90 hover:opacity-100">
                <span className="flex items-center gap-2 p-2 text-[#f1d5fe] rounded-[12px] bg-gradient-to-t from-[#a62ce2] to-[#c045fc] text-sm absolute top-2 left-2">
                    <AiOutlineEye size={18} />
                    Ver personajes</span>
            </a>
            <GameContainer preguntaActual={preguntaActual} questions={questions} areDisabled={areDisabled} tiempoRestante={tiempoRestante} handleSubmit={handleSubmit} />
        </div>
    )
}