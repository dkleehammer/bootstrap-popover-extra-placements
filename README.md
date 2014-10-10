NOTE: this repo is no longer supported, I would be happy to hand it off to anyone that would like to support it, let me know.

bootstrap-popover-extra-placements
==================================

Extends the bootstrap popover and to add extra placements.


Preface
----------------------------------

Twitter's Bootstrap built-in popover plug-in is great, however, there are times when your
popover is rending outside of the viewport.  'extra-placements' extends the built-in plug-in
and provides 4 additional placement options giving you a total of 8 placement options.

### Usage
Using the plug-in is simple.  Download either the un-minified or the minified of both the js
and css files (or download the whole project) and simply add the following line of code AFTER
you include bootstrap.  The css stylesheet is added automatically by the plug-in, so you do not
need to link it.

Once you have added the 'extra-placements' plug-in, instantiate a popover just as normal, but
now use on of the additional placement options.

```html
<html>
  <head>
    <title>Example</title>
    <link rel="stylesheet" type="text/css" href="/bootstrap/css/bootstrap.min.css">

    <script type="text/javascript" src="/js/libs/jquery/jquery-1.8.1.min.js"></script>
    <script type="text/javascript" src="/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/plugins/popover-extra-placements.js"></script>

    <style type="text/css">
      button.btn {
        margin: 20px;
      }
    </style>

  </head>
  <body>
    <button class="btn" rel="popover" title="Test Title" data-content="Here is an example popover" data-placement="bottom">out of window</button>
    <br>
    <button class="btn" rel="popover" title="Test Title" data-content="Here is an example popover" data-placement="bottomLeft">in window</button>

    <script type="text/javascript">
      $(document).ready(function(){
        $('button[rel="popover"]').popover();
      });
    </script>
  </body>
</html>
```

