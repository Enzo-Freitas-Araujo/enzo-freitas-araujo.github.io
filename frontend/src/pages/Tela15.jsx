import { useNavigate } from "react-router-dom"
import Template from "./../components/Template"

export default function Tela15()
{
    return(<Template text="A equipe preparou uma saída protegida. Você aceita sair acompanhada" reply1="Você aceitou uma saída com apoio…" reply2="Diga à equipe o que impede sua saída…" page1="Tela16" page2="Tela17" option1="Sim" option2="Não"/>)
}