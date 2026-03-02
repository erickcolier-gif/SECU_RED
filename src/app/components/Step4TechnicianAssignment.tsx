import { MapPin, Star, Shield, Clock, Phone, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { UserData } from '../App';

interface Step4Props {
  onNext: () => void;
  onBack: () => void;
  userData: UserData;
}

export function Step4TechnicianAssignment({ onNext, onBack, userData }: Step4Props) {
  // Datos simulados del técnico
  const technician = {
    name: 'Carlos Mendoza',
    certificationNumber: 'SEC-14523',
    rating: 4.8,
    reviewCount: 127,
    specialization: 'Instalaciones Fotovoltaicas y TE1',
    arrivalDate: 'Mañana',
    arrivalTime: '10:00 AM',
    phone: '+56 9 8765 4321',
    estimatedDuration: '3-4 horas',
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Button variant="ghost" onClick={onBack} className="mb-4">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Volver
      </Button>

      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
          <Shield className="w-8 h-8 text-teal-600" />
        </div>
        <h1 className="mb-2">Técnico Certificado Asignado</h1>
        <p className="text-gray-600">
          Tu especialista en instalaciones solares y certificación SEC
        </p>
      </div>

      {/* Perfil del Técnico */}
      <Card className="p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Avatar y Info Básica */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-24 h-24 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center mb-3">
              <span className="text-white text-3xl">CM</span>
            </div>
            <div className="flex items-center gap-1 mb-2">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold">{technician.rating}</span>
              <span className="text-sm text-gray-600">({technician.reviewCount} reseñas)</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Shield className="w-4 h-4 text-teal-600" />
              <span>Certificado SEC</span>
            </div>
          </div>

          {/* Información Detallada */}
          <div className="flex-1">
            <h2 className="mb-1">{technician.name}</h2>
            <p className="text-gray-600 mb-4">
              Certificación {technician.certificationNumber}
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm">
                    <strong>Especialización</strong>
                  </p>
                  <p className="text-sm text-gray-600">{technician.specialization}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm">
                    <strong>Fecha y Hora de Visita</strong>
                  </p>
                  <p className="text-sm text-gray-600">
                    {technician.arrivalDate} a las {technician.arrivalTime}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Duración estimada: {technician.estimatedDuration}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm">
                    <strong>Contacto Directo</strong>
                  </p>
                  <p className="text-sm text-gray-600">{technician.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Mapa Simulado */}
      <Card className="p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-5 h-5 text-red-600" />
          <h3>Ubicación en Tiempo Real</h3>
        </div>
        <div className="bg-gray-100 rounded-lg overflow-hidden" style={{ height: '300px' }}>
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-100 relative">
            {/* Simulación de mapa */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 400 300">
                <path
                  d="M 50,150 Q 100,100 150,120 T 250,140 T 350,150"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="5,5"
                />
              </svg>
            </div>
            
            {/* Marcador de ubicación */}
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg animate-pulse">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4">
                <p className="text-sm">
                  <strong>Carlos se encuentra en camino</strong>
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Llegada estimada: {technician.arrivalDate} a las {technician.arrivalTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Mensaje de Confianza */}
      <Card className="p-6 mb-6 bg-gradient-to-r from-teal-50 to-blue-50 border-2 border-teal-200">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-teal-900 mb-2">
              Cumplimiento Normativo Garantizado
            </h3>
            <p className="text-teal-800 mb-3">
              El Técnico <strong>{technician.name}</strong>, con certificación SEC {technician.certificationNumber} 
              y rating de {technician.rating} ⭐, llegará {technician.arrivalDate.toLowerCase()} a las {technician.arrivalTime}.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3">
                <p className="text-xs text-gray-600 mb-1">Experiencia profesional</p>
                <p className="text-sm text-teal-900">
                  <strong>{technician.reviewCount}+ instalaciones completadas</strong>
                </p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="text-xs text-gray-600 mb-1">Trazabilidad completa</p>
                <p className="text-sm text-teal-900">
                  <strong>Seguimiento en tiempo real</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Qué Esperar */}
      <Card className="p-6 mb-6">
        <h3 className="mb-4">¿Qué sucederá durante la visita?</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 text-sm">1</span>
            </div>
            <div>
              <p className="text-sm">
                <strong>Inspección Técnica Completa</strong>
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Revisión de tu instalación eléctrica actual y tablero
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 text-sm">2</span>
            </div>
            <div>
              <p className="text-sm">
                <strong>Diagnóstico TE1</strong>
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Evaluación de cumplimiento normativo SEC
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 text-sm">3</span>
            </div>
            <div>
              <p className="text-sm">
                <strong>Plan de Instalación</strong>
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Diseño personalizado del sistema solar para tu hogar
              </p>
            </div>
          </div>

          {userData.needsRegularization && (
            <div className="flex items-start gap-3 p-3 bg-orange-50 border border-orange-200 rounded-lg">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-orange-600 text-sm">4</span>
              </div>
              <div>
                <p className="text-sm">
                  <strong>Regularización Incluida</strong>
                </p>
                <p className="text-xs text-orange-700 mt-1">
                  Adecuación de red eléctrica sin costo adicional
                </p>
              </div>
            </div>
          )}
        </div>
      </Card>

      <Button onClick={onNext} className="w-full bg-teal-600 hover:bg-teal-700">
        Continuar al Cierre Digital
      </Button>
    </div>
  );
}
