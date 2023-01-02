import { Boton } from '../../components/shared/Boton/Boton'

export const Home = () => {
  return (
    <>
      <div className='relative h-[calc(100vh-95px)] bg-primary/40'>
        <div className='absolute bottom-10 right-10'>
          <Boton/>
        </div>
      </div>
      <div className='px-6 py-10 relative min-h-[calc(100vh-95px)]'>
        <h1 className='titleComponent mb-10'>Bienvenidos</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cupiditate in velit, distinctio veritatis harum delectus vel ipsum id expedita magni nisi explicabo est quasi voluptatum eos dolor recusandae eum?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil autem dolores minima hic quis nemo quaerat reiciendis, deleniti eum optio corrupti eveniet vero magnam enim laboriosam eligendi doloremque vitae voluptatum.</p>
        <div className='absolute bottom-7 right-7'>
          <Boton />
        </div>
      </div>
      <div className='px-6 py-10 relative min-h-[calc(100vh-95px)]'>
        <h1 className='titleComponent mb-6'>Comienza a crear</h1>
        <div className='grid grid-cols-3 gap-1'>
          <div className='col-start-2 col-span-2 flex flex-col items-center'>
            <div className='w-32 h-32 bg-yellow-500 rounded-full'></div>
            <p className='mt-4 font-semibold text-gray-700'>GENERALES</p>
          </div>
          <div className='col-start-1 col-span-2 flex flex-col items-center'>
            <div className='w-32 h-32 bg-blue-500 rounded-full'></div>
            <p className='mt-4 font-semibold text-gray-700'>CLASES</p>
          </div>
          <div className='col-start-2 col-span-2 flex flex-col items-center'>
            <div className='w-32 h-32 bg-green-500 rounded-full'></div>
            <p className='mt-4 font-semibold text-gray-700'>ESPECIALIDADES</p>
          </div>
        </div>
      </div>
      <div className='px-6 py-10 relative min-h-[calc(100vh-95px)]'>
        <h1 className='relative titleComponent mb-6'>Sabías que tenemos un canal en youtube</h1>
        <div className='absolute bottom-10 right-10'>
          <Boton />
        </div>
      </div>
      <div className='px-6 py-10 relative min-h-[calc(100vh-95px)]'>
        <h1 className='relative titleComponent mb-6'>Sabías que tenemos un canal en youtube</h1>
        <div className='absolute bottom-10 right-10'>
          <Boton />
        </div>
      </div>
      <div className='px-6 py-10 relative min-h-[calc(100vh-95px)] w-full'>
        <h1 className='titleComponent mb-6'>Aventuri Tienda</h1>
        <div className='flex flex-row flex-wrap w-full h-full bg-green-400'>
          <div className='w-1/2 h-full bg-slate-600'>s</div>
          <div className='w-1/2 h-full'>s</div>
          <div className='w-1/2 h-full'>dd</div>
          <div className='w-1/2 h-full'>d</div>
        </div>
      </div>
      <div className='px-6 py-10 relative min-h-[calc(100vh-95px)] w-full'>
        <h1 className='titleComponent mb-6'>Te inviyo a seguirnos en instagram</h1>
        <div className='flex flex-row flex-wrap w-full h-full bg-green-400'>
          <div className='w-1/2 h-full bg-slate-600'>s</div>
          <div className='w-1/2 h-full'>s</div>
          <div className='w-1/2 h-full'>dd</div>
          <div className='w-1/2 h-full'>d</div>
        </div>
      </div>
      <div className='relative px-6 py-10 flex flex-col justify-between min-h-[calc(100vh-95px)] w-full'>
        <h1 className='titleComponent mb-6'>Únete a nuestra comunidad</h1>
        <div className='absolute'>
          <Boton />
        </div>
        <div className=''>
          <h2 className='text-2xl font-bold mb-5'>Aventuri Planet</h2>
          <div className='flex w-full text-lg'>
            <div className='w-1/2 list-none'>
              <li>Nosotros</li>
              <li>Generales</li>
              <li>Clases</li>
            </div>
            <div className='w-1/2 list-none'>
              <li>Especialidades</li>
              <li>Tienda</li>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
