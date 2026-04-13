import { useEffect, useState, type ChangeEvent, type SyntheticEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import ClipLoader from "react-spinners/ClipLoader";


function FormCategoria() {

    const navigate = useNavigate();
    // Loader 
    const [isLoading, setIsLoading] = useState<boolean>(false);
    //estado para receber os dados do categoria que serao digitados no formulario
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria); //obj

    //acessar o  parametro id da url, para saber se o formulario é para criar um novo categoria ou editar um categoria existente
    //se tiver id, é para editar, se nao tiver id, é para criar um novo categoria
    const { id } = useParams<{ id: string }>();

    //buscar categoria por id, para preencher o formulario com os dados do categoria que serao editados
    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            alert('Categoria não encontrada!')
            console.error(error)
            retornar();
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    async function gerarNovaCategoria(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        //se tiver id, é para editar, se nao tiver id, é para criar um novo categoria
        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria)
                alert('Categoria atualizada com sucesso')
            } catch (error: any) {
                alert('Erro ao atualizar a Categoria')
                console.error(error)
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria)
                alert('Categoria cadastrada com sucesso')
            } catch (error: any) {
                alert('Erro ao cadastrar a Categoria')
                console.error(error)
            }
        }

        setIsLoading(false)
        retornar();

    }
    function retornar() {
        navigate("/categorias")
    }


    return (
        <>
            <div className="container flex flex-col items-center justify-center px-2 pt-20 mx-auto">
                <h1 className="my-8 text-3xl text-center md:text-4xl font-semibold">
                    {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
                </h1>

                <form className="flex flex-col w-full max-w-md gap-4 px-2 md:max-w-1/2"
                    onSubmit={gerarNovaCategoria}
                >
                    <div className="flex flex-col gap-2 text-lg font-semibold"> 
                        <label htmlFor="nome">Categoria:</label>
                        <input
                            type="text"
                            placeholder="Nome da Categoria"
                            id='nome'
                            name='nome'
                            className="p-2 text-base bg-white border-2 rounded border-zinc-600  md:text-lg font-normal"
                            required
                            value={categoria.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <button
                        className="flex justify-center w-full py-2 mx-auto text-base rounded text-slate-100 bg-slate-400 hover:bg-slate-800 md:w-1/2 md:text-lg"
                        type="submit"
                    >
                        {isLoading ?
                            <ClipLoader
                                color="#ffffff"
                                size={24}
                            />
                            :
                            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                        }
                    </button>
                </form>
            </div>
        </>
    )
}

export default FormCategoria