document.querySelector(".feedback-form").addEventListener("input",(function(t){t.preventDefault(),e[t.target.name]=t.target.value,console.log(e),function(){const t=JSON.stringify(e);localStorage.setItem("feedback-form-state",t)}()}));const e={};
//# sourceMappingURL=03-feedback.fc35ffa5.js.map
