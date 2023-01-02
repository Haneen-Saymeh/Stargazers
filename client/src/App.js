import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import EventForm from './components/EventForm';
import Explore from './Views/Explore';
import LogReg from './components/LogReg';
import NasaApi from './components/NasaApi';

function App() {
  return (
    <div className="App">
     
      <Routes>

      <Route path={'/nasaapi'} element={<NasaApi/>} />
        <Route path={'/'} element={<LogReg />} />

        <Route path={'/create'} element={<EventForm/>} />
        <Route path={'/explore'} element={<Explore/>} />

        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
