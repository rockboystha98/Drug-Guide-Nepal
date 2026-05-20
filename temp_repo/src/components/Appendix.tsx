import React from 'react';

export default function AppendixView() {
  return (
    <div className="max-w-4xl mx-auto w-full space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-bold text-[#005A9C]">Appendices & References</h2>
        <p className="text-gray-500 text-sm mt-1">Sourced guidelines and references utilized in the compiling of this application.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-gray-800">General References & Citations</h3>
        <p className="text-sm text-gray-600">The antimicrobial and tuberculosis regimens in this tool are synthesized exclusively from the following government-endorsed clinical guidelines:</p>
        
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
          <li><strong>National Antimicrobial Treatment Guidelines, 2023</strong> (Government of Nepal, Ministry of Health and Population, Department of Drug Administration)</li>
          <li><strong>Clinical Handbook of TB management Protocols 2024</strong> (Government of Nepal, Ministry of Health and Population, National Tuberculosis Control Center)</li>
          <li><strong>National Guideline on Drug Resistant TB Management, 2023</strong></li>
          <li><strong>WHO guidelines on tuberculosis. Module 4 - DR TB Treatment 2022 update</strong></li>
          <li><strong>WHO guidelines on tuberculosis. Module 2: screening – systematic screening for tuberculosis disease, 2021</strong></li>
          <li><strong>National Tuberculosis Preventive Treatment Protocol, 2024</strong></li>
          <li><strong>Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2026</strong></li>
          <li><strong>Cockcroft-Gault Equation for Creatinine Clearance Calculation</strong></li>
        </ul>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">WHO AWaRe Classification</h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          The drug dosage cards in this application include colored pill indicators (Access, Watch, Reserve) denoting their WHO AWaRe classification. This framework is designed to emphasize antimicrobial stewardship:
        </p>
        <ul className="text-sm text-slate-600 space-y-2 mt-2">
          <li><span className="font-semibold text-emerald-700">Access:</span> First and second choice antibiotics for common infections. They should be widely available and carry a lower risk of causing resistance.</li>
          <li><span className="font-semibold text-amber-700">Watch:</span> Antibiotics with a higher resistance potential. Recommended as specific choices for a limited number of infections and should be prioritized as key targets of stewardship programs and monitoring.</li>
          <li><span className="font-semibold text-rose-700">Reserve:</span> "Last resort" antibiotics that should be highly restricted and used only for confirmed or suspected multi-drug resistant (MDR) infections.</li>
        </ul>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Common Clinical Abbreviations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <ul className="text-sm text-slate-600 space-y-2">
            <li><span className="font-semibold text-slate-800">PO:</span> Per Os (By mouth)</li>
            <li><span className="font-semibold text-slate-800">IV:</span> Intravenous</li>
            <li><span className="font-semibold text-slate-800">IM:</span> Intramuscular</li>
            <li><span className="font-semibold text-slate-800">SC:</span> Subcutaneous</li>
            <li><span className="font-semibold text-slate-800">OD / QD:</span> Once daily</li>
            <li><span className="font-semibold text-slate-800">BD / BID:</span> Twice daily</li>
            <li><span className="font-semibold text-slate-800">TDS / TID:</span> Three times a day</li>
            <li><span className="font-semibold text-slate-800">QID:</span> Four times a day</li>
          </ul>
          <ul className="text-sm text-slate-600 space-y-2">
            <li><span className="font-semibold text-slate-800">ADR:</span> Adverse Drug Reaction</li>
            <li><span className="font-semibold text-slate-800">MDR:</span> Multi-Drug Resistant</li>
            <li><span className="font-semibold text-slate-800">MRSA:</span> Methicillin-Resistant Staphylococcus aureus</li>
            <li><span className="font-semibold text-slate-800">NNF:</span> Nepal National Formulary</li>
            <li><span className="font-semibold text-slate-800">NATG:</span> National Antimicrobial Treatment Guidelines</li>
            <li><span className="font-semibold text-slate-800">NTP:</span> National Tuberculosis Program</li>
            <li><span className="font-semibold text-slate-800">Q4H / Q6H / Q8H:</span> Every 4, 6, or 8 hours</li>
            <li><span className="font-semibold text-slate-800">PRN:</span> Pro re nata (As needed)</li>
          </ul>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-amber-900 border-b border-amber-200 pb-2">Medical Disclaimer</h3>
        <p className="text-sm text-amber-800 font-medium">
          Dosing, duration, and choice of drug indicated in this application are for <strong>reference purposes only</strong>.
        </p>
        <p className="text-sm text-amber-800">
          Clinical consultation and patient individualization are strictly required for each medication. The developers and contributors assume no legal liability for any adverse clinical outcomes, prescribing errors, or legal issues arising from the use of this digital application. All TB medications must be sourced and managed through the official national supply chain.
        </p>
      </div>
    </div>
  );
}
