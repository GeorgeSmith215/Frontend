const itemList = [
    { id: 1, name: '商品1', category: '家居百货', saleCount: 20 },
    { id: 2, name: '商品2', category: '个护美妆', saleCount: 18 },
    { id: 3, name: '商品3', category: '水乳饮品', saleCount: 33 },
    { id: 4, name: '商品4', category: '休闲零食', saleCount: 42 },
    { id: 5, name: '商品5', category: '个护美妆', saleCount: 50 },
    { id: 6, name: '商品6', category: '休闲零食', saleCount: 37 },
    { id: 7, name: '商品7', category: '休闲零食', saleCount: 48 },
    { id: 8, name: '商品8', category: '家居百货', saleCount: 79 },
    { id: 9, name: '商品9', category: '休闲零食', saleCount: 26 },
    { id: 10, name: '商品10', category: '家居百货', saleCount: 10 },
  ];
  
  function convert(itemList) {
    // 你的代码实现
    let jjbh = {
        category:'家居百货',
        items:[]
    }
    let ghmz = {
        category:'个护美妆',
        items:[]
    }
    let sryp = {
        category:'水乳饮品',
        items:[]
    }
    let xxsp = {
        category:'休闲零食',
        items:[]
    }
    itemList.map(function(value,index){
        switch(value.category){
            case "家居百货" : jjbh.items.push(value);break;
            case "个护美妆" : ghmz.items.push(value);break;
            case "水乳饮品" : sryp.items.push(value);break;
            case "休闲零食" : xxsp.items.push(value);break;
        }
    });
    function sort(obj){
		for(var i=0;i<obj.items.length-1;i++){//确定轮数
			for(var j=0;j<obj.items.length-i-1;j++){//确定每次比较的次数
				if(obj.items[j].saleCount>obj.items[j+1].saleCount){
					tem = obj.items[j];
					obj.items[j] = obj.items[j+1];
					obj.items[j+1] = tem;
				}
			}
			console.log("第"+i+"次排序"+obj.items)
		}
		console.log("最终排序："+obj.items)
    }
    sort(jjbh);
  }
  
  console.log(convert(itemList));
  /* 结果：
   * [
   *   {
   *     "category": "休闲零食",
   *     "items": [
   *       { "id": 7, "name": "商品7", "category": "休闲零食", "saleCount": 48 },
   *       { "id": 4, "name": "商品4", "category": "休闲零食", "saleCount": 42 },
   *       { "id": 6, "name": "商品6", "category": "休闲零食", "saleCount": 37 },
   *       { "id": 9, "name": "商品9", "category": "休闲零食", "saleCount": 26 }
   *     ]
   *   },
   *   {
   *     "category": "家居百货",
   *     "items": [
   *       ...
   *     ]
   *   },
   *   ...
   * ]
   */