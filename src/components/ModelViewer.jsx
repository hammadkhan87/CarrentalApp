import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense,useEffect,useState } from 'react'
import {OrbitControls,Environment,Stage} from "@react-three/drei"
import { Monkey } from './models/Monkey'
import { Hyundai_SUV } from './models/2024_hyundai_santa_fe'
const ModelViewer = () => {
    const [webglSupported,setWebglSuppored] = useState(true)
    useEffect(()=>{
        try {
            const canvas = document.createElement("canvas")
            const gl =canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
            if(!gl) setWebglSuppored(false)
        } catch (error) {
            setWebglSuppored(false)
        }
    },[])
    if(!webglSupported) return <div> WebGL not Supported on this device.</div>
  return (
    <Canvas camera={{position:[0.1,0.1,0.2],fov:20}} gl={{
        antialias:true,
        preserveDrawingBuffer:"high-performance"
    }}
    style={{width:"100%",height:"100%"}}
    onCreated={({gl})=>{
        gl.getContext().canvas.addEventListener("webglcontextlost",(e)=>{
            e.preventDefault()
            alert("WebGL context lost - reload the page.")
        } )}}
    >
        <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6}>
              {/* <Monkey/> */}
              <Hyundai_SUV/>
            </Stage>
              <Environment preset='city'/>
              <OrbitControls enableZoom={true} enablePan={false} autoRotate={true} autoRotateSpeed={1}
              minDistance={6}
              maxDistance={12}
              maxPolarAngle={Math.PI / 2 - 0.1}
              />
        </Suspense>
    </Canvas>
  )
}

export default ModelViewer