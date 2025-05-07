import React, { useEffect, useState } from "react";
import { getStockSuggestions } from "../api";

const StockSuggestion = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const data = await getStockSuggestions();
        setSuggestions(data);
      } catch (err) {
        console.error("Failed to fetch suggestions", err);
      }
    };

    fetchSuggestions();
  }, []);

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        🔍 Recommended Stock Suggestions
      </h2>
      {suggestions.length === 0 ? (
        <p className="text-center text-gray-500">No suggestions available.</p>
      ) : (
        <ul className="space-y-4">
          {suggestions.map((stock, index) => (
            <li
              key={index}
              className="p-4 bg-gray-50 border border-gray-200 rounded-xl hover:shadow-md transition"
            >
              <h3 className="text-lg font-bold text-blue-600">{stock.ticker}</h3>
              <p className="text-gray-700">Suggestion: {stock.suggestion}</p>
              <div className="mt-2 space-y-1">
                {stock.validationPoints?.map((point, idx) => (
                  <p
                    key={idx}
                    className="text-sm text-gray-600"
                    dangerouslySetInnerHTML={{ __html: point }}
                  />
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StockSuggestion;
