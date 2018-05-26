<script type="text/javascript">

$(document).ready(function() {
  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  })
});

$(window).on("scroll", function() {
  if($(window).scrollTop()){
    $('nav').addClass('black')
}else{
  $('nav').removeClass('black')
  }
});
   
$('.smooth').on('click', function() {
    $.smoothScroll({
        scrollElement: $('body'),
        scrollTarget: '#' + this.id
    }) 
    return false;
});     
</script>