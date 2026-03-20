// ── TOC map: section label -> file path (null = readme section)
// Children: sub-items from readme TOC
var TOC = [
  { id:'s1',  label:'1. Introduction',              anchor:'#1-introduction-',
    children:[
      { id:'s1a', label:'Definition',               anchor:'#definition-of-computer-network-' },
      { id:'s1b', label:'Why Networks Are Important',anchor:'#why-networks-are-important-' },
      { id:'s1c', label:'Basic Networking Terms',   anchor:'#basic-networking-terms-' }
    ]
  },
  { id:'s2',  label:'2. What Are RFCs?',             anchor:'#2-what-are-rfcs-',
    children:[
      { id:'s2a', label:'Definition of RFC',         anchor:'#definition-of-rfc' },
      { id:'s2b', label:'Purpose of RFCs',           anchor:'#purpose-of-rfcs-in-networking' },
      { id:'s2c', label:'Examples of RFCs',          anchor:'#examples-of-important-rfcs' },
      { id:'s2d', label:'How to Read an RFC',        anchor:'#how-to-read-an-rfc' },
      { id:'doc-rfc', label:'docs/rfc.md',           file:'../docs/rfc.md' }
    ]
  },
  { id:'s3',  label:'3. Types of Networks',          anchor:'#3-types-of-computer-networks-' },
  { id:'s4',  label:'4. Network Devices',            anchor:'#4-network-devices-',
    children:[
      { id:'doc-arp',      label:'docs/arp.md',      file:'../docs/arp.md' },
      { id:'doc-firewall', label:'docs/firewall.md', file:'../docs/firewall.md' }
    ]
  },
  { id:'s5',  label:'5. Communication Types',        anchor:'#5-network-communication-types-',
    children:[
      { id:'doc-netcom', label:'docs/netcom.md',     file:'../docs/netcom.md' }
    ]
  },
  { id:'s6',  label:'6. Core Networking Concepts',   anchor:'#6-core-networking-concepts-',
    children:[
      { id:'doc-nic',    label:'docs/nic.md',        file:'../docs/nic.md' },
      { id:'doc-mac',    label:'docs/macaddress.md', file:'../docs/macaddress.md' },
      { id:'doc-ip',     label:'docs/ipaddress.md',  file:'../docs/ipaddress.md' },
      { id:'doc-dhcp',   label:'docs/dhcp.md',       file:'../docs/dhcp.md' },
      { id:'doc-dhcpv6', label:'docs/dhcpv6.md',     file:'../docs/dhcpv6.md' }
    ]
  },
  { id:'s7',  label:'7. Hardware & Transmission Media', anchor:'#7-network-hardware--transmission-media-' },
  { id:'s8',  label:'8. Ports and Sockets',          anchor:'#8-ports-and-sockets-',
    children:[
      { id:'doc-ports', label:'docs/ports.md',       file:'../docs/ports.md' }
    ]
  },
  { id:'s9',  label:'9. Networking Models & Protocols', anchor:'#9-networking-models--protocols-',
    children:[
      { id:'doc-osi',   label:'docs/osi_model.md',   file:'../docs/osi_model.md' },
      { id:'doc-tcpip', label:'docs/tcp_ip.md',      file:'../docs/tcp_ip.md' },
      { id:'doc-tcp',   label:'docs/tcp.md',         file:'../docs/tcp.md' },
      { id:'doc-udp',   label:'docs/udp.md',         file:'../docs/udp.md' },
      { id:'doc-dns',   label:'docs/dns.md',         file:'../docs/dns.md' },
      { id:'doc-cdns',  label:'docs/cdns.md',        file:'../docs/cdns.md' }
    ]
  },
  { id:'s10', label:'10. IP Addressing & Subnetting', anchor:'#10-ip-addressing-and-subnetting-',
    children:[
      { id:'doc-ipv4',      label:'docs/ipv4.md',             file:'../docs/ipv4.md' },
      { id:'doc-ipv6',      label:'docs/ipv6.md',             file:'../docs/ipv6.md' },
      { id:'doc-subnet',    label:'docs/subnet_mask.md',      file:'../docs/subnet_mask.md' },
      { id:'doc-subnetting',label:'docs/subnetting.md',       file:'../docs/subnetting.md' },
      { id:'doc-vlsm',      label:'docs/vlsm.md',             file:'../docs/vlsm.md' },
      { id:'doc-cidr',      label:'docs/cidr.md',             file:'../docs/cidr.md' },
      { id:'doc-ipclass',   label:'docs/ipaddress_classification.md', file:'../docs/ipaddress_classification.md' },
      { id:'doc-practice',  label:'docs/practice_subnetting.md', file:'../docs/practice_subnetting.md' }
    ]
  },
  { id:'s11', label:'11. Routing & Switching',       anchor:'#11-routing--switching-concepts-',
    children:[
      { id:'doc-routers',  label:'docs/routers.md',        file:'../docs/routers.md' },
      { id:'doc-rtable',   label:'docs/routing_table.md',  file:'../docs/routing_table.md' },
      { id:'doc-switches', label:'docs/switches.md',       file:'../docs/switches.md' },
      { id:'doc-vlan',     label:'docs/vlan.md',           file:'../docs/vlan.md' }
    ]
  },
  { id:'s12', label:'12. Network Services',          anchor:'#12-network-services-',
    children:[
      { id:'doc-nat',      label:'docs/nat.md',             file:'../docs/nat.md' },
      { id:'doc-gateway',  label:'docs/gateway.md',         file:'../docs/gateway.md' },
      { id:'doc-qos',      label:'docs/qos.md',             file:'../docs/qos.md' },
      { id:'doc-lb',       label:'docs/load_balancing.md',  file:'../docs/load_balancing.md' },
      { id:'doc-vpn',      label:'docs/vpn.md',             file:'../docs/vpn.md' },
      { id:'doc-cloud',    label:'docs/cloud_networking.md',file:'../docs/cloud_networking.md' },
      { id:'doc-wireless', label:'docs/wireless_networking.md',file:'../docs/wireless_networking.md' }
    ]
  },
  { id:'s13', label:'13. Network Security',          anchor:'#13-network-security-',
    children:[
      { id:'doc-netsec', label:'docs/network_security.md', file:'../docs/network_security.md' }
    ]
  },
  { id:'s14', label:'14. Network Data Units',        anchor:'#14-network-data-units-',
    children:[
      { id:'doc-frame',   label:'docs/frame.md',   file:'../docs/frame.md' },
      { id:'doc-packet',  label:'docs/packet.md',  file:'../docs/packet.md' },
      { id:'doc-segment', label:'docs/segment.md', file:'../docs/segment.md' },
      { id:'doc-ports2',  label:'docs/ports.md',   file:'../docs/ports.md' }
    ]
  },
  { id:'s15', label:'15. Troubleshooting & Monitoring', anchor:'#15-troubleshooting--monitoring-',
    children:[
      { id:'doc-trouble', label:'docs/network_troubleshooting.md', file:'../docs/network_troubleshooting.md' }
    ]
  }
];

