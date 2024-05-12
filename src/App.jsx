import './App.css'
import Navbar from './Navbar';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;

  return (
    <>
      <Navbar />
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
      </div>
    </>
  )
}

export default App
