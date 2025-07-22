const Fetures = () => {
  return (
    <div className="w-full pt-10">
      <div className="container mx-auto p-5">
        <div className="flex overflow-x-auto gap-4 mx-auto">
          <div className="w-[300px] min-h-[150px] shrink-0 bg-red-200 p-4 text-white rounded">
          <h2 className="text-red-800 font-bold text-lg">Promo Spesial</h2>
          <p className="text-gray-900 text-sm">
            Diskon hingga 50% untuk semua top up game!
          </p>
          <button className="mt-3 bg-white text-red-600 px-3 py-1 rounded hover:bg-red-100">
            Top Up Sekarang
          </button>
          </div>
          <div className="w-[300px] min-h-[150px] shrink-0 bg-green-200 p-4 text-white rounded">
            s
          </div>
          <div className="w-[300px] min-h-[150px] shrink-0 bg-violet-200 p-4 text-white rounded">
            s
          </div>
          <div className="w-[300px] min-h-[150px] shrink-0 bg-orange-200 p-4 text-white rounded">
            s
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fetures;
