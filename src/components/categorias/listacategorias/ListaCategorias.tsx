import { useEffect, useState } from "react"
import type Categoria from "../../../models/Categoria"
import { buscar } from "../../../services/Service"
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import CardCategorias from "../cardcategorias/CardCategorias";



function ListaCategorias() {

    // obj para navegar entre as páginas
    const navigate = useNavigate();

    //controlar o loader
    const [isLoading, setIsLoading] = useState(true)

    //receber a array de categoria do backend 
    const [categorias, setCategorias] = useState<Categoria[]>([]) 

    //buscar as categorias do backend
    async function buscarCategorias() {
        await buscar("/categorias", setCategorias)
    }

    useEffect(() => {
        setIsLoading(true)
        buscarCategorias().finally(() => setIsLoading(false))
    }, [])

    return (
        <>
            {isLoading && (
                <div className="flex justify-center items-center min-h-[calc(100vh-8rem)] w-full overflow-x-hidden">
                    <SyncLoader
                            color="#312e81"
                            size={32}
                        />
                </div>
            )}

            <div className="flex justify-center w-full overflow-x-hidden pt-20">
                <div className="box-border w-full px-4 py-4 mt-8 mb-4 max-w-8xl sm:px-6 md:px-8 lg:px-12 md:py-6">
                    {!isLoading && categorias.length === 0 && (
                        <div className="my-8 text-2xl text-center md:text-3xl text-slate-700 md:my-16">
                            Nenhuma categoria foi encontrada!
                        </div>
                    )}

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 mb-4 md:mb-0">
                        {categorias.map((categoria) => (
                            <CardCategorias key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaCategorias