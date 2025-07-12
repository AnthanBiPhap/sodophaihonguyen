function createTree(node) {
  const li = document.createElement("li");
  li.textContent = node.name;

  if (node.children && node.children.length > 0) {
    li.classList.add("has-children");
    const ul = document.createElement("ul");
    node.children.forEach(child => {
      ul.appendChild(createTree(child));
    });
    li.appendChild(ul);

    li.addEventListener("click", function (e) {
      e.stopPropagation();
      li.classList.toggle("expanded");
    });
  }

  return li;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("tree-container");
  const ul = document.createElement("ul");
  ul.className = "tree";
  ul.appendChild(createTree(familyTree));
  container.appendChild(ul);
});
