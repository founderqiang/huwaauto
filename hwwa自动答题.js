importClass(android.database.sqlite.SQLiteDatabase)
// /**
//  * 进入化危为安app，准备执行任务，同时签到
//  */
home()
setScreenMetrics(1080, 1920);
sleep(1500)
if(!text("化危为安").exists()){
    back()
}
sleep(2000)
auto.waitFor()
click("化危为安")
sleep(4000)
if(id("btn_confirm").exists()){
    id("btn_confirm").findOne().click() 
}
sleep(2000)
id("ll_task").findOne().click() //点击任务中心按钮
sleep(2000)
/**
 * 分享函数
 */
function share(){
   click("去分享")
    sleep(2000)
    widget = id("com.jingyue.anxuewang:id/my_listview").className("android.widget.ListView").find()
    widget[0].child(0).click()
    sleep(2000)
    id("com.jingyue.anxuewang:id/img_search").findOne().click() //点击分享图标
    sleep(1000)
    id("tv_wx").findOne().click() //点击微信进行分享
    sleep(3000)
    // id("g0").findOne().click() //点击微信中返回图标
    back() //在微信中返回
    sleep(1000)
    id("tv_center").findOne().click() //点击取消
    sleep(1000)
    id("ll_back").findOne().click() //点击返回箭头
    sleep(1000)
    id("ll_tab1").findOne().click() //来到首页
    sleep(1000)
    id("ll_task").findOne().click() //点击任务中心按钮
    sleep(1000)
}

// //调用函数
// var widget = id("tv_name").className("android.widget.TextView").text("文章分享").findOne().parent()
if(id("tv_go").className("android.widget.TextView").text("去分享").exists()){
   share()
}

// if (widget.child(5).text()=="去分享"){
//     share()
//  }


/*************************************************每日答题部分******************************************************/
/**
 * 进入每日答题进行选项选择，默认全部选择 
 */
 
function prepareToAnswerQuestions(){
   sleep(2000)
   click("去答题",0)
   sleep(1000)
   var a=device.width;
   var b=device.height;

   var list1 = id("com.jingyue.anxuewang:id/gd_view").find()
   num = list1[0].childCount()
   for(var i=0;i<num;i++){
      var list1 = id("com.jingyue.anxuewang:id/gd_view").find()
         list1[0].child(i).click()
         sleep(500)
   }   // 点击安全管理所有选项
   swipe(a/2,b/3*2,a/2,b/3*1,2000);

   var list2= id("com.jingyue.anxuewang:id/gd_view").find()
   num = list2[1].childCount()
   for(var i=0;i<num;i++){
      var list2 = id("com.jingyue.anxuewang:id/gd_view").find()
         list2[1].child(i).click()
         sleep(500)
   }   // 点击安全技术所有选项
   swipe(a/2,b/3*2,a/2,b/3*1,2000);
   sleep(2000)

   var list3 = id("com.jingyue.anxuewang:id/gd_view").find()
   num = list3[2].childCount()
   for(var i=0;i<num;i++){
      var list3 = id("com.jingyue.anxuewang:id/gd_view").find()
         list3[2].child(i).click()
         sleep(500)
   }   // 点击操作技能所有选项
   swipe(a/2,b/3*2,a/2,b/3*1,2000);
   sleep(2000)
   
   var list4 = id("com.jingyue.anxuewang:id/gd_view").find()
   num = list4[3].childCount()
   for(var i=0;i<num;i++){
      var list4 = id("com.jingyue.anxuewang:id/gd_view").find()
         list4[3].child(i).click()
         sleep(500)
   }   // 点击安全监管所有选项
   sleep(2000)
   id("tv_submit").findOne().click()
}

