import { useEffect, useState } from "react";
import api from "../api/axiosClient";
import SidebarLeagues from "../components/SidebarLeagues";
import MatchList from "../components/MatchList";
import BottomNavMobile from "../components/BottomNavMobile";

export default function Home() {
  const [leagues, setLeagues] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState(null);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    api.get("/leagues").then(({ data }) => {
      setLeagues(data);
      if (data[0]) setSelectedLeague(data[0]._id);
    });
  }, []);

  useEffect(() => {
    if (!selectedLeague) return;
    api.get(`/matches/by-league/${selectedLeague}`).then(({ data }) => {
      setMatches(data);
    });
  }, [selectedLeague]);

  return (
    <div className="flex h-[calc(100vh-56px)]">
      <SidebarLeagues
        leagues={leagues}
        selectedId={selectedLeague}
        onSelect={setSelectedLeague}
      />
      <main className="flex-1 bg-gray-50 overflow-y-auto pb-14 md:pb-0">
        <h1 className="px-4 py-3 font-semibold text-gray-700">
          Fútbol • {leagues.find((l) => l._id === selectedLeague)?.name || ""}
        </h1>
        <MatchList matches={matches} />
      </main>
      <BottomNavMobile />
    </div>
  );
}
