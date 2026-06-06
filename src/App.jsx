import Navbar from './components/Navbar';
import Home from './pages/Home';
import Apps from './pages/Apps';
import Blog from './pages/Blog';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
        <Home />
        <Apps />
        <Blog />
      </main>
    </div>
  );
}

export default App;
