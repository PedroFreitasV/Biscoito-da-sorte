import {Component} from "react"
import biscoito from './assets/biscoito.png'
import './App.css'

class App extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      textoFrase: ''
    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = ["Grandes mudanças estão a caminho, abrace-as com um coração aberto.", "A felicidade está nas pequenas coisas, aproveite cada momento.",
      "A sorte favorece os corajosos, arrisque-se e vença.", "O sucesso é a soma de pequenos esforços repetidos dia após dia.", "Você está mais perto do que imagina de alcançar seus sonhos.",
      "A paciência é a chave para grandes conquistas.", "Acredite em si mesmo, pois você tem a força para transformar seu destino.",
      "Cada desafio é uma oportunidade disfarçada.", "O amor e a gentileza sempre voltam para quem os espalha.", 
      "Um novo começo está sempre ao seu alcance, basta dar o primeiro passo."
    ]
  }

  quebraBiscoito(){
    let state = this.state
    let numeroAteatorio = Math.floor(Math.random() * this.frases.length)
    state.textoFrase = ' " ' + this.frases[numeroAteatorio] + ' " '
    this.setState(state)
  }

  render(){
    return (
      <div>
          <img src={biscoito} />
          <Botao title="Abrir biscoito" acaoBtn={this.quebraBiscoito} />
          <h3>{this.state.textoFrase}</h3>
      </div>
    )
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
          <button onClick={this.props.acaoBtn}>{this.props.title}</button>
      </div>
    )
  }
}

export default App
