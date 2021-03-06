# MobileDevChallenge
A journal of the day by day learning on the **Mobile Developer Challenge**

 *Note: I started a week ago, but for professional reasons I had to postpone. So I decided to restart from lesson one.*

## Index
- [Lesson 2](#lesson2)
- [Lesson 3](#lesson3)

## Tools
    OS: Windows 10
    Command Line: [cmder](http://cmder.net/)
    GUI: [Visual Studio Code](https://code.visualstudio.com/)
    Browser: [Google Chrome Canary](https://www.google.com/chrome/browser/canary.html)

 ## Lesson2
1. Offline first
### The Problem
- Low connection
- Offline

### The Solution
- Think **offline first**

### Techniques to use:
- Deliver the **page's header and content from a cache on the device**, then attempt to fetch updated content from the network
- Deliver the **page's header** from a cache then attempt to fetch the content from the network

### DemoApp
1. git clone https://github.com/jakearchibald/wittr
2. run: npm install
3. run: npm run serve

*The ./wittr/ folder is my copy of the jakearchibald/wittr repo, it will change as I go along and change the code.*

**NOTE**: If you are having errors on step 2 try to run this command firs (it worked for me):

      npm install --global --production windows-build-tools

## Lesson3
**The Service Worker** power!!!
In simple terms: it's a *middle man* between the server and our site, basically we will send and save our files (html, css, json, js?) to a server worker, and then send them to the browser! Makes sence? It will!

Server Workers controls only the folders of is scope.
Example: With a scope **/foo**, it will only control the files inside that folder. If the scope is **/foo/**, it would only control the files that are inside of subfolders of the '/foo' folder...

This makes sence, so we don't get messy with our files!

### Create a Server Worker

```javascript
IndexController.prototype._registerServiceWorker = function() {
  // Check if we can use service workers!
  if(!navigator.serviceWorker) return;

  // Register 'the one'
  navigator.serviceWorker.register('/sw.js')
    .then(function(reg){
      console.log('worked?');
    }).catch(function(err){
      console.log('failed?');
    });
};
```

Exp: We use the method 'navigator.serviceWorker.register' passing the url of the script.
**NOTE**: Service Workers **ONLY** works  only with **HTTPS** urls.

**NOTE 2**: Service Works lifecycle will only change when the page is **close**, a refresh will not update it! Otherway, it has 24h to live? :( This important in case we need to update the service worker.

### Server Worker code

```javascript
self.addEventListener('fetch', function(event) {
  // Your code
  console.log(event.request); // Example

  // 'respondWith' give us control to handle the request
  // takes a request as an argument
  event.respondWith(
    new Response('Hello <b>World!</b>', {
      headers: {
        'Content-Type': 'text/html'
      }
    })
  );
});
```

When we use the 'event.reposndWith' we are hijacking the page, like saying to the browser 'show this now!' It's fast and works even offline (shhh, it works because it's in the service worker, don't tell anyone).

#### fetch
```javascript
// Use fetch  instead of the old buddy XMLHttpRequest(RIP)
fetch('/foo').then(function(response){
  return response.json(); //get the response as json format
}).then(function(data){
  console.log(data); //do stuff with the data that came from the response
}).catch(function(){
  console.log('We have a problem :/'); //in case all failed let's do something
});
```
Here's a todo list: Change all XMLHttpRequest code that you found to fetch()!

### Intercept the request and change the response

```javascript
  //check for the file extension that it's been requested
  if ((event.request.url).slice(-3) == 'jpg') {
    event.respondWith(
      //if we find any, we change it 'muahahahah'...
      //...because we can... but use it for good...
      fetch('/imgs/dr-evil.gif')
    );
  }
```

[Would like to know more?](https://developer.mozilla.org/en-US/docs/Web/API/Request)

![Starship Troopers](https://media.giphy.com/media/MhVXiu5c4SWME/giphy.gif)

(Yep, that was a Starship Troopers reference)