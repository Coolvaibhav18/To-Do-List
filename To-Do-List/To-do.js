var itemlist = [];
if (localStorage.getItem("itemlist"))
  itemlist = JSON.parse(localStorage.getItem("itemlist"));
function additem() {
  var item = document.getElementById("todoitem").value;
  var detail = document.getElementById("description").value;
  var cdate = document.getElementById("date").value;
  document.getElementById("todoitem").value = "";
  document.getElementById("description").value = "";
  document.getElementById("date").value = "";
  if (item == "") {
    var entry = alert("Input Field Cant be blank.....");
    return false;
  }
  var items = {
    tditem: item,
    description: detail,
    date: cdate,
  };
  itemlist.push(items);
  localStorage.setItem("itemlist", JSON.stringify(itemlist));
  showitems();
}
function showitems() {
  if (itemlist) {
    var index = 0;
    var itemlists = "";
    while (index < itemlist.length) {
      const id = index + 1;
      itemlists =
        itemlists +
        "<tr><td>" + id + "</td>" +
        "<td>" + itemlist[index].tditem + "</td>" +
        "<td>" + itemlist[index].description + "</td>" +
        "<td>" + itemlist[index].date + "</td>" +
        "<td>" + "<i class='fa-sharp fa-solid fa-trash' onclick='deleteitem(" + id + ")'style='color: #ff0000;'></i>" + "</td>" +
        
        "<td>" + "<i class='fa-solid fa-pen' onclick ='updateitem(" + id + ")'  style='color: #2E2EFF;'></i>" + "</td></tr>";
      index++;
    }
    document.getElementById("show").innerHTML = itemlists;
  }
}
function updateValue(id, inputValue) {
  document.getElementById(id).value = inputValue;
}
function deleteitem(pid) {
  var index = 0;
  while (index < itemlist.length) {
    if (index + 1 == pid) {
      itemlist.splice(index, 1);
      break;
    }
    index++;
  }
  localStorage.setItem("itemlist", JSON.stringify(itemlist));
  showitems();
}
function updateitem(pid) {
  var index = 0;
  while (index < itemlist.length) {
    if (index + 1 == pid) {
      updateValue("todoitem", itemlist[index].tditem);
      updateValue("description", itemlist[index].description);
      updateValue("date", itemlist[index].date);
    }
    index++;
  }
  localStorage.setItem("itemlist", JSON.stringify(itemlist));
  localStorage.setItem("itemlist", itemlist);
  document.getElementById("addOrSave").innerText = "Save Item";
  addOrSave.removeAttribute("onclick");
  document.getElementById("addOrSave").setAttribute("onclick", "savevalue(" + pid + ")");
}

function savevalue(pid) {
  var tditems = document.getElementById("todoitem").value;
  var desc = document.getElementById("description").value;
  var date = document.getElementById("date").value;
  var index = 0;
  while (index < itemlist.length) {
    if (index + 1 == pid) {
      itemlist[index].tditem = tditems;
      itemlist[index].description = desc;
      itemlist[index].date = date;
      break;
    }
    index++;
  }
  localStorage.setItem("itemlist", JSON.stringify(itemlist));

  document.getElementById("addOrSave").innerText = "Add Items";
  addOrSave.removeAttribute("onclick");
  document.getElementById("addOrSave").setAttribute("onclick", "additem()");
  document.getElementById("todoitem").value = "";
  document.getElementById("date").value = "";
  document.getElementById("description").value = "";
  showitems();
}

//create fetch api
