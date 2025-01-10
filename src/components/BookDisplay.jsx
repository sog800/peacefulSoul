import React, { useEffect, useState } from "react";
import Card from "./Card.jsx";
import { FiSearch } from "react-icons/fi";

export default function BookDisplay() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching data from an API or external source
    const fetchBooks = async () => {
      try {
        const response = await fetch("books.json"); // Replace with your actual API URL
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        setBooks(data); // Set the fetched books to state
      } catch (err) {
        setError(err.message); // Set error message if fetch fails
      } finally {
        setLoading(false); // Set loading to false after the fetch is complete
      }
    };

    fetchBooks(); // Fetch books when the component mounts
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading message while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if something goes wrong
  }

  return (
    <section className="flex flex-col lg:flex-row justify-center w-full">
      {/** Left Aside */}
      <aside className="hidden lg:block bg-gray-100 border border-gray-300 p-4 rounded shadow-md w-1/5">
        <h3 className="text-lg font-bold mb-2">About Books</h3>
        <p className="text-sm text-gray-700">
          Discover amazing books from various genres. Learn, explore, and get
          inspired.
        </p>
      </aside>

      {/** Displaying the books */}
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-6">
          {/**search bar */}

          <div className="flex justify-center items-center p-4">
            <div className="relative w-96">
              <input
                type="text"
                placeholder="Search books"
                className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FiSearch
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                size={20}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book, index) => (
              <Card key={index} book={book} />
            ))}
          </div>
        </div>
      </div>

      {/** Right Aside */}
      <aside className="hidden lg:block bg-gray-100 border border-gray-300 p-4 rounded shadow-md w-1/5">
        <h3 className="text-lg font-bold mb-2">Tips for Readers</h3>
        <p className="text-sm text-gray-700">
          Engage with books that broaden your perspective and nourish your mind.
        </p>
      </aside>
    </section>
  );
}
