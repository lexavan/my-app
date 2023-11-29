import "./App.css";
import dog from "./dog.png";
import paw from "./paw.png";
import pawprint from "./PawPrint.png";
import person from "./Person.png";
import phone from "./Phone.png";

function App() {
  return (
   <div className="page">
    <div className="FurGuardian">
      <header className="Fur guardian">
        <div className="dog">
          <img src={dog} alt="dog" className="dog"></img>
        </div>
        <h1>Hello, I am Myra!</h1>
      </header>
      <section>
        
      <div className="container">
  <img src={paw} alt="paw" className="paw" />
  <div className="petInfo">
    <div className="infoItem">
      <img src={pawprint} alt="pawprint" className="icon" />
      <p>Siberian Husky</p>
    </div>
    <div className="infoItem">
      <img src={person} alt="person" className="icon" />
      <p>Heidi Prestegård</p>
    </div>
    <div className="infoItem">
      <img src={phone} alt="phone" className="icon" />
      <p>+47 123 45 678</p>
    </div>
  </div>
        </div> 
      </section>
      </div>

      <footer>
        <p>If found, please contact my owner!</p>
      </footer>

</div>

  );
}

export default App;