(function(jQuery) {
    var searchTerm = 'ねこ';
    getRequest(searchTerm);
  
  function getRequest(searchTerm){
    var params = {
      "q": searchTerm,
      "part": 'snippet',
      "maxResults": '18',
      "order": 'viewCount',
      "type": 'video',
      "videoEmbeddable": true,
      "key": 'AIzaSyBGNVir5PkHatVkhCcJ-TlA3nf9O8x0Jms'
    }
    url = 'https://www.googleapis.com/youtube/v3/search';
  
    jQuery.getJSON(url, params, function(data){
      showResults(data.items);
     })
  }
  
  function showResults(results){
    var html = "";
  
    jQuery.each(results, function(index,value){
      html += 
        '<div class="item large-4 medium-6 columns grid-medium popular-selection" id="popular-page-' + index + '">' +
            '<div class="post thumb-border">' +
                '<div class="post-thumb">' +
                    '<a href="' + 'https://www.youtube.com/watch?v=' + value.id.videoId + '">' + '<img src="' + value.snippet.thumbnails.high.url + '">' + '</a>' +
                    '<div class="video-stats clearfix">' +
                        '<div class="thumb-stats pull-left">' +
                            '<i class="fas fa-paw"></i>' +
                            '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<div class="post-des">' +
                '<h6>'+ value.snippet.title +'</h6>' +
                '<div class="post-stats clearfix">' +
                    '<p align="justify">' +
                        '<i class="fa fa-user"></i>' +
                        '<small>'+ value.snippet.channelTitle +'</small>' +
                        '<br>' +
                        '<i class="fa fa-clock-o"></i>' +
                        '<small>'+ value.snippet.publishedAt.substr(0,10) +'</small>' +
                    '</p>' +
                    // '<p class="pull-left">' +
                    //     '<i class="fa fa-eye"></i>' +
                    //     '<span>1,862K</span>' +
                    // '</p>' +
                '</div>' +
                // '<div class="post-summary">' +
                //     '<p>'+ value.snippet.description +'</p>' +
                // '</div>' +
            '</div>' +
        '</div>';
      console.log(value.snippet.thumbnails.high.url);
      console.log(value);
    })
    jQuery('#popular-videos').html(html);
  }
})(jQuery);
