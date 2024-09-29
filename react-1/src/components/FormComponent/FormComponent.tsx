import { ChangeEvent, useState } from "react"
import { useForm } from "../hooks/useForm"

export const FormComponent = () => {
   const {values,handleChange,resetForm} = useForm({
    email:``,
    nombre: ``,
    edad: 0
   })

   const handleSubmitForm = ()=>{
    console.log(values);
   }

   const handleResetForm = ()=>{
    resetForm();
   }


  return (
    <div>
      <div>
        <h2>Formulario</h2>
      </div>
      <div style={{display: "flex", flexDirection: "column", gap: "2vh"}}>
        <input value ={values.email} onChange={handleChange} name="email" type="email" placeholder="example@example.com" />
        <input value ={values.nombre} onChange={handleChange} name="nombre"  type="text" placeholder="Nombre: "/>
        <input value ={values.edad} onChange={handleChange} name="edad" type="number" placeholder="Edad: " />
      </div>
      <div> 
        <button onClick={handleSubmitForm}>Enviar</button>
        <button onClick={handleResetForm}>Resetear</button>
      </div>
    </div>
  )
}

export default FormComponent
