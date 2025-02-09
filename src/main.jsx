import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
)
/**
 * @todo error boundary
 */
// import { useErrorBoundary } from 'use-error-boundary'

// function App() {
//   const { ErrorBoundary, didCatch, error } = useErrorBoundary()
//   return didCatch ? (
//     <div>{error.message}</div>
//   ) : (
//     <ErrorBoundary>
//       <Canvas>
//         <mesh />
//       </Canvas>
//     </ErrorBoundary>
//   )
// }
