(function () {
  var treeviewMenuDom = document.getElementsByClassName('treeview-menu')[0];
  treeviewMenuDom.innerHTML = '<li class="active"><a href="loginV2.html"><i class="fa fa-circle-o"></i> login</a></li>' + '<li><a href="changePasswordV2.html"><i class="fa fa-circle-o"></i> 忘記密碼</a></li>' + '<li><a href="dragula.html"><i class="fa fa-circle-o"></i> 我的工作區</a></li>' + '<li><a href="myCalendar.html"><i class="fa fa-circle-o"></i> 我的日曆</a></li>' + // '<li><a href="myJobs.html"><i class="fa fa-circle-o"></i> 我的專案</a></li>'+
  '<li><a href="myJobs2.html"><i class="fa fa-circle-o"></i> 我的專案-專案維護</a></li>' + '<li><a href="myJobs3.html"><i class="fa fa-circle-o"></i> 我的專案-專案基本資料維護</a></li>' + '<li><a href="myJobs4.html"><i class="fa fa-circle-o"></i> 我的專案-專案工作維護(WBS)</a></li>' + '<li><a href="myJobs5.html"><i class="fa fa-circle-o"></i> 我的專案-專案成員維護</a></li>' + '<li><a href="meetingManage2.html"><i class="fa fa-circle-o"></i> 會議管理-會議列表</a></li>' + '<li><a href="meetingManage3.html"><i class="fa fa-circle-o"></i> 會議管理-新增/修改會議資料</a></li>' + '<li><a href="meetingManage4.html"><i class="fa fa-circle-o"></i> 會議管理-會議召開(進入會議)</a></li>' + '<li><a href="meetingManage5.html"><i class="fa fa-circle-o"></i> 會議管理-會議室管理</a></li>' + '<li><a href="bulletinMaintain2.html"><i class="fa fa-circle-o"></i> 公布欄維護-公佈欄列表</a></li>' + '<li><a href="bulletinMaintain3.html"><i class="fa fa-circle-o"></i> 公布欄維護-會議室新增/修改</a></li>' + '<li><a href="bulletinMaintain4.html"><i class="fa fa-circle-o"></i> 公布欄維護-公告類別維護</a></li>' + '<li><a href="bulletinMaintain5.html"><i class="fa fa-circle-o"></i> 公布欄維護-公告類別新增/修改</a></li>';
})();

(function () {
  $('.formBox input').focusout(formBoxFunc); // $('.formBox select').focusout(formBoxFunc)

  $('.formBox textarea').focusout(formBoxFunc);
  var formBoxInputList = $('.formBox input'); // var formBoxSelectList = $('.formBox select')

  var formBoxTextarea = $('.formBox textarea');

  for (var index = 0; index < formBoxInputList.length; index++) {
    var formBoxInput = formBoxInputList[index];
    $(formBoxInput).trigger('focusout');
  } // for (var index = 0; index < formBoxSelectList.length; index++) {
  //  var formBoxInput = formBoxSelectList[index]
  //   $(formBoxInput).trigger('focusout')
  // }


  for (var index = 0; index < formBoxTextarea.length; index++) {
    var formBoxInput = formBoxTextarea[index];
    $(formBoxInput).trigger('focusout');
  }

  function formBoxFunc() {
    // var self = this
    // against select2
    // console.log(self);
    // if (self.tagName === 'SELECT') {
    //   if (self.value !== '') {
    //     debugger
    //   }
    // }
    if ($(this).val() !== '') {
      $(this).addClass('isCompleted');
    } else {
      $(this).removeClass('isCompleted');
    }
  }
})();
//# sourceMappingURL=global.js.map