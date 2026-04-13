

function Home() {
  return (
     <>
            <div className="bg-indigo-900 flex justify-center h-[70vh]">
                <div className='container grid grid-cols-1 md:grid-cols-2 text-white'>

                    

                    <div className="flex flex-col gap-4 items-center justify-center py-4 text-center md:text-left order-last md:order-first">
                        <h2 className='text-3xl md:text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-base md:text-xl'>
                            Aqui você encontra Medicamentos e Cosmeticos
                        </p>

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
            </>

  )
}

export default Home