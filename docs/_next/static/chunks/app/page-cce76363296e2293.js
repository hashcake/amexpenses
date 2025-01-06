(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{8894:(e,t,s)=>{Promise.resolve().then(s.bind(s,9809))},9809:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var a=s(5155),l=s(2115),r=s(9159),n=s.n(r),o=s(6472),i=s(5781);i.t1.register(i.Bs,i.m_,i.s$);let d={labels:[],datasets:[{data:[],backgroundColor:[]}]};function c(){var e;let[t,s]=(0,l.useState)(null),[r,i]=(0,l.useState)("Descrizione"),[c,m]=(0,l.useState)("Importo"),[x,u]=(0,l.useState)(""),[h,p]=(0,l.useState)([]),[b,f]=(0,l.useState)(d),g=(e,t,s)=>Object.entries(e.reduce((e,a)=>{let l=a[t].replace(/\s+/g," ").trim(),r=parseFloat(a[s].replace(",","."));return isNaN(r)||(e[l]=(e[l]||0)+r),e},{})).map(e=>{let[t,s]=e;return{description:t,total:s.toFixed(2)}}).sort((e,t)=>t.total-e.total),j=e=>({labels:e.map(e=>e.description),datasets:[{label:"Spese totali",data:e.map(e=>parseFloat(e.total)),backgroundColor:["#FF6384","#36A2EB","#FFCE56","#4BC0C0","#9966FF","#FF9F40"],hoverOffset:4}]}),N=h.reduce((e,t)=>e+parseFloat(t.total),0).toFixed(2);return(0,a.jsxs)("div",{className:"flex items-center justify-center min-h-screen bg-white flex-col",children:[(0,a.jsx)("div",{className:"p-4 mb-2 w-full max-w-4xl flex flex-col",children:(0,a.jsxs)("div",{className:"p-8 text-slate-800 text-center",children:[(0,a.jsx)("img",{src:"/cc-logo.png",alt:"AmExp Logo",width:50,height:50,className:"m1 inline h-auto float-left"}),(0,a.jsx)("h1",{className:"text-4xl font-bold mb-2",children:(0,a.jsx)("span",{children:"\xa0AmExp - Am Ex Expenses"})}),(0,a.jsx)("p",{className:"text-lg opacity-90",children:"Analizza le spese effettuate con amex visualizzandole in un comodo grafico a torta."})]})}),(0,a.jsx)("div",{className:"bg-gradient-to-r from-white to-blue-50 p-8 rounded-lg shadow-md w-full max-w-4xl flex flex-col",children:(0,a.jsxs)("div",{className:"flex flex-col md:flex-row",children:[(0,a.jsxs)("div",{className:"md:w-1/2 pr-4 mb-4 md:mb-0",children:[(0,a.jsx)("div",{className:"mb-4",children:(0,a.jsxs)("label",{className:"block text-sm font-medium text-gray-700",children:["Estratto conto Amex in formato CSV:",(0,a.jsx)("input",{type:"file",accept:".csv",onChange:e=>{s(e.target.files[0])},className:"w-full border border-gray-300 rounded-md p-2"})]})}),(0,a.jsx)("div",{className:"mb-4",children:(0,a.jsxs)("label",{className:"block text-sm font-medium text-gray-700",children:["Header descrizione spesa:",(0,a.jsx)("input",{type:"text",value:r,onChange:e=>{i(e.target.value)},className:"mt-1 block w-full border border-gray-300 rounded-md p-2"})]})}),(0,a.jsx)("div",{className:"mb-4",children:(0,a.jsxs)("label",{className:"block text-sm font-medium text-gray-700",children:["Header importo:",(0,a.jsx)("input",{type:"text",value:c,onChange:e=>{m(e.target.value)},className:"mt-1 block w-full border border-gray-300 rounded-md p-2"})]})}),(0,a.jsx)("button",{onClick:()=>{if(!t){alert("Please upload a CSV file.");return}n().parse(t,{header:!0,complete:e=>{try{let t=e.data,s=g(t,r,c);u(null),p(s),f(j(s))}catch(e){u("Error parsing document: ".concat(e.message))}}})},className:"w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200",children:"Elabora file"}),x&&(0,a.jsxs)("div",{className:"mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded",children:[(0,a.jsx)("strong",{children:"Error:"})," ",x]})]}),(0,a.jsxs)("div",{className:"md:w-1/2 pl-4",children:[h.length>0&&(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-xl font-bold mb-2 text-center",children:"Distribuzione spese"}),(0,a.jsx)(o.Fq,{data:b})]}),h.length>0&&(0,a.jsxs)("div",{className:"text-center mt-2",children:[(0,a.jsx)("span",{className:"text-xl font-bold mb-2 text-center",children:"Totale: "}),(0,a.jsx)("span",{className:"inline-flex items-center justify-center px-3 py-1 text-sm font-bold text-white bg-orange-600 rounded-full",children:(e=parseFloat(N),new Intl.NumberFormat("it-IT",{style:"currency",currency:"EUR",trailingZeroDisplay:"stripIfInteger"}).format(e))})]})]})]})}),(0,a.jsxs)("div",{className:"container mx-auto pt-2 text-center",children:[(0,a.jsxs)("p",{className:"text-sm",children:["Made with \uD83D\uDCA2 by ",(0,a.jsx)("a",{href:"https://github.com/hashcake",target:"_blank",children:"@hashcake"})]}),(0,a.jsx)("p",{className:"italic text-xs",children:"This website is not affiliated with, endorsed by, or sponsored by AmEx. All trademarks and copyrights are the property of their respective owners."})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[647,601,441,517,358],()=>t(8894)),_N_E=e.O()}]);