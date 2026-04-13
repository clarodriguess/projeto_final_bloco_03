import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";
import ClipLoader from "react-spinners/ClipLoader";


function DeleteCategoria() {

 const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            alert('Categoria não encontrada!')
            console.error(error)
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deleteCategoria() {
        setIsLoading(true)
        //procurar o id da categoria e deletar a categoria do backend
        try {
            await deletar(`/categorias/${id}`)
            alert('Categoria deletada com sucesso')
        } catch (error) {
            alert('Erro ao deletar a categoria')
            console.error(error)
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/categorias")
    }

    return (
        <div className='container w-full max-w-md px-4 pt-4 mx-auto md:pt-6'>

            <h1 className='py-4 text-3xl text-center font-bold md:text-4xl pt-20'>Deletar Categoria</h1>
            <p className='mb-4  text-center md:text-lg font-normal'>
                Tem certeza de que deseja deletar a categoria?
            </p>


            <div className='flex flex-col justify-between overflow-hidden border rounded-sm'>
                <header
                    className='px-4 py-2 text-lg font-bold text-white md:px-6 bg-slate-600 md:text-2xl'>
                    Categoria
                </header>
                <p className='h-full p-4 text-base bg-white md:p-8 md:text-2xl'>{categoria.nome}</p>
               
                <div className="flex flex-row">
                    <button
                        className='w-full py-2 text-base bg-gray-400 text-slate-100 hover:bg-red-600 hover:font-bold md:text-lg'
                        onClick={retornar}
                    >
                        Não
                    </button>
                    <button
                        className='flex items-center justify-center w-full text-base bg-green-500 text-slate-100 hover:bg-green-700 hover:font-bold md:text-lg'
                        onClick={deleteCategoria}
                    >
                        {isLoading ?
                            <ClipLoader
                            color="#ffffff"
                            size={15}
                          />
                            :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteCategoria