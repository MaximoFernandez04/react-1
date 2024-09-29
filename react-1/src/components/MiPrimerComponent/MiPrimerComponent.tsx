import { FC } from "react"

interface IPropsMiPrimerComponent{
    texto: string
    color: string
    fontSize ?: number
}

const MiPrimerComponent: FC<IPropsMiPrimerComponent>= ({texto, color, fontSize}) => {
  return (
    <div style={{color: `${color}`, fontSize:`${fontSize || 0.4}rem` }}>
      <h1>{texto}</h1>
    </div>
  )
}

export default MiPrimerComponent
