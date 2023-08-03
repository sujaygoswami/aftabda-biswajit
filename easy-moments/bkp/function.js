
// Configuration SLIDER START //
document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        perPage: 1,
        //gap    : '2rem',
        breakpoints: {
            800: {
                perPage: 1,
                //gap    : '.7rem',
            },
            480: {
                perPage: 1,
                //gap    : '.7rem',
            },
        },
    } );

var thumbnails = document.getElementsByClassName( 'img-fluid' );
var current;

for ( var i = 0; i < thumbnails.length; i++ ) {
  initThumbnail( thumbnails[ i ], i );
}

function initThumbnail( thumbnail, index ) {
  thumbnail.addEventListener( 'click', function () {
    //alert('bp');
    //alert(this.src);
    //alert($(this).find('.thumbnail').attr('src'));

      var days  = 1;
     var searchId = this.id;
     var src = this.src;
       document.cookie = 'var1='+searchId;
     $.ajax({
                type: 'post',
                url: 'detail_spielberichte.php',
                data: {'days' : days, 'night': searchId}, //$("#frmsbmt").serialize(), //form serialize will send all the data to the server side in json formate, so there is no need to send data seperately.
                success: function( data ) {
                     //$('#one').val(searchId);
                     //$('.thumbnail').attr('data-remote', src);
                     $('.thumbnail').attr('src', src);
                     $('.thumbnail').attr('id', searchId);
                      $('.img-gallery').attr('href', src);
                    //$('.one').val(data);
                    console.log(data);
                    //alert(data);
                    // It will write the response in developer tools console tab or you can alert it.
                }
            });
    //splide.go( index );
  } );
}

    splide.mount();
} );
// Configuration SLIDER END //


// Maildecryption START //
    function UnCryptMailto( s )
    {
        var n = 0;
        var r = "";
        for( var i = 0; i < s.length; i++)
        {
            n = s.charCodeAt( i );
            if( n >= 8364 )
            {
                n = 128;
            }
            r += String.fromCharCode( n - 1 );
        }
        return r;
    }

    function linkTo_UnCryptMailto( s )
    {
        location.href=UnCryptMailto( s );
    }
// Maildecryption END //