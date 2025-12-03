const MacControls = () => {
  return (
    <>
      {/* Close (X) */}
      <div
        className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition duration-150 cursor-pointer shadow-md"
        title="Close"
      />
      {/* Minimize (-) */}
      <div
        className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition duration-150 cursor-pointer shadow-md"
        title="Minimize"
      />
      {/* Maximize/Restore (Square) */}
      <div
        className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition duration-150 cursor-pointer shadow-md"
        title="Maximize"
      />
    </>
  );
};

export default MacControls;
