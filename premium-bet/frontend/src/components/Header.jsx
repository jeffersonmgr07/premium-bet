import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-orange-500 text-white flex items-center justify-between px-4 md:px-8 py-3 shadow">
      <div className="flex items-center gap-3">
        <button className="md:hidden text-2xl">☰</button>
        <span className="text-2xl font-extrabold tracking-wide">
          PREMIUM <span className="text-black">BET</span>
        </span>
      </div>

      <div className="hidden md:flex gap-4 text-sm">
        <button className="bg-white text-orange-500 font-semibold rounded-full px-4 py-1">
          En vivo
        </button>
        <button className="bg-white/10 rounded-full px-4 py-1 border border-white/30">
          Fútbol
        </button>
      </div>

      <div className="flex items-center gap-3 text-sm">
        {user ? (
          <>
            <div className="text-right">
              <p>Hola, {user.name}</p>
              <p className="text-xs">
                Saldo: <span className="font-semibold">S/ {user.balance.toFixed(2)}</span>
              </p>
            </div>
            <button
              onClick={logout}
              className="bg-white text-orange-500 font-semibold rounded-full px-4 py-1 text-xs md:text-sm"
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <a
              href="/login"
              className="bg-white text-orange-500 font-semibold rounded-full px-4 py-1 text-xs md:text-sm"
            >
              Iniciar sesión
            </a>
            <a
              href="/register"
              className="border border-white font-semibold rounded-full px-4 py-1 text-xs md:text-sm"
            >
              Registrarse
            </a>
          </>
        )}
      </div>
    </header>
  );
}
