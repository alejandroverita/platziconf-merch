# Platzi Conf Merch

## Iniciando proyecto

Comando para instalar webpack:
`npm install webpack webpack-cli webpack-dev-server --save-dev`

Comando para instalar el plugin de html:
`npm install html-webpack-plugin html-loader --save-dev`

Comando para instalar babel:
`npm install babel-loader @babel/preset-env @babel/preset-react @babel/core --save-dev`

### ESLINT y PRETTIER

Comando para instalar eslint:

Demanera global

`npm install -g eslint`

Plugins de eslint

`npm install eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react`

Luego creas un archivo con el siguiente nombre .eslintrc y pegas lo siguiente:

    {
      "extends": [
    	"airbnb",
    	"prettier"
      ],
      "plugins": [
    	"prettier"
      ],
      "rules": {
    	"react/jsx-filename-extension": [
    	  1,
    	  {
    		"extensions": [
    		  ".js",
    		  ".jsx"
    		]
    	  }
    	],
    	"react/prop-types": 0,
    	"no-underscore-dangle": 0,
    	"import/imports-first": [
    	  "error",
    	  "absolute-first"
    	],
    	"import/newline-after-import": "error"
      },
      "globals": {
    	"window": true,
    	"document": true,
    	"localStorage": true,
    	"FormData": true,
    	"FileReader": true,
    	"Blob": true,
    	"navigator": true
      },
      "parser": "babel-eslint"
    }

Comando para instalar prettier:

`npm install prettier eslint-plugin-prettier eslint-config-prettier`

Creamos un archivo con el nombre .prettierrc y realizamos la siguiente configuración:

    {
      "trailingComma": "es5",
      "semi": true,
      "singleQuote": true
    }

package.json

`"format": "prettier --write \"{*.js,src/**/*.{js,jsx}}\"",`
`"lint": "eslint src/ --fix"`
