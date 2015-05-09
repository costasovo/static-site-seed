$("document").ready () ->

	# Mobile menu switching
	$(".js-mob-menu-on").on(
		"click",
		(e) ->
			e.preventDefault()
			$(".js-mobile-menu").addClass "active"
	)

	$(".js-mob-menu-off").on(
		"click",
		(e) ->
			e.preventDefault()
			$(".js-mobile-menu").removeClass "active"
	)