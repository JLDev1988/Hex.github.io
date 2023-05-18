(function($) {
	// WooCommerce update fragments fix.
	$(document).ready(function() {
		$('body').on('added_to_cart removed_from_cart', function(e, fragments) {
			if (fragments) {
				$.each(fragments, function(key, value) {
					$(key.replace('_wd', '')).replaceWith(value);
				});
			}
		});
	});

	if ( typeof wc_cart_fragments_params !== 'undefined' ) {
		$('body').on('wc_fragments_refreshed wc_fragments_loaded', function() {
			var wc_fragments = JSON.parse(sessionStorage.getItem(wc_cart_fragments_params.fragment_name));

			if (wc_fragments) {
				$.each(wc_fragments, function(key, value) {
					$(key.replace('_wd', '')).replaceWith(value);
				});
			}
		});
	}
})(jQuery);