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
  content = content.replace(/ stroke="none"/g, '');
  content = content.replace(/ stroke="#0C0C0C" stroke-width="40" stroke-linejoin="round"/g, '');
  content = content.replace(/ stroke="#0C0C0C" stroke-width="40"/g, '');
  content = content.replace(/ stroke="#0C0C0C" stroke-width="25" stroke-linejoin="round"/g, '');
  content = content.replace(/ stroke="#0C0C0C" stroke-width="25"/g, '');
  content = content.replace(/ stroke="#0C0C0C" stroke-width="60"/g, '');
  content = content.replace(/ stroke="#0C0C0C" stroke-width="20"/g, '');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed ${file}`);
}
