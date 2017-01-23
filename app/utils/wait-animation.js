import Ember from 'ember';

const ANIMATION_END_EVENT = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
const { RSVP, $ } = Ember;

export function waitAnimation(element, cssClass) {
  // cleanup
  let deferred = element.data('animation-promise');

  if (deferred) {
    deferred.resolve();
  }

  deferred = RSVP.defer();

  window.setTimeout(function() {
    element.data('animation-promise', deferred);
    element
      .one(ANIMATION_END_EVENT, animationEnded)
      .addClass(cssClass);
  });

  return deferred.promise;

  function animationEnded() {
    let deferred = $(this).data('animation-promise');

    if (deferred) {
      deferred.resolve();
    }

    $(this).removeClass(cssClass);
  }
}

