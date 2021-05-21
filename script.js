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
function handleText(node) {
    var v = node.textContent;
    var i;
    var regexp;
    chrome.storage.sync.get({"text": true , "brands": true}, function(items){
        if (items.text) {
            for (i = 0; i < text.length; i++) {
                    regexp = new RegExp("\\b"+text[i]+"\\b", "gi");
                    v = v.replace(regexp, "----");
                }
        }
        if (items.brands) {
            for (i = 0; i < brands.length; i++) {
                    regexp = new RegExp("\\b"+brands[i]+"\\b", "gi");
                    v = v.replace(regexp, "----");
                }
        }
        node.textContent = v;
    });
}
document.addEventListener("DOMContentLoaded", function() {
    walk(document.body);
});