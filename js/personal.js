//ANIMACAO
(function() {

    var word = ['Eu sou Junior Silva!', 'desenvolvedor Front-end', 'apaixonado por interfaces', 'minimalistas e objetivas!'];
    // var element = document.getElementsByTagName('h2')[0];
    var element = document.getElementsByClassName("bigtext")[0];
    var wordIndex = 0;

    var resetAnimation = function() {
      element.classList.remove('flip');
    }

    setInterval(function(){
        switch (wordIndex) {
          case 0:
            element.classList.add('flip');
            element.textContent = word[wordIndex];
            wordIndex = 1;
            setTimeout(resetAnimation, 1000);
          break;

          case 1:
            element.classList.add('flip');
            element.textContent = word[wordIndex];
            wordIndex = 2;
            setTimeout(resetAnimation, 1000);
          break;

          case 2:
            element.classList.add('flip');
            element.textContent = word[wordIndex];
            wordIndex = 3;
            setTimeout(resetAnimation, 1000);
          break;

          case 3:
            element.classList.add('flip');
            element.textContent = word[wordIndex];
            wordIndex = 0;
            setTimeout(resetAnimation, 1000);
          break;
        }
    },2000)
}());

$(function() {
  var selectedClass = "";
  $(".fil-cat").click(function() {
    selectedClass = $(this).attr("data-rel");
    $("#portfolio").fadeTo(100, 0.1);
    $("#portfolio div").not("." + selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("." + selectedClass).fadeIn().addClass('scale-anm');
      $("#portfolio").fadeTo(300, 1);
    }, 300);

  });
});

// Apply click handler to all tile elements,
$('.tile').click(function(){
   // Get image inside tile element
  var img = $(this).find('img');
  // Update modal with image data
  $("#img01").attr('src', img.attr('src'));
  $("#img02").attr('src', img.attr('src'));
  $('#caption').html(img.attr('alt'));
  $('#myModal').css('display','block');
});

// Close modal
$('.close').click(function(){
  $('#myModal').css('display','none');
})
