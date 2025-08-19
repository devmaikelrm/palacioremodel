#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Construyendo para GitHub Pages...');

try {
  // Limpiar directorio docs si existe
  if (fs.existsSync('docs')) {
    fs.rmSync('docs', { recursive: true, force: true });
    console.log('✅ Directorio docs limpiado');
  }

  // Construir con configuración específica para GitHub Pages
  execSync('npx vite build --config vite.config.github.ts', { stdio: 'inherit' });
  console.log('✅ Build completado');

  // Crear archivo .nojekyll para evitar problemas con archivos que empiezan con _
  fs.writeFileSync('docs/.nojekyll', '');
  console.log('✅ Archivo .nojekyll creado');

  // Crear CNAME si necesitas dominio personalizado (opcional)
  // fs.writeFileSync('docs/CNAME', 'tu-dominio.com');

  console.log('\n🎉 ¡Proyecto listo para GitHub Pages!');
  console.log('\n📋 Pasos para activar GitHub Pages:');
  console.log('1. Sube el proyecto a GitHub');
  console.log('2. Ve a Settings > Pages');
  console.log('3. Selecciona "Deploy from a branch"');
  console.log('4. Elige "main" y "/docs"');
  console.log('5. Guarda y espera unos minutos');
  
} catch (error) {
  console.error('❌ Error durante el build:', error.message);
  process.exit(1);
}