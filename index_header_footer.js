function mover(){
    var m;
    m=document.getElementById('back');
    m.style.display="block";
}
function mout(){
    var m;
    m=document.getElementById('back');
    m.style.display="none";
}


$('#top').click(function(){
    $('html, body').animate({scrollTop : 0},600);
    return false;
});