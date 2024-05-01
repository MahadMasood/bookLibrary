const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
const uri =
  "mongodb+srv://mahadmasood85:k2rtPf5AwKWlOsjq@cluster0.ltszv42.mongodb.net/bookLibrary?retryWrites=true&w=majority";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(uri, options)
  .then(() => {
    console.log("MongoDB connected");

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

    const Book = mongoose.model("Book", bookSchema, "bookData");

    const userSchema = new mongoose.Schema({
      username: String,
      Email: String,
      password: String,
    });

    const User = mongoose.model("Users", userSchema, "Users");

    app.get("/api/books", async (req, res) => {
      try {
        const books = await Book.find();
        res.json(books);
      } catch (err) {
        console.error("Error fetching books:", err);
        res.status(500).json({ error: "Internal server error" });
      }
    });

    app.get("/api/users", async (req, res) => {
      try {
        const users = await User.find();
        res.json(users);
      } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).json({ error: "Internal server error" });
      }
    });

    app.post("/api/register", async (req, res) => {
      const { username, Email, password } = req.body;

      try {
        // Create a new user document
        const newUser = new User({
          username,
          Email,
          password,
        });

        const savedUser = await newUser.save();
        console.log("User saved successfully:", savedUser);
        res.status(201).send("User registered successfully");
      } catch (err) {
        console.error("Error saving user:", err);
        res.status(500).send("Error saving user");
      }
    });

    app.post("/api/addBook", async (req, res) => {
      const { title, author, genre, year, image, stats, price, sale } =
        req.body;

      try {
        // Create a new book document
        const newBook = new Book({
          title,
          author,
          genre,
          year,
          image,
          stats,
          price,
          sale,
        });

        const savedBook = await newBook.save();
        console.log("Book saved successfully:", savedBook);
        res.status(201).send("Book added successfully");
      } catch (err) {
        console.error("Error adding book:", err);
        res.status(500).send("Error adding book");
      }
    });

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
