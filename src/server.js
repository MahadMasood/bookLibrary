const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection URI
const uri =
  "mongodb+srv://mahadmasood85:k2rtPf5AwKWlOsjq@cluster0.ltszv42.mongodb.net/bookLibrary?retryWrites=true&w=majority";

// Define Mongoose connection options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Use CORS middleware with specific origin
app.use(cors({
  origin: "http://localhost:3000", // Replace this with your frontend URL
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(uri, options)
  .then(() => {
    console.log("MongoDB connected");

    // Define schema for Book model
    const bookSchema = new mongoose.Schema({
      title: String,
      author: String,
      genre: String,
      year: Number,
      image: String,
      stats: {
        rating: Number,
        reviewCount: Number,
      },
      price: Number,
      sale: Number,
    });

    // Define Book model
    const Book = mongoose.model("Book", bookSchema, "bookData");

    // Define schema for User model
    const userSchema = new mongoose.Schema({
      username: String,
      email: String,
      password: String
    });

    // Define User model
    const User = mongoose.model('User', userSchema,"Users");

    // Define route to fetch book data
    app.get("/api/books", async (req, res) => {
      try {
        // Fetch all books from database
        const books = await Book.find();
        res.json(books);
      } catch (err) {
        console.error("Error fetching books:", err);
        res.status(500).json({ error: "Internal server error" });
      }
    });

    // API endpoint to handle user registration
    app.post('/api/register', (req, res) => {
      const { username, email, password } = req.body;
      
      // Create a new user document
      const newUser = new User({
        username,
        email,
        password
      });

      // Save the user document to the database
      newUser.save((err, user) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error saving user');
        } else {
          res.status(201).send('User registered successfully');
        }
      });
    });

    // Define route handler for the root path
    app.get("/", (req, res) => {
      res.send("Server is running");
    });

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
