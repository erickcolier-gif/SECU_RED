import { CheckCircle2, Shield, Zap, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { UserData } from '../App';

interface Step2Props {
  onNext: () => void;
  onBack: () => void;
  userData: UserData;
}

export function Step2OfferConfirmation({ onNext, onBack, userData }: Step2Props) {
  const netSavings = userData.savings - userData.monthlyFee;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Button variant="ghost" onClick={onBack} className="mb-4">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Volver
      </Button>

      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h1 className="mb-2">Tu Propuesta de Valor Personalizada</h1>
        <p className="text-gray-600">
          Resumen de tu oferta Cero CAPEX
        </p>
      </div>

      {/* Mensaje Clave Destacado */}
      <Card className="p-8 mb-6 bg-gradient-to-r from-blue-600 to-green-600 text-white border-0">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-8 h-8" />
            <h2 className="text-white">
              Oferta Garantizada
            </h2>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-4">
            <p className="text-xl mb-4">
              Usted paga <strong className="text-3xl">${userData.monthlyFee.toLocaleString('es-CL')}/mes</strong>
            </p>
            <p className="text-xl">
              Garantizamos un ahorro de <strong className="text-3xl text-yellow-300">${userData.savings.toLocaleString('es-CL')}/mes</strong>
            </p>
          </div>
          <div className="bg-yellow-400 text-gray-900 rounded-lg p-4 inline-block">
            <p className="text-2xl">
              <strong>0% inversión inicial</strong>
            </p>
          </div>
        </div>
      </Card>

      {/* Detalles de la Propuesta */}
      <Card className="p-6 mb-6">
        <h3 className="mb-4">Condiciones Claras del Servicio</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="mb-1">
                <strong>Cuota Mensual Fija</strong>
              </p>
              <p className="text-sm text-gray-600">
                ${userData.monthlyFee.toLocaleString('es-CL')} mensuales durante el período de contrato. Sin aumentos sorpresa.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1">
              <p className="mb-1">
                <strong>Ahorro Neto Mensual</strong>
              </p>
              <p className="text-sm text-gray-600">
                ${netSavings.toLocaleString('es-CL')} de ahorro real después de pagar la cuota.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-purple-600" />
            </div>
            <div className="flex-1">
              <p className="mb-1">
                <strong>Sin Inversión Inicial (0% CAPEX)</strong>
              </p>
              <p className="text-sm text-gray-600">
                No pagas instalación, equipos ni mantención. Todo incluido en tu cuota mensual.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-orange-600" />
            </div>
            <div className="flex-1">
              <p className="mb-1">
                <strong>Mantenimiento y Monitoreo Incluido</strong>
              </p>
              <p className="text-sm text-gray-600">
                Mantenimiento preventivo, correctivo y monitoreo 24/7 sin costo adicional.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-teal-600" />
            </div>
            <div className="flex-1">
              <p className="mb-1">
                <strong>Garantía de Producción</strong>
              </p>
              <p className="text-sm text-gray-600">
                Si el sistema no genera el ahorro prometido, compensamos la diferencia.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Comparación Antes/Después */}
      <Card className="p-6 mb-6">
        <h3 className="mb-4">Comparación de Costos</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 text-center">
            <p className="text-sm text-red-600 mb-2">Sin Solar (Actual)</p>
            <p className="text-red-900">
              ${userData.monthlyBill.toLocaleString('es-CL')}/mes
            </p>
            <p className="text-xs text-red-700 mt-2">
              Pago total a compañía eléctrica
            </p>
          </div>
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
            <p className="text-sm text-green-600 mb-2">Con Solar (Nuevo)</p>
            <p className="text-green-900">
              ${userData.monthlyFee.toLocaleString('es-CL')}/mes
            </p>
            <p className="text-xs text-green-700 mt-2">
              Cuota de renting + ahorro de ${netSavings.toLocaleString('es-CL')}
            </p>
          </div>
        </div>
      </Card>

      <Button onClick={onNext} className="w-full bg-blue-600 hover:bg-blue-700">
        Iniciar Certificación
      </Button>

      <p className="text-xs text-center text-gray-500 mt-4">
        Al continuar, iniciarás el proceso de certificación técnica de tu instalación eléctrica.
      </p>
    </div>
  );
}
