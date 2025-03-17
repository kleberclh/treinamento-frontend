import { useState } from "react";
import Mais from "../assets/mais.webp";
import Sky from "../assets/skyy.png";
import { useNavigate } from "react-router-dom";
import api from "../axios/api"; 

export default function Login() {
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const login = async (email, senha) => {
    try {
      const response = await api.post("/login", { email, senha });
      return response.data; // Retorna os dados do usuário
    } catch (error) {
      // Se o login falhar, apenas lançar o erro genérico
      throw new Error("Erro ao tentar logar. Verifique suas credenciais.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await login(email, senha);
      navigate("/"); // Redireciona após o login
    } catch (error) {
      // Não loga nada no console, apenas exibe uma mensagem para o usuário
      alert(
        "Erro ao tentar fazer login. Verifique suas credenciais e tente novamente."
      );
    }
  };

  return (
    <div className="flex flex-col justify-center text-white w-full h-screen bg-[#101010]">
      <div className="flex justify-center gap-15 ">
        <img className="w-45 h-20" src={Mais} alt="Mais" />
        <img className="w-40 h-15 text-center" src={Sky} alt="Sky" />
      </div>
      <form onSubmit={handleLogin}>
        <div className="flex justify-center mt-20">
          <div className="flex justify-center flex-col w-1/2 border bg-white rounded">
            <div className="flex justify-center mt-20 mb-20">
              <h1 className="text-3xl bold text-gray-800">
                Entrar na sua conta
              </h1>
            </div>
            <div className="flex justify-center ">
              <div className="flex justify-center flex-col gap-5 ">
                <input
                  className="border w-96 rounded-full p-2 border-[#464646] text-black placeholder-gray-800"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="border rounded-full p-2 border-[#464646] placeholder-gray-800 text-black"
                  placeholder="Senha"
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>
            </div>
            <div>
              <p className="text-red-700 text-sm text-center mt-10">
                Esqueceu a senha?
              </p>
            </div>
            <div className="flex justify-center mb-10">
              <button
                type="submit"
                className="border w-50 mt-10 p-3 rounded-full bg-blue-600 hover:bg-blue-500 border-none cursor-pointer"
              >
                Entrar
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
