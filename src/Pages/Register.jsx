import { useState } from "react";
import Mais from "../assets/mais.webp";
import Sky from "../assets/skyy.png";
import api from "../axios/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const registro = async (nome, senha, email) => {
    try {
      const response = await api.post("/registrar", { nome, senha, email });
      return response.data;
    } catch (error) {
      throw new Error("Erro ao se registrar");
    }
  };

  const handleRegistro = async (e) => {
    e.preventDefault();

    try {
      const newUser = await registro(nome, senha, email);
      navigate("/login");
    } catch (error) {
      alert("Erro criar conta");
    }
  };

  return (
    <div className="flex flex-col justify-center text-white w-full h-screen bg-[#101010]">
      <div className="flex justify-center gap-15 ">
        <img className="w-45 h-20" src={Mais} alt="Mais" />
        <img className="w-40 h-15 text-center" src={Sky} alt="Sky" />
      </div>
      <form onSubmit={handleRegistro}>
        <div className="flex justify-center mt-20">
          <div className="flex justify-center flex-col w-1/2 border bg-white rounded">
            <div className="flex justify-center mt-20 mb-20">
              <h1 className="text-3xl bold text-gray-800">Crie sua conta</h1>
            </div>
            <div className="flex justify-center ">
              <div className="flex justify-center flex-col gap-5 ">
                <input
                  className="border w-96 rounded-full p-2 border-[#464646] text-black placeholder-gray-800"
                  type="text"
                  placeholder="Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
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
