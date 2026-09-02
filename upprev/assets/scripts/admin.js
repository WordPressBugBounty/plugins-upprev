/*! upPrev - 4.1.3
 * http://iworks.pl/iw_plugin/upprev/
 * Copyright (c) 2026
 * Licensed GPL-3.0 */
jQuery( document ).ready( function( $ ) {
    /**
     * configuration
     */
    $( 'input[name="iworks_upprev_configuration"]' ).on( 'change', function() {
        $(this).closest('form').submit();
    });
    /**
     * color
     */
    $('.wpColorPicker').wpColorPicker();
});
