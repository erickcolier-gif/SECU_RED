import { useState } from 'react';
import { FileText, CheckCircle2, ArrowLeft, Calendar, Zap, Shield, Download } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { UserData } from '../App';

interface Step5Props {
  onBack: () => void;
  userData: UserData;
}

export function Step5DigitalClosure({ onBack, userData }: Step5Props) {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [signed, setSigned] = useState(false);

  const handleSign = () => {
    if (agreedToTerms && agreedToPrivacy) {
      setSigned(true);
    }
  };

  const netSavings = userData.savings - userData.monthlyFee;

  if (signed) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4 animate-in zoom-in duration-500">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="mb-2 text-green-900">¡Contrato Firmado Exitosamente!</h1>
          <p className="text-gray-600">
            Bienvenido a tu nueva era de energía solar
          </p>
        </div>

        <Card className="p-8 mb-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
              <h2 className="text-green-900">
                Todo Listo para Comenzar
              </h2>
            </div>
            <p className="text-green-800">
              Tu viaje hacia la energía limpia ha comenzado oficialmente
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-sm mb-1">
                <strong>Contrato Activo</strong>
              </p>
              <p className="text-xs text-gray-600">
                Firmado digitalmente
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-sm mb-1">
                <strong>Instalación Agendada</strong>
              </p>
              <p className="text-xs text-gray-600">
                Mañana, 10:00 AM
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-yellow-600" />
              </div>
              <p className="text-sm mb-1">
                <strong>Ahorro Iniciado</strong>
              </p>
              <p className="text-xs text-gray-600">
                ${netSavings.toLocaleString('es-CL')}/mes
              </p>
            </div>
          </div>
        </Card>

        {/* Resumen Final */}
        <Card className="p-6 mb-6">
          <h3 className="mb-4">Resumen de tu Contrato</h3>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Cuota Mensual Fija</span>
              <span>${userData.monthlyFee.toLocaleString('es-CL')}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Ahorro Mensual Estimado</span>
              <span className="text-green-600">${userData.savings.toLocaleString('es-CL')}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Ahorro Neto Mensual</span>
              <span className="text-green-600">
                ${netSavings.toLocaleString('es-CL')}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Inversión Inicial</span>
              <span className="text-blue-600">$0 (0% CAPEX)</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Región</span>
              <span className="capitalize">{userData.region}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Tipo de Contrato</span>
              <span>SECU-RED / PPA</span>
            </div>
          </div>
        </Card>

        {/* Próximos Pasos */}
        <Card className="p-6 mb-6">
          <h3 className="mb-4">Próximos Pasos</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm">1</span>
              </div>
              <div>
                <p className="text-sm">
                  <strong>Confirmación por Email</strong>
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Recibirás una copia del contrato y detalles de la visita técnica
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm">2</span>
              </div>
              <div>
                <p className="text-sm">
                  <strong>Visita Técnica</strong>
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  El técnico Carlos Mendoza realizará la inspección mañana a las 10:00 AM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm">3</span>
              </div>
              <div>
                <p className="text-sm">
                  <strong>Instalación del Sistema</strong>
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Una vez aprobada la certificación, procederemos con la instalación (7-14 días)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm">
                  <strong>¡Comienza tu Ahorro!</strong>
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Sistema activado y generando energía limpia
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="flex gap-3">
          <Button variant="outline" className="flex-1">
            <Download className="w-4 h-4 mr-2" />
            Descargar Contrato PDF
          </Button>
          <Button className="flex-1 bg-green-600 hover:bg-green-700">
            Ir al Portal del Cliente
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Button variant="ghost" onClick={onBack} className="mb-4">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Volver
      </Button>

      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
          <FileText className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="mb-2">Firma Digital del Contrato</h1>
        <p className="text-gray-600">
          Última etapa: Revisa y firma tu contrato SECU-RED
        </p>
      </div>

      {/* Resumen Pre-Firma */}
      <Card className="p-6 mb-6 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
        <h3 className="text-blue-900 mb-4">
          Resumen de tu Propuesta Final
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-blue-600" />
              <p className="text-sm">
                <strong>Cuota Mensual</strong>
              </p>
            </div>
            <p className="text-2xl text-blue-600">
              ${userData.monthlyFee.toLocaleString('es-CL')}
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <p className="text-sm">
                <strong>Ahorro Neto Mensual</strong>
              </p>
            </div>
            <p className="text-2xl text-green-600">
              ${netSavings.toLocaleString('es-CL')}
            </p>
          </div>
        </div>
      </Card>

      {/* Documento del Contrato */}
      <Card className="p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3>Contrato SECU-RED / PPA</h3>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Vista Previa
          </Button>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 max-h-96 overflow-y-auto border">
          <div className="prose prose-sm max-w-none">
            <p className="text-xs text-gray-600 mb-4">
              <strong>CONTRATO DE ARRENDAMIENTO DE SISTEMA SOLAR FOTOVOLTAICO</strong>
            </p>
            
            <div className="space-y-4 text-xs text-gray-700">
              <div>
                <p className="mb-2"><strong>1. PARTES</strong></p>
                <p>
                  Entre SECU-RED (en adelante "el Arrendador") y el cliente 
                  (en adelante "el Arrendatario"), se celebra el presente contrato.
                </p>
              </div>

              <div>
                <p className="mb-2"><strong>2. OBJETO DEL CONTRATO</strong></p>
                <p>
                  El Arrendador se compromete a instalar, mantener y operar un sistema de 
                  generación solar fotovoltaica en el domicilio del Arrendatario, ubicado en 
                  {userData.region ? ` ${userData.region}` : ' la dirección indicada'}.
                </p>
              </div>

              <div>
                <p className="mb-2"><strong>3. CUOTA MENSUAL Y CONDICIONES ECONÓMICAS</strong></p>
                <p>
                  El Arrendatario pagará una cuota mensual fija de <strong>${userData.monthlyFee.toLocaleString('es-CL')} CLP</strong>, 
                  que incluye: instalación, equipamiento, mantenimiento preventivo y correctivo, monitoreo 24/7, 
                  seguro de equipos, y gestión de certificaciones.
                </p>
              </div>

              <div>
                <p className="mb-2"><strong>4. INVERSIÓN INICIAL</strong></p>
                <p>
                  El presente contrato es modalidad <strong>0% CAPEX</strong>. El Arrendatario no realiza ninguna 
                  inversión inicial. Todos los costos de instalación y equipamiento son asumidos por el Arrendador.
                </p>
              </div>

              <div>
                <p className="mb-2"><strong>5. GARANTÍA DE AHORRO</strong></p>
                <p>
                  El Arrendador garantiza un ahorro mensual promedio de <strong>${userData.savings.toLocaleString('es-CL')} CLP</strong> 
                  en la cuenta eléctrica del Arrendatario. En caso de no alcanzar este ahorro por causas 
                  atribuibles al sistema, el Arrendador compensará la diferencia.
                </p>
              </div>

              <div>
                <p className="mb-2"><strong>6. MANTENIMIENTO Y MONITOREO</strong></p>
                <p>
                  El Arrendador proveerá mantenimiento preventivo semestral, correctivo cuando sea necesario, 
                  y monitoreo continuo del sistema sin costo adicional para el Arrendatario.
                </p>
              </div>

              <div>
                <p className="mb-2"><strong>7. CERTIFICACIONES Y CUMPLIMIENTO NORMATIVO</strong></p>
                <p>
                  El Arrendador garantiza el cumplimiento de todas las normativas vigentes, incluyendo 
                  certificación TE1 de la Superintendencia de Electricidad y Combustibles (SEC).
                  {userData.needsRegularization && ' La regularización de la instalación eléctrica existente está incluida en el servicio.'}
                </p>
              </div>

              <div>
                <p className="mb-2"><strong>8. DURACIÓN DEL CONTRATO</strong></p>
                <p>
                  El presente contrato tendrá una duración de 15 años, renovable automáticamente 
                  salvo notificación en contrario con 90 días de anticipación.
                </p>
              </div>

              <div>
                <p className="mb-2"><strong>9. PROPIEDAD DE LOS EQUIPOS</strong></p>
                <p>
                  Los equipos del sistema solar son y permanecen como propiedad del Arrendador durante 
                  la vigencia del contrato. Al término del contrato, el Arrendatario tendrá opción de compra.
                </p>
              </div>

              <div>
                <p className="mb-2"><strong>10. SEGURO</strong></p>
                <p>
                  El Arrendador mantendrá un seguro que cubra daños, robo, y responsabilidad civil 
                  de los equipos durante toda la vigencia del contrato.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Aceptación de Términos */}
      <Card className="p-6 mb-6">
        <h3 className="mb-4">Validación Técnica y Legal</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
            <Shield className="w-5 h-5 text-green-600 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm">
                <strong className="text-green-900">Contrato Validado Técnicamente</strong>
              </p>
              <p className="text-xs text-green-700 mt-1">
                Este contrato ha sido revisado y aprobado por nuestro equipo técnico y legal
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="terms"
              checked={agreedToTerms}
              onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
            />
            <Label htmlFor="terms" className="text-sm cursor-pointer">
              He leído y acepto los términos y condiciones del contrato de arrendamiento solar. 
              Entiendo que la cuota mensual es de ${userData.monthlyFee.toLocaleString('es-CL')} y que 
              no hay inversión inicial requerida.
            </Label>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="privacy"
              checked={agreedToPrivacy}
              onCheckedChange={(checked) => setAgreedToPrivacy(checked as boolean)}
            />
            <Label htmlFor="privacy" className="text-sm cursor-pointer">
              Acepto la política de privacidad y el tratamiento de mis datos personales conforme 
              a la Ley N° 19.628 sobre Protección de la Vida Privada.
            </Label>
          </div>
        </div>
      </Card>

      {/* Botón de Firma */}
      <Button
        onClick={handleSign}
        disabled={!agreedToTerms || !agreedToPrivacy}
        className="w-full bg-blue-600 hover:bg-blue-700"
        size="lg"
      >
        <FileText className="w-5 h-5 mr-2" />
        Firmar Electrónicamente y Autorizar Instalación
      </Button>

      <p className="text-xs text-center text-gray-500 mt-4">
        Al firmar, autorizas el inicio de la instalación del sistema solar en tu domicilio
      </p>
    </div>
  );
}