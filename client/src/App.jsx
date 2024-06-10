// client/src/App.js
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';

function App() {
  return (
    <div className="App">
      <h1>Money Tracker</h1>
      <AddTransaction />
      <TransactionList />
    </div>
  );
}

export default App;
