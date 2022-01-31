import { useState } from 'react';
import './app.css';

export default function App() {
  
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function calcularIMC (){
    // alert("Altura" + altura); //concatenando print em tela com variavel
    const alt = altura /100;
    const imc = peso 
  }


  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span> Vamos calcular seu imc</span>

      <div className="area-input">
        <input 
          type="text" 
          placeholder="Peso em (kg) Ex: 90"
          value={peso}
          onChange={(evento)=>setPeso(evento.target.value)}
        />
        <input 
          type="text" 
          placeholder="Altura em (cm) Ex: 180"
          value={altura}
          onChange={(evento)=>setAltura(evento.target.value)}
        />
        <button onClick={calcularIMC}>
          Calcular
        </button>
      </div>
      <h2>Seu imc foi 25, você está abaixo do peso!  </h2>
    </div>
  )
}