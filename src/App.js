import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import { Home } from "./Components/Home";
import NewUser from "./NewUser/NewUser.js";
import ViewUserDetails from "./Components/ViewUserDetails";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav className="container">
            <Link to="/user">User</Link>

            <Link to="/new-user">New User</Link>
          </nav>
          <Routes>
            <Route path="/new-user" element={<NewUser />} />
            <Route path="/user/:id" element={<ViewUserDetails />} />

            <Route path="/user" element={<Home />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
