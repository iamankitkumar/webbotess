const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    origin: "*", // Allow only requests from this origin
    methods: ["GET", "POST"], // Allow only GET and POST methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
  })
);

app.get('/Course-card', (req, res) => {
  res.sendFile(path.join(__dirname,  'course.json'));
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
