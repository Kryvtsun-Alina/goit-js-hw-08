!function(){var e=document.querySelector(".feedback-form");e.addEventListener("input",(function(e){e.preventDefault(),r[e.target.name]=e.target.value,t=JSON.stringify(r),localStorage.setItem(a,t);var t})),e.addEventListener("submit",(function(t){t.preventDefault(),console.log(r),localStorage.removeItem(a),e.reset()}));var t,a="feedback-form-state",r={};(t=localStorage.getItem(a))&&(r=JSON.parse(t),function(){for(var t in r){var a=e.querySelector('[name="'.concat(t,'"]'));a&&(a.value=r[t])}}())}();
//# sourceMappingURL=03-feedback.37a12cc7.js.map
