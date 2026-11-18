import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { post } from "./../funcoes.js"

export default function Template(props)
{
    const [texto, setTexto] = useState(props.text)
    const [page, setPage] = useState(null)
    const [able, setAble] = useState(1)
    const [option, setOption] = useState(1)
    const navigate = useNavigate();
    const idUsuario = JSON.parse(localStorage.getItem("idUsuario"))
    const idSessao = JSON.parse(localStorage.getItem("idSessao"))
    const [tempoReacao, setTempoReacao] = useState(Date.now())
    const [tempoResposta, setTempoResposta] = useState(Date.now())
    const APIacao = "http://127.0.0.1:8000/api/acoes/";

    function Option1()
    {
        setPage(props.page1)
        setTexto(props.reply1)
        setAble(0)
        console.log("Clica na opção: " + props.option1)
    }
    function Option2()
    {
        setPage(props.page2)
        setTexto(props.reply2)
        setAble(0)
        setOption(2)
    }
    function avancar()
    {
        if((texto == props.reply1) || (texto == props.reply2))
        {
            if(page === props.atual)
            {
                setPage(null)
                setAble(1)
                setTexto(props.text)
                setOption(1)
            }
            else
            {
                navigate("/" + page);
            }
        }
    }
    function handleClick(e)
    {
        const id = Number(e.target.id);
        let dados;
        let resposta;
        let t_reacao = 0;
        let t_resposta = 0;

        if(id === 1)
        {
            console.log("Clica na opção: " + props.option1)
            resposta = "Clica na opção: " + props.option1
            t_resposta = (Date.now() - tempoResposta)/1000
            setTempoReacao(Date.now());
            setTempoResposta(Date.now());
        }
        else if(id === 2)
        {
            console.log("Clica na opção: " + props.option2)
            resposta = "Clica na opção: " + props.option2
            t_resposta = (Date.now() - tempoResposta)/1000
            setTempoReacao(Date.now());
            setTempoResposta(Date.now());
        }
        else if(id === 3)
        {
            console.log("Clica em Seguir")
            resposta = "Clica em Seguir"
            t_reacao = (Date.now() - tempoReacao)/1000
            setTempoReacao(Date.now());
            setTempoResposta(Date.now());
        }
        else
        {
            console.log("Clica em lugar aleatório da tela")
            resposta = "Clica em lugar aleatório da tela"
            t_reacao = (Date.now() - tempoReacao)/1000
            setTempoReacao(Date.now());
        }

        dados = {
            "usuario_id": idUsuario,
            "sessao_id": idSessao,
            "tipo": "click",
            "jogo": props.atual,
            "fase": "" + props.Etapa,
            "resposta": resposta,
            "tempo_reacao": t_reacao,
            "tempo_resposta": t_resposta,
            "extra": ""
        }

        post(APIacao, dados)
    }

    const botao = () =>
    {
        if(able === 1)
        {
            return(<div style={{marginTop: "50px", zIndex: 1, display: "flex", alignItems: "center", gap: "50px"}}>
            <button id={1} onClick={Option1}>{props.option1}</button>
            <button id={2} onClick={Option2}>{props.option2}</button>
            </div>);
        }
        else
        {
            return(<div style={{marginTop: "50px", zIndex: 1, display: "flex", alignItems: "center", gap: "50px"}}>
            <button id={3} onClick={avancar}>Seguir</button>
            </div>);
        }
    }

    const imagem = () =>
    {
        if(able === 0 && option === 2)
        {
            return(<img style={{position: "absolute", width: "900px", marginTop: "150px", marginLeft: "800px", height: "700px", objectFit: "contain", zIndex: 0}} src={"imagens/" + props.sprite3}></img>)
        }
        else if(able === 0 && option === 1)
        {
            return(<img style={{position: "absolute", width: "900px", marginTop: "150px", marginLeft: "800px", height: "700px", objectFit: "contain", zIndex: 0}} src={"imagens/" + props.sprite2}></img>)
        }
        else if(able === 1 && props.sprite4)
        {
            return(<img style={{position: "absolute", width: "900px", marginTop: "150px", marginLeft: "800px", height: "700px", objectFit: "contain", zIndex: 0}} src={"imagens/" + props.sprite4}></img>)
        }
        else
        {
            return (<></>)
        }
    }

    return(
    <div onClick={handleClick} style={{position: "relative", overflow: "hidden", width: "1280px", height: "720px", display: "flex", flexDirection: "column", alignItems: "center", backgroundImage: "url('imagens/" + props.cenario + "')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
        <img style={{position: "absolute", width: "900px", marginTop: "150px", marginRight: "800px", height: "700px", objectFit: "contain", zIndex: 0}} src={"/imagens/" + props.sprite1}></img>
        {imagem()}
        <div style={{position: "absolute", bottom: "20px", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div style={{fontFamily: "Roboto", fontSize: "25px", zIndex: 1, border: "2px solid", width: "900px", height: "auto", background: "#B9D2FF", borderColor: "#ffadf8", color: "black", padding: "5px"}}>
            {texto}
        </div>
            {botao()}
        </div>
    </div>
    )
}