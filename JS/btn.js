function init(){
	$("btnMinus0").onclick = function() {
		let qty = parseInt($("qty0").value);
		if(qty>0) {
			$("qty0").value = qty - 1;

			let unitPrice = 9500; 
			let total = $("qty0").value * unitPrice;
			$("totalDisplay").textContent = "總計：" + total + "元";
		}
	}
	

	$("btnPlus0").onclick = function() {
		let qty = parseInt($("qty0").value);
		$("qty0").value = qty + 1;
	}

	
    $("btnPlus0").onclick = function() {
        let qty = parseInt($("qty0").value);
        let unitPrice = 9500; 
        let total = (qty+1) * unitPrice;
        $("totalDisplay").textContent = "總計：" + total + "元";
        $("qty0").value = qty +1;
	}
}	
window.addEventListener("load", init, false);