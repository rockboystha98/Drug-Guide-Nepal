import React from 'react';

export interface ProtocolOption {
  label: string;
  nextId?: string;
  action?: string;
}

export interface ProtocolNode {
  id: string;
  title: string;
  type: 'decision' | 'action' | 'info' | 'endpoint';
  content: string;
  options?: ProtocolOption[];
}

export interface Protocol {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  component?: React.ComponentType<any>;
  nodes?: Record<string, ProtocolNode>;
  startNodeId?: string;
  markdownContent?: string;
  mermaidChart?: string;
}
