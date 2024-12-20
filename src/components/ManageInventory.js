import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ManageInventory() {
  const [products, setProducts] = useState([]);

  // Fetch products from the backend API when the component mounts
  useEffect(() => {
    axios.get('http://localhost:4000/api/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="container mt-5">
      <h2>Manage Inventory</h2>
      <p>Manage existing donation items and supplies here.</p>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #ccc' }}>
              <th style={{ padding: '10px' }}>Item</th>
              <th style={{ padding: '10px' }}>Quantity Available</th>
              <th style={{ padding: '10px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} style={{ borderBottom: '1px solid #ccc' }}>
                <td style={{ padding: '10px' }}>{product.productName}</td>
                <td style={{ padding: '10px' }}>{product.productQuantity}</td> {/* Corrected quantity display */}
                <td style={{ padding: '10px' }}>
                  {/* Add buttons for updating/deleting inventory items */}
                  <button>Edit</button>
                  <button style={{ marginLeft: '10px' }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ManageInventory;
