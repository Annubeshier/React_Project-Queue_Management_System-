import { useState } from "react";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";

export default function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    setQueue([...queue, { ...customer, id: Date.now(), status: "waiting" }]);
  };
  const updateStatus = (customerId, newStatus) => {
    setQueue(
      queue.map((customer) =>
        customer.id === customerId
          ? { ...customer, status: newStatus }
          : customer
      )
    );
  };
  const removeFromQueue = (customerId) => {
    setQueue(queue.filter((customer) => customer.id !== customerId));
  };
  return (
    <div className="app">
      <header className="text-center">
        <h1 className="text-blue-800 font-bold">Queue Management System</h1>
        <p>Manage your customers efficiently</p>
      </header>
      <main className="flex justify-evenly mt-20">
        <QueueForm onAdd={addToQueue} />
        <QueueDisplay
          queue={queue}
          onUpdateStatus={updateStatus}
          onRemove={removeFromQueue}
        />
      </main>
    </div>
  );
}
