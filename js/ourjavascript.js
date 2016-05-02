// JavaScript File

$(document).ready(function(){
    $(".h1heading").click(function(){
        $(".h1heading").animate({
            left: '250px',
            fontSize:'7em'}, 'slow');
        });
    });

$(document).ready(function(){
    $(".resourcesHeader").click(function(){
        var resourcesHeader = $(".resourcesHeader");resourcesHeader
        resourcesHeader.animate({height: '300px', opacity: '0.4'}, "slow");
        resourcesHeader.animate({width: '300px', opacity: '0.8'}, "slow");
      resourcesHeader.animate({height: '100px', opacity: '0.4'}, "slow");
        resourcesHeader.animate({width: '100px', opacity: '0.8'}, "slow");
    });
});

function blink(){
    $('.img-go').delay(100).fadeTo(100,0.5).delay(100).fadeTo(100,1, blink);
}

$(document).ready(function() {
    blink();
});