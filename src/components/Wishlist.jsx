import React, { useState } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [stockInput, setStockInput] = useState("");

  const handleAddStock = () => {
    if (stockInput.trim() !== "") {
      setWishlist([...wishlist, stockInput.trim()]);
      setStockInput(""); // Clear the input after adding
    }
  };

  const handleDeleteStock = (stockToDelete) => {
    setWishlist(wishlist.filter(stock => stock !== stockToDelete));
  };

  return (
    <div className="wishlist-container">
      <h2>Your Stock Wishlist</h2>
      <div className="add-stock">
        <input
          type="text"
          placeholder="Enter stock symbol (e.g., AAPL)"
          value={stockInput}
          onChange={(e) => setStockInput(e.target.value)}
        />
        <button onClick={handleAddStock}>Add Stock</button>
      </div>
      <div className="wishlist">
        <h3>Saved Stocks</h3>
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <ul>
            {wishlist.map((stock, index) => (
              <li key={index}>
                {stock}
                <button onClick={() => handleDeleteStock(stock)} className="delete-btn">
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
