// 
function select2Func(e) {
  var self = e.target
  var data = e.params.data;
  var selfNextSib = self.nextElementSibling.nextElementSibling
  if (data) {
    selfNextSib.classList.remove('d-none')
    selfNextSib.classList.add('d-block')
  } else {
    selfNextSib.classList.remove('d-block')
    selfNextSib.classList.add('d-none')
  }
}