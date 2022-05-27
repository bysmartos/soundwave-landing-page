
import './App.css';
import Navbar from './components/Navbar';
import theme from './components/styles'
import { ThemeProvider } from '@mui/material';
import Footer from './components/Footer'
import HomePage from './components/HomePage';
import Discover from './components/Discover';
import Join from './components/Join';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Navbar/>
      <HomePage/>
      <Discover/>
      <Join/>
      </ThemeProvider>
    </div>
  );
}

export default App;
