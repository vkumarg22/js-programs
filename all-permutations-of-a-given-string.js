/*How to run
copy paste below code in console of developer tool(chrome or any)
*/

/*code*/
function permute(str,l,r){
	if(l==r){
		console.log(str);
	}else{
		for(var i=l;i<=r;i++){
			var s=swap(str,l,i);
			permute(s,l+1,r);
		}
	}
}

function swap(str,a,b){
	str=str.split("");
	var t=str[a];
	str[a]=str[b];
	str[b]=t;
	return str.join("");
}

var str="ABC"; //try with "ABCD" and other string
permute(str, 0, str.length-1);
