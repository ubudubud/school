function init(){
	//---------------------------------------減
	$("btnMinus0").onclick = function() {
		let qty = parseInt($("qty0").value);
		if(qty>0) {
			$("qty0").value = qty - 1;

			// 计算总價
			let unitPrice = 9500; // 商品单價
			let total = $("qty0").value * unitPrice;
			// 更新总计显示元素的内容
			$("totalDisplay").textContent = "總計：" + total + "元";
		}
	}
	

	//---------------------------------------加
	$("btnPlus0").onclick = function() {
		let qty = parseInt($("qty0").value);
		$("qty0").value = qty + 1;
	}

	// 添加计算总价的部分
    $("btnPlus0").onclick = function() {
        let qty = parseInt($("qty0").value);
        let unitPrice = 9500; // 商品单價
        let total = (qty+1) * unitPrice;
        // 更新总计显示元素的内容
        $("totalDisplay").textContent = "總計：" + total + "元";

        // 增加商品数量
        $("qty0").value = qty +1;
	}
}	
window.addEventListener("load", init, false);