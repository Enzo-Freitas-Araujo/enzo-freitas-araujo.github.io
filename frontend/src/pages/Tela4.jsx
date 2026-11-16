import { useNavigate } from "react-router-dom"
import Template from "./../components/Template"

export default function Tela4()
{
    return(<Template text="Você aceita conversar com sua mãe e procurar apoio para sua proteção?" reply1="Aceitar apoio é uma forma de cuidar de você…" reply2="Você pode discordar da sua mãe… procure outra pessoa segura" page1="Tela5" page2="Video3" option1="Sim" option2="Não"/>)
}