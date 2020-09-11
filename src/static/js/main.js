'use strict'

svg4everybody();

// ============================================================ footer
(function () {
  var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

  var stickFooter = function () {
    var FOOTER = document.querySelector('footer');
    var MAIN = document.querySelector('.content');
    var BODY = document.querySelector('body');
    var footerHeight = FOOTER.offsetHeight;
    BODY.style.position = 'relative';
    MAIN.style.marginBottom = footerHeight + 40 + 'px';
    FOOTER.style.position = 'absolute';
    FOOTER.style.bottom = '0';
    FOOTER.style.left = '0';
    FOOTER.style.width = '100%';
  };

  if (isIE11) {
    stickFooter();
    window.addEventListener('resize', stickFooter);
  }
})();

// =========================================================== Плавный скролл по якорным ссылкам

var $page = $('html, body');
$('a[href*="#"]').click(function () {
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 400);
  return false;
});


// ============================================================ Подрезка строк по длинне
trimStringLetter(".for-this__h3", 60);
// trimStringLetter('.sol-content__link', 32);

// обрезать до послейдней буквы
function trimStringLetter(string, stringLength) {
  var sringLengthNew = stringLength;
  $(string).text(function (i, text) {
    if (sringLengthNew < stringLength) {
      sringLengthNew += 5;
    }

    if (text.length >= sringLengthNew) {
      sringLengthNew -= 5;
      text = text.slice(0, sringLengthNew);
      text = text + '...';
    }

    $(this).text(text);

  });
}

// обрезать до последнего слова
// function trimString(string, stringLength) {
//   var sringLengthNew = stringLength;
//   $(string).text(function (i, text) {
//     if (sringLengthNew < stringLength) {
//       sringLengthNew += 5;
//     }

//     if (text.length >= sringLengthNew) {
//       sringLengthNew -= 5;
//       text = text.substring(0, sringLengthNew);
//       var lastIndex = text.lastIndexOf(" "); // позиция последнего пробела
//       text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
//     }

//     $(this).text(text);

//   });
// }


// =========================================================== Отмена автодополнения и валидации по умолчанию у всех форм

$('form').attr('novalidate', true);

// ============================================================ Гамбургер меню

$('.header__hamburger-search-box .header__button-hamburger').click(function () {
  $('.header__main-nav').addClass('active');
  $('body').css('overflow-y', 'hidden');
})

$('.header__main-nav .header__button-hamburger').click(function () {
  $('.header__main-nav').removeClass('active');
  $('body').css('overflow-y', 'visible');
})

$(window).resize(function () {
  if ($('.header__hamburger-search-box').css('display') == 'none') {
    $('.header__main-nav').removeClass('active');
    $('body').css('overflow-y', 'visible');
  }
})


// ========================================================== Уменьшить ширину поисковой формы, а при вводе текста показать кнопку поиска

$('.search-form__input').on('keypress', function () {
})

$('.search-form__input').on('blur', function () {
  if (!$(this).val()) {
    $(this).closest('.header__search-form').find('.search-form__button').fadeOut();
  }
})

$('.search-form__input').on('focus', function () {
  $(this).addClass('placeholder-transparent');
  $(this).closest('.header__search-form').find('.search-form__button').fadeIn();
})

$('.search-form__input').on('blur', function () {  
  $(this).removeClass('placeholder-transparent');
})

$('.header__top .search-form__input').on('focus', function () {
  $('.header__top .header__search-form').css('max-width', '320px');
  $('.header__top .header__search-form').css('width', '100%');
})

$('.header__top .search-form__input').on('blur', function () {
  if (!$(this).val()) {
    $('.header__top .header__search-form').css('max-width', '250px');
    $('.header__top .header__search-form').css('width', '100%');
  }
  
})


// =========================================================== Показать форму для поиска снизу хедера

$('.header__button-open-search').click(function () {
  $('.header__bottom').toggleClass('active');
})

headerMainSearchVisible();

$(window).resize(headerMainSearchVisible);

