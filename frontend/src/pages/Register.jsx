import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await register(name, email, password);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Error al registrarse");
    }
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-56px)] bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow p-6 w-full max-w-sm"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">Crear cuenta</h2>
        {error && <p className="text-sm text-red-500 mb-2">{error}</p>}

        <label className="block text-sm mb-2">
          Nombre
          <input
            type="text"
            className="mt-1 w-full border rounded px-3 py-2 text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label className="block text-sm mb-2">
          Correo electrónico
          <input
            type="email"
            className="mt-1 w-full border rounded px-3 py-2 text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="block text-sm mb-4">
          Contraseña
          <input
            type="password"
            className="mt-1 w-full border rounded px-3 py-2 text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button className="w-full bg-orange-500 text-white rounded py-2 text-sm font-semibold">
          Registrarse
        </button>

        <p className="text-xs text-center mt-3">
          ¿Ya tienes cuenta?{" "}
          <a href="/login" className="text-orange-500 font-semibold">
            Inicia sesión
          </a>
        </p>
      </form>
    </div>
  );
}
