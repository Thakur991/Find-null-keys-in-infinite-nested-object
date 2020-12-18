function infinite(obj){
	res = {};
	arr = [];
	function recursive(obj){
		for(const key in obj){
			let value = obj[key];
			if(value != null){
				if(value && value =="object"){
					recursive(value);
				}
			}else{
				arr.push(key);
			}
		}

	}
	recursive(obj);
	return arr;
}

let studentObj = {
	"firstName": "Mahi",
	"lastName": "Thakur",
	"age":25,
	"branch":null
}
infinite(studentObj);