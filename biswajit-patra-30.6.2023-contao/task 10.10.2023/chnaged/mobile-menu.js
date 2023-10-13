jQuery(document).ready(function(){


//Check Mobile Devices
var checkMobile = function(){

    //Check Device
    var isTouch = ('ontouchstart' in document.documentElement);

    //Check Device //All Touch Devices
    if ( isTouch ) {

        jQuery('body').addClass('touch');

        

    }
    else {

        jQuery('body').addClass('no-touch');

    };

};

//Execute Check
checkMobile();


// initiate hmbg
jQuery('.mod_navigation .navbar-nav.level_1 > li.forward a.forward').addClass('active');


jQuery('body.touch #header .container-fluid').append('<button class="ma5menu__toggle" type="button"><span class="ma5menu__icon-toggle"></span><span class="ma5menu__sr-only">Menu</span></button>');

jQuery('body.touch #header .container-fluid').append('<ul class="site-mobile-menu"></ul>');

var FETCHDESKTOPMENU = jQuery('#header .mod_navigation > a + .navbar-nav').html();
jQuery('.site-mobile-menu').html(FETCHDESKTOPMENU);
jQuery('.site-mobile-menu *').removeClass();




ma5menu({
    menu: '.site-mobile-menu',
    activeClass: 'active',
    footer: '#ma5menu-tools',
    position: 'left',
    closeOnBodyClick: true
});

jQuery('.mod_navigation .nav-link.active').parents('ul.level_2').parent('li.nav-item').addClass('parent_nav_active_lvl2');
jQuery('.mod_navigation .nav-link.active').parents('ul.level_3').parent('li.nav-item').addClass('parent_nav_active_lvl3');
jQuery('.mod_navigation .nav-link.active').parents('ul.level_4').parent('li.nav-item').addClass('parent_nav_active_lvl4');

var ACTIVEMENUHREF = jQuery('.mod_navigation a.active').attr('href');
var LABEL1PARENTACTIVENMENUHREF = jQuery('.parent_nav_active_lvl2 > a').attr('href');
var LABEL1PARENTACTIVENMENUHREFLBL3 = jQuery('.parent_nav_active_lvl3 > a').attr('href');
var LABEL1PARENTACTIVENMENUHREFLBL4 = jQuery('.parent_nav_active_lvl4 > a').attr('href');
console.log(ACTIVEMENUHREF);
console.log(LABEL1PARENTACTIVENMENUHREF);
console.log(LABEL1PARENTACTIVENMENUHREFLBL3);
console.log(LABEL1PARENTACTIVENMENUHREFLBL4);


jQuery('.ma5menu__container a').each(function(){
    var MOBILEATTR = jQuery(this).attr('href');
    if(MOBILEATTR == ACTIVEMENUHREF){
        jQuery(this).addClass('current');
    }
});
jQuery('.ma5menu__container a.current').each(function(){
    jQuery(this).prev('span.ma5menu__btn--enter').addClass('current');
});


jQuery('.ma5menu__container a').each(function(){
    var LABEL1MOBILEPARENTMENUHREF= jQuery(this).attr('href');

    if(LABEL1MOBILEPARENTMENUHREF == LABEL1PARENTACTIVENMENUHREF){
        jQuery(this).addClass('mobile_parent_menu_active');
    }

    if(LABEL1MOBILEPARENTMENUHREF == LABEL1PARENTACTIVENMENUHREFLBL3){
        jQuery(this).addClass('mobile_parent_menu_active');
    }

    if(LABEL1MOBILEPARENTMENUHREF == LABEL1PARENTACTIVENMENUHREFLBL4){
        jQuery(this).addClass('mobile_parent_menu_active');
    }
});
jQuery('.ma5menu__container a.mobile_parent_menu_active').each(function(){
    jQuery(this).prev('span.ma5menu__btn--enter').addClass('mobile_parent_menu_active');
});





});