function headerMainSearchVisible() {
  if ($('.header__top .header__search-form').css('display') == 'flex') {
    $('.header__bottom').removeClass('active');
  }
};


// ============================================================== Переключение табов на главной

$('.tab__item').on('click', function () {
  var tabItemInd = $('.tab__item').index($(this));

  $('.tab__item').removeClass('active');
  $(this).addClass('active');

  $('.sol-content__list').hide();
  $('.sol-content__list').eq(tabItemInd).fadeIn();
})


// ================================================================= Выбор из списка опций продукта
$('.product__tr').click(function (e) {
  e.preventDefault();
  $('.product__tr').removeClass('product__tr_select');
  $(this).addClass('product__tr_select');
  $(this).find('.product__radio')[0].checked = true;
})



// =============================================================== Вращение иконки загрузки в кнопке
$('.certific__btn-more').click(function () {
  $(this).addClass('active');

  setTimeout(function () {
    $(this).removeClass('active');
  }.bind(this), 1200);
})

// =============================================================== vendor accordion

$('.vendor__item').on('click', function (e) {
  // if (e.target.className == 'vendor__item') {
  $(this).addClass('active');
  $(this).find('.vendor__number').hide();
  $(this).find('.vendor__item-close').show();
  $(this).find('.vendor__cert').slideDown(300, 'linear');
  // }
})

$('.vendor__item-close').on('click', function (event) {
  event.stopPropagation();
  var vendorItem = $(this).closest('.vendor__item');

  vendorItem.removeClass('active');
  vendorItem.find('.vendor__number').show();
  vendorItem.find('.vendor__item-close').hide();
  vendorItem.find('.vendor__cert').slideUp(300, 'linear');
})

$('.vendor__h2').on('click', function (event) {
  event.stopPropagation();
})

// ========================================================== faq accordion
$('.quest__item').on('click', function () {
  if (!$(this).hasClass('active')) {
    $(this).addClass('active');
    $(this).find('.quest__answer').slideDown();
  } else {
    $(this).removeClass('active');
    $(this).find('.quest__answer').slideUp();
  }
})


// ===========================================================
// =========================================================== Слайдеры
// ===========================================================

// =========================================================== Слайдер на главной

if ($('.features .reviews__list').length) {
  reviewListSlick();
}

$(window).resize(function () {
  if ($('.features .reviews__list').length) {
    reviewListSlick();
  }
})

function reviewListSlick() {
  $('.features .reviews__list').slick({
    accessibility: false,
    arrows: false,
    dots: true,
    appendDots: $('.reviews__dots'),
    dotsClass: 'reviews__dots-list',
    responsive: [{
      breakpoint: 577,
      settings: "unslick"
    }]
  });
}


// =========================================================== Слайдеры продуктов

for (var i = 0; i < 200; i++) {
  var sl = '.sl-' + i;

  initSlick(sl);
}

if ($('.courses__list .course__item').length < 3) {
  // console.log($('.courses__list .course__item')[0]);
}

function initSlick(sl) {
  var cl = '.courses__list';
  var slcl = sl + ' ' + cl;
  var sldots = sl + ' .reviews__dots';

  $(slcl).slick({
    variableWidth: true,
    accessibility: false,
    dots: true,
    infinite: true,
    slidesToShow: 4,
    appendDots: sldots,
    dotsClass: 'reviews__dots-list',
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="/public/images/icon/arrow.svg"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="/public/images/icon/arrow.svg"></button>',
    // prevArrow: '<button type="button" class="slick-prev"><img src="static/images/icon/arrow.svg"></button>',
    // nextArrow: '<button type="button" class="slick-next"><img src="static/images/icon/arrow.svg"></button>',
    responsive: [{
        breakpoint: 1420,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1121,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
    ]
  })
}


// ============================================================ Слайдер видеокурсов

initSlickV2('.sl2-0');

function initSlickV2(sl) {
  var cl = '.for-this__list';
  var slcl = sl + ' ' + cl;
  var sldots = sl + ' .reviews__dots'

  $(slcl).slick({
    variableWidth: true,
    accessibility: false,
    dots: true,
    infinite: true,
    slidesToShow: 6,
    appendDots: sldots,
    dotsClass: 'reviews__dots-list',
    prevArrow: '<button type="button" class="slick-prev"><img src="/public/images/icon/arrow.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="/public/images/icon/arrow.svg"></button>',
    // prevArrow: '<button type="button" class="slick-prev"><img src="static/images/icon/arrow.svg"></button>',
    // nextArrow: '<button type="button" class="slick-next"><img src="static/images/icon/arrow.svg"></button>',
    responsive: [{
        breakpoint: 1420,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1231,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 998,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 3,
          arrows: false,
        }
      },
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 431,
        settings: {
          slidesToShow: 1,
          arrows: false,
          focusOnSelect: true
        }
      },
    ]
  })

}


