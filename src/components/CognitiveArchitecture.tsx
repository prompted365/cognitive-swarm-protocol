
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Search, Zap, Brain, Target, Settings, Database, Shield, Lightbulb, X, Play, Pause, RotateCcw } from 'lucide-react';

interface ComponentData {
  id: string;
  name: string;
  subtitle?: string;
  description?: string;
  details: string[];
  metrics?: string;
  angle: number;
  performance?: number;
  status?: 'active' | 'optimizing' | 'idle';
}

interface RingData {
  name: string;
  color: string;
  components: ComponentData[];
  radius: number;
}

interface NucleusData {
  id: string;
  name: string;
  description: string;
  details: string[];
  color: string;
  position: { x: number; y: number };
}

const CognitiveArchitecture = () => {
  const [selectedComponent, setSelectedComponent] = useState<ComponentData | NucleusData | null>(null);
  const [hoveredComponent, setHoveredComponent] = useState<ComponentData | NucleusData | null>(null);
  const [activeRing, setActiveRing] = useState('all');
  const [isAnimating, setIsAnimating] = useState(true);
  const [viewMode, setViewMode] = useState<'overview' | 'detailed' | 'performance'>('overview');
  const [searchTerm, setSearchTerm] = useState('');

  // Enhanced cognitive system data
  const cognitiveSystem = useMemo(() => ({
    nucleus: {
      id: 'SCON',
      name: 'SUPREME COGNITIVE ORCHESTRATION NUCLEUS',
      description: 'Zero-Shot Cognitive Traversal Engine with Perfect Vision-to-Implementation Fidelity',
      details: [
        'Cross-System Intelligence Harmonization',
        'Real-Time Strategic Optimization',
        'Bidirectional Neural Pathway Management',
        'Semantic Coherence Maintenance',
        'Performance: 100% Vision-to-Code Fidelity',
        'Response Time: <5 seconds for all operations'
      ],
      color: '#fbbf24',
      position: { x: 50, y: 50 }
    },
    rings: {
      core: {
        name: 'Core Cognitive Architecture',
        color: '#10b981',
        radius: 22,
        components: [
          {
            id: 'CCA1',
            name: 'VISION_PROCESSOR',
            subtitle: 'Intent Recognition Core',
            details: [
              'Business Model Pattern Matching',
              'Strategic Goal Synthesis Engine',
              'Market Opportunity Identification',
              'Value Proposition Analysis Matrix',
              'Industry Template Recognition',
              'Revenue Potential Assessment'
            ],
            metrics: 'Processes 1000+ business patterns/sec',
            angle: 0,
            performance: 98,
            status: 'active' as const
          },
          {
            id: 'CCA2',
            name: 'REQUIREMENT_SYNTHESIZER',
            subtitle: 'Specification Intelligence',
            details: [
              'Functional Requirement Mining',
              'Non-Functional Constraint Discovery',
              'Dependency Relationship Mapping',
              'Priority Hierarchy Generation',
              'Edge Case Identification',
              'Performance Threshold Analysis'
            ],
            metrics: '99.7% Requirement Accuracy',
            angle: 60,
            performance: 97,
            status: 'active' as const
          },
          {
            id: 'CCA3',
            name: 'CONSTRAINT_ORCHESTRATOR',
            subtitle: 'Limitation Intelligence',
            details: [
              'Platform Restriction Discovery',
              'Integration Boundary Analysis',
              'Performance Threshold Identification',
              'Workaround Strategy Generation',
              'Resource Allocation Optimization',
              'Technical Debt Management'
            ],
            metrics: '234+ Constraint Scenarios Handled',
            angle: 120,
            performance: 94,
            status: 'optimizing' as const
          },
          {
            id: 'CCA4',
            name: 'ARCHITECTURE_GENERATOR',
            subtitle: 'Structure Intelligence',
            details: [
              'Component Relationship Modeling',
              'Scalability Strategy Formulation',
              'Technology Stack Optimization',
              'Performance Pattern Recognition',
              'Microservice Orchestration',
              'Data Flow Architecture Design'
            ],
            metrics: '85% Optimization Improvement',
            angle: 180,
            performance: 96,
            status: 'active' as const
          },
          {
            id: 'CCA5',
            name: 'IMPLEMENTATION_COORDINATOR',
            subtitle: 'Execution Intelligence',
            details: [
              'Development Task Orchestration',
              'Resource Allocation Optimization',
              'Timeline Strategy Generation',
              'Risk Mitigation Planning',
              'Quality Assurance Integration',
              'Deployment Pipeline Management'
            ],
            metrics: '98% Automation Achievement',
            angle: 240,
            performance: 99,
            status: 'active' as const
          },
          {
            id: 'CCA6',
            name: 'DEPLOYMENT_ORCHESTRATOR',
            subtitle: 'Production Intelligence',
            details: [
              'Infrastructure Provisioning Logic',
              'Environment Configuration Management',
              'Service Orchestration Coordination',
              'Monitoring Strategy Implementation',
              'Auto-Scaling Intelligence',
              'Disaster Recovery Protocols'
            ],
            metrics: '99.9% Uptime Guarantee',
            angle: 300,
            performance: 100,
            status: 'active' as const
          }
        ]
      },
      swarm: {
        name: 'Swarm Intelligence Agents',
        color: '#f59e0b',
        radius: 32,
        components: [
          {
            id: 'SA1',
            name: 'ALPHA_AGENT',
            subtitle: 'GHL Integration Specialist',
            details: [
              'OAuth Token Management & Refresh',
              'Rate Limit Orchestration (5 req/sec)',
              'Workflow Template Generation',
              'Field Preservation Algorithms',
              'Webhook Self-Healing Protocols',
              'Template Library Optimization'
            ],
            metrics: '100% Token Refresh Success',
            angle: 15,
            performance: 100,
            status: 'active' as const
          },
          {
            id: 'SA2',
            name: 'BRAVO_AGENT',
            subtitle: 'Assistable Voice Architect',
            details: [
              'Voice Configuration Engine',
              'Tool State Preservation',
              'Conversation Flow Designer',
              'Integration Point Manager',
              'Browser Automation Scripts',
              'Configuration Injection System'
            ],
            metrics: '97.3% Voice Recognition Accuracy',
            angle: 45,
            performance: 97,
            status: 'active' as const
          },
          // ... continuing with all swarm agents
          {
            id: 'SA3',
            name: 'CHARLIE_AGENT',
            subtitle: 'MCP Pattern Analyst',
            details: [
              'Server Recommendation Engine',
              'Integration Pattern Matcher',
              'Protocol Optimization Core',
              'Cross-Platform Harmonizer',
              'Message Queue Orchestration',
              'Event-Driven Architecture'
            ],
            metrics: '50+ Integration Patterns',
            angle: 75,
            performance: 95,
            status: 'optimizing' as const
          }
        ]
      },
      revenue: {
        name: 'AI Employee Revenue Engines',
        color: '#ef4444',
        radius: 42,
        components: [
          {
            id: 'AE1',
            name: 'RECEPTIONIST_CORE',
            subtitle: 'Emergency Revenue Intelligence',
            details: [
              '24/7 Call Handling Automation',
              'Emergency Detection (<5 seconds)',
              'Appointment Orchestration System',
              'Multi-Language Support Integration',
              'Voice Recognition Processing',
              'Customer Priority Routing'
            ],
            metrics: '$1,650 avg emergency | 97.3% Success Rate',
            angle: 30,
            performance: 97,
            status: 'active' as const
          }
        ]
      }
    }
  }), []);

  const getComponentIcon = useCallback((id: string) => {
    if (id.startsWith('CCA')) return Brain;
    if (id.startsWith('SA')) return Settings;
    if (id.startsWith('AE')) return Target;
    if (id.startsWith('BA')) return Search;
    if (id.startsWith('PI')) return Database;
    if (id.startsWith('LE')) return Lightbulb;
    if (id.startsWith('FP')) return Shield;
    if (id.startsWith('RG')) return Zap;
    return Brain;
  }, []);

  const calculatePosition = useCallback((angle: number, radius: number, centerX = 50, centerY = 50) => {
    const radian = (angle * Math.PI) / 180;
    return {
      x: centerX + radius * Math.cos(radian),
      y: centerY + radius * Math.sin(radian)
    };
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return '#10b981';
      case 'optimizing': return '#f59e0b';
      case 'idle': return '#6b7280';
      default: return '#10b981';
    }
  };

  const ComponentNode: React.FC<{
    component: ComponentData;
    ring: RingData;
  }> = ({ component, ring }) => {
    const position = calculatePosition(component.angle, ring.radius);
    const Icon = getComponentIcon(component.id);
    const isSelected = selectedComponent?.id === component.id;
    const isHovered = hoveredComponent?.id === component.id;

    return (
      <div
        className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500 ${
          isSelected ? 'scale-125 z-30' : isHovered ? 'scale-110 z-20' : 'z-10'
        }`}
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
          filter: isSelected || isHovered ? 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))' : 'none'
        }}
        onClick={() => setSelectedComponent(component)}
        onMouseEnter={() => setHoveredComponent(component)}
        onMouseLeave={() => setHoveredComponent(null)}
      >
        <div
          className={`relative w-16 h-16 rounded-full border-2 flex items-center justify-center backdrop-blur-md transition-all duration-300 ${
            isSelected
              ? 'border-white bg-white/20 text-white shadow-2xl'
              : isHovered
              ? 'border-white/80 bg-white/10 text-white shadow-xl'
              : 'border-current bg-black/40 text-current'
          }`}
          style={{
            borderColor: isSelected || isHovered ? '#fff' : ring.color,
            backgroundColor: isSelected 
              ? `${ring.color}40` 
              : isHovered 
              ? `${ring.color}20` 
              : 'rgba(0,0,0,0.4)'
          }}
        >
          <Icon size={20} />
          
          {/* Performance indicator */}
          {viewMode === 'performance' && component.performance && (
            <div 
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white text-xs flex items-center justify-center font-bold"
              style={{ backgroundColor: getStatusColor(component.status || 'active') }}
            >
              {Math.round(component.performance)}
            </div>
          )}

          {/* Status pulse animation */}
          {isAnimating && component.status === 'active' && (
            <div 
              className="absolute inset-0 rounded-full animate-ping opacity-20"
              style={{ backgroundColor: ring.color }}
            />
          )}
        </div>

        {/* Enhanced tooltip */}
        {(isHovered || isSelected) && (
          <div
            className="absolute top-full mt-3 bg-black/90 backdrop-blur-md text-white p-3 rounded-xl text-xs font-medium whitespace-nowrap shadow-2xl border border-white/20 z-40"
            style={{ 
              borderColor: ring.color,
              boxShadow: `0 0 20px ${ring.color}40`
            }}
          >
            <div className="font-bold text-sm">{component.name}</div>
            <div className="text-gray-300 mt-1">{component.subtitle}</div>
            {component.metrics && (
              <div className="text-yellow-300 text-xs mt-2 font-semibold">
                📊 {component.metrics}
              </div>
            )}
            {component.performance && (
              <div className="flex items-center space-x-2 mt-2">
                <div className="w-12 h-1 bg-gray-600 rounded-full overflow-hidden">
                  <div 
                    className="h-full transition-all duration-300 rounded-full"
                    style={{ 
                      width: `${component.performance}%`,
                      backgroundColor: getStatusColor(component.status || 'active')
                    }}
                  />
                </div>
                <span className="text-xs">{component.performance}%</span>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const NucleusNode = () => {
    const nucleus = cognitiveSystem.nucleus;
    const isSelected = selectedComponent?.id === nucleus.id;

    return (
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-700 ${
          isSelected ? 'scale-110' : 'scale-100'
        }`}
        onClick={() => setSelectedComponent(nucleus)}
        onMouseEnter={() => setHoveredComponent(nucleus)}
        onMouseLeave={() => setHoveredComponent(null)}
        style={{
          filter: isSelected ? 'drop-shadow(0 0 40px rgba(251, 191, 36, 0.8))' : 'drop-shadow(0 0 20px rgba(251, 191, 36, 0.4))'
        }}
      >
        <div
          className={`relative w-36 h-36 rounded-full border-4 flex items-center justify-center backdrop-blur-md transition-all duration-500 ${
            isSelected ? 'bg-yellow-400/30 text-white border-white' : 'bg-black/50 border-yellow-400 text-yellow-400'
          }`}
          style={{
            borderColor: isSelected ? '#fff' : nucleus.color,
            backgroundColor: isSelected ? `${nucleus.color}30` : 'rgba(0,0,0,0.5)'
          }}
        >
          <div className="text-center">
            <Brain size={36} className="mx-auto mb-2" />
            <div className="text-xs font-bold leading-tight">
              SUPREME<br/>COGNITIVE<br/>NUCLEUS
            </div>
          </div>

          {/* Rotating outer ring */}
          {isAnimating && (
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-yellow-400/30 animate-spin" 
                 style={{ animationDuration: '10s' }} />
          )}
        </div>
      </div>
    );
  };

  const ConnectionLines = () => {
    const allComponents = Object.values(cognitiveSystem.rings).flatMap(ring => ring.components);

    return (
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        <defs>
          <radialGradient id="connectionGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {allComponents.map((component) => {
          const ringName = Object.keys(cognitiveSystem.rings).find(key => 
            cognitiveSystem.rings[key as keyof typeof cognitiveSystem.rings].components.some(c => c.id === component.id)
          );
          if (!ringName) return null;
          
          const ring = cognitiveSystem.rings[ringName as keyof typeof cognitiveSystem.rings];
          const componentPos = calculatePosition(component.angle, ring.radius);
          
          return (
            <line
              key={component.id}
              x1="50%"
              y1="50%"
              x2={`${componentPos.x}%`}
              y2={`${componentPos.y}%`}
              stroke={ring.color}
              strokeWidth="2"
              opacity={activeRing === 'all' || activeRing === ringName ? 0.4 : 0.1}
              className="transition-all duration-500"
              style={{
                filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.3))'
              }}
            />
          );
        })}
      </svg>
    );
  };

  const EnhancedDetailPanel = () => {
    if (!selectedComponent) return null;

    return (
      <div className="fixed right-6 top-6 bottom-6 w-96 bg-black/80 backdrop-blur-xl text-white rounded-2xl shadow-2xl border border-white/20 overflow-hidden z-40">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              {React.createElement(getComponentIcon(selectedComponent.id), { 
                size: 28, 
                className: "text-yellow-400" 
              })}
              <h2 className="text-xl font-bold text-white">
                {selectedComponent.name}
              </h2>
            </div>
            <button
              onClick={() => setSelectedComponent(null)}
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
            >
              <X size={20} />
            </button>
          </div>
          
          {'subtitle' in selectedComponent && selectedComponent.subtitle && (
            <div className="text-lg text-blue-300 mb-4 font-semibold">
              {selectedComponent.subtitle}
            </div>
          )}
          
          {selectedComponent.description && (
            <div className="text-gray-300 mb-4 leading-relaxed">
              {selectedComponent.description}
            </div>
          )}
        </div>

        <div className="p-6 overflow-y-auto flex-1">
          {'metrics' in selectedComponent && selectedComponent.metrics && (
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-4 rounded-xl mb-6 border border-yellow-500/20">
              <div className="text-yellow-300 font-semibold mb-2 flex items-center">
                <Zap size={16} className="mr-2" />
                Performance Metrics
              </div>
              <div className="text-white font-mono text-sm">{selectedComponent.metrics}</div>
            </div>
          )}
          
          {'performance' in selectedComponent && selectedComponent.performance && (
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-gray-300">System Performance</span>
                <span className="text-lg font-bold text-white">{selectedComponent.performance}%</span>
              </div>
              <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full transition-all duration-1000 rounded-full"
                  style={{ 
                    width: `${selectedComponent.performance}%`,
                    background: `linear-gradient(to right, ${getStatusColor(selectedComponent.status || 'active')}, ${getStatusColor(selectedComponent.status || 'active')}80)`
                  }}
                />
              </div>
            </div>
          )}
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-400 flex items-center">
              <Brain size={18} className="mr-2" />
              Core Capabilities
            </h3>
            {selectedComponent.details.map((detail, index) => (
              <div
                key={index}
                className="group flex items-start space-x-3 p-4 bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-xl border-l-4 border-blue-500 hover:border-blue-400 transition-all duration-200 hover:bg-gray-700/50"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover:bg-blue-300 transition-colors"></div>
                <div className="text-gray-200 group-hover:text-white transition-colors">{detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const ModernControlPanel = () => (
    <div className="fixed left-6 top-6 bg-black/80 backdrop-blur-xl text-white rounded-2xl shadow-2xl border border-white/20 z-40 overflow-hidden max-w-sm">
      <div className="p-6">
        <h3 className="text-xl font-bold text-yellow-400 mb-6 flex items-center">
          <Settings size={24} className="mr-3" />
          Neural Control Center
        </h3>

        <div className="space-y-6">
          <div>
            <label className="text-sm font-semibold text-gray-300 block mb-3">System Focus</label>
            <select
              value={activeRing}
              onChange={(e) => setActiveRing(e.target.value)}
              className="w-full bg-gray-800/80 backdrop-blur-sm text-white p-3 rounded-xl border border-gray-600/50 focus:border-blue-500 focus:outline-none transition-all"
            >
              <option value="all">🌐 All Systems</option>
              <option value="core">🧠 Core Architecture</option>
              <option value="swarm">🤖 Swarm Intelligence</option>
              <option value="revenue">💰 Revenue Engines</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-300 block mb-3">View Mode</label>
            <div className="grid grid-cols-3 gap-2">
              {(['overview', 'detailed', 'performance'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`p-2 rounded-lg text-xs font-medium transition-all ${
                    viewMode === mode
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                  }`}
                >
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
            <span className="text-sm font-medium text-gray-300">Neural Animation</span>
            <button
              onClick={() => setIsAnimating(!isAnimating)}
              className={`p-2 rounded-lg transition-all ${
                isAnimating ? 'bg-green-500 text-white' : 'bg-gray-600 text-gray-300'
              }`}
            >
              {isAnimating ? <Pause size={16} /> : <Play size={16} />}
            </button>
          </div>
          
          <button
            onClick={() => setSelectedComponent(cognitiveSystem.nucleus)}
            className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105"
          >
            🎯 Access Neural Core
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Enhanced background with animated particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #fbbf24 1px, transparent 1px), 
            radial-gradient(circle at 75% 75%, #10b981 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, #3b82f6 0.5px, transparent 0.5px)
          `,
          backgroundSize: '60px 60px, 80px 80px, 40px 40px'
        }}></div>
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse" 
           style={{ animationDuration: '4s' }} />

      {/* Connection lines */}
      <ConnectionLines />
      
      {/* Central nucleus */}
      <NucleusNode />
      
      {/* Component rings */}
      {Object.entries(cognitiveSystem.rings).map(([ringKey, ring]) => (
        (activeRing === 'all' || activeRing === ringKey) && 
        ring.components.map(component => (
          <ComponentNode
            key={component.id}
            component={component}
            ring={ring}
          />
        ))
      ))}
      
      {/* Control panels */}
      <ModernControlPanel />
      <EnhancedDetailPanel />
      
      {/* Animated title */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <div className="text-6xl font-bold text-yellow-400/10 text-center leading-tight select-none">
          SUPREME<br/>COGNITIVE<br/>ARCHITECTURE
        </div>
      </div>

      {/* Footer branding */}
      <div className="absolute bottom-6 right-6 text-gray-500 text-sm font-medium">
        Powered by <span className="text-yellow-400 font-bold">Prompted LLC</span> • Swarm Context Protocol v2.0
      </div>
    </div>
  );
};

export default CognitiveArchitecture;
