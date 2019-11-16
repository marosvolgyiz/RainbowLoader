# RainbowLoader

RainbowLoader is a simple rainbow style loader animation jQuery plugin.

![RainbowLoader](rainbowloader.png)
### How to use?

It's simple, just see the following html: 

```
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>The HTML5 RainbowLoader</title>
    <meta name="description" content="The HTML5 RainbowLoader">
    <meta name="author" content="maros">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="rainbowloader.css">
</head>

<body>

    <div class="loader1" style="display: inline-block">
    </div>
     
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossorigin="anonymous"></script>
   
    <script src="rainbowloader.js"></script>
    
    <script>
        $(document).ready(function () {
            var l1 = $(".loader1").RainbowLoader({ colors : ["#FFC312", "#C4E538", "#12CBC4", "#FDA7DF", "#ED4C67","#FFC312"]});
            l1.Loading();
        });
    </script>
</body>

</html>
```

Enjoy! 

License
----

MIT


**Free Software, Hell Yeah!**

