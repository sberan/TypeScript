// @noImplicitReferences: true
// @currentDirectory: /

//TODO: this isn't really a typings test

// @filename: /src/a.ts
const x = 0;

// @filename: /src/b.ts
const y = 0;

// @filename: /tsconfig.json
{
    //TODO: point of this test is to not need "**/*"
    "include": ["src/**/*"]
}
