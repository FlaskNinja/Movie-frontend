import React, { useState } from 'react';

const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Sci-Fi'];
const years = Array.from({ length: 20 }, (_, i) => `${2025 - i}`);

const Filter = ({ onFilter }) => {
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');

  const handleFilter = () => {
    onFilter({ genre, year });
  };

  const clearFilter = () => {
    setGenre('');
    setYear('');
    onFilter({});
  };

  return (
    <div className="bg-gray-800 rounded-xl p-4 mb-6 shadow-md flex flex-col md:flex-row items-center gap-4 md:justify-between text-sm">
      <div className="flex gap-4 flex-wrap w-full md:w-auto">
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="bg-gray-900 text-white border border-gray-700 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
        >
          <option value="">All Genres</option>
          {genres.map((g) => (
            <option key={g} value={g.toLowerCase()}>{g}</option>
          ))}
        </select>

        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="bg-gray-900 text-white border border-gray-700 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
        >
          <option value="">All Years</option>
          {years.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>

      <div className="flex gap-2 mt-2 md:mt-0">
        <button
          onClick={handleFilter}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition font-semibold"
        >
          Apply Filters
        </button>
        <button
          onClick={clearFilter}
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-full transition"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filter;
