// //modal show/hide
// $(document).ready(function(){
//     $("#modal").modal('show');

//     $("#hide-modal").click(function(){
//         $("#modal").modal('hide');
//     });
// });
$('.navbar a').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
            scrollTop: $(hash).offset().top
        },75);
    }
});
