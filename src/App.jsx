import "./App.css"
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'
import Aleatorio from './components/basics/Aleatorio'
import Card from './components/layout/Card'
import Familia from "./components/basics/Familia"
import FamiliaMenbro from "./components/basics/FamiliaMenbro"
import ListaAlunos from "./components/repeticao/ListaRepeticao"
import ListaProdutos from "./components/repeticao/TabelaProdutos"

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#07 - Repetição Produtos" color="#FF5733">
                <ListaProdutos></ListaProdutos>
            </Card>

            <Card titulo="#06 - Repetição Alunos" color="#900C3F">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Filhos" color="#4682B4">
                <Familia sobrenome="Bueno">
                    <FamiliaMenbro nome="André" />
                    <FamiliaMenbro nome="Joyce" />
                    <FamiliaMenbro nome="Eva" />
                </Familia>
            </Card>

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

            <Card titulo="#01 - Primeiro">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
)