import { useState } from 'react';
import { ClipboardCheck, AlertTriangle, ArrowLeft, Settings } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { UserData } from '../App';

interface Step3Props {
  onNext: () => void;
  onBack: () => void;
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
}

export function Step3Certification({ onNext, onBack, userData, updateUserData }: Step3Props) {
  const [installationAge, setInstallationAge] = useState(userData.installationAge || '');
  const [panelCondition, setPanelCondition] = useState(userData.panelCondition || '');
  const [availableCapacity, setAvailableCapacity] = useState(userData.availableCapacity || '');
  const [showAlert, setShowAlert] = useState(false);

  const handleContinue = () => {
    // Lógica para detectar riesgo de incumplimiento TE1
    const needsRegularization = 
      installationAge === 'mas-20' || 
      panelCondition === 'malo' || 
      availableCapacity === 'insuficiente';

    updateUserData({
      installationAge,
      panelCondition,
      availableCapacity,
      needsRegularization,
    });

    if (needsRegularization) {
      setShowAlert(true);
      // Esperar 3 segundos antes de continuar
      setTimeout(() => {
        onNext();
      }, 3000);
    } else {
      onNext();
    }
  };

  const isComplete = installationAge && panelCondition && availableCapacity;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Button variant="ghost" onClick={onBack} className="mb-4">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Volver
      </Button>

      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
          <ClipboardCheck className="w-8 h-8 text-purple-600" />
        </div>
        <h1 className="mb-2">Certificación Eléctrica (TE1)</h1>
        <p className="text-gray-600">
          Diagnóstico guiado de tu instalación eléctrica
        </p>
      </div>

      <Card className="p-6 mb-6">
        <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6">
          <Settings className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-blue-900">
              <strong>¿Por qué es necesaria esta certificación?</strong>
            </p>
            <p className="text-xs text-blue-700 mt-1">
              La normativa chilena (TE1) exige que toda instalación solar cuente con una red eléctrica certificada. 
              Este diagnóstico nos permite garantizar una instalación segura y conforme.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Pregunta 1: Antigüedad */}
          <div>
            <Label className="mb-3 block">
              1. ¿Cuál es la antigüedad aproximada de tu instalación eléctrica?
            </Label>
            <RadioGroup value={installationAge} onValueChange={setInstallationAge}>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value="0-5" id="age-0-5" />
                  <Label htmlFor="age-0-5" className="flex-1 cursor-pointer">
                    Menos de 5 años
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value="5-10" id="age-5-10" />
                  <Label htmlFor="age-5-10" className="flex-1 cursor-pointer">
                    Entre 5 y 10 años
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value="10-20" id="age-10-20" />
                  <Label htmlFor="age-10-20" className="flex-1 cursor-pointer">
                    Entre 10 y 20 años
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value="mas-20" id="age-20plus" />
                  <Label htmlFor="age-20plus" className="flex-1 cursor-pointer">
                    Más de 20 años
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Pregunta 2: Estado del Tablero */}
          <div>
            <Label className="mb-3 block">
              2. ¿Cómo describirías el estado de tu tablero eléctrico?
            </Label>
            <RadioGroup value={panelCondition} onValueChange={setPanelCondition}>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value="excelente" id="cond-excellent" />
                  <Label htmlFor="cond-excellent" className="flex-1 cursor-pointer">
                    Excelente - Nuevo o recientemente renovado
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value="bueno" id="cond-good" />
                  <Label htmlFor="cond-good" className="flex-1 cursor-pointer">
                    Bueno - En funcionamiento normal
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value="regular" id="cond-fair" />
                  <Label htmlFor="cond-fair" className="flex-1 cursor-pointer">
                    Regular - Con algunos signos de desgaste
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value="malo" id="cond-poor" />
                  <Label htmlFor="cond-poor" className="flex-1 cursor-pointer">
                    Malo - Necesita reparación o renovación
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Pregunta 3: Capacidad */}
          <div>
            <Label className="mb-3 block">
              3. ¿Tu tablero tiene espacios disponibles para nuevos circuitos?
            </Label>
            <RadioGroup value={availableCapacity} onValueChange={setAvailableCapacity}>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value="amplia" id="cap-ample" />
                  <Label htmlFor="cap-ample" className="flex-1 cursor-pointer">
                    Sí, tengo varios espacios disponibles
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value="limitada" id="cap-limited" />
                  <Label htmlFor="cap-limited" className="flex-1 cursor-pointer">
                    Algunos espacios, pero limitados
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value="insuficiente" id="cap-insufficient" />
                  <Label htmlFor="cap-insufficient" className="flex-1 cursor-pointer">
                    No tengo espacios disponibles
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value="no-se" id="cap-unknown" />
                  <Label htmlFor="cap-unknown" className="flex-1 cursor-pointer">
                    No estoy seguro/a
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>
        </div>
      </Card>

      {/* Alerta de Regularización */}
      {showAlert && (
        <Card className="p-6 mb-6 bg-orange-50 border-2 border-orange-300 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-orange-900 mb-2">
                Regularización Detectada
              </h3>
              <p className="text-orange-800 mb-3">
                Detectamos que su red podría requerir regularización para cumplir con la normativa TE1.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-orange-900">
                  <strong>No te preocupes:</strong> El diagnóstico técnico detallado y cualquier adecuación necesaria 
                  están incluidos en tu cuota mensual. Sin costos adicionales.
                </p>
              </div>
            </div>
          </div>
        </Card>
      )}

      <Button
        onClick={handleContinue}
        disabled={!isComplete}
        className="w-full bg-purple-600 hover:bg-purple-700"
      >
        {showAlert ? 'Procesando...' : 'Continuar con Asignación de Técnico'}
      </Button>
    </div>
  );
}
