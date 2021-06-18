import logo from './logo.svg';
import './App.css';
import UploadImageToS3WithReactS3 from "./UploadImagesToS3WithReactS3"
import UploadImageToS3WithNativeSdk from './UploadImagesToS3WithNativeSDK';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UploadImageToS3WithReactS3 />

      </header>
    </div>
  );
}

export default App;
