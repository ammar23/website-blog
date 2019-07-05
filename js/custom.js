$(document).ready(function() {
  $(".add_post").click(function () {
    $(".overlay").fadeIn(500);
  });
  $(".overlay").not(".add_post").click(function() {
    $(".overlay").fadeOut(500);
  });

  $("#btn1").click(function() {
    $(".overlay").fadeOut(500);
    if (document.getElementById("add_message").value === "") {
      alert("You must enter text");
      return false;
    }

    var ValueMessage = document.getElementById("add_message").value;
    console.log(ValueMessage);

    $(".AllPosts").prepend(`
<li>
<div class="card mb-3 fadeInUp">
<img class="card-img-top" src="images/post.png" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">   ${ValueMessage}  </h5>
  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
</div>
</div>

</li>

`);
    document.getElementById("add_message").value = "";
  });
});

function isEmpty(str) {
  return !str.replace(/\s+/, "").length;
}

document.getElementById("add_message").addEventListener("input", function() {
  if (isEmpty(this.value)) {
    alert("Sorry, you are not allowed to enter any spaces");
    this.value = this.value.replace(/\s/g, "");
  }
});
