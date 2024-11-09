import "./App.css";
function App() {
  return (
    <div className="construction">
      <div className="construction_item">
        <div>
          <h1 className="coming">Coming Soon!</h1>
          <p className="coming__p">
            <a href="https://xorblin.com">Xorblin Digital Pvt. Ltd.</a> is
            developing this website to deliver an exceptional experience.
            We&apos;re working hard to bring you the best—stay tuned!
          </p>
        </div>
      </div>
      <p className="hostname">{window.location.hostname}</p>
    </div>
  );
}

export default App;
