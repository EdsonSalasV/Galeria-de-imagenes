import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div>

      <Header
        title="Galeria de imagenes con React" />

      <Card
        title="Gatito UwU" 

        image="https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 

        description="Gatito muy uwu"/>

      <Card
        title="Gatito OwO" 

        image="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 

        description="Gatito muy owo"/>

      <Card
        title="Gatito UnU" 

        image="https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 

        description="Gatito muy unu"/>

      <button type="button" class="btn btn-info my-2 d-grid gap-2 col-2 mx-auto">Más michis</button>

      <Footer />

    </div>
  );
}

export default App;
