
(function ($) {
    $.fn.RainbowLoader = function () {
        // extend the options from pre-defined values:
        var options = $.extend({
            callback: function () { }
        }, arguments[0] || {});
        function uniqueID() {
            function chr4() {
                return Math.random().toString(16).slice(-4);
            }
            return chr4() + chr4() +
                '-' + chr4() +
                '-' + chr4() +
                '-' + chr4() +
                '-' + chr4() + chr4() + chr4();
        }
        // Code
        var container = $(this);
        container.addClass("rainbowloader");
        var randomid = "rainbowloader_" + uniqueID();
        container.attr("id",randomid);
        
        var rainbowloader  = document.getElementById(randomid);
        var colors = options.colors;
        var gradient = "linear-gradient(to right,";     
        for(var i=0;i<colors.length;i++){
             gradient+=colors[i];
             if(i!=colors.length-1){
                 gradient+= ", ";
            }
        }
        gradient += ")";
        console.log(gradient);
        $(rainbowloader).css("background", gradient);
        $(rainbowloader).hide();
        $.fn.Loading = function (){
            $(rainbowloader).show();
        };
        $.fn.Loaded = function (){
            $(rainbowloader).hide();
        };
        return this;
    }
}(jQuery));

