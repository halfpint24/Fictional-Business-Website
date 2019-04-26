/*Creation Date: 4/11/2019
Last Edited On: 4/11/2019*/

$(document).ready(function() {
    $("#htmldiv, #cssdiv, #jsdiv, #javadiv, .selected").hide();
    $("#html").click(function() {
        $("#html, #cssdiv, #jsdiv, #javadiv, .selected").hide();
        $("#htmlselected, #css, #js, #java, #htmldiv").fadeIn();
    });
    $("#css").click(function() {
        $("#css, #htmldiv, #jsdiv, #javadiv, .selected").hide();
        $("#cssselected, #html, #js, #java, #cssdiv").fadeIn();
    });
    $("#js").click(function() {
        $("#js, #htmldiv, #cssdiv, #javadiv, .selected").hide();
        $("#jsselected, #html, #css, #java, #jsdiv").fadeIn();
    });
    $("#java").click(function() {
        $("#java, #htmldiv, #cssdiv, #jsdiv, .selected").hide();
        $("#javaselected, #html, #css, #js, #javadiv").fadeIn();
    });

});