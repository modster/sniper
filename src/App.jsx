import "./App.css"
import React from "react"
import { Canvas } from "@react-three/fiber"
import { BackSide, TextureLoader, Color } from "three"
import {
    Stars,
    Environment,
    OrbitControls,
    ContactShadows,
} from "@react-three/drei"

function App() {
    // const texture = new TextureLoader().load(
    //     "../public/public/2k_earth_nightmap.jpg"
    // )

    return (
        <Canvas camera={{ position: [1, 0, 0], fov: 50 }}>
            <ambientLight intensity={0.1} />
            <Environment preset="city" />
            <Stars
                radius={100}
                depth={50}
                count={5000}
                factor={4}
                saturation={0}
                fade
                speed={1}
            />
            <OrbitControls />
        </Canvas>
        /* <ContactShadows frames={1} scale={5} position={[0, -1, 0]} far={1} blur={5} opacity={0.5} color="#204080" /> */
        /*  */

        /*   <OrbitControls /> */
        // </Canvas>
    )
}

/**
 * @exports App
 */
export default App
