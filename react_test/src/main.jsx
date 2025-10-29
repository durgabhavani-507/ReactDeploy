import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { Header, Footer,ImageComponent,ProductList,Products } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Footer />
    <App />
    <ImageComponent />
     <ProductList items={Products}/>
  </StrictMode>,
)
