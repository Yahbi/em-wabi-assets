
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
function _openM(){document.getElementById('mform').style.display='';document.getElementById('msuc').classList.remove('show');document.getElementById('mbg').classList.add('open');document.body.style.overflow='hidden';setTimeout(function(){document.getElementById('m-name').focus();},90);}
function openModal(p){_set('mk','Commission enquiry');_set('mph',p?('Commission: '+p):'Begin a commission');_set('msub','We reply within 24 hours. Nothing is automated from here.');_set('msubmit','Send enquiry');_set('mprom','Made to order · shipped worldwide · we reply within 24 hours');_set('msuch','Enquiry received.');_set('msucp',"We'll reply within 24 hours to the email you provided. Nothing is automated from here.");_openM();}
function openOrder(p){_set('mk','Order · reserve this piece');_set('mph','Order: '+p);_set('msub','We hold your piece and process the transaction, then confirm every detail with you by email within 72 hours. Either of us may cancel for a full refund until that window closes.');_set('msubmit','Place order');_set('mprom','Insured in transit · shipped worldwide · duty-paid within the US');_set('msuch','Order received.');_set('msucp','We are processing your order and will confirm every detail with you by email within 72 hours. Nothing is final until you approve it.');_openM();}
function openConsult(){_set('mk','Private consultation');_set('mph','Speak with an advisor');_set('msub','Tell us the room and the feeling you are after. A dedicated advisor replies within 24 hours — a real person, not a sequence.');_set('msubmit','Request consultation');_set('mprom','No obligation · a dedicated advisor · we reply within 24 hours');_set('msuch','Request received.');_set('msucp','An advisor will reply within 24 hours to the email you provided. Nothing is automated from here.');_openM();}
function openLookbook(){_set('mk','The Atelier Lookbook');_set('mph','The lookbook & stone guide');_set('msub','We email the full collection at scale, the fourteen stones up close, every dimension and weight, and how a commission unfolds. One email, then we leave you to it.');_set('msubmit','Send me the lookbook');_set('mprom','One email · no sequence · no pressure');_set('msuch','On its way.');_set('msucp',"We'll email the lookbook and stone guide to the address you provided, shortly.");_openM();}
function openTrade(){_set('mk','Trade & hospitality');_set('mph','Open a trade account');_set('msub','Tell us your practice or project. We reply within 24 hours with trade terms, technical drawings and samples — one dedicated trade contact, from specification to installed.');_set('msubmit','Open trade account');_set('mprom','Designers · architects · developers · hospitality');_set('msuch','Received.');_set('msucp','Our trade contact will reply within 24 hours to the email you provided.');_openM();}
function closeModal(){document.getElementById('mbg').classList.remove('open');document.body.style.overflow='';}
function closeBg(e){if(e.target===document.getElementById('mbg'))closeModal();}
function submitModal(){const n=document.getElementById('m-name').value.trim(),em=document.getElementById('m-email').value.trim();if(!n){document.getElementById('m-name').focus();return;}if(!em||!em.includes('@')){document.getElementById('m-email').focus();return;}document.getElementById('mform').style.display='none';document.getElementById('msuc').classList.add('show');}
function handleForm(e){e.preventDefault();openModal(document.getElementById('cp').value.trim()||null);}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
