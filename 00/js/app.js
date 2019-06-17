let password =true;
let value = $('.form-check-input').val();

$(function (){
    $('.fa-plane-departurebtn').on('click', function(){
      
       if(value == password) {

        console.log('3');
        $('.fa-plane-departure').fadeIn( function(){
            console.log('5')
            $('.fas').animate({
                'top': '-50px',
                'left': '1200px',
            },10000 , function(){

            });
        })

       } else {
           alert('パスワードが間違っております。もう一度入力してください。')
       }
       
    })

    
})