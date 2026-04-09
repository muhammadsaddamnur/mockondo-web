import {
  Server,
  Radio,
  HardDrive,
  FileUp,
  WifiOff,
  Braces,
  Send,
  Bot,
  // Terminal,
  Code2,
  ChevronRight,
} from 'lucide-react';

export const sections = [
  { id: 'getting-started', label: 'Getting Started', icon: ChevronRight },
  { id: 'http-server', label: 'HTTP Mock Server', icon: Server },
  { id: 'websocket-server', label: 'WebSocket Server', icon: Radio },
  { id: 'mock-storage', label: 'Mock Storage (S3)', icon: HardDrive },
  { id: 'interpolation', label: 'Interpolation System', icon: Braces },
  { id: 'pagination', label: 'Mock Pagination', icon: FileUp },
  { id: 'http-client', label: 'HTTP & WS Client', icon: Send },
  { id: 'api-specs', label: 'API Specifications', icon: FileUp },
  { id: 'code-gen', label: 'Code Generation', icon: Code2 },
  // { id: 'request-terminal', label: 'Request Terminal', icon: Terminal },
  { id: 'ai-agent', label: 'AI Agent Integration', icon: Bot },
  { id: 'offline', label: 'Offline First', icon: WifiOff },
];
