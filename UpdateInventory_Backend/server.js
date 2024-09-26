const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/InventoryDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Define Schema and Model for Product
const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productQuantity: { type: Number, required: true },
  productImage: { type: String, required: false }, // Image path
});

const Product = mongoose.model('Product', productSchema);

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory where files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage: storage });

// Route to add multiple products
app.post('/api/products', upload.array('productImage'), async (req, res) => {
  const products = JSON.parse(req.body.products); // Expecting products to be a JSON string
  const productImages = req.files; // This will hold the uploaded files

  try {
    const productPromises = products.map((product, index) => {
      const productImage = productImages[index] ? productImages[index].filename : null; // Get the corresponding file name
      const newProduct = new Product({
        productName: product.productName,
        productQuantity: product.productQuantity,
        productImage,
      });
      return newProduct.save(); // Save each product
    });

    await Promise.all(productPromises); // Wait for all products to be saved
    res.status(201).json({ success: true, message: 'Products added successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error adding products', error: error.message });
  }
});

// Route to get all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching products', error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
