# Paradise Nursery

Paradise Nursery is an online plant shop built with React, Redux Toolkit, and React Router. Users can browse houseplants organized by category, add items to a shopping cart, adjust quantities, and manage their cart before checkout.

## Features

- **Landing Page**: Welcoming page with company name and a "Get Started" button to begin shopping
- **Plant Categories**: Plants organized into three categories — Aromatic, Medicinal, and Low Maintenance
- **Product Listing**: Each category displays at least six unique houseplants with thumbnail, name, and price
- **Shopping Cart**: Add plants to cart, increase/decrease quantities, remove items, and view total cost
- **Navigation Bar**: Navbar with links to Home, Plants, and Cart pages with a dynamic cart icon showing total items

## Tech Stack

- **React** (Vite)
- **Redux Toolkit** (state management)
- **React Router** (client-side routing)
- **CSS** (styling)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   └── Navbar.css
├── data/
│   └── plants.js
├── features/
│   └── CartSlice.jsx
├── pages/
│   ├── AboutUs.jsx
│   ├── ProductList.jsx
│   ├── ProductList.css
│   ├── CartItem.jsx
│   └── CartItem.css
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Author

Built as a final project for the React course.
