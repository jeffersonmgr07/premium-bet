export default function SidebarLeagues({ leagues, selectedId, onSelect }) {
  return (
    <aside className="hidden md:block w-64 bg-gray-100 border-r overflow-y-auto">
      <h2 className="px-4 py-3 font-semibold text-sm uppercase text-gray-600">
        Principales Ligas
      </h2>
      <ul>
        {leagues.map((lg) => (
          <li
            key={lg._id}
            className={`px-4 py-2 text-sm cursor-pointer hover:bg-orange-100 ${
              selectedId === lg._id ? "bg-orange-200 font-semibold" : ""
            }`}
            onClick={() => onSelect(lg._id)}
          >
            {lg.name}
          </li>
        ))}
      </ul>
    </aside>
  );
}
