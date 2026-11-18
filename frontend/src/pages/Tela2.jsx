import { useNavigate } from "react-router-dom"
import Template from "./../components/Template"

export default function Tela2()
{
    return(<Template Etapa={1} atual="Tela2" sprite1="PRINCESA TRISTE.PNG" sprite2="NPC 1.png" sprite3="NPC 2.png" text="Ele humilhou você e tentou controlar suas amizades. Você procura alguém de confiança para conversar?" 
        reply1="Que bom que você procurou apoio! Você merece respeito e pode contar o que aconteceu. Humilhação e controle podem ser formas de violência psicológica. Você não precisa esperar uma agressão física para pedir ajuda."
        reply2="Estou preocupada com a humilhação e a tentativa de controlar suas amizades. Isso merece atenção. Procure uma pessoa de confiança e conte o que aconteceu. Se ele ameaçar você ou impedir sua saída, busque proteção e acione ajuda de emergência quando puder fazer isso com segurança." 
        page1="Tela3" page2="Tela2" option1="Sim" option2="Não" cenario="QUARTO REAL _ SALA DA RAINHA.PNG"/>)
}