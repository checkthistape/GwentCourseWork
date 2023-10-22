$.fx.speeds._default = 1000;

$(document).ready(function() { 
    
//Галерея
$('#small a').click(function(eventObject) {
    if ($('#big img').attr('src') != $(this).attr('href')) {
    
    $('#big img').hide().attr('src',$(this).attr('href'));
    $('#big img').load(function() {
        $(this).fadeIn(2000);
    });
    }
    eventObject.preventDefault();
});

$('#switchGal').toggle(function() {
$('#gallery').slideDown(2000);
},
function() {
$('#gallery').slideUp(2000);
});

$('#small a img').click(function() {
    $('#small a img').fadeTo(1000,1);
    $(this).fadeTo(1000, 0.6);
});

//Проверка email адреса пользователя
var regV = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
var myEmail = $('#email');

myEmail.focus(function(){
    if ($(this).val() == $(this).attr('defaultValue')) {
    $(this).val('');
    }

});

myEmail.blur(function(){
    var userEmail = $(this).val();
    
    if (userEmail == '') {
    $(this).val($(this).attr('defaultValue')).css('border','1px solid #cccccc');
    }
    
    else if (userEmail.search(regV) == -1) {
    $(this).css('border','1px solid #cc0000');   
    }
    else {
    $(this).css('border','1px solid #00cc00');    
    }
    

});

//Блокировка кнопки отправки



//Календарик

//Русификация календаря

//Код слайдера
$("#slider-range").slider({
			range: true,
			min: 10,
			max: 1000,
			values: [50, 400],
			slide: function(event, ui) {
				$("#amount").val(ui.values[0] + ' - ' + ui.values[1] + ' км');
			}
		});
		$("#amount").val($("#slider-range").slider("values", 0) + ' - ' + $("#slider-range").slider("values", 1) + ' км');

//Код диалогового окна


//Работа кнопок

$("input:submit").button();

//Работа виджет Tabs




$('#opros :radio').change(function() {
    
    var chRadio = $('#opros :radio:checked').size();
    $("#progressbar").progressbar({
			value: chRadio * 20
		});
    var questCount = $('#opros div[id*=radio]').size();    
     $('#aswerCount').text('Дано ответов ' + chRadio + ' из ' + questCount);   
        
});

$('#opros').load(function() {
    
    var chRadio = $('#opros :radio:checked').size();
    $("#progressbar").progressbar({
			value: chRadio * 20
		});
    var questCount = $('#opros div[id*=radio]').size();    
     $('#aswerCount').text('Дано ответов ' + chRadio + ' из ' + questCount);   
        
});

//Работа виджета автозаполнения
var availableTags = ["Владимирская", "Волгоградская", "Вологодская", "Воронежская"];
		$("#tags").autocomplete({
			source: availableTags
		});



//Сортировка

$("#sortable").sortable({
			placeholder: 'ui-state-highlight'
		});
		$("#sortable").disableSelection();

//Выборка цвета

$("#selectable").selectable();

//Изменяемые по размеру элементы 

$("#mytextarea").resizable({
			maxHeight: 250,
			maxWidth: 380,
			minHeight: 150,
			minWidth: 380
		});


//Изучение эффектов

$('#formHide').click(function() {
    $('#my_form').toggle('explode');
});

$('#formColor').toggle(function() {
  $('#bigform > fieldset').animate({
    'backgroundColor' : '#e9f0e7'
  }, 5000);
},
function() {
  $('#bigform > fieldset').animate({
    'backgroundColor' : '#e7e7f0'
  }, 5000);
});

$('#zoom').toggle(function() {
$('#tabs p').switchClass('forP', 'forP2', 2000);
},
function() {
$('#tabs p').switchClass('forP2', 'forP', 2000);
});








}); //Конец ready