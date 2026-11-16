import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Template(props)
{
    const [texto, setTexto] = useState(props.text)
    const [page, setPage] = useState(null)
    const navigate = useNavigate();

    function Option1()
    {
        setPage(props.page1)
        setTexto(props.reply1)
    }
    function Option2()
    {
        setPage(props.page2)
        setTexto(props.reply2)
    }
    function avancar()
    {
        if((texto == props.reply1) || (texto == props.reply2))
        {
            navigate("/" + page);
        }
    }

    return(<div style={{background: "green", width: "1280px", height: "720px", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div onClick={avancar} style={{fontFamily: "Cinzel Decorative", border: "2px solid", width: "1000px", height: "200px", marginTop: "400px"}}>
            {texto}
        </div>

        <div style={{marginTop: "50px", display: "flex", alignItems: "center", gap: "50px"}}>
            <button onClick={Option1}>{props.option1}</button>
            <button onClick={Option2}>{props.option2}</button>
        </div>
    </div>)
}