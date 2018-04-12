$('#nav-principal').on('click',function(event) {	
	esconderTodos(function() {
		$('#main-principal').css('display','block');
	});		
});
$('#nav-curriculo').on('click',function(event) {	
	esconderTodos(function() {
		$('#main-curriculo').css('display','block');
	});		
});
$('#nav-sistemas').on('click',function(event) {	
	esconderTodos(function() {
		$('#main-sistemas').css('display','block');
	});		
});
$('#nav-publicacoes').on('click',function(event) {	
	esconderTodos(function() {
		$('#main-publicacoes').css('display','block');
	});		
});
$('#nav-linux').on('click',function(event) {	
	esconderTodos(function() {
		$('#main-linux').css('display','block');
	});
});
$('#nav-jogos').on('click',function(event) {	
	esconderTodos(function() {
		$('#main-jogos').css('display','block');
	});
});

function esconderTodos(callback) {
	$( "main" ).each(function() {
		$(this).css('display','none');	
	});	
	callback();
	 $('.navbar-toggler-icon').click();
}