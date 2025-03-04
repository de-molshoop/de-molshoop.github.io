import React from "react";

const CLIENT_ID = "1346561806415429634";
const REDIRECT_URI = "http://localhost:5173/auth/callback";
const DISCORD_OAUTH_URL = `https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=identify email`;

const Login = () => {
    const handleLogin = () => {
        window.location.href = DISCORD_OAUTH_URL;
    };

    return (
        <div>
            <h2>Login with Discord</h2>
            <button onClick={handleLogin}>Login with Discord</button>
        </div>
    );
};

export default Login;
