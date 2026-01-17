"use client";

import AboutMe from '@/modules/home/components/aboutMe/aboutMe'
import { ChartConfig, RadarCharts } from '@bl4ck4rm-projects/ui-shared'
import { createFileRoute, Link } from '@tanstack/react-router'

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

  const frameworks = [
    { skill: 'React', value: 70 },
    { skill: 'Angular', value: 90 },
    { skill: 'Spring', value: 80 },
    { skill: 'NestJS', value: 60 },
    { skill: 'NextJS', value: 50 }
  ];

  const chartConfigFrameworks: ChartConfig = {
    value: {
      label: "Skill Level",
      color: "hsl(var(--chart-2))",
    }
  }

  return <>
    <AboutMe />
    <div className='flex flex-col mt-8'>
      <h2 className='text-3xl font-bold mb-6'>Technical Skills Overview</h2>
      <p className='mb-8 text-muted-foreground max-w-2xl'>
        A bit of my technical knowledge that I have learned over the years. 😎
      </p>
      <div className='flex justify-center flex-row'>
        <RadarCharts data={programmingLanguages} 
        chartConfig={chartConfig} 
        dataKeyLabel="skill" 
        dataKeyValue="value"
        chartClassName='w-96'/>
      <RadarCharts data={frameworks} 
        chartConfig={chartConfigFrameworks} 
        dataKeyLabel="skill" 
        dataKeyValue="value"
        chartClassName="w-96" />
      </div>
        <p className='mb-8 text-muted-foreground max-w-2xl'>
          If you want to read a couple of posts I wrote, 
            <Link className='underline text-accent-foreground' to="/blog">click here</Link>;
        </p>
    </div>
  </>
}
