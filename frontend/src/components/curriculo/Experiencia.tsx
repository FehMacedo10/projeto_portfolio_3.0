export default function Experiencia() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-col justify-around gap-6 items-center p-6 bg-black border border-zinc-800 rounded-2xl">
      <Item principal="+150" label="países atendidos" />
      <Item principal="+20" label="anos de experiência" />
      <Item principal="420k" label="alunos matriculados" />
    </div>
  )
}

function Item(props: { principal: string, label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-red-500 text-3xl font-bold leading-6">{props.principal}</span>
      <span className="text-zinc-400 font-sm text-center">{props.label}</span>
    </div>
  )
}