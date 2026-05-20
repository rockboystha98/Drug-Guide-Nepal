import { Search, ChevronRight, Activity, Menu, X, ActivitySquare, Plus, AlertTriangle, Bug, Stethoscope, Wind, Brain, Baby, ShieldAlert, Droplet, Eye, Thermometer, Syringe, Moon, Skull, Beaker, Pill, ShieldCheck, ArrowLeft, Settings, User as UserIcon, LogOut, AlignLeft, Calculator } from "lucide-react";
import { useMemo, useState, useEffect, useRef } from "react";
import { auth, loginWithGoogle, logoutUser, onAuthStateChanged, FirebaseUser, db } from "./firebaseProvider";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { categories, infections, Infection, mdroGuidelines } from "./data/guidelines";
import { renalAdjustments, noRenalAdjustmentDrugs, RenalRule } from "./data/renal_adjustments";
import { therapeuticCategories, formularyData } from "./data/formularyData";
import { DrugEntry } from "./types/formulary";
import NtpDashboard from "./components/NtpDashboard";
import AppendixView from "./components/Appendix";
import SepsisDashboard from "./components/SepsisDashboard";
import DiseaseIndexDashboard from "./components/DiseaseIndexDashboard";
import DrugView from "./components/DrugView";
import ProtocolsDashboard from "./components/ProtocolsDashboard";
import { protocolList } from "./data/protocolsList";
import { protocolList2 } from "./data/protocolsList2";
import { protocolList3 } from "./data/protocolsList3";
import { protocolList4 } from "./data/protocolsList4";

import HypertensionDashboard from "./components/HypertensionDashboard";
import CalculatorsDashboard from "./components/CalculatorsDashboard";
import { calculators } from "./data/calculatorsList";

const allProtocols = [...protocolList, ...protocolList2, ...protocolList3, ...protocolList4];

