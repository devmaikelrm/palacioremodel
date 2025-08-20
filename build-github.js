#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Construyendo para GitHub Pages...');

try {
  // Hacer backup del App.tsx original
  const originalApp = 'client/src/App.tsx';
  const backupApp = 'client/src/App.backup.tsx';
  
  if (fs.existsSync(originalApp)) {
    fs.copyFileSync(originalApp, backupApp);
    console.log('✅ Backup de App.tsx creado');
  }

  // Limpiar directorio docs si existe
  if (fs.existsSync('docs')) {
    fs.rmSync('docs', { recursive: true, force: true });
    console.log('✅ Directorio docs limpiado');
  }

  // Construir con configuración específica para GitHub Pages
  execSync('npx vite build --config vite.config.github.ts', { stdio: 'inherit' });
  console.log('✅ Build completado');

  // Restaurar App.tsx original
  if (fs.existsSync(backupApp)) {
    fs.copyFileSync(backupApp, originalApp);
    fs.unlinkSync(backupApp);
    console.log('✅ App.tsx original restaurado');
  }

  // Crear archivo .nojekyll para evitar problemas con archivos que empiezan con _
  fs.writeFileSync('docs/.nojekyll', '');
  console.log('✅ Archivo .nojekyll creado');

  console.log('\n🎉 ¡Proyecto listo para GitHub Pages!');
  console.log('\n📋 Pasos para activar GitHub Pages:');
  console.log('1. Sube el proyecto a GitHub');
  console.log('2. Ve a Settings > Pages');
  console.log('3. Selecciona "Deploy from a branch"');
  console.log('4. Elige "main" y "/docs"');
  console.log('5. Guarda y espera unos minutos');
  console.log('\n🌐 Tu sitio estará en: https://tu-usuario.github.io/nombre-repositorio');
  
} catch (error) {
  console.error('❌ Error durante el build:', error.message);
  
  // Restaurar App.tsx en caso de error
  const backupApp = 'client/src/App.backup.tsx';
  if (fs.existsSync(backupApp)) {
    fs.copyFileSync(backupApp, 'client/src/App.tsx');
    fs.unlinkSync(backupApp);
    console.log('✅ App.tsx restaurado después del error');
  }
  
  process.exit(1);
}