import React, { useMemo, useState } from 'react';
import { Search, Activity, ChevronRight, Eye } from 'lucide-react';
import { DrugEntry } from '../types/formulary';

export default function DiseaseIndexDashboard({
  formularyData,
  onSelectDrug,
  onClose
}: {
  formularyData: DrugEntry[];
  onSelectDrug: (d: DrugEntry) => void;
  onClose: () => void;
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDisease, setSelectedDisease] = useState<string | null>(null);

  const diseasesMap = useMemo(() => {
    const map = new Map<string, DrugEntry[]>();
    formularyData.forEach(drug => {
      drug.indications.forEach(ind => {
        const key = ind.trim();
        if (!key) return;
        if (!map.has(key)) {
          map.set(key, []);
        }
        map.get(key)!.push(drug);
      });
    });
    return map;
  }, [formularyData]);

  const allDiseases = useMemo(() => {
    return Array.from(diseasesMap.keys()).sort((a, b) => a.localeCompare(b));
  }, [diseasesMap]);

  const filteredDiseases = useMemo(() => {
    if (!searchQuery) return allDiseases;
    const q = searchQuery.toLowerCase();
    return allDiseases.filter(d => d.toLowerCase().includes(q));
  }, [allDiseases, searchQuery]);

  return (
    <div className="max-w-5xl mx-auto w-full pb-16">
      <div className="text-[10px] md:text-[11px] text-gray-400 font-medium mb-6 flex items-center gap-2 flex-wrap cursor-pointer" onClick={() => setSelectedDisease(null)}>
        <span className="uppercase hover:text-gray-600 transition-colors" onClick={onClose}>DRUG GUIDE NEPAL</span>
        <ChevronRight className="w-3 h-3" />
        <span className="uppercase hover:text-gray-600 transition-colors">DISEASE INDEX</span>
        {selectedDisease && (
          <>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#005A9C] uppercase">{selectedDisease}</span>
          </>
        )}
      </div>

      {!selectedDisease && (
        <div className="mb-6 relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search diseases or indications..." 
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#005A9C] focus:border-transparent outline-none text-sm shadow-sm"
          />
        </div>
      )}

      {selectedDisease ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
          <div className="bg-[#005A9C] p-4 text-white">
            <h3 className="font-bold text-lg">{selectedDisease}</h3>
            <p className="text-white/80 text-sm">Drugs indicated for this condition</p>
          </div>
          <div className="p-0 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 border-b border-gray-200 text-gray-600">
                <tr>
                  <th className="p-4 font-semibold w-1/3">Drug Name</th>
                  <th className="p-4 font-semibold w-1/3">Class / Route</th>
                  <th className="p-4 font-semibold w-1/3">Key Safety & Pharmacy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {diseasesMap.get(selectedDisease)?.map((drug, idx) => (
                  <tr key={idx} className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="p-4 border-r border-gray-200/50 align-top">
                      <div className="font-bold text-gray-900 text-base">{drug.genericName}</div>
                      <div className="text-xs text-gray-500 mt-1">{drug.therapeuticClass}</div>
                      <button 
                        onClick={() => onSelectDrug(drug)} 
                        className="text-blue-600 font-semibold hover:underline mt-3 inline-flex items-center gap-1"
                      >
                        <Eye className="w-3 h-3" /> View Full Profile
                      </button>
                    </td>
                    <td className="p-4 border-r border-gray-200/50 align-top text-gray-700">
                      <div><span className="font-semibold text-gray-900">Route:</span> {drug.route || 'Variable'}</div>
                      {drug.dosing.adult && (
                        <div className="mt-2 text-xs border-t border-gray-100 pt-2 text-gray-600 line-clamp-3">
                          <span className="font-semibold text-gray-800">Adult:</span> {drug.dosing.adult}
                        </div>
                      )}
                    </td>
                    <td className="p-4 align-top">
                      <div className="space-y-2 text-xs">
                        {drug.pharmacy?.priceNPR && (
                          <div className="font-semibold text-green-700">Price: {drug.pharmacy.priceNPR}</div>
                        )}
                        {drug.safety?.adr && drug.safety.adr.length > 0 && (
                          <div className="text-gray-500 line-clamp-2">
                            <span className="font-semibold text-gray-700">ADR:</span> {drug.safety.adr.join(', ')}
                          </div>
                        )}
                        {drug.safety?.pregnancyLactation && (
                          <div className="text-gray-500 line-clamp-1">
                            <span className="font-semibold text-gray-700">Pregnancy:</span> {drug.safety.pregnancyLactation}
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-white border text-gray-700 border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-bold text-gray-800 text-lg flex items-center gap-2">
              <Activity className="w-5 h-5 text-[#005A9C]" />
              Index by Disease / Indication
            </h3>
            <span className="text-sm font-semibold bg-blue-100 text-[#005A9C] px-2 py-0.5 rounded-full">
              {filteredDiseases.length} Found
            </span>
          </div>
          <div className="p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {filteredDiseases.map(disease => (
              <button
                key={disease}
                onClick={() => setSelectedDisease(disease)}
                className="text-left px-4 py-3 hover:bg-blue-50 hover:text-[#005A9C] rounded-lg transition-colors flex flex-col justify-center group border border-transparent hover:border-blue-100"
              >
                <span className="text-sm font-medium text-gray-700 group-hover:text-[#005A9C] line-clamp-1">{disease}</span>
                <span className="text-xs text-gray-400 group-hover:text-blue-500 mt-1">
                  {diseasesMap.get(disease)?.length} Drug(s)
                </span>
              </button>
            ))}
            {filteredDiseases.length === 0 && (
              <div className="col-span-full p-8 text-center text-gray-500">
                No diseases found matching your search.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
