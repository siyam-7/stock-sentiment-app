# 📈 Stock Sentiment Analysis App

A full-stack application that helps users analyze real-time stock news sentiment using FinBERT and get automated Buy/Sell/Hold recommendations. Users can create accounts, maintain a wishlist of stocks, and receive updated suggestions.

## 🚀 Features

- 🔐 User Authentication (JWT-based)
- 📊 Sentiment Analysis using FinBERT
- 📰 News Fetching via NewsAPI
- 💡 Stock Suggestions: Strong Buy / Buy / Hold / Sell / Strong Sell
- ❤️ Wishlist Management (Add/Delete stocks)
- 🧠 Smart aggregation from multiple articles
- 🌐 Built with React.js, FastAPI/Flask (Python), SQLite

---

## 🧰 Tech Stack

### Frontend
- [React.js](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Vite](https://vitejs.dev/) (React scaffolding)
- TailwindCSS (for styling)

### Backend
- Python 3
- [Transformers (FinBERT)](https://huggingface.co/ProsusAI/finbert)
- [NewsAPI](https://newsapi.org/)
- SQLite (for data storage)
- JWT (for authentication)
- FastAPI or Flask (depending on what your friend used)

---

## 🧑‍💻 Getting Started

### 🔹 Backend Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/stock-sentiment-app.git
   cd backend
