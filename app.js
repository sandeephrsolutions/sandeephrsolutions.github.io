/* Sandeep Solutions v10 shared progressive enhancements. */
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    var year = String(new Date().getFullYear());
    document.querySelectorAll('[data-current-year]').forEach(function (node) { node.textContent = year; });
    document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
      var rel = (link.getAttribute('rel') || '').split(/\s+/).filter(Boolean);
      ['noopener', 'noreferrer'].forEach(function (value) { if (!rel.includes(value)) rel.push(value); });
      link.setAttribute('rel', rel.join(' '));
    });
    document.documentElement.classList.add('js-ready');
  });
})();
