import Image from "next/image"


export default function MiniCV() {
  return (
    <div className="flex-1 flex flex-col-reverse md:flex-row lg:flex-col-reverse xl:flex-row gap-6 items-center md:items-start lg:items-center xl:items-start bg-black border border-zinc-800 rounded-2xl px-6 pt-6">
      <div className="relative min-w-72 h-64 xl:self-end">
        <Image src="/Felipe Macedo (2).jpg" alt="Foto de Perfil" fill />
      </div>
      <div className="flex flex-col gap-5 self-center py-6 items-center md:items-start lg:items-center xl:items-start">
        <div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
          <span
            className="
              bg-gradient-to-r from-red-500 via-white to-white
              text-transparent bg-clip-text text-2xl font-bold
            "
          >
            Felipe Macedo
          </span>
          <span>Desenvolvedor Fullstack</span>
        </div>
        <p className="text-sm ltext-center md:text-left lg:text-center xl:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi culpa consequuntur consequatur suscipit nulla reiciendis amet officiis vero commodi, explicabo non nesciunt tempora assumenda aspernatur numquam minima consectetur blanditiis deserunt.
        </p>
      </div>

    </div>
  )
}