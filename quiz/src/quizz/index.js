import React from 'react'
import './style.css'
import { Perguntas } from '../Data/perguntas'
import { useState } from 'react'


export default function Quizz() {
    const questions = Perguntas ?? []
    const [perguntaAtual, setPerguntaAtual] = useState(0);
    const [showPontuacao, setShowPontuacao] = useState(false);
    const [pontos, setPontos] = useState(0)
  
    function proximaPergunta(correta){
        const nextQuestion = perguntaAtual + 1 

        if(correta){
            setPontos(pontos + 1)
        }

        if(nextQuestion < questions.length){
            setPerguntaAtual(nextQuestion)
        }else{
            setShowPontuacao(true)
        }
    }

    return (
    <div className='container'> 
        {showPontuacao ? (<div className='pontuacao'>
            <span>Sua pontuação é {pontos} de {questions.length}</span></div>):(
        <>
        <div className='infoPerguntas'>
            <div className='contagemPerguntas'>
                <span>Pergunta {perguntaAtual + 1}/{questions.length}</span>
            </div>
            <div className='pergunta'>{questions[perguntaAtual].pergunta}</div>
        </div>
        
        <div className='resposta'>
            {questions[perguntaAtual].opcoesResposta.map((opcoesResposta) =>
            <div className='grupoReposta'>
                <span>{opcoesResposta.alternativa}</span>
                <button onClick={() => proximaPergunta(opcoesResposta.correta)}>{opcoesResposta.resposta}</button>
            </div>)}
            
        </div>
    </>
    )}
   </div>    
  );
}