$(function(){
  $('button').click(function(){
    
    $('button').removeClass("selected");
    $(this).addClass("selected");
    
    var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = $(this).text();
    var flickrOptions = {
      tags: animal,
      format: "json"
    };
    function displayPhotos(data){
      var photoHTML = "<ul>";
      $.each(data.items, function(i, photo){
        photoHTML += "<li class='grid-25 tablet-grid-50'>";
        photoHTML += "<a href='" + photo.link + "'>";
        photoHTML += "<img src='" + photo.media.m + "'";
        photoHTML += "</li>";
      });
      photoHTML += "</ul>";
      $("#photos").html(photoHTML);
    }
    $.getJSON(flickrAPI, flickrOptions, displayPhotos);
    
  });
});