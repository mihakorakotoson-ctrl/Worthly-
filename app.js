
const menu=document.querySelector('.menu'),nav=document.querySelector('.navlinks');
if(menu) menu.onclick=()=>nav.classList.toggle('open');
const form=document.querySelector('#searchForm'),input=document.querySelector('#searchInput'),cards=[...document.querySelectorAll('[data-search]')];
if(form) form.addEventListener('submit',e=>{e.preventDefault();const q=input.value.trim().toLowerCase();let n=0;cards.forEach(c=>{const ok=!q||c.dataset.search.toLowerCase().includes(q);c.style.display=ok?'block':'none';if(ok)n++});const m=document.querySelector('#searchMessage');if(m)m.textContent=n?`${n} résultat(s)`:'Aucun résultat';document.querySelector('#results')?.scrollIntoView({behavior:'smooth'})});
document.querySelectorAll('.filter').forEach(b=>b.onclick=()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');const cat=b.dataset.cat;document.querySelectorAll('[data-cat]').forEach(c=>c.style.display=cat==='all'||c.dataset.cat===cat?'block':'none')});
