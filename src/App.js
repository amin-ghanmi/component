
import './App.css';
import Address from './component/Profil/Address';
import FullName from './component/Profil/FullName';
import ProfilPhoto from './component/Profil/ProfilPhoto';

function App() {
  return (
    <div className="App">
      <div className="pic">
      < ProfilPhoto/>
      </div>
      <div className="title">
        <FullName/></div>
      <div className="after">
      <Address/>
      </div>
      
      
      
      </div>
  );
}

export default App;