// /**
//  * @description 从数据库中获得选项,进行答题
//  * 
//  */
 function getQuestion(){
   sleep(2000)
   for( var i=1;i<11;i++){
      // var widget1=className("android.widget.ScrollView").find()
      // var widget2=id("com.jingyue.anxuewang:id/my_listview").find()
      function firstQuestion(){
         var question = widget1[0].child(0).text().substring(4) //获取题目中的题干
         var getAnswer=getDBAnswer(question,"dateAnswer")  //进行数据库题目的比对，并获得数据库中的答案。
         if(getAnswer ==''){
            widget2[0].child(1).click() //随机选上个B选项
            sleep(1000)
        }else{
            array = getAnswer.split(",") 
            for(var i=0;i<array.length;i++){
               switch(array[i]){
                  case "A":
                     widget2[0].child(0).click()  //A选项单击
                     break;
                  case "B":
                     widget2[0].child(1).click() //B选项单击
                     break;
                  case "C":
                     widget2[0].child(2).click() //C选项单击
                     break;
                  case "D":
                     widget2[0].child(3).click() //D选项单击
                     break;
                  case "E":
                     widget2[0].child(4).click() //E选项单击
                     break;
                  case "F":
                     widget2[0].child(5).click() //F选项单击
                     break;
               }
            }
        }
      }
      function noFirstQuestion(){
         var question = widget1[1].child(0).text().substring(4) //获取题目中的题干
         var getAnswer=getDBAnswer(question,"dateAnswer")  //进行数据库题目的比对，并获得数据库中的答案。
         if(getAnswer ==''){
            widget2[1].child(1).click() //随机选上个B选项
            sleep(1000)
        }else{
            array = getAnswer.split(",") 
            for(var i=0;i<array.length;i++){
               switch(array[i]){
                  case "A":
                     widget2[1].child(0).click()  //A选项单击
                     break;
                  case "B":
                     widget2[1].child(1).click() //B选项单击
                     break;
                  case "C":
                     widget2[1].child(2).click() //C选项单击
                     break;
                  case "D":
                     widget2[1].child(3).click() //D选项单击
                     break;
                  case "E":
                     widget2[1].child(4).click() //E选项单击
                     break;
                  case "F":
                     widget2[1].child(5).click() //F选项单击
                     break;
               }
            }
        }
      } 
      if(i==1){
         sleep(1000)
         var widget1=className("android.widget.ScrollView").find()
         var widget2=id("com.jingyue.anxuewang:id/my_listview").find()
         var length=widget1[0].childCount() //当第一次时 控件选择是ScrollView的第一个的长度
         sleep(1000)
         if(length==4){   //当长度是4时，说明有确定答案这一子控件，并且是多项选择题 
            firstQuestion()
            sleep(1000)
            widget1[0].child(3).click() //当前选项是多选，点击答案按钮进行确定 
         }else{
            firstQuestion()
              } 
      } else{
         log("i=",i)
         sleep(1000)
         var widget1=className("android.widget.ScrollView").find()
         var widget2=id("com.jingyue.anxuewang:id/my_listview").find()
         var length=widget1[1].childCount() //不是第一题时 控件选择是ScrollView的第二个
         sleep(1000)
         if(length==4){   //当长度是4时，说明有确定答案这一子控件
            noFirstQuestion()
            sleep(1000)
            widget1[1].child(3).click() //当前选项是多选，点击答案按钮进行确定 
         }else{
            noFirstQuestion()
         } 
      }
   }
   if(id("btn_confirm").exists()){
      sleep(1000)
      id("btn_confirm").click()
   }
   sleep(1000)
}

/**
 * 从全部解析中提取数据
 * 
 * 
 */
