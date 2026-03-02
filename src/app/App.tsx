import { useState } from 'react';
import { Step1Calculator } from './components/Step1Calculator';
import { Step2OfferConfirmation } from './components/Step2OfferConfirmation';
import { Step3Certification } from './components/Step3Certification';
import { Step4TechnicianAssignment } from './components/Step4TechnicianAssignment';
import { Step5DigitalClosure } from './components/Step5DigitalClosure';
import { motion, AnimatePresence } from 'motion/react';

export interface UserData {
  monthlyBill: number;
  region: string;
  savings: number;
  monthlyFee: number;
  installationAge: string;
  panelCondition: string;
  availableCapacity: string;
  needsRegularization: boolean;
}

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState<UserData>({
    monthlyBill: 0,
    region: '',
    savings: 0,
    monthlyFee: 0,
    installationAge: '',
    panelCondition: '',
    availableCapacity: '',
    needsRegularization: false,
  });

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const updateUserData = (data: Partial<UserData>) => {
    setUserData((prev) => ({ ...prev, ...data }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header with Branding */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SR</span>
            </div>
            <div>
              <h1 className="text-blue-900">SECU-RED</h1>
              <p className="text-xs text-gray-600">Energía Solar sin Inversión Inicial</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3, 4, 5].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    currentStep >= step
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step}
                </div>
                {step < 5 && (
                  <div
                    className={`flex-1 h-1 mx-2 transition-all ${
                      currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-600">
            <span>Evaluación</span>
            <span>Oferta</span>
            <span>Certificación</span>
            <span>Técnico</span>
            <span>Cierre</span>
          </div>
        </div>
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentStep === 1 && (
            <Step1Calculator
              onNext={nextStep}
              userData={userData}
              updateUserData={updateUserData}
            />
          )}
          {currentStep === 2 && (
            <Step2OfferConfirmation
              onNext={nextStep}
              onBack={prevStep}
              userData={userData}
            />
          )}
          {currentStep === 3 && (
            <Step3Certification
              onNext={nextStep}
              onBack={prevStep}
              userData={userData}
              updateUserData={updateUserData}
            />
          )}
          {currentStep === 4 && (
            <Step4TechnicianAssignment
              onNext={nextStep}
              onBack={prevStep}
              userData={userData}
            />
          )}
          {currentStep === 5 && (
            <Step5DigitalClosure
              onBack={prevStep}
              userData={userData}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}