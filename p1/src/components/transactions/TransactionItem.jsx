import { useGlobalState } from "../../contexts/GlobalState"

export default function TransactionItem({transaction}) {
    const {deleteTransaction} = useGlobalState()
  return (
    <li className="bg-zinc-600 text-white py-1 px-3 rounded-lg mb-2 w-full flex justify-between item-center">
        <p className="text-sm">
            {transaction.description}
        </p>
        <span className="text-sm">${transaction.amount}</span>
        <button onClick={()=>{
            deleteTransaction(transaction.id)
        }}
        className="bg-red-900 px-3 py-2 rounded-md ml-2">
            x
        </button>
    </li>
  )
}
