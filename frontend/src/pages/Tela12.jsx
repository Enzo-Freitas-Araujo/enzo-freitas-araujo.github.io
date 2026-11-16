import { useNavigate } from "react-router-dom"
import Template from "./../components/Template"

export default function Tela12()
{
    return(<Template text="Você pode colaborar com o resgate sem se aproximar do agressor. Deseja ajudar?" reply1="Sua colaboração pode fazer diferença…" reply2="Se você está com medo ou não consegue participar, permaneça protegida…" page1="Tela13" page2="Tela14" option1="Sim" option2="Não"/>)
}