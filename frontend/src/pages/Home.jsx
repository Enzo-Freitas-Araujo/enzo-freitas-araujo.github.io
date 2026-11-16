import { useNavigate } from "react-router-dom"

export default function Home()
{

    const navigate = useNavigate();

    function handleClick()
    {
        navigate("/Tela1")
    }

    return(<div>
        <button onClick={handleClick}>Começar</button>
    </div>)
}