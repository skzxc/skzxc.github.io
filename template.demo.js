<!DOCTYPE html>
<html>
<head>
	<title>index</title>
	<meta charset="utf-8">
	<script type="text/javascript" src="http://lib.sinaapp.com/js/jquery/1.7.2/jquery.min.js"></script>
	<script type="text/javascript" src="template.js"></script>
	<style type="text/css">
		table.gridtable {
			font-family: verdana,arial,sans-serif;
			font-size:11px;
			color:#333333;
			border-width: 1px;
			border-color: #666666;
			border-collapse: collapse;
		}
		table.gridtable th {
			border-width: 1px;
			padding: 8px;
			border-style: solid;
			border-color: #666666;
			background-color: #dedede;
		}
		table.gridtable td {
			border-width: 1px;
			padding: 8px;
			border-style: solid;
			border-color: #666666;
			background-color: #ffffff;
		}
	</style>
</head>
<body>
	<div id="content"></div>
</body>
<script id="weather" type="text/html">
	<h1>{{title}}</h1>
	{{if status==1000}}
		<div>温度：{{data.wendu}}℃</div>
		<div>{{data.ganmo}}</div>
		<div>{{data.forecast.length}}日预报：</div>
		<table class="gridtable">
			<tr>
				<th>日期</th>
				<th>天气</th>
				<th>风力</th>
				<th>风向</th>
				<th>最高气温</th>
				<th>最低气温</th>
			</tr>
			{{each data.forecast as row i}}
			<tr>
				<td>{{row.date}}</td>
				<td>{{row.type}}</td>
				<td>{{row.fengli}}</td>
				<td>{{row.fengxiang}}</td>
				<td>{{row.high}}</td>
				<td>{{row.low}}</td>
			</tr>
			{{/each}}
		</table>

	{{else}}出错了{{/if}}
</script>
<script type="text/javascript">
	var city="";
	$.ajax({
		url:"http://wthrcdn.etouch.cn/weather_mini",
		type:"get",
		dataType:"jsonp",
		data:{
			city:"北京",
		},
		success:function(json){
			json.title=city+'天气预报';
			var data=json;
			var html=template('weather',data);
			$("#content").html(html);
		},
		error:function(){
			alert('error');
		}
	})
</script>
</html>
