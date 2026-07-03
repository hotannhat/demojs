function initializeGallery() {
console.log("'onload' event fired");
var images = document.querySelectorAll('.preview-image');
for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
}
console.log("Đã thêm thành công thuộc tính tabindex vào " + images.length + " ảnh.");
}
window.onload=initializeGallery;
function upDate (previewPic) {
    console.log("Sự kiện kích hoạt ảnh lớn: upDate()");
    console.log("Nguồn ảnh hiện tại: " + previewPic.src);
    console.log("Văn bản thay thế (Alt): " + previewPic.alt);
    var displayDiv = document.getElementById('image');
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    displayDiv.innerHTML = previewPic.alt;
}
function unDo() {
    console.log("Sự kiện kích hoạt ảnh lớn: unDo()");
    var displayDiv = document.getElementById('image');
    displayDiv.style.backgroundImage = "url('')";
    displayDiv.innerHTML = "Hover over an image below to display here.";
}
