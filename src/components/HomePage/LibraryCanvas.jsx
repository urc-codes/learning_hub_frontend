import {React, Suspense, useEffect, useState} from 'react'
import {Canvas} from '@react-three/fiber';
import {OrbitControls, Preload, useGLTF} from '@react-three/drei'

import Loader from '../loader';


const Library = ({isMobile}) => {
    const library = useGLTF('./library/scene.gltf')
    return (
      <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <pointLight intensity={1} />
        <spotLight position={[55,15,-10]} angle={0.12} intensity={2} 
        castShadow
        shadow-mapSize={1024}
        />
        <primitive object={library.scene} 
        scale={isMobile ? 1: 6.5}
        position={isMobile ? [0,3,-2.2]: [-3, -1.25, -0.5]}
        rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
    )
  }
  

export const LibraryCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width:200px)')
      setIsMobile(mediaQuery.matches)
      
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      }
      mediaQuery.addEventListener('change', handleMediaQueryChange);
  
      return() => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange)
      }
    },[])

  return (
    <Canvas frameloop='demand' shadows camera={{position: [20, 3, 5], fov:25}}
    gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls 
        autoRotate
        enableZoom={false} 
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}
        />
        <Library isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
