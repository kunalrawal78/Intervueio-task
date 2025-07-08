import React from 'react'
import {
  KeyRound,
  Layers3,
  Rocket,
  Globe,
  ArrowRight,
} from 'lucide-react';

const Security = () => {
  return (
    <div className="bg-#F9F5F6 py-16 px-4 font-sora"   style={{background:'#F9F5F6'}} >
      <div className="max-w-6xl mx-auto">
    
        <div className="mb-12 text-start">
          <h1 className="text-4xl font-semibold text-black mb-4">
            Security is our top priority
          </h1>
          <p className="text-gray-50 text-base max-w-2xl">
            Intervue serves startups to fortune 500 companies with enterprise grade security baked in by design
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {/* Security Card */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 group flex flex-col justify-between h-full"
           style={{background:'white'}}>
            <KeyRound className="w-6 h-6 text-black mb-4 fill-black" />
            <h3 className="text-lg font-semibold text-black mb-2">Security</h3>
            <p className="text-sm text-gray-600 mb-6">
              Protecting your data at every layer is fundamental to how Intervue works
            </p>
            <div className="flex justify-end">
              <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>


          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 group flex flex-col justify-between h-full"
          style={{background:'white'}}
          >
            <Layers3 className="w-6 h-6 text-black mb-4 fill-black" />
            <h3 className="text-lg font-semibold text-black mb-2">Compliances</h3>
            <p className="text-sm text-gray-600 mb-6">
              Enterprise grade compliance commitments where we have established controls to adhere to those commitments
            </p>
            <div className="flex justify-end">
              <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>

     
          <div className="flex flex-col gap-6"
          >
     
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 group flex items-center justify-between"
             style={{background:'white'}}
            >
              <div className="flex items-center gap-4">
                <Rocket className="w-6 h-6 text-black fill-black" />
                <h3 className="text-lg font-semibold text-black">Intervue for Startups</h3>
              </div>
              <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform duration-300" />
            </div>

       
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 group flex items-center justify-between"
             style={{background:'white'}}>
              <div className="flex items-center gap-4">
                <Globe className="w-6 h-6 text-black fill-black" />
                <h3 className="text-lg font-semibold text-black">Intervue for Enterprises</h3>
              </div>
              <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
