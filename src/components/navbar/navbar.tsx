
function navbar() {
  return (
    <>
        <div className='w-full flex justify-center py-4
            			   bg-slate-800 text-white'>
            
            <div className="container flex justify-between text-lg">
                <p className="text-2xl font-bold">Blog Pessoal</p>

                <div className='flex gap-4'>
                    Produtos
                    Categorias
                    Cadastrar Categoria
                </div>
            </div>
        </div>
    </>
  )
}

export default navbar