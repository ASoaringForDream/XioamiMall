window.addEventListener('load', function () {
    //轮播图部分
    var focus = this.document.querySelector('.main').querySelector('.focus').querySelectorAll('div');
    var circle = document.querySelector('.main').querySelector('.circle').querySelector('ul');
    for (var i = 0; i < focus.length; i++) {
        var li = document.createElement('li');
        circle.appendChild(li);
    }
    var lis = circle.querySelectorAll('li');
    var index = 0;
    lis[index].className = 'current';
    for (var i = 0; i < focus.length; i++) {
        focus[i].style.zIndex = 0;
    }
    focus[index].style.zIndex = 8;
    focus[1].style.opacity = '0';
    focus[2].style.opacity = '0';
    focus[3].style.opacity = '0';

    var flag = true;
    function change(a, b) {
        var m = 1;
        var n = 0;
        var t1 = setInterval(function () {
            m -= 0.1;
            if (m <= 0) {
                a.style.opacity = '0';
                clearInterval(t1);
            } else {
                a.style.opacity = m;
            }
        }, 50)
        var t2 = setInterval(function () {
            n += 0.1;
            if (n >= 1) {
                b.style.opacity = '1';
                clearInterval(t2);
                flag = true;
            } else {
                b.style.opacity = n;
            }
        }, 50)
    }
    var timer = setInterval(function () {
        var f = index;
        index = (++index) % focus.length;
        change(focus[f], focus[index])
        for (var i = 0; i < focus.length; i++) {
            focus[i].style.zIndex = 0;
            lis[i].className = '';
        }
        focus[index].style.zIndex = 8;
        lis[index].className = 'current';
    }, 3000)
    for (var i = 0; i < focus.length; i++) {
        focus[i].addEventListener('mouseenter', function () {
            clearInterval(timer);
        })
        focus[i].addEventListener('mouseout', function () {
            clearInterval(timer);
            timer = setInterval(function () {
                var f = index;
                index = (++index) % focus.length;
                change(focus[f], focus[index])
                for (var i = 0; i < focus.length; i++) {
                    focus[i].style.zIndex = 0;
                    lis[i].className = '';

                }
                focus[index].style.zIndex = 8;
                lis[index].className = 'current';

            }, 3000)
        })
    }

    var next = document.querySelector('.main').querySelector('.next');
    var prev = document.querySelector('.main').querySelector('.prev');
    next.addEventListener('mouseover', function () {
        this.style.backgroundColor = '#757575';
    })
    next.addEventListener('mouseout', function () {
        this.style.backgroundColor = 'transparent';
    })
    prev.addEventListener('mouseover', function () {
        this.style.backgroundColor = '#757575';
    })
    prev.addEventListener('mouseout', function () {
        this.style.backgroundColor = 'transparent';
    })
    next.addEventListener('click', function () {
        if (flag) {
            var f = index;
            index = (++index) % focus.length;
            change(focus[f], focus[index])
            for (var i = 0; i < focus.length; i++) {
                focus[i].style.zIndex = 0;
                lis[i].className = '';

            }
            focus[index].style.zIndex = 8;
            lis[index].className = 'current';

            flag = false;
        }
    })
    prev.addEventListener('click', function () {
        if (flag) {
            var f = index;
            if (index == 0) {
                index = focus.length - 1;
            } else {
                index--;
            }
            change(focus[f], focus[index])
            for (var i = 0; i < focus.length; i++) {
                focus[i].style.zIndex = 0;
                lis[i].className = '';

            }
            focus[index].style.zIndex = 8;
            lis[index].className = 'current';

            flag = false;
        }
    })
    next.addEventListener('mouseenter', function () {
        clearInterval(timer);
    })
    next.addEventListener('mouseout', function () {
        clearInterval(timer);
        timer = setInterval(function () {
            var f = index;
            index = (++index) % focus.length;
            change(focus[f], focus[index])
            for (var i = 0; i < focus.length; i++) {
                focus[i].style.zIndex = 0;
                lis[i].className = '';

            }
            focus[index].style.zIndex = 8;
            lis[index].className = 'current';

        }, 3000)

    })
    prev.addEventListener('mouseenter', function () {
        clearInterval(timer);
    })
    prev.addEventListener('mouseout', function () {
        clearInterval(timer);
        timer = setInterval(function () {
            var f = index;
            index = (++index) % focus.length;
            console.log(f + ',' + index);
            for (var i = 0; i < focus.length; i++) {
                focus[i].style.zIndex = 0;
                lis[i].className = '';

            }
            focus[index].style.zIndex = 8;
            lis[index].className = 'current';

        }, 3000)
    })
    //楼层部分
    var changes = this.document.querySelectorAll('.change');
    var checkeds = null;
    for (var i = 0; i < changes.length; i++) {
        checkeds = changes[i].querySelectorAll('a');
        checkeds[0].className = 'change_current';
    }
    var checked_1 = changes[0].querySelectorAll('a');
    var pro_1 = document.querySelector('.chuandai').querySelectorAll('ul');
    for (var i = 0; i < checked_1.length; i++) {
        checked_1[i].setAttribute('data-index', i)
        checked_1[i].addEventListener('mouseover', function () {
            for (var j = 0; j < checked_1.length; j++) {
                checked_1[j].className = '';
                pro_1[j].style.display = 'none';
            }
            pro_1[this.getAttribute('data-index')].style.display = 'block';
            this.className = 'change_current';
        });
    }
    var checked_2 = changes[1].querySelectorAll('a');
    var pro_2 = document.querySelector('.bijiben').querySelectorAll('ul');
    for (var i = 0; i < checked_2.length; i++) {
        checked_2[i].setAttribute('data-index', i)
        checked_2[i].addEventListener('mouseover', function () {
            for (var j = 0; j < checked_2.length; j++) {
                checked_2[j].className = '';
                pro_2[j].style.display = 'none';
            }
            pro_2[this.getAttribute('data-index')].style.display = 'block';
            this.className = 'change_current';
        });
    }
    var checked_3 = changes[2].querySelectorAll('a');
    var pro_3 = document.querySelector('.jiadian').querySelectorAll('ul');
    for (var i = 0; i < checked_3.length; i++) {
        checked_3[i].setAttribute('data-index', i)
        checked_3[i].addEventListener('mouseover', function () {
            ;
            for (var j = 0; j < checked_3.length; j++) {
                checked_3[j].className = '';
                pro_3[j].style.display = 'none';
            }
            pro_3[this.getAttribute('data-index')].style.display = 'block';
            this.className = 'change_current';
        });
    }
    var checked_4 = changes[3].querySelectorAll('a');
    var pro_4 = document.querySelector('.shenghuo').querySelectorAll('ul');
    for (var i = 0; i < checked_4.length; i++) {
        checked_4[i].setAttribute('data-index', i)
        checked_4[i].addEventListener('mouseover', function () {
            ;
            for (var j = 0; j < checked_4.length; j++) {
                checked_4[j].className = '';
                pro_4[j].style.display = 'none';
            }
            pro_4[this.getAttribute('data-index')].style.display = 'block';
            this.className = 'change_current';
        });
    }
    var checked_5 = changes[4].querySelectorAll('a');
    var pro_5 = document.querySelector('.chufang').querySelectorAll('ul');
    for (var i = 0; i < checked_5.length; i++) {
        checked_5[i].setAttribute('data-index', i)
        checked_5[i].addEventListener('mouseover', function () {
            ;
            for (var j = 0; j < checked_5.length; j++) {
                checked_5[j].className = '';
                pro_5[j].style.display = 'none';
            }
            pro_5[this.getAttribute('data-index')].style.display = 'block';
            this.className = 'change_current';
        });
    }
    var checked_6 = changes[5].querySelectorAll('a');
    var pro_6 = document.querySelector('.jiaju').querySelectorAll('ul');
    for (var i = 0; i < checked_6.length; i++) {
        checked_6[i].setAttribute('data-index', i)
        checked_6[i].addEventListener('mouseover', function () {
            ;
            for (var j = 0; j < checked_6.length; j++) {
                checked_6[j].className = '';
                pro_6[j].style.display = 'none';
            }
            pro_6[this.getAttribute('data-index')].style.display = 'block';
            this.className = 'change_current';
        });
    }
    var checked_7 = changes[6].querySelectorAll('a');
    var pro_7 = document.querySelector('.chuxing').querySelectorAll('ul');
    for (var i = 0; i < checked_7.length; i++) {
        checked_7[i].setAttribute('data-index', i)
        checked_7[i].addEventListener('mouseover', function () {
            ;
            for (var j = 0; j < checked_7.length; j++) {
                checked_7[j].className = '';
                pro_7[j].style.display = 'none';
            }
            pro_7[this.getAttribute('data-index')].style.display = 'block';
            this.className = 'change_current';
        });
    }
    var checked_8 = changes[7].querySelectorAll('a');
    var pro_8 = document.querySelector('.baihuo').querySelectorAll('ul');
    for (var i = 0; i < checked_8.length; i++) {
        checked_8[i].setAttribute('data-index', i)
        checked_8[i].addEventListener('mouseover', function () {
            ;
            for (var j = 0; j < checked_8.length; j++) {
                checked_8[j].className = '';
                pro_8[j].style.display = 'none';
            }
            pro_8[this.getAttribute('data-index')].style.display = 'block';
            this.className = 'change_current';
        });
    }
    // 返回顶部
    var back = document.querySelector('.back');
    var aside = document.querySelector('aside');
    window.addEventListener('scroll',function(){
        if(window.pageYOffset >= 1000)
        {
            back.style.display='block';
            aside.style.height='575px';
        }else{
            back.style.display='none';
            aside.style.height='462.5px';
        }
    })
    back.addEventListener('click',function(){
        window.scroll(0,0);
    })
})