const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to Calci. API's hosted at /api");
});

app.post("/api/add", (req, res) => {
    try {
        const { a, b } = req.body;
        const num1 = parseFloat(a);
        const num2 = parseFloat(b);
        if (isNaN(num1) || isNaN(num2)) {
            return res
                .status(400)
                .send("Invalid input parameters. Please provide numbers.");
        }
        const ans = num1 + num2;
        console.log(`${num1} + ${num2} = ${ans}`);
        res.status(200).send(ans.toString());
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
