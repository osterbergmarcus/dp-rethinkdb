var client = deepstream("localhost:6020").login()
var record = client.record.getRecord("testRecord")
var inputElement = document.querySelector('#data-input')
var list = document.querySelector('#list')
var form = document.querySelector('form')

client.event.subscribe('feed', function(data){
  list.innerHTML = "<li>" + data + "</li>"
})

record.subscribe(function(data) {
  inputElement.value = data.text
})

function update() {
  record.set({ text: inputElement.value })
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  var data = record.get('text')
  client.event.emit( 'feed', data);
})