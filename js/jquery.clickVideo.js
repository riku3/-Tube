(function(jQuery) {
    //click video
    jQuery(document).on('click', '.yt_video', function(){
        video = '<iframe src="'+ jQuery(this).attr('youtube') +'" frameborder="0" allowfullscreen></iframe>';
        jQuery(this).replaceWith(video);
    });
})(jQuery);