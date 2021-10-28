$("#btn1").click(function () {
  var input = $("#num1");
  if (input.val()) {
    var n1 = parseInt($("#num1").val());
    var string = "<tr><td>" + n1 + "</tr></td>";
    $("#tab").append(string);
    input.val("");
  }
});
