//deepstream
var ds = deepstream("localhost:6020").login();
var record = ds.record.getRecord("testRecord/asdasd");

var inputElement = document.querySelector('#data-input')
var list = document.qureySelector

function update () {
  record.set({ text: inputElement.value })
}

record.subscribe(function(data){
  inputElement.value = data.text
  console.log(data);
});
