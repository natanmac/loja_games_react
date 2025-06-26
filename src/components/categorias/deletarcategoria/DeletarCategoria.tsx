import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type Categoria from "../../../model/Categoria"
import { deletar, listar } from "../../../service/service"

function DeletarCategoria() {

  const navigate = useNavigate()

	const [isLoading, setIsLoading] = useState<boolean>(false)

	const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
  
  const { id } = useParams<{ id: string }>()

  async function buscarCategoriaPorId(id: string){
        try{   
          await listar(`/categorias/${id}`, setCategoria)
      
        } catch (error: any){
          console.log(error)
        }
    }
  
  useEffect(()=>{
    if(id !== undefined){
      buscarCategoriaPorId(id)
    }
  }, [id])

  async function deletarTema() {
		setIsLoading(true)

		try {
			await deletar(`/categorias/${id}`)

			alert('Categoria foi excluída com sucesso!')
		} catch (error: any) {
				alert('Erro ao Excluir a categoria!')
				console.error(error)
		}

		setIsLoading(false)
		retornar()
	}

  function retornar() {
		navigate('/categorias')
	}

  return (
    <div className="container w-1/3 mx-auto">
			<h1 className="text-4xl text-center my-4">Deletar tema</h1>
			<p className="text-center font-semibold mb-4">
				Você tem certeza de que deseja apagar a categoria a
				seguir?
			</p>
			<div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
				<header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
					Categoria
				</header>
				<p className="p-8 text-3xl bg-slate-200 h-full">
					{categoria.tipo}
				</p>
				<div className="flex">
					<button
						className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
						onClick={retornar}
					>
						Não
					</button>
					<button
						className="w-full text-slate-100 bg-indigo-400 
                                   hover:bg-indigo-600 flex items-center justify-center"
						onClick={deletarTema}
					>
						<span>Sim</span>
					</button>
				</div>
			</div>
		</div>
  )
}

export default DeletarCategoria