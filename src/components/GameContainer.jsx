export const GameContainer = ({ preguntaActual, questions, areDisabled, tiempoRestante, handleSubmit }) => {
    return(
        <div className="max-w-[70%] border border-dark rounded p-10 relative">
                <span className="absolute top-0 left-2">{preguntaActual + 1} / {questions.length}</span>
                <h1>
                    {questions[preguntaActual].question}
                </h1>
                <div>
                    {questions[preguntaActual].options.map((o) =>
                    <div>
                        <button key={o.option} disabled={areDisabled} onClick={(e) => handleSubmit(o.isCorrect, e)} className="p-1 text-dark rounded border border-dark m-2 w-[100%]">
                            {o.option}
                        </button>
                    </div>
                    )}
                </div>
                {!areDisabled ?
                    <span>Tiempo restante {tiempoRestante}</span>
                    : <p>Perdiste <button onClick={() => { window.location.href = '/game' }}>Jugar de nuevo</button></p>
                    
                }
            </div>
    )
}