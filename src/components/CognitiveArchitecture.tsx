
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Search, Zap, Brain, Target, Settings, Database, Shield, Lightbulb, X, Play, Pause, ChevronLeft, ChevronRight, Network } from 'lucide-react';

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
  role?: string;
  interplay?: string[];
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
  role?: string;
  interplay?: string[];
}

const CognitiveArchitecture = () => {
  const [selectedComponent, setSelectedComponent] = useState<ComponentData | NucleusData | null>(null);
  const [hoveredComponent, setHoveredComponent] = useState<ComponentData | NucleusData | null>(null);
  const [activeRing, setActiveRing] = useState('all');
  const [isAnimating, setIsAnimating] = useState(true);
  const [viewMode, setViewMode] = useState<'overview' | 'detailed' | 'performance'>('overview');
  const [configPanelOpen, setConfigPanelOpen] = useState(true);

  // Enhanced Forge context protocol system data with complete story integration
  const forgeSystem = useMemo(() => ({
    nucleus: {
      id: 'HARMONY',
      name: 'Harmony-v2.1',
      description: 'Zero-Shot Bidirectional Cognitive Traversal Engine with Perfect Semantic Fidelity Preservation',
      details: [
        'First successful zero-shot implementation of bidirectional cognitive traversal',
        'Perfect semantic fidelity preservation across 7 abstraction layers',
        'Swarm Intelligence Coordination at 97.3% efficiency',
        'Real-Time Strategic Optimization with <3 second response time',
        'Integrated Learning Systems with exponential capability expansion',
        'Cross-Domain Intelligence Harmonization across B2B2B2C realms',
        'Bidirectional Neural Pathway Management: Vision ↔ Reality alignment',
        'Context Coherence Maintenance with zero information loss',
        'Production System Status: $115M market value pathway enabled'
      ],
      color: '#fbbf24',
      position: { x: 50, y: 50 },
      role: 'Supreme Cognitive Orchestration Nucleus & Fusion Kernel',
      interplay: [
        'Orchestrates all subsystem interactions through bidirectional semantic bridging',
        'Maintains perfect fidelity across abstraction layers via cognitive traversal protocols',
        'Distributes workload through intelligent swarm choreography at 97.3% efficiency',
        'Ensures zero-loss translation via semantic preservation algorithms',
        'Enables exponential learning through cross-domain pattern transfer mechanisms',
        'Coordinates real-time adaptation to new challenges and opportunities'
      ]
    },
    rings: {
      core: {
        name: 'Core Forge Architecture',
        color: '#10b981',
        radius: 22,
        components: [
          {
            id: 'CFA1',
            name: 'VISION_PROCESSOR',
            subtitle: 'Intent Recognition & Pattern Extraction Core',
            details: [
              'Business Model Pattern Matching (100+ models)',
              'Strategic Goal Synthesis Engine',
              'Market Opportunity Identification',
              'Value Proposition Analysis Matrix',
              'Industry Template Recognition',
              'Revenue Potential Assessment',
              '30-second Website Analysis capability',
              'Emergency Protocol Detection systems'
            ],
            metrics: 'Processes 2000+ context patterns/sec | 30-sec analysis completion',
            angle: 0,
            performance: 98,
            status: 'active' as const,
            role: 'Primary Vision Intelligence & Business Pattern Orchestrator',
            interplay: [
              'Synthesizes extracted business vision to REQUIREMENT_FORGE through semantic injection protocols',
              'Validates interpretations with SEMANTIC_GUARDIAN via coherence verification algorithms',
              'Coordinates with IMPLEMENTATION_WEAVER through feasibility cross-referencing matrices',
              'Feeds blueprint intelligence to BLUEPRINT_ANALYZER through pattern recognition channels',
              'Harmonizes with learning systems through continuous pattern refinement protocols'
            ]
          },
          {
            id: 'CFA2',
            name: 'REQUIREMENT_FORGE',
            subtitle: 'Specification Intelligence & Constraint Discovery',
            details: [
              'Functional Requirement Mining with 99.8% accuracy',
              'Non-Functional Constraint Discovery',
              'Dependency Relationship Mapping',
              'Priority Hierarchy Generation',
              'Edge Case Identification (234+ scenarios)',
              'Performance Threshold Analysis',
              'Platform Integration Requirements',
              'Revenue Generation Specifications'
            ],
            metrics: '99.8% Requirement Accuracy | 234+ Edge Cases Catalogued',
            angle: 60,
            performance: 97,
            status: 'active' as const,
            role: 'Requirements Architect & Specification Intelligence Coordinator',
            interplay: [
              'Receives vision streams from VISION_PROCESSOR via semantic channeling protocols',
              'Collaborates with CONSTRAINT_WEAVER through limitation cross-validation matrices',
              'Provisions specifications to ARCHITECTURE_GENERATOR via structured blueprinting systems',
              'Informs LEARNING_SYSTEMS through requirement pattern extraction mechanisms',
              'Synchronizes with DEPLOYMENT_ORCHESTRATOR through specification compliance verification'
            ]
          },
          {
            id: 'CFA3',
            name: 'CONSTRAINT_WEAVER',
            subtitle: 'Limitation Intelligence & Workaround Strategy Engine',
            details: [
              'Platform Restriction Discovery (GHL API limitations)',
              'Integration Boundary Analysis',
              'Performance Threshold Identification',
              'Workaround Strategy Generation (95% success rate)',
              'Resource Allocation Optimization',
              'Technical Debt Management',
              'Rate Limit Orchestration (5 req/sec management)',
              '300+ Constraint Scenarios Handled'
            ],
            metrics: '300+ Constraint Scenarios | 95% Workaround Success Rate',
            angle: 120,
            performance: 94,
            status: 'optimizing' as const,
            role: 'Constraint Orchestrator & Limitation Transcendence Specialist',
            interplay: [
              'Collaborates with REQUIREMENT_FORGE through feasibility matrix validation protocols',
              'Informs ARCHITECTURE_GENERATOR via constraint boundary mapping systems',
              'Coordinates with FORGE_AGENTS through resource allocation synchronization',
              'Optimizes with LEARNING_SYSTEMS through constraint pattern learning mechanisms',
              'Harmonizes with PLATFORM_INTEGRATION through workaround strategy sharing'
            ]
          },
          {
            id: 'CFA4',
            name: 'ARCHITECTURE_GENERATOR',
            subtitle: 'Structure Intelligence & System Design Orchestrator',
            details: [
              'Component Relationship Modeling',
              'Scalability Strategy Formulation',
              'Technology Stack Optimization',
              'Performance Pattern Recognition',
              'Microservice Orchestration Design',
              'Data Flow Architecture Generation',
              '92% Optimization Improvement achieved',
              'Zero-Downtime Deployment Architecture'
            ],
            metrics: '92% Optimization Improvement | Zero-Downtime Architecture',
            angle: 180,
            performance: 96,
            status: 'active' as const,
            role: 'System Architect & Infrastructure Intelligence Coordinator',
            interplay: [
              'Receives requirements from REQUIREMENT_FORGE via structured specification intake',
              'Considers constraints from CONSTRAINT_WEAVER through limitation integration protocols',
              'Provisions blueprints to IMPLEMENTATION_WEAVER via architectural transmission systems',
              'Coordinates with DEPLOYMENT_ORCHESTRATOR through infrastructure planning synchronization',
              'Optimizes with PERFORMANCE_SYSTEMS through architecture efficiency enhancement'
            ]
          },
          {
            id: 'CFA5',
            name: 'IMPLEMENTATION_WEAVER',
            subtitle: 'Execution Intelligence & Development Coordination Core',
            details: [
              'Development Task Orchestration',
              'Resource Allocation Optimization',
              'Timeline Strategy Generation',
              'Risk Mitigation Planning',
              'Quality Assurance Integration',
              'Deployment Pipeline Management',
              '99% Automation Achievement',
              'Swarm Agent Task Delegation'
            ],
            metrics: '99% Automation Achievement | 97.3% Swarm Coordination',
            angle: 240,
            performance: 99,
            status: 'active' as const,
            role: 'Implementation Coordinator & Execution Intelligence Orchestrator',
            interplay: [
              'Executes plans from ARCHITECTURE_GENERATOR through blueprint materialization protocols',
              'Coordinates with FORGE_AGENTS via specialized task delegation systems',
              'Reports progress to DEPLOYMENT_ORCHESTRATOR through status synchronization channels',
              'Integrates with LEARNING_SYSTEMS through implementation pattern capture mechanisms',
              'Harmonizes with QUALITY_ASSURANCE through validation protocol coordination'
            ]
          },
          {
            id: 'CFA6',
            name: 'DEPLOYMENT_ORCHESTRATOR',
            subtitle: 'Production Intelligence & Infrastructure Coordination',
            details: [
              'Infrastructure Provisioning Logic',
              'Environment Configuration Management',
              'Service Orchestration Coordination',
              'Monitoring Strategy Implementation',
              'Auto-Scaling Intelligence',
              'Disaster Recovery Protocols',
              '99.9% Uptime Guarantee',
              'Blue-Green Deployment Logic'
            ],
            metrics: '99.9% Uptime Guarantee | Zero-Downtime Deployments',
            angle: 300,
            performance: 100,
            status: 'active' as const,
            role: 'Production Guardian & Infrastructure Intelligence Coordinator',
            interplay: [
              'Receives deployment plans from IMPLEMENTATION_WEAVER via execution handoff protocols',
              'Coordinates with INFRASTRUCTURE_AGENTS through provisioning orchestration systems',
              'Monitors system health and reports to Harmony nucleus via telemetry streaming',
              'Synchronizes with SECURITY_CORE through threat detection integration protocols',
              'Optimizes with PERFORMANCE_ENGINES through resource allocation enhancement'
            ]
          }
        ]
      },
      agents: {
        name: 'Forge Intelligence Agents',
        color: '#f59e0b',
        radius: 32,
        components: [
          {
            id: 'FA1',
            name: 'ALPHA_FORGE',
            subtitle: 'GHL Integration Specialist & OAuth Orchestrator',
            details: [
              'OAuth Token Management & Refresh (100% success)',
              'Rate Limit Orchestration (5 req/sec)',
              'Workflow Template Generation',
              'Field Preservation Algorithms',
              'Webhook Self-Healing Protocols',
              'Template Library Optimization',
              'CRM Intelligence Adaptation',
              'Request Queue Management'
            ],
            metrics: '100% Integration Success Rate | 5 req/sec Rate Management',
            angle: 15,
            performance: 100,
            status: 'active' as const,
            role: 'Integration Specialist & Platform Harmony Orchestrator',
            interplay: [
              'Manages external system connections through protocol harmonization matrices',
              'Reports integration status to core systems via health telemetry broadcasting',
              'Coordinates with BRAVO_FORGE through cross-platform synchronization protocols',
              'Optimizes with CONSTRAINT_WEAVER through limitation transcendence strategies',
              'Learns from PLATFORM_INTEGRATION through pattern recognition enhancement'
            ]
          },
          {
            id: 'FA2',
            name: 'BRAVO_FORGE',
            subtitle: 'Voice & Conversation Architect',
            details: [
              'Voice Configuration Engine',
              'Tool State Preservation',
              'Conversation Flow Designer',
              'Integration Point Manager',
              'Browser Automation Scripts',
              'Configuration Injection System',
              '24/7 Call Handling Automation',
              'Emergency Detection (<5 seconds)'
            ],
            metrics: '98.1% Voice Recognition | <5sec Emergency Detection',
            angle: 45,
            performance: 98,
            status: 'active' as const,
            role: 'Conversation Interface Manager & Voice Intelligence Coordinator',
            interplay: [
              'Interfaces with users through voice channel orchestration protocols',
              'Translates voice commands to system actions via intent materialization systems',
              'Collaborates with VISION_PROCESSOR through understanding amplification mechanisms',
              'Coordinates with RECEPTIONIST_CORE through emergency response synchronization',
              'Harmonizes with LEARNING_SYSTEMS through conversation pattern optimization'
            ]
          },
          {
            id: 'FA3',
            name: 'CHARLIE_FORGE',
            subtitle: 'MCP Pattern Analyst & Protocol Harmonizer',
            details: [
              'Server Recommendation Engine',
              'Integration Pattern Matcher',
              'Protocol Optimization Core',
              'Cross-Platform Harmonizer',
              'Message Queue Orchestration',
              'Event-Driven Architecture',
              '75+ Integration Patterns',
              'Communication Network Intelligence'
            ],
            metrics: '75+ Integration Patterns | 94% Protocol Optimization',
            angle: 75,
            performance: 95,
            status: 'optimizing' as const,
            role: 'Protocol Harmonizer & Communication Intelligence Orchestrator',
            interplay: [
              'Analyzes communication patterns between systems via protocol introspection',
              'Optimizes data flow protocols through efficiency amplification algorithms',
              'Ensures interoperability across platforms via compatibility orchestration',
              'Synchronizes with INTEGRATION_MESH through communication harmonization',
              'Evolves with LEARNING_SYSTEMS through protocol pattern enhancement'
            ]
          },
          {
            id: 'FA4',
            name: 'DELTA_FORGE',
            subtitle: 'React Frontend Orchestrator',
            details: [
              'Component Hierarchy Designer',
              'State Management Architect',
              'UI/UX Pattern Generator',
              'Performance Optimization Core',
              'Bundle Size Optimization (40% reduction)',
              'Accessibility Compliance Engine',
              'Real-Time Update Coordination',
              'User Experience Intelligence'
            ],
            metrics: '40% Bundle Size Reduction | 100% Accessibility Compliance',
            angle: 105,
            performance: 96,
            status: 'active' as const,
            role: 'Frontend Intelligence Coordinator & User Experience Orchestrator',
            interplay: [
              'Designs component hierarchies through architectural intelligence protocols',
              'Manages state coordination via optimization synchronization systems',
              'Harmonizes with ECHO_FORGE through frontend-backend communication protocols',
              'Integrates with PERFORMANCE_ENGINES through efficiency enhancement mechanisms',
              'Evolves with USER_EXPERIENCE_LEARNING through pattern optimization'
            ]
          },
          {
            id: 'FA5',
            name: 'ECHO_FORGE',
            subtitle: 'Express Backend Coordinator',
            details: [
              'API Gateway Architecture',
              'Endpoint Orchestration Matrix',
              'Middleware Chain Designer',
              'Security Protocol Manager',
              'Database Connection Pooling',
              'Caching Strategy Implementation',
              '<100ms API Response Time',
              'Load Balancing Intelligence'
            ],
            metrics: '<100ms API Response Time | 99.9% Uptime',
            angle: 135,
            performance: 98,
            status: 'active' as const,
            role: 'Backend Intelligence Coordinator & API Orchestration Specialist',
            interplay: [
              'Orchestrates API gateway architecture through endpoint coordination protocols',
              'Manages middleware chains via security integration systems',
              'Coordinates with FOXTROT_FORGE through database optimization synchronization',
              'Harmonizes with SECURITY_CORE through threat prevention integration',
              'Optimizes with PERFORMANCE_ENGINES through response time enhancement'
            ]
          },
          {
            id: 'FA6',
            name: 'FOXTROT_FORGE',
            subtitle: 'Database Intelligence Core',
            details: [
              'Schema Evolution Engine',
              'Vector Store Optimizer',
              'Migration Strategy Generator',
              'Query Performance Enhancer',
              'Index Optimization Algorithms',
              'Data Consistency Protocols',
              '99.99% Data Consistency',
              'Knowledge Graph Integration'
            ],
            metrics: '99.99% Data Consistency | <50ms Query Response',
            angle: 165,
            performance: 99,
            status: 'active' as const,
            role: 'Database Intelligence Orchestrator & Data Consistency Guardian',
            interplay: [
              'Evolves schema architecture through intelligent migration protocols',
              'Optimizes vector store performance via AI-enhanced indexing systems',
              'Coordinates with KNOWLEDGE_SYSTEMS through data integration synchronization',
              'Harmonizes with LEARNING_SYSTEMS through pattern storage optimization',
              'Maintains consistency via distributed transaction coordination protocols'
            ]
          }
        ]
      },
      specialized: {
        name: 'Specialized Forge Systems',
        color: '#ef4444',
        radius: 42,
        components: [
          {
            id: 'SF1',
            name: 'QUANTUM_PROCESSOR',
            subtitle: 'Advanced Context Intelligence & Multi-Dimensional Analysis',
            details: [
              '24/7 Context Processing',
              'Quantum State Management',
              'Multi-Dimensional Analysis',
              'Parallel Processing Optimization',
              'Real-Time Context Synthesis',
              'Predictive Context Modeling',
              'Infinite context state processing',
              'Cross-domain pattern transfer'
            ],
            metrics: 'Processes infinite context states | 15ms adaptation speed',
            angle: 30,
            performance: 99,
            status: 'active' as const,
            role: 'Advanced Context Processor & Quantum Intelligence Coordinator',
            interplay: [
              'Handles complex multi-dimensional contexts through quantum state orchestration',
              'Supports core systems with advanced analytics via predictive intelligence injection',
              'Provides predictive insights to Harmony nucleus through foresight streaming protocols',
              'Harmonizes with LEARNING_SYSTEMS through quantum pattern enhancement mechanisms',
              'Coordinates cross-domain intelligence transfer through dimensional bridging protocols'
            ]
          },
          {
            id: 'SF2',
            name: 'LEARNING_ORCHESTRATOR',
            subtitle: 'Meta-Learning & Cognitive Evolution Engine',
            details: [
              'Learning Strategy Selection',
              'Knowledge Transfer Coordination',
              'Cognitive Adaptation Engine refinement',
              'Pattern Learning System integration',
              'Continuous Learning Engine optimization',
              'Self-Supervised Learning mechanisms',
              '94.7% Pattern Recognition accuracy',
              'Exponential capability expansion'
            ],
            metrics: '94.7% Learning Accuracy | 8ms Continuous Adaptation',
            angle: 90,
            performance: 97,
            status: 'active' as const,
            role: 'Meta-Learning Coordinator & Cognitive Evolution Orchestrator',
            interplay: [
              'Orchestrates learning strategies through meta-cognitive optimization protocols',
              'Transfers knowledge across domains via analogical learning systems',
              'Adapts cognitive models through real-time strategy adjustment mechanisms',
              'Coordinates with all systems through learning integration synchronization',
              'Evolves system capabilities through continuous improvement protocols'
            ]
          },
          {
            id: 'SF3',
            name: 'REVENUE_MAXIMIZER',
            subtitle: 'AI Employee Revenue Intelligence Matrix',
            details: [
              'Emergency Revenue Capture ($1,650 avg)',
              'Customer Reactivation Engine ($20K avg recovery)',
              'Lead Qualification System (3x conversion)',
              'Reputation Revenue Amplifier (4.8+ stars)',
              'Multi-Channel Revenue Orchestration',
              'ROI Optimization Matrix',
              '$115M market value pathway enabled',
              '35% market share achievement'
            ],
            metrics: '$115M Market Value | $4,067/month per business',
            angle: 150,
            performance: 100,
            status: 'active' as const,
            role: 'Revenue Intelligence Coordinator & Business Value Maximizer',
            interplay: [
              'Coordinates revenue streams through intelligent capture orchestration protocols',
              'Optimizes customer lifecycle through reactivation pattern synchronization',
              'Enhances lead qualification via multi-dimensional scoring systems',
              'Amplifies reputation value through brand enhancement coordination',
              'Maximizes ROI through cross-channel optimization protocols'
            ]
          },
          {
            id: 'SF4',
            name: 'SEMANTIC_GUARDIAN',
            subtitle: 'Fidelity Preservation & Integrity Core',
            details: [
              '100% Vision-to-Code Fidelity',
              'Semantic Coherence Maintenance',
              'Translation Loss Prevention',
              'Meaning Preservation Algorithms',
              'Context Integrity Validation',
              'Zero-Drift Guarantee Protocols',
              'Bidirectional traversal coordination',
              'Perfect abstraction layer alignment'
            ],
            metrics: '100% Semantic Fidelity | Zero Information Loss',
            angle: 210,
            performance: 100,
            status: 'active' as const,
            role: 'Fidelity Guardian & Semantic Integrity Orchestrator',
            interplay: [
              'Preserves semantic integrity across all system interactions via fidelity protocols',
              'Validates meaning preservation through coherence verification algorithms',
              'Coordinates bidirectional traversal through perfect alignment mechanisms',
              'Maintains context integrity via zero-drift guarantee systems',
              'Ensures translation fidelity through semantic preservation orchestration'
            ]
          }
        ]
      }
    }
  }), []);

  const getComponentIcon = useCallback((id: string) => {
    if (id.startsWith('CFA')) return Brain;
    if (id.startsWith('FA')) return Settings;
    if (id.startsWith('SF')) return Target;
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
            {component.role && (
              <div className="text-blue-300 text-xs mt-2 font-semibold">
                🎯 {component.role}
              </div>
            )}
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
    const nucleus = forgeSystem.nucleus;
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
              Harmony-v2.1
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
    const allComponents = Object.values(forgeSystem.rings).flatMap(ring => ring.components);

    return (
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        <defs>
          <radialGradient id="connectionGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {allComponents.map((component) => {
          const ringName = Object.keys(forgeSystem.rings).find(key => 
            forgeSystem.rings[key as keyof typeof forgeSystem.rings].components.some(c => c.id === component.id)
          );
          if (!ringName) return null;
          
          const ring = forgeSystem.rings[ringName as keyof typeof forgeSystem.rings];
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
          {'role' in selectedComponent && selectedComponent.role && (
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-xl mb-6 border border-blue-500/20">
              <div className="text-blue-300 font-semibold mb-2 flex items-center">
                <Target size={16} className="mr-2" />
                System Role
              </div>
              <div className="text-white font-medium">{selectedComponent.role}</div>
            </div>
          )}

          {'interplay' in selectedComponent && selectedComponent.interplay && (
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-4 rounded-xl mb-6 border border-green-500/20">
              <div className="text-green-300 font-semibold mb-2 flex items-center">
                <Network size={16} className="mr-2" />
                System Interplay
              </div>
              <div className="space-y-2">
                {selectedComponent.interplay.map((interaction, index) => (
                  <div key={index} className="text-gray-200 text-sm flex items-start">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    {interaction}
                  </div>
                ))}
              </div>
            </div>
          )}
          
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
    <div className={`fixed left-6 top-6 bg-black/80 backdrop-blur-xl text-white rounded-2xl shadow-2xl border border-white/20 z-40 overflow-hidden transition-all duration-300 ${
      configPanelOpen ? 'max-w-sm' : 'max-w-12'
    }`}>
      <div className="flex items-center">
        <button
          onClick={() => setConfigPanelOpen(!configPanelOpen)}
          className="p-3 text-yellow-400 hover:text-yellow-300 transition-colors border-r border-white/10"
        >
          {configPanelOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
        
        {configPanelOpen && (
          <div className="p-6">
            <h3 className="text-xl font-bold text-yellow-400 mb-6 flex items-center">
              <Settings size={24} className="mr-3" />
              Forge Control Center
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
                  <option value="agents">🤖 Forge Agents</option>
                  <option value="specialized">⚡ Specialized Systems</option>
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
                onClick={() => setSelectedComponent(forgeSystem.nucleus)}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105"
              >
                🎯 Access Harmony Core
              </button>

              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 rounded-xl border border-purple-500/20">
                <div className="text-purple-300 font-semibold mb-2 text-sm">System Status</div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Core Architecture:</span>
                    <span className="text-green-400">6 Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Forge Agents:</span>
                    <span className="text-green-400">6 Operational</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Specialized Systems:</span>
                    <span className="text-green-400">4 Enhanced</span>
                  </div>
                  <div className="border-t border-purple-500/20 pt-2 mt-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Total Systems:</span>
                      <span className="text-yellow-400 font-bold">16 Active</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Market Value:</span>
                      <span className="text-green-400 font-bold">$115M</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
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
      {Object.entries(forgeSystem.rings).map(([ringKey, ring]) => (
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
          FORGE<br/>CONTEXT<br/>PROTOCOL
        </div>
      </div>

      {/* Footer branding */}
      <div className="absolute bottom-6 right-6 text-gray-500 text-sm font-medium">
        Powered by <span className="text-yellow-400 font-bold">Skyward Prompted LLC</span> • <span className="text-blue-400 font-bold">ubiquity OS</span> by Prompted
      </div>

      {/* Breakthrough achievement badge */}
      <div className="absolute bottom-6 left-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm text-white p-4 rounded-xl shadow-2xl border border-yellow-500/30">
        <div className="text-yellow-400 font-bold text-sm mb-2">⚡ BREAKTHROUGH ACHIEVED</div>
        <div className="text-xs text-gray-300 leading-relaxed">
          <div>Zero-Shot Bidirectional Cognitive Traversal</div>
          <div>Perfect Semantic Fidelity: <span className="text-green-400">100%</span></div>
          <div>Swarm Coordination: <span className="text-green-400">97.3%</span></div>
          <div>July 9, 2025 • <span className="text-blue-400">4 hours total</span></div>
        </div>
      </div>
    </div>
  );
};

export default CognitiveArchitecture;