// убирает dots если она одна в слайдере
removeDots();

$(window).resize(function () {
  removeDots();
})

function removeDots() {
  $('.reviews__dots-list li').each(function () {
    if ($(this).siblings().length === 0) {
      $(this).hide();
    }
  });
}


// =======================================================
// ======================================================= Вывод сообщений от сервера в маленькой модалке
// =======================================================

function success(elem, data) {
  elem.append('<div class="modal-ajax"><div class="aj"></div></div>');
  $('.modal-ajax').find('.aj').html(data).addClass('aj_success');
  $('.modal-ajax').fadeIn().delay(1000).fadeOut();
}

function error(elem, data) {
  elem.append('<div class="modal-ajax"><div class="aj"></div></div>');
  $('.modal-ajax').find('.aj').html(data).addClass('aj_error');
  $('.modal-ajax').fadeIn().delay(1000).fadeOut();
}


// ======================================================== Патерн валидации email
var patternEmail = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;


// ===========================================================
// =========================================================== Модальные окна
// ===========================================================


function fadeInModal(modal) {
  $('body').css('overflow-y', 'hidden');

  $(modal).fadeIn(200);

  $('.modal__content').mousedown(function (e) {
    e.stopPropagation();
  })

  $('.video-box').mousedown(function (e) {
    e.stopPropagation();
  })

  $('.modal__close').mousedown(function () {
    fadeOutModal();
  })

  $('.modal').mousedown(function () {
    fadeOutModal();
  })

  $(document).bind('keyup', function (e) {
    if (e.which === 27) {
      fadeOutModal();
      $(document).unbind('keyup');
    }
  })
}

function fadeOutModal() {
  $('.modal').fadeOut(200);
  $('body').css('overflow-y', 'scroll');
}


// ========================================================= Открыть modal-discount при первом посещении сайта

function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

if (!getCookie('pase4sure_discount')) {
  setTimeout(function () {
    fadeInModal('.modal-discount');
  }, 1000)
  var maxAge = "" + (60 * 60 * 24 * 30);
  document.cookie = "pase4sure_discount=1; max-age=" + maxAge;
}


// ========================================================= modal-discount

$('.modal-discount .modal__form').on('submit', function (e) {
  e.preventDefault();

  var inputEmail = $(this).find('[name="email"]');

  if (patternEmail.test(inputEmail.val())) {
    modalAjaxDiscount();
  } else {
    inputEmail.addClass('error');
    inputEmail.on('keypress', function () {
      inputEmail.removeClass('error');
      inputEmail.next('span').remove();
    })
  }
})

function modalAjaxDiscount() {
  var action = $('.modal-discount .modal__form').attr('action');
  var data = $('.modal-discount .modal__form').serialize();

  $.ajax({
    url: action,
    type: "POST",
    data: data,
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    context: $('.modal-discount .modal__box-input'),

    success: function (response) {
      if (response.success) {
        $('.modal__code-disc').text(response.success);
        $('.modal__box-form-disc .modal__form').hide();
        $('.modal__box-form-disc .modal__box-code-btn').fadeIn();
      } else if (response.error) {
        $(this).find('.modal__error').remove();
        $(this).append('<span class="modal__error">' + response.error + '</span>');
      }
    },

    error: function (response) {}
  })
}


