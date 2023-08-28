import { FC } from 'react'
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartDataset,
  Colors,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, Colors, LinearScale, BarElement, Title, Tooltip)

type BarChartProps = {
  datasets: ChartDataset<'bar'>[]
  horizontal?: boolean
  labels: string[]
  stacked?: boolean
}

export const BarChart: FC<BarChartProps> = ({
  datasets,
  horizontal = false,
  labels,
  stacked = false,
}) => (
  <Bar
    data={{
      labels,
      datasets,
    }}
    options={{
      indexAxis: horizontal ? 'y' : 'x',
      maintainAspectRatio: false,
      scales: {
        x: { stacked },
        y: { stacked },
      },
    }}
  />
)
