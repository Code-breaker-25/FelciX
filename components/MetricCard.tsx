'use client'

import { FC, ReactElement } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export interface ChartData {
  name: string;
  value: number;
}

export interface MetricCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  change?: {
    value: number;
    isPositive: boolean;
  };
  chartType?: 'line' | 'bar' | 'pie' | 'none';
  chartData?: ChartData[];
  chartColors?: string[];
}

const defaultColors = ['#96BF8A', '#00412E', '#E8EAE5', '#4B9F46', '#386641'];

const MetricCard: FC<MetricCardProps> = ({ 
  title, 
  value, 
  description, 
  icon, 
  change,
  chartType = 'none',
  chartData = [],
  chartColors = defaultColors
}): ReactElement => {
  const renderChart = () => {
    if (!chartData?.length || chartType === 'none') return null;

    switch (chartType) {
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={80}>
            <LineChart data={chartData}>
              <Tooltip 
                formatter={(value) => [`${value}`, '']}
                labelFormatter={(label) => `${label}`}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke={chartColors[0]}
                strokeWidth={2}
                dot={{ fill: chartColors[0], r: 2 }}
                activeDot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        );
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={80}>
            <BarChart data={chartData}>
              <Tooltip 
                formatter={(value) => [`${value}`, '']}
                labelFormatter={(label) => `${label}`}
              />
              <Bar dataKey="value" fill={chartColors[0]} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={80}>
            <PieChart>
              <Tooltip 
                formatter={(value, name, props) => [`${value}`, props.payload.name]}
              />
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={30}
                innerRadius={15}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border border-neutral-100 hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between">
        <div>
          <h3 className="text-neutral-500 text-xs font-medium mb-0.5">{title}</h3>
          <p className="text-xl font-bold text-[#00412E]">{value}</p>
          {change && (
            <div className="flex items-center mt-0.5">
              <span className={`text-[10px] font-medium ${change.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {change.isPositive ? '↑' : '↓'} {Math.abs(change.value)}%
              </span>
              <span className="text-neutral-500 text-[10px] ml-1">vs last period</span>
            </div>
          )}
        </div>
        {icon && <div className="text-[#96BF8A] scale-75">{icon}</div>}
      </div>
      
      {chartType !== 'none' && chartData?.length > 0 && (
        <div className="mt-2">
          {renderChart()}
        </div>
      )}
      
      {description && <p className="text-xs text-neutral-500 mt-1.5">{description}</p>}
    </div>
  );
};

export default MetricCard;