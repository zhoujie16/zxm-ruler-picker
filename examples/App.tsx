import Ruler from "../src/index";

function App() {
  return (
    <div className="App">
      <div>
        <Ruler minScale={0} maxScale={100} initScale={80} onChange={() => {}} />
      </div>
    </div>
  );
}

export default App;
