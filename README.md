# capacitor-plugin-demo

[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/robingenz/capacitor-plugin-demo/ci.yml?branch=main)](https://github.com/robingenz/capacitor-plugin-demo/actions)

<!-- [![GitHub tag (latest SemVer)](https://img.shields.io/github/tag/robingenz/capacitor-plugin-demo?color=brightgreen&label=version)](https://github.com/robingenz/capacitor-plugin-demo/releases) -->

⚡️ Simple Ionic Angular app to demonstrate the use of certain Capacitor plugins.

## Plugins

The following plugins are included:

- [capawesome-team/capacitor-android-battery-optimization](https://capawesome.io/plugins/android-battery-optimization)
- [capawesome-team/capacitor-android-foreground-service](https://capawesome.io/plugins/android-foreground-service)
- [capawesome-team/capacitor-app-update](https://capawesome.io/plugins/app-update)
- [capawesome-team/capacitor-background-task](https://capawesome.io/plugins/background-task)
- [capawesome-team/capacitor-badge](https://capawesome.io/plugins/badge)
- [capawesome-team/capacitor-cloudinary](https://capawesome.io/plugins/cloudinary/)
- [capawesome-team/capacitor-datetime-picker](https://capawesome.io/plugins/datetime-picker)
- [capawesome-team/capacitor-file-opener](https://capawesome.io/plugins/file-opener)
- [capawesome-team/capacitor-file-picker](https://capawesome.io/plugins/file-picker)
- [capawesome-team/capacitor-managed-configurations](https://capawesome.io/plugins/managed-configurations)
- [capawesome-team/capacitor-photo-editor](https://capawesome.io/plugins/photo-editor)
- [capawesome-team/capacitor-screen-orientation](https://capawesome.io/plugins/screen-orientation)
- [capacitor-community/keep-awake](https://github.com/capacitor-community/keep-awake)
- [capacitor-community/privacy-screen](https://github.com/capacitor-community/privacy-screen)
- [capacitor-community/text-to-speech](https://github.com/capacitor-community/text-to-speech)

## Development Setup 💻

### Prerequisites

- Install [Node.js](https://nodejs.org) which includes [Node Package Manager](https://www.npmjs.com/get-npm)
- Android development: Install [Android Studio](https://developer.android.com/studio)
- iOS development: Install [XCode](https://apps.apple.com/de/app/xcode/id497799835?mt=12)
- You must have access to the Capawesome Sponsorware ([Read more](https://capawesome.io/insiders/))

### Getting Started

Clone this repository:

```
git clone https://github.com/robingenz/capacitor-plugin-demo.git
```

Change to the root directory of the project:

```
cd capacitor-plugin-demo
```

Install all dependencies:

```
npm i
```

Prepare and launch the Android app:

```
npx ionic cap sync android
npx ionic cap run android
```

Prepare and launch the iOS app:

```
npx ionic cap sync ios
npx ionic cap run ios
```

This project uses [Ionic](https://ionicframework.com/) as app development platform and the [Ionic CLI](https://ionicframework.com/docs/cli).

<!-- ## Changelog

See [CHANGELOG.md](https://github.com/robingenz/capacitor-plugin-demo/blob/main/CHANGELOG.md). -->

## License

See [LICENSE](https://github.com/robingenz/capacitor-plugin-demo/blob/main/LICENSE).
