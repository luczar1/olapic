/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2019. MIT licensed.
 */
(function($, window, document, undefined) {
  'use strict';

  $(function() {
    $('.filter-button').click(function() {
      let value = $(this).attr('data-filter');

      if (value === 'all') {
        $('.filter').show('1000');
      } else if (value) {
        $('.filter')
          .not('.' + value)
          .hide('3000');
        $('.filter')
          .filter('.' + value)
          .show('3000');
      }
    });
  });
})(jQuery, window, document);
