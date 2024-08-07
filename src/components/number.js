import { useFrame } from '@react-three/fiber'
import { useRef, Suspense } from 'react'
import Text from './text'
import ReactAtom from './reactatom'

const NumberWrapper = ({ hover }) => {
    const ref = useRef()
    useFrame((state) => {
        if (ref.current) {
            // ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, state.mouse.x * 2, 0.1)
            // ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, state.mouse.y / 2, 0.1)
            ref.current.rotation.y = 0.1
        }
    })
    return (
        <Suspense fallback={null}>
            <group ref={ref} >
                <Text
                    size={6}
                    onPointerOver={() => hover(true)}
                    onPointerOut={() => hover(false)}>
                    Chee Ming
                </Text>
                <ReactAtom position={[50, 25, 0]} scale={[1, 0.7, 1]} />
            </group>
        </Suspense>
    )
}

export default NumberWrapper;