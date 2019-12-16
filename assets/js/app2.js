
function myfunc() {
    let value = document.getElementById("myselectbox").value;
    let target = document.getElementById("target");
    let text = '';
    if (value === 'name') {
        document.write('<img src=""')
        text = '舟見 朋夜  29歳  ';
    } else if (value === 'from') {
        document.write('<img src="/assets/img/IMG_6348.JPG">')
        text = '富山県';
    } else if (value === 'hobby') {
        text = 'ロックフェス・ライブ , マンガ・アニメ';
    } else if (value === 'career') {
        text = '栄養士歴７年, 新米狩りガール';
    } else if (value == 'github')
        text = 'Moyotaro'
    target.innerHTML = text;
}




$(function() { 

    //Switch dark/light
    
    $(".switch").on('click', function () {
        if ($("body").hasClass("light")) {
            $("body").removeClass("light");
            $(".switch").removeClass("switched");
        }
        else {
            $("body").addClass("light");
            $(".switch").addClass("switched");
        }
    });
        
    $(document).ready(function(){
    
        //Scroll back to top
        
        let progressPath = document.querySelector('.progress-wrap path');
        let pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';      
        let updateProgress = function () {
            let scroll = $(window).scrollTop();
            let height = $(document).height() - $(window).height();
            let progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);   
        let offset = 50;
        let duration = 550;
        jQuery(window).on('scroll', function() {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.progress-wrap').addClass('active-progress');
            } else {
                jQuery('.progress-wrap').removeClass('active-progress');
            }
        });             
        jQuery('.progress-wrap').on('click', function(event) {
            event.preventDefault();
            jQuery('html, body').animate({scrollTop: 0}, duration);
            return false;
        })
        
        
    });
    
})(jQuery); 
