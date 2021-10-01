import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./router/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from "./context/AuthProvider";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  );
}

export default App;
