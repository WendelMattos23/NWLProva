import { Plus } from 'lucide-react'

import logo from '../public/Frame 1.png'
import letsStart from '../public/lets-start.png'


export function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit" />
      <img src={letsStart} alt="in.orbit" />
      <p className='text-zinc-300 leading-relaxed max-w-80 text-center'>
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <button type='button' className='px-4 py-2.5 rounded-lg bg-violet-500 text-violet-50 flex items-center gap-2 text-sm font-medium tracking-tight hover:bg-violet-700'>
        <Plus className='size-4'/>
        Cadastrar Metas
      </button>
      </div>
  )
}
