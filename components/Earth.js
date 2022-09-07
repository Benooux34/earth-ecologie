import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import * as THREE from 'three'
import React from 'react'
import { Stars } from '@react-three/drei'

function Earth() {

    const earth = React.useRef()
    const cloud = React.useRef()
    const [earthMap, normalMap, cloudMap, specularMap] = useLoader(TextureLoader,
        [
            '/earth/earth_daymap.jpg',
            '/earth/earth_normal_map.jpg',
            '/earth/earth_clouds.jpg',
            '/earth/earth_specular_map.jpg'
        ])

    useFrame(({ clock }) => {
        earth.current.rotation.y = clock.getElapsedTime() * 0.05
        cloud.current.rotation.y = clock.getElapsedTime() * 0.05
    })

    return (
      <>
        <ambientLight intensity={0.2} />
        <directionalLight />
        <Stars 
            radius={300} 
            depth={60} 
            count={20000} 
            factor={7} 
            saturation={0} 
            fade={true}
        />
        <mesh scale={2.5} ref={cloud}>
            <sphereGeometry args={[1.005, 50, 50]} />
            <meshPhongMaterial 
                map={cloudMap} 
                opacity={0.2} 
                depthWrite={true} 
                transparent={true} 
                side={THREE.DoubleSide} 
            />
        </mesh>
        <mesh scale={2.5} ref={earth}>
            <sphereGeometry args={[1, 50, 50]} />
            <meshPhongMaterial specularMap={specularMap} />
            <meshStandardMaterial
                map={earthMap}
                normalMap={normalMap} 
            />
        </mesh>
      </>
    )

}

export default Earth