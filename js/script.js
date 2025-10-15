// Hiển thị nội dung + ẩn link (đúng theo snippet bạn gửi)
document.getElementById("surpriseLink").addEventListener("click", function(event) {
  event.preventDefault();
  const msg = document.getElementById("surpriseMessage");
  msg.style.display = "block";
  msg.setAttribute("aria-hidden", "false");
  this.style.display = "none";

  // (nhỏ) chuyển focus vào nội dung để screen reader đọc
  msg.setAttribute("tabindex", "-1");
  msg.focus({ preventScroll: true });
});