// ======================== копирование кода дискоунта
$('.modal__btn-copy').on('click', function () {
  $(this).addClass('_active');
  $(this).text('Copied');

  var range = document.createRange();
  range.selectNode(document.querySelector('.modal__code-disc'));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
})


// ================================================================== modal-demo
$('.product__btn-demo').on('click', function () {

  var id =  $(this).attr('data-id');
  var data = {
    id: id
  }

  if($('.modal-demo').closest('body').find('.certification__list').length) {
    $.ajax({
      url: $('.certification__list').attr('data-url'),
      type: "POST",
      data: data,
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      },
  
      success: function (response) {
        if (response) {
  
          $('.modal-demo').html(response);  
          
          fadeInModal('.modal-demo');
        }
      },
      error: function (response) {}
    })

  } else {
    fadeInModal('.modal-demo');
  }
})


$('.modal-demo').on('click', $('.modal-demo .modal__form .modal__btn'), function (e) {
  e.preventDefault();
  var modalBtn = document.querySelector('.modal-demo .modal__form .modal__btn');

  if(e.target == modalBtn) {

    var inputModalDemo = $('.modal-demo .modal__box-input [type="email"]');
  
    if (patternEmail.test(inputModalDemo.val())) {
      modalDemoAjax();
    } else {
      inputModalDemo.addClass('error');
      inputModalDemo.on('keypress', function () {
        inputModalDemo.removeClass('error');
        inputModalDemo.next('span').remove();
      })
    }
  }

})

function modalDemoAjax() {
  var action = $('.modal-demo .modal__form').attr('action');
  var data = $('.modal-demo .modal__form').serialize();

  $.ajax({
    url: action,
    type: "POST",
    data: data,
    async: false,
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    context: $('.modal-demo .modal__box-input'),

    success: function (response) {
      if (response.error) {
        $(this).find('.modal__error').remove();
        $(this).append('<span class="modal__error">' + response.error + '</span>');
      } else {
          window.location = response.downloadUrl;
      }
    },
    error: function (response) {}
  })
}


// ================================================================== modal-registr
// ======================================== Вывести модалку для регистрации после клика на ссылку бесплатного видео
// showModalRegistr();

function showModalRegistr() {
  fadeInModal('.modal-registr');

  $('.modal-registr__btn').on('mousedown', function () {
    $('.modal-registr__content-1').hide();
    $('.modal-registr__content-2').fadeIn();
  })

  $('.modal__close').mousedown(function () {
    resetModalRegistr()
  })

  $('.modal').mousedown(function () {
    resetModalRegistr()
  })

  function resetModalRegistr() {
    setTimeout(function () {
      $('.modal-registr__content-1').show();
      $('.modal-registr__content-2').hide();
    }, 500)
  }
}


var formModalEmail = $('.modal-registr__content-1 .modal__form [type=email]');
var formModalEmail2 = $('.modal-registr__content-2 .modal__form [type=email]');
var formModalPass2 = $('.modal-registr__content-2 .modal__form [type=password]');

$('.modal-registr__content-1 .modal__form').on('submit', function (e) {
  e.preventDefault();

  var self = $(this);
  var context = $('.modal-registr .modal__box-input');
  var valid1 = false;

  if (patternEmail.test(formModalEmail.val())) {
    valid1 = true;
  } else {
    formModalEmail.addClass('error');
    formModalEmail.on('keypress', function () {
      formModalEmail.removeClass('error');
    })
  }

  if (valid1) {
    modalRegAjax1(self, context);
  }
})

function modalRegAjax1(self, context) {
  var action = self.attr('action');
  var data = self.serialize();

  $.ajax({
    url: action,
    type: "POST",
    data: data,
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    context: context,

    success: function (response) {
      if (response.success) {
        var elemPrev = self.prev();
        self.remove();
        elemPrev.after('<div class="modal__serv-response">' + response.success + '</div>');
        $('.modal__serv-response').hide().fadeIn(500);

      } else if (response.error) {
        formModalEmail.next('.modal__error').remove();
        formModalEmail.after('<span class="modal__error">' + response.error_password + '</span>');

        formModalEmail.addClass('error');
        formModalEmail.on('keypress', function () {
          formModalEmail.removeClass('error');
          formModalEmail.next('span').remove();
        })
      }
    },

    error: function (response) {}
  })
}

