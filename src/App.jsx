import "./App.css"
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'
import Aleatorio from './components/basics/Aleatorio'
import Card from './components/layout/Card'

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#04 - Desafio Aleatório" color="#FFC300">
                <Aleatorio min={1}max={60} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#FF5733">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com parametro" color="#FF69B4">
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="André Bueno"
                    nota={6.3}
                />
            </Card>

            <Card titulo="#01 - Primeiro" color="#006400">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
)