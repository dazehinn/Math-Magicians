import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import CalculatorContainer from './components/Calculator';
import Quote from './components/Quote';

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route index element={<Home />} />
        <Route path="calculator" element={<CalculatorContainer />} />
        <Route path="quote" element={<Quote />} />
        <Route path="*" element={<div>Sorry The requested page doesn`t exist</div>} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