// ── FLAT lookup ──
var FLAT = {};
TOC.forEach(function(s) {
  FLAT[s.id] = s;
  if (s.children) s.children.forEach(function(c) { FLAT[c.id] = c; });
});

// ── SEARCH INDEX (global so lookup_bar.js can access) ──
var searchIndex = [];
(function() {
  searchIndex.push({ id:'readme', label:'README — Home', sub:'start here', tag:'h' });
  TOC.forEach(function(s) {
    searchIndex.push({ id:s.id, label:s.label, sub:'readme section', tag:'s', anchor:s.anchor });
    if (s.children) s.children.forEach(function(c) {
      searchIndex.push({ id:c.id, label:c.label, sub:s.label, tag:c.file ? 'c' : 's', anchor:c.anchor, file:c.file });
    });
  });
})();

// ── CACHE ──
var readmeRaw = null;
var currentFile = null;  // null = readme, else path string

function fetchReadme(cb) {
  if (readmeRaw) { cb(null, readmeRaw); return; }
  fetch('../readme.md')
    .then(function(r) { if (!r.ok) throw new Error(r.status); return r.text(); })
    .then(function(t) { readmeRaw = t; cb(null, t); })
    .catch(cb);
}

// ── THEME ──
var _theme = localStorage.getItem('cn-theme') || 'dark';
if (_theme === 'light') document.body.classList.add('light');
(function() {
  var btn = document.getElementById('btn-theme');
  function update() { btn.textContent = document.body.classList.contains('light') ? '[ \u25D1 DARK ]' : '[ \u2600 LIGHT ]'; }
  update();
  btn.addEventListener('click', function() {
    document.body.classList.toggle('light');
    _theme = document.body.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('cn-theme', _theme);
    update();
  });
})();

