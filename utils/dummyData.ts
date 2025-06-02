export interface ChartData {
  name: string;
  value: number;
}

export interface MetricData {
  id: string;
  title: string;
  value: string | number;
  description?: string;
  change?: {
    value: number;
    isPositive: boolean;
  };
  chartType?: 'line' | 'bar' | 'pie' | 'none';
  chartData?: ChartData[];
  chartColors?: string[];
}

// Performance Metrics Data
export const performanceMetricsData: MetricData[] = [
  {
    id: 'token-usage',
    title: 'Token Usage',
    value: '1.2M',
    description: 'Total tokens processed in the last 30 days',
    change: {
      value: 12.5,
      isPositive: true
    },
    chartType: 'line',
    chartData: [
      { name: 'Apr 1', value: 750000 },
      { name: 'Apr 8', value: 220000 },
      { name: 'Apr 15', value: 900000 },
      { name: 'Apr 22', value: 680000 },
      { name: 'Apr 29', value: 1100000 },
      { name: 'May 1', value: 1200000 }
    ]
  },
  {
    id: 'latency',
    title: 'Average Latency',
    value: '320ms',
    description: 'Response time across all API calls',
    change: {
      value: 8.3,
      isPositive: false
    },
    chartType: 'pie',
    chartData: [
      { name: 'Apr 1', value: 295 },
      { name: 'Apr 8', value: 310 },
      { name: 'Apr 15', value: 105 },
      { name: 'Apr 22', value: 330 },
      { name: 'Apr 29', value: 425 },
      { name: 'May 1', value: 320 }
    ]
  },
  {
    id: 'execution-duration',
    title: 'Execution Duration',
    value: '1.8s',
    description: 'Average time from request to response completion',
    change: {
      value: 5.2,
      isPositive: true
    },
    chartType: 'bar',
    chartData: [
      { name: 'Apr 1', value: 2.1 },
      { name: 'Apr 8', value: 2.0 },
      { name: 'Apr 15', value: 3.9 },
      { name: 'Apr 22', value: 1.85 },
      { name: 'Apr 29', value: 1.82 },
      { name: 'May 1', value: 4.8 }
    ]
  },
  
];

// Operational Metrics Data
export const operationalMetricsData: MetricData[] = [
  {
    id: 'api-calls',
    title: 'API Calls',
    value: '45,682',
    description: 'Total API calls made this month',
    change: {
      value: 23.1,
      isPositive: true
    },
    chartType: 'line',
    chartData: [
      { name: 'Apr 1', value: 35000 },
      { name: 'Apr 8', value: 38000 },
      { name: 'Apr 15', value: 40000 },
      { name: 'Apr 22', value: 42500 },
      { name: 'Apr 29', value: 44000 },
      { name: 'May 1', value: 45682 }
    ]
  },
  {
    id: 'context-tracking',
    title: 'Context Size',
    value: '8,192',
    description: 'Average context window used in tokens',
    change: {
      value: 4.5,
      isPositive: true
    },
    chartType: 'bar',
    chartData: [
      { name: 'Apr 1', value: 5800 },
      { name: 'Apr 8', value: 7900 },
      { name: 'Apr 15', value: 6000 },
      { name: 'Apr 22', value: 8100 },
      { name: 'Apr 29', value: 7150 },
      { name: 'May 1', value: 9192 }
    ]
  },
  {
    id: 'prompt-data',
    title: 'Prompt Length',
    value: '512',
    description: 'Average prompt length in tokens',
    change: {
      value: 2.3,
      isPositive: false
    },
    chartType: 'pie',
    chartData: [
      { name: 'Apr 1', value: 525 },
      { name: 'Apr 8', value: 522 },
      { name: 'Apr 15', value: 520 },
      { name: 'Apr 22', value: 518 },
      { name: 'Apr 29', value: 515 },
      { name: 'May 1', value: 512 }
    ]
  },

];

// Quality Metrics Data
export const qualityMetricsData: MetricData[] = [
  {
    id: 'user-feedback',
    title: 'User Satisfaction',
    value: '4.7/5',
    description: 'Average user rating across all interactions',
    change: {
      value: 5.6,
      isPositive: true
    },
    chartType: 'line',
    chartData: [
      { name: 'Apr 1', value: 6.4 },
      { name: 'Apr 8', value: 4.5 },
      { name: 'Apr 15', value: 4.55 },
      { name: 'Apr 22', value: 6.6 },
      { name: 'Apr 29', value: 4.65 },
      { name: 'May 1', value: 5.7 }
    ]
  },
  
  {
    id: 'conversation-turns',
    title: 'Conversation Turns',
    value: '5.8',
    description: 'Average turns per user session',
    change: {
      value: 12.8,
      isPositive: true
    },
    chartType: 'pie',
    chartData: [
      { name: '1-3 turns', value: 25 },
      { name: '4-6 turns', value: 45 },
      { name: '7-9 turns', value: 20 },
      { name: '10+ turns', value: 10 }
    ],
    chartColors: ['#96BF8A', '#00412E', '#4B9F46', '#386641']
  }
];

// Visualization Metrics Data
export const visualizationMetricsData: MetricData[] = [
  {
    id: 'agent-workflows',
    title: 'Agent Workflows',
    value: '15',
    description: 'Active agent graph workflows',
    change: {
      value: 25.0,
      isPositive: true
    },
    chartType: 'bar',
    chartData: [
      { name: 'Apr 1', value: 12 },
      { name: 'Apr 8', value: 12 },
      { name: 'Apr 15', value: 13 },
      { name: 'Apr 22', value: 14 },
      { name: 'Apr 29', value: 14 },
      { name: 'May 1', value: 15 }
    ]
  },
  {
    id: 'reasoning-steps',
    title: 'Reasoning Steps',
    value: '8.3',
    description: 'Average reasoning steps per complex query',
    change: {
      value: 4.2,
      isPositive: true
    },
    chartType: 'line',
    chartData: [
      { name: 'Apr 1', value: 7.9 },
      { name: 'Apr 8', value: 8.0 },
      { name: 'Apr 15', value: 8.1 },
      { name: 'Apr 22', value: 8.2 },
      { name: 'Apr 29', value: 8.2 },
      { name: 'May 1', value: 8.3 }
    ]
  },
  {
    id: 'agent-handoffs',
    title: 'Agent Handoffs',
    value: '238',
    description: 'Successful agent-to-agent transfers this month',
    change: {
      value: 15.7,
      isPositive: true
    },
    chartType: 'pie',
    chartData: [
      { name: 'Task-based', value: 95 },
      { name: 'Knowledge-based', value: 85 },
      { name: 'Escalation', value: 58 }
    ],
    chartColors: ['#96BF8A', '#00412E', '#4B9F46']
  }
];