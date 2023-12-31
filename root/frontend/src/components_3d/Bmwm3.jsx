/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 bmwm3.gltf 
Author: Car2022 (https://sketchfab.com/Car2022)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/bmw-m3-g80-3e7ccba65e1d46e493522679606b9052
Title: BMW M3 G80
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Bmwm3(props) {
  const { nodes, materials } = useGLTF('/Models/bmwm3.gltf')
  return (
    <group {...props} dispose={null} scale={2}>
      <group position={[0, 0, -0.01]}>
        <mesh geometry={nodes.Object_28.geometry} material={materials.headlight} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.headlight} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.blue_headlight_material} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.headlight_metallic_material} />
        <mesh geometry={nodes.Object_32.geometry} material={materials['headlight_emmissive_material.001']} />
        <mesh geometry={nodes.Object_33.geometry} material={materials.headlight_emmissive_material} />
      </group>
      <group scale={0.994}>
        <mesh geometry={nodes.Object_40.geometry} material={materials.taillight} />
        <mesh geometry={nodes.Object_41.geometry} material={materials.taillight} />
        <mesh geometry={nodes.Object_42.geometry} material={materials.taillight_2} />
      </group>
      <group position={[0.316, 0.723, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.154}>
        <mesh geometry={nodes.Object_65.geometry} material={materials.black_matte} />
        <mesh geometry={nodes.Object_66.geometry} material={materials.bmw_logo} />
      </group>
      <group position={[0.307, 0.403, -0.441]} scale={0.136}>
        <mesh geometry={nodes.Object_70.geometry} material={materials.seats_colored} />
        <mesh geometry={nodes.Object_71.geometry} material={materials.seats_black} />
        <mesh geometry={nodes.Object_72.geometry} material={materials.black_matte} />
      </group>
      <group position={[0.682, 0.812, 0]}>
        <mesh geometry={nodes.Object_76.geometry} material={materials.black_matte} />
        <mesh geometry={nodes.Object_77.geometry} material={materials.LED_lights} />
      </group>
      <group position={[0.135, 0.762, -2.504]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_81.geometry} material={materials.licence_plate} />
        <mesh geometry={nodes.Object_82.geometry} material={materials.black_matte} />
      </group>
      <group position={[0.135, 0.479, 2.633]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_84.geometry} material={materials.licence_plate} />
        <mesh geometry={nodes.Object_85.geometry} material={materials.black_matte} />
      </group>
      <group position={[0.014, 0.278, 1.24]} rotation={[0, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.Object_89.geometry} material={materials.rims} />
        <mesh geometry={nodes.Object_90.geometry} material={materials.rims} />
        <mesh geometry={nodes.Object_91.geometry} material={materials.rims} />
        <mesh geometry={nodes.Object_92.geometry} material={materials.rims} />
        <mesh geometry={nodes.Object_93.geometry} material={materials.rims} />
        <mesh geometry={nodes.Object_94.geometry} material={materials.rims} />
        <mesh geometry={nodes.Object_95.geometry} material={materials.bmw_logo} />
        <mesh geometry={nodes.Object_96.geometry} material={materials.black_matte} />
      </group>
      <group position={[0.013, 0.278, -1.041]} rotation={[0, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.Object_98.geometry} material={materials.rims} />
        <mesh geometry={nodes.Object_99.geometry} material={materials.rims} />
        <mesh geometry={nodes.Object_100.geometry} material={materials.rims} />
        <mesh geometry={nodes.Object_101.geometry} material={materials.rims} />
        <mesh geometry={nodes.Object_102.geometry} material={materials.rims} />
        <mesh geometry={nodes.Object_103.geometry} material={materials.rims} />
        <mesh geometry={nodes.Object_104.geometry} material={materials.bmw_logo} />
        <mesh geometry={nodes.Object_105.geometry} material={materials.black_matte} />
      </group>
      <group position={[0.549, 0.277, 1.24]} scale={[-0.145, 0.18, 0.145]}>
        <mesh geometry={nodes.Object_107.geometry} material={materials.tyre} />
        <mesh geometry={nodes.Object_108.geometry} material={materials.tyre} />
      </group>
      <group position={[0.548, 0.277, -1.04]} scale={[-0.145, 0.18, 0.145]}>
        <mesh geometry={nodes.Object_110.geometry} material={materials.tyre} />
        <mesh geometry={nodes.Object_111.geometry} material={materials.tyre} />
      </group>
      <group position={[0.741, 0.277, 1.24]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.33}>
        <mesh geometry={nodes.Object_113.geometry} material={materials.black_matte} />
        <mesh geometry={nodes.Object_114.geometry} material={materials.brake_disc} />
      </group>
      <group position={[0.74, 0.278, -1.041]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.33}>
        <mesh geometry={nodes.Object_116.geometry} material={materials.black_matte} />
        <mesh geometry={nodes.Object_117.geometry} material={materials.brake_disc} />
      </group>
      <group position={[-0.001, -0.008, 0.01]} rotation={[-0.742, 0, 0]} scale={0.21}>
        <mesh geometry={nodes.Object_119.geometry} material={materials.calipers} />
        <mesh geometry={nodes.Object_120.geometry} material={materials.black_matte} />
      </group>
      <group position={[-0.001, -0.004, 2.301]} rotation={[-0.742, 0, 0]} scale={0.21}>
        <mesh geometry={nodes.Object_122.geometry} material={materials.calipers} />
        <mesh geometry={nodes.Object_123.geometry} material={materials.black_matte} />
      </group>
      <mesh geometry={nodes.Object_4.geometry} material={materials.car_paint} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.car_paint} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.bmw_logo} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.black_matte} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.material_0} />
      <mesh geometry={nodes.Object_11.geometry} material={materials.black_matte} />
      <mesh geometry={nodes.Object_12.geometry} material={materials.glass} />
      <mesh geometry={nodes.Object_14.geometry} material={materials.black_matte} />
      <mesh geometry={nodes.Object_15.geometry} material={materials.black_matte} />
      <mesh geometry={nodes.Object_16.geometry} material={materials.black_matte} />
      <mesh geometry={nodes.Object_17.geometry} material={materials.black_matte} />
      <mesh geometry={nodes.Object_19.geometry} material={materials.black_matte} />
      <mesh geometry={nodes.Object_21.geometry} material={materials.metal} />
      <mesh geometry={nodes.Object_23.geometry} material={materials.glass} />
      <mesh geometry={nodes.Object_24.geometry} material={materials.black_matte} />
      <mesh geometry={nodes.Object_26.geometry} material={materials.headlight_glass} position={[0, 0, -0.01]} />
      <mesh geometry={nodes.Object_35.geometry} material={materials.black_matte} scale={0.702} />
      <mesh geometry={nodes.Object_37.geometry} material={materials.glass_taillight} />
      <mesh geometry={nodes.Object_38.geometry} material={materials.glass} />
      <mesh geometry={nodes.Object_44.geometry} material={materials.taillight_material_gray} />
      <mesh geometry={nodes.Object_45.geometry} material={materials.white_material_for_taillight} />
      <mesh geometry={nodes.Object_46.geometry} material={materials.white_material_for_taillight} />
      <mesh geometry={nodes.Object_48.geometry} material={materials.Carbon_Fiber_Procedural_spoiler} />
      <mesh geometry={nodes.Object_50.geometry} material={materials.glass_taillight} />
      <mesh geometry={nodes.Object_51.geometry} material={materials.brake_lights} />
      <mesh geometry={nodes.Object_53.geometry} material={materials.Carbon_Fiber_Procedural} />
      <mesh geometry={nodes.Object_55.geometry} material={materials.black_matte} />
      <mesh geometry={nodes.Object_57.geometry} material={materials.black_matte} />
      <mesh geometry={nodes.Object_59.geometry} material={materials.seats_black} />
      <mesh geometry={nodes.Object_60.geometry} material={materials.seats_colored} />
      <mesh geometry={nodes.Object_61.geometry} material={materials.glass} />
      <mesh geometry={nodes.Object_62.geometry} material={materials.black_matte} />
      <mesh geometry={nodes.Object_63.geometry} material={materials.mirror} />
      <mesh geometry={nodes.Object_68.geometry} material={materials.black_matte} position={[0, 0.7, 0.348]} rotation={[-2.689, 0, 0]} scale={[-0.075, 0.035, 0.035]} />
      <mesh geometry={nodes.Object_74.geometry} material={materials.Carbon_Fiber_Procedural} />
      <mesh geometry={nodes.Object_79.geometry} material={materials.mirror} position={[0.682, 0.812, 0]} />
      <mesh geometry={nodes.Object_87.geometry} material={materials.floor} position={[0, 0.006, 0]} scale={19.058} />
    </group>
  )
}

useGLTF.preload('/bmwm3.gltf')
