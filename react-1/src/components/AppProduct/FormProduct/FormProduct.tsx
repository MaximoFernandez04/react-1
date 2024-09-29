import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"
import { useForm } from "../../hooks/useForm";
import { FC } from "react";

interface IPropsFormProduct{
    handelAddProduct: Function
}

export const FormProduct: FC<IPropsFormProduct>= ({handelAddProduct}) => {
    const {handleChange,values, resetForm} = useForm({
        nombre: ``,
        imagen: ``,
        precio: 0
    })

    const handleSubmitForm = ()=>{
        handelAddProduct(values)
        resetForm();
    }
    
    
  return (
    <Form className="p-4 border rounded m-3">
        <Form.Group controlId="formNombre">
        <FormLabel>Nombre:</FormLabel>
        <FormControl type="text" name="nombre" placeholder="Ingrese nombre producto" value={values.nombre} onChange={handleChange}></FormControl>
        </Form.Group>

        <Form.Group controlId="formImagen">
        <FormLabel>Imagen:</FormLabel>
        <FormControl type="text" name="imagen" placeholder="Ingrese imagen del producto" value={values.imagen} onChange={handleChange}></FormControl>
        </Form.Group>

        <Form.Group controlId="formPrecio">
        <FormLabel>Precio:</FormLabel>
        <FormControl type="text" name="precio" placeholder="Ingrese precio producto" value={values.precio} onChange={handleChange}></FormControl>
        </Form.Group>
        <div className="d-flex justify-content-center mt-4">
            <Button onClick={handleSubmitForm} variant="primary">Enviar Producto</Button>
        </div>
    </Form>
  )
}

export default FormProduct
