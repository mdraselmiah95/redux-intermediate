import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <>
      <div className="container text-center my-5">
        <h2 className="text-secondary fw-bold">Increment/Decrement counter</h2>
        <h4 className="text-secondary fw-bold">using React and Redux</h4>
        <Container className="my-3">
          <Button variant="outline-secondary">+</Button>
          <Button variant="outline-secondary">-</Button>
        </Container>
      </div>
    </>
  );
}

export default App;
