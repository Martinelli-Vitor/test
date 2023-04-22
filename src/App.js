import './App.css';
import Menu from './components/Menu';
import RestaurantName from './components/RestaurantName';
import Rating from './components/Rating';

function App() {
  const name = 'Restaurante do Zé'
  const url = 'C:/Users/vitor/Downloads/restze.jpg'

  return (
    <div className="App">
      <img src={url} alt="logo"/>
      <h1>Bem vindo ao <RestaurantName name={name} /></h1>
      <Menu
        promocoes ='Promoções'
        pratos = 'Pratos'
        porcoes = 'Porções'
        bebidas = 'Bebidas'
      />
      <h1><Rating/></h1>
      <p>By Forktrackers</p>
    </div>
  );
}

export default App;
