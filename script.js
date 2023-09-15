console.log("Loading first file");
function createScript(name) {
  let script = document.createElement("script");
  script.src = name;
  script.async = true;
  var x = document.getElementsByTagName("head")[0];
  x.appendChild(script);
}
for (let i = 1; i < 10; i++) {
  createScript(`script${i}.js`);
}
