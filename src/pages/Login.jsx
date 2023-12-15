import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Login = () => {

    //redirecionando o usuário de url 
    const[userName, setUserName] = useState("");

    const navigate = useNavigate(); 

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(`O usuário ${userName} se logou com sucesso.`);
        //redireciona para a página da HOME. 
        navigate("/");
    }

  return (
    <div>
        <h2>Pagina de Login.</h2>
        <form onSubmit={handleLogin}>
            <input 
                type="text" 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)} 
            />
            <button type="submit">Entrar</button>
        </form>
    </div>
  )
}

export default Login