var date=require('../common/utils/dateUtil.js');

function Detail(){}
	
Detail.prototype={
	constructor:Detail,
	say:function(msg){
		console.log(date.getDate());
		return "say list"+msg;
	}
}

module.exports = Detail;