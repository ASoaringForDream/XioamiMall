window.addEventListener('load', function () {
    var input = this.document.querySelector('.search_text');
    var index = keywords = 1;
    var keywords = ['小米手机', '黑鲨', '耳机', '红米', '打印机', '显示器', '净水机', '小米平板5 Pro']
    this.setInterval(function () {
        index = index % keywords.length;
        input.placeholder = keywords[index];
        index++;
    }, 3000)
})
$(function () {
    $(".header nav ul:eq(0) li").hover(function () {
        if ($(this).index() < 7) {
            $(".header nav .products").stop().slideToggle(200);
            $(".header nav .products").find("ul").hide();
            $(".header nav .products").find("ul").eq($(this).index() + 1).show();
        }
    })
    $(".header nav .products").mouseover(function () {
        $(this).stop().show();
    });
    $(".header nav .products").mouseleave(function () { 
            $(".header nav .products").slideUp(200);
            $(".header nav .products").slideUp(200);
    });
})