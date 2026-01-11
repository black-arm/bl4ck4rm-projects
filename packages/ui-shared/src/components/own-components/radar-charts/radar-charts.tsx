"use client"

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../../ui/chart";

export const description = "A radar chart with dots"


export type RadarChartProps = {
  data?: unknown[];
  chartConfig: ChartConfig;
  dataKeyLabel: string;
  dataKeyValue: string;
}

export function RadarCharts({ data, chartConfig, dataKeyLabel, dataKeyValue }: RadarChartProps) {
  return (
    <div data-testid="radar-chart">
      <ChartContainer
        config={chartConfig}
        className={"mx-auto aspect-square max-h-96 w-full"}
      >  
        <RadarChart data={data}>
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <PolarAngleAxis dataKey={dataKeyLabel} tick={{ fontSize: 15 }} />
          <PolarGrid />
          <Radar
            dataKey={dataKeyValue}
            fill="var(--color-chart-3)"
            fillOpacity={0.6}
            dot={{
              r: 4,
              fillOpacity: 1,
            }}
          />
        </RadarChart>
      </ChartContainer>
    </div>
  )
}