// ── TITLE ANIMATION ──
var _tc = ['#ffff00','#00ffff','#ff88ff','#00ff00','#ff8800'], _ti = 0;
function startTitleAnim() {
  var el = document.getElementById('anim-title');
  if (!el) return;
  setInterval(function() { el.style.color = _tc[_ti]; _ti = (_ti+1)%_tc.length; }, 700);
}

// ── BUILD SIDEBAR ──
function buildSidebar() {
  var sb = document.getElementById('sidebar');
  var h = '<div id="sb-head">[ TABLE OF CONTENTS ]</div>';
  h += '<button class="sb-btn sb-section" data-go="readme">■ &nbsp;README — Home</button>';
  TOC.forEach(function(s) {
    var hasKids = s.children && s.children.length;
    h += '<div>';
    h += '<button class="sb-btn sb-section" data-go="' + s.id + '">';
    if (hasKids) h += '<span class="arr">&#9658;</span>&nbsp;';
    h += e(s.label) + '</button>';
    if (hasKids) {
      h += '<div class="sb-kids" id="k-' + s.id + '">';
      s.children.forEach(function(c) {
        h += '<button class="sb-btn sb-child" data-go="' + c.id + '">' + e(c.label) + '</button>';
      });
      h += '</div>';
    }
    h += '</div>';
  });
  sb.innerHTML = h;
  sb.querySelectorAll('[data-go]').forEach(function(btn) {
    btn.addEventListener('click', function() { go(this.getAttribute('data-go')); });
  });
}

function setActive(id) {
  document.querySelectorAll('.sb-btn').forEach(function(b) { b.classList.remove('act'); });
  var b = document.querySelector('[data-go="' + id + '"]');
  if (b) b.classList.add('act');
  // expand parent if child
  TOC.forEach(function(s) {
    if (!s.children) return;
    var isChild = s.children.some(function(c) { return c.id === id; });
    if (!isChild) return;
    var kids = document.getElementById('k-' + s.id);
    var sec = document.querySelector('[data-go="' + s.id + '"]');
    if (kids) kids.classList.add('open');
    if (sec) sec.classList.add('open');
    // also toggle parent arr
    var arr = sec && sec.querySelector('.arr');
    if (arr) arr.innerHTML = '&#9660;';
  });
  // toggle own children on section click
  var entry = FLAT[id] || (id === 'readme' ? { id:'readme' } : null);
  if (entry && !entry.file && !entry.anchor) return; // home
  if (entry && !entry.file) {
    // it's a section with possible children
    var sec = TOC.find(function(s) { return s.id === id; });
    if (sec && sec.children) {
      var kids = document.getElementById('k-' + id);
      var btn = document.querySelector('[data-go="' + id + '"]');
      if (kids) kids.classList.toggle('open');
      if (btn) btn.classList.toggle('open');
      var arr = btn && btn.querySelector('.arr');
      if (arr) arr.innerHTML = kids && kids.classList.contains('open') ? '&#9660;' : '&#9658;';
    }
  }
}

// ── NAVIGATE ──
function go(id) {
  setActive(id);
  window.scrollTo(0, 0);
  if (id === 'readme') { loadReadme(); return; }
  var entry = FLAT[id];
  if (!entry) return;
  if (entry.file) { loadFile(entry.file, entry.label); return; }
  if (entry.anchor) { scrollToAnchor(entry.anchor); return; }
}

