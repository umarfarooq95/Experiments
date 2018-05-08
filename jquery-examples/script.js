$(document).ready(function () {
    $(".title")
        .text("Hello Jquery")
        .removeClass("title")
        .addClass("new-class");
    //alert('The page Contains ' + $('h1,div').length + '<h1> and <div> Elements!')
    //alert('The page Contains ' + $('input',$('form')).length)
    //alert('The page Contains ' + $('a').filter(('.external')).length)
    //alert('The page Contains ' + $('p').find('em').length)


    //in jquery above 1.8 version andSelf is replaced as addBack

    $('div').find('p').css('border','1px solid #993300');
    var liEle = $('li:eq(1)');
    liEle.next().css('color','green');
    liEle.prev().css('color','red');
    liEle.parent().css('border','1px dotted orange');
    liEle.parent().children().css('font-size','20px');
    liEle.parent().children(':last').css('font-size','40px');
    liEle.nextAll().css('text-decoration','underline');
    liEle.prevAll().css('font-weight','bold');
    
    var sampleul = ['one','two','three','four','five'];
    
  $('.second').each(function (index) {
      $(this).find('li').append(sampleul[index])
  })
  $('.attr').find($('a')).attr({'href':'www.google.com','title':'jquery'}).attr('href')
    $('.html').html('<strong>Hello</strong>')
    $('.text').text('<strong>Hello</strong>')

});