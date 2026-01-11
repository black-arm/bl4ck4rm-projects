"use client";

import AboutMe from '@/modules/home/components/aboutMe/aboutMe'
import { ChartConfig, RadarCharts } from '@bl4ck4rm-projects/ui-shared'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/home')({
  component: RouteComponent,
})

function RouteComponent() {
  const programmingLanguages = [
    { skill: 'Java', value: 60 },
    { skill: 'Javascript', value: 80 },
    { skill: 'Typescript', value: 90 },
    { skill: 'Rust', value: 20 }
  ]

  const chartConfig: ChartConfig = {
    value: {
      label: "Skill Level",
      color: "hsl(var(--chart-1))",
    }
  }

  return <>
    <AboutMe />
    <RadarCharts data={programmingLanguages} 
      chartConfig={chartConfig} dataKeyLabel="skill" dataKeyValue="value" />
  </>
}
