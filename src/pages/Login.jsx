import React from "react";

const CLIENT_ID = "1346561806415429634";
const REDIRECT_URI = "http://localhost:5173/auth/callback";
const DISCORD_OAUTH_URL = `https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=identify%20guilds`;


const Login = () => {
    const handleLogin = () => {
        localStorage.clear()
        window.location.href = DISCORD_OAUTH_URL;
    };

    // Deze pagina moet nog styling krijgen of we kunnen direct doorverbinden naar de Auth aangezien een extra pagina misschien wel nutteloos is
    return (
        <div>
            <h2>Inloggen met Discord</h2>
            <button onClick={handleLogin}>Inloggen</button>
        </div>
    );
};

export default Login;
