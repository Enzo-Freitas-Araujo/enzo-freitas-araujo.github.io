import { useNavigate } from "react-router-dom"
import { useRef, useEffect, useState} from "react"
import { post } from "./../funcoes.js"

export default function Video(props)
{

    const videoRef = useRef(null);
    const navigate = useNavigate();
    const [pause, setPause] = useState(0);
    const [ended, setEnded] = useState(0);
    const APIacao = "http://127.0.0.1:8000/api/acoes/"
    const idUsuario = JSON.parse(localStorage.getItem("idUsuario"))
    const idSessao = JSON.parse(localStorage.getItem("idSessao"))
    const [tempoReacao, setTempoReacao] = useState(Date.now())

    useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
        document.body.style.overflow = "auto";
    };
}, []);

    useEffect(() => {
        videoRef.current.play();}, [])

    function alternarVideo() {
    if (videoRef.current.paused) {
        videoRef.current.play();
        setPause(0);
    } else {
        videoRef.current.pause();
        setPause(1);
    }
}

function handleClick(e)
{
    const id = Number(e.target.id);
    let dados;
    let resposta;
    let t_reacao = null;

    if(id === 1)
    {
        if(ended === 0)
        {
            console.log("Clica em botão Pausar")
            resposta = "Clica em botão Pausar"
            t_reacao = (Date.now() - tempoReacao)/1000
        }
        else
        {
            console.log("Clica em botão Repetir")
            resposta = "Clica em botão Repetir"
            t_reacao = (Date.now() - tempoReacao)/1000
        }
    }
    else if(id === 2)
    {
        if(ended === 0)
        {
            console.log("Clica em botão Pular")
            resposta = "Clica em botão Pular"
            t_reacao = (Date.now() - tempoReacao)/1000
        }
        else
        {
            console.log("Clica em botão Continuar")
            resposta = "Clica em botão Continuar"
            t_reacao = (Date.now() - tempoReacao)/1000
        }
    }
    else if(id === 3)
    {
        console.log("Para de assistir e sai no meio do vídeo")
        resposta = "Para de assistir e sai no meio do vídeo"
        t_reacao = (Date.now() - tempoReacao)/1000
    }
    else if(id === 4)
    {
        console.log("Despausa o vídeo")
        resposta = "Despausa o vídeo"
        t_reacao = (Date.now() - tempoReacao)/1000
    }
    else
    {
        console.log("Clica em lugar aleatório da tela")
        resposta = "Clica em lugar aleatório da tela"
        t_reacao = (Date.now() - tempoReacao)/1000
    }

    dados = {
        "usuario_id": idUsuario,
        "sessao_id": idSessao,
        "tipo": "click",
        "jogo": props.atual,
        "fase": "" + props.Etapa,
        "resposta": resposta,
        "tempo_reacao": t_reacao,
        "tempo_resposta": 0,
        "extra": ""
    }
    setTempoReacao(Date.now());
    post(APIacao, dados)
}

    return(<div onClick={handleClick}>
        <div>
            <video style={{transform: "scale(0.8)", transformOrigin: "center"}} ref={videoRef} width="1920" disablePictureInPicture onPlay={() => {setEnded(0)}} onEnded={() => {setEnded(1)}}>
                <source src={props.fonte} type="video/mp4" />
                Seu navegador não suporta vídeos.
            </video>
            <div style={{zIndex: 1, position: "relative", bottom: "200px", left: "730px", display: "flex", gap: "40px"}}>
                <button id={1} onClick={alternarVideo} style={{width: "200px", height: "50px"}}>{ended === 0 ? "Pausar" : "Repetir"}</button>
                <button id={2} onClick={() => {navigate("/" + props.page)}} style={{width: "200px", height: "50px"}}>{ended === 0 ? "Pular" : "Continuar"}</button>
            </div>

            {pause === 1 && (
        <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.6)",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <p style={{color: "white", fontSize: "30px"}}>Deseja Sair da Tela Atual?</p>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "30px"}}>
                <button id={3} onClick={() => {navigate("/")}} style={{width: "200px", height: "50px"}}>Sim</button>
                <button id={4} onClick={alternarVideo} style={{width: "200px", height: "50px"}}>Não</button>
            </div>
        </div>
    )}
        </div>
    </div>)
}