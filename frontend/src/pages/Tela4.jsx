import { useNavigate } from "react-router-dom"
import Template from "./../components/Template"

export default function Tela4()
{
    return(<Template Etapa={2} atual="Tela4" sprite1="PRINCESA TRISTE.PNG" sprite2="NPC 1.png" sprite3="NPC 2.png" sprite4="RAINHA HELENA .PNG" text="Você aceita conversar com sua mãe e procurar apoio para sua proteção?" reply1="Aceitar apoio é uma forma de cuidar de você. Sua voz continua sendo importante: você pode contar o que sente, fazer perguntas e participar das decisões. Você tem direito a proteção e atendimento." 
        reply2="Você pode discordar da sua mãe. Mas os comportamentos dele continuam preocupantes. Se não quiser conversar com ela, procure outra pessoa segura ou um serviço de atendimento. Não fique sem apoio diante de ameaças ou controle." page1="Tela5" page2="Tela6" option1="Sim" option2="Não" cenario="QUARTO REAL _ SALA DA RAINHA.PNG"/>)
}