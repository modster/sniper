import { Canvas } from "@react-three/fiber"
// import "./App.css"
import {
    Stars,
    Environment,
    OrbitControls,
    ContactShadows,
} from "@react-three/drei"

function App() {
    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            <Canvas camera={{ position: [0, 5, 0], fov: 50 }}>
                <Environment preset="night" />
                <ambientLight intensity={0.5} />
                {/* <pointLight position={[10, 10, 10]} /> */}
                <Stars
                    radius={100}
                    depth={50}
                    count={5000}
                    factor={3}
                    saturation={1}
                    fade={1}
                    speed={0.2}
                />
                <mesh scale={1}>
                    <sphereGeometry args={[1, 64, 64]} />
                    <meshStandardMaterial color="blue" />
                </mesh>
                <OrbitControls />
            </Canvas>
        </div>
    )
}

export default App
