# affiliate-blog-vue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### [Before moving to VS Code]

```
rm -r backend
rm -r frontend
sudo docker ps
sudo docker stop ??
sudo docker image prune -a
```

### [Open VS Code to Transfer Files to EC2 - Ubuntu]

```
sudo chmod 600 vs-kp-1.pem
sudo scp -rp -i vs-kp-1.pem Dockerfile /mnt/c/wk/repository/sappientia-viverre-frontend/src index.html package-lock.json package.json vite.config.js webServer.js ec2-user@xx.xx.xxx.xxx:/home/ec2-user/downloads
```

### [Back to AWS]

```
cd downloads
sudo service docker start
sudo usermod -a -G docker ec2-user
sudo docker build --platform=linux/amd64 -t ec2-vue:v1.0 -f Dockerfile .
sudo docker run --rm -d -p 80:8080 ec2-vue:v1.0
```
