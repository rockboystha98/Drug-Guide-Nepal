import React, { useState, useMemo } from 'react';
import { Search, Calculator, ArrowLeft, ChevronRight, Activity, Beaker, Brain, Heart, Stethoscope, FileText, Check, AlertCircle } from 'lucide-react';
import { calculators, CalculatorDef, CalculatorResult } from '../data/calculatorsList';

interface Props {
  onClose: () => void;
}

const CategoryIcons: Record<string, React.ReactNode> = {
  'Cardiology': <Heart className="w-5 h-5 text-red-500" />,
  'Pulmonology': <Activity className="w-5 h-5 text-teal-500" />,
  'Infectious Disease': <Beaker className="w-5 h-5 text-purple-500" />,
  'Neurology': <Brain className="w-5 h-5 text-blue-500" />,
  'Renal': <Beaker className="w-5 h-5 text-amber-500" />
};

export default function CalculatorsDashboard({ onClose }: Props) {
  const [search, setSearch] = useState('');
  const [selectedCalc, setSelectedCalc] = useState<CalculatorDef | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(calculators.map(c => c.category));
    return Array.from(cats).sort();
  }, []);

  const filteredCalculators = useMemo(() => {
    if (!search) return calculators;
    const lowerSearch = search.toLowerCase();
    return calculators.filter(c => 
      c.title.toLowerCase().includes(lowerSearch) || 
      c.description.toLowerCase().includes(lowerSearch) ||
      c.category.toLowerCase().includes(lowerSearch)
    );
  }, [search]);

  // Group by category
  const grouped = useMemo(() => {
    const map = new Map<string, CalculatorDef[]>();
    filteredCalculators.forEach(c => {
      if (!map.has(c.category)) map.set(c.category, []);
      map.get(c.category)!.push(c);
    });
    return map;
  }, [filteredCalculators]);

  if (selectedCalc) {
    return <CalculatorView calculator={selectedCalc} onClose={() => setSelectedCalc(null)} />;
  }

  return (
    <div className="max-w-5xl mx-auto w-full pb-20">
      {/* Header */}
      <div className="bg-white border text-gray-700 border-gray-200 rounded-xl p-6 shadow-sm mb-6 flex items-center justify-between">
         <div className="flex items-center gap-3">
           <div className="bg-indigo-100 p-2.5 rounded-xl">
             <Calculator className="w-8 h-8 text-indigo-700" />
           </div>
           <div>
             <h2 className="text-2xl font-bold text-[#005A9C]">Clinical Calculators</h2>
             <p className="text-sm text-gray-500">Medical calculators, scores, and risk assessment tools</p>
           </div>
         </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search calculators (e.g., CHA2DS2, GCS, Wells)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1A73E8] bg-white shadow-sm text-gray-700"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
        </div>
      </div>

      {search ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCalculators.map(calc => (
            <button
              key={calc.id}
              onClick={() => setSelectedCalc(calc)}
              className="text-left bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:border-indigo-400 hover:shadow-md transition-all group flex items-start gap-4"
            >
              <div className="mt-1 bg-gray-50 p-2 rounded-lg text-gray-500 group-hover:text-indigo-600 transition-colors">
                {CategoryIcons[calc.category] || <Calculator className="w-5 h-5 text-indigo-500" />}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 group-hover:text-indigo-700 mb-1">{calc.title}</h3>
                <span className="inline-block px-1.5 py-0.5 rounded bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider mb-2">
                  {calc.category}
                </span>
                <p className="text-xs text-gray-500 line-clamp-2">{calc.description}</p>
              </div>
            </button>
          ))}
          {filteredCalculators.length === 0 && (
            <div className="col-span-2 text-center py-12 text-gray-500">
              No calculators found.
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-8">
          {categories.map(cat => {
            const calcs = grouped.get(cat);
            if (!calcs || calcs.length === 0) return null;
            return (
              <div key={cat} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-gray-50 border-b border-gray-200 px-5 py-3 flex items-center gap-2">
                  {CategoryIcons[cat] || <Calculator className="w-4 h-4 text-gray-500" />}
                  <h3 className="font-bold text-gray-800 uppercase tracking-wider text-sm">{cat}</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {calcs.map((calc, i) => (
                    <button
                      key={calc.id}
                      onClick={() => setSelectedCalc(calc)}
                      className="w-full text-left px-5 py-4 hover:bg-gray-50 transition-colors flex items-center justify-between group"
                    >
                      <div className="pr-4">
                        <h4 className="font-bold text-[#005A9C] group-hover:text-blue-700">{calc.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{calc.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#1A73E8] shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// Subcomponent for viewing a single calculator
function CalculatorView({ calculator, onClose }: { calculator: CalculatorDef, onClose: () => void }) {
  const [values, setValues] = useState<Record<string, any>>({});

  const handleFieldChange = (fieldId: string, value: any) => {
    setValues(prev => ({ ...prev, [fieldId]: value }));
  };

  const result: CalculatorResult | null = useMemo(() => {
    try {
      return calculator.calculate(values);
    } catch (e) {
      return null;
    }
  }, [values, calculator]);

  return (
    <div className="max-w-4xl mx-auto w-full pb-20">
      <div className="mb-4">
        <button 
          onClick={onClose}
          className="flex items-center gap-1 text-[#005A9C] hover:underline font-medium text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Calculators
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side: Inputs */}
        <div className="flex-1 p-6 md:p-8 md:border-r border-gray-200">
          <div className="mb-6">
            <span className="inline-block px-2 py-0.5 rounded bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-2">
              {calculator.category}
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{calculator.title}</h2>
            <p className="text-gray-600">{calculator.description}</p>
          </div>

          <div className="space-y-6">
            {calculator.fields.map(field => (
              <div key={field.id} className="pt-2 border-t border-gray-100 first:border-t-0 first:pt-0">
                <label className="block font-bold text-gray-800 mb-2">
                  {field.label}
                </label>
                
                {field.type === 'boolean' && (
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleFieldChange(field.id, true)}
                      className={`flex-1 py-2 px-4 rounded-lg font-medium border transition-colors ${
                        values[field.id] === true 
                        ? 'bg-blue-50 border-blue-600 text-blue-700 shadow-sm' 
                        : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleFieldChange(field.id, false)}
                      className={`flex-1 py-2 px-4 rounded-lg font-medium border transition-colors ${
                        values[field.id] === false 
                        ? 'bg-blue-50 border-blue-600 text-blue-700 shadow-sm' 
                        : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      No
                    </button>
                  </div>
                )}

                {field.type === 'radio' && field.options && (
                  <div className="flex flex-wrap gap-2">
                    {field.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleFieldChange(field.id, opt.value)}
                        className={`flex-1 min-w-[100px] py-2 px-4 rounded-lg font-medium border transition-colors ${
                          values[field.id] === opt.value
                          ? 'bg-blue-50 border-blue-600 text-blue-700 shadow-sm' 
                          : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}

                {field.type === 'select' && field.options && (
                  <select
                    className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={values[field.id] ?? ''}
                    onChange={(e) => handleFieldChange(field.id, e.target.value === '' ? '' : e.target.value)}
                  >
                    <option value="" disabled>Select an option...</option>
                    {field.options.map((opt, i) => (
                      <option key={i} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                )}

                {field.type === 'number' && (
                  <div className="relative max-w-xs">
                    <input
                      type="number"
                      step="any"
                      min={field.min}
                      max={field.max}
                      placeholder={field.placeholder || "Enter value"}
                      value={values[field.id] ?? ''}
                      onChange={(e) => handleFieldChange(field.id, e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-16"
                    />
                    {field.unit && (
                      <div className="absolute right-3 top-3 text-gray-400 font-medium select-none pointer-events-none">
                        {field.unit}
                      </div>
                    )}
                  </div>
                )}

              </div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-end">
             <button 
               onClick={() => setValues({})} 
               className="text-sm text-gray-500 hover:text-gray-800 font-medium"
             >
               Reset All
             </button>
          </div>
        </div>

        {/* Right Side: Results */}
        <div className="w-full md:w-80 bg-gray-50 p-6 md:p-8 flex flex-col">
           <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
             <Activity className="w-5 h-5 text-indigo-600" /> 
             Result
           </h3>
           
           <div className="flex-1">
             {result && result.interpretation !== 'Please provide all values.' ? (
               <div className="space-y-4">
                 <div className="bg-white border-2 border-indigo-100 rounded-xl p-5 shadow-sm">
                   <div className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-1">Score</div>
                   <div className="text-xl font-bold text-gray-900 mb-2">{result.interpretation}</div>
                 </div>
                 
                 {result.action && (
                   <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                     <h4 className="font-bold text-blue-900 flex items-center gap-1 mb-2">
                       <Check className="w-4 h-4" /> Recommendation
                     </h4>
                     <p className="text-blue-800 text-sm leading-relaxed whitespace-pre-wrap">{result.action}</p>
                   </div>
                 )}
               </div>
             ) : (
               <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 mb-10">
                 <Calculator className="w-12 h-12 mb-3 text-gray-300" />
                 <p className="text-sm">Select options to calculate.</p>
                 {result?.interpretation === 'Please provide all values.' && (
                    <p className="text-xs text-red-400 mt-2">Please provide all values.</p>
                 )}
               </div>
             )}
           </div>
           
           <div className="mt-8 text-xs text-gray-400 bg-white p-3 rounded border border-gray-200">
             <AlertCircle className="w-4 h-4 mb-1 text-gray-400" />
             Calculations must be re-checked and should not be used alone to guide patient care. The clinical outcome is fully the responsibility of the treating healthcare professional.
           </div>
        </div>

      </div>
    </div>
  );
}
