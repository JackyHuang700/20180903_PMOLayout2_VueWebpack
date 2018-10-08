// 
function select2Func(e) {
  var self = e.target;
  var data = e.params.data;

  if (data) {
    self.nextElementSibling.nextElementSibling.classList.remove('d-none');
    self.nextElementSibling.nextElementSibling.classList.add('d-block');
  } else {
    self.nextElementSibling.nextElementSibling.classList.remove('d-block');
    self.nextElementSibling.nextElementSibling.classList.add('d-none');
  }
}
//# sourceMappingURL=select2.js.map