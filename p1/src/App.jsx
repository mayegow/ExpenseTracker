import {GlobalProvider} from "./contexts/GlobalState"
import Header from "./components/Header"
import TransactionForm from './components/transactions/TransactionForm'
import TransactionList from './components/transactions/TransactionList'
import Balance from './components/Balance'
import IncomeExpenses from "./components/IncomeExpenses"
import ExpensesChart from "./components/ExpensesChart"

function App(){
  return(
    <GlobalProvider>
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto w-3/5">
          <div className="bg-zinc-800 p-10 rounded-lg flex justify-between gap-x-5">
            <div >
              <Header/>
              <IncomeExpenses/>
              <Balance/>
              <TransactionForm/>
            </div>
            <div className="flex flex-col flex-1s">
              <ExpensesChart/>
              <TransactionList/>
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App