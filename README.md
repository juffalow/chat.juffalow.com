# [chat.juffalow.com](https://github.com/juffalow/chat.juffalow.com)

Chat application, you can find on [chat.juffalow.com](http://chat.juffalow.com).

## Tech

* [Node's NPM](https://www.npmjs.com/)
* [Webpack](https://webpack.github.io/)
* [React](https://facebook.github.io/react/)
* [Flux](https://facebook.github.io/flux/)
* [Babel](http://babeljs.io/)
* [iris](http://iris-go.com/)

### Server

Server-side is in GoLang, see [GoLangChatServer](https://github.com/juffalow/GoLangChatServer) repository.

It is running on [DigitalOcean](https://www.digitalocean.com)'s Droplet.

## Build

Download all dependencies :

```
npm install
```

### Development

```
webpack
```

### Production

```
webpack --config webpack.production.config.js
```

## Versions

These versions are available under tags.

### v1.0.0

First working example. Basically, it is the copy of [iris websocket example](https://github.com/iris-contrib/examples/tree/master/websocket) with login.

### v2.0.0

React and Bootstrap is used.
