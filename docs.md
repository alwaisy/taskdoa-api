### Project dependencies
```
express
dotenv
cors
express-validator
@prisma/client

```

devDependencies
```
ts-node
typescript
@types/node
@types/express
@types/dotenv
@types/cors
```

saveDev Dependencies
```
prisma
esbuild-register
nodemon
```

### Steps to move with app
0. make dir => `mkdir dir-name`
1. run `npm init` 
2. install dependencies
3. setup db (prisma) => `npx prisma init --datasource-provider <database> eg. sqlite`
4. put database url in `.env `
5. make schema model in schema.prisma file
6. run migrations eg. add prisma model to database => `npx prisma db push`
7. go to package json and setup dev server script using nodemon
8. make src folder, create` main.ts` file in it. (it is a server file)
9. make utils folder and put `client.ts` file in it.
10. make seed.ts file in prisma folder
11. types folder in src, and put all type in it. 
12. make seed function
13. goto package json file, before scripts field, add a new field named prisma. `"prisma": {
    "seed": "node --require esbuild-register prisma/seed.ts"
  },`

14. next create api folder, and create cruds here. like productsApi(get, post, put, delete)
15. follow the pattern for crud functions  `[read, readOne, create, update, delete] = [GET(all), GET(single), POST(create), PUT(update), DELETE(delete)]`
16. go feature wise create folder `featureName` and move data, api, folders into this. 
17. for the single file follow angular or nest file naming. like `name.type.ts`. and for more than one file follow folder => `file + folderName.ts`. types could be `api, controller as logic, routes, data`
18. create `product.logic.ts` file, name all functions using pattern `[index, show, store, update, destroy]`
19. create `product.route.ts` file, configure it.
20. configure `main.ts` file to run server

