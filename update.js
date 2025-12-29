const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/components/Projects.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

const oldStr = 'className="relative w-full max-w-5xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-6 md:p-10 space-y-6"';
const newStr = 'className={`relative w-full max-w-5xl bg-gradient-to-br ${selectedProject.bgGradient} rounded-3xl shadow-2xl p-6 md:p-10 space-y-6 max-h-[90vh] overflow-y-auto`}';

if (content.includes(oldStr)) {
  content = content.replace(oldStr, newStr);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('Updated successfully!');
} else {
  console.log('Pattern not found');
}
