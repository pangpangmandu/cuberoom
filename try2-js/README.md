# Cuberoom vanila js

## Deploy

Run the command below

```sh
vc .
```

### Add a domain to deploy

```sh
vercel alias xxx.vercel.app cuberoom-210404.juhyung.dev
```

## Developmenmt

### Local test

`vc dev` can't deliver image files. Use sfz public to deliver static image
files.

```sh
vc dev

# in other shell
sfz public
```

### ESLint

Use the command below to run eslint once.

```sh
npm run eslint
```

Use the commane below to run eslint whenever you save a js file.

```sh
npm run eslint-watch
```
