const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Basic health check
app.get("/health", (req, res) => {
    res.send("OK");
});

// Placeholder download route
app.get("/api/download", (req, res) => {
    const url = req.query.url;
    if (!url) {
        return res.status(400).json({ error: "URL required" });
    }
    // TODO: Add actual download logic
    res.json({
        message: "This will download: " + url
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

