# rails-vue-file-uploader-sample

Rails API + Vue の構成で、Active Storageを使って画像をアップロード・表示するためのサンプルプロジェクトです

![output](https://user-images.githubusercontent.com/20487308/99181576-9c7b1880-2772-11eb-99d9-7908a7804392.gif)

## setup

```sh
$ git clone https://github.com/youichiro/rails-vue-file-uploader-sample.git
$ cd rails-vue-file-uploader-sample

# Rails
$ cd backend
$ vim config/database.yml  # edit database settings
$ rails db:create
$ rails db:migarate
$ rails s

# Vue
$ cd frontend
$ npm install
$ npm run serve
$ open http://localhost:8080
```
