function handleRequest(request, response) {
  // Test header with an extra colon
  response.setHeader("x-jetpack-header", "Jamba Juice is: delicious", "true");

  // Test that multiple headers with the same name coalesce
  response.setHeader("x-jetpack-header-2", "foo", "true");
  response.setHeader("x-jetpack-header-2", "bar", "true");

  // Test that headers with commas work
  response.setHeader("x-jetpack-header-3", "sup dawg, i heard you like x, " +
    "so we put a x in yo x so you can y while you y", "true");

  // Test that multiple cookies work
  response.setHeader("Set-Cookie", "foo=bar", "true");
  response.setHeader("Set-Cookie", "baz=foo", "true");

  response.write("<html><body>This file tests more complex headers.</body></html>");
}

