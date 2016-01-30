$(document).on('ready', function(){
	templateEngine.load('/templates/head.html', {}, $('head')).then(function() {
		templateEngine.load('/templates/sidebar.html', {}, $('aside'), true).then(function() {
			templateEngine.load('/templates/header.html', {}, $('header'), true).then(function () {
				var data = {
					'description': 'A lightweight template engine',
					'plugin': '',
					'title': 'templateEngine', 'colour': 'blue', 'github': 'javascript:;', 'bitbucket': 'javascript:;',
					'icon': 'mi-template-engine',
					'sub': ''
				};
				templateEngine.load('/templates/parallaxTitle.html', data, $('#heading')).then(function () {
					templateEngine.load('/templates/toc.html', {}, $('#toc')).then(function() {
						$('.parallax').parallax();
						$('#templateBtn1').on('click', function(){
							templateEngine.load('<a class="btn">I\'m a button</a>', {}, $('#templateResults1')).then(function(template) {
								console.log(template);
							});
						});
						$('#templateBtn2').on('click', function() {
							templateEngine.load('<a class="btn">I\'m a button</a>', {}, $('#templateResults2'), true).then(function(template) {
								console.log(template);
							});
						});
						$('#templateBtn3').on('click', function(){
							var html = "<label>First Name:</label><span>{name.first}</span><label>Last Name:</label><span>{name.last}:</span><label>Age:</label><span>{age}</span>";
							templateEngine.load(html, {"name": {"first": "Bob", "last": "Jenkins"}, "age": 25}, $('#templateResults3')).then(function(template) {
								console.log(template);
							});
						});
					});
				});
			});
		});
	});
});