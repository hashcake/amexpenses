(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{8894:(e,t,s)=>{Promise.resolve().then(s.bind(s,9809))},9809:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>j});var a=s(5155),r=s(2115),l=s(9159),o=s.n(l),n=s(6472),i=s(5781);let c=["#2563eb","#dc2626","#16a34a","#ca8a04","#9333ea","#ea580c","#0d9488","#be185d"];i.t1.register(i.Bs,i.E8,i.PP,i.kc,i.m_,i.s$);let d={labels:[],datasets:[{data:[],backgroundColor:[]}]},x={labels:[],datasets:[{data:[],backgroundColor:c[1],borderColor:c[0],borderWidth:1}]},m={plugins:{legend:{display:!1}}},u={responsive:!0,maintainAspectRatio:!0,aspectRatio:1.5,layout:{padding:{left:0,right:0,top:20,bottom:20}},cutout:"60%",plugins:{legend:{display:!0,position:"top",labels:{filter:(e,t)=>e.index<12}},tooltip:{callbacks:{label:function(e){let t=e.label||"",s=e.raw;return"".concat(t,": ").concat(p(s))}}}}};function h(e,t){return e.length>t?"".concat(e.substring(0,t),"..."):e}function g(e){return e.replace(/\s+/g," ").trim()}function p(e){return new Intl.NumberFormat("it-IT",{style:"currency",currency:"EUR",trailingZeroDisplay:"stripIfInteger"}).format(e)}function b(e){return new Intl.DateTimeFormat("it-IT",{day:"numeric",month:"long",year:"numeric"}).format(e)}function j(){let[e,t]=(0,r.useState)(null),[s,l]=(0,r.useState)("Descrizione"),[i,j]=(0,r.useState)("Data"),[f,v]=(0,r.useState)("Importo"),[y,N]=(0,r.useState)(""),[w,k]=(0,r.useState)([]),[C,z]=(0,r.useState)([]),[L,S]=(0,r.useState)("0.00"),[M,D]=(0,r.useState)(""),[I,E]=(0,r.useState)([]),[F,A]=(0,r.useState)(d),[T,B]=(0,r.useState)(x),[P,W]=(0,r.useState)("description"),[O,R]=(0,r.useState)([]),[V,_]=(0,r.useState)({oldest:null,newest:null}),[Y,H]=(0,r.useState)(""),[U,J]=(0,r.useState)(""),[q,K]=(0,r.useState)(!0),[Z,$]=(0,r.useState)(!1),[G,Q]=(0,r.useState)(null),[X,ee]=(0,r.useState)(5),[et,es]=(0,r.useState)(!1),[ea,er]=(0,r.useState)(!1),[el,eo]=(0,r.useState)(!1),[en,ei]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let e=window.localStorage.getItem("categoryPatterns");e&&R(JSON.parse(e))},[]),(0,r.useEffect)(()=>{O.length>0&&window.localStorage.setItem("categoryPatterns",JSON.stringify(O))},[O]),(0,r.useEffect)(()=>{if(w.length>0){let e=w.map(e=>new Date(e.Data)).sort((e,t)=>e.getTime()-t.getTime());_({oldest:b(e[0]),newest:b(e[e.length-1])})}else _({oldest:null,newest:null})},[w]);let ec=e=>{em(w,e.target.value)},ed=()=>{let e=new Blob([JSON.stringify(O,null,2)],{type:"application/json"}),t=URL.createObjectURL(e),s=document.createElement("a");s.href=t,s.download="expense-categories.json",document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(t)},ex=async e=>{let t=e.target.files[0];if(t)try{let e=await t.text(),s=JSON.parse(e);Array.isArray(s)&&(R(s),em(C,P))}catch(e){D("Errore durante l'importazione del file")}},em=(e,t)=>{if(e.length)try{let a;D(null);let r=e;y&&(r=e.filter(e=>e[s].toLowerCase().includes(y.toLowerCase())),0===r.length&&(D("Nessuna spesa trovata."),r=e)),W(t),"description"===t?a=eu(r,s,f):"monthYear"===t?a=eg(r,i,f):"category"===t&&(a=eh(r,s,f)),"description"===t||"category"===t?A(ep(a,t)):"monthYear"===t&&B(ep(a,t)),E(a),z(r),K(!1)}catch(e){D("Errore nella lettura del file: ".concat(e.message))}},eu=(e,t,s)=>Object.entries(e.reduce((e,s)=>{let a=g(s[t]);return e[a]||(e[a]=[]),e[a].push(s),e},{})).map(e=>{let[t,a]=e;return{description:t,total:a.reduce((e,t)=>e+parseFloat(t[s].replace(",",".")),0).toFixed(2)}}).sort((e,t)=>t.total-e.total),eh=(e,t,s)=>Object.entries(e.reduce((e,s)=>{let a=g(s[t]),r="Senza categoria";for(let e of O)if(a.toLowerCase().includes(e.pattern.toLowerCase())){r=e.category;break}return e[r]||(e[r]=[]),e[r].push(s),e},{})).map(e=>{let[t,a]=e;return{description:t,total:a.reduce((e,t)=>e+parseFloat(t[s].replace(",",".")),0).toFixed(2)}}).sort((e,t)=>parseFloat(t.total)-parseFloat(e.total)),eg=(e,t,s)=>Object.entries(e.reduce((e,s)=>{let a=new Date(s[t]),r="".concat(a.toLocaleString("it-IT",{month:"long"}),"-").concat(a.getFullYear());return e[r]||(e[r]=[]),e[r].push(s),e},{})).map(e=>{let[a,r]=e;return{description:a,total:r.reduce((e,t)=>e+parseFloat(t[s].replace(",",".")),0).toFixed(2),sortKey:r[0][t]}}).sort((e,t)=>new Date(e.sortKey).getTime()-new Date(t.sortKey).getTime()),ep=(e,t)=>{let s=e.map(e=>h(e.description,20));return"monthYear"===t?{labels:s,datasets:[{data:e.map(e=>parseFloat(e.total)),backgroundColor:e.map((e,t)=>c[t%c.length]),borderColor:e.map((e,t)=>c[t%c.length]),borderWidth:1}]}:{labels:s,datasets:[{data:e.map(e=>parseFloat(e.total)),backgroundColor:c}]}};(0,r.useEffect)(()=>{let e=setTimeout(()=>{em(w,P)},1e3);return()=>{clearTimeout(e)}},[y]);let eb=(0,r.useMemo)(()=>{let e=O.reduce((e,t)=>{let{pattern:s,category:a}=t;return e[a]||(e[a]={patterns:[],count:0}),e[a].patterns.push(s),e},{});return C.forEach(t=>{Object.entries(e).forEach(s=>{let[a,r]=s;r.patterns.some(e=>t.Descrizione.toLowerCase().includes(e.toLowerCase()))&&e[a].count++})}),e},[O,C]),ej=(0,r.useMemo)(()=>[...w].sort((e,t)=>parseFloat(t.Importo.replace(",","."))-parseFloat(e.Importo.replace(",","."))).slice(0,X),[w,X]);return(0,a.jsxs)("main",{className:"min-h-screen bg-gray-50",children:[(0,a.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,a.jsx)("div",{className:"w-full bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg",children:(0,a.jsx)("div",{className:"max-w-7xl mx-auto p-6",children:(0,a.jsxs)("div",{className:"flex items-center justify-center space-x-4",children:[(0,a.jsx)("img",{src:"/amexpenses/cc-logo.png",alt:"AmExp Logo",width:60,height:60,className:"h-auto"}),(0,a.jsxs)("div",{className:"text-white",children:[(0,a.jsx)("h1",{className:"text-2xl md:text-4xl font-bold",children:"AmExp"}),(0,a.jsx)("p",{className:"text-blue-100 text-sm md:text-base",children:"Analizzatore spese AmEx"})]})]})})}),(0,a.jsx)("div",{className:"flex-grow",children:(0,a.jsxs)("div",{className:"max-w-7xl mx-auto px-4 py-8",children:[(0,a.jsx)("div",{className:"w-full md:w-3/4 mb-4 mx-auto px-4",children:(0,a.jsxs)("div",{className:"mb-4 border rounded-lg shadow-sm",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center p-4 bg-gray-50 cursor-pointer",onClick:()=>{K(!q)},children:[(0,a.jsx)("h2",{className:"text-lg font-semibold",children:"Impostazioni file"}),(0,a.jsx)("button",{className:"text-gray-500",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:q?(0,a.jsx)("path",{fillRule:"evenodd",d:"M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}):(0,a.jsx)("path",{fillRule:"evenodd",d:"M14.707 10.707a1 1 0 01-1.414 0L10 7.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",clipRule:"evenodd"})})})]}),q&&(0,a.jsxs)("div",{className:"p-4",children:[(0,a.jsx)("div",{className:"mb-4",children:(0,a.jsxs)("label",{className:"block text-sm font-medium text-gray-700",children:["Estratto conto Amex in formato CSV:",(0,a.jsx)("input",{type:"file",accept:".csv",onChange:e=>{t(e.target.files[0])},className:"w-full border border-gray-300 rounded-md p-2"})]})}),(0,a.jsx)("div",{className:"mb-4",children:(0,a.jsxs)("label",{className:"block text-sm font-medium text-gray-700",children:["Header descrizione spesa:",(0,a.jsx)("input",{type:"text",value:s,onChange:e=>{l(e.target.value)},className:"mt-1 block w-full border border-gray-300 rounded-md p-2"})]})}),(0,a.jsx)("div",{className:"mb-4",children:(0,a.jsxs)("label",{className:"block text-sm font-medium text-gray-700",children:["Header importo:",(0,a.jsx)("input",{type:"text",value:f,onChange:e=>{v(e.target.value)},className:"mt-1 block w-full border border-gray-300 rounded-md p-2"})]})}),(0,a.jsx)("div",{className:"mb-4",children:(0,a.jsxs)("label",{className:"block text-sm font-medium text-gray-700",children:["Header data transazione:",(0,a.jsx)("input",{type:"text",value:i,onChange:e=>{j(e.target.value)},className:"mt-1 block w-full border border-gray-300 rounded-md p-2"})]})}),(0,a.jsx)("button",{onClick:()=>{if(!e){alert("Please upload a CSV file.");return}er(!0),o().parse(e,{header:!0,complete:e=>{let t=e.data;k(t),S(t.reduce((e,t)=>e+parseFloat(t.Importo.replace(",",".")),0).toFixed(2)),em(t,P),er(!1)}})},className:"w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200",children:"Elabora file"}),M&&(0,a.jsxs)("div",{className:"mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded",children:[(0,a.jsx)("strong",{children:"Errore:"})," ",M]}),(0,a.jsxs)("div",{className:"w-full md:mx-auto mt-4 p-4 bg-slate-100 border border-slate-200 rounded-lg",children:[(0,a.jsxs)("h2",{className:"text-xl font-semibold mb-2 flex items-center gap-2",children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-slate-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Help"]}),(0,a.jsxs)("div",{className:"text-sm",children:["Il file delle transazioni deve contenere almeno la data, la descrizione e l'importo, sulla sinistra sono indicate le nomenclature delle colonne predefinite amex.",(0,a.jsx)("div",{className:"my-4 border-t border-slate-200"}),"\xc8 possibile usare questo strumento con qualsiasi file csv che abbia almeno queste tre colonne."]})]})]})]})}),(0,a.jsx)("div",{className:"w-full flex flex-col md:flex-row gap-4",children:I.length>0&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{id:"main-chart-area",className:"w-full md:w-2/3 px-4",children:(0,a.jsxs)("div",{className:"mt-8 bg-white rounded-lg shadow-md p-2 md:p-6",children:[(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsxs)("div",{className:"text-center mb-3",children:[(0,a.jsx)("span",{className:"text-2xl font-bold text-gray-800",children:"Importo totale \xa0"}),(0,a.jsx)("span",{className:"block md:inline-flex items-center justify-center px-4 py-2 text-2xl font-bold text-white bg-red-600 rounded-full",children:p(parseFloat(L))})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 bg-white rounded-lg shadow",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center p-3 border-r border-gray-200",children:[(0,a.jsx)("span",{className:"text-gray-500 text-sm",children:"Transazioni"}),(0,a.jsxs)("button",{onClick:()=>ei(!0),className:"group relative flex items-center gap-2 mt-1 px-2 py-1 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500",children:[(0,a.jsxs)("div",{className:"absolute -top-20 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200",children:["Clicca per vedere tutte le transazioni",(0,a.jsx)("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"})]}),(0,a.jsx)("svg",{className:"w-5 h-5 text-gray-600 group-hover:text-gray-700 transition-colors",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})}),(0,a.jsx)("span",{className:"text-lg font-medium",children:w.length})]})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center p-3",children:[(0,a.jsx)("span",{className:"text-gray-500 text-sm",children:"Periodo"}),(0,a.jsx)("span",{className:"text-lg font-medium",children:V.oldest&&V.newest&&(0,a.jsxs)("div",{className:"mt-2 flex items-center justify-center gap-2 text-gray-600",children:[(0,a.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})}),(0,a.jsxs)("span",{className:"text-sm font-medium",children:[V.oldest," → ",V.newest]})]})})]})]})]}),(0,a.jsx)("h2",{className:"text-xl font-semibold text-gray-800 mb-2 text-center",children:"Distribuzione delle spese"}),(0,a.jsxs)("div",{className:"mb-6",children:[("description"===P||"category"===P)&&(0,a.jsx)(n.nu,{data:F,options:u}),"monthYear"===P&&(0,a.jsx)(n.yP,{data:T,options:m})]}),(0,a.jsx)("div",{className:"space-y-4 pt-4",children:(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row justify-between gap-4",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)("span",{className:"text-xs font-medium text-gray-700",children:"Raggruppa per:"}),(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsx)("button",{onClick:()=>ec({target:{value:"description"}}),className:"px-3 py-1.5 text-xs font-medium rounded-md ".concat("description"===P?"bg-blue-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"),children:"Descrizione"}),(0,a.jsx)("button",{onClick:()=>ec({target:{value:"category"}}),className:"px-3 py-1.5 text-xs font-medium rounded-md ".concat("category"===P?"bg-blue-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"),children:"Categoria"}),(0,a.jsx)("button",{onClick:()=>ec({target:{value:"monthYear"}}),className:"px-3 py-1.5 text-xs font-medium rounded-md ".concat("monthYear"===P?"bg-blue-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"),children:"Mese"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)("span",{className:"text-xs font-medium text-gray-700",children:"Filtra:"}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("input",{type:"text",value:y,onChange:e=>N(e.target.value),placeholder:"Filtra transazioni...",className:"w-full sm:w-64 px-3 py-1.5 text-xs border rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"}),(0,a.jsx)("svg",{className:"absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]})]})]})})]})}),(0,a.jsxs)("div",{id:"right-sidebar",className:"w-full md:w-1/3 px-4 mt-4 md:mt-0",children:[ej.length>0&&(0,a.jsxs)("div",{className:"mt-8 bg-white rounded-lg shadow-md p-4",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between mb-4 border-b pb-2",children:[(0,a.jsx)("h3",{className:"text-lg font-bold text-gray-800",children:"Transazioni pi\xf9 elevate"}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("button",{onClick:()=>es(!et),className:"p-2 hover:bg-gray-100 rounded-full",children:(0,a.jsx)("svg",{className:"w-5 h-5 text-gray-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),et&&(0,a.jsx)("div",{className:"absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200",children:(0,a.jsx)("div",{className:"p-3",children:(0,a.jsxs)("label",{className:"block text-xs font-medium text-gray-700 mb-1",children:["Transazioni da mostrare:",(0,a.jsx)("input",{type:"number",min:"1",max:"50",value:X,onChange:e=>{let t=parseInt(e.target.value);!isNaN(t)&&t>0&&t<=50&&(ee(t),em(C,P))},className:"mt-1 w-full p-2 text-xs border border-gray-300 rounded-md"})]})})})]})]}),(0,a.jsx)("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:"w-full border-collapse table-fixed",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"px-3 py-2 text-left text-sm font-semibold text-gray-600 border-b w-2/3",children:"Descrizione"}),(0,a.jsx)("th",{className:"px-3 py-2 text-right text-sm font-semibold text-gray-600 border-b w-1/3",children:"Importo"})]})}),(0,a.jsx)("tbody",{children:ej.map((e,t)=>(0,a.jsxs)("tr",{className:"".concat(t%2==0?"bg-gray-50":"bg-white"," hover:bg-gray-100"),children:[(0,a.jsx)("td",{className:"px-3 py-2 text-sm text-gray-800 truncate break-words",children:e.Descrizione}),(0,a.jsx)("td",{className:"px-3 py-2 text-sm text-right font-medium text-gray-900",children:p(parseFloat(e.Importo.replace(",",".")))})]},t))})]})})]}),(0,a.jsxs)("div",{className:"mt-8 bg-white rounded-lg shadow-md p-4",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,a.jsx)("h3",{className:"text-lg font-semibold",children:"Categorie di spesa"}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("button",{onClick:()=>$(!Z),className:"p-2 hover:bg-gray-100 rounded-full",children:(0,a.jsx)("svg",{className:"w-5 h-5 text-gray-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),Z&&(0,a.jsx)("div",{className:"absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200",children:(0,a.jsxs)("div",{className:"py-1",children:[(0,a.jsxs)("button",{onClick:()=>{ed(),$(!1)},className:"flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full",children:[(0,a.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"})}),"Esporta categorie"]}),(0,a.jsxs)("label",{className:"flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full cursor-pointer",children:[(0,a.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})}),"Importa categorie",(0,a.jsx)("input",{type:"file",accept:".json",onChange:e=>{ex(e),$(!1)},className:"hidden"})]})]})})]})]}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-xs font-medium text-gray-700 mb-1",children:"Nome Categoria:"}),(0,a.jsx)("input",{type:"text",value:U,onChange:e=>J(e.target.value),className:"text-xs w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500",placeholder:"Inserisci nome categoria"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-xs font-medium text-gray-700 mb-1",children:"Pattern di Ricerca:"}),(0,a.jsx)("input",{type:"text",value:Y,onChange:e=>H(e.target.value),className:"text-xs w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500",placeholder:"Inserisci pattern"})]}),(0,a.jsx)("button",{onClick:()=>{Y&&U&&!O.some(e=>e.pattern.toLowerCase()===Y.toLowerCase())&&(R([...O,{pattern:Y,category:U}]),H(""),J(""),em(C,P))},className:"text-xs w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors",children:"Aggiungi Categoria"}),(0,a.jsx)("div",{className:"grid grid-cols-2  gap-4 mt-4",children:Object.entries(eb).map(e=>{let[t,s]=e;return(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsxs)("button",{onClick:()=>Q(G===t?null:t),className:"w-full bg-gray-50 rounded-full px-1 py-1 border border-gray-200 flex items-center justify-between hover:bg-gray-100 transition-colors",children:[(0,a.jsx)("h6",{className:"text-xs font-medium text-gray-800 truncate",title:t,children:h(t,15)}),(0,a.jsx)("span",{className:"bg-sky-300 text-neutral-900 text-xs font-medium px-2.5 py-0.5 rounded-full",children:eb[t].count})]}),G===t&&(0,a.jsxs)("div",{className:"absolute z-10 top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 p-3",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-2",children:[(0,a.jsx)("span",{className:"text-xs font-medium text-gray-700",children:"Pattern associati"}),(0,a.jsx)("button",{onClick:()=>Q(null),className:"text-gray-400 hover:text-gray-600",children:(0,a.jsx)("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),(0,a.jsx)("div",{className:"space-y-2",children:s.patterns.map((e,t)=>(0,a.jsxs)("div",{className:"flex items-center justify-between group",children:[(0,a.jsx)("span",{className:"text-xs text-gray-600",children:e}),(0,a.jsx)("button",{onClick:t=>{t.stopPropagation(),R(O.filter(t=>t.pattern!==e)),em(C,P)},className:"opacity-0 group-hover:opacity-100 p-1 hover:bg-red-100 rounded",children:(0,a.jsx)("svg",{className:"w-4 h-4 text-red-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]},t))})]})]},t)})})]})]})]})]})})]})}),el&&(0,a.jsx)("div",{className:"fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ease-in-out",onClick:()=>eo(!1),children:(0,a.jsx)("div",{className:"fixed inset-x-0 top-0 transform transition-all duration-300 ease-in-out",onClick:e=>e.stopPropagation(),children:(0,a.jsx)("div",{className:"bg-white shadow-lg mx-auto max-w-2xl rounded-b-lg overflow-hidden animate-slideDown",children:(0,a.jsxs)("div",{className:"p-6",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,a.jsx)("h3",{className:"text-lg font-bold text-gray-900",children:"Changelog"}),(0,a.jsx)("button",{onClick:()=>eo(!1),className:"text-gray-400 hover:text-gray-500 transition-colors",children:(0,a.jsx)("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),(0,a.jsx)("div",{className:"space-y-6",children:[{version:"1.3.0",changes:["Visualizzazione per mese e anno su grafico a barre","Consistenza totale spese e max spese visualizzate","Aggiunto overlay elenco spese contenute nel file"]},{version:"1.2.0",changes:["Aggiunta gestione categorie avanzata con raggruppamento","Migliorata visualizzazione grafico","Aggiunto import/export configurazioni"]},{version:"1.1.0",changes:["Aggiunta gestione categorie","Aggiunto filtraggio spese per descrizione"]},{version:"1.0.0",changes:["Prima release","Supporto caricamento CSV AmEx","Visualizzazione spese con grafico"]}].map(e=>(0,a.jsxs)("div",{className:"border-b border-gray-200 pb-4 last:border-0",children:[(0,a.jsx)("div",{className:"flex justify-between items-center mb-2",children:(0,a.jsxs)("h4",{className:"text-sm font-semibold text-gray-900",children:["v",e.version]})}),(0,a.jsx)("ul",{className:"space-y-1",children:e.changes.map((e,t)=>(0,a.jsxs)("li",{className:"text-sm text-gray-600",children:["• ",e]},t))})]},e.version))})]})})})}),(0,a.jsx)("footer",{className:"bg-white border-t border-gray-200 mt-auto",children:(0,a.jsx)("div",{className:"max-w-7xl mx-auto py-6 px-4",children:(0,a.jsxs)("div",{className:"flex flex-col items-center space-y-3",children:[(0,a.jsxs)("p",{className:"text-sm text-gray-600",children:["Made with \uD83D\uDCA2 by ",(0,a.jsx)("a",{href:"https://github.com/hashcake",className:"text-blue-600 hover:text-blue-800 font-medium",target:"_blank",rel:"noopener noreferrer",children:"@hashcake"})," | ",(0,a.jsx)("button",{onClick:()=>eo(!0),className:"text-xs text-slate-700 hover:text-amber-400",children:"Changelog"})]}),(0,a.jsx)("p",{className:"text-xs text-gray-500 max-w-md text-center",children:"This website is not affiliated with, endorsed by, or sponsored by AmEx. All trademarks and copyrights are the property of their respective owners."})]})})})]}),ea&&(0,a.jsx)("div",{className:"fixed inset-0 bg-white/80 flex items-center justify-center z-50",children:(0,a.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"})}),en&&(0,a.jsx)("div",{className:"fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ease-in-out overflow-auto",onClick:()=>ei(!1),children:(0,a.jsxs)("div",{className:"relative max-w-6xl mx-auto my-8 p-6 bg-white rounded-lg shadow-xl",onClick:e=>e.stopPropagation(),children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-4 border-b pb-4",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold text-gray-800",children:"Tutte le transazioni"}),(0,a.jsx)("button",{onClick:()=>ei(!1),className:"p-2 hover:bg-gray-100 rounded-full",children:(0,a.jsx)("svg",{className:"w-6 h-6 text-gray-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),(0,a.jsx)("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:"w-full",children:[(0,a.jsx)("thead",{className:"bg-gray-50",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"px-4 py-3 text-left text-sm font-semibold text-gray-600",children:"Data cont."}),(0,a.jsx)("th",{className:"px-4 py-3 text-left text-sm font-semibold text-gray-600",children:"Descrizione"}),(0,a.jsx)("th",{className:"px-4 py-3 text-right text-sm font-semibold text-gray-600",children:"Importo"})]})}),(0,a.jsx)("tbody",{className:"divide-y divide-gray-200",children:[...w].sort((e,t)=>new Date(e.Data).getTime()-new Date(t.Data).getTime()).map((e,t)=>(0,a.jsxs)("tr",{className:"hover:bg-gray-50",children:[(0,a.jsx)("td",{className:"px-4 py-3 text-sm text-gray-900 whitespace-nowrap",children:b(new Date(e.Data))}),(0,a.jsx)("td",{className:"px-4 py-3 text-sm text-gray-900",children:e[s]}),(0,a.jsx)("td",{className:"px-4 py-3 text-sm text-right text-gray-900",children:p(parseFloat(e.Importo.replace(",",".")))})]},t))})]})})]})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[647,601,441,517,358],()=>t(8894)),_N_E=e.O()}]);