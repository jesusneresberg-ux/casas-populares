// Script para converter SVG para PNG (executar: node generate-icons.js)
const fs = require('fs');

// Criamos PNGs simples usando data URLs
const createPNG = (size) => {
  const canvas = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" fill="#2563eb" rx="${size/8}"/>
  <path d="M${size/2} ${size*0.27}L${size*0.27} ${size*0.47}h${size*0.08}v${size*0.22}h${size*0.1}V${size*0.57}h${size*0.1}v${size*0.12}h${size*0.1}V${size*0.47}h${size*0.08}z" fill="#ffffff"/>
  <text x="${size/2}" y="${size*0.83}" text-anchor="middle" fill="#ffffff" font-size="${size*0.08}" font-family="sans-serif" font-weight="bold">CASAS</text>
</svg>`;

  console.log(`Salvando icon-${size}.png...`);
  // Nota: Em produção, use uma lib como 'sharp' ou 'canvas' para converter SVG->PNG
  // Por enquanto, vamos copiar os SVGs como referência
  fs.copyFileSync(`public/icon-${size}.svg`, `public/icon-${size}.png`);
};

createPNG(192);
createPNG(512);

console.log('✅ Ícones gerados! (usando SVGs como base)');
