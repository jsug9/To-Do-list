#!/bin/bash

printf ' >> HTML linter check...  \n'
wait
npx hint .
printf '| ...FINISHED <<'

printf '\n >> SCSS linter check...  '
wait
npx stylelint "**/*.css"
printf ' ...FINISHED <<'

printf '\n >> JavaScript linter check...  '
wait
npx eslint .
printf ' ...FINISHED <<\n'

# Linters Installation
# npm install --save-dev hint@6.x
# npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
# npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x

# For permission, run chmod +x ./linters.sh
# To run the linters, run ./linters.sh