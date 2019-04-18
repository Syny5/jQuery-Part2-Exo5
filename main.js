$('#lastName').on('focus', function(){
  $(this).css('border', 'solid green 1px');
})
$('#firstName').on('focus', function(){
  $(this).css('border', 'solid green 1px');
})
$('#lastName').on('blur', function(){
  $(this).css('border', 'solid red 1px');
})
$('#firstName').on('blur', function(){
  $(this).css('border', 'solid red 1px');
})
