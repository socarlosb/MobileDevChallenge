self.addEventListener('fetch', function (event) {
  event.respondWith(
    new Response('Hello <b>World!</b>', {
      headers: {
        'foo': 'bar'
      }
    })
  );
});