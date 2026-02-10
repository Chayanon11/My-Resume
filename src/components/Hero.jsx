import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Vector2 } from 'three';
import { Html } from '@react-three/drei';

// 1. Fragment Shader (The "Liquid" Effect)
const fragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  varying vec2 vUv;

  void main() {
    vec2 st = gl_FragCoord.xy / uResolution.xy;
    
    // Calculate distance from mouse for interaction
    float dist = distance(st, uMouse);
    float glow = 1.0 - smoothstep(0.0, 0.3, dist); // Local glow around cursor

    // Fluid-like color shifting
    vec3 colorA = vec3(0.02, 0.02, 0.02); // Deep background
    vec3 colorB = vec3(0.0, 0.94, 1.0);   // Cyan
    vec3 colorC = vec3(0.74, 0.0, 1.0);   // Purple

    // Noise/Wave generation based on time and UV
    float wave = sin(vUv.x * 10.0 + uTime) * 0.1;
    
    // Mix colors based on wave and mouse influence
    vec3 finalColor = mix(colorA, colorB, wave + glow * 0.5);
    finalColor = mix(finalColor, colorC, cos(uTime * 0.5) * glow);

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// 2. The Interactive Mesh
const FluidMesh = () => {
  const mesh = useRef();
  const { size, viewport } = useThree();
  const mousePos = useRef(new Vector2(0, 0));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new Vector2(0.5, 0.5) }, // Center init
      uResolution: { value: new Vector2(size.width, size.height) }
    }),
    []
  );

  // Update uniforms every frame
  useFrame((state) => {
    const { clock, mouse } = state;
    if (mesh.current) {
        mesh.current.material.uniforms.uTime.value = clock.getElapsedTime();
        
        // Smoothly interpolate mouse position for 'fluid' feel
        // Mouse is -1 to 1, convert to 0 to 1 for shader if needed, but here we use direct mapping or normalized
        // Shader expects 0-1 for UV-like interaction? 
        // Let's map mouse (-1 to 1) to (0 to 1)
        const targetX = (mouse.x + 1) / 2;
        const targetY = (mouse.y + 1) / 2;

        mousePos.current.x += (targetX - mousePos.current.x) * 0.1;
        mousePos.current.y += (targetY - mousePos.current.y) * 0.1;
        
        mesh.current.material.uniforms.uMouse.value.set(
           mousePos.current.x, 
           mousePos.current.y
        );
    }
  });

  return (
    <mesh ref={mesh} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1, 64, 64]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

// 3. Main Export
export const HeroComponent = () => {
  return (
    <div className="h-screen w-full relative bg-obsidian overflow-hidden isolate" style={{ zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 1] }} style={{ position: 'relative', zIndex: 1 }}>
        <FluidMesh />
        <Html fullscreen className="pointer-events-none flex flex-col justify-center items-center z-10 w-full h-full">
          <div className="text-center">
            <p className="text-sm md:text-base font-space text-white/60 mb-4 tracking-widest uppercase">
              Chayanon Bharasarn
            </p>
            <h1 className="text-5xl md:text-8xl font-black text-white mix-blend-exclusion tracking-tighter font-syne">
              FULL-STACK
            </h1>
            <h1 className="text-5xl md:text-8xl font-black text-transparent stroke-text italic mix-blend-overlay font-syne" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}>
              DEVELOPER
            </h1>
            <p className="text-sm md:text-lg font-space text-white/50 mt-6 max-w-md mx-auto">
              Building GIS systems & modern web applications
            </p>
          </div>
        </Html>
      </Canvas>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-xs opacity-50 animate-bounce font-space">
        SCROLL TO EXPLORE
      </div>
    </div>
  );
};
