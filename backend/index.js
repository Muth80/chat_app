const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
  
    try {
      const request = await axios.put(
        'https://api.chatengine.io/users/',
        { username: username, secret: username, first_name: username },
        { headers: { "private-key": "5fceb84c-1ade-4b9d-a98a-4d01b1cc65e1" } }
      );
      return res.status(request.status).json(request.data);
    } catch (error) {
      return res.status(error.response.status).json(error.response.data);
    }
  });

app.listen(3001);