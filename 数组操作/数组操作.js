//  这里是数组api

## 数组类型的判断

let arr = [];

typeof arr == Object
arr instanceof Array   == true 
Array.isArray(arr)    ==  true

## 实例方法

valueOf() 
返回数组的原始值类型格式，数组的valueOf返回数组本身

toString()
返回数组的字符串格式

push() 推进队尾

pop() 删除队尾

shift() 删除队首

unshift() 添加队首

join()  把全部数组以制定的分隔符进行分割，转为字符串

concat()  数组连接

reverse() 数组翻转

slice(start, end) 获取数组的一部分， 不影响原来数组， 不包含end元素

splice(start, count, newPart) 删除数组一部分，插入新的部分

sort()  排序  

map() 遍历 返回新数组，原数组不变

forEach() 遍历 只操作数据

filter() 过滤，满足条件的数组成员组成新的数组返回

some() every() ?????

reduce() 这个是用来依次处理数组的成员

arr.reduceRight((a,b)=> {
	return a + b;
}, 10 ... 累计初始值); 

indexOf() 

lastIndexOf() 











