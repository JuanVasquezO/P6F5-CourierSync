// src/components/atoms/ChartCard.tsx
import React from 'react'
import Card from '@/components/atoms/Card'

interface ChartCardProps {
  title: string
  children: React.ReactNode
  className?: string
}

const ChartCard: React.FC<ChartCardProps> = ({
  title,
  children,
  className = '',
}) => {
  return (
    <Card className={className}>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="h-48">
        {children}
      </div>
    </Card>
  )
}

export default ChartCard
