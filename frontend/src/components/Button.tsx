import type react from "react"

export const Button = ({children,onClick}:{onClick?:react.MouseEventHandler,children:react.ReactNode})=>{
    return(<div >
        <button onClick={onClick} className="border-2  font-bold p-2">{children}</button>
    </div>)
}