const fs = require('fs');
const path = require('path');

const dir = 'public/tech-icon';
const files = [
  'figma.svg', 'firebase.svg', 'js.svg', 'mysql.svg', 
  'nextjs.svg', 'php_new.svg', 'python.svg', 'react.svg', 
  'tailwind.svg', 'typescript.svg', 'flutter.svg'
];

for (const file of files) {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // We look for a path with fill="#FDFDFD" or fill="#FFFFFF" or fill="#FCFCFC" that is likely a background bounding box.
  // We can just remove the first path if its fill is one of these background colors.
  // Flutter background was fill="#FDFDFD". Figma might be similar.
  const regex = /<path[^>]*fill="(?:#FDFDFD|#FFFFFF|#FCFCFC)"[^>]*>/i;
  
  // Wait, some logos use #FFFFFF for the actual logo! (Like Next.js). Next.js logo IS white/black.
  // If we remove #FFFFFF, we might destroy Next.js logo.
  // The Flutter background was `fill="#FDFDFD"`. Figma was `fill="#FDFDFD"` too maybe?
  // Let's only target `#FDFDFD` since that's a very specific off-white used as background in their exports.
  
  if (content.includes('#FDFDFD')) {
    content = content.replace(/<path[^>]*fill="#FDFDFD"[^>]*(\/>|><\/path>)/i, '');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Removed background from ${file}`);
  }
}
