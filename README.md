# Code Reproduction for Capacitor bug

## What is the bug?

backButton listener not working in release build if minifyEnabled option in build.gradle is set to true.

## Steps to reproduce the bug

-   Set minifyEnabled option in build.gradle in app folder to true

-   In the Build menu in android studio, click on generate signed Bundle/APK

-   Select Android App Bundle in the menu that appears

-   Click next use any key to continue

-   In Build Variants select Release

-   Install the generated aab file on device

I have used Playstore Internal app sharing to install the app on my device.

## Current behavior

App is closing when back button is pressed on page 2

https://user-images.githubusercontent.com/57902888/167442771-8b704e54-25af-4dd3-99df-46931409ced8.mp4

## Expected behavior

App should navigate to the previous page when back button is pressed.
