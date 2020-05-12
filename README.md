# Code Push PoC

## Requirements
1. node >= 10
2. yarn
3. appcenter-cli (Optional, required deploying apps to app-center server)
   >`$ npm install -g appcenter-cli`

### Running the code
1. Install all package dependencies
   >` $ yarn install`
2. Run android app on development mode (With either a emulator or a device connected)
   >`$ yarn android`
3. Run react-native package for serving on android app
   >`$ yarn start`

4. Deploy changes to app-center (code-push).
   >`$ yarn deploy`

5. Create release apk for testing code push app update. The apk should be
   available inside `android/app/build/output/apk/`
   >`$ yarn release`

## Files Changed to make code-push work
1. [package.json]()
2. [index.js]()
3. [App.js]()
4. [ShellApp.js]()
5. [android/build.gradle]()
6. [android/settings.gradle]()
7. [android/app/build.gradle]()
8. [android/app/src/main/res/values/strings.xml]()
9. [android/app/src/main/java/com/winzohello/MainApplication.java]()