$('.modal-registr__content-2 .modal__form').on('submit', function (e) {
  e.preventDefault();

  var self = $(this);

  var valid1 = false;
  var valid2 = false;

  if (patternEmail.test(formModalEmail2.val())) {
    valid1 = true;
  } else {
    formModalEmail2.addClass('error');
    formModalEmail2.on('keypress', function () {
      formModalEmail2.removeClass('error');
    })
  }

  if (formModalPass2.val()) {
    valid2 = true;
  } else {
    formModalPass2.addClass('error');
    formModalPass2.on('keypress', function () {
      formModalPass2.removeClass('error');
    })
  }

  if (valid1 && valid2) {
    modalRegAjax2(self);
  }
})

function modalRegAjax2(self) {
  var action = self.attr('action');
  var data = self.serialize();

  $.ajax({
    url: action,
    type: "POST",
    data: data,
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },

    success: function (response) {
      if (response.success) {
        $('.modal-registr__content-2')
          .html('<div class="modal__start-watching">' + response.success + '</div>')
          .hide()
          .fadeIn();

        setTimeout(function () {
          fadeOutModal();
        }, 2000);
        location.reload();
      } else if (response.errors) {

      }
    },
    error: function (response) {

      formModalPass2.next('.modal__error').remove();
      formModalPass2.after('<span class="modal__error">' + response.responseJSON.errors.email + '</span>');

      formModalEmail2.addClass('error');
      formModalEmail2.on('keypress', function () {
        formModalEmail2.removeClass('error');
        formModalEmail2.next('span').remove();
      })

      formModalPass2.addClass('error');
      formModalPass2.on('keypress', function () {
        formModalPass2.removeClass('error');
        formModalPass2.next('span').remove();
      })
    }
  })
}


// =================================================================
// ================================================================= Формы
// =================================================================

// ================================================================= register-nfirstName
var regName = $('input[name=name]');
var regEmail = $('input[name=email');
var regPassword = $('input[name="password"]');
var regPasswordConfirm = $('input[name="password_confirmation"]');

$('.register-form').on('submit', function (e) {
  e.preventDefault();

  var valid1 = false;
  var valid2 = false;

  if (patternEmail.test(regEmail.val())) {
    valid1 = true;
  } else {
    regEmail.addClass('error');
    regEmail.on('keypress', function () {
      regEmail.removeClass('error');
    })
  }

  if (regPassword.val() && regPasswordConfirm.val() && regPassword.val() == regPasswordConfirm.val()) {
    valid2 = true;
  } else {
    $('[type=password]').addClass('error');
    $('[type=password]').on('keypress', function () {
      $(this).removeClass('error');
    })
  }

  if (valid1 && valid2) {
    $(".register-form").unbind('submit').submit();
  }
})

// ========================================================== login
$('.login-form').on('submit', function (e) {
  e.preventDefault();

  var valid1 = false;
  var valid2 = false;

  if (patternEmail.test(regEmail.val())) {
    valid1 = true;
  } else {
    regEmail.addClass('error');
    regEmail.on('keypress', function () {
      regEmail.removeClass('error');
    })
  }

  if (regPassword.val()) {
    valid2 = true;
  } else {
    $('[type=password]').addClass('error');
    $('[type=password]').on('keypress', function () {
      $(this).removeClass('error');
    })
  }

  if (valid1 && valid2) {
    $('.login-form').unbind('submit').submit();
  }
});


// ========================================================== forgot-form
$('.forgot-form').on('submit', function (e) {
  e.preventDefault();

  var valid1 = false;

  if (patternEmail.test(regEmail.val())) {
    valid1 = true;
  } else {
    regEmail.addClass('error');
    regEmail.on('keypress', function () {
      regEmail.removeClass('error');
    })
  }

  if (valid1) {
    $('.forgot-form').unbind('submit').submit();
  }
})


