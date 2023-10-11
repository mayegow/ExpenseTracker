
import { useGlobalState } from '../contexts/GlobalState'

export default function IncomeExpenses() {

    const {transactions} = useGlobalState()
    const amounts = transactions.map(x => x.amount)
    const incomes = amounts
        .filter(x => (x > 0))
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2)
    const expenses = amounts
        .filter(x => (x < 0))
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2)*-1

  return (
    <>
        <div className='flex justify-between my-2'>
            Income: 
            <span>${incomes}</span>
        </div>

        <div className='flex justify-between my-2'>
            Expenses: 
            <span>${expenses}</span>
        </div>
    </>
  )
}
