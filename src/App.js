import { BrowserRouter as Router } from 'react-router-dom';
import { Navigation } from './components/navigation/Navigation';
import { AuthProvider } from './components/login/AuthProvider';
import { Routes } from './routes/Routes';

function App() {
  return (
   <>
   <AuthProvider>
     <Router>
        <Navigation/>
        <Routes/>
     </Router>
     </AuthProvider>
     </>
  );
}

export default App;
