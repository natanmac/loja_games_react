import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import type Categoria from "../../../model/Categoria"
import { listar } from "../../../service/service"
import CardCategoria from "../cardcategoria/CardCategoria"

function ListarCategoria() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    const [categoria, setCategoria] = useState<Categoria[]>([])

    async function buscarCategorias(){
        try{

            setIsLoading(true)

            await listar("/categorias", setCategoria)

        } catch (error: any){
            console.log(error)
        } finally{
            setIsLoading(false)
        }
    }
    useEffect(() => {
        buscarCategorias()
    }, [categoria.length])

    return (
        <>
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col mx-2">

                    {
                        (!isLoading && categoria.length === 0) && (
                            <span className="text-3xl text-center my-8">
                                Nenhuma categoria foi encontrado!
                            </span>
                        )
                    }

                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">
                        {
                            categoria.map((categoria) => (
                                <CardCategoria key={categoria.id} categoria={categoria}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListarCategoria