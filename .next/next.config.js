/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Statische Dateien exportieren
  assetPrefix: './', // Relativer Pfad für statische Ressourcen
  images: {
    unoptimized: true, // Deaktiviert automatische Bildoptimierung (für statische Seiten notwendig)
  },
};

module.exports = nextConfig;
