var App = {
	el : {
		gameLink: $('.js-game'),
		dropdown: $('.profile-menu .avatar'),
		replyBtn: $('.js-reply')
	},

	init: function() {
		this.bindUIActions();
	},

	bindUIActions: function() {
		App.el.gameLink.on('click', App.handleGameState)
		App.el.dropdown.on('click', App.handleDropdownToggle)
		App.el.replyBtn.on('click', App.handleReplyForm)
	},

	handleGameState: function() {
		var link = $(this).find('a').first().attr('href');
		window.location = link;
	},

	handleDropdownToggle: function(e) {
		e.preventDefault();
		$(this).next('.dropdown-menu').toggle();
	},

	handleReplyForm: function(e) {

		var authors = '',
			commentAuthors = $(this).parents('.comment-block'),
			replyBlock = $(this).closest('.replies-header').next('.replies-block').find('.reply-form');

		$.each(commentAuthors, function(i, val) {
			if(i !== 0) {
				authors+= ' ';
			}
			authors+= '@' + $(val).data('comment-author');
		});

		replyBlock.toggle();
		replyBlock.find('textarea').val(authors);
		
		$(this).toggleClass('blue');
	}
}