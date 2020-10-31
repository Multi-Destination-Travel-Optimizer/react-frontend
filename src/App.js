import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBar from "./NavBar"
import LandingForm from "./Landing/LandingForm"
import { Container } from 'react-bootstrap';
import Description from './Landing/Description'

function App() {
    return (
      <div>
        <NavBar/>
        <LandingForm/>
        <Container>
          <Description/>
        </Container>
      </div>
    );
}

export default App;
