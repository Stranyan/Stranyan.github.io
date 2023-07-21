// script.js
function search(engine) {
  var keyword = document.getElementById('searchInput').value;
  var searchEngines = {
    'Google': 'https://www.google.com/search?q=' + keyword,
    'Bing': 'https://www.bing.com/search?q=' + keyword,
    'Baidu': 'https://www.baidu.com/s?wd=' + keyword,
  };

  var searchUrl = searchEngines[engine];

  window.open(searchUrl, '_blank'); // 在新标签页或新窗口中打开搜索结果页面
}

function searchAll() {
  var keyword = document.getElementById('searchInput').value;
  var searchEngines = {
    'Google': 'https://www.google.com/search?q=' + keyword,
    'Bing': 'https://www.bing.com/search?q=' + keyword,
    'Baidu': 'https://www.baidu.com/s?wd=' + keyword,
  };

  for (var engine in searchEngines) {
    var searchUrl = searchEngines[engine];
    window.open(searchUrl, '_blank'); // 在新标签页或新窗口中打开搜索结果页面
  }
}

/*
function ping() {
  var ip = document.getElementById('ipInput').value;
  var startTime = new Date().getTime();

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4) {
      var endTime = new Date().getTime();
      var responseTime = endTime - startTime;
      if (this.status == 200) {
        document.getElementById('result').textContent = 'Ping ' + ip + ' 成功，响应时间为 ' + responseTime + ' 毫秒';
      } else {
        document.getElementById('result').textContent = 'Ping ' + ip + ' 失败';
      }
    }
  };

  xhr.open('GET', 'http://' + ip, true);
  xhr.send();
}
*/

function ping() {
  var ip = document.getElementById('ipInput').value;
  var img = new Image();
  var start = new Date().getTime();
  var hasFinish = false;
  img.onload = function() {
    if ( !hasFinish ) {
      hasFinish = true;
      var endTime = new Date().getTime();
      var responseTime = endTime - startTime;
      document.getElementById('result').textContent = ('Ping ' + ip + ' 成功！ ' + responseTime + ' 毫秒');
    }
  };
  img.onerror = function() {
      hasFinish = false;
      document.getElementById('result').textContent = ('Ping ' + ip + ' 失败······ ');
  };
  img.src = ip + '/?' + start;
  setTimeout(()=>{
    if(hasFinish){
      hasFinish = false
      document.getElementById('result').textContent = ('网络错误, 尝试刷新页面重试。');
    }
  },1500)
}
