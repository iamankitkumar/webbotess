const express = require("express");
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.use(cors({
    origin: '*', // Allow only requests from this origin
    methods: ['GET', 'POST'],      // Allow only GET and POST methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allow specific headers
  }));
  

app.get("/Course-card", (req, res) => {
  const response = {
    title: "Course Title",
    image:
      "https://imgs.search.brave.com/cU4tCweiWzs3p52Fl1WOKTFhcv7gKA2t4urxuamaBws/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzAwLzgyLzMw/LzM2MF9GXzUwMDgy/MzA1Nl9QamdzY1ZX/Qk05d3hyNzdZYlR0/ZWdlS0ptYWlQb0Va/Zy5qcGc",
    description: "This is a brief description of the course.",
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