function scrollToAnchor(anchor) {
  // if not on readme, load it first then scroll
  if (currentFile !== null) {
    loadReadme(function() { doScroll(anchor); });
  } else {
    doScroll(anchor);
  }
}

function doScroll(anchor) {
  // try to find matching heading
  var slug = anchor.replace(/^#/, '');
  var all = document.querySelectorAll('#doc h1,#doc h2,#doc h3,#doc h4');
  for (var i = 0; i < all.length; i++) {
    var id = all[i].id || slugify(all[i].textContent);
    if (id === slug || id.replace(/-+$/,'') === slug.replace(/-+$/,'')) {
      all[i].scrollIntoView({ behavior:'smooth', block:'start' });
      return;
    }
  }
  // fallback: try by text match
  var text = slug.replace(/-/g,' ').toLowerCase();
  for (var i = 0; i < all.length; i++) {
    if (all[i].textContent.toLowerCase().replace(/[^a-z0-9 ]/g,'').trim().startsWith(text.slice(0,12))) {
      all[i].scrollIntoView({ behavior:'smooth', block:'start' });
      return;
    }
  }
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9 ]/g,'').trim().replace(/ +/g,'-');
}

// ── LOAD README ──
function loadReadme(cb) {
  loading();
  fetchReadme(function(err, txt) {
    if (err) { error('Cannot fetch ../readme.md<br>' + err.message); return; }
    currentFile = null;
    var html = marked.parse(txt);
    html = fixLinks(html, null);
    doc().innerHTML = html;
    // add IDs to headings for anchor nav
    addHeadingIds();
    startTitleAnim();
    if (cb) cb();
  });
}

// ── LOAD DOC FILE ──
function loadFile(path, label) {
  loading();
  fetch(path)
    .then(function(r) { if (!r.ok) throw new Error(r.status + ' ' + r.statusText); return r.text(); })
    .then(function(md) {
      currentFile = path;
      var html = marked.parse(md);
      html = fixLinks(html, path);
      doc().innerHTML = html;
      addHeadingIds();
    })
    .catch(function(err) { error('Cannot load ' + path + '<br>' + err.message); });
}

// ── FIX LINKS ──
// Intercept clicks on rendered md links
function fixLinks(html, basePath) {
  // We don't rewrite HTML, instead we attach a click handler after render
  return html;
}

function attachLinkHandlers() {
  doc().querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', function(e) {
      var href = this.getAttribute('href');
      if (!href || href.startsWith('http') || href.startsWith('//')) return; // external
      e.preventDefault();
      if (href.startsWith('#')) {
        doScroll(href.replace(/^#/, ''));
        return;
      }
      // local .md link — resolve relative to repo root
      var resolved = resolvePath(href);
      // find in TOC by file path
      var found = null;
      Object.keys(FLAT).forEach(function(k) {
        if (FLAT[k].file && FLAT[k].file === resolved) found = k;
      });
      if (found) { go(found); } else { loadFile(resolved, href); }
    });
  });
}

function resolvePath(href) {
  // href could be "docs/arp.md" (relative to readme) or "../docs/arp.md"
  if (href.startsWith('../')) return href;
  if (href.startsWith('docs/')) return '../' + href;
  return '../' + href;
}

// ── HEADING IDs ──
function addHeadingIds() {
  doc().querySelectorAll('h1,h2,h3,h4').forEach(function(h) {
    if (!h.id) h.id = slugify(h.textContent);
  });
  attachLinkHandlers();
}

// ── DOM HELPERS ──
function doc() { return document.getElementById('doc'); }
function loading() { doc().innerHTML = '<p class="spin">&gt;&gt; loading...</p>'; }
function error(msg) { doc().innerHTML = '<div class="err">' + msg + '</div>'; }
function e(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

// ── EXPOSE ──
window.go = go;

// ── INIT ──
document.addEventListener('DOMContentLoaded', function() {
  buildSidebar();
  loadReadme();
});