import Ellipse from "./ellipse";

const ReactAtom = (props) => {
    return (
        <group {...props}>
            <Ellipse />
            <Ellipse rotation={[0, 0, Math.PI / 3]} />
            <Ellipse rotation={[0, 0, -Math.PI / 3]} />
            <mesh>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshBasicMaterial color="red" />
            </mesh>
        </group>
    )
}

export default ReactAtom;
