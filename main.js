$(document).ready(function(){
  $('input').on('focus', function(){
    $(this).css('border', 'solid green 1px');
  })
  $('input').on('blur', function(){
    $(this).css('border', 'solid red 1px');
  })
});
