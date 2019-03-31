jQuery(function() {
    var h = jQuery(window).height();
    
    jQuery('.off-canvas-wrapper').css('display','none');
    jQuery('#loader-bg ,#loader').height(h).css('display','block');
});
    
jQuery(window).load(function () { //全ての読み込みが完了したら実行
    jQuery('#loader-bg').delay(900).fadeOut(800);
    jQuery('#loader').delay(600).fadeOut(300);
    jQuery('.off-canvas-wrapper').css('display', 'block');
});
    
//10秒たったら強制的にロード画面を非表示
jQuery(function(){
    setTimeout('stopload()',10000);
});
    
function stopload(){
    jQuery('.off-canvas-wrapper').css('display','block');
    jQuery('#loader-bg').delay(900).fadeOut(800);
    jQuery('#loader').delay(600).fadeOut(300);
}
