import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

const QueueForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();
    if (!name || !service) return;
    onAdd({ name, service });
    setName("");
    setService("");
  };
  return (
    <>
      <form
        onSubmit={handleSubmission}
        className="bg-gray-800 w-3/12 h-1/2 border-2 border-gray-600 p-8 rounded-xl"
      >
        <h2 className="my-4 font-semi text-blue-500 font-bold text-3xl">Add to queue</h2>
        <div>
          <input
            className="bg-gray-700 h-10 px-2 border-gray-500 border-2 w-full m-auto"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Customer name"
          />
          <select
            className="bg-gray-700 px-2 mx-auto my-4 h-10 border-2 w-full border-gray-500"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">Select service</option>
            <option value="consultation">Consultation</option>
            <option value="payment">Payment</option>
            <option value="support">Support</option>
          </select>
          <button
            type="submit"
            className="bg-blue-600 text-white w-full flex justify-center">
            <FaUserPlus />Add customer
          </button>
        </div>
      </form>
    </>
  );
};

export default QueueForm;
