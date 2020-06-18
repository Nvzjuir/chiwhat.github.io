var foodArr = [
          ["早餐", "面包 蛋糕 荷包蛋 烧饼 饽饽 油条 馄饨 火腿 面条 小笼包 玉米粥 肉包 山东煎饼 饺子 煎蛋 烧卖 生煎 锅贴 包子 酸奶 苹果 梨 香蕉 皮蛋瘦肉粥 蛋挞 南瓜粥 煎饼 玉米糊 泡面 粥 馒头 燕麦片 水煮蛋 米粉 豆浆 牛奶 花卷 豆腐脑 煎饼果子 小米粥 黑米糕 鸡蛋饼 牛奶布丁 水果沙拉 鸡蛋羹 南瓜馅饼 鸡蛋灌饼 奶香小馒头 汉堡包 披萨 八宝粥 三明治 蛋包饭 豆沙红薯饼 驴肉火烧 粥 粢饭糕 蒸饺 白粥"],
          ["午餐", "盖浇饭 砂锅 大排档 米线 满汉全席 西餐 麻辣烫 自助餐 炒面 快餐 水果 西北风 馄饨 火锅 烧烤 泡面 速冻水饺 日本料理 涮羊肉 味千拉面 肯德基 面包 扬州炒饭 自助餐 茶餐厅 海底捞 咖啡 比萨 麦当劳 兰州拉面 沙县小吃 烤鱼 海鲜 铁板烧 韩国料理 粥 快餐 萨莉亚 桂林米粉 东南亚菜 甜点 农家菜 川菜 粤菜 湘菜 本帮菜 竹笋烤肉"],
          ["晚餐", "1盖浇饭 砂锅 大排档 米线 满汉全席 西餐 麻辣烫 自助餐 炒面 快餐 水果 西北风 馄饨 火锅 烧烤 泡面 速冻水饺 日本料理 涮羊肉 味千拉面 肯德基 面包 扬州炒饭 自助餐 茶餐厅 海底捞 咖啡 比萨 麦当劳 兰州拉面 沙县小吃 烤鱼 海鲜 铁板烧 韩国料理 粥 快餐 萨莉亚 桂林米粉 东南亚菜 甜点 农家菜 川菜 粤菜 湘菜 本帮菜 竹笋烤肉"],
          ["宵夜", "盖浇饭 砂锅 大排档 米线 满汉全席 西餐 麻辣烫 自助餐 炒面 快餐 水果 西北风 馄饨 火锅 烧烤 泡面 速冻水饺 日本料理 涮羊肉 味千拉面 肯德基 面包 扬州炒饭 自助餐 茶餐厅 海底捞 咖啡 比萨 麦当劳 兰州拉面 沙县小吃 烤鱼 海鲜 铁板烧 韩国料理 粥 快餐 萨莉亚 桂林米粉 东南亚菜 甜点 农家菜 川菜 粤菜 湘菜 本帮菜 竹笋烤肉"]
          ]
var j = 1;
var timer=null;
var time = new Date().getHours();
var t = 0;
var k = null;

window.onload = function(){
  if(time > 8 && time <= 12){
    change(0);
    }else if(time <= 14){
      change(1);
    }else if(time <= 20){
      change(2);
    }else{
      change(3);
    }
}

function change(i) {
  var foodString = JSON.parse(localStorage.getItem('food'));
  var time = new Date().getHours();
  if(localStorage.getItem('food') == null){
    var food = foodArr[i][1];
  }else{
    var food = foodString[i][1];
  }
  document.getElementById('time').innerHTML = foodArr[i][0];
  document.getElementById("food").innerHTML = food;
  k = i;
}

var setTime = function() {
  var quote1 = foodArr[t][1].split(" ");
  var a = Math.floor(Math.random()*quote1.length);
  var quote = quote1[a];
  document.getElementById('what').innerHTML = quote;
}

function fadeIn(element,speed){
  if(element.style.opacity !=1){
   var speed = speed || 30 ;
   var num = 0;
   var st = setInterval(function(){
   num++;
   element.style.opacity = num/10;
   if(num>=10)  {  clearInterval(st);  }
   },speed);
  }
}

function fadeOut(element){
  if(element.style.opacity !=0){
   var speed = speed || 30 ;
   var num = 10;
   var st = setInterval(function(){
   num--;
   element.style.opacity = num / 10 ;
   if(num<=0)  {   clearInterval(st);  }
   },speed);
  }
}


function showMenu() {
  fadeIn(menu,50);
}

function hiddenMenu() {
  fadeOut(menu,50);
  foodArr[k][1]=document.getElementById('food').value;
  console.log(foodArr[k][1])
  console.log(foodArr)
  localStorage.setItem("food",JSON.stringify(foodArr));
}

function handleStart() {
  j+=1;
  clearInterval(timer);
  if(j%2 == 0){
    document.getElementById('start').value = '停止';
    timer = setInterval(function(){
      setTime();
    },50)
  }
  if(j%2 != 0){
    document.getElementById('start').value = '换一个';
    clearInterval(timer);
  }
}

function eatHandle() {
  document.getElementById('time').innerHTML = foodArr[t][0];
  t += 1;
  if(t == 4)t = 0;
  change(t);
}
