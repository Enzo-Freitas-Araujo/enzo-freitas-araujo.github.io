import { useNavigate } from "react-router-dom"
import Template from "./../components/Template"

export default function Tela2()
{
    return(<Template text="Ele humilhou você e tentou controlar suas amizades. Você procura alguém de confiança para conversar?" 
        reply1="Que bom que você procurou apoio…" reply2="Estou preocupada com a humilhação…" page1="Tela3" page2="Tela5" option1="Sim" option2="Não"/>)
}