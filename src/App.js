import logo from "./logo.svg";
import "./App.css";
import UserSignUpPage from "./pages/UserSignUpPage";
import * as apiCalls from "./api/apicalls";
import LoginPage from "./pages/LoginPage";

const actions = {
  postSignUp: apiCalls.signUp,
  login: apiCalls.login,
  login2: apiCalls.login2,
};

function App() {
  return (
    <div className="App">
      <UserSignUpPage actions={actions} />
      <LoginPage actions={actions} />
    </div>
  );
}

export default App;
