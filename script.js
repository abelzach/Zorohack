function walk(node) 
{
    var child, next;
    child = node.firstChild;
    if (!child && node.textContent !== "" && node.nodeType === 3) {
        handleText(node);
    }
    while ( child ) {
        next = child.nextSibling;
        walk(child);
        child = next;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    walk(document.body);
});