# 📚 Documentação dos Serviços de API

Este diretório contém todos os serviços de integração com a API do GYM BUDDY.

## 🔧 Configuração

### URL Base da API
A URL base está configurada em `api.ts`:
```typescript
const API_BASE_URL = 'http://localhost:3000';
```

**⚠️ IMPORTANTE:** Ajuste essa URL conforme o ambiente:
- Desenvolvimento: `http://localhost:3000`
- Produção: `https://sua-api.com`

## 👤 Serviço de Usuário

### Importação
```typescript
import { useUserActions } from '../hooks/useUserActions';
// ou
import { inserirUsuario, buscarUsuario, atualizarUsuario, excluirUsuario } from '../services/userService';
```

### Exemplos de Uso

#### 1. Criar Usuário
```typescript
const { createUser, loading, error } = useUserActions();

const handleCreateUser = async () => {
  try {
    const result = await createUser({
      nome: 'João Silva',
      email: 'joao@example.com',
      senha: 'senha123',
      username: 'joaosilva',
      telefone: '11999999999'
    });
    console.log('Usuário criado:', result);
  } catch (error) {
    console.error('Erro:', error);
  }
};
```

#### 2. Buscar Usuário por ID
```typescript
const { getUser } = useUserActions();

const userData = await getUser(1);
```

#### 3. Atualizar Usuário
```typescript
const { updateUser } = useUserActions();

await updateUser(1, {
  nome: 'João Silva Jr.',
  biografia: 'Atleta focado em resultados'
});
```

#### 4. Atualizar Senha
```typescript
const { updatePassword } = useUserActions();

await updatePassword({
  email: 'joao@example.com',
  senha_antiga: 'senha123',
  senha_nova: 'novaSenha456'
});
```

#### 5. Excluir Usuário
```typescript
const { deleteUser } = useUserActions();

await deleteUser(1);
```

## 📝 Serviço de Publicações

### Importação
```typescript
import { usePublicationActions } from '../hooks/usePublicationActions';
// ou
import { inserirPublicacao, buscarPublicacao, atualizarPublicacao, excluirPublicacao } from '../services/publicationService';
```

### Exemplos de Uso

#### 1. Criar Publicação
```typescript
const { createPublication, loading, error } = usePublicationActions();

const handleCreatePost = async () => {
  try {
    const result = await createPublication({
      id_usuario: 1,
      conteudo: 'Treino pesado hoje! 💪',
      foto: 'https://example.com/foto.jpg'
    });
    console.log('Publicação criada:', result);
  } catch (error) {
    console.error('Erro:', error);
  }
};
```

#### 2. Listar Publicações
```typescript
const { listPublications } = usePublicationActions();

const posts = await listPublications();
```

#### 3. Buscar Publicação por ID
```typescript
const { getPublication } = usePublicationActions();

const post = await getPublication(1);
```

#### 4. Atualizar Publicação
```typescript
const { updatePublication } = usePublicationActions();

await updatePublication(1, {
  conteudo: 'Treino atualizado! 🔥',
  curtidas: 50
});
```

#### 5. Excluir Publicação
```typescript
const { deletePublication } = usePublicationActions();

await deletePublication(1);
```

## 🎯 Exemplo Completo em Componente

### Página de Perfil do Usuário
```typescript
import React, { useState, useEffect } from 'react';
import { useUserActions } from '../hooks/useUserActions';
import { usePublicationActions } from '../hooks/usePublicationActions';

const PerfilPage = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [posts, setPosts] = useState([]);
  
  const { getUser, updateUser, deleteUser, loading: userLoading } = useUserActions();
  const { listPublications, createPublication, deletePublication, loading: postLoading } = usePublicationActions();

  // Carregar dados do usuário
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const data = await getUser(userId);
        setUserData(data);
      } catch (error) {
        console.error('Erro ao carregar usuário:', error);
      }
    };
    loadUserData();
  }, [userId]);

  // Carregar publicações
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await listPublications();
        // Filtrar publicações do usuário
        const userPosts = data.filter(post => post.id_usuario === userId);
        setPosts(userPosts);
      } catch (error) {
        console.error('Erro ao carregar publicações:', error);
      }
    };
    loadPosts();
  }, [userId]);

  // Editar perfil
  const handleEditProfile = async (updatedData) => {
    try {
      await updateUser(userId, updatedData);
      setUserData({ ...userData, ...updatedData });
      alert('Perfil atualizado com sucesso!');
    } catch (error) {
      alert('Erro ao atualizar perfil');
    }
  };

  // Criar nova publicação
  const handleCreatePost = async (postData) => {
    try {
      const newPost = await createPublication({
        ...postData,
        id_usuario: userId
      });
      setPosts([newPost, ...posts]);
      alert('Publicação criada com sucesso!');
    } catch (error) {
      alert('Erro ao criar publicação');
    }
  };

  // Excluir publicação
  const handleDeletePost = async (postId) => {
    try {
      await deletePublication(postId);
      setPosts(posts.filter(post => post.id !== postId));
      alert('Publicação excluída com sucesso!');
    } catch (error) {
      alert('Erro ao excluir publicação');
    }
  };

  if (userLoading || postLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>{userData?.nome}</h1>
      <p>{userData?.biografia}</p>
      
      <button onClick={() => handleEditProfile({ biografia: 'Nova bio' })}>
        Editar Perfil
      </button>
      
      <div>
        <h2>Publicações</h2>
        {posts.map(post => (
          <div key={post.id}>
            <p>{post.conteudo}</p>
            <button onClick={() => handleDeletePost(post.id)}>Excluir</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerfilPage;
```

## 🔐 Autenticação

Os serviços já estão configurados para:
- ✅ Adicionar token JWT automaticamente nas requisições
- ✅ Tratar erro 401 (não autenticado)
- ✅ Redirecionar para login em caso de token inválido

O token é armazenado em `localStorage` com a chave `authToken`.

## 🚀 Tipos TypeScript

Todos os serviços são totalmente tipados:

### Usuario
```typescript
interface Usuario {
  id?: number;
  nome: string;
  email: string;
  senha?: string;
  foto?: string;
  data_nascimento?: string;
  username?: string;
  telefone?: string;
  biografia?: string;
}
```

### Publicacao
```typescript
interface Publicacao {
  id?: number;
  id_usuario: number;
  conteudo: string;
  foto?: string;
  video?: string;
  data_publicacao?: string;
  curtidas?: number;
  comentarios?: number;
}
```

## ⚠️ Tratamento de Erros

Todos os hooks retornam `loading` e `error`:

```typescript
const { createUser, loading, error } = useUserActions();

if (loading) return <Spinner />;
if (error) return <ErrorMessage message={error} />;
```

## 📦 Instalação de Dependências

Certifique-se de ter o Axios instalado:
```bash
npm install axios
# ou
yarn add axios
```
