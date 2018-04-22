# data-statistics

a interface which receive the visit information


## 接口一：insert
* **描述**：用于接收每次受访问信息
* **接口url**:http://47.106.148.23:7001/insert
* **method**:POST
* **传入（数据格式：json）**:样例
	
		{
		//		pageId:10001, //受访页面ID
		//     startTime: 695.7000000038533, // 访问的起始时间
		/     endTime: 695.700000003855, // 访问的结束时间
		//     uid: '7af83b2f-78f0-4a80-e0ad-129e592dd236', // uid
		/     isNewVisiter: false, // 是否新用户
		//     lastPageSc: '1.1.1.1', // 上一个页面的id
		//     isOpenDirect: true, // 是否通过书签或者地址栏打开？true:false
		//     referrer: 'http%3A%2F%2Flocalhost%3A8886%2F', // 跳转至当前页面的页面的URl
		//   
		}
* **返回（数据格式：json）**： 样例

		{
		"result":{"ok":1,"n":1},
		"ops"[
				{"pageId":"12345",
				"startTime":"2018-2-5",
				"endTime":"2018-2-6",
				"uid":"4464saca",
				"isNewVisiter":"false",
				"lastPageSc":"llllssl",
				"openWay":"dir",
				"referner":"nijij",
				"_id":"5adcdad25c62a340b7fa96a8"}
			],
		"insertedCount":1,
		"insertedIds":{"0":"5adcdad25c62a340b7fa96a8"}
		}

## 本地开发
* 克隆仓库
* npm install
* npm run dev

