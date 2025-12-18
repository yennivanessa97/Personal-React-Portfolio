import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Room } from './Room';
import {useThree} from '@react-three/fiber';



// const HeroExperience = () => {
//     const {viewport} = useThree();
//     // const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
//     // const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

//   return (
//     <Canvas camera={{position: [0, 0, 15], fov: 45 }}>
//         <ambientLight intensity={0.2} color="#1a1a40"/>
//         <directionalLight position={[5,5,5]} intensity={1} />

//         <OrbitControls
        
//             enablePan={false}
//             enableZoom = {!isTablet}
//             maxDistance ={20}
//             minDistance= {5}
//             minPolarAngle={Math.PI / 5}
//             maxPolarAngle={Math.PI/ 2}
        
        
//         />

//        <group
//         scale={isMobile ? 1.5 : 1}
//         position={[0, -3.5, 0]}
//         rotation={[0, -Math.PI / 4, 0]}
//         >
//      <Room />
//     </group>

        
        

//     </Canvas>
//   );
// };

// export default HeroExperience;
function Scene() {
  const { viewport } = useThree();

  // Escala basada en el ancho real del viewport 3D
  const scale = viewport.width < 6 ? 0.85 : 1;

  return (
    <>
      <ambientLight intensity={0.2} color="#1a1a40" />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <OrbitControls
        enablePan={false}
        enableZoom={viewport.width > 6}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <group
        scale={scale}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <Room />
      </group>
    </>
  );
}

const HeroExperience = () => {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <Scene />
    </Canvas>
  );
};

export default HeroExperience;