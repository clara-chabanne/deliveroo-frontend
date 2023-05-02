import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://site--deliveroo-backend--s6pnmjbwk2c7.code.run/");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>
      <p>Loading...</p>
    </div>
  ) : (
    <>
      <header>
        <Nav />
        <Header restaurant={data.restaurant} categories={data.categories} />
      </header>

      <main>
        <div className="meals-cart container">
          <div className="col-gauche">
            <Section categories={data.categories} />
          </div>

          <div className="col-droite">
            <div className="cart">
              <button className="disabled">Valider mon panier</button>
              <p>Votre panier est vide</p>
            </div>
          </div>
        </div>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
