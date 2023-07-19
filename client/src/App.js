import { useEffect, useState } from 'react';
import Navbar from './component/navbar/Navbar';
function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <video  width="100%"  controls>
        <source src={'https://firebasestorage.googleapis.com/v0/b/shardings-b.appspot.com/o/videos%2Fintro-video.mp4?alt=media&token=f6348274-ba88-4aaf-b3a4-1f2023e42699'} type="video/webm" />
        Sorry, your browser doesn't support videos.
      </video> */}
    </div>
  );
}

export default App;
