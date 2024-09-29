//import { useState } from "react"
//import ComponentCounter from "./components/ComponentCounter/ComponentCounter"
//import MiPrimerComponent from "./components/MiPrimerComponent/MiPrimerComponent"
//import ComponentUseEffect from "./components/ComponentUseEffect/ComponentUseEffect"
//import FormComponent from "./components/FormComponent/FormComponent"
import AppProducts from "./components/AppProduct/AppProducts"

const App = () => {
   /*const [enableCounter, setEnableCounter] = useState(false)*/
  return (
    <>
        
        <AppProducts/>


        {/* <MiPrimerComponent texto={"TEXTO DESDE PROPIEDADES "} color="#000" fontSize={0.8 }/>
        <ComponentCounter/>
        <ComponentUseEffect/> 
        <FormComponent/>
        */}
        
        {/*MONTADO DE COMPONENTE 
        {enableCounter && <ComponentCounter/> }

        /*DESMONTADO DE COMPONENTE 
        <button onClick={()=>{
            setEnableCounter(!enableCounter)
        }}>Mostrar o ocultar componente</button>
        */}
    </>
  )
}

export default App
