/**
 * @fileOverview
 * @author Hyunhwa Jeong
 * @version 1.0
 */

/**
 * @description
 * Vanilla JavaScript viewport check.
 * https://github.com/dev4design/vanilla-js-viewport-tracker
 */
(function() {

    function checkElement() {
        [].forEach.call(document.querySelectorAll('.viewElement'), function(item) {
            var bounding = item.getBoundingClientRect();

            if (bounding.top >= 0
                && bounding.left >= 0
                && bounding.right <= document.documentElement.clientWidth
                && bounding.bottom <= document.documentElement.clientHeight) {

                item.style.backgroundColor = '#ff6600';

            } else {
                item.style.backgroundColor = 'blue';
            }
        });
    }

    document.addEventListener('scroll', checkElement);
})();
