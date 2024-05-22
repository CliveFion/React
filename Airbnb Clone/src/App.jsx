import Navbar from './components/Navbar'
import Hero from "./components/Hero";
import Card from "./components/Card"
import data from "./data"
import './components/style.css'

export default function App() {
 
  const cards = data.map(item => {
    return (
        <Card 
            key={item.id}
            item={item}
        />
    )
})   
  return (
    <>
      <Navbar/>
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </>
  )
}


