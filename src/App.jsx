import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import AuthCallback from "./pages/AuthCallback";
import QuizInputPage from "./pages/Quiz";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/auth/callback" element={<AuthCallback/>} />
                <Route path="/quiz" element={<QuizInputPage/>}></Route>
            </Routes>
        </Router>
    );
}

export default App;