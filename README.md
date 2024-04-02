# aak-swagger-typescript-api 


### This is a fork of the package [swagger-typescript-api](https://www.npmjs.com/package/swagger-typescript-api) 🔱

### 🔥 This package is designed to work together with the package [aak-nuxt-auth-fetch](https://www.npmjs.com/package/aak-nuxt-auth-fetch)

---
<br>

[![NPM badge](https://img.shields.io/npm/v/aak-swagger-typescript-api.svg)](https://www.npmjs.com/package/aak-swagger-typescript-api) 

<img src="https://raw.githubusercontent.com/acacode/swagger-typescript-api/master/assets/swagger-typescript-api-logo.png" align="left"
     title="swagger-typescript-api logo by js2me" width="93" height="180">

Generate api via swagger scheme.  
Supports OA 3.0, 2.0, JSON, yaml  
Generated api module use fetch from npm package [aak-nuxt-auth-fetch](https://www.npmjs.com/package/aak-nuxt-auth-fetch)

<br>
<br>
<br>  
<br>  
<br>  

![](https://raw.githubusercontent.com/acacode/swagger-typescript-api/master/assets/components-converter-example.jpg)    

Thanks to the developers of the project https://www.npmjs.com/package/swagger-typescript-api

## 📦 Get Started

1. Install `aak-swagger-typescript-api` as project dependency:
```bash
npm i -D aak-swagger-typescript-api
```
2. Put down your swagger.json to the root folder of the project
3. Run the command in your terminal
```bash
npx swagger-typescript-api -p ./swagger.json -o ./utils/api --sort-routes --sort-types --extract-request-params
```
4. In the folder `utils/api/`, there will be a file `Api.ts` for use in your project 🤝

## 📄 Usage  

```muse
Usage: sta [options]
Usage: swagger-typescript-api [options]
Usage: swagger-typescript-api generate-templates [options]

Options:
  -v, --version                 output the current version
  -p, --path <string>           path/url to swagger scheme
  -o, --output <string>         output path of typescript api file (default: "./")
  -n, --name <string>           name of output typescript api file (default: "Api.ts")
  -t, --templates <string>      path to folder containing templates
  -d, --default-as-success      use "default" response status code as success response too.
                                some swagger schemas use "default" response status code as success response type by default. (default: false)
  -r, --responses               generate additional information about request responses
                                also add typings for bad responses (default: false)
  --union-enums                 generate all "enum" types as union types (T1 | T2 | TN) (default: false)
  --add-readonly                generate readonly properties (default: false)
  --route-types                 generate type definitions for API routes (default: false)
  --enum-names-as-values        use values in 'x-enumNames' as enum values (not only as keys) (default: false)
  --extract-request-params      extract request params to data contract (Also combine path params and query params into one object) (default: false)
  --extract-request-body        extract request body type to data contract (default: false)
  --extract-response-body       extract response body type to data contract (default: false)
  --extract-response-error      extract response error type to data contract (default: false)
  --silent                      Output only errors to console (default: false)
  --api-class-name <string>     name of the api class (default: "Api")
  --patch                       fix up small errors in the swagger source definition (default: false)
  --sort-types                  sort fields and types (default: false)
  --sort-routes                 sort routes in alphabetical order (default: false)
  --extract-enums               extract all enums from inline interface\type content to typescript 
```

The optimal command to use`npx`:
```
npx swagger-typescript-api -p ./swagger.json -o ./utils/types -n apiTypes.ts --sort-routes --sort-types --extract-request-params
```

Also you can use `npx`:  
```
npx swagger-typescript-api -p ./swagger.json -o ./src -n myApi.ts
```

## 🚀 How it looks  

![](https://raw.githubusercontent.com/acacode/swagger-typescript-api/master/assets/npx.gif)  

![](https://raw.githubusercontent.com/acacode/swagger-typescript-api/master/assets/auth-example.gif)  

![](https://raw.githubusercontent.com/acacode/swagger-typescript-api/master/assets/typings1.gif)  


## 📝 License  
Licensed under the [MIT License](https://github.com/Azirafel17/swagger-typescript-api/blob/master/LICENSE).
