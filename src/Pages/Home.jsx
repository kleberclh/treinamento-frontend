import React, { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState({ id: "", nome: "", email: "" });
  useEffect(() => {
    const storageUser = {
      id: localStorage.getItem("id"),
      nome: localStorage.getItem("nome"),
      email: localStorage.getItem("email"),
    };
    setUser(storageUser);
  }, []);
  return (
    <div>
      <h2>Perfil</h2>
      <p>ID: {user.id}</p>
      <p>Nome: {user.nome}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
