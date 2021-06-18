# Cuberoom vanila js

## 처음 받아서 시작하기

```sh
npm install
npm run build

# public 폴더를 웹서버로 서빙해주세요.
# ex1) sfz public
# ex2) python3 -m http.server --directory public
```

## 디렉토리 설명

* src: 소스코드 디렉토리
* static: 이미지, 맵 등 소스가 아닌 리소스 디렉토리
* public: 빌드된 후 결과물이 위치하는 디렉토리(빌드된 소스코드와, 복사된 리소스가 위치)

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
