import { AuthProvider } from "./context/AuthContext";
import { Navigation } from "./routes/Navigation"

function App() {
    return (
        <AuthProvider>
            <Navigation />
        </AuthProvider>
    )
}

export default App;
