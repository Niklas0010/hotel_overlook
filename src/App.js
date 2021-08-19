import { BrowserRouter as Router } from 'react-router-dom';
import { Navigation } from './components/navigation/Navigation';
import { AppContextProvider } from './context/ContextProvider';
import { Routes } from './routes/Routes';

function App() {
  return (
   <AppContextProvider>
     <Router basename="/frontpagenpm install react-responsive --save">
        <Navigation/>
        <Routes/>
     </Router>
   </AppContextProvider>
  );
}

export default App;
