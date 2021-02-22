import React from 'react'
import './App.css'
import Item from './components/Item'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'

const data=[
  {
    title:"USA",
    pic:img1

  },
  {
    title:"UK",
    pic:img2

  },
  {
    title:"CANADA",
    pic:img3

  },
  {
    title:"AUSTRALIA",
    pic:img4

  },
]



const App = () => {
  return (
    <div className="app">


      {/* <Item  title="title" pic={img1} />
      <Item  title="title" pic={img1} />
      <Item  title="title" pic={img1} />
      <Item  title="title" pic={img1} /> */}
      {data.map((val,i)=>{

      return <Item key={i} title={val.title} pic={val.pic} />
      })}
    </div>
  )
}

export default App
