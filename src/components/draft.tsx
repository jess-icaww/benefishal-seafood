import React from "react";
import "./ServerPad.css";

type OrderItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  strikethrough?: boolean;
};

type ServerPadProps = {
  items: OrderItem[];
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
};

const ServerPad = ({ items, onRemoveItem, onCheckout }: ServerPadProps) => {
  const orderNumber = Math.floor(Math.random() * 90000) + 1000;

  const date = new Date().toLocaleString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = items.length > 0 ? 15.0 : 0;
  const total = subtotal + shipping;

  return (
    <>
    <div className="server-pad-wrapper">
      <div className="server-pad">
        <div className="pad-perforation"></div>

        <div className="pad-header">
          <h2 className="pad-title">BENEFISHAL SEAFOOD</h2>
          <div className="pad-order-number">Order Ticket #{orderNumber}</div>
        </div>

        <div className="pad-divider"></div>

        <div className="pad-meta">
          <div className="pad-meta-row">
            <span className="meta-label">Table:</span>
            <span className="meta-value">Your Order</span>
          </div>
          <div className="pad-meta-row">
            <span className="meta-label">Server:</span>
            <span className="meta-value">Benefishal Team</span>
          </div>
          <div className="pad-meta-row">
            <span className="meta-label">Date:</span>
            <span className="meta-value">{date}</span>
          </div>
        </div>

        <div className="pad-divider"></div>

        <div className="pad-items-header">
          <span className="header-qty">QTY</span>
          <span className="header-item">ITEM</span>
          <span className="header-price">PRICE</span>
        </div>

        <div className="pad-line"></div>

        <div className="pad-items">
          {items.length === 0 ? (
            <div className="pad-empty">No items ordered yet...</div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className={`pad-item ${item.strikethrough ? "strikethrough" : ""}`}
              >
                <span className="item-qty">{item.quantity}</span>
                <span className="item-name">{item.name}</span>
                <span className="item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  className="remove-item-btn"
                  onClick={() => onRemoveItem(item.id)}
                  title="Remove item"
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <>
            <div className="pad-divider"></div>

            <div className="pad-totals">
              <div className="total-row">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="total-row">
                <span>Shipping:</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
            </div>

            <div className="pad-divider-bold"></div>

            <div className="pad-grand-total">
              <span>TOTAL:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="fire-order-btn" onClick={onCheckout}>
              🔥 FIRE ORDER
            </button>
          </>
        )}

        <div className="pad-footer">
          <p>Thank you for choosing Benefishal!</p>
        </div>
      </div>
    </div>

    <div className="server-pad-wrapper">

      {/* Server Pad */}
      <div className="server-pad">
        <div className="pad-perforation"></div>
        <div className="pad-header">
            <div className="pad-title">Benefishal Seafood</div>
            <div className="pad-order-number">Order Ticket #{orderNumber}</div>
          </div>

      <div className="pad-divider"></div>

        { /* Pad Meta */ }
        <div className="pad-meta">
          <div className="pad-meta-row">
            <span className="meta-label">Server:</span>
            <span className="meta-value">Benefishal Team</span>
          </div>
          <div className="pad-meta-row">
            <span className="meta-label">Date:</span>
            <span className="meta-value">{date}</span>
          </div>
        </div>

        <div className="pad-divider"></div>

        <div className="pad-items-header">
          <span className="header-qty">Qty</span>
          <span className="header-item">Item</span>
          <span className="header-price">Price</span>
        </div>

        <div className="pad-line"></div>

        <div className="pad-items">
          
        </div>

        <div className="pad-footer">Thank you for choosing Benefishal!</div>

        </div>
    </div>
    </>
  );
};

export default ServerPad;