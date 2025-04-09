import type { Route } from "./+types/home";
import Equipe from "../equipe/equipe"
import { EquipeClass } from "../equipe/equipe-class"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}



export default function Home() {
  return (
    <>
      <h2 className="text-white"> Pagina Home</h2>
      <Equipe nome="Gabriel" idade={28} funcao="Tester"/>
      <EquipeClass nome="VALERIA" funcao="ANALIST" idade={13} />
    </>
  )
}
