const express = require("express");
const app = express();
app.use(express.json());

app.post("/ask", async (req, res) => {
    const userText = req.body.text;

    res.json({
        received: userText,
        reply: "This is a sample JSON response"
    });
});

app.listen(3000, () => console.log("Backend running on port 3000"));
