$(".start-workout").click(function(){
  $(".main-container").toggle();
  $(".workout").toggle();
  $.ajax({
    url: 'http://localhost:3000/api/v1/workouts?api_token=FN6SyxHJGimwhV9uR5hZ',
    dataType: 'json',
    success: function(data) {
      $(".show-workout").empty()
      $.each(data, function(key,value)
      {
        var random_index = Math.floor(Math.random()*data.length);
        var value = data[random_index];
        var objects = "";
        objects += '<section class="well workout-list">' + "<img class='workout-image'src=http://localhost:3000" + value.workout.workout_image.thumb.url+ "/ >"
        + "<span class='workout-name'>" + "<span>&nbsp;&nbsp;&nbsp;</span>" + value.workout.name + "</span>"+ "<span>&nbsp;&nbsp;&nbsp;</span>" +
        "<span class='reps'>" + value.workout.repetitions +" Reps"+"</span>" + '</section>'
        $(".show-workout").append(objects)
        return key <5;
      });
    }
  });
})
