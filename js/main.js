/* Screenshot slots: show a placeholder until the image file exists */
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".shot img").forEach(function (img) {
        var markMissing = function () {
            img.closest(".shot").classList.add("missing");
        };
        if (img.complete && img.naturalWidth === 0) {
            markMissing();
        } else {
            img.addEventListener("error", markMissing);
        }
    });
});
