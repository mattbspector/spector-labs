import React, { useEffect } from 'react';
import '../css/main.css';
import '../css/base-styles.css';


function App() {


  const moveBeaker = () => {
    console.log('hi!');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
        moveBeaker();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
        <div className="Ta(c)" id="image-main">
            <div className="H(80%)">
                <img height="100%" src="beaker.gif" id="beakerLoader" />
            </div>
        </div>
    </div>
  );
}

export default App;
