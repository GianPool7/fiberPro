import logo from './logo.svg';
import './App.css';
import Barra from './components/Barra';
import Main from './components/Main';
import Accesos from './components/Accesos';
import Pilares from './components/Pilares';
import Planes from './components/Planes';

function App() {
  return (
    <div className="App">

      <Barra/>

      <header className="App-header">
        

        <Main></Main>

      </header>

      <Pilares/>

      <h1 class="text-center text-6xl text-orange-600">
      INSTALACIÓN GRATIS
      </h1>

      <h1 class="text-4xl">
      DUPLICAMOS TU VELOCIDAD POR 6 MESES
      </h1>

      <Planes/>


      <h1 class="text-9xl">Probare haciendo otra interfaz</h1>

    </div>
  );
}

export default App;
