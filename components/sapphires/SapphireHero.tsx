
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const SapphireHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true,
      antialias: true 
    });

    const geometry = new THREE.OctahedronGeometry(2, 0);
    const material = new THREE.MeshPhongMaterial({
      color: 0xbe123c, // Ruby/Raspberry Red
      shininess: 120,
      specular: 0xfb7185, // Rose Pink Highlight
      transparent: true,
      opacity: 0.85,
      flatShading: true
    });

    const gem = new THREE.Mesh(geometry, material);
    scene.add(gem);

    const light = new THREE.PointLight(0xffffff, 10, 100);
    light.position.set(5, 5, 5);
    scene.add(light);
    
    const purpleLight = new THREE.PointLight(0x9d174d, 5, 50);
    purpleLight.position.set(-5, -5, 5);
    scene.add(purpleLight);

    scene.add(new THREE.AmbientLight(0x404040));

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      gem.rotation.y += 0.008;
      gem.rotation.x += 0.003;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#4c0519]">
      {/* Background Sparkles */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-rose-200 rounded-full"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%` 
            }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{ 
              duration: Math.random() * 3 + 2, 
              repeat: Infinity, 
              delay: Math.random() * 5 
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="font-luxury text-rose-400 tracking-[0.3em] uppercase text-xs mb-4 block">Macedonian Pink Corundum</span>
            <h1 className="text-7xl md:text-9xl font-serif font-bold gold-foil mb-6 leading-none">
              Sapphires<span className="text-white">.mk</span>
            </h1>
            <p className="font-luxury text-2xl text-rose-100/80 mb-10 leading-relaxed italic">
              "The Raspberry Fire of the Balkans. Unique Pink Sapphires <br className="hidden md:block"/>
              Untouched Heritage, Pure Perfection."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button className="px-10 py-4 bg-rose-700 hover:bg-rose-600 text-white font-luxury font-bold tracking-widest rounded-sm shadow-2xl transition-all hover:scale-105 active:scale-95">
                DISCOVER MACEDONIAN RUBY
              </button>
              <button className="px-10 py-4 border border-rose-500/30 text-rose-300 hover:bg-rose-500/5 font-luxury font-bold tracking-widest rounded-sm transition-all">
                PRIVATE VIEWING
              </button>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 flex justify-center relative">
          <div className="relative">
            {/* Prismatic glow */}
            <div className="absolute inset-0 bg-rose-500/20 blur-[120px] rounded-full animate-pulse"></div>
            <canvas 
              ref={canvasRef} 
              width={600} 
              height={600} 
              className="relative z-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px]"
            />
            {/* Gold Filigree decoration */}
            <div className="absolute inset-0 border-[1px] border-amber-500/20 rounded-full scale-125 pointer-events-none"></div>
            <div className="absolute inset-0 border-[1px] border-rose-500/10 rounded-full scale-150 pointer-events-none animate-[spin_60s_linear_infinite]"></div>
          </div>
        </div>
      </div>

      {/* Luxury Gradient Fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0c0a09] to-transparent"></div>
    </section>
  );
};

export default SapphireHero;