// ============================================================ account-settings
$('.a-content__form').on('submit', function (e) {
  e.preventDefault();

  var valid1 = false;
  var valid2 = false;
  var valid3 = false;

  if (regName.val()) {
    valid3 = true;
  } else {
    regName.addClass('error');
    regName.on('keypress', function () {
      regName.removeClass('error');
    })
  }

  if (patternEmail.test(regEmail.val())) {
    valid1 = true;
  } else {
    regEmail.addClass('error');
    regEmail.on('keypress', function () {
      regEmail.removeClass('error');
    })
  }

  if (regPassword.val() && regPasswordConfirm.val() && regPassword.val() == regPasswordConfirm.val()) {
    valid2 = true;
  } else {
    $('[type=password]').addClass('error');
    $('[type=password]').on('keypress', function () {
      $(this).removeClass('error');
    })
  }

  if (valid1 && valid2 && valid3) {
    $('.a-content__form').unbind('submit').submit();
  }
})

// ============================================================== selectric
$('.form__select').selectric({

  onBeforeChange: function() {
    $('.selectric .label').css({'color': '#272727', 'fontWeight': '400'});
    $('.form__select').removeClass('error');
    $('.selectric').css({'borderColor': '#E4E4E4'});
  },
});

if(!$('.selectric .label').val()) {
  $('.selectric .label').css({'color': 'rgba(39, 39, 39, 0.3)', 'fontWeight': '300'});
} 

// ================================================================= cart form
$('.form-payment').on('submit', function (e) {
  e.preventDefault();

  var form = $(this);
  var context = $(this).find('[type="email"]');

  var valid1 = false;
  var valid2 = false;

  var input = document.querySelectorAll('.form-payment .form__input');
  var inputEmail = document.querySelector('[name="email"]');

  input.forEach(function (item, index, array) {
    if (!item.value) {
      input[index].classList.add('error');
      input[index].addEventListener('keypress', function () {
        if (input[index].classList.contains("error")) {
          input[index].classList.remove('error');
        }
      })
    }
  })

  if($('.form__select').hasClass('error')) {
    $('.selectric').css({"borderColor": "red"});
    $('.selectric .label').css({"color": "#E9575A"});
  }

  var errors = document.querySelectorAll('.form-payment .error');
  if (!errors.length) {
    valid1 = true;
  }

  if (patternEmail.test(inputEmail.value)) {
    valid2 = true;
  } else {
    inputEmail.classList.add('error');
    inputEmail.addEventListener('keypress', function () {
      inputEmail.classList.remove('error');
    })
  }

  if (valid1 && valid2) {
    formPaymentAjax(form, inputEmail, context);
  }
})

function formPaymentAjax(form, inputEmail, context) {
  var action = form.attr('action');
  
  var total = $('.cart__amount.total').text();
  var email = inputEmail.value;
  var firstName = form.find('[name="first-name"]').val();
  var lastName = form.find('[name="last-name"]').val();
  var country = form.find('[name="country"]').val();
  var city = form.find('[name="city"]').val();
  var address = form.find('[name="address"]').val();
  var zip = form.find('[name="zip"]').val();

  var data = {
    email: email,
    total: total,
    firstName: firstName,
    lastName: lastName,
    country: country,
    city: city,
    address: address,
    zip: zip
  };

  $.ajax({
    url: action,
    type: "POST",
    data: data,  
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    context: context,

    success: function (data) {

      if (data.success) {

        stripe.redirectToCheckout({
          // Make the id field from the Checkout Session creation API response
          // available to this file, so you can provide it as parameter here
          // instead of the CHECKOUT_SESSION_ID placeholder.
          sessionId: data.success
        }).then(function (result) {

          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
        });

      } else if (data.error) {

        $(this).next('.modal__error').remove();
        $(this).after('<span class="modal__error">' + data.error + '</span>');

        $(this).addClass('error');
        $(this).on('keypress', function () {
          $(this).removeClass('error');
          $(this).next('span').remove();
        })

      }
    }
  })
}



