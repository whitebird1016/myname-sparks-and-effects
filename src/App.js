import * as THREE from 'three'
import { useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Effect from './components/effect.js'
import Sparks from './components/spark.js'
import Particles from './components/particle.js'
import NumberWrapper from './components/number'

const App = () => {
    const [hovered, hover] = useState(false)
    const mouse = useRef([0, 0])
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    useEffect(() => {
        document.body.style.cursor = hovered
            ? 'pointer'
            : "url('https://raw.githubusercontent.com/chenglou/react-motion/master/demos/demo8-draggable-list/cursor.png') 39 39, auto"
    }, [hovered])

    return (
        <>
            <Canvas
                linear
                dpr={[1, 2]}
                camera={{ fov: 100, position: [0, 0, 30] }}
                onCreated={({ gl }) => {
                    gl.setClearColor(new THREE.Color('#020207'))
                }}>
                <fog attach="fog" args={['white', 50, 190]} />
                <pointLight distance={100} intensity={4} color="white" />
                <NumberWrapper mouse={mouse} hover={hover} />
                <Particles count={isMobile ? 5000 : 10000} mouse={mouse} />
                <Sparks count={20} mouse={mouse} colors={['#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff', 'lightpink', 'lightblue']} />
                <Effect />
            </Canvas>

        </>
    )
}

export default App;
