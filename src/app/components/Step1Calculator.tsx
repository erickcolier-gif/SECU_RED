import { useState } from 'react';
import { Calculator, Zap, TrendingDown } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card } from './ui/card';
import { UserData } from '../App';

interface Step1Props {
  onNext: () => void;
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
}

export function Step1Calculator({ onNext, userData, updateUserData }: Step1Props) {
  const [monthlyBill, setMonthlyBill] = useState(userData.monthlyBill || 80000);
  const [region, setRegion] = useState(userData.region || '');
  const [calculated, setCalculated] = useState(false);

  const handleCalculate = () => {
    // Simulación de cálculo
    const savings = Math.floor(monthlyBill * 0.35); // 35% de ahorro
    const monthlyFee = Math.floor(monthlyBill * 0.25); // 25% del gasto como cuota
    
    updateUserData({
      monthlyBill,
      region,
      savings,
      monthlyFee,
    });
    
    setCalculated(true);
  };

  const handleContinue = () => {
    if (monthlyBill > 0 && region) {
      if (!calculated) {
        handleCalculate();
      } else {
        onNext();
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
          <Calculator className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="mb-2">Calculadora de Ahorro Solar</h1>
        <p className="text-gray-600">
          Descubre cuánto puedes ahorrar con energía solar sin inversión inicial
        </p>
      </div>

      <Card className="p-6 mb-6">
        <div className="space-y-6">
          <div>
            <Label htmlFor="monthly-bill">Gasto Eléctrico Mensual Promedio</Label>
            <div className="relative mt-2">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <Input
                id="monthly-bill"
                type="number"
                value={monthlyBill}
                onChange={(e) => {
                  setMonthlyBill(Number(e.target.value));
                  setCalculated(false);
                }}
                className="pl-8"
                placeholder="80000"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="region">Región</Label>
            <Select value={region} onValueChange={(value) => {
              setRegion(value);
              setCalculated(false);
            }}>
              <SelectTrigger id="region" className="mt-2">
                <SelectValue placeholder="Selecciona tu región" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="metropolitana">Región Metropolitana</SelectItem>
                <SelectItem value="valparaiso">Valparaíso</SelectItem>
                <SelectItem value="biobio">Biobío</SelectItem>
                <SelectItem value="araucania">Araucanía</SelectItem>
                <SelectItem value="coquimbo">Coquimbo</SelectItem>
                <SelectItem value="maule">Maule</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {!calculated ? (
            <Button
              onClick={handleCalculate}
              disabled={!monthlyBill || !region}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Calcular Ahorro
            </Button>
          ) : (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingDown className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-green-900 mb-2">
                      Tu Ahorro Potencial Neto
                    </h3>
                    <p className="text-green-700 mb-3">
                      Basado en tu consumo mensual de ${monthlyBill.toLocaleString('es-CL')}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-sm text-gray-600 mb-1">Ahorro Mensual</p>
                        <p className="text-green-600">
                          ${userData.savings.toLocaleString('es-CL')}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-sm text-gray-600 mb-1">Cuota Mensual Fija</p>
                        <p className="text-blue-600">
                          ${userData.monthlyFee.toLocaleString('es-CL')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-blue-900">
                      <strong>Transparencia económica inmediata</strong>
                    </p>
                    <p className="text-sm text-blue-700 mt-1">
                      100% de transparencia en costos. Sin sorpresas, sin letra chica.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleContinue}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Continuar con mi Propuesta
              </Button>
            </div>
          )}
        </div>
      </Card>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="mb-4">¿Por qué elegir SECU-RED?</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-600">💰</span>
            </div>
            <p className="text-sm">
              <strong>0% Inversión Inicial</strong>
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Sin CAPEX, sin riesgo financiero
            </p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-green-600">✓</span>
            </div>
            <p className="text-sm">
              <strong>Ahorro Garantizado</strong>
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Reducción inmediata en tu cuenta
            </p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-purple-600">⚡</span>
            </div>
            <p className="text-sm">
              <strong>Instalación Rápida</strong>
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Técnicos certificados SEC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}