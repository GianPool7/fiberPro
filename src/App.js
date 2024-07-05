import logo from './logo.svg';
import './App.css';
import Barra from './components/Barra';
import Main from './components/Main';
import Accesos from './components/Accesos';
import Pilares from './components/Pilares';
import Planes from './components/Planes';
import BeneficiosCaja from './components/Beneficios';
import Banner from './images/banner.webp'

function App() {
  return (
    <div className="App">

      <Barra/>

      <header className="App-header">
        

        <Main></Main>

      </header>

      <Pilares/>

      <div class="p-2 ">
        <h3 class="text-center text-6xl text-orange-600 leading-loose ">
          INSTALACIÓN GRATIS
        </h3>
        <br/>
        <h3 class="text-4xl leading-relaxed  ">
          DUPLICAMOS TU VELOCIDAD POR 6 MESES
        </h3>
      </div>



      <Planes/>

      
      <img src={Banner} alt='' class="mt-8"/>




      <div class="">

      <div class="p-2">
        <h3 class="text-center text-6xl text-orange-600 leading-loose ">
          ¿POR QUÉ SER UN CLIENTE PRO?
        </h3>
        <br/>
        <h3 class="text-4xl leading-relaxed  ">
          Conoce los beneficios de ser un cliente PRO
        </h3>
      </div>

        <BeneficiosCaja/>
      </div>


      {/* <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@fiberpro_internet" data-unique-id="fiberpro_internet" data-embed-type="creator" style="max-width: 780px; min-width: 288px;" >
        <section> 
            <a target="_blank" href="https://www.tiktok.com/@fiberpro_internet?refer=creator_embed">
              @fiberpro_internet
            </a> 
        </section>
       </blockquote> 
<script async src="https://www.tiktok.com/embed.js"></script> */}


    <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@fiberpro_internet" data-unique-id="fiberpro_internet" data-embed-type="creator">
      <section> 
        <a target="_blank" href="https://www.tiktok.com/@fiberpro_internet?refer=creator_embed">@fiberpro_internet</a> 
      </section> 
    </blockquote> 
    <script async src="https://www.tiktok.com/embed.js"></script>







    </div>
  );
}

export default App;
