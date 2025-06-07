import './App.css'
import AddNewProduct from './components/AddNewProduct'
import DeleteProduct from './components/DeleteProduct'
import Products from './components/Products'
import SpecificProduct from './components/SpecificProduct'
import UpdateProduct from './components/UpdateProduct'

function App() {
  

  return (
    <>
      <p>RTK_Query</p>
      {/* <Products/>
      <SpecificProduct/> */}
      {/* <AddNewProduct/> */}
      {/* <UpdateProduct productId = {2}/> */}
      <DeleteProduct productId = {4}/>
    </>
  )
}

export default App
