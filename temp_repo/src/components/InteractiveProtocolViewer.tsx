import React, { useState } from 'react';
import { Protocol, ProtocolNode } from '../types/protocols';
import { ChevronRight, ArrowLeft, RefreshCcw, Activity, Network } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import MermaidDiagram from './MermaidDiagram';

interface Props {
  protocol: Protocol;
  onClose: () => void;
  onDrugClick?: (drugName: string) => void;
  hideHeader?: boolean;
}

export default function InteractiveProtocolViewer({ protocol, onClose, onDrugClick, hideHeader }: Props) {
  const [currentNodeId, setCurrentNodeId] = useState<string | undefined>(protocol.startNodeId);
  const [history, setHistory] = useState<string[]>([]);
  const [viewTab, setViewTab] = useState<'interactive' | 'flowchart'>(protocol.mermaidChart && !protocol.nodes && !protocol.markdownContent && !protocol.component ? 'flowchart' : 'interactive');

  const handleNext = (nextId: string | undefined) => {
    if (nextId && protocol.nodes && protocol.nodes[nextId]) {
      setHistory(prev => [...prev, currentNodeId as string]);
      setCurrentNodeId(nextId);
    }
  };

  const handleBack = () => {
    if (history.length > 0) {
      const prev = history[history.length - 1];
      setHistory(history.slice(0, -1));
      setCurrentNodeId(prev);
    }
  };

  const handleReset = () => {
    setCurrentNodeId(protocol.startNodeId);
    setHistory([]);
  };

  const markdownComponents = {
    a: ({node, ...props}: any) => {
      if (props.href?.startsWith('#drug-')) {
        const drugName = props.href.replace('#drug-', '');
        return (
          <button 
            type="button"
            onClick={(e) => { e.preventDefault(); onDrugClick?.(drugName); }} 
            className="text-blue-600 font-bold hover:underline bg-blue-50 px-1 py-0.5 rounded transition-colors inline-block my-0.5"
          >
            💊 {props.children}
          </button>
        );
      }
      return <a {...props} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" />;
    }
  };

  const renderNode = (nodeId: string | undefined, isHistoric: boolean, nextNodeId?: string, historyIndex?: number) => {
    if (!nodeId || !protocol.nodes) return null;
    const node = protocol.nodes[nodeId];

    return (
      <div key={historyIndex !== undefined ? `history-${historyIndex}-${nodeId}` : `current-${nodeId}`} className={`bg-white rounded-xl shadow-sm border transition-all ${isHistoric ? 'border-gray-200 opacity-80' : 'border-indigo-200 ring-4 ring-indigo-50'} overflow-hidden animate-in slide-in-from-bottom-4 relative`}>
        {isHistoric && (
          <div className="absolute top-4 right-4 z-10">
            <button 
              onClick={() => {
                if (historyIndex !== undefined) {
                  setHistory(history.slice(0, historyIndex));
                  setCurrentNodeId(nodeId);
                } else {
                  const index = history.indexOf(nodeId);
                  if (index !== -1) {
                    setHistory(history.slice(0, index));
                    setCurrentNodeId(nodeId);
                  }
                }
              }}
              className="text-xs text-indigo-600 hover:underline bg-indigo-50 px-2 py-1 rounded"
            >
              Edit Step
            </button>
          </div>
        )}
        <div className={`p-4 border-b ${
          node.type === 'decision' ? 'bg-amber-50 border-amber-100' :
          node.type === 'action' ? 'bg-blue-50 border-blue-100' :
          node.type === 'endpoint' ? 'bg-green-50 border-green-100' :
          'bg-gray-50 border-gray-200'
        }`}>
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
              node.type === 'decision' ? 'bg-amber-200 text-amber-800' :
              node.type === 'action' ? 'bg-blue-200 text-blue-800' :
              node.type === 'endpoint' ? 'bg-green-200 text-green-800' :
              'bg-gray-200 text-gray-800'
            }`}>
              {node.type}
            </span>
          </div>
          <h3 className={`text-xl font-bold ${isHistoric ? 'text-gray-700' : 'text-gray-900'}`}>{node.title}</h3>
        </div>
        
        <div className="p-6">
          <div className={`prose prose-sm max-w-none markdown-body ${isHistoric ? 'text-gray-600' : 'text-gray-800'}`}>
            <ReactMarkdown components={markdownComponents}>{node.content}</ReactMarkdown>
          </div>

          {node.options && node.options.length > 0 && (
            <div className="flex flex-col gap-3 mt-6">
              {!isHistoric && <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Select Next Step</h4>}
              {node.options.map((opt, i) => {
                const isSelected = isHistoric && opt.nextId === nextNodeId;
                if (isHistoric && !isSelected) return null; // Hide unselected options in history

                return (
                  <button
                    key={i}
                    disabled={isHistoric}
                    onClick={() => handleNext(opt.nextId)}
                    className={`w-full text-left p-4 rounded-lg border flex items-center justify-between ${
                      isHistoric 
                        ? 'bg-blue-50 border-blue-200 text-blue-900 cursor-default'
                        : 'border-gray-200 hover:border-[#1A73E8] hover:bg-blue-50 transition-colors shadow-sm bg-white group cursor-pointer'
                    }`}
                  >
                    <span className={`font-semibold ${isHistoric ? 'text-blue-900' : 'text-gray-800 group-hover:text-[#005A9C]'}`}>{opt.label}</span>
                    {!isHistoric && opt.nextId && <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#1A73E8]" />}
                  </button>
                );
              })}
            </div>
          )}
          
          {node.type === 'endpoint' && !isHistoric && (
            <div className="mt-8 flex justify-center">
              <button onClick={handleReset} className="flex items-center gap-2 text-[#005A9C] hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition-colors">
                <RefreshCcw className="w-4 h-4" /> Start Over
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto w-full pb-20">
      {!hideHeader && (
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button onClick={onClose} className="p-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 leading-tight">{protocol.title}</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{protocol.category}</span>
                <span className="text-gray-300">•</span>
                <span className="text-xs text-[#005A9C] bg-blue-50 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                  <Activity className="w-3 h-3" /> Protocol
                </span>
              </div>
            </div>
          </div>

          {protocol.mermaidChart && (protocol.nodes || protocol.markdownContent || protocol.component) && (
            <div className="flex items-center bg-gray-100 p-1 rounded-lg border border-gray-200 w-fit shrink-0">
              <button
                onClick={() => setViewTab('interactive')}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors flex items-center gap-1.5 ${
                  viewTab === 'interactive' ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Activity className="w-4 h-4" /> Default
              </button>
              <button
                onClick={() => setViewTab('flowchart')}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors flex items-center gap-1.5 ${
                  viewTab === 'flowchart' ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Network className="w-4 h-4" /> Flowchart
              </button>
            </div>
          )}
        </div>
      )}

      {viewTab === 'flowchart' && protocol.mermaidChart ? (
        <MermaidDiagram chart={protocol.mermaidChart} />
      ) : protocol.nodes && currentNodeId ? (
        <div className="flex flex-col gap-6">
          {history.map((nodeId, index) => {
            const nextNodeId = index < history.length - 1 ? history[index + 1] : currentNodeId;
            return renderNode(nodeId, true, nextNodeId, index);
          })}
          {renderNode(currentNodeId, false, undefined, history.length)}
        </div>
      ) : protocol.markdownContent ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
          <div className="prose prose-sm md:prose-base max-w-none text-gray-800 markdown-body">
            <ReactMarkdown components={markdownComponents}>{protocol.markdownContent}</ReactMarkdown>
          </div>
        </div>
      ) : protocol.component ? (
        <protocol.component onDrugClick={onDrugClick} />
      ) : protocol.mermaidChart ? (
        <MermaidDiagram chart={protocol.mermaidChart} />
      ) : (
        <div className="p-8 text-center text-gray-500 bg-white rounded-xl shadow-sm border border-gray-200">
          No protocol data available.
        </div>
      )}
    </div>
  );
}
