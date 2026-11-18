export async function login(API, dado, navigate, paginaDeDestino)
{
    try {
        const response = await fetch(API, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const dados = await response.json();
        console.log("Dados recebidos:", dados);
        const usuarioEncontrado = dados.find(user => user.nome === dado.nome);
        if(usuarioEncontrado != undefined)
        {
            post("https://enzo-freitas-araujogithubio-production.up.railway.app/api/sessoes/", {usuario_id: usuarioEncontrado.id, usuario_nome: usuarioEncontrado.nome}, navigate, paginaDeDestino)
        }
        else
        {
            const dados_usuario = post(API, dado)
            post("https://enzo-freitas-araujogithubio-production.up.railway.app/sessoes/", {usuario_id: dados_usuario.id, usuario_nome: dados_usuario.nome}, navigate, paginaDeDestino)
        }
        
        return dados; // Retorna os dados para onde você precisar
    } catch (error) {
        console.log("Erro ao buscar:", error.message);
        return null;
    }
}

export async function post(API, dado, navigate=null, paginaDeDestino=null)
{
    try 
    {
        const response = await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dado),
        });
        if (!response.ok) 
        {
            throw new Error("Não foi possível armazenar resposta");
        }

        const resultado = await response.json();
        console.log("Resposta do POST:", resultado);

        if(paginaDeDestino && navigate)
        {
            console.log(resultado.id)
            localStorage.setItem("idUsuario", resultado.usuario_id)
            localStorage.setItem("idSessao", resultado.id)
            navigate("/" + paginaDeDestino);
        }
        else
        {
            return resultado;
        }
    }  
    catch (error) 
    {
        console.log(error.message);
        return;
    }
}