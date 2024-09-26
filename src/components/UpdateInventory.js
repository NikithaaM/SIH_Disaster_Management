import React, { useState, useEffect } from 'react';

function UpdateInventory() {
  const [products, setProducts] = useState([]); // Store multiple products
  const [productImages, setProductImages] = useState([]); // For handling multiple file uploads

  // Fetch accepted products from localStorage when the component mounts
  useEffect(() => {
    const storedProducts = localStorage.getItem('acceptedProducts');
    if (storedProducts) {
      const acceptedProducts = JSON.parse(storedProducts);
      setProducts(acceptedProducts);
      setProductImages(new Array(acceptedProducts.length).fill(null)); // Initialize image array
    }
  }, []);

  // Handle input change for the product fields
  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedProducts = [...products];
    updatedProducts[index][name] = value;
    setProducts(updatedProducts);
  };

  // Handle file upload change for a specific product
  const handleFileChange = (index, e) => {
    const file = e.target.files[0];
    const updatedImages = [...productImages];
    updatedImages[index] = file;
    setProductImages(updatedImages);
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data to send to the backend
    const formData = new FormData();
    
    // Stringify the products array and append it
    formData.append('products', JSON.stringify(products));

    productImages.forEach((image) => {
      if (image) {
        formData.append('productImage', image); // Append images using the same key
      }
    });

    try {
      // Send POST request to the backend
      const response = await fetch('http://localhost:4000/api/products', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        // Successfully added the products
        alert(result.message); // Optional: show a success message
        // Reset form fields
        setProducts([]);
        setProductImages([]);
      } else {
        // Handle error response
        alert(result.message);
      }
    } catch (error) {
      console.error('Error adding products:', error);
      alert('Failed to add products. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Update Inventory</h2>
      <p>Here you can update the inventory with the accepted donation's product details.</p>

      {/* Form to add new products */}
      <form className="mt-4" onSubmit={handleFormSubmit}>
        {products.map((product, index) => (
          <div key={index} className="mb-3">
            <h6>Product {index + 1}</h6>
            <div className="form-group">
              <label htmlFor={`productName-${index}`}>Product Name</label>
              <input
                type="text"
                className="form-control"
                id={`productName-${index}`}
                name="productName"
                value={product.productName}
                onChange={(e) => handleInputChange(index, e)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor={`productQuantity-${index}`}>Quantity</label>
              <input
                type="number"
                className="form-control"
                id={`productQuantity-${index}`}
                name="productQuantity"
                value={product.productQuantity}
                onChange={(e) => handleInputChange(index, e)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor={`productImage-${index}`}>Upload Product Image</label>
              <input
                type="file"
                className="form-control"
                id={`productImage-${index}`}
                name="productImage"
                accept="image/*"
                onChange={(e) => handleFileChange(index, e)}
              />
            </div>
          </div>
        ))}

        <button type="submit" className="btn btn-primary">Add Products</button>
      </form>
    </div>
  );
}

export default UpdateInventory;
