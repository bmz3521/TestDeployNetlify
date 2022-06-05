import tuktik from '../src/tuktik.jpg';
import tuktik2 from '../src/tuktik2.jpg';
import armzy from '../src/armzy.jpg';
import Icezy from '../src/Icezy.jpg';
import Meethong from '../src/Meethong.jpg';
import Giftzy from '../src/Giftzy.jpg';
import Maemunn from '../src/Maemunn.jpg'
import Arm from '../src/Arm.jpg'
import Milo from '../src/Milo.jpg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className='bg-red'>
          <h1 className='head1 pt-5 p-4'>สมาชิก  "หน้าขน corperations"</h1>
          <div className='pb-5'>
            <div className='image_container col'>
              <img src={tuktik} className="App-logo" alt="logo" />
              <div class="middle">
                <div class="text">TUKTIK</div>
              </div>
            </div>
            <div className='image_container col'>
              <img src={armzy} className="App-logo" alt="logo" />
              <div class="middle">
                <div class="text">ANGPAO</div>
              </div>
            </div>
            <div className='image_container col'>
              <img src={Meethong} className="App-logo" alt="logo" />
              <div class="middle">
                <div class="text">MEETHONG</div>
              </div>
            </div>
            <div className='image_container col'>
              <img src={Maemunn} className="App-logo" alt="logo" />
              <div class="middle">
                <div class="text">MAEMUNN</div>
              </div>
            </div>
            <div className='image_container col'>
              <img src={tuktik2} className="App-logo" alt="logo" />
              <div class="middle">
                <div class="text">KAIWANN</div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-red'>
          <h1 className='head1 p-4'>ทาสรับใช้  "หน้าขน corperations"</h1>
          <div className='pb-5'>
            <div className='image_container2 col'>
              <img src={Giftzy} className="App-logo" alt="logo" />
              <div class="middle">
                <div class="text">Giftzy</div>
              </div>
            </div>
            <div className='image_container col'>
              <img src={Icezy} className="App-logo" alt="logo" />
              <div class="middle">
                <div class="text">Icezy</div>
              </div>
            </div>
            <div className='image_container col'>
              <img src={Arm} className="App-logo" alt="logo" />
              <div class="middle">
                <div class="text">Armzy</div>
              </div>
            </div>
            <div className='image_container col'>
              <img src={Milo} className="App-logo" alt="logo" />
              <div class="middle">
                <div class="text">Milo</div>
              </div>
            </div>
          </div>
        </div>
        <h1> LOVE P'GIFT AND TUKTIK FOREVER</h1>
        <p>
          Test Deploy Netlify React Repo
        </p>
        <>Milo Test Deploy</>
      </header>
      
    </div>
  );
}

export default App;
