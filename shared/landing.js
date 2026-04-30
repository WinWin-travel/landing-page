var ICONS = {
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  fork:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
  cal:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  tag:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
  card:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
  paw:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/></svg>',
  person:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  up:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>',
  down:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"/><path d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/></svg>'
};

function buildCard(c) {
  var feats = c.feats.map(function(f) {
    return '<div class="card-feat ' + (f.dog ? 'feat-dog' : '') + '">' + ICONS[f.icon] + '<span>' + f.text + '</span></div>';
  }).join('');
  var imgStyle = c.img ? ' style="background-image:url(\'' + c.img + '\');background-size:cover;background-position:center;"' : '';
  return '<div class="offer-card">' +
    '<div class="card-photo">' +
      '<div class="card-photo-bg"' + imgStyle + '></div>' +
      '<button class="photo-arrow arrow-l">&#8249;</button>' +
      '<button class="photo-arrow arrow-r">&#8250;</button>' +
      '<div class="card-badge">' + c.badge + '</div>' +
    '</div>' +
    '<div class="card-body">' +
      '<div class="card-title">' + c.title + '</div>' +
      '<div class="card-dates">' + c.dates + '</div>' +
      '<div class="card-guests">' + ICONS.person + ' ' + c.guests + ' guests' + (c.dogs != null ? ' &nbsp;' + ICONS.paw + ' ' + c.dogs + ' dog' : '') + '</div>' +
      '<div class="card-features">' + feats + '</div>' +
    '</div>' +
    '<div class="card-divider"></div>' +
    '<div class="card-foot">' +
      '<div class="thumbs"><button class="thumb">' + ICONS.up + '</button><button class="thumb">' + ICONS.down + '</button></div>' +
      '<div class="card-price">' + c.price + '</div>' +
    '</div>' +
  '</div>';
}

var timers = [];
function later(fn, ms) { var t = setTimeout(fn, ms); timers.push(t); return t; }
function clearAll() { timers.forEach(clearTimeout); timers = []; }
function scrollBottom() { var el = document.getElementById('msgs'); el.scrollTop = el.scrollHeight; }

function run(reset) {
  clearAll();
  var msgs = document.getElementById('msgs');
  if (reset) {
    while (msgs.children.length > 1) msgs.removeChild(msgs.lastChild);
  }

  later(function() {
    var row = document.createElement('div');
    row.className = 'row-user';
    row.innerHTML = '<div class="bbl bbl-user cursor" id="ub"></div><span class="ts">Just now</span>';
    msgs.appendChild(row);
    scrollBottom();
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        var ub = document.getElementById('ub');
        if (ub) ub.classList.add('show');
      });
    });

    var i = 0;
    var iv = setInterval(function() {
      var ub = document.getElementById('ub');
      if (!ub) { clearInterval(iv); return; }
      if (i <= QUERY.length) {
        ub.textContent = QUERY.slice(0, i);
        i++;
        scrollBottom();
      } else {
        clearInterval(iv);
        ub.classList.remove('cursor');
        step2();
      }
    }, 30);
    timers.push(iv);
  }, 600);

  function step2() {
    later(function() {
      var g = document.createElement('div');
      g.className = 'gathering';
      g.id = 'g';
      g.innerHTML = '<div class="g-badge">4</div><span style="display:flex;align-items:center;gap:.3rem">Gathering information<span class="dot"></span><span class="dot"></span><span class="dot"></span></span>';
      msgs.appendChild(g);
      scrollBottom();
      requestAnimationFrame(function() {
        requestAnimationFrame(function() { g.classList.add('show'); });
      });

      later(function() {
        g.remove();
        var col = document.createElement('div');
        col.className = 'cards-col';
        msgs.appendChild(col);
        scrollBottom();

        CARDS.forEach(function(card, i) {
          later(function() {
            col.insertAdjacentHTML('beforeend', buildCard(card));
            scrollBottom();
            var el = col.lastElementChild;
            requestAnimationFrame(function() {
              requestAnimationFrame(function() { if (el) el.classList.add('show'); });
            });
            if (i === CARDS.length - 1) {
              later(function() { run(true); }, 20000);
            }
          }, i * 550);
        });
      }, 1500);
    }, 400);
  }
}

window.addEventListener('load', function() { run(false); });
