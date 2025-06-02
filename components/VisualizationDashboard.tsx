'use client'

import { FC } from 'react';
import { 
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area
} from 'recharts';
import { visualizationMetricsData } from "@/utils/dummyData";

// Extended data for more comprehensive visualizations
const agentWorkflowTrend = [
  { month: 'Jan', value: 8 },
  { month: 'Feb', value: 10 },
  { month: 'Mar', value: 11 },
  { month: 'Apr', value: 14 },
  { month: 'May', value: 15 }
];

const reasoningStepsDetailData = [
  { category: 'Simple Queries', steps: 3.2 },
  { category: 'Medium Queries', steps: 6.5 },
  { category: 'Complex Queries', steps: 8.3 },
  { category: 'Expert Queries', steps: 12.1 }
];

const agentInteractionData = [
  { name: 'Research', value: 35 },
  { name: 'Planning', value: 25 },
  { name: 'Execution', value: 20 },
  { name: 'Reflection', value: 15 },
  { name: 'Optimization', value: 5 }
];

const performanceTrendData = [
  { date: '1 Apr', execution: 2.1, latency: 295, success: 92 },
  { date: '8 Apr', execution: 2.0, latency: 310, success: 93 },
  { date: '15 Apr', execution: 1.9, latency: 305, success: 95 },
  { date: '22 Apr', execution: 1.85, latency: 330, success: 94 },
  { date: '29 Apr', execution: 1.82, latency: 325, success: 96 },
  { date: '1 May', execution: 1.8, latency: 320, success: 97 }
];

const handoffsByTypeData = visualizationMetricsData
  .find(metric => metric.id === 'agent-handoffs')?.chartData || [];

const chartColors = ['#96BF8A', '#00412E', '#4B9F46', '#386641', '#A7C4A0'];

const VisualizationDashboard: FC = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Agent Workflows Trend */}
        <div className="bg-white p-3 rounded-lg shadow">
          <h3 className="text-[#00412E] text-sm font-semibold mb-2">Agent Workflows Growth</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={agentWorkflowTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="value" 
                name="Active Workflows" 
                stroke="#4B9F46" 
                fill="#96BF8A" 
                fillOpacity={0.8} 
              />
            </AreaChart>
          </ResponsiveContainer>
          <p className="text-xs text-neutral-600 mt-2">
            Monthly growth of active agent workflows in the system.
          </p>
        </div>
        
        {/* Reasoning Steps by Query Complexity */}
        <div className="bg-white p-3 rounded-lg shadow">
          <h3 className="text-[#00412E] text-sm font-semibold mb-2">Reasoning Steps by Query Complexity</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={reasoningStepsDetailData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value} steps`, 'Average']} />
              <Legend />
              <Bar 
                dataKey="steps" 
                name="Average Steps" 
                fill="#00412E" 
                radius={[4, 4, 0, 0]} 
              />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-neutral-600 mt-2">
            Average number of reasoning steps required by query complexity level.
          </p>
        </div>
        
        {/* Agent Interaction Distribution */}
        <div className="bg-white p-3 rounded-lg shadow">
          <h3 className="text-[#00412E] text-sm font-semibold mb-2">Agent Interaction Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={agentInteractionData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                innerRadius={50}
                label
              >
                {agentInteractionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          <p className="text-xs text-neutral-600 mt-2">
            Distribution of agent interaction types across all workflows.
          </p>
        </div>
        
        {/* Performance Metrics Trend */}
        <div className="bg-white p-3 rounded-lg shadow">
          <h3 className="text-[#00412E] text-sm font-semibold mb-2">Performance Metrics Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={performanceTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="execution" 
                name="Execution Time (s)" 
                stroke="#00412E" 
                strokeWidth={2}
                activeDot={{ r: 8 }}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="latency" 
                name="Latency (ms)" 
                stroke="#4B9F46" 
                strokeWidth={2}
                activeDot={{ r: 8 }}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="success" 
                name="Success Rate (%)" 
                stroke="#96BF8A" 
                strokeWidth={2}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-xs text-neutral-600 mt-2">
            Performance metrics trend showing execution time, latency, and success rate.
          </p>
        </div>
        
        {/* Agent Handoffs by Type */}
        <div className="bg-white p-3 rounded-lg shadow col-span-1 lg:col-span-2">
          <h3 className="text-[#00412E] text-sm font-semibold mb-2">Agent Handoffs by Type</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={handoffsByTypeData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {handoffsByTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value} handoffs`, '']} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-col justify-center">
              <h4 className="text-base font-medium text-[#00412E] mb-3">Handoff Distribution</h4>
              <ul className="space-y-2">
                {handoffsByTypeData.map((item, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <span 
                      className="w-3 h-3 mr-2 rounded-full" 
                      style={{ backgroundColor: chartColors[index % chartColors.length] }}
                    ></span>
                    <span className="text-neutral-700">{item.name}:</span>
                    <span className="font-semibold ml-1">{item.value} handoffs</span>
                    <span className="text-neutral-500 ml-1 text-xs">
                      ({((item.value / handoffsByTypeData.reduce((sum, i) => sum + i.value, 0)) * 100).toFixed(1)}%)
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-neutral-600 mt-4">
                Distribution of agent handoff types showing task-based, knowledge-based, and escalation patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualizationDashboard;