
import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data/data.jsx";


const card = data.map(datas => {
  return (
    <Card
      key={datas.id}
      item={datas}
      // title={datas.title}
      // description={datas.description}
      // price={datas.price}
      // img={datas.coverImg}
      // country={datas.location}
      // rating={datas.stats.rating}
      // reviewCount={datas.stats.reviewCount}
      // openSpots={datas.openSpots}
    />
  )
})

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
                {card}
            </section>
   </div>
  )
}
