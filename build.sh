#! /bin/bash

if [ "$1" == "prod" ]; then
    NODE_ENV=production npx tailwindcss-cli@latest build -o src/pages/tailwind.css
else
    npx tailwindcss-cli@latest build -o src/pages/tailwind.css
fi
