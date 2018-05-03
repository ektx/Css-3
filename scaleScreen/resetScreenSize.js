/**
 * 随屏幕窗口调整,自动调整页面比例功能
 * @param {object} ele DOM标签
 * @param {number} width 宽度
 * @param {number} height 高度
 */
function resetScreenSize (ele, width, height) {
	let el = document.querySelector(ele)

	let setScale = () => {
		let hS = window.innerHeight / height
		let wS = window.innerWidth / width
		let styleObj = window.getComputedStyle(el)
		let ani = `transform .6s ease 0s`
		
		el.style.transform = `scaleX(${wS}) scaleY(${hS})`
		el.style.transformOrigin = `left top`
		
		if (!styleObj.transition.includes('transform')) {
			if (!styleObj.transition || styleObj.transition === 'all 0s ease 0s') {
				el.style.transition = ani
			} else {
				el.style.transition = styleObj.transition +`,`+ ani
			}
		}
	}

	let layze = null
	window.addEventListener('resize', () => {
		clearTimeout(layze)
		layze = setTimeout(setScale, 200)
	}, false)

	setScale()
}
