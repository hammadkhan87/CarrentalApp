import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber"
import { useState, useEffect, useRef } from 'react'
import { goodColors } from '../../assets/assets'
import { Color } from 'three'

export function Hyundai_SUV(props) {
  const { nodes, materials } = useGLTF('/2024_hyundai_santa_fe.glb')
  const [targetColorIndex, setTargetColorIndex] = useState(0)
  const currentColor = useRef(new Color(goodColors[0]))
  const targetColor = useRef(new Color(goodColors[0]))
  
  // List of materials that should change color (body parts)
  const bodyMaterials = [
    materials.santafek_body,
    materials['santafek_body.001'],
    materials.santafekchr,
    materials.santafekchr1,
    // Add any other materials that should change with the body color
  ]

  // Set roughness for all body materials
  useEffect(() => {
    bodyMaterials.forEach(material => {
      if (material) {
        material.roughness = 0.1
      }
    })
  }, [bodyMaterials])

  // Update target color when index changes
  useEffect(() => {
    targetColor.current.set(goodColors[targetColorIndex])
  }, [targetColorIndex, goodColors])

  // Animate color transition
  useFrame((state, delta) => {
    currentColor.current.lerp(targetColor.current, 0.7 * delta)
    
    // Apply color to all body materials
    bodyMaterials.forEach(material => {
      if (material) {
        material.color.copy(currentColor.current)
      }
    })
  })

  const changeColorOnClick = () => {
    setTargetColorIndex((prevIndex) => (prevIndex + 1) % goodColors.length)
  }

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} onClick={changeColorOnClick}>
          <mesh geometry={nodes.santafek_engbaycrap_santafek_black_0.geometry} material={materials.santafek_black} />
          <mesh geometry={nodes.santafek_engbaycrap_santafek_body_0.geometry} material={materials.santafek_body} />
          <mesh geometry={nodes.santafek_engbaycrap_etk_engine_i6_0.geometry} material={materials.etk_engine_i6} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_fender_Lu001_santafek_re1_0.geometry} material={materials.santafek_re1} />
          <mesh geometry={nodes.santafek_fender_Lu001_santafek_glass_0.geometry} material={materials.santafek_glass} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_fender_Lu_santafek_orange_0.geometry} material={materials.santafek_orange} />
          <mesh geometry={nodes.santafek_fender_Lu_santafek_glass_0.geometry} material={materials.santafek_glass} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_fender_Ru_santafek_orange_0.geometry} material={materials.santafek_orange} />
          <mesh geometry={nodes.santafek_fender_Ru_santafek_glass_0.geometry} material={materials.santafek_glass} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_body004_etk800_0.geometry} material={materials.etk800} />
          <mesh geometry={nodes.santafek_body004_santafek_body001_0.geometry} material={materials['santafek_body.001']} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_engine_v8_etk_engine_i6_0.geometry} material={materials.etk_engine_i6} />
          <mesh geometry={nodes.santafek_engine_v8_bastion_engine_0.geometry} material={materials.bastion_engine} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_exhaust_L_etk800_0.geometry} material={materials.etk800} />
          <mesh geometry={nodes.santafek_exhaust_L_santafek_alum_0.geometry} material={materials.santafek_alum} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_exhaust_L_b_etk800_0.geometry} material={materials.etk800} />
          <mesh geometry={nodes.santafek_exhaust_L_b_santafek_alum_0.geometry} material={materials.santafek_alum} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_exhaust_R_etk800_0.geometry} material={materials.etk800} />
          <mesh geometry={nodes.santafek_exhaust_R_santafek_alum_0.geometry} material={materials.santafek_alum} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_fender_R_santafekchr_0.geometry} material={materials.santafekchr} />
          <mesh geometry={nodes.santafek_fender_R_santafek_body_0.geometry} material={materials.santafek_body} />
          <mesh geometry={nodes.santafek_fender_R_santafek_blackeB_0.geometry} material={materials.santafek_blackeB} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_fender_L_santafek_body_0.geometry} material={materials.santafek_body} />
          <mesh geometry={nodes.santafek_fender_L_santafek_blackeB_0.geometry} material={materials.santafek_blackeB} />
          <mesh geometry={nodes.santafek_fender_L_santafekchr_0.geometry} material={materials.santafekchr} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_headlight_L001_santafek_blacke_0.geometry} material={materials.santafek_blacke} />
          <mesh geometry={nodes.santafek_headlight_L001_santafek_led_0.geometry} material={materials.santafek_led} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_mirror_L_santafek_body_0.geometry} material={materials.santafek_body} />
          <mesh geometry={nodes.santafek_mirror_L_santafek_blacke_0.geometry} material={materials.santafek_blacke} />
          <mesh geometry={nodes.santafek_mirror_L_santafek_glass_0.geometry} material={materials.santafek_glass} />
          <mesh geometry={nodes.santafek_mirror_L_santafek_L_0.geometry} material={materials.santafek_L} />
          <mesh geometry={nodes.santafek_mirror_L_mirror_0.geometry} material={materials.mirror} />
        </group>
        <group position={[51.907, 107.349, 52.077]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_signalstalk_santafek_black_0.geometry} material={materials.santafek_black} />
          <mesh geometry={nodes.santafek_signalstalk_santafek_rul_0.geometry} material={materials.santafek_rul} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_bumper_F_a002_santafek_led2_0.geometry} material={materials.santafek_led2} />
          <mesh geometry={nodes.santafek_bumper_F_a002_santafek_glass_0.geometry} material={materials.santafek_glass} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_taillight_euro_L_santafek_red_0.geometry} material={materials.santafek_red} />
          <mesh geometry={nodes.santafek_taillight_euro_L_santafek_text_0.geometry} material={materials.santafek_text} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_bumper_F_a004_santafek_blacke_0.geometry} material={materials.santafek_blacke} />
          <mesh geometry={nodes.santafek_bumper_F_a004_santafekchr_0.geometry} material={materials.santafekchr} />
          <mesh geometry={nodes.santafek_bumper_F_a004_santafek_blackeB_0.geometry} material={materials.santafek_blackeB} />
          <mesh geometry={nodes.santafek_bumper_F_a004_santafek_gril_0.geometry} material={materials.santafek_gril} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_bumper_F_a003_santafek_blacke_0.geometry} material={materials.santafek_blacke} />
          <mesh geometry={nodes.santafek_bumper_F_a003_santafekchr1_0.geometry} material={materials.santafekchr1} />
          <mesh geometry={nodes.santafek_bumper_F_a003_santafek_blackeB_0.geometry} material={materials.santafek_blackeB} />
          <mesh geometry={nodes.santafek_bumper_F_a003_santafek_gril_0.geometry} material={materials.santafek_gril} />
          <mesh geometry={nodes.santafek_bumper_F_a003_santafek_black_0.geometry} material={materials.santafek_black} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_seats_R_santafek_leath2_0.geometry} material={materials.santafek_leath2} />
          <mesh geometry={nodes.santafek_seats_R_santafek_black_0.geometry} material={materials.santafek_black} />
          <mesh geometry={nodes.santafek_seats_R_santafek_carpet_0.geometry} material={materials.santafek_carpet} />
          <mesh geometry={nodes.santafek_seats_R_santafek_blacke_0.geometry} material={materials.santafek_blacke} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_dec_signal_L_0.geometry} material={materials.signal_L} />
          <mesh geometry={nodes.santafek_dec_signal_R_0.geometry} material={materials.signal_R} />
          <mesh geometry={nodes.santafek_dec_checkengine_0.geometry} material={materials.checkengine} />
          <mesh geometry={nodes.santafek_dec_lowpressure_0.geometry} material={materials.lowpressure} />
          <mesh geometry={nodes.santafek_dec_parkingbrake_0.geometry} material={materials.parkingbrake} />
          <mesh geometry={nodes.santafek_dec_abs_0.geometry} material={materials.material} />
          <mesh geometry={nodes.santafek_dec_lowfuel_0.geometry} material={materials.lowfuel} />
          <mesh geometry={nodes.santafek_dec_highbeam_0.geometry} material={materials.highbeam} />
          <mesh geometry={nodes.santafek_dec_esc_0.geometry} material={materials.material_45} />
          <mesh geometry={nodes.santafek_dec_tcs_0.geometry} material={materials.material_46} />
          <mesh geometry={nodes.santafek_dec_lowbeam_0.geometry} material={materials.lowbeam} />
          <mesh geometry={nodes.santafek_dec_foglight_0.geometry} material={materials.foglight} />
          <mesh geometry={nodes.santafek_dec_oil_0.geometry} material={materials.material_49} />
          <mesh geometry={nodes.santafek_dec_temp_0.geometry} material={materials.temp} />
          <mesh geometry={nodes.santafek_dec_santafek_miR_0.geometry} material={materials.santafek_miR} />
          <mesh geometry={nodes.santafek_dec_santafek_miL_0.geometry} material={materials.santafek_miL} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_mirror_R_santafek_body_0.geometry} material={materials.santafek_body} />
          <mesh geometry={nodes.santafek_mirror_R_santafek_blacke_0.geometry} material={materials.santafek_blacke} />
          <mesh geometry={nodes.santafek_mirror_R_santafek_glass_0.geometry} material={materials.santafek_glass} />
          <mesh geometry={nodes.santafek_mirror_R_santafek_R_0.geometry} material={materials.santafek_R} />
          <mesh geometry={nodes.santafek_mirror_R_mirror_0.geometry} material={materials.mirror} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_seat_FL_santafek_leath2_0.geometry} material={materials.santafek_leath2} />
          <mesh geometry={nodes.santafek_seat_FL_santafek_black_0.geometry} material={materials.santafek_black} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_bumper_F_a_santafek_body_0.geometry} material={materials.santafek_body} />
          <mesh geometry={nodes.santafek_bumper_F_a_santafekchr_0.geometry} material={materials.santafekchr} />
          <mesh geometry={nodes.santafek_bumper_F_a_santafek_blackeB_0.geometry} material={materials.santafek_blackeB} />
          <mesh geometry={nodes.santafek_bumper_F_a_santafek_gril_0.geometry} material={materials.santafek_gril} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_taillight_euro_R_santafek_red_0.geometry} material={materials.santafek_red} />
          <mesh geometry={nodes.santafek_taillight_euro_R_santafek_text_0.geometry} material={materials.santafek_text} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_hood_santafek_body_0.geometry} material={materials.santafek_body} />
          <mesh geometry={nodes.santafek_hood_santafekchr1_0.geometry} material={materials.santafekchr1} />
          <mesh geometry={nodes.santafek_hood_etk800_0.geometry} material={materials.etk800} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_intcarpet_santafek_alca_0.geometry} material={materials.santafek_alca} />
          <mesh geometry={nodes.santafek_intcarpet_santafek_leath_0.geometry} material={materials.santafek_leath} />
          <mesh geometry={nodes.santafek_intcarpet_santafek_black_0.geometry} material={materials.santafek_black} />
          <mesh geometry={nodes.santafek_intcarpet_santafek_carpet_0.geometry} material={materials.santafek_carpet} />
          <mesh geometry={nodes.santafek_intcarpet_santafek_dyn_0.geometry} material={materials.santafek_dyn} />
          <mesh geometry={nodes.santafek_intcarpet_santafek_blacke_0.geometry} material={materials.santafek_blacke} />
          <mesh geometry={nodes.santafek_intcarpet_santafek_alum_0.geometry} material={materials.santafek_alum} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_seat_FR_santafek_leath2_0.geometry} material={materials.santafek_leath2} />
          <mesh geometry={nodes.santafek_seat_FR_santafek_black_0.geometry} material={materials.santafek_black} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_doorpanel_RL_santafek_leath_0.geometry} material={materials.santafek_leath} />
          <mesh geometry={nodes.santafek_doorpanel_RL_santafek_leath2_0.geometry} material={materials.santafek_leath2} />
          <mesh geometry={nodes.santafek_doorpanel_RL_santafek_alum_0.geometry} material={materials.santafek_alum} />
          <mesh geometry={nodes.santafek_doorpanel_RL_santafek_wood_0.geometry} material={materials.santafek_wood} />
          <mesh geometry={nodes.santafek_doorpanel_RL_santafek_blacke_0.geometry} material={materials.santafek_blacke} />
          <mesh geometry={nodes.santafek_doorpanel_RL_santafek_ambi_0.geometry} material={materials.santafek_ambi} />
          <mesh geometry={nodes.santafek_doorpanel_RL_santafek_ambiz_0.geometry} material={materials.santafek_ambiz} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_doorpanel_FR_santafek_leath_0.geometry} material={materials.santafek_leath} />
          <mesh geometry={nodes.santafek_doorpanel_FR_santafek_alum_0.geometry} material={materials.santafek_alum} />
          <mesh geometry={nodes.santafek_doorpanel_FR_santafek_wood_0.geometry} material={materials.santafek_wood} />
          <mesh geometry={nodes.santafek_doorpanel_FR_santafek_leath2_0.geometry} material={materials.santafek_leath2} />
          <mesh geometry={nodes.santafek_doorpanel_FR_santafek_ambi_0.geometry} material={materials.santafek_ambi} />
          <mesh geometry={nodes.santafek_doorpanel_FR_santafek_ambiz_0.geometry} material={materials.santafek_ambiz} />
          <mesh geometry={nodes.santafek_doorpanel_FR_santafek_red_0.geometry} material={materials.santafek_red} />
          <mesh geometry={nodes.santafek_doorpanel_FR_santafek_rul_0.geometry} material={materials.santafek_rul} />
        </group>
        <group position={[44.878, 112.817, 39.109]} rotation={[-2.793, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_steer_santafek_leath2_0.geometry} material={materials.santafek_leath2} />
          <mesh geometry={nodes.santafek_steer_santafek_leath_0.geometry} material={materials.santafek_leath} />
          <mesh geometry={nodes.santafek_steer_santafek_alum_0.geometry} material={materials.santafek_alum} />
          <mesh geometry={nodes.santafek_steer_santafek_rul_0.geometry} material={materials.santafek_rul} />
          <mesh geometry={nodes.santafek_steer_santafek_blacke_0.geometry} material={materials.santafek_blacke} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_dash_santafek_leath_0.geometry} material={materials.santafek_leath} />
          <mesh geometry={nodes.santafek_dash_santafek_black_0.geometry} material={materials.santafek_black} />
          <mesh geometry={nodes.santafek_dash_santafek_leath2_0.geometry} material={materials.santafek_leath2} />
          <mesh geometry={nodes.santafek_dash_santafek_blacke_0.geometry} material={materials.santafek_blacke} />
          <mesh geometry={nodes.santafek_dash_santafek_alum_0.geometry} material={materials.santafek_alum} />
          <mesh geometry={nodes.santafek_dash_santafek_ambi_0.geometry} material={materials.santafek_ambi} />
          <mesh geometry={nodes.santafek_dash_santafek_rul_0.geometry} material={materials.santafek_rul} />
          <mesh geometry={nodes.santafek_dash_santafek_wood_0.geometry} material={materials.santafek_wood} />
          <mesh geometry={nodes.santafek_dash_santafek_ambiz_0.geometry} material={materials.santafek_ambiz} />
          <mesh geometry={nodes.santafek_dash_santafek_tex2_0.geometry} material={materials.santafek_tex2} />
          <mesh geometry={nodes.santafek_dash_santafek_dyn_0.geometry} material={materials.santafek_dyn} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_doorpanel_FL_santafek_leath_0.geometry} material={materials.santafek_leath} />
          <mesh geometry={nodes.santafek_doorpanel_FL_santafek_alum_0.geometry} material={materials.santafek_alum} />
          <mesh geometry={nodes.santafek_doorpanel_FL_santafek_wood_0.geometry} material={materials.santafek_wood} />
          <mesh geometry={nodes.santafek_doorpanel_FL_santafek_leath2_0.geometry} material={materials.santafek_leath2} />
          <mesh geometry={nodes.santafek_doorpanel_FL_santafek_ambi_0.geometry} material={materials.santafek_ambi} />
          <mesh geometry={nodes.santafek_doorpanel_FL_santafek_ambiz_0.geometry} material={materials.santafek_ambiz} />
          <mesh geometry={nodes.santafek_doorpanel_FL_santafek_red_0.geometry} material={materials.santafek_red} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_bumper_R_a_santafek_blackeB_0.geometry} material={materials.santafek_blackeB} />
          <mesh geometry={nodes.santafek_bumper_R_a_santafek_body_0.geometry} material={materials.santafek_body} />
          <mesh geometry={nodes.santafek_bumper_R_a_santafekchr_0.geometry} material={materials.santafekchr} />
          <mesh geometry={nodes.santafek_bumper_R_a_santafek_text_0.geometry} material={materials.santafek_text} />
          <mesh geometry={nodes.santafek_bumper_R_a_santafek_L_0.geometry} material={materials.santafek_L} />
          <mesh geometry={nodes.santafek_bumper_R_a_santafek_reverse_0.geometry} material={materials.santafek_reverse} />
          <mesh geometry={nodes.santafek_bumper_R_a_santafek_glass_0.geometry} material={materials.santafek_glass} />
          <mesh geometry={nodes.santafek_bumper_R_a_santafek_R_0.geometry} material={materials.santafek_R} />
          <mesh geometry={nodes.santafek_bumper_R_a_santafek_tailgate_0.geometry} material={materials.santafek_tailgate} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_doorpanel_RR_santafek_alum_0.geometry} material={materials.santafek_alum} />
          <mesh geometry={nodes.santafek_doorpanel_RR_santafek_wood_0.geometry} material={materials.santafek_wood} />
          <mesh geometry={nodes.santafek_doorpanel_RR_santafek_leath_0.geometry} material={materials.santafek_leath} />
          <mesh geometry={nodes.santafek_doorpanel_RR_santafek_leath2_0.geometry} material={materials.santafek_leath2} />
          <mesh geometry={nodes.santafek_doorpanel_RR_santafek_ambi_0.geometry} material={materials.santafek_ambi} />
          <mesh geometry={nodes.santafek_doorpanel_RR_santafek_ambiz_0.geometry} material={materials.santafek_ambiz} />
          <mesh geometry={nodes.santafek_doorpanel_RR_santafek_blacke_0.geometry} material={materials.santafek_blacke} />
        </group>
        <group position={[76.049, 37.915, 135.088]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_whe_santafek_blacke_0.geometry} material={materials.santafek_blacke} />
          <mesh geometry={nodes.santafek_whe_santafekchr_0.geometry} material={materials.santafekchr} />
          <mesh geometry={nodes.santafek_brakedisc_F_carbon_etk_brakedisc_carbon_ttsport_0.geometry} material={materials.etk_brakedisc_carbon_ttsport} scale={[1, 1.07, 1.07]} />
          <mesh geometry={nodes.santafek_caliper_F_ttsport_etk_calipers_ttsport_0.geometry} material={materials.etk_calipers_ttsport} scale={1.063} />
          <mesh geometry={nodes.santafek_tire_tire_01a_0.geometry} material={materials.tire_01a} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_body_santafek_body_0.geometry} material={materials.santafek_body} />
          <mesh geometry={nodes.santafek_body_santafek_black_0.geometry} material={materials.santafek_black} />
          <mesh geometry={nodes.santafek_body_santafekchr_0.geometry} material={materials.santafekchr} />
          <mesh geometry={nodes.santafek_body_santafek_blacke_0.geometry} material={materials.santafek_blacke} />
          <mesh geometry={nodes.santafek_body_santafek_blackeB_0.geometry} material={materials.santafek_blackeB} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_door_FR_santafek_body_0.geometry} material={materials.santafek_body} />
          <mesh geometry={nodes.santafek_door_FR_santafekchr_0.geometry} material={materials.santafekchr} />
          <mesh geometry={nodes.santafek_door_FR_santafek_blacke_0.geometry} material={materials.santafek_blacke} />
          <mesh geometry={nodes.santafek_door_FR_santafek_blackeB_0.geometry} material={materials.santafek_blackeB} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_tailgate_santafek_body_0.geometry} material={materials.santafek_body} />
          <mesh geometry={nodes.santafek_tailgate_santafekchr1_0.geometry} material={materials.santafekchr1} />
          <mesh geometry={nodes.santafek_tailgate_santafek_black_0.geometry} material={materials.santafek_black} />
          <mesh geometry={nodes.santafek_tailgate_santafek_leath_0.geometry} material={materials.santafek_leath} />
          <mesh geometry={nodes.santafek_tailgate_santafek_blacke_0.geometry} material={materials.santafek_blacke} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_door_RR_santafek_body_0.geometry} material={materials.santafek_body} />
          <mesh geometry={nodes.santafek_door_RR_santafek_blacke_0.geometry} material={materials.santafek_blacke} />
          <mesh geometry={nodes.santafek_door_RR_santafekchr_0.geometry} material={materials.santafekchr} />
          <mesh geometry={nodes.santafek_door_RR_santafek_blackeB_0.geometry} material={materials.santafek_blackeB} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_door_FL_santafek_body_0.geometry} material={materials.santafek_body} />
          <mesh geometry={nodes.santafek_door_FL_santafek_blacke_0.geometry} material={materials.santafek_blacke} />
          <mesh geometry={nodes.santafek_door_FL_santafekchr_0.geometry} material={materials.santafekchr} />
          <mesh geometry={nodes.santafek_door_FL_santafek_rul_0.geometry} material={materials.santafek_rul} />
          <mesh geometry={nodes.santafek_door_FL_santafek_blackeB_0.geometry} material={materials.santafek_blackeB} />
        </group>
        <group position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_door_RL_santafek_body_0.geometry} material={materials.santafek_body} />
          <mesh geometry={nodes.santafek_door_RL_santafek_blacke_0.geometry} material={materials.santafek_blacke} />
          <mesh geometry={nodes.santafek_door_RL_santafekchr_0.geometry} material={materials.santafekchr} />
          <mesh geometry={nodes.santafek_door_RL_santafek_blackeB_0.geometry} material={materials.santafek_blackeB} />
        </group>
        <group position={[81.133, 37.915, -143.613]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.santafek_whe001_santafek_blacke_0.geometry} material={materials.santafek_blacke} />
          <mesh geometry={nodes.santafek_whe001_santafekchr_0.geometry} material={materials.santafekchr} />
          <mesh geometry={nodes.santafek_brakedisc_F_carbon001_etk_brakedisc_carbon_ttsport_0.geometry} material={materials.etk_brakedisc_carbon_ttsport} scale={[1, 1.07, 1.07]} />
          <mesh geometry={nodes.santafek_caliper_F_ttsport001_etk_calipers_ttsport_0.geometry} material={materials.etk_calipers_ttsport} scale={1.063} />
          <mesh geometry={nodes.santafek_tire002_tire_01a_0.geometry} material={materials.tire_01a} />
        </group>
        <group position={[-77.9, 37.915, -143.613]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100}>
          <mesh geometry={nodes.santafek_whe002_santafek_blacke_0.geometry} material={materials.santafek_blacke} />
          <mesh geometry={nodes.santafek_whe002_santafekchr_0.geometry} material={materials.santafekchr} />
          <mesh geometry={nodes.santafek_brakedisc_F_carbon002_etk_brakedisc_carbon_ttsport_0.geometry} material={materials.etk_brakedisc_carbon_ttsport} scale={[1, 1.07, 1.07]} />
          <mesh geometry={nodes.santafek_caliper_F_ttsport002_etk_calipers_ttsport_0.geometry} material={materials.etk_calipers_ttsport} scale={1.063} />
          <mesh geometry={nodes.santafek_tire003_tire_01a_0.geometry} material={materials.tire_01a} position={[0.032, 0, 0]} />
        </group>
        <group position={[-80.822, 38.462, 134.783]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100}>
          <mesh geometry={nodes.santafek_whe003_santafek_blacke_0.geometry} material={materials.santafek_blacke} />
          <mesh geometry={nodes.santafek_whe003_santafekchr_0.geometry} material={materials.santafekchr} />
          <mesh geometry={nodes.santafek_brakedisc_F_carbon003_etk_brakedisc_carbon_ttsport_0.geometry} material={materials.etk_brakedisc_carbon_ttsport} scale={[1, 1.07, 1.07]} />
          <mesh geometry={nodes.santafek_caliper_F_ttsport003_etk_calipers_ttsport_0.geometry} material={materials.etk_calipers_ttsport} scale={1.063} />
          <mesh geometry={nodes.santafek_tire004_tire_01a_0.geometry} material={materials.tire_01a} />
        </group>
        <mesh geometry={nodes.santafek_palka_santafek_black_0.geometry} material={materials.santafek_black} position={[22.643, 72.463, 219.241]} rotation={[Math.PI, -0.063, 0]} scale={100} />
        <mesh geometry={nodes.santafek_intake_cover_i4_santafek_black_0.geometry} material={materials.santafek_black} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_brakepedal_santafek_interior_0.geometry} material={materials.santafek_interior} position={[39.661, 85.447, 87.874]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.santafek_clutchpedal_santafek_interior_0.geometry} material={materials.santafek_interior} position={[39.161, 85.447, 87.874]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.santafek_gaspedal_santafek_interior_0.geometry} material={materials.santafek_interior} position={[39.947, 44.072, 76.268]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.santafek_rucRL2_santafek_alum_0.geometry} material={materials.santafek_alum} position={[80.318, 111.825, -64.166]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_rucRR2_santafek_alum_0.geometry} material={materials.santafek_alum} position={[-80.355, 111.832, -64.126]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_rucFR2_santafek_alum_0.geometry} material={materials.santafek_alum} position={[-78.607, 111.302, 30.355]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube002_santafek_body_0.geometry} material={materials.santafek_body} position={[78.649, 111.302, 30.355]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.santafek_rucRR_santafek_body_0.geometry} material={materials.santafek_body} position={[-97.631, 113.418, -97.756]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_rucFR_santafek_body_0.geometry} material={materials.santafek_body} position={[-98.353, 111.302, 8.498]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_rucRL_santafek_body_0.geometry} material={materials.santafek_body} position={[97.599, 113.418, -97.756]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_rucFL2_santafek_alum_0.geometry} material={materials.santafek_alum} position={[78.649, 111.302, 30.355]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.santafek_rucFL_santafek_body_0.geometry} material={materials.santafek_body} position={[98.512, 111.302, 8.498]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_porogi_santafek_black_0.geometry} material={materials.santafek_black} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_radsupport_bastion_mechanical_0.geometry} material={materials.bastion_mechanical} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_palka2_santafek_black_0.geometry} material={materials.santafek_black} position={[-22.643, 72.463, 219.241]} rotation={[Math.PI, 0.063, 0]} scale={100} />
        <mesh geometry={nodes.cubedel_santafek_glass001_0.geometry} material={materials['santafek_glass.001']} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_bumper_F_sport_brakeduct_L_etk800_extra_0.geometry} material={materials.etk800_extra} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_bumper_F_sport_brakeduct_R_etk800_extra_0.geometry} material={materials.etk800_extra} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_diff_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_diff_F_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_driveshaft_F_etk800_0.geometry} material={materials.etk800} position={[14.389, 43.471, 55.062]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_engine_i4_etk_engine_i6_0.geometry} material={materials.etk_engine_i6} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.santafek_engine_i6_etk_engine_i6_0.geometry} material={materials.etk_engine_i6} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.santafek_fueltank_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_halfshaft_F_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_halfshaft_F_wide_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_halfshaft_R_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_halfshaft_R_wide_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_header_i4_turbo_etk_engine_i6_0.geometry} material={materials.etk_engine_i6} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.santafek_header_i6_etk_engine_i6_0.geometry} material={materials.etk_engine_i6} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.santafek_header_i6_turbo_etk_engine_i6_0.geometry} material={materials.etk_engine_i6} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.santafek_header_v8_etk_engine_i6_0.geometry} material={materials.etk_engine_i6} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_header_v8_turbo_etk_engine_i6_0.geometry} material={materials.etk_engine_i6} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_heatshield_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_hub_F_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_hub_F_wide_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_hub_R_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_hub_R_wide_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_icpipe_i_i4_etk_engine_i6_0.geometry} material={materials.etk_engine_i6} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_icpipe_i_i6_etk_engine_i6_0.geometry} material={materials.etk_engine_i6} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_icpipe_t_i4_etk_engine_i6_0.geometry} material={materials.etk_engine_i6} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_icpipe_t_i6_etk_engine_i6_0.geometry} material={materials.etk_engine_i6} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_icpipe_t_v8_etk_engine_i6_0.geometry} material={materials.etk_engine_i6} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_intercooler_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_lowerarm_F_a_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_lowerarm_F_a_wide_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_lowerarm_F_b_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_lowerarm_F_b_wide_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_lowerarm_R_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_lowerarm_R_wide_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_radiator_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_radtube_i4_etk_engine_i6_0.geometry} material={materials.etk_engine_i6} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_radtube_i6_etk_engine_i6_0.geometry} material={materials.etk_engine_i6} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_radtube_v8_etk_engine_i6_0.geometry} material={materials.etk_engine_i6} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_shock_R_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_shock_R_wide_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_spring_R_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_spring_R_wide_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_steeringbox_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_strut_F_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_strut_F_wide_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_subframe_F_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_subframe_F_wide_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_subframe_R_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_subframe_R_wide_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_swaybar_F_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_swaybar_F_wide_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_swaybar_R_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_swaybar_R_wide_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_tierod_F_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_tierod_F_wide_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_tierod_R_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_tierod_R_wide_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_transfercase_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_transmission_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.santafek_underbody_cladding_etk_common_acc_0.geometry} material={materials.etk_common_acc} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_upperarm_R_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_upperarm_R_wide_etk800_0.geometry} material={materials.etk800} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.azera_gg001_santafek_gauges_scree_0.geometry} material={materials.santafek_gauges_scree} position={[1.052, 16.428, -0.093]} rotation={[-1.657, 0.001, -0.01]} scale={97.997} />
        <mesh geometry={nodes.santafek_gg_santafek_gauges_scree_0.geometry} material={materials.santafek_gauges_scree} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_needle_speedo_santafek_needle_0.geometry} material={materials.santafek_needle} position={[51.866, 114.988, 65.65]} rotation={[-2.951, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_needle_tacho_santafek_needle_0.geometry} material={materials.santafek_needle} position={[34.314, 115.018, 65.641]} rotation={[-2.951, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_headlight_L003_santafek_orange_0.geometry} material={materials.santafek_orange} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_headlight_L002_santafek_orange_0.geometry} material={materials.santafek_orange} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_tailgatelight_R002_santafek_re_0.geometry} material={materials.santafek_re} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_tailgatelight_L002_santafek_re_0.geometry} material={materials.santafek_re} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_intcarpet001_santafek_black_0.geometry} material={materials.santafek_black} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_body002_santafek_body_0.geometry} material={materials.santafek_body} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_kozR_santafek_alca_0.geometry} material={materials.santafek_alca} position={[-25.367, 164.325, 31.185]} rotation={[-Math.PI / 2, 0, -0.116]} scale={100} />
        <mesh geometry={nodes.santafek_kozL_santafek_alca_0.geometry} material={materials.santafek_alca} position={[25.367, 164.325, 31.185]} rotation={[-Math.PI / 2, 0, 0.116]} scale={100} />
        <mesh geometry={nodes.santafek_body001_santafek_blacke_0.geometry} material={materials.santafek_blacke} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_gauges_screen002_santafek_speed1_0.geometry} material={materials.santafek_speed1} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_gauges_screen001_santafek_speed_0.geometry} material={materials.santafek_speed} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_taillight_euro_L001_santafek_re1_0.geometry} material={materials.santafek_re1} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_taillight_euro_R001_santafek_re1_0.geometry} material={materials.santafek_re1} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_tailgatelight_L_santafek_red_0.geometry} material={materials.santafek_red} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_body006_santafek_black_0.geometry} material={materials.santafek_black} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_bumper_F_a001_santafek_blackeB_0.geometry} material={materials.santafek_blackeB} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_palka4_santafek_black_0.geometry} material={materials.santafek_black} position={[-22.592, 72.515, 220.293]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_palka3_santafek_black_0.geometry} material={materials.santafek_black} position={[22.592, 72.515, 220.293]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_body005_santafek_black_0.geometry} material={materials.santafek_black} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_body003_santafek_body_0.geometry} material={materials.santafek_body} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_gauges_screen_santafek_screen_0.geometry} material={materials.santafek_screen} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_intmirror_mirror_0.geometry} material={materials.mirror} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_chmsl_santafek_stop_0.geometry} material={materials.santafek_stop} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.mesh_11_27__0.geometry} material={materials.mesh_11_27__0} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.santafek_tailgatelight_R_santafek_red_0.geometry} material={materials.santafek_red} position={[0, 10.023, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('/2024_hyundai_santa_fe.glb')