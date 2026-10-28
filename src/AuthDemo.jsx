import { useAuth } from "./context/AuthContext";

function AuthDemo() {
  const { user, token, login, logout } = useAuth();

  const handleLogin = () => {
    login(
      { name: "Nada" },
      "demo-token-123"
    );
  };

  return (
    <div>
      <h2>AuthContext Demo</h2>

      {user ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <p>You are not logged in.</p>
      )}

      <p>Token: {token || "No token"}</p>

      <button onClick={handleLogin}>
        Login
      </button>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default AuthDemo;