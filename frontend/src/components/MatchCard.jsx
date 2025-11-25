export default function MatchCard({ match }) {
  const date = new Date(match.startTime);
  const timeLabel = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="bg-white rounded-lg shadow-sm border mb-2 p-3">
      <div className="flex justify-between items-center text-xs text-gray-500 mb-1">
        <span>
          {date.toLocaleDateString()} · {timeLabel}
        </span>
        <span>{match.status === "live" ? "En vivo" : "Próximo"}</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col text-sm font-medium">
          <span>{match.homeTeam}</span>
          <span>{match.awayTeam}</span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <button className="px-3 py-2 rounded bg-gray-100 hover:bg-orange-200">
            1
            <br />
            <span className="font-semibold">
              {match.odds1x2.home?.toFixed ? match.odds1x2.home.toFixed(2) : match.odds1x2.home}
            </span>
          </button>
          <button className="px-3 py-2 rounded bg-gray-100 hover:bg-orange-200">
            X
            <br />
            <span className="font-semibold">
              {match.odds1x2.draw?.toFixed ? match.odds1x2.draw.toFixed(2) : match.odds1x2.draw}
            </span>
          </button>
          <button className="px-3 py-2 rounded bg-gray-100 hover:bg-orange-200">
            2
            <br />
            <span className="font-semibold">
              {match.odds1x2.away?.toFixed ? match.odds1x2.away.toFixed(2) : match.odds1x2.away}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
