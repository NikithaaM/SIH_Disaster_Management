import React, { useState } from 'react';
import food from '../images/blanket.png';
import food1 from '../images/brush.jpg';
import food2 from '../images/paste.jpg';
import food3 from '../images/sanitary.png'; // New image import
import food4 from '../images/tent.jpg';
import food5 from '../images/water.jpg'; 

function DonateEssentialItems() {
  const initialQuantities = {
    1: 0,
    2: 0,
    3: 0,
    4: 0, // New item quantity
    5: 0, // New item quantity
    6: 0, // New item quantity
  };

  const [quantities, setQuantities] = useState(initialQuantities);
  const [cart, setCart] = useState([]);
  const [stage, setStage] = useState('cart'); // Track which stage the user is in ('cart', 'checkout', 'confirmation')

  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '' });
  const [paymentInfo, setPaymentInfo] = useState({ address: '', expiryDate: '' });

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
    if (quantities[item.id] > 0) {
      const newItem = {
        ...item,
        quantity: quantities[item.id],
      };

      setCart((prevCart) => {
        const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
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
        [item.id]: 0,
      }));
    }
  };

  const increaseCartItemQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseCartItemQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const handleCheckout = () => {
    setStage('checkout');
  };

  const handleConfirmation = () => {
    // Perform final validation and submission here
    setStage('confirmation');
  };

  const foodItems = [
    { id: 1, name: 'Blankets', image: food },
    { id: 2, name: 'Toothbrush', image: food1 },
    { id: 3, name: 'Toothpaste', image: food2 },
    { id: 4, name: 'Sanitary Napkins', image: food3 },    
    { id: 5, name: 'Tents', image: food4 },        
    { id: 6, name: 'Water Bottles', image: food5 },       
  ];

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center' }}>Donate Essentials</h2>
      <p style={{ textAlign: 'center' }}>"Even in the darkest times, a shared meal brings light and hope to those who suffer."</p>
      <br></br>
      {stage === 'cart' && (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            {foodItems.map((item) => (
              <div 
                key={item.id} 
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
                <img src={item.image} alt={item.name} style={{ width: '80%', height: '150px', objectFit: 'cover', borderRadius: '8px' }} />
                <h3>{item.name}</h3>
                <p>Quantity:</p>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <p style={{ margin: '0 20px' }}>{quantities[item.id]}</p>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
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
                  onClick={() => saveToCart(item)}
                >
                  Save to Cart
                </button>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '30px' }}>
            <h3>Cart Details</h3>
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
                    {cart.map(cartItem => (
                      <tr key={cartItem.id} style={{ borderBottom: '1px solid #ccc' }}>
                        <td style={{ padding: '10px' }}>{cartItem.name}</td>
                        <td style={{ padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <button onClick={() => decreaseCartItemQuantity(cartItem.id)}>-</button>
                          <p style={{ margin: '0 20px' }}>{cartItem.quantity}</p>
                          <button onClick={() => increaseCartItemQuantity(cartItem.id)}>+</button>
                        </td>
                        <td style={{ padding: '10px' }}>
                          <button 
                            style={{ 
                              padding: '5px 10px', 
                              backgroundColor: '#dc3545', 
                              color: '#fff', 
                              border: 'none', 
                              borderRadius: '5px', 
                              cursor: 'pointer' 
                            }}
                            onClick={() => setCart(cart.filter(item => item.id !== cartItem.id))}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div style={{ marginTop: '20px', textAlign: 'right' }}>
                  <strong>Total Items: {totalItems}</strong>
                </div>
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                  <button 
                    style={{ 
                      padding: '10px 20px', 
                      backgroundColor: '#28a745', 
                      color: '#fff', 
                      border: 'none', 
                      borderRadius: '5px', 
                      cursor: 'pointer' 
                    }}
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
{stage === 'checkout' && (
        <div style={{ marginTop: '30px' }}>
          <h3 style={{ textAlign: 'center' }}>Personal Details</h3>
          <form>
            <div style={{ marginBottom: '20px' }}>
              <label>Name:</label>
              <input 
                type="text" 
                value={contactInfo.name} 
                onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })} 
                style={{ width: '100%', padding: '10px', margin: '10px 0' }} 
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label>Email:</label>
              <input 
                type="email" 
                value={contactInfo.email} 
                onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })} 
                style={{ width: '100%', padding: '10px', margin: '10px 0' }} 
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label>Phone:</label>
              <input 
                type="tel" 
                value={contactInfo.phone} 
                onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })} 
                style={{ width: '100%', padding: '10px', margin: '10px 0' }} 
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label>Address:</label>
              <input 
                type="text" 
                value={paymentInfo.address} 
                onChange={(e) => setPaymentInfo({ ...paymentInfo, address: e.target.value })} 
                style={{ width: '100%', padding: '10px', margin: '10px 0' }} 
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label>Expiry Date:</label>
              <input 
                type="month" 
                value={paymentInfo.expiryDate} 
                onChange={(e) => setPaymentInfo({ ...paymentInfo, expiryDate: e.target.value })} 
                style={{ width: '100%', padding: '10px', margin: '10px 0' }} 
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <button 
                type="button" 
                onClick={handleConfirmation} 
                style={{ 
                  padding: '10px 20px', 
                  backgroundColor: '#007bff', 
                  color: '#fff', 
                  border: 'none', 
                  borderRadius: '5px', 
                  cursor: 'pointer' 
                }}
              >
                Donate Now
              </button>
            </div>
          </form>
        </div>
      )}

      {stage === 'confirmation' && (
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <h3>Thank you for your donation!</h3>
          <p>Your generous contribution will make a difference in someone's life.</p>
          <button 
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#28a745', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer' 
            }}
            onClick={() => {
              setStage('cart');
              setCart([]);
              setContactInfo({ name: '', email: '', phone: '' });
              setPaymentInfo({ address: '', expiryDate: '' });
              setQuantities(initialQuantities);
            }}
          >
            Donate More
          </button>
        </div>
      )}
    </div>
  );
}

export default DonateEssentialItems;