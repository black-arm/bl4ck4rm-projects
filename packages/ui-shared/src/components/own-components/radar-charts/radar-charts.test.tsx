import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { RadarCharts, type RadarChartProps } from './radar-charts'
import type { ChartConfig } from '@bl4ck4rm-projects/ui-shared'

const mockChartConfig: ChartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
}

const mockData = [
  { subject: "Math", desktop: 120 },
  { subject: "Science", desktop: 110 },
  { subject: "English", desktop: 90 },
  { subject: "History", desktop: 80 },
  { subject: "Geography", desktop: 95 },
]

const defaultProps: RadarChartProps = {
  data: mockData,
  chartConfig: mockChartConfig,
}

describe('RadarCharts', () => {
  it('renders the radar chart component', () => {
    render(<RadarCharts {...defaultProps} />)
    
    // Check if the ChartContainer is rendered
    const chartContainer = screen.getByTestId('radar-chart')
    expect(chartContainer).toBeInTheDocument()
  })

  it('renders with custom chart configuration', () => {
    const customConfig: ChartConfig = {
      desktop: {
        label: "Custom Desktop",
        color: "hsl(220, 70%, 50%)",
      },
    }

    render(<RadarCharts data={mockData} chartConfig={customConfig} />)
    
    const chartContainer = screen.getByTestId('radar-chart')
    expect(chartContainer).toBeInTheDocument()
  })

//   it('renders without data', () => {
//     render(<RadarCharts data={undefined} chartConfig={mockChartConfig} />)
    
//     const chartContainer = screen.getByRole('region')
//     expect(chartContainer).toBeInTheDocument()
//   })

//   it('renders with empty data array', () => {
//     render(<RadarCharts data={[]} chartConfig={mockChartConfig} />)
    
//     const chartContainer = screen.getByRole('region')
//     expect(chartContainer).toBeInTheDocument()
//   })

//   it('applies correct CSS classes', () => {
//     render(<RadarCharts {...defaultProps} />)
    
//     const chartContainer = screen.getByRole('region')
//     expect(chartContainer).toHaveClass('mx-auto', 'aspect-square', 'max-h-[250px]')
//   })

//   it('renders with different data structures', () => {
//     const differentData = [
//       { category: "A", desktop: 50 },
//       { category: "B", desktop: 75 },
//       { category: "C", desktop: 100 },
//     ]

//     render(<RadarCharts data={differentData} chartConfig={mockChartConfig} />)
    
//     const chartContainer = screen.getByRole('region')
//     expect(chartContainer).toBeInTheDocument()
//   })

//   it('handles missing chartConfig gracefully', () => {
//     // @ts-expect-error Testing missing required prop
//     expect(() => render(<RadarCharts data={mockData} />)).not.toThrow()
//   })

//   it('handles large datasets', () => {
//     const largeData = Array.from({ length: 20 }, (_, i) => ({
//       subject: `Subject ${i + 1}`,
//       desktop: Math.floor(Math.random() * 100),
//     }))

//     render(<RadarCharts data={largeData} chartConfig={mockChartConfig} />)
    
//     const chartContainer = screen.getByRole('region')
//     expect(chartContainer).toBeInTheDocument()
//   })

//   it('renders with multiple data keys in config', () => {
//     const multiConfig: ChartConfig = {
//       desktop: {
//         label: "Desktop",
//         color: "hsl(var(--chart-1))",
//       },
//       mobile: {
//         label: "Mobile", 
//         color: "hsl(var(--chart-2))",
//       },
//     }

//     const multiData = [
//       { subject: "Math", desktop: 120, mobile: 110 },
//       { subject: "Science", desktop: 110, mobile: 100 },
//     ]

//     render(<RadarCharts data={multiData} chartConfig={multiConfig} />)
    
//     const chartContainer = screen.getByRole('region')
//     expect(chartContainer).toBeInTheDocument()
//   })
})