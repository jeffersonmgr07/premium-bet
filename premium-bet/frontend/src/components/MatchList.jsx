import MatchCard from "./MatchCard";

export default function MatchList({ matches }) {
  if (!matches.length) {
    return <p className="text-sm text-gray-500 p-4">No hay eventos disponibles.</p>;
  }
  return (
    <div className="p-3 md:p-4">
      {matches.map((m) => (
        <MatchCard key={m._id} match={m} />
      ))}
    </div>
  );
}
