import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Replace with your backend API URL

// API for user login
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

// API for signup
export const signupUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, { email, password });
    return response.data;
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};

// API to get the wishlist
export const getWishlist = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/wishlist`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    throw error;
  }
};

// API to add stock to wishlist
export const addStockToWishlist = async (stock, token) => {
  try {
    const response = await axios.post(
      `${API_URL}/wishlist/add`,
      { stock },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding stock:", error);
    throw error;
  }
};
// API to get stock suggestions
export const getStockSuggestions = async (token) => {
    try {
      const response = await axios.get(`${API_URL}/suggestions`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching stock suggestions:", error);
      throw error;
    }
  };

// API to remove stock from wishlist
export const removeStockFromWishlist = async (stockId, token) => {
  try {
    const response = await axios.delete(`${API_URL}/wishlist/remove/${stockId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error("Error removing stock:", error);
    throw error;
  }
};
