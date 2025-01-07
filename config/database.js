const mongoose = require("mongoose");
exports.connect = () => {
  mongoose.connect("mongodb+srv://root:root@cluster0.05fis.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: 'admin', // Specifies the database for authentication
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("connected");
  });
};
