import React from "react";

export default function GalleryNav(props) {
  const { onChange, onFilter } = props;
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="flex flex-wrap justify-between items-center gap-4">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px]">
          <input
            type="text"
            id="search"
            placeholder="Search images..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => onChange(e.target.value)}
          />
          <i className="fas fa-search absolute right-3 top-3 text-gray-400"></i>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          <select
            id="category-filter"
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => onFilter(e.target.value)}>
            <option value="all">All Categories</option>
            <option value="nature">Nature</option>
            <option value="animals">Animals</option>
            <option value="architecture">Architecture</option>
            <option value="people">People</option>
          </select>
        </div>
      </div>
    </div>
  );
}
