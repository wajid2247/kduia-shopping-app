import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';

function App() {
  return (
    <AppProvider>
      <div className="App">

        <h1>Shopping App</h1>

        <div className='row'>
          <div className='col'>
            <CartValue />
          </div>
          <div className='col'>
            <Location />
          </div>
        </div>

        <h3 className='mt-3'>Shopping Cart</h3>

        <div className='row'>
          <div>
            <ExpenseList />
          </div>
        </div>

        <h3 className='mt-3'>Add Item</h3>

        <div className='row'>
          <div>
            <ItemSelected />
          </div>
        </div>

      </div>
    </AppProvider>
  );
}

export default App;
