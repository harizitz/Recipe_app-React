(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,a,t){},,,function(e,a,t){e.exports=t(15)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(5),s=t.n(r),i=(t(4),t(2)),l=t.n(i),m=t(6),u=t(1),o=(t(13),function(e){return n.a.createElement("div",{className:"recipe"},n.a.createElement("h1",{className:"recipe_title"},e.title),n.a.createElement("div",{className:"image_div"},n.a.createElement("img",{className:"image",src:e.image,alt:""})),n.a.createElement("p",{className:"calories"},"Calories: ",parseInt(e.calories)," Kcal"),n.a.createElement("h2",null,"Ingredients:"),n.a.createElement("ul",{className:"ingredients"},e.ingredients.map(function(e,a){return n.a.createElement("li",{className:"ingredient",key:a},n.a.createElement("i",{className:"fas fa-caret-right"})," ",e.text)})))}),p=(t(14),function(e){var a=e.search,t=e.updateSearch,c=e.placeholder;return n.a.createElement("div",null,n.a.createElement("input",{type:"text",className:"search-bar",value:a,onChange:t,placeholder:c}),n.a.createElement("button",{type:"submit",className:"search-button"},n.a.createElement("i",{className:"fas fa-search"})))}),f=function(){var e=Object(c.useState)([]),a=Object(u.a)(e,2),t=a[0],r=a[1],s=Object(c.useState)(""),i=Object(u.a)(s,2),f=i[0],d=i[1],h=Object(c.useState)(""),E=Object(u.a)(h,2),b=E[0],N=E[1];Object(c.useEffect)(function(){!function(){var e=Object(m.a)(l.a.mark(function e(){var a,t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(b,"&app_id=").concat("c2b98cb7","&app_key=").concat("f0869bf01680a8472affea83a20507fa"));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,r(t.hits);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[b]);return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"header"},n.a.createElement("h1",{className:"title"},"Recipes Finder App"),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),N(f)},className:"search-form"},n.a.createElement(p,{updateSearch:function(e){d(e.target.value)},placeholder:"Search recipe"}))),n.a.createElement("div",{className:"recipes"},0===t.length?n.a.createElement("h2",{className:"subtitle"},"No Results"):t.map(function(e,a){return n.a.createElement(o,{key:a,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})})))};s.a.render(n.a.createElement(f,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.a247d6a2.chunk.js.map