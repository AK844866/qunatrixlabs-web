"use client";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useMemo, useRef } from "react";

function FlameAura() {
  const ref = useRef<THREE.Points>(null!);

  const particleCount = 500;
  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const radius = 1.3 + Math.random() * 0.3;
      const y = (Math.random() - 0.5) * 2;
      positions[i * 3] = Math.cos(theta) * radius;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(theta) * radius;
    }
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, []);

  const mat = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: { time: { value: 0 } },
        vertexShader: `
          uniform float time;
          varying float vY;
          void main() {
            vY = position.y;
            vec3 p = position;
            p.y += sin(time*5.0 + length(position)*3.0) * 0.2;
            gl_PointSize = (1.5 - length(position.xz)) * 6.0;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }
        `,
        fragmentShader: `
          varying float vY;
          void main() {
            float alpha = smoothstep(-1.0, 1.5, vY) * (1.0 - length(gl_PointCoord - 0.5)*2.0);
            vec3 color = mix(vec3(0.0,0.4,1.0), vec3(0.3,0.8,1.0), vY*0.3 + 0.5);
            gl_FragColor = vec4(color, alpha);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    []
  );

  useFrame(({ clock }) => {
    mat.uniforms.time.value = clock.getElapsedTime();
    if (ref.current) ref.current.rotation.y += 0.001;
  });

  return <points ref={ref} geometry={geom} material={mat} />;
}

function ElectricLines() {
  const ref = useRef<THREE.LineSegments | null>(null);

  const edgesGeom = useMemo(
    () => new THREE.EdgesGeometry(new THREE.BoxGeometry(2, 2, 2)),
    []
  );

  const mat = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: { time: { value: 0 } },
        vertexShader: `
          varying vec3 vPos;
          void main() {
            vPos = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          varying vec3 vPos;
          void main(){
            float wave = sin(vPos.y*10.0 + time*5.0)*0.5 + 0.5;
            vec3 base = vec3(0.0,0.2,0.9);
            vec3 glow = vec3(0.3,0.7,1.0);
            vec3 color = mix(base, glow, wave);
            gl_FragColor = vec4(color, 1.0);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    []
  );

  useFrame(({ clock }) => {
    if (!ref.current) return;
    mat.uniforms.time.value = clock.getElapsedTime();
    ref.current.rotation.y += 0.002;
    ref.current.rotation.x += 0.001;
  });

  return <lineSegments ref={ref} geometry={edgesGeom} material={mat} />;
}

// ✅ Move the cube into its own inner component so we can use hooks safely
function GradientCube() {
  const cubeRef = useRef<THREE.Mesh>(null!);

  const gradientMat = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        color1: { value: new THREE.Color("#0066FF") },
        color2: { value: new THREE.Color("#217AFF") },
        color3: { value: new THREE.Color("#A1BEFF") },
      },
      vertexShader: `
        varying vec3 vPosition;
        void main() {
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vPosition;
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 color3;
        void main() {
          float mixValue = (vPosition.y + 1.0) / 2.0;
          vec3 gradient = mix(color1, color2, smoothstep(0.3, 0.6, mixValue));
          gradient = mix(gradient, color3, smoothstep(0.6, 1.0, mixValue));
          gl_FragColor = vec4(gradient, 0.7);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
  }, []);

  useFrame(() => {
    cubeRef.current.rotation.y += 0.002;
    cubeRef.current.rotation.x += 0.001;
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[2, 2, 2]} />
      <primitive object={gradientMat} attach="material" />
    </mesh>
  );
}

export default function ElectricCubeWithFlame() {
  return (
    <div className="w-full h-[600px] flex items-center justify-center ">
      <Canvas
        camera={{ position: [4, 3, 4], fov: 50 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1.8} color="#66aaff" />

        <FlameAura />
        <GradientCube />
        <ElectricLines />

        <EffectComposer>
          <Bloom intensity={5} luminanceThreshold={0.50} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
