import { useState } from 'react'
import styled from 'styled-components'
import { FiHeart, FiMessageCircle, FiShare2, FiMoreVertical, FiImage, FiSearch } from 'react-icons/fi'
import { useUser } from '../../../contexts/UserContext'
import DefaultAvatar from '../../../assets/default-avatar'
import { Post } from '../index'

const API_BASE_URL = '/api/v1/gymbuddy'

interface PostFeedProps {
  posts: Post[]
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>
  loadPosts: () => void
}

const PostFeed = ({ posts, setPosts, loadPosts }: PostFeedProps) => {
  const { user } = useUser()
  const [newPostContent, setNewPostContent] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [commentInputs, setCommentInputs] = useState<{[key: number]: string}>({})

  const handleLike = async (postId: number) => {
    try {
      await fetch(`${API_BASE_URL}/curtida`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id_publicacao: postId,
          id_usuario: user?.id
        })
      })
      
      setPosts(prev => prev.map(post => 
        post.id === postId 
          ? { ...post, curtido: !post.curtido, curtidas: post.curtido ? post.curtidas - 1 : post.curtidas + 1 }
          : post
      ))
    } catch (error) {
      console.error('Erro ao curtir:', error)
      // Fallback para teste sem API
      setPosts(prev => prev.map(post => 
        post.id === postId 
          ? { ...post, curtido: !post.curtido, curtidas: post.curtido ? post.curtidas - 1 : post.curtidas + 1 }
          : post
      ))
    }
  }

  const handleComment = async (postId: number) => {
    const comment = commentInputs[postId]
    if (!comment?.trim()) return
    
    try {
      await fetch(`${API_BASE_URL}/comentario`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id_publicacao: postId,
          id_usuario: user?.id,
          conteudo: comment
        })
      })
      
      setPosts(prev => prev.map(post => 
        post.id === postId 
          ? { ...post, comentarios: post.comentarios + 1 }
          : post
      ))
      
      setCommentInputs(prev => ({ ...prev, [postId]: '' }))
    } catch (error) {
      console.error('Erro ao comentar:', error)
    }
  }

  const handleNewPost = async () => {
    if (!newPostContent.trim()) return
    
    try {
      await fetch(`${API_BASE_URL}/publicacao`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id_usuario: user?.id,
          conteudo: newPostContent
        })
      })
      
      loadPosts()
      setNewPostContent('')
    } catch (error) {
      console.error('Erro ao criar post:', error)
      // Adiciona post localmente para teste
      const newPost: Post = {
        id: posts.length + 1,
        usuario: {
          id: user?.id || 0,
          nome: user?.nome || 'Usuário',
          nickname: user?.nickname || '@usuario',
          foto: user?.foto
        },
        conteudo: newPostContent,
        curtidas: 0,
        comentarios: 0,
        compartilhamentos: 0,
        tempo: 'Agora',
        curtido: false
      }
      setPosts(prev => [newPost, ...prev])
      setNewPostContent('')
    }
  }

  return (
    <Container>
      <Header>
        <h1>Como seus amigos estão<br/>treinando hoje?</h1>
        
        <SearchInput>
          <FiSearch />
          <input 
            type="text" 
            placeholder="Buscar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchInput>
      </Header>

      <NewPostSection>
        <textarea
          placeholder="Compartilhe seu treino..."
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
        />
        <PostActions>
          <button className="attach">
            <FiImage />
            Foto/Vídeo
          </button>
          <button className="post" onClick={handleNewPost}>
            Publicar
          </button>
        </PostActions>
      </NewPostSection>

      <SectionTitle>Posts recentes</SectionTitle>

      <PostsGrid>
        {posts.filter(post => 
          searchQuery === '' || 
          post.conteudo.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.usuario.nome.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(post => (
          <PostCard key={post.id}>
            <PostHeader>
              <UserInfo>
                {post.usuario.foto ? (
                  <img src={post.usuario.foto} alt={post.usuario.nome} />
                ) : (
                  <DefaultAvatar size={40} />
                )}
                <div>
                  <h4>{post.usuario.nickname}</h4>
                  <span>{post.tempo}</span>
                </div>
              </UserInfo>
              <FiMoreVertical />
            </PostHeader>
            
            {post.imagem && (
              <PostImage src={post.imagem} alt="Post" />
            )}
            
            <PostContent>{post.conteudo}</PostContent>
            
            <PostStats>
              <button 
                className={post.curtido ? 'liked' : ''}
                onClick={() => handleLike(post.id)}
              >
                <FiHeart />
                {post.curtidas}
              </button>
              <button className="comment">
                <FiMessageCircle />
                {post.comentarios}
              </button>
              <button>
                <FiShare2 />
                {post.compartilhamentos || 0}
              </button>
            </PostStats>
            
            <CommentSection>
              <input
                type="text"
                placeholder="Adicionar comentário..."
                value={commentInputs[post.id] || ''}
                onChange={(e) => setCommentInputs(prev => ({ ...prev, [post.id]: e.target.value }))}
                onKeyDown={(e) => e.key === 'Enter' && handleComment(post.id)}
              />
            </CommentSection>
          </PostCard>
        ))}
      </PostsGrid>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Header = styled.div`
  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
    line-height: 1.2;
  }
`

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.2rem 2rem;
  
  svg {
    color: rgba(255, 255, 255, 0.5);
    font-size: 2rem;
  }
  
  input {
    flex: 1;
    background: transparent;
    border: none;
    color: white;
    font-size: 1.4rem;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.3);
    }
    
    &:focus {
      outline: none;
    }
  }
`

const NewPostSection = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 2rem;
  
  textarea {
    width: 100%;
    background: transparent;
    border: none;
    color: white;
    font-size: 1.6rem;
    resize: none;
    min-height: 8rem;
    margin-bottom: 1rem;
    font-family: inherit;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
    
    &:focus {
      outline: none;
    }
  }
`

const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .attach {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 2rem;
    padding: 0.8rem 1.5rem;
    color: rgba(255, 255, 255, 0.6);
    font-size: 1.4rem;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      color: white;
      border-color: rgba(255, 255, 255, 0.2);
      background: rgba(255, 255, 255, 0.05);
    }
    
    svg {
      font-size: 2rem;
    }
  }
  
  .post {
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 2rem;
    padding: 0.8rem 2rem;
    font-size: 1.4rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background: var(--primary-dark);
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(227, 6, 19, 0.3);
    }
  }
`

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin: 1rem 0;
  color: rgba(255, 255, 255, 0.9);
`

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`

const PostCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    border-color: rgba(227, 6, 19, 0.2);
  }
`

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  
  svg {
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    font-size: 2rem;
    
    &:hover {
      color: white;
    }
  }
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    object-fit: cover;
  }
  
  h4 {
    font-size: 1.4rem;
    margin: 0;
  }
  
  span {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.5);
  }
`

const PostImage = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;
`

const PostContent = styled.p`
  padding: 1.5rem;
  font-size: 1.4rem;
  line-height: 1.6;
  margin: 0;
`

const PostStats = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  
  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.6);
    font-size: 1.4rem;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      color: white;
      transform: scale(1.1);
    }
    
    &.liked {
      color: var(--primary);
      
      svg {
        fill: var(--primary);
      }
    }
    
    svg {
      font-size: 2rem;
    }
  }
`

const CommentSection = styled.div`
  padding: 1rem 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  
  input {
    width: 100%;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 2rem;
    padding: 0.8rem 1.5rem;
    color: white;
    font-size: 1.3rem;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
    
    &:focus {
      outline: none;
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(227, 6, 19, 0.3);
    }
  }
`

export default PostFeed
