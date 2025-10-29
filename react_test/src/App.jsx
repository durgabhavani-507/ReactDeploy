import { useState } from 'react'


import './App.css'
import portfolio from './assets/portfolio.webp'
import chicken from './assets/chicken.jpg'


export function Header() {
  return (
    
    <div style={{
      // backgroundColor: 'green'
     
    }}>
      <h2 style={{
      backgroundColor: 'orange'}}>---TASK1----</h2>
      <h5>HEADER SECTION</h5>
    </div> 
  )
}
export function Footer() {
  return (
    <div style={{
      // backgroundColor: 'pink',
      
    }}>
      <h5>FOOTER SECTION</h5>
    </div>
      
   
  )
}

export default function App() {
  const list = ["apple", "banana", "orange", "grapes"]

  return (
    <>
        <div style={{
        color: 'blue',
      }}>
          <h2 style={{
      backgroundColor: 'orange'}}>--TASK2--</h2>
          <ul>
            {list.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
          
        </div>
     
    </>
  )
}

export function ImageComponent() {
  return (
   <div><img 
      src={portfolio} style={{ width: '600px', height: '500px' }}>
   </img>
   <img src={chicken}style={{ width: '600px', height: '500px' }}  ></img>
   <audio controls src="/audio.mp3"></audio>
   <video controls src="/video.mp4"style={{
          width: 600,
          height: 340}}></video>
   </div>
    
  );
}

 export const Products = [
  { id: 1, name: 'Trousers', price: 2500, des: 'Comfortable cotton trousers' },
  { id: 2, name: 'Shirt', price: 1200, des: 'Formal shirt' }
   ,{ id: 3, name: 'jeans', price: 2500, des: 'Comfortable cotton trousers' },
  { id: 4, name: 'T-shirts', price: 1200, des: 'Formal shirt' }
]


export  function ProductList({ items = [] }) {
  return (
    
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {items.map(p => (
        <li key={p.id} style={{ border: '1px solid #ddd' }}>
          <div><strong>{p.name}</strong></div>
          <div>Price: {p.price}</div>
          <div style={{ fontSize: 12, color: '#666' }}>{p.des}</div>
        </li>
      ))}
    </ul>
  )
}




