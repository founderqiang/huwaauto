importClass(android.database.sqlite.SQLiteDatabase);


/**
 * 进入每日答题进行选项选择，默认全部选择 
 */
function prepareToAnswerQuestions(){
sleep(2000)
id("ll_xldati").findOne().click()
sleep(1000)
var a=device.width;
var b=device.height;
 var list1 = id("tv_name").className("android.widget.TextView").text("安全教育培训").findOne().parent().parent().children()
 for(var i=0;i<list1.length;i++){
   // log(list[i].child(0).text())
   var control = list1[i].bounds()
   click(control.centerX(),control.centerY())
   sleep(500)
}
swipe(a/2,b/3*2,a/2,b/3*1,1000);
 var list2=id("tv_name").className("android.widget.TextView").text("工艺管理").findOne().parent().parent().children()
 for(var i=0;i<list2.length;i++){
    // log(list[i].child(0).text())
    var control = list2[i].bounds()
    click(control.centerX(),control.centerY())
     sleep(500)
 }
 swipe(a/2,b/3*2,a/2,b/3*1,2000);
 sleep(2000)
 var list3=id("tv_name").className("android.widget.TextView").text("设备操作与维护").findOne().parent().parent().children()
 for(var i=0;i<list3.length;i++){
    // log(list3.length)
    var control = list3[i].bounds()
    click(control.centerX(),control.centerY())
     sleep(500)
 }
 swipe(a/2,b/3*2,a/2,b/3*1,2000);
 sleep(2000)
 var list4=id("tv_name").className("android.widget.TextView").text("危化品知识").findOne().parent().parent().children()
 for(var i=0;i<list4.length;i++){
  var control = list4[i].bounds()
  click(control.centerX(),control.centerY())
   sleep(500)
}
sleep(2000)
id("tv_submit").findOne().click()
}

/**
 * @description 从数据库中获得选项,进行答题
 * 
 */
 function Getoption(){
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
                     if(textContains("E、").exists()){
                        widget2[0].child(4).click() //E选项单击
                     }
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
         var length=widget1[0].childCount() //当第一次时 控件选择是ScrollView的第一个
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
   while(id("btn_confirm").exists()){
      sleep(1000)
      id("btn_confirm").click()
      break;
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
      var widget = id("com.jingyue.anxuewang:id/tv_daan").find()
      var widget1 = id("com.jingyue.anxuewang:id/tv_mydaan").find()
      answer=widget[0].text()
      myAnswer=widget1[0].text()  //获取我的答案
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
    log("题目"+i+":"+question,"A:"+option1,"B:"+option2,"C:"+option3,"D:"+option4,"E:"+option5,"正确答案："+answer,"我的答案："+myAnswer)
    // 调用检查更新函数
    checkAndUpdate(question,option1,option2,option3,option4,option5,answer) 
    option3='',option3='',option4='',option5='' //对后三项再重新初始化
    scrollDown()
    sleep(1000)
}
log("插入数据库数据成功，开始下一轮")
sleep(1000)
id("ll_back").findOne().click() //返回
sleep(1000)
id("ll_back").findOne().click() //返回主见面
}
/*************************************************每日答题部分******************************************************/
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
 * @description: 查找数据库，看是否有答案
 * @param {*获取题目} question 
 * @param {*查询的表格} table_name 
 * @returns 
 */
function getDBAnswer(question,table_name) { 
   var dbName = "hwwa.db";//题库文件名
   var path = files.path(dbName);
   var db = SQLiteDatabase.openOrCreateDatabase(path, null);
//     Select 列名 from 表名 where 列名 like 关键字 （查询列名中带有关键字的所有项）
// (1) like ‘ab%’ 表示查询以ab开头的所有项
// (2) like ‘%ab’ 表示查询以ab结尾的所有项
// (3) like ‘%ab%’表示查询任何位置包含ab的所有项
// 比如 SELECT * FROM [user] WHERE u_name LIKE ‘%三%’
// 将会把u_name为“张三”，“张猫三”、“三脚猫”，“唐三藏”等等有“三”的记录全找出来。
//String name = cursor.getString(cursor.getColumnIndex("name"));
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
 * @description: 检查答案是否正确，并更新数据库
 * @param: question, ansTiku, answer
 * @return: null
 */
function checkAndUpdate(question,option1,option2,option3,option4,option5,answer) {               
                var sql = "INSERT INTO dateAnswer VALUES ('" + question + "','" + option1 + "','" + option2 + "','" + option3 + "','" + option4 + "','" + option5+ "','" + answer + "')";
                insertOrUpdate(sql);
}

 /**
 * 进入化危为安app，准备执行任务，同时签到
 */
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
if(id("img_day").exists()){
   id("img_day").findOne().click()
}

for(var i=1;i<40;i++){
    log("进行第"+i+"次循环")
    prepareToAnswerQuestions() // 第一个调用函数  选择答题选项函数
    Getoption() //第二个调用函数  进行随机答题 
    ExtractData() //第三个调用函数 从全部解析中提取数据,同时调用插入数据库函数
}
