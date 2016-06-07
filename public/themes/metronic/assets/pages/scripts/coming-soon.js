var ComingSoon = function () {

    return {
        //main function to initiate the module
        init: function () {
            var austDay = new Date();
            austDay = new Date(2016, 5, 10);
            $('#defaultCountdown').countdown({until: austDay});
            $('#year').text(austDay.getFullYear());

            $.backstretch([
		            "themes/metronic/assets/pages/media/bg/1.jpg",
		            "themes/metronic/assets/pages/media/bg/2.jpg",
		            "themes/metronic/assets/pages/media/bg/3.jpg",
		    		"themes/metronic/assets/pages/media/bg/4.jpg"
		        ], {
		        fade: 1000,
		        duration: 10000
		   });
        }

    };

}();

jQuery(document).ready(function() {    
   ComingSoon.init(); 
});