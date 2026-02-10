import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Students from './Students';
import StudentEdit from './StudentEdit';
import Studentadd from './Studentadd';
import StudentView from './Studentview';
import SearchApi from './SearchApi';
import Search from './Search';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Students />} />

          <Route path="/studentview/:id" element={<StudentView />} />

          <Route path="/studentadd" element={<Studentadd />} />

          <Route path="/studentedit/:id" element={<StudentEdit />} />

          <Route path="/searchapi" element={<SearchApi />} />

          <Route path="/search" element={<Search />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
