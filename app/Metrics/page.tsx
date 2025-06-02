'use client'

import { SidebarDemo } from "@/components/Layout/Sidebar";
import { useState } from "react";
import MetricCard from "@/components/MetricCard";
import VisualizationDashboard from "@/components/VisualizationDashboard";
import { 
  performanceMetricsData, 
  operationalMetricsData, 
  qualityMetricsData, 
  visualizationMetricsData 
} from "@/utils/dummyData";

const Metrics = () => {
  const [activeTab, setActiveTab] = useState("performance");
  
  return (
    <SidebarDemo>
      <div className="flex flex-col flex-1 p-2 overflow-y-auto">
        <div className="flex w-full flex-1 flex-col rounded-tl-xl border border-neutral-200 bg-[#E8EAE5] p-2 md:p-3">
          <h1 className="text-xl font-bold text-[#00412E] mb-2">Metrics</h1>
          
          {/* Improved tab navigation with better overflow handling */}
          <div className="mb-3 border-b-2 w-full">
            <div className="flex flex-nowrap overflow-x-auto pb-1 scrollbar-hide">
              <button
                className={`px-3 py-1.5 text-sm text-[#00412E] font-semibold whitespace-nowrap flex-shrink-0 ${activeTab === "performance" ? "border-b-2 border-[#96BF8A]" : ""}`}
                onClick={() => setActiveTab("performance")}
              >
                Performance Metrics
              </button>
              <button
                className={`px-3 py-1.5 text-sm text-[#00412E] font-semibold whitespace-nowrap flex-shrink-0 ${activeTab === "operational" ? "border-b-2 border-[#96BF8A]" : ""}`}
                onClick={() => setActiveTab("operational")}
              >
                Operational Metrics
              </button>
              <button
                className={`px-3 py-1.5 text-sm text-[#00412E] font-semibold whitespace-nowrap flex-shrink-0 ${activeTab === "quality" ? "border-b-2 border-[#96BF8A]" : ""}`}
                onClick={() => setActiveTab("quality")}
              >
                Quality and User Interaction
              </button>
              <button
                className={`px-3 py-1.5 text-sm text-[#00412E] font-semibold whitespace-nowrap flex-shrink-0 ${activeTab === "visualization" ? "border-b-2 border-[#96BF8A]" : ""}`}
                onClick={() => setActiveTab("visualization")}
              >
                Visualization
              </button>
            </div>
          </div>
          
          {/* Tab Content */}
          <div>
            {activeTab === "performance" && (
              <div className="space-y-3">
                <h2 className="text-base font-semibold text-[#00412E]">Performance Metrics</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {performanceMetricsData.map((metric) => (
                    <MetricCard 
                      key={metric.id}
                      title={metric.title}
                      value={metric.value}
                      description={metric.description}
                      change={metric.change}
                      chartType={metric.chartType}
                      chartData={metric.chartData}
                      chartColors={metric.chartColors}
                    />
                  ))}
                </div>
                <p className="text-xs text-neutral-600 mt-2">
                  These metrics track system performance including token usage, latency, execution time, and associated costs.
                </p>
              </div>
            )}
            
            {activeTab === "operational" && (
              <div className="space-y-3">
                <h2 className="text-base font-semibold text-[#00412E]">Operational Metrics</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {operationalMetricsData.map((metric) => (
                    <MetricCard 
                      key={metric.id}
                      title={metric.title}
                      value={metric.value}
                      description={metric.description}
                      change={metric.change}
                      chartType={metric.chartType}
                      chartData={metric.chartData}
                      chartColors={metric.chartColors}
                    />
                  ))}
                </div>
                <p className="text-xs text-neutral-600 mt-2">
                  Operational metrics provide insight into the technical performance of the system, including API calls, context usage, and error states.
                </p>
              </div>
            )}
            
            {activeTab === "quality" && (
              <div className="space-y-3">
                <h2 className="text-base font-semibold text-[#00412E]">Quality and User Interaction</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {qualityMetricsData.map((metric) => (
                    <MetricCard 
                      key={metric.id}
                      title={metric.title}
                      value={metric.value}
                      description={metric.description}
                      change={metric.change}
                      chartType={metric.chartType}
                      chartData={metric.chartData}
                      chartColors={metric.chartColors}
                    />
                  ))}
                </div>
                <p className="text-xs text-neutral-600 mt-2">
                  These metrics track user satisfaction, output quality, and conversation patterns to ensure optimal user experience.
                </p>
              </div>
            )}
            
            {activeTab === "visualization" && (
              <div className="space-y-3">
                <h2 className="text-base font-semibold text-[#00412E]">Visualization Dashboard</h2>
                <VisualizationDashboard />
                <p className="text-xs text-neutral-600 mt-2">
                  Comprehensive visualization of agent workflows, reasoning processes, and system performance metrics.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </SidebarDemo>
  );
};

export default Metrics;