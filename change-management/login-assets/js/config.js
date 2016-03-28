$(document).ready(function (){


  var player = videojs("video1", {
    muted: false
  });


function jumpToTime (time) { //jump to time and start player depending on parameter from URL
    player.currentTime(time);
    player.play();
}

  $(".chapters li a").click(function() {
      var time = $(this).data("time");
      jumpToTime(time);
  });



var obj = {
        'set1' : {
            'start' : '1',
            'end' : ''
        },
        'set2' : {
            'start' : '10',
            'end' : ''
        }
    };


$(".chapters li a").each(function(){
  //console.log($(this).data("time"));
  obj.set1['end'] = $(this).data("time");
});

//console.log(obj.set2);

player.ready(function(){

    var duration_time =  Math.floor(this.duration());
    //console.log(duration_time);
    this.on('timeupdate', function() {
      var current_time =  Math.floor(this.currentTime());
            /*if(dataTimes.indexOf(current_time) > -1){

            listItems.removeClass("active");
            listItems.find("[data-time="+current_time+"]").parent().addClass("active");

        }

        if(faqDataTimes.indexOf(current_time) > -1) {
            faqlist.removeClass("active");
            faqlist.parent().removeClass("active");
            faqlist.parent().find("a[data-time="+current_time+"]").parent().addClass("active");
        }*/
    });



  }); // END player ready func


}); //END DOM READY
