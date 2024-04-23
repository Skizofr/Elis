const loadIonicons = () => {

  const esmScript = document.createElement("script");
  esmScript.type = "module";
  esmScript.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
  document.head.appendChild(esmScript);

  const script = document.createElement("script");
  script.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js";
  document.head.appendChild(script);

};

export default loadIonicons
