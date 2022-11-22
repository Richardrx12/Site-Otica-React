import './App.css';
import React from 'react';
import Topo from './componentes/Topo/SecaoTopo';
import Conteudo from './componentes/Conteudo';
import Rodape from './componentes/Rodapé';


function App() {
  return (
    <div className="App">
      <Topo />
      <Conteudo />
      <Rodape />
      
      
    </div>
  );
}

export default App;
