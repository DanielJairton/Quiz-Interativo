import React from 'react'
import './style.css'
import { Perguntas } from '../Data/perguntas'
import { useState } from 'react'
// import imgRespCorreta from './img/correta.png'
import imgResCorreta from '../quizz/img/correto.png'
import imgResIncorreta from '../quizz/img/incorreto.png'

// document.getElementById('btn-jogarNovamente').addEventListener('click', jogarNovamente);

function jogarNovamente(){
    /*if (window.confirm('Jogar Novamente')) {
        window.location.reload();
    }*/
    window.location.reload();
}

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

    function testePontos(){
        // let valorPontos = {pontos}
        if ({pontos} > 6) {
            return true;
        }
        else{
            return false;
        }
    }

    return (
    <div className='container'> 
        {showPontuacao ? (<><div className='pontuacao'>
            <span>Sua pontuação é {pontos} de {questions.length}</span></div>
            
            <div id='box-btn-jogarNovamente'>
                <button id='btn-jogarNovamente' onClick={jogarNovamente}>Jogar Novamente</button>
            </div>
            </>):(
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
                    
                    <button onClick={() => proximaPergunta(opcoesResposta.correta)}><span>{opcoesResposta.alternativa}</span>{opcoesResposta.resposta}</button>
                </div>)}
                
            </div>

            {/* <div className='box-imgRes' id='box-imgResCorreta'>
                <img src={imgResCorreta} alt='imagem resposta correta' className='img-respImg' id='img-respCorreta'></img>
            </div>
            <div className='box-imgRes' id='box-imgResIncorreta'>
                <img src={imgResIncorreta} alt='imagem resposta correta' className='img-respImg' id='img-respIncorreta'></img>
            </div> */}
        </>
    )}
   </div>    
  );
}