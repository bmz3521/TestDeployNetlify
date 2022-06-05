import logo from './logo.svg';
import './App.css';

function App() {
  const tuktik = 'https://scontent.fbkk9-3.fna.fbcdn.net/v/t1.6435-9/84868740_2485331368243760_1453319853820608512_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=02jRRXdMk1MAX-Diesc&_nc_ht=scontent.fbkk9-3.fna&oh=00_AT9M-6UU5n7IpVeXxPRAq4CIqCl-EJ9Hu3IdeDHGkuonww&oe=62C3DA8F'
  return (
    <div className="App">
      <header className="App-header">
        <img src={tuktik} className="App-logo" alt="logo" />
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
