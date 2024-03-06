const tabs = document.querySelectorAll(".fresh-source__collection-tabs li");
tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    this.classList.add("active");
  });
});
	document.querySelectorAll(".fresh-source__collection").forEach(element=>{
		element.addEventListener("click",function(e){
			document.querySelectorAll(".fresh-source__collection-content").forEach(container => {
				if (element.dataset.id === container.dataset.index ){
					container.classList.add("active-collection")
				}else{
					container.classList.remove("active-collection")
				}
				
			})
		})
	})