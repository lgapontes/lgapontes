/* bookmarkable */
var pagina = '#';
var hash = window.location.hash;
if (hash && hash.length > 0) {
	pagina = hash;
}

if (pagina === '#principal') {
	esconderTodos(false,function() {		
		$('#main-principal').css('display','block');
	});
} else if (pagina === '#curriculo') {
	esconderTodos(false,function() {
		$('#main-curriculo').css('display','block');
	});
} else if (pagina === '#sistemas') {
	esconderTodos(false,function() {
		$('#main-sistemas').css('display','block');
	});
} else if (pagina === '#publicacoes') {
	esconderTodos(false,function() {
		$('#main-publicacoes').css('display','block');
	});
} else if (pagina === '#linux') {
	esconderTodos(false,function() {
		$('#main-linux').css('display','block');
	});
} else if (pagina === '#jogos') {
	esconderTodos(false,function() {
		$('#main-jogos').css('display','block');
	});
} 

/* Nav */
$('#nav-principal').on('click',function(event) {	
	esconderTodos(true,function() {
		$('#main-principal').css('display','block');
	});		
});
$('#nav-curriculo').on('click',function(event) {	
	esconderTodos(true,function() {
		$('#main-curriculo').css('display','block');
	});		
});
$('#nav-sistemas').on('click',function(event) {	
	esconderTodos(true,function() {
		$('#main-sistemas').css('display','block');
	});		
});
$('#nav-publicacoes').on('click',function(event) {	
	esconderTodos(true,function() {
		$('#main-publicacoes').css('display','block');
	});		
});
$('#nav-linux').on('click',function(event) {	
	esconderTodos(true,function() {
		$('#main-linux').css('display','block');
	});
});
$('#nav-jogos').on('click',function(event) {	
	esconderTodos(true,function() {
		$('#main-jogos').css('display','block');
	});
});

function esconderTodos(click,callback) {
	$( "main" ).each(function() {
		$(this).css('display','none');	
	});	
	callback();
	if (click) {
		$('.navbar-toggler-icon').click();
	}	
}