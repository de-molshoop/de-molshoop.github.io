import { useEffect, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

const AuthCallback = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const code = searchParams.get("code");
    const hasSentRequest = useRef(false);

    useEffect(() => {
        // Controleren of er al een eerdere request is gedaan naar de backend, dat gaf errors
        if (!code || hasSentRequest.current) return;
        hasSentRequest.current = true;

        axios.post("http://localhost:3001/api/auth/discord", { code }, {
            headers: { "Content-Type": "application/json" }
        })
        .then(response => {
            localStorage.setItem("access_token", response.data.access_token);
            navigate("/");
        })
        .catch(error => {
            console.error("Authentication error:", error);
            navigate("/");
        });
    }, [code, navigate]);

    return <h2>Aan het inloggen...</h2>;
};

export default AuthCallback;
