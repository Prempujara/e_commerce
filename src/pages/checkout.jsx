import React from 'react';
import './checkout.css';

const Checkout = () => {
  return (
    <main className="checkout">
      <h1>Checkout</h1>
      <form className="checkout-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Address" required />
        <button type="submit">Place Order</button>
      </form>
    </main>
  );
};

export default Checkout;