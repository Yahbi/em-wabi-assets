var HANDLES={"Aeon":"aeon-petrified-wood-bathing-vessel","Alba":"alba-white-onyx-bathing-vessel","Atlas":"atlas-black-granite-bathing-vessel","Aura":"aura-cream-limestone-bathing-vessel","Candela":"candela-honey-onyx-bathing-vessel","Dune":"dune-golden-sandstone-bathing-vessel","Erebus":"erebus-black-river-stone-bathing-vessel","Imperial":"imperial-jade-green-marble-bathing-vessel","Nero":"nero-black-marquina-marble-bathing-vessel","Rosa":"rosa-rosa-marble-bathing-vessel","Verde":"verde-green-marble-bathing-vessel","Vulcan":"vulcan-black-basalt-bathing-vessel","Carrara":"carrara-bianco-carrara-venato-bathing-vessel","Arabesca":"arabesca-arabescato-white-marble-bathing-vessel","Bianco":"bianco-white-marble-bathing-vessel","Selene":"selene-volakas-white-marble-bathing-vessel","Tivoli":"tivoli-beige-travertine-bathing-vessel","Siena":"siena-beige-white-travertine-bathing-vessel","Argento":"argento-silver-grey-travertine-bathing-vessel","Sonoma":"sonoma-california-beige-marble-bathing-vessel","Midas":"midas-gold-vein-marble-bathing-vessel","Empire":"empire-french-gold-vein-marble-bathing-vessel","Topaz":"topaz-gold-marble-bathing-vessel","Amber":"amber-yellow-wood-grain-marble-bathing-vessel","Dorado":"dorado-golden-thread-beige-bathing-vessel","Sahara":"sahara-golden-hemp-granite-bathing-vessel","Aureus":"aureus-golden-granite-bathing-vessel","Ivory":"ivory-white-wood-grain-marble-bathing-vessel","Silva":"silva-grey-wood-grain-marble-bathing-vessel","Indigo":"indigo-palissandro-blue-marble-bathing-vessel","Corvus":"corvus-black-jade-bathing-vessel","Nocturne":"nocturne-black-forest-marble-bathing-vessel","Perla":"perla-han-white-jade-bathing-vessel","Mojave":"mojave-desert-flow-gold-marble-bathing-vessel","Umbra":"umbra-black-jade-matte-bathing-vessel","Cinder":"cinder-castle-grey-stone-bathing-vessel","Rubra":"rubra-multicolor-red-marble-bathing-vessel"};