function ExtractData(){
   var question='',option1='',option2='',option3='',option4='',option5='',answer='';
   if(id("tv_jiexi").exists()){
      score = id("com.jingyue.anxuewang:id/tv_totleNum").find()
      getScore = score[0].text()  //获取分数
      log("我的分数是："+getScore)
      click("全部解析")  //进入解析
   }
   sleep(1000)
    for(var i=1;i<11;i++){
    if(i==1){
      sleep(1000)
      question=className("android.widget.TextView").id("com.jingyue.anxuewang:id/tv_content").findOnce(0).text().substring(4) //string.substring(from, to) 方法从 from 位置截取到 to 位置，to 可选，没有设置时默认到末尾。
      var widget=id("com.jingyue.anxuewang:id/my_listview").find()
      var length=widget[0].childCount()
      option1=widget[0].child(0).child(0).text().substring(2) //获取A选项的文本
      option2=widget[0].child(1).child(0).text().substring(2) //获取B选项的文本
      if(length==4){
               option3=widget[0].child(2).child(0).text().substring(2)
               option4=widget[0].child(3).child(0).text().substring(2)
      }
      if(length==5){
               option3=widget[0].child(2).child(0).text().substring(2)
               option4=widget[0].child(3).child(0).text().substring(2)
               option5=widget[0].child(4).child(0).text().substring(2)
      }
      var widget=id("com.jingyue.anxuewang:id/tv_daan").find()
      var widget1 = id("com.jingyue.anxuewang:id/tv_mydaan").find()
      myAnswer=widget1[0].text()  //获取我的答案
      answer=widget[0].text()
    }else{
        sleep(1000)
        question=className("android.widget.TextView").id("com.jingyue.anxuewang:id/tv_content").findOnce(1).text().substring(4) //string.substring(from, to) 方法从 from 位置截取到 to 位置，to 可选，没有设置时默认到末尾。
        var widget=id("com.jingyue.anxuewang:id/my_listview").find()
        var length=widget[1].childCount()
        option1=widget[1].child(0).child(0).text().substring(2) //获取A选项的文本
        option2=widget[1].child(1).child(0).text().substring(2) //获取B选项的文本
        if(length==4){
            option3=widget[1].child(2).child(0).text().substring(2)//获取C选项的文本
            option4=widget[1].child(3).child(0).text().substring(2)//获取D选项的文本
        }
        if(length==5){
            option3=widget[1].child(2).child(0).text().substring(2)//获取C选项的文本
            option4=widget[1].child(3).child(0).text().substring(2)//获取D选项的文本
            option5=widget[1].child(4).child(0).text().substring(2)//获取E选项的文本
        }
        var widget=id("com.jingyue.anxuewang:id/tv_daan").find()//获取正确答案
        var widget1 = id("com.jingyue.anxuewang:id/tv_mydaan").find()
        answer=widget[1].text()
        myAnswer=widget1[1].text()  //获取我的答案
    }
    log("题目"+i+"是"+question,"A:"+option1,"B:"+option2,"C:"+option3,"D:"+option4,"E:"+option5,"正确答案："+answer,"我的答案："+myAnswer)
    // 调用检查更新函数
    checkAndUpdate(question,option1,option2,option3,option4,option5,answer) 
    option3='',option4='',option5='' //对后三项再重新初始化
    scrollDown()
    sleep(1000)
}
log("插入数据库数据成功，开始下一轮")
sleep(1000)
id("ll_back").findOne().click() //返回
sleep(1000)
id("ll_back").findOne().click() //返回主见面
}

/**
 * @description: 增加或更新数据库
 * @param: sql
 * @return: null
 */
 function insertOrUpdate(sql) {
    var dbName = "hwwa.db";
    var path = files.path(dbName);
    if (!files.exists(path)) {
        //files.createWithDirs(path);
        console.error("未找到题库!请将题库放置与js同一目录下");
    }
    var db = SQLiteDatabase.openOrCreateDatabase(path, null);
    db.execSQL(sql);
    db.close();
}

/**
 * @description: 每日答题 查找数据库，看是否有答案
 * @param {*获取题目} question 
 * @param {*查询的表格} table_name 
 * @returns 
 */
function getDBAnswer(question,table_name) { 
   var dbName = "hwwa.db";//题库文件名
   var path = files.path(dbName);
   var db = SQLiteDatabase.openOrCreateDatabase(path, null);
   sql = "SELECT answer FROM " + table_name + " WHERE question LIKE '%" + question + "%'"
   var cursor = db.rawQuery(sql, null);
   toastLog("共有"+cursor.getCount()+"条记录");
   var answer =''
   if(cursor.getCount()){
       // cursor.moveToFirst();
       // do{
       //     toastLog(cursor.getString(0));
       // }while(cursor.moveToNext());   
       while(cursor.moveToNext()){
       var answer = cursor.getString(0);
       log(answer)
       break
       }
       cursor.close();
       db.close();
       return answer; 
   }
   else {
       console.error("题库中未找到答案");
       cursor.close();
       db.close();
       log(answer)
       return answer;
   }
}
/**
 * @description: 提取正确答案，并更新数据库
 * @param: question, ansTiku, answer
 * @return: null
 */
function checkAndUpdate(question,option1,option2,option3,option4,option5,answer) {               
                var sql = "INSERT INTO dateAnswer VALUES ('" + question + "','" + option1 + "','" + option2 + "','" + option3 + "','" + option4 + "','" + option5+ "','" + answer + "')";
                insertOrUpdate(sql);
}

