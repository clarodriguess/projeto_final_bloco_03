import { Link, useNavigate } from "react-router-dom";
import ListaCategorias from "../../components/categorias/listacategorias/ListaCategorias"
import FormProduto from "../../components/produtos/formproduto/FormProduto"
import ListaProdutos from "../../components/produtos/listaprodutos/ListaProdutos"


function Home() {
    const navigate = useNavigate();

  return (
     <>
            <div className="bg-sky-800 flex justify-center h-[90vh] pt-30">
                <div className='container grid grid-cols-1 md:grid-cols-2 text-white'>

                    

                    <div className="flex flex-col gap-4 items-center justify-center py-4 text-center md:text-left order-last md:order-first">
                        <h2 className='text-3xl md:text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-base md:text-xl'>
                            Aqui você encontra Medicamentos e Cosmeticos
                        </p>
                        <div className="flex justify-around gap-4">
                          <Link to="/cadastrarproduto" className="text-base border-2 border-slate-100 px-4 py-2 rounded-md hover:bg-slate-100 hover:text-slate-900">
                        Novo Produto
                        </Link>
                        <Link to="/produtos" className="text-base border-2 border-slate-100 px-4 py-2 rounded-md hover:bg-slate-100 hover:text-slate-900">
                        Ver Produtos
                        </Link>
                        </div>

                    </div>

                    <div className="flex justify-center items-center w-full">
                        <img
                            src='/img-home.png'
                            alt='Imagem da pagina Home'
                            className='h-80'
                        />
                    </div>

                   

                </div>
            </div>
            {/* <ListaCategorias /> */}
            {/* <h2 className="text-3xl text-center font-bold mt-10 mb-6">Produtos</h2>
            <ListaProdutos /> */}
            </>

  )
}

export default Home