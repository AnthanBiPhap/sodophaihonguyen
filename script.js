document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("tree-container");

  function createNode(node) {
    const el = document.createElement("div");
    el.className = "node";
    el.innerHTML = node.name;

    if (node.children && node.children.length > 0) {
      const childrenEl = document.createElement("div");
      childrenEl.className = "children";

      node.children.forEach(child => {
        childrenEl.appendChild(createNode(child));
      });

      const wrapper = document.createElement("div");
      wrapper.style.display = "flex";
      wrapper.appendChild(el);
      wrapper.appendChild(childrenEl);
      return wrapper;
    }

    return el;
  }

  container.appendChild(createNode(familyTree));
});
