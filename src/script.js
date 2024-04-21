const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri = 'mongodb+srv://mahadmasood85:k2rtPf5AwKWlOsjq@cluster0.ltszv42.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Update with your MongoDB connection URI

// Database Name
const dbName = 'bookLibrary'; // Update with your database name

// Collection Name
const collectionName = 'bookData'; // Update with your collection name

// Define the array of book objects
const books = [
    {
      id:1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      year: 1960,
      image: "./img/TKAM.jpg",
      stats: {
        rating: 5.0,
        reviewCount: 6,
      },
      price: 2500,
      sale: 50,
    },
    {
      id:2,
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      year: 1949,
      image: "./img/1984.png",
      stats: {
        rating: 5.0,
        reviewCount: 6,
      },
      price: 2500,
      sale: 60,
    },
    {
      id:3,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      year: 1813,
      image: "./img/pride-and-prejudice.webp",
      stats: {
        rating: 5.0,
        reviewCount: 6,
      },
      price: 2500,
      sale: 60,
    },
    {
      id:4,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Fiction",
      year: 1925,
      image: "./img/Gatsby.webp",
      stats: {
        rating: 5.0,
        reviewCount: 6,
      },
      price: 2500,
      sale: 60,
    },
    {
      id:5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Fiction",
      year: 1951,
      image: "./img/catcher.jpg",
      stats: {
        rating: 5.0,
        reviewCount: 6,
      },
      price: 2500,
      sale: 60,
    },
    {
      id:6,
      title: "The Hunger Games",
      author: "Suzanne Collins",
      genre: "Dystopian",
      year: 2008,
      image: "./img/hunger.jpg",
      stats: {
        rating: 4.3,
        reviewCount: 10,
      },
      price: 2200,
      sale: 50,
    },
    {
      id:7,
      title: "Divergent",
      author: "Veronica Roth",
      genre: "Dystopian",
      year: 2011,
      image: "./img/Divergent.jpg",
      stats: {
        rating: 4.1,
        reviewCount: 8,
      },
      price: 2300,
      sale: 55,
    },
    {
      id:8,
      title: "The Notebook",
      author: "Nicholas Sparks",
      genre: "Romance",
      year: 1996,
      image: "./img/notebook.jpg",
      stats: {
        rating: 4.5,
        reviewCount: 7,
      },
      price: 2400,
      sale: 58,
    },
    {
      id:9,
      title: "Me Before You",
      author: "Jojo Moyes",
      genre: "Romance",
      year: 2012,
      image: "./img/me.jpg",
      stats: {
        rating: 4.4,
        reviewCount: 9,
      },
      price: 2600,
      sale: 62,
    },
  ];
  
  // Array of book objects
;

// Connect to MongoDB
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    // Access the database
    const db = client.db(dbName);
    
    // Access the collection
    const collection = db.collection(collectionName);
    
    // Insert the array of book objects into the collection
    return collection.insertMany(books);
  })
  .then(result => {
    console.log(`${result.insertedCount} documents inserted successfully.`);
  })
  .catch(error => {
    console.error('Error inserting documents:', error);
  });
