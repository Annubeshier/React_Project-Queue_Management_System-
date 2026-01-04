const QueueDisplay = ({ queue, onUpdateStatus, onRemove }) => {
  return (
    <div className="border-2 border-gray-500 w-1/2 rounded-lg opacity-85">
      <h2 className="my-4 font-semi text-blue-500 font-bold text-3xl mx-4">
        Current Queue
      </h2>
      {queue.length === 0 ? (
        <p className="text-center">No customer data</p>
      ) : (
        <div>
          {queue.map((customer) => (
            <div
              className="bg-gray-900 mx-4 my-4 p-2 flex justify-between rounded-lg"
              key={customer.id}
            >
              <div>
                <h2 className="font-semibold text-white">{customer.name}</h2>
                <p>{customer.service}</p>
                <span className={customer.status === "waiting" ? "text-green-600" : "text-blue-500"}>{customer.status}</span>
              </div>
              <div>
                {customer.status === "waiting" && (
                  <button
                    onClick={() => onUpdateStatus(customer.id, "serving")}
                    className="bg-green-500 rounded-md text-white font-semibold"
                  >
                    Serve
                  </button>
                )}
                {customer.status === "serving" && (
                  <button
                    onClick={() => onUpdateStatus(customer.id, "completed")}
                    className="bg-blue-400 rounded-md text-white font-semibold"
                  >
                    Serve
                  </button>
                )}
                <button
                  onClick={() => onRemove(customer.id)}
                  className="bg-red-700 text-white font-semibold rounded-md mx-2"
                >
                  {" "}
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QueueDisplay;
