import React from 'react';
import { COMPLIANCE_LIST } from '../constants';
import { ShieldCheck, FileCheck } from 'lucide-react';

const Compliance: React.FC = () => {
  return (
    <div className="pt-20 animate-fade-in bg-gray-50 min-h-screen">
       <div className="bg-primary-900 text-white py-16 text-center">
         <h1 className="text-4xl font-serif font-bold mb-4">Compliance & Registrations</h1>
         <p className="text-gray-300">Operating with full transparency and adherence to statutory regulations.</p>
       </div>

       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
             <div className="bg-accent-500 p-6 flex items-center text-white">
                <ShieldCheck className="w-8 h-8 mr-3" />
                <h2 className="text-xl font-bold">Statutory Compliance</h2>
             </div>
             <div className="p-8">
                <div className="space-y-6">
                   {COMPLIANCE_LIST.map((item, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                         <div className="flex items-center mb-2 sm:mb-0">
                            <div className="bg-primary-50 p-2 rounded-md mr-4 text-primary-900">
                               <FileCheck size={20} />
                            </div>
                            <span className="font-bold text-gray-800 text-lg">{item.label}</span>
                         </div>
                         <span className="text-gray-600 bg-gray-50 px-3 py-1 rounded-md text-sm border border-gray-200">
                           {item.value}
                         </span>
                      </div>
                   ))}
                </div>
             </div>
             <div className="bg-gray-50 p-6 text-center text-sm text-gray-500">
                Documents available upon request for due diligence.
             </div>
          </div>
       </div>
    </div>
  );
};

export default Compliance;