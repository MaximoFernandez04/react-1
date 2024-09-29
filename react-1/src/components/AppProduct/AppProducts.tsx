import { Prev } from "react-bootstrap/esm/PageItem"
import FormProduct from "./FormProduct/FormProduct"
import Header from "./Header/Header"
import { useState } from "react"
import ListProducts from "./ListProducts/ListProductS"


interface ItemProduct{
    precio:number,
    imagen: string,
    nombre: string
}

const AppProducts = () => {
    const [products, setProducts] = useState<ItemProduct[]>([])

    const handelAddProduct = (newItem: ItemProduct)=>{
        setProducts((prev)=>[...prev, newItem])
    }

  return (
    <>  
        <Header/>
        <h2 className="text-center">Formulario</h2>
        <FormProduct handelAddProduct={handelAddProduct}/>
        <h2 className="text-center">Productos</h2>
        {
            products.length>0 ? <ListProducts arrItems={products}/>: <h2 className="text-center">No hay productos</h2>
        }
        
    </>
  )
}

export default AppProducts
