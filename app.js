const projectsEl = document.querySelector("#projects")

const projects = [
	{
		number: "01",
		name: "Expanding Cards",
		img: "./01-Expanding Cards/snap.png",
		index: "./01-Expanding Cards/index.html"
	},
	{
		number: "02",
		name: "Progressive Steps",
		img: "./02-Progressive Steps/snap.png",
		index: "./02-Progressive Steps/index.html"
	},
	{
		number: "03",
		name: "Rotating Navigation",
		img: "./03-Rotating Navigation/snap.png",
		index: "./03-Rotating Navigation/index.html"
	},
	{
		number: "04",
		name: "Search Widget",
		img: "./04-Search Widget/snap.png",
		index: "./04-Search Widget/index.html"
	},
	{
		number: "05",
		name: "Blurry Loading",
		img: "./05-Blurry loading/snap.png",
		index: "./05-Blurry Loading/index.html"
	},
	{
		number: "06",
		name: "Scroll Animation",
		img: "./06-Scroll Animation/snap.png",
		index: "./06-Scroll Animation/index.html"
	},
	{
		number: "07",
		name: "Split Landing Page",
		img: "./07-Split Landing Page/snap.png",
		index: "./07-Split Landing Page/index.html"
	},
	{
		number: "08",
		name: "Animated Form",
		img: "./08-Animated Form/snap.png",
		index: "./08-Animated Form/index.html"
	},
	{
		number: "09",
		name: "Sound Board",
		img: "./09-Sound Board/snap.png",
		index: "./09-Sound Board/index.html"
	},
	{
		number: "10",
		name: "Dad Jokes",
		img: "./10-Dad Jokes/snap.png",
		index: "./10-Dad Jokes/index.html"
	},
	{
		number: "11",
		name: "Event KeyCodes",
		img: "./11-Event KeyCodes/snap.png",
		index: "./11-Event KeyCodes/index.html"
	},
	{
		number: "12",
		name: "FAQ Collapse",
		img: "12- FAQ Collapse/snap.png",
		index: "./12- FAQ Collapse/index.html"
	},
	{
		number: "13",
		name: "Random Choice Picker",
		img: "./13- Random Choice Picker/snap.png",
		index: "./13- Random Choice Picker/index.html"
	},
	{
		number: "14",
		name: "Animated Navigation",
		img: "./14- Animated Navigaion/snap.png",
		index: "./14- Animated Navigation/index.html"
	},
	{
		number: "15",
		name: "Counter",
		img: "./15- Counter/snap.png",
		index: "./15- Counter/index.html"
	},
	{
		number: "16",
		name: "Drink Water",
		img: "./16- Drink Water/snap.png",
		index: "./16- Drink Water/index.html"
	},
	{
		number: "17",
		name: "Movies App",
		img: "./17- Movies App/snap.png",
		index: "./17- Movies App/index.html"
	},
	{
		number: "18",
		name: "Background Slider",
		img: "./18- Background Slider/snap.png",
		index: "./18- Background Slider/index.html"
	},
	{
		number: "19",
		name: "Clock",
		img: "./19- Clock/snap.png",
		index: "./19- Clock/index.html"
	},
	{
		number: "15",
		name: "Counter",
		img: "./15- Counter/snap.png",
		index: "./15- Counter/index.html"
	},
	{
		number: "20",
		name: "Ripple Effect",
		img: "./20- Ripple Effect/snap.png",
		index: "./20- Ripple Effect/index.html"
	},
	{
		number: "21",
		name: "Drag n Drop",
		img: "./21- Drag n Drop/snap.png",
		index: "./21- Drag n Drop/index.html"
	},
	{
		number: "22",
		name: "Drawing App",
		img: "./22- Drawing App/snap.png",
		index: "./22- Drawing App/index.html"
	},
	{
		number: "23",
		name: "CSS Loader",
		img: "./23- CSS Loader/snap.png",
		index: "./23- CSS Loader/index.html"
	},
	{
		number: "24",
		name: "Content Placeholder",
		img: "./24- Content Placeholder/snap.png",
		index: "./24- Content Placeholder/index.html"
	},
	{
		number: "25",
		name: "Sticky Navbar",
		img: "./25- Sticky Navabar/snap.png",
		index: "./25- Sticky Navabar/index.html"
	},
	{
		number: "26",
		name: "Double Vertical Slider",
		img: "./26- Double Vertical Slider/snap.png",
		index: "./26- Double Vertical Slider/index.html"
	},
	{
		number: "27",
		name: "Toast Notification",
		img: "./27- Toast Notification/snap.png",
		index: "./27- Toast Notification/index.html"
	},
	{
		number: "28",
		name: "Github Profiles",
		img: "./28- Github Profiles/snap.png",
		index: "./28- Github Profiles/index.html"
	},
	{
		number: "29",
		name: "Double Heart Click",
		img: "./29- Double Heart Click/snap.png",
		index: "./29- Double Heart Click/index.html"
	},
	{
		number: "30",
		name: "Auto Text Effect",
		img: "./30- Auto Text Effect/snap.png",
		index: "./30- Auto Text Effect/index.html"
	},
	{
		number: "31",
		name: "Password Generator",
		img: "./31- Password Generator/snap.png",
		index: "./31- Password Generator/index.html"
	},
	{
		number: "32",
		name: "Good Cheap Fast Checkboxes",
		img: "./32- Good Cheap Fast checkboxes/snap.png",
		index: "./32- Good Cheap Fast checkboxes/index.html"
	},
	{
		number: "33",
		name: "Notes App",
		img: "./33- Notes App/snap.png",
		index: "./33- Notes App/index.html"
	},
	{
		number: "34",
		name: "Animated Countdown",
		img: "./34- Animated Countdown/snap.png",
		index: "./34- Animated Countdown/index.html"
	},
	{
		number: "35",
		name: "Image Carousel",
		img: "./35- Image Carousel/snap.png",
		index: "./35- Image Carousel/index.html"
	},
	{
		number: "36",
		name: "Hoverboard",
		img: "./36- Hoverboard/snap.png",
		index: "./36- Hoverboard/index.html"
	},
	{
		number: "37",
		name: "Pokedex",
		img: "./37- Pokedex/snap.png",
		index: "./37- Pokedex/index.html"
	},
	{
		number: "38",
		name: "Mobile Tab Navigation",
		img: "./38- Mobile Tab Navigation/snap.png",
		index: "./38- Mobile Tab Navigation/index.html"
	},
	{
		number: "39",
		name: "Password Strength Background",
		img: "./39- Password Strength Background/snap.png",
		index: "./39- Password Strength Background/index.html"
	},
	{
		number: "40",
		name: "3D Background Boxes",
		img: "./40- 3D Background Boxes/snap.png",
		index: "./40- 3D Background Boxes/index.html"
	},
	{
		number: "41",
		name: "Verify Account UI",
		img: "./41- Verify Account UI/snap.png",
		index: "./41- Verify Account UI/index.html"
	},
	{
		number: "42",
		name: "Live User Filter",
		img: "./42- Live User Filter/snap.png",
		index: "./42- Live User Filter/index.html"
	},
	{
		number: "43",
		name: "Feedback UI Design",
		img: "./43- Feedback UI Design/snap.png",
		index: "./43- Feedback UI Design/index.html"
	},
	{
		number: "44",
		name: "Custom Range Slider",
		img: "./44- Custom Range Slider/snap.png",
		index: "./44- Custom Range Slider/index.html"
	},
	{
		number: "45",
		name: "Netflix Navigation",
		img: "./45- Netflix Navigation/snap.png",
		index: "./45- Netflix Navigation/index.html"
	},
	{
		number: "46",
		name: "Quiz App",
		img: "./46- Quiz App/snap.png",
		index: "./46- Quiz App/index.html"
	},
	{
		number: "47",
		name: "Testimonial Box Switcher",
		img: "./47- Testimonial Box Switcher/snap.png",
		index: "./47- Testimonial Box Switcher/index.html"
	},
	{
		number: "48",
		name: "Random Image Feed",
		img: "./48- Random Image Feed/snap.png",
		index: "./48- Random Image Feed/index.html"
	},
	{
		number: "49",
		name: "Todo",
		img: "./49- Todo/snap.png",
		index: "./49- Todo/index.html"
	},
	{
		number: "50",
		name: "Insect Catch Game",
		img: "./50- Insect Catch Game/snap.png",
		index: "./50- Insect Catch Game/index.html"
	}
]

projects.forEach((project) => {
	projectEl = document.createElement("div")
	projectEl.innerHTML = `
		<span class="day">${project.number}</span>
		<img
			src="${project.img}"
			alt="${project.name}"
		/>
		<div class="content">
			<h4>${project.name}</h4>
			<a
				href="${project.index}"
				target="_blank"
				class="btn btn-primary"
				>Live Demo</a
			>
		</div>
	`

	projectsEl.appendChild(projectEl)
})
