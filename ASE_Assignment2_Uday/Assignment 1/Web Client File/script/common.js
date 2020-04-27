//jQuery code for the website
$(document).ready(function() {
    //jQuery code for the Order Form
    $("select[name='numberp1']").change(function(){
        var $d = $("select[name='numberp1']");
            var n = parseFloat($d.val());
            var r = (19.99*n).toFixed(2);
            $("#resultp1").val('$'+r);
    });
    $("select[name='numberp2']").change(function(){
        var $d = $("select[name='numberp2']");
        var n = parseFloat($d.val());
        var r = (19.99*n).toFixed(2);
        $("#resultp2").val('$'+r);
    });
    $("select[name='numberp3']").change(function(){
        var $d = $("select[name='numberp3']");
        var n = parseFloat($d.val());
        var r = (24.99*n).toFixed(2);
        $("#resultp3").val('$'+r);
    });
    $("select[name='numberb1']").change(function(){
        var $d = $("select[name='numberb1']");
        var n = parseFloat($d.val());
        var r = (19.99*n).toFixed(2);
        $("#resultb1").val('$'+r);
    });
    $("select[name='numberb2']").change(function(){
        var $d = $("select[name='numberb2']");
        var n = parseFloat($d.val());
        var r = (14.99*n).toFixed(2);
        $("#resultb2").val('$'+r);
    });
    $("select[name='numberb3']").change(function(){
        var $d = $("select[name='numberb3']");
        var n = parseFloat($d.val());
        var r = (19.99*n).toFixed(2);
        $("#resultb3").val('$'+r);
    });
    $("select[name='numberc1']").change(function(){
        var $d = $("select[name='numberc1']");
        var n = parseFloat($d.val());
        var r = (19.99*n).toFixed(2);
        $("#resultc1").val('$'+r);
    });
    $("select[name='numberc2']").change(function(){
        var $d = $("select[name='numberc2']");
        var n = parseFloat($d.val());
        var r = (19.99*n).toFixed(2);
        $("#resultc2").val('$'+r);
    });
    $("select[name='numberc3']").change(function(){
        var $d = $("select[name='numberc3']");
        var n = parseFloat($d.val());
        var r = (19.99*n).toFixed(2);
        $("#resultc3").val('$'+r);
    });
    //Each time the product quantity changes, the total is recalculated
    var total=0;
    $('select').change(function () {
        total = 0;
        $('input.result').each(function () {
            var amountInfo = parseFloat($(this).val().replace('$',''));
            amountInfo = (amountInfo) ? amountInfo : 0; //Checking if number is otherwise set to 0
            total += amountInfo;
        });
        $('input[name="totalPrice"]').val('$'+total.toFixed(2));
    });
    });
