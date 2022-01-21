import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decNumber, incNumber } from "./action/index";
import "./App.css";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container text-center my-5">
        <h2 className="text-secondary fw-bold">Increment/Decrement counter</h2>
        <h4 className="text-secondary fw-bold mb-4">using React and Redux</h4>
        <div className="mt-4 container">
          <Button
            variant="outline-secondary"
            onClick={() => dispatch(incNumber(2))}
          >
            +
          </Button>
          <input
            type="text"
            value={myState}
            className="mx-2"
            style={{
              width: "37px",
              height: "37px",
              borderRadius: "5px",
              textAlign: "center",
            }}
          />
          <Button
            variant="outline-secondary"
            onClick={() => dispatch(decNumber())}
          >
            -
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
