import { useNavigate } from "react-router-dom"
import Template from "./../components/Template"

export default function Tela9()
{
    return(<Template text="Você vai entrar sozinha na floresta para procurar quem está gritando?" reply1="Você evitou uma situação perigosa e chamou socorro…" reply2="Sua vontade de ajudar é importante, mas entrar sozinha pode colocar você em perigo…" page1="Tela10" page2="Tela10" option1="Não ir e avisar a equipe de resgate" option2="Ir na floresta"/>)
}