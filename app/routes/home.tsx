import type { Route } from "./+types/home"
import Equipe from "../equipe/equipe"
import { EquipeClass } from "../equipe/equipe-class"
import HookUseState from "~/hook/hookUseState"

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ]
}



export default function Home() {
  return (
    <>
      <h2 className="text-white"> 
        routes - Pagina Home
      </h2>

      <div className="mt-8">
        <h2 className="my-4">
          ___________________ React Props ___________________
        </h2>
        <Equipe nome="Gabriel" idade={28} funcao="Tester" />
      </div>

      <div className="mt-8">
        <h2 className="my-4">
          ___________________ Class  Component ___________________
        </h2>
        <EquipeClass nome="VALERIA" funcao="ANALIST" idade={13} />
      </div>
      <div className="mt-8">
        <h2 className="my-4">
          ___________________ Hook Use State ___________________
        </h2>
        <HookUseState />
      </div>
    </>
  )
}
