import React, { useState } from 'react'
import './GridLayout.css'
export default function GridLayout() {
const [Cart, setCart] = useState([])
  let items = [
    {
      id:1,
      img:"https://media.istockphoto.com/id/957824528/photo/sliced-bread-isolated-on-a-white-background-bread-slices-and-crumbs-viewed-from-above-top-view.jpg?b=1&s=612x612&w=0&k=20&c=HoK7SdJAKZOFG1yFNiOKppEudk7UxOY7baW_qzfH4t4=",
      price:24
    },
    {
      id:2,
      img:"https://www.foodiesfeed.com/wp-content/uploads/2019/10/pistachio-croissant.jpg",
      price:"52"
    },
    {
      id:3,
      img:"https://www.foodiesfeed.com/wp-content/uploads/2019/01/seafood-noodles.jpg",
      price:25,
    },
    {
      id:4,
      img:"https://www.foodiesfeed.com/wp-content/uploads/2019/01/the-mushroom-pizza.jpg",
      price:4,
    },
    {
      id:5,
      img:"https://www.foodiesfeed.com/wp-content/uploads/2019/01/pizza.jpg",
      price:5,
    },
    {
      id:6,
      img:"https://media.istockphoto.com/id/638951176/photo/mexican-street-tacos-flat-lay-composition.jpg?b=1&s=612x612&w=0&k=20&c=GTk0HrR5ByeeBZZTGSgEJYL3i-UJjHlLv0ZiSfq4dgc=",
      price:54,
    },
{
  id:7,
  img:"https://media.istockphoto.com/id/1128915783/photo/delicious-appetizing-classic-spaghetti-pasta-with-tomato-sauce-parmesan-cheese-and-fresh.jpg?b=1&s=612x612&w=0&k=20&c=vkTDx7q_G8dgkLOH299nEL1X795f3ENTSzkBIIQzJSs=",
  price:80
},
{
id:8,
img:"https://media.istockphoto.com/id/652225084/photo/spaghetti-bolognese-on-a-white-plate.jpg?b=1&s=612x612&w=0&k=20&c=8DI99xxIEduQd_lv5hqwV8DiQUqpxbKYAfPlyCReyqw=",
price:90
},
{
  id:9,
  img:"https://www.foodiesfeed.com/wp-content/uploads/2019/01/croissants-and-figs-snack.jpg",
  price:10
}
  ]

  const HandlePrice = (id) =>{
    const item = items.find(item => item.id == id);
    setCart(item);
    console.log(item);
  }

  return (
    <div id="columns">
   {items.map((items,index)=>{
    return(
      <figure key={index}>
        <img src={items.img}  />
        <button className='AddToCartButton' onClick={()=>HandlePrice(items.id)}>Add to cart</button>
        <p>${items.price}</p>
      </figure>
    )
   })}
    </div>
  )
}
