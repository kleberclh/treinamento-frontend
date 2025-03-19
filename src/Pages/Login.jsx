import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const login = async (email, senha) => {
    try {
      const response = await api.post("/login", { email, senha });

      return response.data;
    } catch (error) {
      console.log({ message: error });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !senha) {
      console.log("Email e senha não foram fornecidos ou estão incorretos.");
      return;
    }

    try {
      const loginUser = await login(email, senha);

      if (loginUser) {
        console.log("Login bem-sucedido:", loginUser);

        window.localStorage.setItem("email", loginUser.email);
        window.localStorage.setItem("nome", loginUser.nome);
        window.localStorage.setItem("id", loginUser.id);
        navigate("/");
      } else {
        console.log("Falha no login. Verifique suas informações.");
      }
    } catch (error) {
      console.error("Erro ao realizar login:", error.message);
    }
  };
  return (
    <form onSubmit={handleLogin}>
      <h1>LOGIN</h1>
      <input
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />
      <input
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        type="password"
      />
      <button type="submit">Entrar</button>
    </form>
  );
}
