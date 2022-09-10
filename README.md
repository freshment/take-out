# A Take-out application Demo

> This is my first time to develop an application with [React-Native](https://reactnative.dev/docs/getting-started 'url'). So I used **npx react-native init xxx** to init my project. After that, I was set up Android/IOS environment with this [guides](https://reactnative.dev/docs/environment-setup), finally I was enable run & build react-native app in my Mac.

## Environment & Tools version
* Node: 16.14.2
* React-Native: 0.7.0
* Java jdk: 11
* MacOs: 11.1
* IOS: 14.4

## Project directory
This section explains the directory structure in the **src** directory.
```
|-- android ---------------------------> Android native files
|-- ios -------------------------------> IOS native files
|-- src -------------------------------> my business files(Main)
    |-- App.js ------------------------> entry page file
    |-- assets ------------------------> project sources files
    |-- components --------------------> page minimum component
    |   |-- ContactShop
    |   |-- FoodSwiper
    |   |-- NavHeader
    |   |-- OrderSummary
    |   |-- PickedPlate
    |-- hooks ----------------> encapsulated custom React-hooks
    |   |-- animas.js --------> encapsulated some Animations
    |-- mock -----------------> some mock pages data
    |-- pages ----------------> store different routing pages
    |-- utils ----------------> encapsulated tool functions
|-- index.js -----------------> init project page
|-- package.json
```

This section explains the dependencies used in this project. **By the way Im not used any Animation Libraries.**
```
react-native-linear-gradient --> realize the function of gradient
react-native-shadow & react-native-svg --> realize the function of BoxShadow
react-native-swiper --> realize the funciton of Carousel
react-native-toast-notifications --> realize the function of Toast
```

Project scripts:
Before implement scripts, u must install dependencies
```
// in project root path
npm install

// cd ./ios
pod install

// run the project on devices
npm run android
npm run ios

// build this project
npm run bundle-android // will out put an APK files.
npm run bundle-ios // output assets.
```

## Summary and reflection
* I spent a lot of time at setting up and packing.
* During the development, I found that Native development mode is quite different from Web development mode. For example: style, tag, animation implementation, and time binding events, etc. Besides, learned React is easy to get started with coding.
* Some problems were encounrtered during the development process: (1) The loop attribute of Swiper plugins have some bug; (2) The gradient config is not familiar, thus, I didn't get the shadow effect right; (3) Some animation don't encapsulate not well by myself;
* In short, through this project, I have a good understanding of react-native and native development.


### Thanks for ur reading. I would be greatful if u make some suggestions to me.