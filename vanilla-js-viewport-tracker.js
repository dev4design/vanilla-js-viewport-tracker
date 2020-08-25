/**
 * @fileOverview
 * @author Hyunhwa Jeong
 * @version 1.0
 */

/**
 * @description
 * Vanilla JavaScript viewport tracker.
 * https://github.com/dev4design/vanilla-js-viewport-tracker
 */
(function() {

    'use strict';

    // 감지 할 HTML 요소
    var tracker = document.querySelectorAll('.tracker');

    var triggerTop = document.querySelector('.trigger-top');
    var triggerBottom = document.querySelector('.trigger-bottom');

    var triggerTopPos = getViewportOffset(triggerTop);
    var triggerBottomPos = getViewportOffset(triggerBottom);

    function checkTrackerPos() {
        [].forEach.call(tracker, function (item, index) {
            var trackerPosition = getViewportOffset(item);

            if(trackerPosition >= triggerTopPos && trackerPosition <= triggerBottomPos) {
                // tracker가 trigger에 의해 viewport 영역 안에서 스크립트를 실행
                console.log(index + '번 요소' + ' 실행됨');
            }

            console.log('tracker position: ' + trackerPosition);
        });
    }

    /**
     * 요소의 절대 좌표
     *
     * @param {object} el - getAbsOffset()의 매개변수(뷰포트에서 실행시킬 HTML 요소)
     * @returns {number} - 브라우저가 스크롤 된 길이 + 뷰포트 상단으로부터의 거리(불안전한 값) = 문서상 절대위치
     */
    function getAbsOffset(el) {
        return window.pageYOffset + el.getBoundingClientRect().top;
    }

    /**
     * 절대좌표를 기반한 요소의 뷰포트 좌표
     *
     * @param {object} el - 뷰포트에서 실행시킬 HTML 요소
     * @returns {number} - 문서상 절대위치 - 브라우저가 스크롤 된 길이 = 뷰포트 상단으로부터의 거리(안전한 값)
     */
    function getViewportOffset(el) {
        return getAbsOffset(el) - window.pageYOffset;
    }

    // 스크롤 이벤트리스너 등록
    document.addEventListener('scroll', checkTrackerPos);

    console.log('trigger-top position: ' + triggerTopPos);
    console.log('trigger-bottom position: ' + triggerBottomPos);

})();
