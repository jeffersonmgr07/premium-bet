import { useEffect, useState } from "react";
import api from "../api/axiosClient";
import { useAuth } from "../context/AuthContext";

export default function Wallet() {
  const { user } = useAuth();
  const [amount, setAmount] = useState(10);
  const [history, setHistory] = useState([]);

  const loadHistory = () => {
    api.get("/wallet/history").then(({ data }) => setHistory(data));
  };

  useEffect(() => {
    if (user) loadHistory();
  }, [user]);

  const handleDeposit = async () => {
    await api.post("/wallet/deposit", { amount: Number(amount) });
    loadHistory();
    alert("Depósito simulado realizado");
  };

  const handleWithdraw = async () => {
    await api.post("/wallet/withdraw", { amount: Number(amount) });
    loadHistory();
    alert("Retiro simulado realizado");
  };

  if (!user) {
    return <p className="p-4 text-sm">Debes iniciar sesión para ver tu billetera.</p>;
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-2">Billetera</h2>
      <p className="mb-4">
        Saldo actual: <strong>S/ {user.balance?.toFixed ? user.balance.toFixed(2) : user.balance}</strong>
      </p>

      <div className="flex gap-2 mb-4">
        <input
          type="number"
          min="1"
          className="border rounded px-3 py-2 text-sm w-32"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          onClick={handleDeposit}
          className="bg-green-500 text-white px-3 py-2 text-sm rounded"
        >
          Depositar (simulado)
        </button>
        <button
          onClick={handleWithdraw}
          className="bg-red-500 text-white px-3 py-2 text-sm rounded"
        >
          Retirar (simulado)
        </button>
      </div>

      <h3 className="font-semibold mb-2 text-sm">Historial</h3>
      <ul className="text-xs bg-white rounded border max-h-64 overflow-y-auto">
        {history.map((tx) => (
          <li key={tx._id} className="px-3 py-2 border-b flex justify-between">
            <span>{tx.type} - {tx.description}</span>
            <span>S/ {tx.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
