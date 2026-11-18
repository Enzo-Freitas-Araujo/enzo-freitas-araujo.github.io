import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { login } from "./../funcoes.js"

export default function Home()
{
    const API = "https://enzo-freitas-araujogithubio-production.up.railway.app/api/usuarios"
    const navigate = useNavigate();

    useEffect(() => {localStorage.clear()}, [])

    function handleSubmit(e)
    {
        e.preventDefault();
        const dados = {
            instituicao: e.target.instituicao.value,
            nome: e.target.nome.value,
            idade: e.target.idade.value,
            email: e.target.email.value
        }
        login(API, dados, navigate, "Tela1");
    }

    return (<div style={{
        width: "480.336px",
        height: "303.612px",
        position: "relative",
        display: "flex",
        zIndex: 1,
        background: "#B9D2FF", 
        border: "2px solid",
        borderColor: "#ffadf8"
        }}>
        <form style={{margin: "10px", display: "flex", flexDirection: "column", gap: "20px", fontFamily: "Roboto"}} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">NOME: </label>
                <input type="text" name="nome" style={{ width: "357.713px", height: "31.649px", marginLeft: "40px"}} />
            </div>
            <div>
                <label htmlFor="idade">IDADE: </label>
                <input type="number" min="3" name="idade" style={{ width: "357.713px", height: "31.649px", marginLeft: "40px"}}/>
            </div>
            <div>
                <label htmlFor="instituicao">INSTITUIÇÃO: </label>
                <input type="text" name="instituicao" style={{ width: "308.387px", height: "31.649px", marginLeft: "40px"}}/>
            </div>
            <div>
                <label htmlFor="email">EMAIL: </label>
                <input type="text" name="email" style={{ width: "358.387px", height: "31.649px", marginLeft: "40px"}}/>
            </div>
            <div style={{display: "flex", gap: "180px", justifyContent: "center", width: "480px"}}>
                <button type="submit" style={{fontSize: "40px"}}>INICIAR</button>
            </div>
        </form>

    </div>)
}