
import { useGlobalState } from "../../contexts/GlobalState";
import TransactionItem from "./TransactionItem";

function TransactionList() {
    const {transactions} = useGlobalState()
  return (
    
    <>
    <h3 className="block text-slate-300 text-xl font-bold">History</h3>
    <ul>

        {
            transactions.map(x => (
                <TransactionItem transaction={x} key={x.id}/>
                ))
        }
    </ul>
    </>
  )
}

export default TransactionList
