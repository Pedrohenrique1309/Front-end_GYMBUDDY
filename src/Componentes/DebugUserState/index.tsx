import React from 'react';
import { useUser } from '../../Contexts/UserContext';
import styled from 'styled-components';

const DebugContainer = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  font-size: 0.8rem;
  max-width: 300px;
  z-index: 10000;
  border: 1px solid #333;
  
  h4 {
    margin: 0 0 0.5rem 0;
    color: #E30613;
  }
  
  .item {
    margin: 0.25rem 0;
    display: flex;
    gap: 0.5rem;
  }
  
  .label {
    font-weight: bold;
    color: #ccc;
  }
  
  .value {
    color: white;
    word-break: break-all;
  }
`;

export const DebugUserState: React.FC = () => {
  const { user, isLoggedIn, isLoading } = useUser();
  
  // Dados do localStorage
  const userDataInStorage = localStorage.getItem('userData');
  const tokenInStorage = localStorage.getItem('authToken');
  
  let parsedUserData = null;
  try {
    parsedUserData = userDataInStorage ? JSON.parse(userDataInStorage) : null;
  } catch (error) {
    parsedUserData = 'ERRO_PARSE';
  }
  
  return (
    <DebugContainer>
      <h4>🐛 Debug User State</h4>
      
      <div className="item">
        <span className="label">Loading:</span>
        <span className="value">{isLoading ? '🔄 TRUE' : '✅ FALSE'}</span>
      </div>
      
      <div className="item">
        <span className="label">Logged In:</span>
        <span className="value">{isLoggedIn ? '✅ TRUE' : '❌ FALSE'}</span>
      </div>
      
      <div className="item">
        <span className="label">User in Context:</span>
        <span className="value">{user ? `${user.nome} (ID: ${user.id})` : '❌ NULL'}</span>
      </div>
      
      <div className="item">
        <span className="label">User in Storage:</span>
        <span className="value">
          {parsedUserData 
            ? (parsedUserData === 'ERRO_PARSE' 
                ? '❌ ERRO_PARSE' 
                : `${parsedUserData.nome} (ID: ${parsedUserData.id})`)
            : '❌ NULL'
          }
        </span>
      </div>
      
      <div className="item">
        <span className="label">Token in Storage:</span>
        <span className="value">{tokenInStorage ? '✅ PRESENTE' : '❌ AUSENTE'}</span>
      </div>
      
      <div className="item">
        <span className="label">Storage Keys:</span>
        <span className="value">{Object.keys(localStorage).length} keys</span>
      </div>
    </DebugContainer>
  );
};
