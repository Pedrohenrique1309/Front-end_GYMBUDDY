import React, { useState } from 'react'
import { gymbuddyIA } from '../Services/gymbuddyIA'

const TestIA: React.FC = () => {
  const [testResult, setTestResult] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const testarStatus = async () => {
    setIsLoading(true)
    setTestResult('🔍 Verificando status da IA...\n')
    
    try {
      const status = await gymbuddyIA.verificarStatus()
      setTestResult(prev => prev + `✅ Status: ${status ? 'ONLINE' : 'OFFLINE'}\n`)
    } catch (error) {
      setTestResult(prev => prev + `❌ Erro ao verificar status: ${error}\n`)
    }
    
    setIsLoading(false)
  }

  const testarChat = async () => {
    setIsLoading(true)
    setTestResult('💬 Testando chat com IA...\n')
    
    try {
      const resposta = await gymbuddyIA.enviarMensagem('1', 'Oi, me ajude com um treino personalizado')
      setTestResult(prev => prev + `✅ Resposta recebida:\n${resposta.mensagem}\n`)
      if (resposta.sugestoes && resposta.sugestoes.length > 0) {
        setTestResult(prev => prev + `💡 Sugestões: ${resposta.sugestoes!.join(', ')}\n`)
      }
    } catch (error) {
      setTestResult(prev => prev + `❌ Erro no chat: ${error}\n`)
    }
    
    setIsLoading(false)
  }

  const limparConsole = () => {
    setTestResult('')
    console.clear()
  }

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'rgba(0,0,0,0.9)',
      color: 'white',
      padding: '20px',
      borderRadius: '10px',
      zIndex: 9999,
      maxWidth: '400px',
      fontFamily: 'monospace'
    }}>
      <h3>🧪 Teste Backend IA</h3>
      
      <div style={{ marginBottom: '10px' }}>
        <button 
          onClick={testarStatus}
          disabled={isLoading}
          style={{ margin: '5px', padding: '5px 10px' }}
        >
          📡 Testar Status
        </button>
        
        <button 
          onClick={testarChat}
          disabled={isLoading}
          style={{ margin: '5px', padding: '5px 10px' }}
        >
          💬 Testar Chat
        </button>
        
        <button 
          onClick={limparConsole}
          style={{ margin: '5px', padding: '5px 10px' }}
        >
          🧹 Limpar
        </button>
      </div>

      <pre style={{
        background: '#222',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '12px',
        maxHeight: '300px',
        overflow: 'auto',
        whiteSpace: 'pre-wrap'
      }}>
        {testResult || 'Clique nos botões acima para testar...'}
      </pre>

      <div style={{ fontSize: '10px', marginTop: '10px', opacity: 0.7 }}>
        💡 Abra o Console (F12) para ver logs detalhados
      </div>
    </div>
  )
}

export default TestIA
