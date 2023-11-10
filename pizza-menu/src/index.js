import React from 'react';
import ReactDOM from 'react-dom/client';

import "./index.css";

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
];

  
function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    const style = {};
    return (
        <header className="header">
            <h1 style={style}>Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    const data = pizzaData;
    // const data = [];

    return (
        <main className="menu">
            <h2>Our Menu</h2>
            {/* <Pizza 
                name="Pizza Prosciutto" 
                ingredient="Tomato, mozarella, ham, aragula, and burrata cheese" 
                photoName="pizzas/prosciutto.jpg" 
                price={10}
            /> */}
            
            { data.length > 0 ? (
                <>
                    <p>
                        It is a long established fact that a reader will be distracted by the 
                        readable content of a page when looking at its layout. The point of using
                        Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                        as opposed to using 'Content here, content here', making it look like 
                        readable English.
                    </p>
                    <ul className="pizzas">
                        { data.map((pizza) => 
                            <Pizza pizza={pizza} key={pizza.name} />
                        )}
                    </ul>
                </>
            ) : <p>We're still working on the menu.</p> }
        </main>
    );
}

function Pizza({pizza}) {   
    // if(pizza.soldOut) return null;
    
    return (
        <div className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
            <img src={pizza.photoName} alt={pizza.name}/>
            <div>
                <h2>{pizza.name}</h2>
                <p>{pizza.ingredients}</p>
                <span>{ pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
            </div>
        </div>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;

    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={closeHour} />
            ) : <p>We're Close till {openHour}:00 IST.</p> }
        </footer>
    );
}

function Order({closeHour}) {
    return (
        <div className="order">
            <p>We're Open till {closeHour}:00 IST.</p>
            <button className="btn">Order</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
