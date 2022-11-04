$(".person").on('click', function(){
    $(this).toggleClass('focus').siblings().removeClass('focus');
 })

 $(document).ready(function(){
    $('#action_menu_btn').click(function(){
        $('.action_menu').toggle();
    });
        });