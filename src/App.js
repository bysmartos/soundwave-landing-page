
import './App.css';
import Navbar from './components/Navbar';
import theme from './components/styles'
import { ThemeProvider } from '@mui/material';
import Footer from './components/Footer'
import HomePage from './components/HomePage';



function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Navbar/>
      <HomePage/>
      <Footer/>
     
      </ThemeProvider>
    </div>
  );
}

export default App;
