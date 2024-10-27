https://nodejs.org/en
https://tailwindcss.com/docs/installation

Steps to setup tailwindcss
1. npm init - skip everything and create package.json
2. npm install tailwindcss
3. npx tailwindcss init
4. Add content: ["./src/**/*.{html,js}"], to the tailwind.config.js
5. Create src folder and create index.html, input.css
6. Include the tailwind directives @tailwind base; @tailwind components; @tailwind utilities; to input.css
7. Run npx tailwindcss -i ./src/input.css -o ./src/output.css --watch to start using tailwind
8. Add the necessary code and start working.