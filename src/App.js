
import './App.css';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import { Home } from './Pages/Home';
import { Students } from './Pages/Students';
import { Contact } from './Pages/Contact';
import { StudentContextProvider } from './StudentContext';

function App() {
  return (
    <StudentContextProvider>
    <BrowserRouter>
    <Routes>
     <Route path={'/'} element={<Home/>} />
      <Route path={'/Pages/Students'} element={<Students/>} />
      <Route path={'/Pages/Contact'} element={<Contact/>} />
    </Routes>
    </BrowserRouter>
    </StudentContextProvider>
  );
}

export default App;