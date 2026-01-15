$(function(){

	var selectTarget = $('.selectbox select'); 

	selectTarget.change(function(){
		var select_name = $(this).children('option:selected').text();
		$(this).siblings('label').text(select_name); 
	});
	
	/*카테고리*/
	$(".cate-btn").on('click','button', function(){
		$('.cate-btn, .category-box').toggleClass('on');
	});


	/*사이드 메뉴*/
	$('.side_menu ul li .img-box').on('click', function(){
		$('.side_menu ul').addClass('on');
	});
	$('.side_menu ul li .close_btn').on('click', function(){
		$('.side_menu ul').removeClass('on');
	});

	$('.side_menu .good_btn').on('click', function(){
		$(this).toggleClass('on');
	});

	$('.side_menu .top_btn').click(function () {
         $('body,html').animate({
             scrollTop: 0 
         }, 400);  
     });

	 $('.mid-header .mid-inner .src-box input').on('click', function(){
		$('.mid-header .mid-inner .search_area').addClass('on');
	});
		
		 $('.search_area .close_box .close_btn02').on('click', function(){
		$('.mid-header .mid-inner .search_area').removeClass('on');
	});

	 $('.search_area .tab_btn .btn').on('click', function(){
		$(this).addClass('on').siblings().removeClass('on');
	});
/*
	 $(document).on('mouseleave', '.category-box', function(){
		if($(this).hasClass('on')) $('.category-box').removeClass('on');
		return false;
	});*/

   $(document).on('mouseenter', '.category-box .cate-ul > li', function(){
		if(!$(this).hasClass('on')){
			var categoryCode = $(this).data('catecode');
			categoryCode = categoryCode < 10 ? "0"+categoryCode.toString() : categoryCode.toString(); 
			$('.category-box .cate-ul > li').removeClass('on');
			$(this).addClass('on');
			$('.category-box .depth-box').removeClass('on');
			$('.category-box .depth-box[data-catecode="'+ categoryCode +'"]').addClass('on');
			console.log(categoryCode);
		}
	});



});


//날짜
function getFormatDate(date) {
    var year = date.getFullYear(); //yyyy
    var month = (1 + date.getMonth()); //M
    month = month >= 10 ? month : '0' + month; // month 두자리로 저장
    var day = date.getDate();   //d
    day = day >= 10 ? day : '0' + day;  //day 두자리로 저장
    return year + '-' + month + '-' + day;
}
// 데이트피커 공통
$(function () {
    var date = new Date();
    date = getFormatDate(date);

    if ($.datepicker) {
        jQuery(function ($) {
            $.datepicker.regional['ko'] = {
                closeText: '닫기',
                prevText: '이전달',
                nextText: '다음달',
                currentText: '오늘',
                monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
                monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
                dayNames: ['일', '월', '화', '수', '목', '금', '토'],
                dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
                dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
                weekHeader: 'Wk',
                dateFormat: 'yy-mm-dd',
                firstDay: 0,
                isRTL: false,
                showMonthAfterYear: false,
                showOtherMonths: false,
                changeMonth: false,
                changeYear: false,
                yearRange: "c-5:c+5",
                yearSuffix: '',
				beforeShow: function( input, inst){
					$(inst.dpDiv).addClass('ui-chg');
				},
				onClose: function(dateText, inst) { 
					$(inst.dpDiv).removeClass('ui-chg');
				}
            };
            $.datepicker.setDefaults($.datepicker.regional['ko']);
        });
        $.datepicker.setDefaults(jQuery.datepicker.regional['ko']);
    }
    $("input.datepicker").datepicker();
    //$("input.datepicker").val(date);
});

