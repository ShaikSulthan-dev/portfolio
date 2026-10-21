(function(){
var t=document.getElementById('t'),hero=document.getElementById('hero');
var cmd='curl api.sulthan.dev/me';
var out=[
'{',
'  <span class="k">"name"</span>: <span class="s">"Shaik Sulthan Basha"</span>,',
'  <span class="k">"role"</span>: <span class="s">"AI Engineer Intern"</span>,',
'  <span class="k">"location"</span>: <span class="s">"Hyderabad, IN"</span>,',
'  <span class="k">"focus"</span>: [<span class="s">"GenAI"</span>, <span class="s">"RAG"</span>, <span class="s">"LangGraph"</span>],',
'  <span class="k">"projects"</span>: <span class="a">8</span>,',
'  <span class="k">"certified"</span>: [<span class="s">"SQL"</span>],',
'  <span class="k">"available"</span>: <span class="a">true</span>',
'}'];
var head='<span class="p">$</span> <span class="a">curl</span> ';
var tail='\n<span class="p">HTTP/2 200 · 38ms</span>\n';
var cur='<span class="cur" aria-hidden="true"></span>';
var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function full(){t.innerHTML=head+'api.sulthan.dev/me'+tail+out.join('\n')+'\n<span class="p">$</span> '+cur}
if(reduce){full()}else{
var i=0;(function typeCmd(){
t.innerHTML=head+'api.sulthan.dev/me'.slice(0,i)+cur;
if(i++<'api.sulthan.dev/me'.length){setTimeout(typeCmd,55)}else{setTimeout(function(){var n=0;(function line(){
t.innerHTML=head+'api.sulthan.dev/me'+tail+out.slice(0,n).join('\n')+(n<out.length?'\n'+cur:'\n<span class="p">$</span> '+cur);
if(n++<out.length)setTimeout(line,170)})()},450)}
})()}
if(!reduce&&window.matchMedia('(pointer:fine)').matches){hero.addEventListener('pointermove',function(e){var r=hero.getBoundingClientRect();hero.style.setProperty('--mx',(e.clientX-r.left)+'px');hero.style.setProperty('--my',(e.clientY-r.top)+'px')})}
var btns=document.querySelectorAll('.filters button'),items=document.querySelectorAll('#list details');
btns.forEach(function(b){b.addEventListener('click',function(){
btns.forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});
var f=b.dataset.f;items.forEach(function(d){d.hidden=!(f==='all'||d.dataset.c.split(' ').indexOf(f)>-1)})})});
})();
