import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);

  return (
    <>
      <div className="container text-center my-5">
        <h2 className="text-secondary fw-bold">Increment/Decrement counter</h2>
        <h4 className="text-secondary fw-bold mb-4">using React and Redux</h4>
        <div className="mt-4 container">
          <Button variant="outline-secondary">+</Button>
          <input
            type="text"
            value={myState}
            className="mx-2"
            style={{ width: "33px", height: "33px", borderRadius: "5px" }}
          />
          <Button variant="outline-secondary">-</Button>
        </div>
      </div>
    </>
  );
}

export default App;
