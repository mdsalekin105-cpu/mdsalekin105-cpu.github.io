const $=s=>document.querySelector(s);
const grid=$("#articleGrid"), search=$("#searchInput"), filter=$("#categoryFilter");
let activeArticle=null;
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function render(){
 const q=search.value.trim().toLowerCase(), cat=filter.value;
 const items=(window.SITE_ARTICLES||[]).filter(a=>(!cat||a.category===cat)&&(!q||[a.title,a.category,a.excerpt,a.body].join(" ").toLowerCase().includes(q)));
 grid.innerHTML=items.map(a=>`<article class="article-card"><span class="card-category">${esc(a.category)} · ${esc(a.language.toUpperCase())}</span><h3>${esc(a.title)}</h3><p>${esc(a.excerpt)}</p><div class="card-footer"><span>${esc(a.date)}</span><button data-id="${esc(a.id)}">পড়ুন ↗</button></div></article>`).join("");
 $("#emptyState").hidden=items.length>0;
 grid.querySelectorAll("button[data-id]").forEach(b=>b.addEventListener("click",()=>openArticle(b.dataset.id)));
}
function setupCategories(){
 const cats=[...new Set((window.SITE_ARTICLES||[]).map(a=>a.category))];
 filter.innerHTML='<option value="">সব বিভাগ</option>'+cats.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join("");
}
function openArticle(id){
 activeArticle=(window.SITE_ARTICLES||[]).find(a=>a.id===id); if(!activeArticle)return;
 $("#dialogCategory").textContent=activeArticle.category;
 $("#dialogTitle").textContent=activeArticle.title;
 $("#dialogMeta").textContent=`${activeArticle.date} · আবু রাফ‌আন সিরাজ`;
 $("#dialogBody").textContent=activeArticle.body;
 $("#dialogBody").dir=activeArticle.language==="ar"?"rtl":"auto";
 $("#articleDialog").showModal();
}
function copyAttribution(text,url){
 const attribution=`\n\nলেখক: আবু রাফ‌আন সিরাজ\nমূল লেখা: ${url}`;
 const payload=text+attribution;
 if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(payload).then(()=>alert("লেখাটি উৎসের লিংকসহ কপি হয়েছে।")).catch(()=>fallbackCopy(payload));}
 else fallbackCopy(payload);
}
function fallbackCopy(t){const ta=document.createElement("textarea");ta.value=t;document.body.appendChild(ta);ta.select();try{document.execCommand("copy");alert("লেখাটি উৎসের লিংকসহ কপি হয়েছে।")}catch(e){alert("কপি করা যায়নি।")}ta.remove();}
document.addEventListener("copy",e=>{
 const sel=window.getSelection(); if(!sel||!sel.toString().trim())return;
 const url=location.href.split("#")[0]+location.hash;
 e.clipboardData.setData("text/plain",sel.toString()+`\n\nলেখক: আবু রাফ‌আন সিরাজ\nমূল লেখা: ${url}`);
 e.preventDefault();
});
$("#copyArticle").addEventListener("click",()=>{if(activeArticle)copyAttribution(activeArticle.body,location.href.split("#")[0]+"#article-"+activeArticle.id)});
$("#dialogClose").addEventListener("click",()=>$("#articleDialog").close());
search.addEventListener("input",render);filter.addEventListener("change",render);
$("#menuToggle").addEventListener("click",()=>$("#mainNav").classList.toggle("open"));
$("#year").textContent=new Date().getFullYear();
$("#languageSelect").addEventListener("change",e=>{
 const lang=e.target.value;
 document.documentElement.lang=lang;
 document.documentElement.dir=lang==="ar"?"rtl":"ltr";
 document.querySelectorAll("[data-"+lang+"]").forEach(el=>el.textContent=el.getAttribute("data-"+lang));
 search.placeholder=search.getAttribute("data-placeholder-"+lang)||search.placeholder;
});
setupCategories();render();
