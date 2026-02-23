import React, { useState } from "react";
import FishCard from "../components/FishCard";
import ServerPad from "../components/ServerPad";
import { fishProducts } from "../data/fishData";
import "./Services.css";

type OrderItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

function Services() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Get unique categories
  const categories = ["all", ...new Set(fishProducts.map((fish) => fish.type))];

  // Filter fish based on category
  const filteredFish =
    selectedCategory === "all"
      ? fishProducts
      : fishProducts.filter((fish) => fish.type === selectedCategory);

  const handleAddToOrder = (fish: any) => {
    const existingItem = orderItems.find((item) => item.name === fish.name);

    if (existingItem) {
      // Increase quantity if item already exists
      setOrderItems(
        orderItems.map((item) =>
          item.name === fish.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Add new item
      const newItem: OrderItem = {
        id: Date.now().toString(),
        name: fish.name,
        price: parseFloat(fish.price.replace(/[$,]/g, "")),
        quantity: 1,
      };
      setOrderItems([...orderItems, newItem]);
    }
  };

  const handleRemoveItem = (id: string) => {
    const item = orderItems.find((item) => item.id === id);
    
    if (item && item.quantity > 1) {
      // Decrease quantity
      setOrderItems(
        orderItems.map((orderItem) =>
          orderItem.id === id
            ? { ...orderItem, quantity: orderItem.quantity - 1 }
            : orderItem
        )
      );
    } else {
      // Remove item completely
      setOrderItems(orderItems.filter((orderItem) => orderItem.id !== id));
    }
  };

  const handleCheckout = () => {
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
      setOrderItems([]);
    }, 3000);
  };

  return (
    <div className="services">
      {/* Header */}
      <section className="services-header">
        <div className="services-header-content">
          <div className="services-subheading-container">
            <div className="services-line"></div>
            <span className="services-subheading">The Collection</span>
          </div>
          <h1 className="services-heading">Our Products</h1>
          <p className="services-description">
            Premium smoked seafood from sustainable sources
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="services-filter">
        <div className="container">
          <div className="filter-pills">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-pill ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid + Server Pad */}
      <section className="services-content">
        <div className="container">
          <div className="services-layout">
            {/* Fish Grid */}
            <div className="fish-grid">
              {filteredFish.map((fish) => (
                <FishCard
                  key={fish.id}
                  name={fish.name}
                  type={fish.type}
                  description={fish.description}
                  image={fish.image}
                  price={fish.price}
                  sustainability={fish.sustainability}
                  available={fish.available}
                  onAddToOrder={() => handleAddToOrder(fish)}
                />
              ))}
            </div>

            {/* Server Pad */}
            <div className="server-pad-container">
              <ServerPad
                items={orderItems}
                onRemoveItem={handleRemoveItem}
                onCheckout={handleCheckout}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="confirmation-overlay">
          <div className="confirmation-modal">
            <div className="confirmation-icon">🔥</div>
            <h2>Order Fired!</h2>
            <p>Your order has been sent to our kitchen.</p>
            <p className="confirmation-subtext">
              We'll start preparing your premium seafood right away!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;