import { HomePage } from "./components/HomePage/HomePage"
import { BrowserRouter as  Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar"
import { LoginPage } from "./components/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
       <Navbar />
       <HomePage />
       {/* <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>  
       </Switch> */}
    </div>
  )
}

export default App
