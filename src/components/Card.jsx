import { FiDownload } from "react-icons/fi";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ book }) {
  return (
    <div className="p-4 border rounded shadow-md bg-white">
      <img
        src={book.image || "/default-cover.jpg"} // Fallback for missing image
        alt={book.title}
        className="w-full h-40 object-cover rounded mb-2"
      />
      <h4 className="text-lg font-bold">{book.title}</h4>
      <p className="text-sm text-gray-700">By {book.author}</p>
      <div className="flex justify-between items-center space-x-4">
        <button className="flex items-center p-2 text-green-600 hover:text-green-800 hover:bg-green-100 rounded">
          <FiDownload size={24} />
        </button>
        <button className="flex items-center p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded">
          <FiThumbsUp size={24} />
        </button>
      </div>
    </div>
  );
}
