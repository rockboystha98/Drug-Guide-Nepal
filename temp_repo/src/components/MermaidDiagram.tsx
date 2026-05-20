import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import { Maximize2, Minimize2 } from 'lucide-react';

interface Props {
  chart: string;
}

export default function MermaidDiagram({ chart }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'default',
      securityLevel: 'loose',
      fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
      flowchart: {
        htmlLabels: true,
        curve: 'basis'
      }
    });

    const renderChart = async () => {
      try {
        if (!containerRef.current) return;
        const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
        const { svg } = await mermaid.render(id, chart);
        setSvgContent(svg);
        setError(null);
      } catch (err: any) {
        console.error('Mermaid rendering error:', err);
        setError(err?.message || 'Failed to render flowchart');
      }
    };

    if (chart) {
      renderChart();
    }
  }, [chart]);

  const DiagramContent = () => (
    <div className="relative group flex items-center justify-center w-full h-full p-4 overflow-auto bg-gray-50 rounded-xl">
      {error ? (
        <div className="text-red-500 text-sm p-4 bg-red-50 rounded-lg border border-red-200">
          {error}
        </div>
      ) : (
        <div 
          className="w-full h-full flex items-center justify-center min-h-[300px]"
          dangerouslySetInnerHTML={{ __html: svgContent }} 
        />
      )}
    </div>
  );

  return (
    <>
      <div className="relative bg-white border border-gray-200 rounded-xl mb-6 shadow-sm overflow-hidden">
        <div className="absolute top-2 right-2 z-10 flex gap-2">
          <button
            onClick={() => setIsFullscreen(true)}
            className="p-2 bg-white/90 backdrop-blur rounded-lg border border-gray-200 shadow-sm text-gray-600 hover:text-blue-600 hover:border-blue-200 transition-colors"
            title="Expand flowchart"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
        <DiagramContent />
      </div>

      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm flex flex-col">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white">
            <h3 className="font-bold text-gray-900">Algorithm Flowchart</h3>
            <button
              onClick={() => setIsFullscreen(false)}
              className="p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200"
            >
              <Minimize2 className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 overflow-auto">
            <DiagramContent />
          </div>
        </div>
      )}
    </>
  );
}
