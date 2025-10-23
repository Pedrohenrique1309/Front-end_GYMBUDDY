import { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

interface HalterModelProps {
  position?: [number, number, number]
  scale?: number
  rotation?: [number, number, number]
  autoRotate?: boolean
}

const HalterModel: React.FC<HalterModelProps> = ({ 
  position = [0, 0, 0], 
  scale = 1, 
  rotation = [0, 0, 0],
  autoRotate = true 
}) => {
  const meshRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const { scene } = useGLTF('/halter.glb')

  // Auto-rotação suave com variação no hover
  useFrame((_, delta) => {
    if (meshRef.current && autoRotate) {
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
    scene.traverse((child) => {
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
  }, [scene])

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
      <primitive object={scene} />
    </group>
  )
}

// Preload do modelo para melhor performance
useGLTF.preload('/halter.glb')

export default HalterModel
