//import { useState } from "react"
import ComponentCounter from "./components/ComponentCounter/ComponentCounter"
import MiPrimerComponent from "./components/MiPrimerComponent/MiPrimerComponent"
import ComponentUseEffect from "./components/ComponentUseEffect/ComponentUseEffect"

const App = () => {
   /*const [enableCounter, setEnableCounter] = useState(false)*/
  return (
    <>
        <MiPrimerComponent texto={"TEXTO DESDE PROPIEDADES "} color="#000" fontSize={0.8 }/>
        <ComponentCounter/>
        <ComponentUseEffect/>


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
