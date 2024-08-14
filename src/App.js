import './App.css';

const Equipe = (props) => {
  return(
    <div className="equipe">
       <Sobre nome={props.nome} cargo={props.cargo} atribuicao={props.atribuicao}/>
      <hr/>
    </div>
  )
}

const Sobre = (props) => {
  return(
    <>
      <h2>Olá, sou {props.nome}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h3>Atribuição: Sou responsável por {props.atribuicao}</h3>
    </>
  );
}


function App() {
  return (
    <div>
    <h1>Conheça nossa equipe: </h1>
    <Equipe nome="Matheus" cargo="Programador" atribuicao="programação do banco de dados"/>
    <Equipe nome="Yan" cargo="Programador" atribuicao="programação do Front-end"/>
    <Equipe nome="Vitor" cargo="Programador" atribuicao="programação do back-end"/>
</div>
  );
}

export default App;