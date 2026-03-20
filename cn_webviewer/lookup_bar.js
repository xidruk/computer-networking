(function() {
  var overlay, input, list;
  var cur = [], sel = -1, open = false;

  function esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function hi(t, q) {
    if (!q) return esc(t);
    try { return esc(t).replace(new RegExp('(' + q.trim().replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + ')','gi'),'<mark>$1</mark>'); }
    catch(e) { return esc(t); }
  }
  function score(it, q) {
    var l = it.label.toLowerCase(), s = (it.sub||'').toLowerCase();
    if (!q) return 1;
    if (l===q) return 1000;
    if (l.startsWith(q)) return 600;
    if (l.includes(q)) return 400;
    if (s.includes(q)) return 200;
    var ci=0; for(var i=0;i<l.length&&ci<q.length;i++) if(l[i]===q[ci]) ci++;
    return ci===q.length?50:0;
  }
  function search(raw) {
    var idx = (typeof searchIndex !== 'undefined') ? searchIndex : [];
    var q = raw.toLowerCase().trim();
    if (!q) return idx.filter(function(x){ return x.tag==='h'||x.tag==='s'; }).slice(0,10);
    var sc = [];
    idx.forEach(function(it){ var s=score(it,q); if(s>0) sc.push({it:it,s:s}); });
    sc.sort(function(a,b){ return b.s-a.s; });
    return sc.slice(0,12).map(function(x){ return x.it; });
  }
  function render(results) {
    cur = results; sel = results.length ? 0 : -1;
    if (!results.length) { list.innerHTML='<div class="sr-empty">no results</div>'; return; }
    var q = input.value;
    list.innerHTML = results.map(function(it,i){
      return '<div class="sr'+(i===0?' on':'')+'" data-i="'+i+'">' +
        '<span class="sr-tag '+it.tag+'">'+it.tag+'</span>' +
        '<div class="sr-body"><div class="sr-label">'+hi(it.label,q)+'</div>' +
        (it.sub?'<div class="sr-sub">'+esc(it.sub)+'</div>':'') + '</div>' +
        '<span class="sr-arr">&#8594;</span></div>';
    }).join('');
    list.querySelectorAll('.sr').forEach(function(el){
      el.addEventListener('click', function(){ nav(cur[+this.dataset.i]); });
      el.addEventListener('mouseenter', function(){ setSel(+this.dataset.i); });
    });
  }
  function setSel(i) {
    sel=i;
    list.querySelectorAll('.sr').forEach(function(el,j){ el.classList.toggle('on',j===i); if(j===i) el.scrollIntoView({block:'nearest'}); });
  }
  function nav(it) {
    close();
    if (typeof window.go === 'function') window.go(it.id);
  }
  function build() {
    overlay = document.createElement('div');
    overlay.id = 'search-overlay';
    overlay.innerHTML =
      '<div id="search-bg"></div>' +
      '<div id="search-box">' +
        '<div id="search-head">' +
          '<span id="search-icon">&#9906;</span>' +
          '<input id="search-input" type="text" autocomplete="off" spellcheck="false" placeholder="search sections, topics, docs...">' +
          '<span id="search-esc">ESC</span>' +
        '</div>' +
        '<div id="search-results"></div>' +
        '<div id="search-foot">' +
          '<span class="sh"><kbd>&uarr;</kbd><kbd>&darr;</kbd> nav</span>' +
          '<span class="sh"><kbd>&crarr;</kbd> open</span>' +
          '<span class="sh"><kbd>ESC</kbd> close</span>' +
          '<span class="sh" style="margin-left:auto"><kbd>Ctrl</kbd><kbd>K</kbd></span>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);
    input = document.getElementById('search-input');
    list  = document.getElementById('search-results');
    document.getElementById('search-bg').addEventListener('click', close);
    document.getElementById('search-esc').addEventListener('click', close);
    input.addEventListener('input', function(){ render(search(input.value)); });
    input.addEventListener('keydown', function(e){
      if(e.key==='Escape')    { e.preventDefault(); close(); }
      if(e.key==='ArrowDown') { e.preventDefault(); setSel(Math.min(sel+1,cur.length-1)); }
      if(e.key==='ArrowUp')   { e.preventDefault(); setSel(Math.max(sel-1,0)); }
      if(e.key==='Enter')     { e.preventDefault(); if(cur[sel]) nav(cur[sel]); }
    });
  }
  function openBar() {
    if (!overlay) build();
    overlay.classList.add('open'); open=true;
    document.body.style.overflow='hidden';
    input.value='';
    render(search(''));
    setTimeout(function(){ input.focus(); }, 30);
  }
  function close() {
    if (overlay) overlay.classList.remove('open');
    open=false; document.body.style.overflow='';
  }
  document.addEventListener('keydown', function(e){
    if((e.ctrlKey||e.metaKey)&&e.key==='k'){ e.preventDefault(); open?close():openBar(); }
    if(e.key==='Escape'&&open) close();
  });
  document.addEventListener('DOMContentLoaded', function(){
    var b=document.getElementById('btn-search');
    if(b) b.addEventListener('click',openBar);
  });
  window.openSearch=openBar; window.closeSearch=close;
})();