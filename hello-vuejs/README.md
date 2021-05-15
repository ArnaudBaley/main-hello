# template-vuejs
[GitHub repository link](https://github.com/ArnaudBaley/template-vuejs).

## Project setup with docker

### Build image
```
sudo docker build -t template-vuejs -f docker/Dockerfile .
```

### Launch container in detached mode.
```
sudo docker run -dit -p 8080:8080 --rm --name template-vuejs-container template-vuejs
```

## Project setup without docker
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
