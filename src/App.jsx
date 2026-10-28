import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Login() {
return <h1>Login Page</h1>;
}

function Dashboard() {
return <h1>Dashboard Page</h1>;
}

function Products() {
return <h1>Products Page</h1>;
}

function Orders() {
return <h1>Orders Page</h1>;
}

function Users() {
return <h1>Users Page</h1>;
}

function App() {
return (
<BrowserRouter>
<nav>
<Link to="/">Login</Link> {" | "}
<Link to="/dashboard">Dashboard</Link> {" | "}
<Link to="/products">Products</Link> {" | "}
<Link to="/orders">Orders</Link> {" | "}
<Link to="/users">Users</Link>
</nav>

  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/products" element={<Products />} />
    <Route path="/orders" element={<Orders />} />
    <Route path="/users" element={<Users />} />
  </Routes>
</BrowserRouter>

);
}

export default App;