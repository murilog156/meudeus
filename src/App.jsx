import { useState } from "react"
import styled from "styled-components"
import Confetti from 'react-confetti'

export default function App() {

  const [name, setName] = useState("Maria")
  const [estado, setEstado] = useState(false)
  const [counter, setCounter] = useState(0)


  function clicou(parametro) {

    setCounter(parametro == "menos" ? counter - 1 : counter + 1)

  }

  return (

    <div>

      <button style={{ zIndex: 10 }} onClick={() => clicou("menos")}>DIMINUI -</button>
      <h1> NUMERO ATUAL {counter}</h1>
      <button style={{ zIndex: 11 }} onClick={() => clicou("mais")}> AUMENTA +</button>
      {
        counter > 5 ?

          <div>

            <button onClick={() => setEstado(true)} type="button">Clique aqui para ganhar cem reais</button>
          </div> : null
      }

      {estado == true ?

        <div>
          <Video style={{ zIndex: -1 }} src="https://www.youtube.com/embed/kLzszU9yCK0?amp;start=50&autoplay=1&controls=0&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></Video>
          {/* <iframe width="1031" height="703" src="https://www.youtube.com/embed/kLzszU9yCK0" title="Chaves - Leite de Burra (Parte 1 de 3)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
          <Confetti
            width={1920}
            height={700}
          />
          <EstiloDaH1>PARABÉNS VOCÊ FOI O GANHADOR MAI PIKA DO MUNDO</EstiloDaH1>
          <audio autoPlay loop src="/gemidao-do-zap.mp3"></audio>
          <audio autoPlay loop src="/lula-tira.mp3"></audio>

          <Corre src="https://i.pinimg.com/originals/9f/e2/d3/9fe2d3b3f4769da0b39540a0ccbd992f.gif" />
          <GiraPika src="/piroca.png" />

        </div>
        : null}


    </div>
  )
}

const EstiloDaH1 = styled.h1` 

@keyframes giragira {

  0% {

    transform: rotateZ(0deg);

  }
  
  
  100% {

transform: rotateZ(360deg);

}

}

animation: giragira infinite  5000ms linear;
user-select: none;
font-size: 100px;
color: red;

`

const BotaoPrincipal = styled.button`

color: #fff;
height: 80px;
width: 300px;
background-color: purple;
`

const GiraPika = styled.img`

z-index: 1;

@keyframes girando {
 
  0% {

    position: fixed;
    
    left: 0;
  }

    
  100% {
  
  
position: fixed;
left: 100%;
}
}

animation: girando infinite 10s;

`

const Corre = styled.img`

z-index: 0;

@keyframes corremeu {

  0%{

    position: fixed;
    left: 30%;


  }

  100%{

    position: fixed;
    left: 100%;
  }
  
}

animation: corremeu infinite 5s;

`

const Video = styled.iframe`

position: fixed;
width: 100%;
height: 100%;
left: 0;
right: 0;
bottom: 0;
top: 0;


`


