// JavaScript Document
jQuery(document).ready(function($){	
$('a.bubble[title]').qtip({
	position: {
		my: 'bottom center',
		at:  'top center'
	},
	style: {
	classes: 'ui-tooltip-youtube ui-tooltip-shadow'
	}
})
$('img.bubble[title]').qtip({
	position: {
		my: 'bottom center',
		at: 'top center'
	},
	style: {
	classes: 'ui-tooltip-youtube ui-tooltip-shadow'
	}
})
$('span.livetv_help').qtip({
	position: {
		my: 'bottom center',
		at: 'top center'
	},
	style: {
	classes: 'ui-tooltip-youtube ui-tooltip-shadow',
	}
})
});