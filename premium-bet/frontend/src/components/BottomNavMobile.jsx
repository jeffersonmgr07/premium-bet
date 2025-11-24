export default function BottomNavMobile() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-inner flex justify-around py-2 md:hidden">
      <button className="flex flex-col items-center text-xs">
        <span>🏠</span>
        <span>Inicio</span>
      </button>
      <button className="flex flex-col items-center text-xs">
        <span>⚽</span>
        <span>Fútbol</span>
      </button>
      <button className="flex flex-col items-center text-xs">
        <span>🎫</span>
        <span>Mis apuestas</span>
      </button>
      <button className="flex flex-col items-center text-xs">
        <span>👛</span>
        <span>Billetera</span>
      </button>
    </nav>
  );
}
