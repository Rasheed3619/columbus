$.fn.serializeObject = function() {
  var tb = {};
  var arra = this.serializeArray();
  $.each(arra, function() {
    if (tb[this.name] !== undefined) {
      if (!tb[this.name].push) {
        tb[this.name] = [tb[this.name]];
      }
      tb[this.name].push(this.value || '');
    } else {
      tb[this.name] = this.value || '';
    }
  });
  return tb;
};

$(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    var data = $('form').serializeObject();
    var tr = "<tr>";
    tr += "<td>" + data["name"] + "</td>";
    tr += "<td>" + data["date"] + "</td>";
    tr += "<td>" + data["assigned"] + "</td></tr>";
    $("#mytable").append(tr);
    obj.push(data);
    this.reset();
  });
  var obj = [{
    "name": "Task Name",
    "date": "22/01/2017",
    "assigned": "John Doe"
  }, {
    "name": "Task Name",
    "date": "03/12/2017",
    "assigned": "John Doe"
  }, {
    "name": "Task Name",
    "date": "12/03/2017",
    "assigned": "John Doe"
  }, {
    "name": "Task Name",
    "date": "12/04/2017",
    "assigned": "John Doe"
  }, {
    "name": "Task Name",
    "date": "12/09/2017",
    "assigned": "John Doe"
  }, {
    "name": "Task Name",
    "date": "12/02/2017",
    "assigned": "John Doe"
  }, {
    "name": "Task Name",
    "date": "23/07/2017",
    "assigned": "John Doe"
  }];
  var table = $("<table/>").attr("id", "mytable");
  $("#div1").append(table);
  var html = '';
  for (var i = 0; i < obj.length; i++) {
    html += "<tr>";
    html += "<td>" + obj[i]["name"] + "</td>";
    html += "<td>" + obj[i]["date"] + "</td>";
    html += "<td>" + obj[i]["assigned"] + "</td></tr>";
  }
  $("#mytable").append(html);
});
