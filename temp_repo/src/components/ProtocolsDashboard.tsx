import React, { useState } from 'react';
import { Search, Activity, ChevronRight, Share2, Printer, AlignLeft } from 'lucide-react';
import { protocolList } from '../data/protocolsList';
import { protocolList2 } from '../data/protocolsList2';
import { protocolList3 } from '../data/protocolsList3';
import { protocolList4 } from '../data/protocolsList4';
import { protocolList5 } from '../data/protocolsList5';
import { protocolList6 } from '../data/protocolsList6';
import { Protocol } from '../types/protocols';
import InteractiveProtocolViewer from './InteractiveProtocolViewer';

const allProtocols: Protocol[] = [...protocolList, ...protocolList2, ...protocolList3, ...protocolList4, ...protocolList5, ...protocolList6];

interface Props {
  onClose: () => void;
  onDrugClick?: (drugName: string) => void;
  onAction?: (action: string) => void;
}

export default function ProtocolsDashboard({ onClose, onDrugClick, onAction }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProtocol, setSelectedProtocol] = useState<Protocol | null>(null);

  const filteredProtocols = allProtocols.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProtocolSelect = (protocol: Protocol) => {
    if (protocol.id === 'prot-sepsis:2026') {
      onAction?.('sepsis');
    } else if (protocol.id === 'prot-ntp') {
      onAction?.('ntp');
    } else if (protocol.id === 'prot-hypertension') {
      onAction?.('hypertension');
    } else {
      setSelectedProtocol(protocol);
    }
  };

  if (selectedProtocol) {
    return <InteractiveProtocolViewer protocol={selectedProtocol} onClose={() => setSelectedProtocol(null)} onDrugClick={onDrugClick} />;
  }

  return (
    <div className="max-w-6xl mx-auto w-full pb-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Clinical Protocols & Flowcharts</h2>
        <p className="text-gray-500">Interactive clinical algorithms, dosing calculators, and evidence-based assessment pathways.</p>
      </div>

      <div className="mb-6">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search protocols by name, disease, or tags..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl py-3.5 px-12 text-gray-900 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium"
          />
          <Search className="w-5 h-5 absolute left-4 top-3.5 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProtocols.map(protocol => (
          <div 
            key={protocol.id} 
            onClick={() => handleProtocolSelect(protocol)}
            className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#1A73E8] hover:shadow-md cursor-pointer transition-all flex flex-col h-full group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#1A73E8] group-hover:bg-[#1A73E8] group-hover:text-white transition-colors">
                {protocol.nodes ? <AlignLeft className="w-5 h-5" /> : <Activity className="w-5 h-5" />}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                {protocol.category}
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2 group-hover:text-[#005A9C]">{protocol.title}</h3>
            <p className="text-sm text-gray-600 line-clamp-3 mb-4 flex-grow">{protocol.description}</p>
            <div className="flex flex-wrap gap-1 mt-auto">
              {protocol.tags.slice(0, 3).map(tag => (
                <span key={tag} className="text-[10px] font-medium px-1.5 py-0.5 bg-gray-50 border border-gray-100 text-gray-500 rounded">
                  {tag}
                </span>
              ))}
              {protocol.tags.length > 3 && (
                <span className="text-[10px] font-medium px-1.5 py-0.5 bg-gray-50 border border-gray-100 text-gray-400 rounded">
                  +{protocol.tags.length - 3}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredProtocols.length === 0 && (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-200 mt-4">
          <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-900">No protocols found</h3>
          <p className="text-gray-500 mt-1">Try entering a different search term or disease.</p>
        </div>
      )}
    </div>
  );
}
