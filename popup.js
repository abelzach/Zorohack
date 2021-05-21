function start() {
    save_options();
}


function save_options() {
    var text = document.getElementById('text').checked;
    var images = document.getElementById('images').checked;
    var brands = document.getElementById('brands').checked;

    chrome.storage.sync.set({
        "text": text,
        "images": images,
        "brands": brands
    }, function() {
        var status = document.getElementById('status');
        status.textContent += 'Options updated.';
        setTimeout(function() {
          status.textContent = '';
        }, 750);
      });
}


function restore_options() {
    chrome.storage.sync.get({
        "text": false,
        "images": false,
        "brands": false
    }, function(items) {
      document.getElementById('text').checked = items.text;
      document.getElementById('brands').checked = items.brands;
      document.getElementById('images').checked = items.images;
    });
}


document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',start);