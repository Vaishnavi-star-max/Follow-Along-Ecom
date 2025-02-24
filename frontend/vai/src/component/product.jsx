export default function ProductCard({ name, image, description, price }) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-lg hover:cursor-pointer flex flex-col justify-between duration-300 ease-in-out max-w-xs">
        <div className="w-full">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover rounded-lg mb-3 transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <h2 className="text-md font-semibold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-600 line-clamp-3 opacity-80">{description}</p>
        </div>
        <div className="w-full mt-3">
          <p className="text-md font-semibold text-gray-900">${price}</p>
          <button className="w-full text-white px-4 py-1 mt-2 rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300 ease-in-out">
            More Info
          </button>
        </div>
      </div>
    );
  }
  