import { useRef, useEffect, useState, Suspense } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

interface HalterModelProps {
  position?: [number, number, number]
  scale?: number
  rotation?: [number, number, number]
  autoRotate?: boolean
}

const HalterModelContent: React.FC<HalterModelProps> = ({ 
  position = [0, 0, 0], 
  scale = 1, 
  rotation = [0, 0, 0],
  autoRotate = true 
}) => {
  const meshRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Tentar carregar o modelo com tratamento de erro
  let gltf: any = null
  try {
    gltf = useGLTF('/halter.glb')
    console.log('GLTF carregado com sucesso:', gltf)
  } catch (err) {
    console.error('Erro ao carregar GLTF:', err)
    setError(`Erro ao carregar modelo: ${err}`)
  }

  // Auto-rotação suave com variação no hover
  useFrame((_, delta) => {
    if (meshRef.current && autoRotate && !error) {
      const rotationSpeed = hovered ? 1.0 : 0.3
      meshRef.current.rotation.y += delta * rotationSpeed
      
      // Leve balanço vertical quando hovering
      if (hovered) {
        meshRef.current.position.y = Math.sin(Date.now() * 0.002) * 0.1
      } else {
        meshRef.current.position.y = 0
      }
      
      // Escala dinâmica no hover
      const targetScale = hovered ? scale * 1.1 : scale
      const currentScale = meshRef.current.scale.x
      meshRef.current.scale.setScalar(
        THREE.MathUtils.lerp(currentScale, targetScale, delta * 5)
      )
    }
  })

  // Configurar materiais para melhor visualização
  useEffect(() => {
    if (gltf?.scene && !error) {
      console.log('Configurando materiais do modelo')
      gltf.scene.traverse((child: any) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh
          if (mesh.material) {
            // Melhorar a aparência do material
            if ((mesh.material as THREE.MeshStandardMaterial).isMeshStandardMaterial) {
              const material = mesh.material as THREE.MeshStandardMaterial
              material.metalness = 0.8
              material.roughness = 0.2
              material.envMapIntensity = 1
            }
          }
        }
      })
    }
  }, [gltf, error])

  // Se há erro, renderizar um cubo como placeholder
  if (error || !gltf?.scene) {
    console.log('Renderizando fallback - erro:', error, 'gltf:', gltf)
    return (
      <group 
        ref={meshRef}
        position={position}
        scale={scale}
        rotation={rotation}
      >
        {/* Fallback: cubo simulando um halter */}
        <mesh>
          <boxGeometry args={[2, 0.3, 0.3]} />
          <meshStandardMaterial color="#ff0000" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[-0.8, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.2, 8]} />
          <meshStandardMaterial color="#333333" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0.8, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.2, 8]} />
          <meshStandardMaterial color="#333333" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>
    )
  }

  return (
    <group 
      ref={meshRef}
      position={position}
      scale={scale}
      rotation={rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setClicked(!clicked)}
    >
      <primitive object={gltf.scene} />
    </group>
  )
}

// Loading component
const LoadingFallback = () => (
  <group>
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#666666" transparent opacity={0.5} />
    </mesh>
  </group>
)

// Componente principal com Suspense
const HalterModel: React.FC<HalterModelProps> = (props) => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <HalterModelContent {...props} />
    </Suspense>
  )
}

// Preload do modelo para melhor performance
try {
  useGLTF.preload('/halter.glb')
  console.log('Modelo precarregado com sucesso')
} catch (err) {
  console.error('Erro no preload do modelo:', err)
}

export default HalterModel
