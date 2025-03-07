import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = "http://localhost:5173/auth/callback";

app.post("/api/auth/discord", async (req, res) => {
    const { code } = req.body;

    if (!code) {
        return res.status(400).json({ error: "No code provided" });
    }

    try {
        const params = new URLSearchParams({
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            grant_type: "authorization_code",
            code: code,
            redirect_uri: REDIRECT_URI,
            scope: "identify",
        });

        const tokenResponse = await axios.post(
            "https://discord.com/api/oauth2/token",
            params,
            { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        );

        res.json(tokenResponse.data);
    } catch (error) {
        console.error("OAuth Error:", error.response?.data || error.message);
    }
});


app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`);
});
