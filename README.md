# MobileDevChallenge
A journal of the day by day learning on the **Mobile Developer Challenge**

 *Note: I started a week ago, but for professional reasons I had to postpone. So I decided to restart from lesson one.*

## Tools
    OS: Windows 10
    Command Line: [cmder](http://cmder.net/)
    GUI: [Visual Studio Code](https://code.visualstudio.com/)
    Browser: [Google Chrome Canary](https://www.google.com/chrome/browser/canary.html)

 ## Lesson 2
1. Offline first
### The Problem
- Low connection
- Offline

## The Solution
- Think **offline first**

### Techniques to use:
- Deliver the **page's header and content from a cache on the device**, then attempt to fetch updated content from the network
- Deliver the **page's header** from a cache then attempt to fetch the content from the network

## DemoApp
1. git clone https://github.com/jakearchibald/wittr
2. run: npm install
3. run: npm run serve

*The ./wittr/ folder is my copy of the jakearchibald/wittr repo, it will change as I go along and change the code.*

**NOTE**: If you are having errors on step 2 try to run this command firs (it worked for me):

      npm install --global --production windows-build-tools