// =================================================================== request exam
try {
  $("#phone-flags").intlTelInput({
    preferredCountries: [],
    defaultCountry: "auto",
    initialCountry: "auto",
    geoIpLookup: function(success, failure) {
      $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
        var countryCode = (resp && resp.country) ? resp.country : "";
        success(countryCode);
      });
    },
    nationalMode: false,
    // separateDialCode: true, // код с флагом
    // utilsScript: "../libs/intl-tel-input/js/utils.js"
  });
} catch (er) {}


$('#phone-flags').on('keydown', function(e){
  if(e.key.length == 1 && e.key.match(/[^0-9 +-]/)){
    return false;
  };
})

$('.req-exam__form').on('submit', function (e) {
  e.preventDefault();

  var exam = $(this).find('[name="code"]');
  var email = $(this).find('[name="email"]');
  var phone = $(this).find('[name="phone"]');


  var valid1 = false;
  var valid2 = false;
  var valid3 = false;

  if (exam.val()) {
    valid1 = true;
  } else {
    exam.addClass('error');
    exam.on('keypress', function () {
      exam.removeClass('error');
    })
  }

  if (patternEmail.test(email.val())) {
    valid2 = true;
  } else {
    email.addClass('error');
    email.on('keypress', function () {
      email.removeClass('error');
    })
  }

  if (phone.val()) {
    valid3 = true;
  } else {
    phone.addClass('error');
    phone.on('keypress', function () {
      phone.removeClass('error');
    })
  }

  if (valid1 && valid2 && valid3) {
    $(this).unbind('submit').submit();
  }

})


// ======================================================
// ======================================================


// ====================================================== inputmask
// if ($('#numberCard')[0]) {
//   var cleave = new Cleave('#numberCard', {
//     creditCard: true,
//     onCreditCardTypeChanged: function (type) {}
//   });
// }

// $('.details [name="expiration-date"]').mask('99/99');
// $('.details [name="security-code"]').mask('999?9', {
//   'placeholder': ''
// });


// ====================================================== what is this
$('.details__what-is-this').mouseenter(function () {
  $('.details__modal-cvv').fadeIn();
})

$('.details__what-is-this').mouseleave(function () {
  $('.details__modal-cvv').hide();
})


// =================================================== открыть бесплатые курсы по клику на кнопку free

$('.course__btn-free').on('click', function () {
  $('.for-this__item').eq(0).click();
});


// =========================================================== tab for-this показ треков
$('.for-this__list').on('click', '.for-this__item', function () {
  $('.for-this__item').removeClass('active');
  $(this).addClass('active');
  var idThisItem = $(this).data('id');

  switchTreckList(idThisItem);
});

function switchTreckList(id) {
  id += '';

  if ($('.track').css('display') === 'none' && !$.trim($('.track__list').text()) == "") {
    $('.track').fadeIn(400);
  }

  $('.track__list').hide();

  var trackList = '.track__list' + '[data-id=' + id + ']';

  $(trackList).fadeIn(300);

};



// ========================================================
// ======================================================== Добавление в корзину
// ========================================================

function checksCart(num) {
  if(num > 0) {
    setTimeout(function() {
      $('.header__cart-counter').text(num);
      $('.header__cart-counter').fadeIn();
    }, 300)
  } else {
    $('.header__cart-counter').fadeOut();
  }
}

// ======================================================== add to cart

$('.product__form').on('submit', function (e) {
  e.preventDefault();

  var action = $(this).attr('action');
  var data = $(this).serialize();

  $.ajax({
    url: action,
    type: "POST",
    data: data,
    dataType: "json",
    context: $('main'),

    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },

    success: function (data) {

      if (data.success) {
        success($(this), data.success);
      } else if (data.error) {
        error($(this), data.error);
      }

      if(data.count) {
        checksCart(data.count);
      }
    }
  })
})

