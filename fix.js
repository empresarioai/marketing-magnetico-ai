import fs from 'fs';
let app = fs.readFileSync('src/App.tsx', 'utf8');
app = app.replace(/onSubmit="[^"]+"/, 'onSubmit={(e) => { e.preventDefault(); document.getElementById("simpleForm")?.classList.add("hidden"); document.getElementById("simpleSuccess")?.classList.remove("hidden"); }}');
fs.writeFileSync('src/App.tsx', app);
