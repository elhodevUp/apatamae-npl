import fs from 'fs';
import path from 'path';

const srcDir = 'C:\\Users\\LENOVO E15\\Downloads\\stitch_apatam_e_antigravity_final';
const dstDir = 'c:\\Users\\LENOVO E15\\.gemini\\antigravity-ide\\scratch\\apatame-web\\public\\images';

if (!fs.existsSync(dstDir)) {
  fs.mkdirSync(dstDir, { recursive: true });
}

function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.isFile() && /\.(png|jpg|jpeg|webp)$/i.test(entry.name)) {
      const parentDirName = path.basename(dir);
      const targetFileName = `${parentDirName}_${entry.name}`;
      const targetPath = path.join(dstDir, targetFileName);
      fs.copyFileSync(fullPath, targetPath);
      console.log(`Copied: ${targetFileName}`);
    }
  }
}

processDirectory(srcDir);
console.log('Done copying image assets!');
