
document.addEventListener("DOMContentLoaded",()=>{
 const menu=document.querySelector(".menu"),nav=document.querySelector(".navlinks");
 if(menu&&nav) menu.addEventListener("click",()=>nav.classList.toggle("open"));
});
function esc(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));}
function wa(text){window.open("https://wa.me/917978259944?text="+encodeURIComponent(text),"_blank","noopener");}
function submitWhatsApp(form,title){
 const data=new FormData(form); let msg=`Hello Sandeep Solutions, I am enquiring about ${title}.\n\n`;
 for(const [k,v] of data.entries()) if(String(v).trim()) msg+=`${k}: ${v}\n`;
 wa(msg); return false;
}
