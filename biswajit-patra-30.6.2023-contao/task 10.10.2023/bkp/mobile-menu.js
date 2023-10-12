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




});