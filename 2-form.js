import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const l={email:"",message:""},s="feedback-form-state",t=document.querySelector(".feedback-form");t.addEventListener("input",m);t.addEventListener("submit",o);function m(e){l[e.target.name]=e.target.value,localStorage.setItem(s,JSON.stringify(l))}n();function o(e){e.preventDefault();const a=t.email.value.trim(),r=t.message.value.trim();if(!a||!r){alert("Fill please all fields");return}e.currentTarget.reset(),localStorage.removeItem(s)}function n(){const e=localStorage.getItem(s);if(e){const a=JSON.parse(e);t.email.value=a.email||"",t.message.value=a.message||""}}
//# sourceMappingURL=2-form.js.map