const nav=document.getElementById('nav');
const onScroll=()=>{const s=window.scrollY>window.innerHeight*.72;nav.classList.toggle('scrolled',s);nav.classList.toggle('at-top',!s);};
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
if('IntersectionObserver' in window){
  const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target);}});},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.rv').forEach(el=>io.observe(el));
  const fo=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in');});},{threshold:.2});
  document.querySelectorAll('.feat').forEach(el=>fo.observe(el));
}else{document.querySelectorAll('.rv').forEach(el=>el.classList.add('on'));document.querySelectorAll('.feat').forEach(el=>el.classList.add('in'));}
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduce){
  const paras=Array.prototype.slice.call(document.querySelectorAll('[data-para]'));
  let ticking=false;
  function applyPara(){
    const vh=window.innerHeight;
    for(let i=0;i<paras.length;i++){
      const el=paras[i], box=el.closest('.feat,.band');
      if(!box) continue;
      const r=box.getBoundingClientRect();
      if(r.bottom<-120||r.top>vh+120) continue;
      const prog=(r.top+r.height/2-vh/2)/vh;
      const amp=parseFloat(el.getAttribute('data-para'))||60;
      el.style.transform='translate3d(0,'+(-prog*amp).toFixed(1)+'px,0)';
    }
    ticking=false;
  }
  window.addEventListener('scroll',function(){if(!ticking){requestAnimationFrame(applyPara);ticking=true;}},{passive:true});
  window.addEventListener('resize',applyPara,{passive:true});
  applyPara();
}
function _set(id,t){var e=document.getElementById(id);if(e)e.textContent=t;}
function _setv(id,v){var e=document.getElementById(id);if(e)e.value=v;}
function _openM(){document.getElementById('mform').style.display='';document.getElementById('msuc').classList.remove('show');document.getElementById('mbg').classList.add('open');document.body.style.overflow='hidden';setTimeout(function(){document.getElementById('m-name').focus();},90);}
function openModal(p){_set('mk','Commission enquiry');_set('mph',p?('Commission: '+p):'Begin a commission');_set('msub','We reply within 24 hours. Nothing is automated from here.');_set('msubmit','Send enquiry');_set('mprom','Made to order · shipped worldwide · we reply within 24 hours');_set('msuch','Enquiry received.');_set('msucp',"We'll reply within 24 hours to the email you provided. Nothing is automated from here.");_openM();}
function openOrder(p){_set('mk','Request a quote');_set('mph','Request a quote: '+p);_set('msub','Tell us the room and your timeline. We reply within 24 hours with a detailed quote — confirmed landed cost, lead time and delivery plan. No card is charged here; a deposit later begins the 72-hour confirmation window.');_setv('m-kind','Quote request');_setv('m-piece',p);_set('msubmit','Request quote');_set('mprom','No card charged · a written quote within 24 hours');_openM();}
function openConsult(){_set('mk','Private consultation');_set('mph','Speak with an advisor');_set('msub','Tell us the room and the feeling you are after. A dedicated advisor replies within 24 hours — a real person, not a sequence.');_set('msubmit','Request consultation');_set('mprom','No obligation · a dedicated advisor · we reply within 24 hours');_set('msuch','Request received.');_set('msucp','An advisor will reply within 24 hours to the email you provided. Nothing is automated from here.');_setv('m-kind','Consultation');_setv('m-piece','');_openM();}
function openLookbook(){_set('mk','The Atelier Lookbook');_set('mph','The lookbook & stone guide');_set('msub','We email the full collection at scale, the fourteen stones up close, every dimension and weight, and how a commission unfolds. One email, then we leave you to it.');_set('msubmit','Send me the lookbook');_set('mprom','One email · no sequence · no pressure');_set('msuch','On its way.');_set('msucp',"We'll email the lookbook and stone guide to the address you provided, shortly.");_setv('m-kind','Lookbook request');_setv('m-piece','');_openM();}
function openTrade(){_set('mk','Trade & hospitality');_set('mph','Open a trade account');_set('msub','Tell us your practice or project. We reply within 24 hours with trade terms, technical drawings and samples — one dedicated trade contact, from specification to installed.');_set('msubmit','Open trade account');_set('mprom','Designers · architects · developers · hospitality');_set('msuch','Received.');_set('msucp','Our trade contact will reply within 24 hours to the email you provided.');_setv('m-kind','Trade enquiry');_setv('m-piece','');_openM();}
function closeModal(){document.getElementById('mbg').classList.remove('open');document.body.style.overflow='';}
function closeBg(e){if(e.target===document.getElementById('mbg'))closeModal();}
function _fillBody(f){var b=f.querySelector('textarea');if(b&&!b.value.trim()){var k=(f.querySelector('#m-kind')||{}).value||'Enquiry',p=(f.querySelector('#m-piece')||{}).value||'';b.value=k+(p?(' — '+p):'');}}
var _cf=document.getElementById('em-contact');if(_cf)_cf.addEventListener('submit',function(){_fillBody(_cf);});
if(document.getElementById('em-ok')||document.getElementById('em-ok2')){_set('msuch','Received.');_set('msucp',"Thank you — we'll reply within 24 hours to the email you provided.");var mf=document.getElementById('mform');if(mf)mf.style.display='none';document.getElementById('msuc').classList.add('show');document.getElementById('mbg').classList.add('open');}

document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
