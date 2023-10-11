import {VictoryPie, VictoryLabel} from 'victory'
import { useGlobalState } from '../contexts/GlobalState'
export default function ExpensesChart() {

    const {transactions} = useGlobalState()

    const totalIncome = transactions.filter(trans => trans.amount > 0)
        .reduce((acc, trans)=>(acc += trans.amount),0)
    const totalExpenses = transactions.filter(trans => trans.amount < 0)
        .reduce((acc, trans)=>(acc += trans.amount),0) * -1

    const totalPercentageExpense = Math.round((totalExpenses / totalIncome) * 100)
    const totalPercentageIncome = 100 - totalPercentageExpense

  return (
    <VictoryPie
    colorScale={["#e74c13", "#2ecc71"]}
    data={[
        {x: "Expenses", y: totalPercentageExpense},
        {x: "Income", y: totalPercentageIncome}
    ]}
    animate={{duration:600}}
    labels={({datum})=> `${datum.y}%`}
    labelComponent={<VictoryLabel
        angle={45}
        style={{fill:"white"}}
    />}
    />
  )
}
