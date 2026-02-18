import{a as m,S as p,i as n}from"./assets/vendor-B5nsgUv9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",y="54692490-9d55b619ee1b8c5417df4aadc";async function g(r){return(await m.get(d,{params:{key:y,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery");document.querySelector(".loader");const h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(r){const o=r.map(({webformatURL:i,largeImageURL:a,tags:e,likes:t,views:s,comments:u,downloads:f})=>`
        <li class="gallery-item">
          <a href="${a}">
            <img
              class="gallery-image" 
              src="${i}" 
              alt="${e}" 
              loading="lazy"
            />
          </a>
          <ul class="info">
            <li class="info-item"><p class="info-item-text">Likes</p> <p class="info-item-value">${t}</p></li>
            <li class="info-item"><p class="info-item-text">Views</p> <p class="info-item-value">${s}</p></li>
            <li class="info-item"><p class="info-item-text">Comments</p> <p class="info-item-value">${u}</p></li>
            <li class="info-item"><p class="info-item-text">Downloads</p> <p class="info-item-value">${f}</p></li>
          </ul>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function S(){c.innerHTML=""}function b(){const r=document.querySelector(".loader");r.hidden=!1}function q(){const r=document.querySelector(".loader");r.hidden=!0}const l=document.querySelector(".form"),w=l.elements["search-text"];l.addEventListener("submit",async r=>{r.preventDefault();const o=w.value.trim();if(!o){n.warning({message:"Please enter a search query!",position:"topRight"});return}S(),b();try{const i=await g(o);if(!i.hits.length){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(i.hits)}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{q(),l.reset()}});
//# sourceMappingURL=index.js.map