//调用函数
var widget = id("tv_go").untilFind()  //找到所有的按钮
if (widget[2].text()=="去答题"){
    prepareToAnswerQuestions() // 第一个调用函数  选择答题选项函数
    getQuestion() //第二个调用函数  进行随机答题 
    ExtractData() //第三个调用函数 从全部解析中提取数据,同时调用插入数据库函数
 }



/*************************************************挑战答题部分******************************************************/
/**
 * @description 从答题软件中获得选项
 * 
 */
function Getoption(){
    sleep(1000)
    widget=id("com.jingyue.anxuewang:id/tv_name").find()
    option = widget[0].text()  //通过A选项获取答案
    var answer = getCalAnswer(option,"hwwaDT")
    if(answer ==''){
        // widget[0].parent().click()
        var a = widget[0].bounds() 
        click(a.centerX(),a.centerY())
    }else{
        switch(answer) {
         case "A":
        //    widget[0].parent().click()
           var a = widget[0].bounds() //A选项坐标
           click(a.centerX(),a.centerY())
           break;
        case "B":
        //    widget[1].parent().click()
        var b = widget[1].bounds() //B选项坐标
        click(b.centerX(),b.centerY())
           break;
        case "C":
        //    widget[2].parent().click()
           var c = widget[2].bounds() //C选项坐标
           click(c.centerX(),c.centerY())
           break;
        case "D":
        //    widget[3].parent().click()
           var d = widget[3].bounds() //D选项坐标
           click(d.centerX(),d.centerY())
           break;
        case "E":
            var e = widget[4].bounds() //E选项坐标
            click(e.centerX(),e.centerY())
            break;
      }
    }
}

//调用函数
    //SELECT * FROM hwwaDT WHERE option like '%三%' and question like '%一般%'
    var sum=1,flag=0,isFrist=0//sum 为答题数，flag为有效答题局数 （每答对5次为一个有效局数）
    function Answer(){
        while(textMatches(/(单选题|多选题|判断题)/).exists()){
            Getoption()
            sum++ 
            if(sum>5){ //当大于5局时进行停止
                flag++;  //局数加一
                isFrist=flag
                sum=0;
                // Getoption();
                // break;
            }
            sleep(1000)
            if(className("android.widget.TextView").text("正确答案").exists()){
                sleep(1000)
                sum=0; 
                break;
            }
        }
    }

    
    sleep(2000)
    var widget = id("tv_go").untilFind()  //找到所有的按钮
    if (widget[3].text()=="去答题"){ 
          click("去答题")
       }
    while(true){
       sleep(2000)
        Answer();
        if(isFrist==1){ 
            id("ll_back").findOne().click()
            isFrist=0
            sleep(2000)
            click("去答题")
            sleep(2000)
            continue;
        }
        if(flag>1){ 
            while(!id("tv_name").className("android.widget.TextView").text("挑战答题").exists()){
                sleep(3000)
                back()
            }
            break
        }else {
            while(!text("再来一局").exists()){
                sleep(2000)
            }
            className("android.widget.TextView").text("再来一局").findOnce().click()
            sleep(1000)
        }
   }

/**
 * @description: 从数据库中搜索答案
 * @param: option 问题
 * @param:table_name 数据库内的表名
 * @return: answer 答案
 */   
 function getCalAnswer(option,table_name) {   
   var dbName = "hwwa.db";//题库文件名  
   var path = files.path(dbName);
   var db = SQLiteDatabase.openOrCreateDatabase(path, null);
   sql = "SELECT answer FROM " + table_name + " WHERE option LIKE '%" + option + "%'"
   var cursor = db.rawQuery(sql, null);
   toastLog("共有"+cursor.getCount()+"条记录");
   var answer =''
   if(cursor.getCount()){
       // cursor.moveToFirst();
       // do{
       //     toastLog(cursor.getString(0));
       // }while(cursor.moveToNext());   
       while(cursor.moveToNext()){
       var answer = cursor.getString(0);
       log(answer)
       break
       }
       cursor.close();
       db.close();
       return answer; 
   }
   else {
       console.error("题库中未找到答案");
       cursor.close();
       db.close();
       log(answer)
       return answer;
   }
}