type ViewMode = 'home' | 'sepsis' | 'ntp' | 'hypertension' | 'appendix' | 'infections' | 'diseases' | 'drugView' | 'category' | 'search' | 'settings' | 'login' | 'protocols' | 'calculators';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>(() => {
    const saved = localStorage.getItem('app_default_view');
    return saved ? saved as ViewMode : 'home';
  });
  const [viewModeHistory, setViewModeHistory] = useState<ViewMode[]>([]);
  
  const navigateTo = (newMode: ViewMode) => {
    if (newMode !== viewMode) {
      if (scrollContainerRef.current) {
        scrollPositions.current[viewMode] = scrollContainerRef.current.scrollTop;
      }
      setViewModeHistory(prev => [...prev, viewMode]);
      setViewMode(newMode);
    }
  };

  const [isPediatric, setIsPediatric] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");
  const [selectedDrug, setSelectedDrug] = useState<DrugEntry | null>(null);
  
  const [patientWeight, setPatientWeight] = useState<number>(70);
  const [patientAge, setPatientAge] = useState<number | ''>(45);
  const [patientSCr, setPatientSCr] = useState<number | ''>(1.0);
  const [patientSex, setPatientSex] = useState<'M' | 'F'>('M');
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showMdro, setShowMdro] = useState(false);
  
  const searchRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollPositions = useRef<Record<string, number>>({});

  const [showPatientContext, setShowPatientContext] = useState<boolean>(() => {
    const saved = localStorage.getItem('app_show_patient_context');
    return saved ? JSON.parse(saved) : false;
  });

  const [measurementUnit, setMeasurementUnit] = useState<'metric' | 'imperial'>(() => {
    const saved = localStorage.getItem('app_measurement_unit');
    return saved ? saved as 'metric' | 'imperial' : 'metric';
  });

  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(() => {
    const saved = localStorage.getItem('app_notifications_enabled');
    return saved ? JSON.parse(saved) : false;
  });

  const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>(() => {
    const saved = localStorage.getItem('app_font_size');
    return saved ? saved as 'small' | 'medium' | 'large' : 'medium';
  });

  const [themeMode, setThemeMode] = useState<'light' | 'dark' | 'system'>(() => {
     const saved = localStorage.getItem('app_theme_mode');
     return saved ? saved as 'light' | 'dark' | 'system' : 'light';
  });

  const [defaultView, setDefaultView] = useState<ViewMode>(() => {
     const saved = localStorage.getItem('app_default_view');
     return saved ? saved as ViewMode : 'home';
  });

  useEffect(() => {
    localStorage.setItem('app_show_patient_context', JSON.stringify(showPatientContext));
  }, [showPatientContext]);

  useEffect(() => {
    localStorage.setItem('app_measurement_unit', measurementUnit);
  }, [measurementUnit]);

  useEffect(() => {
    localStorage.setItem('app_notifications_enabled', JSON.stringify(notificationsEnabled));
    if (notificationsEnabled && 'Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, [notificationsEnabled]);

  useEffect(() => {
    localStorage.setItem('app_font_size', fontSize);
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem('app_theme_mode', themeMode);
  }, [themeMode]);

  useEffect(() => {
    localStorage.setItem('app_default_view', defaultView);
  }, [defaultView]);

  // Auth states
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [userRole, setUserRole] = useState<string>('');
  
  // Disclaimer state
  const [showDisclaimer, setShowDisclaimer] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState(false);
  
  useEffect(() => {
    const hasAgreed = localStorage.getItem('drugGuideNepalAgreed');
    if (!hasAgreed) {
      setShowDisclaimer(true);
    }
    
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) {
        try {
          const docRef = doc(db, 'users', u.uid);
          const snap = await getDoc(docRef);
          if (snap.exists()) {
            setUserRole(snap.data().role || '');
          } else {
            await setDoc(docRef, { role: '', email: u.email });
          }
        } catch (error) {
          console.error("Firestore Error fetching user role:", error);
        }
      }
    });

    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      unsubscribe();
    };
  }, []);

  const searchResults = useMemo(() => {
    if (searchQuery.trim().length < 2) return { drugs: [], protocols: [], calculators: [] };
    const q = searchQuery.toLowerCase();
    
    const drugs = formularyData.filter(drug => 
      drug.genericName.toLowerCase().includes(q) ||
      drug.therapeuticClass.toLowerCase().includes(q) ||
      drug.categoryId.toLowerCase().includes(q) ||
      drug.indications.some(ind => ind.toLowerCase().includes(q)) ||
      drug.pharmacy.brandNames.some(b => b.toLowerCase().includes(q))
    ).slice(0, 10); 

    const protocols = allProtocols.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.tags.some(t => t.toLowerCase().includes(q)) ||
      p.description.toLowerCase().includes(q)
    ).slice(0, 5);

    const calcResults = calculators.filter(c => 
      c.title.toLowerCase().includes(q) || 
      c.description.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q)
    ).slice(0, 3);

    return { drugs, protocols, calculators: calcResults };
  }, [searchQuery]);

  const crcl = useMemo(() => {
    const age = Number(patientAge);
    const weight = Number(patientWeight);
    const scr = Number(patientSCr);

    if (age > 0 && weight > 0 && scr > 0) {
      let calc = ((140 - age) * weight) / (72 * scr);
      if (patientSex === 'F') calc *= 0.85;
      return Math.round(calc);
    }
    return 0;
  }, [patientAge, patientWeight, patientSCr, patientSex]);

  const filteredInfections = useMemo(() => {
    let filtered = infections;

    // Filter by Peds vs Adult
    filtered = filtered.filter(inf => inf.section === (isPediatric ? 'pediatric' : 'adult'));

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(inf => 
        inf.name.toLowerCase().includes(q) || 
        inf.organisms.some(org => org.toLowerCase().includes(q)) ||
        inf.treatments.some(tx => tx.drug.toLowerCase().includes(q))
      );
    } else {
      // Filter by Category if set
      if (selectedCategoryId) {
        filtered = filtered.filter(inf => inf.categoryId === selectedCategoryId);
      }
    }

    return filtered;
  }, [searchQuery, selectedCategoryId, isPediatric]);

  const selectedCategory = categories.find(c => c.id === selectedCategoryId);

  const handleBack = () => {
    if (viewMode === 'infections' && selectedCategoryId) {
      setSelectedCategoryId('');
      return;
    }
    if (scrollContainerRef.current) {
      scrollPositions.current[viewMode] = scrollContainerRef.current.scrollTop;
    }
    if (viewModeHistory.length > 0) {
      const hist = [...viewModeHistory];
      const prevMode = hist.pop()!;
      setViewModeHistory(hist);
      setViewMode(prevMode);
    } else {
      setViewMode('home');
      setSearchQuery('');
    }
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      const savedPos = scrollPositions.current[viewMode];
      if (savedPos !== undefined) {
        requestAnimationFrame(() => {
          if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTop = savedPos;
          }
        });
      } else {
        scrollContainerRef.current.scrollTop = 0;
      }
    }
  }, [viewMode, selectedCategoryId, showMdro]);

  return (
    <div className={`flex flex-col h-[100dvh] w-full font-sans overflow-hidden transition-colors duration-200 ${
      themeMode === 'dark' || (themeMode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'bg-gray-900 text-white dark' : 'bg-[#F0F4F8] text-black'
    } ${
      fontSize === 'small' ? 'text-sm' : fontSize === 'large' ? 'text-lg' : 'text-base'
    }`}>
      {/* Top Navigation / Search Bar */}
      <header className="h-16 bg-[#005A9C] text-white flex items-center px-4 md:px-6 shadow-md shrink-0 z-20 relative">
        <div className="flex items-center">
          <button className="md:hidden mr-2 p-1 hover:bg-white/10 rounded" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          {viewMode !== 'home' && (
            <button className="hidden md:flex p-1.5 mr-2 hover:bg-white/10 rounded items-center justify-center transition-colors" onClick={handleBack}>
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}

          <div className="flex items-center gap-3">
            {viewMode === 'home' && (
              <div className="w-8 h-8 bg-white/20 rounded hidden md:flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
            )}
            <div className="flex flex-col">
              <h1 className="font-bold text-base md:text-lg tracking-tight uppercase hidden md:block leading-tight cursor-pointer" onClick={() => setViewMode('home')}>DRUG GUIDE: NEPAL</h1>
              <span className="text-[10px] font-medium text-blue-200 tracking-wider hidden md:block">CLINICAL REFERENCE TOOL</span>
            </div>
          </div>
        </div>
        
        <div className={`transition-all duration-200 ${
          showDropdown 
            ? 'absolute inset-y-0 left-0 right-0 z-50 bg-[#005A9C] flex items-center px-4 md:relative md:flex-1 md:max-w-2xl md:ml-10 md:bg-transparent md:px-0' 
            : 'ml-4 md:ml-10 flex-1 max-w-2xl px-2 md:px-0 relative'
        }`} ref={searchRef}>
          {showDropdown && (
            <button 
              className="md:hidden mr-3 p-1 text-white hover:bg-white/10 rounded shrink-0"
              onClick={(e) => { e.stopPropagation(); setShowDropdown(false); }}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <div className="relative z-30 flex-1 w-full">
            <input 
              type="text" 
              placeholder="Universal Search: Drug, Indication, or Disease..." 
              value={searchQuery}
              onFocus={() => setShowDropdown(true)}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowDropdown(true);
                setShowMdro(false);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setViewMode('search');
                  setShowDropdown(false);
                }
              }}
              className="w-full bg-white/10 border border-white/20 rounded-md py-2 px-4 text-white placeholder:text-white/60 text-sm focus:outline-none focus:bg-white/20 focus:border-white transition-all shadow-inner"
            />
            <div className="absolute right-3 top-2.5 text-white/40">
              <Search className="w-4 h-4" />
            </div>
          </div>
          
          {/* Universal Quick Look Search Results Dropdown */}
          {showDropdown && searchQuery.trim().length >= 2 && (searchResults.drugs.length > 0 || searchResults.protocols.length > 0 || searchResults.calculators.length > 0) && (
            <div className="absolute top-[60px] left-4 right-4 md:top-12 md:left-0 md:right-auto md:w-full bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden z-40 max-h-[75vh] md:max-h-[60vh] overflow-y-auto">
               <ul>
                 {searchResults.calculators.length > 0 && (
                   <div className="bg-gray-50 border-b border-gray-100 px-3 py-1 text-xs font-bold text-gray-500 uppercase tracking-wider">Clinical Calculators</div>
                 )}
                 {searchResults.calculators.map(calc => (
                   <li 
                     key={calc.id} 
                     onClick={() => { 
                       // Currently navigating to main calculators dash, future could add direct deep link
                       navigateTo('calculators');
                       setSearchQuery(''); 
                       setShowDropdown(false); 
                     }}
                     className="px-4 py-3 border-b border-gray-100 hover:bg-indigo-50 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-2 group"
                   >
                     <div>
                       <div className="flex items-center gap-2">
                         <Calculator className="w-4 h-4 text-indigo-500" />
                         <span className="font-bold text-indigo-900 group-hover:text-indigo-700">{calc.title}</span>
                       </div>
                       <p className="text-xs text-indigo-800/70 mt-1 truncate">
                         {calc.description}
                       </p>
                     </div>
                     <ChevronRight className="w-4 h-4 text-indigo-300 hidden md:block" />
                   </li>
                 ))}

                 {searchResults.protocols.length > 0 && (
                   <div className="bg-gray-50 border-b border-gray-100 px-3 py-1 text-xs font-bold text-gray-500 uppercase tracking-wider">Protocols & Guidelines</div>
                 )}
                 {searchResults.protocols.map(protocol => (
                   <li 
                     key={protocol.id} 
                     onClick={() => { 
                       if (protocol.id === 'prot-sepsis:2026') navigateTo('sepsis');
                       else if (protocol.id === 'prot-ntp') navigateTo('ntp');
                       else if (protocol.id === 'prot-hypertension') navigateTo('hypertension');
                       else {
                         navigateTo('protocols'); 
                         // Note: We might just want to go to the main protocols dashboard and filter, but we'll adapt later.
                       }
                       setSearchQuery(''); setShowDropdown(false); 
                     }}
                     className="px-4 py-3 border-b border-gray-100 hover:bg-blue-50 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-2"
                   >
                     <div>
                       <div className="flex items-center gap-2">
                         <AlignLeft className="w-4 h-4 text-[#1A73E8]" />
                         <span className="font-bold text-gray-900">{protocol.title}</span>
                       </div>
                       <p className="text-xs text-gray-500 mt-1 truncate">
                         {protocol.description}
                       </p>
                     </div>
                     <ChevronRight className="w-4 h-4 text-gray-400 hidden md:block" />
                   </li>
                 ))}

                 {searchResults.drugs.length > 0 && (
                   <div className="bg-gray-50 border-y border-gray-100 px-3 py-1 text-xs font-bold text-gray-500 uppercase tracking-wider">Drugs & Formulary</div>
                 )}
                 {searchResults.drugs.map(drug => (
                   <li 
                     key={drug.id} 
                     onClick={() => { setSelectedDrug(drug); navigateTo('drugView'); setSearchQuery(''); setShowDropdown(false); }}
                     className="px-4 py-3 border-b border-gray-100 hover:bg-blue-50 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-2"
                   >
                     <div>
                       <div className="flex items-center gap-2">
                         <span className="font-bold text-gray-900">{drug.genericName}</span>
                         <span className="text-[10px] uppercase font-bold tracking-widest text-[#1A73E8] bg-blue-100 px-1.5 py-0.5 rounded border border-blue-200">
                           {drug.therapeuticClass}
                         </span>
                       </div>
                       <p className="text-xs text-gray-500 mt-1 truncate">
                         {drug.indications.join(', ')}
                       </p>
                     </div>
                     <ChevronRight className="w-4 h-4 text-gray-400 hidden md:block" />
                   </li>
                 ))}
               </ul>
            </div>
          )}
        </div>

        <div className="ml-auto flex items-center gap-2">
           <button 
             onClick={() => setShowPatientContext(!showPatientContext)}
             className={`p-1.5 md:p-2 rounded-lg transition-colors flex ${showPatientContext ? 'bg-white text-[#005A9C]' : 'bg-white/10 text-white hover:bg-white/20'}`}
             title="Patient Context (GFR / CrCl)"
           >
             <ActivitySquare className="w-5 h-5" />
           </button>
           <button 
             onClick={() => setViewMode('settings')}
             className="p-1.5 md:p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors flex"
             title="Settings"
           >
             <Settings className="w-5 h-5" />
           </button>
           <button 
             onClick={() => setViewMode('login')}
             className="p-1.5 md:p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors flex"
             title="Profile / Login"
           >
             {user ? <UserIcon className="w-5 h-5 text-green-300" /> : <UserIcon className="w-5 h-5" />}
           </button>
           <div className="flex items-center gap-1 ml-0.5 md:ml-2 bg-white/10 p-0.5 md:p-1 rounded-lg border border-white/20">
             <button 
               onClick={() => setIsPediatric(false)}
               className={`px-1.5 md:px-3 py-1 md:py-1.5 text-[9px] md:text-xs font-bold rounded shadow-sm transition-colors ${!isPediatric ? 'bg-white text-[#005A9C]' : 'text-white/70 hover:text-white'}`}
             >
               ADULT
             </button>
             <button 
               onClick={() => setIsPediatric(true)}
               className={`px-1.5 md:px-3 py-1 md:py-1.5 text-[9px] md:text-xs font-bold rounded shadow-sm transition-colors ${isPediatric ? 'bg-indigo-600 text-white' : 'text-white/70 hover:text-white'}`}
             >
               PEDS
             </button>
           </div>
        </div>
      </header>

      {/* Global Patient Context Bar */}
      {showPatientContext && (
        <div className="bg-white border-b border-gray-200 px-4 py-3 shrink-0 shadow-sm z-10 animate-in slide-in-from-top-2">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
             <div className="flex items-center gap-2">
               <ActivitySquare className="w-5 h-5 text-[#1A73E8]" />
               <div>
                 <h3 className="font-bold text-sm text-gray-800">Global Clinical Parameters</h3>
                 <p className="text-[10px] text-gray-500 hidden md:block">Used to auto-calculate mg/kg dosing and renal adjustments (CrCl).</p>
               </div>
             </div>
             
             <div className="flex items-center gap-3 flex-wrap">
               <div className="bg-gray-50 px-2 py-1 border border-gray-200 rounded shadow-sm flex items-center gap-2">
                 <span className="text-[10px] uppercase font-bold text-gray-500">Sex:</span>
                 <select 
                   value={patientSex}
                   onChange={e => setPatientSex(e.target.value as 'M' | 'F')}
                   className="w-12 h-6 font-sans text-xs text-gray-900 font-bold text-center bg-white border border-gray-200 rounded focus:outline-none focus:border-blue-400"
                 >
                   <option value="M">M</option>
                   <option value="F">F</option>
                 </select>
               </div>
               <div className="bg-gray-50 px-2 py-1 border border-gray-200 rounded shadow-sm flex items-center gap-2">
                 <span className="text-[10px] uppercase font-bold text-gray-500">Age:</span>
                 <input 
                  type="number" 
                  value={patientAge} 
                  onChange={e => {
                    const val = e.target.value;
                    setPatientAge(val === '' ? '' : Number(val));
                  }}
                  className="w-12 h-6 font-sans text-xs text-gray-900 font-bold text-center bg-white border border-gray-200 rounded focus:outline-none focus:border-blue-400"
                 />
                 <span className="text-[9px] font-semibold text-gray-400">Yrs</span>
               </div>
               <div className="bg-gray-50 px-2 py-1 border border-gray-200 rounded shadow-sm flex items-center gap-2">
                 <span className="text-[10px] uppercase font-bold text-gray-500">Wt:</span>
                 <input 
                  type="number" 
                  value={measurementUnit === 'imperial' ? Math.round(patientWeight * 2.20462) : patientWeight} 
                  onChange={e => {
                    const val = Number(e.target.value) || 0;
                    setPatientWeight(measurementUnit === 'imperial' ? val / 2.20462 : val);
                  }}
                  className="w-12 h-6 font-sans text-xs text-gray-900 font-bold text-center bg-white border border-gray-200 rounded focus:outline-none focus:border-blue-400"
                 />
                 <span className="text-[9px] font-semibold text-gray-400">{measurementUnit === 'imperial' ? 'lbs' : 'kg'}</span>
               </div>
               <div className="bg-gray-50 px-2 py-1 border border-gray-200 rounded shadow-sm flex items-center gap-2">
                 <span className="text-[10px] uppercase font-bold text-gray-500">SCr:</span>
                 <input 
                  type="number" step="0.1"
                  value={patientSCr} 
                  onChange={e => setPatientSCr(e.target.value === '' ? '' : Number(e.target.value))}
                  className="w-12 h-6 font-sans text-xs text-gray-900 font-bold text-center bg-white border border-gray-200 rounded focus:outline-none focus:border-blue-400"
                 />
                 <span className="text-[9px] font-semibold text-gray-400">mg/dL</span>
               </div>
               
               <div className={`px-3 py-1.5 rounded text-xs font-bold shadow-inner border ml-2 ${crcl > 0 ? 'bg-blue-100 text-blue-800 border-blue-200' : 'bg-gray-100 text-gray-500 border-gray-200'}`}>
                 CrCl: {crcl > 0 ? `${crcl} mL/min` : '--'}
               </div>
             </div>
             
             <button onClick={() => setShowPatientContext(false)} className="text-gray-400 hover:text-gray-700">
               <X className="w-4 h-4" />
             </button>
          </div>
        </div>
      )}

      {/* Main Two/Three Pane Structure */}
      <div className="flex flex-1 overflow-hidden relative">
        
        {/* Nav Sidebar (Desktop + Mobile overlay) */}
        <div className={`
          absolute md:static top-0 left-0 h-full bg-white border-r border-gray-200 shadow-xl md:shadow-none z-10
          w-64 shrink-0 transition-transform duration-200 flex flex-col
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          
          {/* Portal Tabs */}
          <div className="p-3 border-b border-gray-100 flex flex-col gap-2">
            <button 
              onClick={() => { setViewMode('home'); setSearchQuery(''); setSidebarOpen(false); }}
              className={`p-2 text-sm text-left flex items-center gap-2 rounded transition-colors ${viewMode === 'home' && !searchQuery ? 'bg-[#005A9C] text-white font-medium shadow-sm' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <Search className="w-4 h-4 shrink-0" />
              <span className="font-bold">Drug Index (Home)</span>
            </button>

            <button 
              onClick={() => { setViewMode('diseases'); setSelectedCategoryId(''); setSearchQuery(''); setSidebarOpen(false); setShowMdro(false); }}
              className={`p-2 text-sm text-left flex items-center gap-2 rounded transition-colors ${viewMode === 'diseases' && !selectedCategoryId && !searchQuery ? 'bg-[#005A9C] text-white font-medium shadow-sm' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <Activity className="w-4 h-4 shrink-0" />
              <span className="font-bold">Disease Index</span>
            </button>
            
            <button 
              onClick={() => { setViewMode('protocols'); setSearchQuery(''); setSidebarOpen(false); setShowMdro(false); }}
              className={`p-2 text-sm text-left flex items-center gap-2 rounded transition-colors ${viewMode === 'protocols' && !searchQuery ? 'bg-[#005A9C] text-white font-medium shadow-sm' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <AlignLeft className="w-4 h-4 shrink-0" />
              <span className="font-bold">Protocols</span>
            </button>

            <button 
              onClick={() => { setViewMode('calculators'); setSearchQuery(''); setSidebarOpen(false); setShowMdro(false); }}
              className={`p-2 text-sm text-left flex items-center gap-2 rounded transition-colors ${viewMode === 'calculators' && !searchQuery ? 'bg-[#005A9C] text-white font-medium shadow-sm' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <Calculator className="w-4 h-4 shrink-0" />
              <span className="font-bold">Calculators</span>
            </button>

            <div className="h-px bg-gray-100 my-1 mx-2"></div>
            
            <button 
              onClick={() => { setViewMode('appendix'); setSearchQuery(''); setSidebarOpen(false); setShowMdro(false); }}
              className={`p-2 text-sm text-left flex items-center gap-2 rounded transition-colors ${viewMode === 'appendix' && !searchQuery ? 'bg-[#005A9C] text-white font-medium shadow-sm' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>Appendices</span>
            </button>

            <button 
              onClick={() => { setShowDisclaimer(true); setSearchQuery(''); setSidebarOpen(false); }}
              className={`p-2 text-sm text-left flex items-center gap-2 rounded transition-colors border border-amber-200 mt-2 text-amber-800 hover:bg-amber-50`}
            >
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Safety & Disclaimers</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div ref={scrollContainerRef} className="flex-1 flex flex-col bg-white overflow-y-auto p-4 md:p-6 md:p-8 w-full relative">
          
          {showMdro ? (
             <div className="max-w-4xl mx-auto w-full">
                <div className="mb-6 flex items-center gap-4">
                  <button onClick={handleBack} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">Approach to Multidrug Resistant Organisms (MDRO)</h2>
                </div>
                <div className="prose prose-sm md:prose-base max-w-none text-gray-700" dangerouslySetInnerHTML={{__html: mdroGuidelines.replace(/\n\n/g, '<br/><br/>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\- (.*?)\n/g, '<li>$1</li>')}} />
             </div>
          ) : viewMode === 'settings' ? (
             <div className="max-w-2xl mx-auto w-full">
                <div className="mb-6 flex items-center gap-4">
                  <button onClick={handleBack} className="p-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200">
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
                </div>
                
                <div className="space-y-6">
                  {/* Profile Section */}
                  <div className="bg-white border text-gray-700 border-gray-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${user ? 'bg-green-100' : 'bg-gray-100'}`}>
                          <UserIcon className={`w-5 h-5 ${user ? 'text-green-600' : 'text-gray-500'}`} />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">Profile & Account</h3>
                          <p className="text-sm text-gray-500">{user ? user.email : 'Not logged in'}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => navigateTo('login')}
                        className="px-4 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-sm font-semibold transition-colors"
                      >
                        {user ? 'Manage Profile' : 'Login'}
                      </button>
                    </div>
                  </div>

                  {/* Application Preferences */}
                  <div className="bg-white border text-gray-700 border-gray-200 rounded-xl p-6 shadow-sm">
                     <h3 className="font-bold mb-4 flex items-center gap-2">
                       <Settings className="w-5 h-5 text-gray-400" />
                       Application Preferences
                     </h3>
                     <div className="space-y-4">
                       
                       <div className="space-y-1">
                         <label className="font-medium text-gray-800 block">Default View</label>
                         <p className="text-sm text-gray-500 mb-2">The initial screen when opening the app.</p>
                         <select 
                           value={defaultView} 
                           onChange={(e) => setDefaultView(e.target.value as ViewMode)}
                           className="w-full p-2 border border-gray-300 rounded focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none"
                         >
                           <option value="home">Home / Categories</option>
                           <option value="guidelines">Guidelines</option>
                           <option value="calculators">Calculators</option>
                           <option value="diseases">Disease Index</option>
                           <option value="category">Drug Formulary</option>
                         </select>
                       </div>

                       <div className="pt-4 border-t border-gray-100 space-y-1">
                         <label className="font-medium text-gray-800 block">Measurement Units</label>
                         <p className="text-sm text-gray-500 mb-2">Select preferred units for patient parameters.</p>
                         <select 
                           value={measurementUnit} 
                           onChange={(e) => setMeasurementUnit(e.target.value as 'metric' | 'imperial')}
                           className="w-full p-2 border border-gray-300 rounded focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none"
                         >
                           <option value="metric">Metric (kg, cm, °C)</option>
                           <option value="imperial">Imperial (lbs, in, °F)</option>
                         </select>
                       </div>

                       <div className="pt-4 border-t border-gray-100 space-y-1">
                         <label className="font-medium text-gray-800 block">Theme Mode</label>
                         <p className="text-sm text-gray-500 mb-2">Customize the visual appearance of the app.</p>
                         <select 
                           value={themeMode} 
                           onChange={(e) => setThemeMode(e.target.value as 'light' | 'dark' | 'system')}
                           className="w-full p-2 border border-gray-300 rounded focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] outline-none"
                         >
                           <option value="light">Light</option>
                           <option value="dark">Dark</option>
                           <option value="system">Use System Default</option>
                         </select>
                       </div>

                       <div className="pt-4 border-t border-gray-100 space-y-1">
                         <label className="font-medium text-gray-800 block">Font Size</label>
                         <p className="text-sm text-gray-500 mb-2">Adjust text size for better readability.</p>
                         <div className="flex gap-2">
                           <button 
                             onClick={() => setFontSize('small')}
                             className={`px-4 py-2 border rounded ${fontSize === 'small' ? 'bg-[#005A9C] text-white border-[#005A9C]' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                           >
                             Small
                           </button>
                           <button 
                             onClick={() => setFontSize('medium')}
                             className={`px-4 py-2 border rounded ${fontSize === 'medium' ? 'bg-[#005A9C] text-white border-[#005A9C]' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                           >
                             Medium
                           </button>
                           <button 
                             onClick={() => setFontSize('large')}
                             className={`px-4 py-2 border rounded ${fontSize === 'large' ? 'bg-[#005A9C] text-white border-[#005A9C]' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                           >
                             Large
                           </button>
                         </div>
                       </div>

                       <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                         <div>
                           <span className="font-medium text-gray-800">Push Notifications</span>
                           <p className="text-sm text-gray-500">Receive alerts for important updates and clinical changes.</p>
                         </div>
                         <input type="checkbox" checked={notificationsEnabled} onChange={(e) => setNotificationsEnabled(e.target.checked)} className="w-5 h-5 accent-[#005A9C] cursor-pointer" />
                       </div>

                     </div>
                  </div>
                </div>
             </div>
          ) : viewMode === 'login' ? (
             <div className="max-w-md mx-auto w-full">
                <div className="mb-6 flex items-center gap-4">
                  <button onClick={handleBack} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <h2 className="text-2xl font-bold text-gray-900">Profile & Login</h2>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  {user ? (
                    <div className="text-center">
                       <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4 border border-green-200">
                         <UserIcon className="w-8 h-8 text-green-600" />
                       </div>
                       <h3 className="font-bold text-lg text-gray-900">{user.displayName || user.email}</h3>
                       <p className="text-gray-500 mt-1 text-sm">{user.email}</p>
                       
                       <div className="mt-6 text-left border-t border-gray-100 pt-6">
                         <label className="block text-sm font-bold text-gray-700 mb-2">Professional Role</label>
                         <select 
                           value={userRole}
                           onChange={async (e) => {
                             const newRole = e.target.value;
                             setUserRole(newRole);
                             try {
                               await setDoc(doc(db, 'users', user.uid), { role: newRole, email: user.email }, { merge: true });
                             } catch (err) {
                               console.error('Error saving role', err);
                             }
                           }}
                           className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
                         >
                           <option value="">-- Specify your background --</option>
                           <option value="Medical Student">Medical Student</option>
                           <option value="Intern">Intern</option>
                           <option value="Resident Physician">Resident Physician</option>
                           <option value="Physician">Physician</option>
                           <option value="Consultant">Consultant</option>
                           <option value="Nursing">Nursing</option>
                           <option value="Paramedic">Paramedic</option>
                           <option value="Other Health Background">Other Health Background</option>
                         </select>
                         <p className="text-xs text-gray-500 mt-2">Setting your clinical background helps ensure usage fits our educational mandate.</p>
                       </div>

                       <button onClick={logoutUser} className="mt-8 w-full py-3 bg-red-50 hover:bg-red-100 text-red-700 font-bold rounded-lg flex justify-center items-center gap-2 border border-red-200 transition-colors">
                         <LogOut className="w-4 h-4" /> Sign Out
                       </button>
                    </div>
                  ) : (
                    <div>
                       <p className="text-gray-600 mb-6">Create an account or login to sync your preferences and access personalized features.</p>
                       
                       <button onClick={async () => {
                         try {
                           await loginWithGoogle();
                         } catch (e) {
                           console.log(e);
                         }
                       }} className="w-full py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold rounded-lg mb-4 flex justify-center items-center gap-3 transition-colors shadow-sm">
                         <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /><path fill="none" d="M1 1h22v22H1z" /></svg>
                         Sign in with Google
                       </button>

                       <div className="relative flex items-center py-4">
                         <div className="flex-grow border-t border-gray-300"></div>
                         <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">or</span>
                         <div className="flex-grow border-t border-gray-300"></div>
                       </div>
                       
                       <p className="text-sm text-gray-500 text-center mt-2 cursor-pointer hover:underline text-[#005A9C]">Continue with native email register</p>
                    </div>
                  )}
                </div>
             </div>
          ) : viewMode === 'sepsis' ? (
             <SepsisDashboard isPediatric={isPediatric} patientWeight={patientWeight} setPatientWeight={setPatientWeight} />
          ) : viewMode === 'ntp' ? (
             <NtpDashboard />
          ) : viewMode === 'hypertension' ? (
             <HypertensionDashboard 
               onBack={() => navigateTo('home')}
               onDrugClick={(drugName) => {
                 const drug = formularyData.find(d => d.genericName.toLowerCase() === drugName.toLowerCase() || d.pharmacy.brandNames.some(b => b.toLowerCase() === drugName.toLowerCase()));
                 if (drug) {
                   setSelectedDrug(drug);
                   navigateTo('drugView');
                 } else {
                   setSearchQuery(drugName);
                   setShowDropdown(true);
                 }
               }} 
             />
          ) : viewMode === 'calculators' ? (
             <CalculatorsDashboard 
               onClose={() => navigateTo('home')} 
             />
          ) : viewMode === 'protocols' ? (
             <ProtocolsDashboard 
               onClose={() => navigateTo('home')} 
               onAction={(action) => navigateTo(action as any)}
               onDrugClick={(drugName) => {
                 const drug = formularyData.find(d => d.genericName.toLowerCase() === drugName.toLowerCase() || d.pharmacy.brandNames.some(b => b.toLowerCase() === drugName.toLowerCase()));
                 if (drug) {
                   setSelectedDrug(drug);
                   navigateTo('drugView');
                 } else {
                   // Optional: If we want to drop them into search instead if it's an indication instead of a drug name
                   setSearchQuery(drugName);
                   setShowDropdown(true);
                 }
               }} 
             />
          ) : viewMode === 'appendix' ? (
             <AppendixView />
          ) : viewMode === 'drugView' && selectedDrug ? (
             <DrugView drug={selectedDrug} isPediatric={isPediatric} patientWeight={patientWeight} crcl={crcl} onClose={handleBack} />
          ) : viewMode === 'home' ? (
             <div className="max-w-5xl mx-auto w-full">
               <div className="mb-6 border-b border-gray-100 pb-4">
                 <h2 className="text-2xl font-bold text-gray-900">Therapeutic Portals</h2>
                 <p className="text-gray-500 text-sm mt-1">Select a category to view the associated formulary index and clinical guidelines.</p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {therapeuticCategories.map(cat => (
                    <button 
                      key={cat.id}
                      onClick={() => { 
                        if (cat.id === 'infections') {
                          navigateTo('infections'); 
                          setSelectedCategoryId('');
                        } else {
                          navigateTo('category');
                          setSelectedCategoryId(cat.id);
                        }
                      }}
                      className="text-left border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow bg-white hover:border-[#1A73E8]/30 group"
                    >
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#1A73E8] transition-colors">
                        <Activity className="w-5 h-5 text-[#1A73E8] group-hover:text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900">{cat.name}</h3>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">{cat.description}</p>
                    </button>
                  ))}
               </div>
             </div>
          ) : viewMode === 'search' ? (
            <div className="max-w-5xl mx-auto w-full">
              <div className="mb-6 border-b border-gray-100 pb-4 flex justify-between items-end">
                <div>
                  <h2 className="text-xl font-medium">Search results for "{searchQuery}"</h2>
                  <p className="text-gray-500 text-sm">{searchResults.drugs.length + searchResults.protocols.length + searchResults.calculators.length} results found based on disease/indication/name.</p>
                </div>
                <button onClick={() => { setViewMode('home'); setSearchQuery(''); }} className="text-[#005A9C] font-bold text-sm hover:underline">Clear Search</button>
              </div>
              <div className="space-y-4">
                {searchResults.drugs.length > 0 || searchResults.protocols.length > 0  || searchResults.calculators.length > 0 ? (
                  searchResults.drugs.map(drug => (
                      <div 
                        key={drug.id}
                        onClick={() => { setSelectedDrug(drug); navigateTo('drugView'); }}
                        className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group"
                      >
                         <div className="flex justify-between items-start mb-2">
                           <div>
                             <h3 className="text-lg font-bold text-[#005A9C] group-hover:text-blue-700">{drug.genericName}</h3>
                             <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{drug.therapeuticClass}</span>
                           </div>
                           <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-blue-500" />
                         </div>
                         <div className="flex flex-wrap gap-1 mt-3">
                           {drug.indications.slice(0, 4).map((ind, i) => (
                             <span key={i} className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full border border-gray-200">
                               {ind}
                             </span>
                           ))}
                           {drug.indications.length > 4 && (
                             <span className="text-[10px] bg-gray-50 text-gray-400 px-2 py-0.5 rounded-full border border-gray-100">
                               +{drug.indications.length - 4} more
                             </span>
                           )}
                         </div>
                      </div>
                  ))
                ) : (
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center text-gray-500 flex flex-col items-center justify-center">
                    <Search className="w-8 h-8 text-gray-300 mb-3" />
                    <p className="font-medium">No results found for "{searchQuery}"</p>
                    <p className="text-xs mt-1">Try another disease, indication, or generic name.</p>
                  </div>
                )}
              </div>
            </div>
          ) : viewMode === 'diseases' ? (
            <DiseaseIndexDashboard 
              formularyData={formularyData} 
              onSelectDrug={(drug) => {
                setSelectedDrug(drug);
                navigateTo('drugView');
              }}
              onClose={() => setViewMode('home')}
            />
          ) : viewMode === 'infections' ? (
            <div className="max-w-5xl mx-auto w-full">
              {searchQuery ? (
                <div className="mb-6 border-b border-gray-100 pb-4">
                 <h2 className="text-xl font-medium">Search results for "{searchQuery}"</h2>
                 <p className="text-gray-500 text-sm">{filteredInfections.length} guidelines found.</p>
               </div>
             ) : (
               <div className="text-[10px] md:text-[11px] text-gray-400 font-medium mb-6 flex items-center gap-2 flex-wrap cursor-pointer" onClick={() => setSelectedCategoryId("")}>
                 <span className="uppercase hover:text-gray-600 transition-colors" onClick={() => setViewMode('home')}>DRUG GUIDE NEPAL</span>
                 <ChevronRight className="w-3 h-3" />
                 <span className="uppercase hover:text-gray-600 transition-colors">INFECTIONS PORTAL</span>
                 <ChevronRight className="w-3 h-3" />
                 {selectedCategoryId ? (
                   <span className="text-[#1A73E8] uppercase">{selectedCategory?.name}</span>
                 ) : (
                   <span className="text-[#1A73E8] uppercase">ALL GUIDELINES</span>
                 )}
               </div>
             )}

              {/* Quick Links inside Infections - removed as requested */}
              {/* Infection Categories Grid */}
              {!searchQuery && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-4">Infection Guidelines by System</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <button
                      onClick={() => setSelectedCategoryId('')}
                      className={`text-left border p-4 rounded-xl shadow-sm transition-all group flex items-center justify-between ${!selectedCategoryId ? 'bg-blue-50 border-[#1A73E8]' : 'bg-white border-gray-200 hover:shadow-md hover:border-[#1A73E8]/50'}`}
                    >
                      <span className={`font-semibold truncate pr-4 ${!selectedCategoryId ? 'text-[#005A9C]' : 'text-gray-800 group-hover:text-[#005A9C]'}`}>All Guidelines</span>
                      <ChevronRight className={`w-4 h-4 shrink-0 ${!selectedCategoryId ? 'text-[#1A73E8]' : 'text-gray-300 group-hover:text-[#1A73E8]'}`} />
                    </button>
                    {categories.map(c => (
                      <button
                        key={c.id}
                        onClick={() => setSelectedCategoryId(c.id)}
                        className={`text-left border p-4 rounded-xl shadow-sm transition-all group flex items-center justify-between ${selectedCategoryId === c.id ? 'bg-blue-50 border-[#1A73E8]' : 'bg-white border-gray-200 hover:shadow-md hover:border-[#1A73E8]/50'}`}
                      >
                        <span className={`font-semibold truncate pr-4 ${selectedCategoryId === c.id ? 'text-[#005A9C]' : 'text-gray-800 group-hover:text-[#005A9C]'}`}>{c.name}</span>
                        <ChevronRight className={`w-4 h-4 shrink-0 ${selectedCategoryId === c.id ? 'text-[#1A73E8]' : 'text-gray-300 group-hover:text-[#1A73E8]'}`} />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Age Restriction Warning */}
              {isPediatric && typeof patientAge === 'number' && patientAge >= 18 && (
                <div className="mb-8 border-l-4 border-rose-500 bg-rose-50 p-4 rounded-md flex gap-3 shadow-sm">
                  <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-rose-800">Age Restriction: Adult Patient Detected</h3>
                    <p className="text-xs text-rose-700 mt-1">
                      You have entered an age of 18 or older but activated the <strong>PEDS Mode</strong> toggle. Pediatric mg/kg dosing algorithms are not intended for adults. 
                    </p>
                    <button 
                      onClick={() => setIsPediatric(false)}
                      className="mt-3 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold py-1.5 px-3 rounded shadow transition-colors"
                    >
                      Switch to ADULT Mode
                    </button>
                  </div>
                </div>
              )}

              {/* Data Blocks */}
              <div className="space-y-12 pb-12">
                {filteredInfections.length === 0 ? (
                   <div className="text-center py-16 px-4 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50">
                     <p className="text-gray-500 font-medium">No guidelines match your specific criteria.</p>
                     <p className="text-xs text-gray-400 mt-2">Try adjusting the search query or switching portals.</p>
                   </div>
                ) : null}

                {filteredInfections.map((infection, idx) => (
                  <InfectionCard 
                    key={infection.id + idx} 
                    infection={infection} 
                    weight={patientWeight} 
                    crcl={crcl} 
                    showPediatricCalc={isPediatric && (!patientAge || patientAge < 18)} 
                    onSelectDrug={(drug) => {
                      setSelectedDrug(drug);
                      navigateTo('drugView');
                    }}
                  />
                ))}
              </div>
              
              <div className="mt-4 mb-4 pb-2 border-b border-gray-200">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Infection Formulary Index</h3>
                <p className="text-gray-500 text-sm mt-1">Standard listing for antibiotics, antivirals, and antifungals.</p>
              </div>

              <div className="space-y-4">
                {formularyData.filter(d => d.categoryId === 'infections').length > 0 ? (
                  formularyData
                    .filter(d => d.categoryId === 'infections')
                    .map(drug => (
                      <div 
                        key={drug.id}
                        onClick={() => { setSelectedDrug(drug); navigateTo('drugView'); }}
                        className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group"
                      >
                         <div className="flex justify-between items-start mb-2">
                           <div>
                             <h3 className="text-lg font-bold text-[#005A9C] group-hover:text-blue-700">{drug.genericName}</h3>
                             <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{drug.therapeuticClass}</span>
                           </div>
                           <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-blue-500" />
                         </div>
                         <div className="flex flex-wrap gap-1 mt-3">
                           {drug.indications.slice(0, 4).map((ind, i) => (
                             <span key={i} className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full border border-gray-200">
                               {ind}
                             </span>
                           ))}
                           {drug.indications.length > 4 && (
                             <span className="text-[10px] bg-gray-50 text-gray-400 px-2 py-0.5 rounded-full border border-gray-100">
                               +{drug.indications.length - 4} more
                             </span>
                           )}
                         </div>
                      </div>
                    ))
                ) : null}
              </div>

            </div>
          ) : viewMode === 'category' ? (
            <div className="max-w-5xl mx-auto w-full">
              <div className="mb-6 border-b border-gray-100 pb-4 flex items-center gap-2">
                 <button onClick={() => setViewMode('home')} className="text-[#1A73E8] hover:underline text-sm font-bold">Home</button>
                 <ChevronRight className="w-4 h-4 text-gray-400" />
                 <span className="text-gray-900 font-bold">{therapeuticCategories.find(c => c.id === selectedCategoryId)?.name}</span>
              </div>
              
              <div className="space-y-4">
                {formularyData.filter(d => d.categoryId === selectedCategoryId).length > 0 ? (
                  formularyData
                    .filter(d => d.categoryId === selectedCategoryId)
                    .map(drug => (
                      <div 
                        key={drug.id}
                        onClick={() => { setSelectedDrug(drug); navigateTo('drugView'); }}
                        className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group"
                      >
                         <div className="flex justify-between items-start mb-2">
                           <div>
                             <h3 className="text-lg font-bold text-[#005A9C] group-hover:text-blue-700">{drug.genericName}</h3>
                             <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{drug.therapeuticClass}</span>
                           </div>
                           <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-blue-500" />
                         </div>
                         <div className="flex flex-wrap gap-1 mt-3">
                           {drug.indications.slice(0, 4).map((ind, i) => (
                             <span key={i} className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full border border-gray-200">
                               {ind}
                             </span>
                           ))}
                           {drug.indications.length > 4 && (
                             <span className="text-[10px] bg-gray-50 text-gray-400 px-2 py-0.5 rounded-full border border-gray-100">
                               +{drug.indications.length - 4} more
                             </span>
                           )}
                         </div>
                      </div>
                    ))
                ) : (
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center text-gray-500 flex flex-col items-center justify-center">
                    <Activity className="w-8 h-8 text-gray-300 mb-3" />
                    <p className="font-medium">No formulary data loaded for this category yet.</p>
                    <p className="text-xs mt-1">Check back later as the database continues to sync.</p>
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Modals */}
      {showDisclaimer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#005A9C]" />
            <div className="flex items-center gap-4 mb-4">
               <div className="w-12 h-12 bg-blue-100 rounded-full flex justify-center items-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#005A9C]" />
               </div>
               <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">Disclaimer & Agreement</h2>
            </div>
            <div className="text-gray-600 text-sm md:text-base space-y-4 mb-8 leading-relaxed">
               <p>
                 <strong>DRUG GUIDE: NEPAL</strong> is an educational and clinical reference tool intended solely for use by qualified healthcare professionals.
               </p>
               <p>
                 Our database is uniquely optimized for Nepal, integrating <strong>Bharatpur Hospital Formulary 2081</strong> pricing and availability, alongside the NNF 2018 and Sepsis 2026 guidelines. This ensures you have the most up-to-date and locally relevant data available.
               </p>
               <p>
                 While we strive for accuracy, <strong>you must legally verify all doses, indications, and safety profiles</strong> against official primary sources before administration.
               </p>
               <p className="text-rose-700 bg-rose-50 p-3 rounded-lg border border-rose-100 font-medium leading-relaxed">
                 The developers and contributors assume absolutely no legal liability for any adverse clinical outcomes, prescribing errors, or legal issues arising from the use of this digital application.
               </p>
            </div>
            <button 
              onClick={() => {
                localStorage.setItem('drugGuideNepalAgreed', 'true');
                setShowDisclaimer(false);
              }}
              className="w-full bg-[#005A9C] hover:bg-blue-800 text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-colors"
            >
              I Agree & Understand
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

function InfectionCard({ infection, weight, crcl, showPediatricCalc, onSelectDrug }: { infection: Infection, weight: number, crcl: number, showPediatricCalc?: boolean, onSelectDrug: (d: any) => void }) {
  const preferred = infection.treatments.filter(t => t.type === 'preferred');
  const alternative = infection.treatments.filter(t => t.type === 'alternative');

  const getRenalAdjustment = (drugName: string): RenalRule | null => {
    if (crcl <= 0) return null;
    for (const config of renalAdjustments) {
      if (config.matchNames.some(name => drugName.toLowerCase().includes(name.toLowerCase()))) {
        const rule = config.rules.find(r => crcl <= r.maxCrCl && crcl >= (r.minCrCl || 0));
        if (rule) return rule;
      }
    }
    return null;
  };

  const renderDoseWithCalc = (dose: string, ruleAdj?: RenalRule) => {
    // Priority 1: Check if there's a strict renal dosing override first
    if (ruleAdj && ruleAdj.dose) {
      return (
        <div className="flex flex-col items-start gap-1">
          <span className="font-sans text-gray-400 line-through text-xs">{dose}</span>
          <div className="font-bold text-red-700 bg-red-50 border border-red-200 px-2 py-1 rounded">
            {ruleAdj.dose}
          </div>
        </div>
      );
    }
    
    // Priority 2: Standard pediatric calculations if no explicit overrides required
    const kgRegex = /([0-9.]+)\s*mg\/kg/i;
    const match = dose.match(kgRegex);
    
    if (match && showPediatricCalc) {
      const baseDose = parseFloat(match[1]);
      const calculated = (baseDose * weight).toFixed(0);
      return (
        <div className="flex flex-col items-start gap-1">
          <span className="font-sans text-gray-900">{dose}</span>
          <div className="text-[10px] text-[#1A73E8] bg-[#E8F0FE] font-bold px-2 py-0.5 rounded flex items-center border border-blue-100">
            = {calculated} mg total
          </div>
        </div>
      );
    }
    
    return <span className="font-sans text-gray-900">{dose}</span>;
  };

  const getAwareColor = (aware?: string) => {
    if (aware === 'Access') return 'bg-green-100 text-green-800 border-green-200';
    if (aware === 'Watch') return 'bg-amber-100 text-amber-800 border-amber-200';
    if (aware === 'Reserve') return 'bg-red-100 text-red-800 border-red-200';
    return 'bg-gray-100 text-gray-600 border-gray-200';
  };

  const renderRenalWarning = (drug: string) => {
    const adjustment = getRenalAdjustment(drug);
    if (!adjustment) {
      const isSafe = noRenalAdjustmentDrugs.some(n => drug.toLowerCase().includes(n.toLowerCase()));
      if (isSafe && crcl > 0 && crcl <= 60) {
        return (
          <div className="mt-1.5 flex items-start gap-1.5 bg-green-50/70 border border-green-100 px-2 py-1.5 rounded text-[10px] text-gray-700 leading-tight">
            <ActivitySquare className="w-3 h-3 text-green-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-green-800">Renal Safe: </span>
              No dosage adjustment needed.
            </div>
          </div>
        );
      }
      return null;
    }
    
    return (
      <div className="mt-1.5 flex flex-col gap-1 bg-red-50/70 border border-red-100 px-2 py-2 rounded text-[10px] text-gray-800 leading-tight">
        <div className="flex items-start gap-1.5">
          <AlertTriangle className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-red-800 uppercase tracking-tight">Cockcroft-Gault Overrides Triggered</span>
            {adjustment.warning && <span className="text-red-700 font-bold block mt-0.5">{adjustment.warning}</span>}
            <span className="font-bold text-gray-800 block mt-1.5">IMPORTANT: Reassess renal function (SCr/CrCl) in 48-72 hours or upon clinical change.</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">{infection.name}</h2>
        {infection.subType && <p className="text-sm font-medium text-[#1A73E8] mt-1">{infection.subType}</p>}
        {infection.organisms && infection.organisms.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {infection.organisms.map(org => (
              <span key={org} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full italic border border-gray-200">
                {org}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-2">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm min-w-[650px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="p-3 font-semibold text-gray-600 w-32 border-r border-gray-200/50">Tier</th>
                <th className="p-3 font-semibold text-gray-600 border-r border-gray-200/50">Drug & Details</th>
                <th className="p-3 font-semibold text-gray-600 border-r border-gray-200/50">Dosage</th>
                <th className="p-3 font-semibold text-gray-600 text-center border-r border-gray-200/50">Frequency</th>
                <th className="p-3 font-semibold text-gray-600 text-center">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {preferred.map((t, i) => {
                const adj = getRenalAdjustment(t.drug) || undefined;
                const fDrug = formularyData.find(d => t.drug.toLowerCase().includes(d.genericName.toLowerCase()) || d.genericName.toLowerCase().includes(t.drug.toLowerCase().split(' ')[0]));
                return (
                  <tr key={i} className="bg-white hover:bg-[#F8F9FA] transition-colors">
                    {i === 0 && (
                      <td rowSpan={preferred.length} className="p-4 font-bold text-[#1A73E8] border-r border-gray-200/50 align-top bg-[#E8F0FE]/50">
                        FIRST-LINE
                      </td>
                    )}
                    <td className="p-4 border-r border-gray-200/50">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900">{t.drug}</span>
                        {t.aware && (
                          <span className={`text-[9px] uppercase font-bold px-1.5 py-0.5 rounded border ${getAwareColor(t.aware)}`}>
                            {t.aware}
                          </span>
                        )}
                      </div>
                      {t.condition && <div className="text-xs text-amber-700 bg-amber-50 px-2 py-1 rounded inline-block mt-1.5">{t.condition}</div>}
                      {renderRenalWarning(t.drug)}
                      {fDrug && (
                        <div className="mt-2 bg-gray-50 p-2 rounded border border-gray-100 text-xs">
                          {fDrug.pharmacy?.priceNPR && <div className="font-semibold text-green-700 mb-0.5">Price: {fDrug.pharmacy.priceNPR}</div>}
                          {fDrug.safety?.adr && fDrug.safety.adr.length > 0 && <div className="text-gray-500 line-clamp-2"><span className="font-semibold text-gray-700">ADR:</span> {fDrug.safety.adr.join(', ')}</div>}
                          <button onClick={(e) => { e.stopPropagation(); onSelectDrug(fDrug); }} className="text-blue-600 font-semibold hover:underline mt-1.5 inline-flex items-center gap-1">
                            <Eye className="w-3 h-3" /> View Full Profile
                          </button>
                        </div>
                      )}
                    </td>
                    <td className="p-4 border-r border-gray-200/50 align-top">
                      {renderDoseWithCalc(t.dose, adj)}
                    </td>
                    <td className="p-4 text-center border-r border-gray-200/50 align-top">
                      {adj && adj.freq ? (
                        <div className="flex flex-col items-center gap-1">
                          <span className="font-sans text-gray-400 line-through text-xs px-2">{t.frequency}</span>
                          <span className="font-bold text-red-700 bg-red-50 border border-red-200 px-2 py-1 rounded inline-block">{adj.freq}</span>
                        </div>
                      ) : (
                        <span className="text-gray-700">{t.frequency}</span>
                      )}
                    </td>
                    <td className="p-4 text-center font-semibold text-gray-900 align-top">{t.duration}</td>
                  </tr>
                );
              })}
              
              {alternative.length > 0 && (
                <tr className="bg-gray-50/50">
                  <td colSpan={5} className="py-1"></td>
                </tr>
              )}
              
              {alternative.map((t, i) => {
                const adj = getRenalAdjustment(t.drug) || undefined;
                const fDrug = formularyData.find(d => t.drug.toLowerCase().includes(d.genericName.toLowerCase()) || d.genericName.toLowerCase().includes(t.drug.toLowerCase().split(' ')[0]));
                return (
                  <tr key={'alt'+i} className="bg-white hover:bg-gray-50 transition-colors border-t border-dashed border-gray-200">
                    {i === 0 && (
                      <td rowSpan={alternative.length} className="p-4 font-bold text-gray-400 border-r border-gray-200/50 align-top">
                        ALTERNATIVE
                      </td>
                    )}
                    <td className="p-4 border-r border-gray-200/50">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-700">{t.drug}</span>
                        {t.aware && (
                          <span className={`text-[9px] uppercase font-bold px-1.5 py-0.5 rounded border ${getAwareColor(t.aware)}`}>
                            {t.aware}
                          </span>
                        )}
                      </div>
                      {t.condition && <div className="text-[11px] text-gray-500 font-medium tracking-tight mt-1">{t.condition}</div>}
                      {renderRenalWarning(t.drug)}
                      {fDrug && (
                        <div className="mt-2 bg-gray-50 p-2 rounded border border-gray-100 text-xs">
                          {fDrug.pharmacy?.priceNPR && <div className="font-semibold text-green-700 mb-0.5">Price: {fDrug.pharmacy.priceNPR}</div>}
                          {fDrug.safety?.adr && fDrug.safety.adr.length > 0 && <div className="text-gray-500 line-clamp-2"><span className="font-semibold text-gray-700">ADR:</span> {fDrug.safety.adr.join(', ')}</div>}
                          <button onClick={(e) => { e.stopPropagation(); onSelectDrug(fDrug); }} className="text-blue-600 font-semibold hover:underline mt-1.5 inline-flex items-center gap-1">
                            <Eye className="w-3 h-3" /> View Full Profile
                          </button>
                        </div>
                      )}
                    </td>
                    <td className="p-4 border-r border-gray-200/50 align-top">
                      {renderDoseWithCalc(t.dose, adj)}
                    </td>
                    <td className="p-4 text-center border-r border-gray-200/50 align-top">
                      {adj && adj.freq ? (
                        <div className="flex flex-col items-center gap-1">
                          <span className="font-sans text-gray-400 line-through text-xs px-2">{t.frequency}</span>
                          <span className="font-bold text-red-700 bg-red-50 border border-red-200 px-2 py-1 rounded inline-block">{adj.freq}</span>
                        </div>
                      ) : (
                        <span className="text-gray-600">{t.frequency}</span>
                      )}
                    </td>
                    <td className="p-4 text-center text-gray-600 align-top">{t.duration}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {infection.comments && (
        <div className="mt-1 p-4 bg-[#F8F9FA] border border-gray-200 flex gap-3 rounded-xl shadow-sm">
          <div className="text-xs text-gray-600 leading-relaxed font-medium">
            <span className="font-bold text-gray-800 uppercase tracking-wide mr-2 text-[10px]">Clinical Comment:</span> 
            {infection.comments}
          </div>
        </div>
      )}
    </div>
  );
}
