import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'

const Fatline = ({ curve, width, color, speed }) => {
    const material = useRef()
    useFrame(() => (material.current.uniforms.dashOffset.value -= speed))
    return (
        <mesh>
            <meshLine attach="geometry" vertices={curve} />
            <meshLineMaterial ref={material} transparent depthTest={false} lineWidth={width} color={color} dashArray={0.1} dashRatio={0.95} />
        </mesh>
    )
}

export default Fatline