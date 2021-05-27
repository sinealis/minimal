const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");
let viewportWidth = Window.innerWidth;

about.addEventListener("click", () => {
	const aboutBox = new WinBox({
		title: "About Me",
		width: 360,
		height: 600,
		top: 50,
		right: 50,
		bottom: 0,
		left: 50,
		mount: aboutContent,
		onfocus: function () {
			this.setBackground("#87b41c");
		},
		onblur: function () {
			this.setBackground("#666");
		}
	})
	if (viewportWidth < 640) {
		aboutBox = {
			width: 300,
			height: 500,
			top: 5,
			right: 0,
			bottom: 0,
			left: 5
		}
	}
})

contact.addEventListener("click", () => {
	const contactBox = new WinBox({
		title: "Contact Me",
		width: 360,
		height: 600,
		top: 100,
		right: 50,
		bottom: 0,
		left: 100,
		mount: contactContent,
		onfocus: function () {
			this.setBackground("#87b41c");
		},
		onblur: function () {
			this.setBackground("#666");
		}
	})
	if (viewportWidth < 500) {
		contactBox = {
			width: 300,
			height: 500,
			top: 5,
			right: 0,
			bottom: 0,
			left: 5
		}
	}
})
