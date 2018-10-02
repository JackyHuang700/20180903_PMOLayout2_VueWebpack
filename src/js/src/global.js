(function () {
  var treeviewMenuDom = document.getElementsByClassName('treeview-menu')[0]
  treeviewMenuDom.innerHTML = (
    '<li class="active"><a href="loginV2.html"><i class="fa fa-circle-o"></i> login</a></li>'+
    '<li><a href="changePasswordV2.html"><i class="fa fa-circle-o"></i> 忘記密碼</a></li>'+
    '<li><a href="dragula.html"><i class="fa fa-circle-o"></i> 我的工作區</a></li>'+
    '<li><a href="myCalendar.html"><i class="fa fa-circle-o"></i> 我的日曆</a></li>'+
    '<li><a href="myJobs.html"><i class="fa fa-circle-o"></i> 我的專案</a></li>'+
    '<li><a href="meetingManage.html"><i class="fa fa-circle-o"></i> 會議管理</a></li>'+
    '<li><a href="bulletinMaintain.html"><i class="fa fa-circle-o"></i> 公布欄維護</a></li>'
  )
})()