import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DonateFood() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [stage, setStage] = useState('cart');

  // Fetch products from backend API
  useEffect(() => {
    axios.get('http://localhost:4000/api/products')
      .then((response) => {
        setProducts(response.data); // Set the fetched products in the state
        const initialQuantities = response.data.reduce((acc, product) => {
          acc[product._id] = 0; // Initialize all quantities to 0
          return acc;
        }, {});
        setQuantities(initialQuantities);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const increaseQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const decreaseQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] > 0 ? prevQuantities[id] - 1 : 0,
    }));
  };

  const saveToCart = (item) => {
    if (quantities[item._id] > 0) {
      const newItem = {
        ...item,
        quantity: quantities[item._id],
      };

      setCart((prevCart) => {
        const existingItemIndex = prevCart.findIndex((cartItem) => cartItem._id === item._id);
        if (existingItemIndex >= 0) {
          const updatedCart = [...prevCart];
          updatedCart[existingItemIndex].quantity += newItem.quantity;
          return updatedCart;
        }
        return [...prevCart, newItem];
      });

      // Reset the quantity for this item
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [item._id]: 0,
      }));
    }
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center' }}>Donate Food</h2>
      {stage === 'cart' && (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            {products.map((product) => (
              <div 
                key={product._id} 
                className="food-card"
                style={{
                  padding: '20px',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  width: '30%',
                  marginBottom: '20px'
                }}
              >
                <img 
                  src={`http://localhost:4000/uploads/${product.productImage}`} 
                  alt={product.productName} 
                  style={{ width: '80%', height: '150px', objectFit: 'cover', borderRadius: '8px' }} 
                />
                <h3>{product.productName}</h3>
                <p>Quantity:</p>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <button onClick={() => decreaseQuantity(product._id)}>-</button>
                  <p style={{ margin: '0 20px' }}>{quantities[product._id]}</p>
                  <button onClick={() => increaseQuantity(product._id)}>+</button>
                </div>
                <button 
                  style={{
                    marginTop: '10px',
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}
                  onClick={() => saveToCart(product)}
                >
                  Willing to donate
                </button>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '30px' }}>
            <h3>Donating It Details</h3>
            {cart.length === 0 ? (
              <p>No items in cart.</p>
            ) : (
              <div>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #ccc' }}>
                      <th style={{ padding: '10px' }}>Item</th>
                      <th style={{ padding: '10px' }}>Quantity</th>
                      <th style={{ padding: '10px' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((cartItem) => (
                      <tr key={cartItem._id} style={{ borderBottom: '1px solid #ccc' }}>
                        <td style={{ padding: '10px' }}>{cartItem.productName}</td>
                        <td style={{ padding: '10px' }}>{cartItem.quantity}</td>
                        <td style={{ padding: '10px' }}>
                          <button onClick={() => setCart(cart.filter(item => item._id !== cartItem._id))}>Remove</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div style={{ marginTop: '20px', textAlign: 'right' }}>
                  <strong>Total Items: {totalItems}</strong>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default DonateFood;
