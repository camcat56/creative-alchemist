const STARTING = [
  {name:"Fire",emoji:"🔥"},
  {name:"Water",emoji:"💧"},
  {name:"Earth",emoji:"🌍"},
  {name:"Air",emoji:"🌬️"},
];

const key = (a,b)=>[a,b].sort().join("||");

const RECIPES = {
    [key("Fire", "Water")]: {
        name: "Steam",
        emoji: "💨"
    },
    [key("Earth", "Water")]: {
        name: "Mud",
        emoji: "💩"
    },
};

const TOTAL_ELEMENTS =
  STARTING.length +
  new Set(Object.values(RECIPES).map(r => r.name)).size;

const state = {
  unlocked: [],
  favorites: new Set(),
  attempts: 0,
  selected: [],
  order: []
};

const els = {
  container: document.getElementById("elementsContainer"),
  result: document.getElementById("resultBox"),
  search: document.getElementById("searchInput"),
  sort: document.getElementById("sortSelect"),
  favs: document.getElementById("favoritesList"),
  discovered: document.getElementById("discoveredCount"),
  total: document.getElementById("totalCount"),
  completion: document.getElementById("completionPercent"),
  attempts: document.getElementById("attemptCount"),
  combine: document.getElementById("combineBtn"),
  clear: document.getElementById("clearBtn"),
  reset: document.getElementById("resetBtn"),
  slotA: document.getElementById("slotA"),
  slotB: document.getElementById("slotB"),
};

function save(){
  localStorage.setItem("ec-save",JSON.stringify({
    unlocked:state.unlocked,
    favorites:[...state.favorites],
    attempts:state.attempts,
    order:state.order
  }));
}
function load(){
  const raw=localStorage.getItem("ec-save");
  if(!raw){
    state.unlocked=[...STARTING];
    state.order=STARTING.map(x=>x.name);
    return;
  }
  try{
    const d=JSON.parse(raw);
    state.unlocked=d.unlocked||[...STARTING];
    state.order=d.order||state.unlocked.map(x=>x.name);
    state.favorites=new Set(d.favorites||[]);
    state.attempts=d.attempts||0;
  }catch{
    state.unlocked=[...STARTING];
    state.order=STARTING.map(x=>x.name);
  }
}

function updateStats() {
  els.discovered.textContent = state.unlocked.length;
  els.total.textContent = TOTAL_ELEMENTS;
  els.completion.textContent =
    Math.round((state.unlocked.length / TOTAL_ELEMENTS) * 100) + "%";
  els.attempts.textContent = state.attempts;
}

function render(){
  const q=(els.search.value||"").toLowerCase();
  let arr=[...state.unlocked];
  if(els.sort.value==="alphabetical"){
    arr.sort((a,b)=>a.name.localeCompare(b.name));
  }else{
    arr.sort((a,b)=>state.order.indexOf(a.name)-state.order.indexOf(b.name));
  }
  arr=arr.filter(e=>e.name.toLowerCase().includes(q));
  els.container.innerHTML="";
  arr.forEach(e=>{
    const card=document.createElement("div");
    card.className="element-card";
    card.draggable=true;
    card.dataset.element=e.name;
    if(state.selected.includes(e.name)) card.classList.add("selected");
    if(state.favorites.has(e.name)) card.classList.add("favorite");
    card.innerHTML=`<span class="emoji">${e.emoji||"✨"}</span>
      <span class="name">${e.name}</span>
      <button class="favorite-btn">${state.favorites.has(e.name)?"★":"☆"}</button>`;
    card.addEventListener("click",ev=>{
      if(ev.target.classList.contains("favorite-btn")){
        ev.stopPropagation();
        if(state.favorites.has(e.name)) state.favorites.delete(e.name);
        else state.favorites.add(e.name);
        save(); renderFavorites(); render();
        return;
      }
      if(state.selected.length>=2) state.selected=[];
      state.selected.push(e.name);
      updateSlots();
      render();
    });
    card.addEventListener("dragstart",ev=>{
      ev.dataTransfer.setData("text/plain",e.name);
    });
    els.container.appendChild(card);
  });
  renderFavorites();
  updateStats();
}
function renderFavorites(){
  els.favs.innerHTML="";
  const favs=[...state.favorites];
  if(!favs.length){
    els.favs.textContent="No favorites yet.";
    return;
  }
  favs.forEach(f=>{
    const d=document.createElement("div");
    d.textContent=f;
    els.favs.appendChild(d);
  });
}
function updateSlots(){
  els.slotA.textContent=state.selected[0]||"Drop or Select Element";
  els.slotB.textContent=state.selected[1]||"Drop or Select Element";
}
function combine(){
  if(state.selected.length!==2){
    els.result.textContent="Select two elements.";
    return;
  }
  state.attempts++;
  const res=RECIPES[key(state.selected[0],state.selected[1])];
  if(!res){
    els.result.textContent="No discovery.";
    updateStats(); save(); return;
  }
  if(!state.unlocked.find(x=>x.name===res.name)){
    state.unlocked.push(res);
    state.order.push(res.name);
    els.result.textContent=`Discovered ${res.emoji||"✨"} ${res.name}!`;
  }else{
    els.result.textContent=`Already discovered ${res.name}.`;
  }
  save(); render();
}
["dragover"].forEach(evt=>{
  els.slotA.addEventListener(evt,e=>e.preventDefault());
  els.slotB.addEventListener(evt,e=>e.preventDefault());
});
els.slotA.addEventListener("drop",e=>{
  e.preventDefault();
  state.selected[0]=e.dataTransfer.getData("text/plain");
  updateSlots(); render();
});
els.slotB.addEventListener("drop",e=>{
  e.preventDefault();
  state.selected[1]=e.dataTransfer.getData("text/plain");
  updateSlots(); render();
});
els.combine.onclick=combine;
els.clear.onclick=()=>{
  state.selected=[];
  updateSlots();
  render();
};
els.search.oninput=render;
els.sort.onchange=render;
els.reset.onclick=()=>{
  if(confirm("Reset all progress?")){
    localStorage.removeItem("ec-save");
    location.reload();
  }
};
load();
updateSlots();
render();
