const fs = require('fs');
const path = require('path');

const dir = 'public/tech-icon';
const files = [
  'figma.svg', 'firebase.svg', 'js.svg', 'mysql.svg', 
  'nextjs.svg', 'php_new.svg', 'python.svg', 'react.svg', 
  'tailwind.svg', 'typescript.svg'
];

for (const file of files) {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/stroke-width="25"/, 'stroke-width="40"');
  fs.writeFileSync(filePath, content, 'utf8');
}
