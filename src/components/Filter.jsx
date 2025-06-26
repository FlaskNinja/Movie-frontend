import React, { useState } from 'react';
import { FaFilm, FaCalendarAlt, FaSync } from 'react-icons/fa';

const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Sci-Fi'];
const years = Array.from({ length: 20 }, (_, i) => `${2025 - i}`);

const Filter = ({ onFilter }) => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const applyFilters = () => {
    onFilter({ genre: selectedGenre, year: selectedYear });
  };

  const clearFilters = () => {
    setSelectedGenre('');
    setSelectedYear('');
    onFilter({});
  };

  return (
    <div className="bg-gray-900 sticky top-16 z-10 px-4 py-4 shadow-md border-b border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 md:flex-row justify-between items-center">
        {/* Genre Filter */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm text-gray-300 flex items-center gap-1">
            <FaFilm /> Genre:
          </span>
          {genres.map((genre) => (
            <button
              key={genre}
              className={`px-3 py-1 rounded-full text-sm font-medium border transition
                ${selectedGenre === genre.toLowerCase()
                  ? 'bg-red-600 text-white border-red-600'
                  : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-red-700 hover:text-white'}
              `}
              onClick={() => {
                setSelectedGenre(genre.toLowerCase());
                applyFilters();
              }}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Year Filter */}
        <div className="flex flex-wrap gap-2 items-center mt-2 md:mt-0">
          <span className="text-sm text-gray-300 flex items-center gap-1">
            <FaCalendarAlt /> Year:
          </span>
          {years.slice(0, 6).map((year) => (
            <button
              key={year}
              className={`px-3 py-1 rounded-full text-sm font-medium border transition
                ${selectedYear === year
                  ? 'bg-red-600 text-white border-red-600'
                  : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-red-700 hover:text-white'}
              `}
              onClick={() => {
                setSelectedYear(year);
                applyFilters();
              }}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Reset */}
        <button
          onClick={clearFilters}
          className="flex items-center gap-2 text-sm bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-red-600 mt-4 md:mt-0"
        >
          <FaSync /> Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
