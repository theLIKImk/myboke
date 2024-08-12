// 获取所有需要控制显示的容器
var containers = [
	"web_container_paper",
	"web_container_paper_list",
	"web_container_paper_search",
	"web_container_paper_tage_list",
	"web_container_hello"
];
    
function showContainer(containerToShow) {
	containers.forEach(function(containerId) {
		var container = document.getElementById(containerId);
		container.style.display = (containerId === containerToShow) ? "block" : "none";
	});
}

window.onload=function(){
	console.log("Ver 0.01");

    // 初始化时显示 "hello" 容器
    showContainer("web_container_hello");
}

