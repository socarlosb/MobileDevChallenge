self.addEventListener('fetch', function (event) {
  // TODO: respond to all requests with an html response
  // containing an element with class="a-winner-is-me".
  // Ensure the Content-Type of the response is "text/html"
  //console.log(event.request);
  // new Response(`Hello <b class='a-winner-is-me'>friend</b>!`, {
  //   headers: {
  //     'Content-Type': 'text/html'
  //   }
  // })

  if ((event.request.url).slice(-3) == 'jpg') {
    event.respondWith(
      // new Response(fetch('/imgs/dr-evil.gif'))
      fetch('/imgs/dr-evil.gif')
    );
  }

});