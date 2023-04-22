import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {

  const token = localStorage.getItem('token');
  const isLoggedIn = token !== null;
  
    return <div>{isLoggedIn ? <Profile /> : <Login />}</div>
}
export default App;
