import React from 'react';
import logo from './logo.svg';
import './App.css';

import ProjectComp from './Components/ProjectComp/projectComp'
import graphhopper from'./Images/GraphHopper.PNG' 

function App() {

  
  return (
    <div className="App">
      <header>
        Lucas Seeger
        <nav>
          <div>Contact</div>
          <div>About</div>
          <div>Online Resume</div>
        </nav>
        {/*Facebook*/}
        <img/>
        {/*LinkedIn*/}
        <img/>
        {/*GitHub
        https://github.com/Zapfly*/}
        <img/>
      </header>
      <main>
        Portfolio
        <ProjectComp 
          image={graphhopper}
          projectName={"Graph Hopper"}
          demoLink={"https://graphhopper.azurewebsites.net/"}
          codeLink={"https://github.com/J-Currier/jupiter"}
          about={"This was a project that we made"}
        />
      </main>
      <footer>

      </footer>
      
    </div>
  );
}

export default App;
