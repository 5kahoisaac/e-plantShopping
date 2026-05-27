import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/CartSlice";
import plants from "../data/plants";
import Navbar from "../components/Navbar";
import "./ProductList.css";

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const categories = ["Aromatic", "Medicinal", "Low Maintenance"];

  const isInCart = (plantId) => {
    return cartItems.some((item) => item.id === plantId);
  };

  return (
    <div>
      <Navbar />
      <div className="product-list-container">
        <h1 className="page-title">Our Plants</h1>
        {categories.map((category) => (
          <div key={category} className="category-section">
            <h2 className="category-title">{category} Plants</h2>
            <div className="plants-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <div key={plant.id} className="plant-card">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-thumbnail"
                    />
                    <div className="plant-info">
                      <h3 className="plant-name">{plant.name}</h3>
                      <p className="plant-description">{plant.description}</p>
                      <p className="plant-price">${plant.price.toFixed(2)}</p>
                      <button
                        className="add-to-cart-btn"
                        onClick={() => dispatch(addItem(plant))}
                        disabled={isInCart(plant.id)}
                      >
                        {isInCart(plant.id) ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
