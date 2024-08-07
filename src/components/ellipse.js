import * as THREE from 'three'
import { useMemo } from 'react'

const Ellipse = (props) => {
    const geometry = useMemo(() => {
        const curve = new THREE.EllipseCurve(0, 0, 10, 3, 0, 2 * Math.PI, false, 0)
        const points = curve.getPoints(50)
        return new THREE.BufferGeometry().setFromPoints(points)
    }, [])
    return (
        <line geometry={geometry} {...props}>
            <meshBasicMaterial />
        </line>
    )
}

export default Ellipse;