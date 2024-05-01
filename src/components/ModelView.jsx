import {PerspectiveCamera, View,Html,OrbitControls} from "@react-three/drei"
import * as THREE from 'three'
import { Suspense } from "react";
import {Lights} from "./Lights.jsx";

export const ModelView = ({index,groupRef,gsapType,controlRef,setRotationState,item,size}) => {
    return (
        <View
        index={index}
        id={gsapType}
        className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
        >

            <ambientLight intensity={0.3}/>
            <PerspectiveCamera makeDefault position={[0,0,4]}/>
            <Lights />

            <OrbitControls
                makeDefault
                ref={controlRef}
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.4}
                target={new THREE.Vector3(0, 0 ,0)}
                onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
            />
        </View>
    )
}