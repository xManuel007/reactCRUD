import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import CreateView from './views/create_item';
import ReadView from './views/read_item';
import UpdateView from './views/update_item';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ReadView/>}></Route>
        <Route path='/create' element={<CreateView/>}></Route>
        <Route path='/update/:id' element={<UpdateView/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
