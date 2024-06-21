import { useEffect } from 'react';
import io from 'socket.io-client';

const App = () => {
  useEffect(() => {
    const socket = io('http://localhost:3000'); // Replace 'http://your-server-url' with your actual server URL

    // Socket.IO event listeners and logic here
    socket.on('data', (data) => {
      // Show pop up notification with the received data
      console.log("data from backend:", data);
      alert(data);
    });

    return () => {
      socket.disconnect(); // Disconnect the socket when the component unmounts
    };
  }, []);

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
};

export default App;
