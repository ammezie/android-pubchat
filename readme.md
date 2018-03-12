# Android Public Anonymous Chat

Build a public Android anonymous chatroom with React Native and Pusher. Follow the tutorial [https://pusher.com/tutorials/anonymous-chat-react-native/](https://pusher.com/tutorials/anonymous-chat-react-native/)

## Getting Started

Clone the project repository by running the command below if you use SSH

```
git clone git@github.com:ammezie/android-pubchat.git
```

If you use https, use this instead

```
git clone https://github.com/ammezie/android-pubchat.git
```

Install all required packages by running:

```
npm install
```

### Prerequisites

#### Setup Pusher

If you don't have one already, create a free Pusher account at https://pusher.com/signup then login to your dashboard and create an app.

Then fill in your Pusher app credentials in your `server.js` file by replacing this line with your appid, appkey and app secret respectively:

```
const pusher = new Pusher({
  appId: 'XXX_PUSHER_ID',
  key: 'XXX_PUSHER_KEY',
  secret: 'XXX_PUSHER_SECRET',
  cluster: 'XXX_APP_CLUSTER
  encrypted: true
});
```

Also, remember to fill in the your secret key in your `index.android.js` file by replacing this line:

```
var pusher = new Pusher('XXX_PUSHER_KEY', {
  cluster: 'XXX_APP_CLUSTER
});
```

Also, remember to fill in the IP address of your server in your `index.android.js` file by replacing this line:

```
fetch('XXX_IP_ADDRESS', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    message: this.state.text
  })
})
```

**Note: if you use IP address such as `127.0.0.1` or `localhost`, the request is most likely going to fail. This is because, in React Native, `localhost` or `127.0.0.1` refers to the internal application. Please use the network IP for your system instead.** 

After doing the above, please remember to launch your android emulator or better still connect your android device with debug mode enabled.

And finally, start the application by doing the following:

```
react-native start
// in another terminal, run the one below.
react-native run-android
// fire up one last terminal and run the following:
node server.js
```

## Built With
* [Pusher](https://pusher.com) - APIs to enable devs building realtime features
* [React Native](http://facebook.github.io/react-native) - Build native mobile apps using JavaScript and React
* [Express](https://expressjs.com) - Fast, unopinionated, minimalist web framework for Node.js