// ========================================================== add to cart courses

$('.course__form').on('submit', function (e) {
  e.preventDefault();

  var data = {
    "product-set": $(this).attr('data-id')
  };

  $.ajax({
    url: $(this).attr('action'),
    type: "POST",
    data: data,
    dataType: "json",
    context: $('main'),

    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },

    success: function (data) {
      if (data.success) {
        success($(this), data.success);
      } else if (data.error) {
        error($(this), data.error);
      }

      if(data.count) {
        checksCart(data.count);
      }
    }
  })
})

// ====================================================== cart remove
$('.c-order__cart').on('click', '.cart__btn-remove', function () {

  var cartProductId = '' + $(this).closest('tr').data('id');

  delProdAjax(cartProductId);

})

function delProdAjax(data) {

  $.ajax({
    url: $('.c-order__cart').data('action'),
    type: "POST",
    data: {
      id: data
    },
    dataType: "json",

    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },

    success: function (data) {

      $('.c-order__cart').html(data.html);
      checksCart(data.count);
      
    },

    error: function (data) {}
  })
}

// ========================================================= discount cart

$('.c-order__cart').on('click', '.cart__discount-btn', function (e) {
  e.preventDefault();

  var cartFormInput = $('.cart__form-input');

  if (cartFormInput.val() != "") {
    discountProdAjax(cartFormInput.val());
  }
})

function discountProdAjax(data) {

  $.ajax({
    url: $('.cart__form-discount').attr('action'),
    type: "POST",
    data: data,
    dataType: "json",

    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },

    success: function (data) {
      $('.c-order__cart').html(data.html);
    },

    error: function (data) {}
  })
}

// ============================================================= delete discount
$('.c-order__cart').on('click', '.cart__btn-remove-discount', function (e) {
  e.preventDefault();

    discountDelAjax();
})

function discountDelAjax(data) {

  $.ajax({
    url: $('.cart__discount-response').attr('data-url'),
    type: "POST",
    data: data,
    dataType: "json",

    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },

    success: function (response) {
     location.reload()
    }
  })
}


// ================================================================= добавление в корзину доп материала
$('.a-extend__btn').on('click', function (e) {
  var action = $('.a-extend__btn').attr('data-url');

  $.ajax({

    url: action,
    type: 'POST',
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },

    data: {
      'product-set': $(this).data().product_id,
      discount: 'discount_cart'
    },

    context: $('main'),

    success: function (data) {
      if (data.success) {
        success($(this), data.success);
      } else if (data.error) {
        error($(this), data.error);
      }
    }

  });
})


// =====================================================================
// ===================================================================== Invoices
// =====================================================================

// ============================================================== посмотреть invoices

$('.order').on('click', '.js-open-inv', function () {
  var data = '?data_invoice=' + $(this).closest('tr').find('.order__link').attr('data-invoice');
  var url = $('.order').attr('data-url') + data;

  jsOpenInv(url);
})

// ============================================================== распечатать invoices

$('.order').on('click', '.js-print-inv', function () {
  var data = '?data_invoice=' + $(this).closest('tr').find('.order__link').attr('data-invoice');
  var url = $('.order').attr('data-url') + data;

  jsPrintInv(url);
})

// function getUrl(self) {
//   var data = '?data_invoice=' + self.closest('tr').find('.order__link').attr('data-invoice');
//   var url = $('.order').attr('data-url') + data;
//   return url;
// }

function jsOpenInv(url) {
  var params = "scrollbars=no,status=no,location=no,toolbar=no,menubar=no, 'width: 800px', 'height: 500px'";
  window.open(url, 'invoices', params);
}

function jsPrintInv(url) {
  var myWindow = window.open(url, 'invoices');
  myWindow.print();
}

// ================================================================= up
$(document).scroll(function () {
  if ($(window).scrollTop() >= 1000) {
    $('.up').fadeIn();
  } else {
    $('.up').fadeOut();
  }
});

$('.up').on('click', function () {
  $('body,html').animate({
    scrollTop: '0'
  }, 600);
});