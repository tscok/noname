import { FC } from 'react'
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  ChartDataset,
  Colors,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, CategoryScale, Colors, LinearScale, Title, Tooltip)

type PieChartProps = {
  labels: string[]
  datasets: ChartDataset<'pie'>[]
}

export const PieChart: FC<PieChartProps> = ({ datasets, labels }) => (
  <Pie
    data={{ labels, datasets }}
    options={{
      responsive: true,
    }}
  />
)
