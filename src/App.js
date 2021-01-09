import imageInSrc from './imageInSrc.jpg';
import './style.css';
import './App.css';
import felicitation from "./myVideo.mp4";


function App() {
  return (
    <div className="App">
       <div className ="first" style={{ border: "solid 1px black", maxWidth: "100vw" }}>
       <h1 className="title red">Wassim Khleyfi</h1>
       <br />
       <h2 className="infoimg1">This is an image in src:</h2>
       <img className ="shadowAndBorder" src={imageInSrc} alt="imageInSrc" />  
       <br />
       <h2 className="infoimg2">This is an image in public:</h2>
       <img className ="shadowAndBorder" width={700} height={572} src="/images/imageInPublic.jpg" alt="imageInPublic" />
 
      </div>
      <br />
     <video className ="shadowAndBorder"style= {{padding : "50px"}} src={felicitation} width={320} height={240} controls="controls" autoplay="true">
     </video> 
  
  </div>
  );
}

export default App;
       
     
 