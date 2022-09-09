/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const navBar = document.querySelector(".navbar__menu");
const navBarLinks = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
/**
 * End Global Variables
 * Begin Main Functions
 *
 */

// build the nav
sections.forEach(sec => {
	const listItem = document.createElement("li");
	const sectionName = sec.getAttribute("data-nav");
	const sectionId = sec.getAttribute("id");

	listItem.innerHTML = `<a href="#${sectionId}"  class="menu__link ${sectionId}">${sectionName}</a>`;

	navBarLinks.appendChild(listItem);
});

// Add class 'active' to section when near top of viewport

const sectionInView = el => {
	const rect = el.getBoundingClientRect();
	return rect.top >= 0 && rect.top < 700;
};

const AddingActiveClass = () => {
	sections.forEach(sec => {
		const sectionId = sec.getAttribute("id");
		sec.classList.remove("your-active-class");
		document.querySelector(`.${sectionId}`).classList.remove("active-link");
		if (sectionInView(sec)) {
			sec.classList.add("your-active-class");
			document.querySelector(`.${sectionId}`).classList.add("active-link");
		}
	});
};

/**
 * End Main Functions
 * Begin Events
 *
 */
document.addEventListener("scroll", AddingActiveClass);

// Build menu

// Scroll to section on link click
document.querySelectorAll(".menu__link").forEach(sec =>
	sec.addEventListener("click", e => {
		e.preventDefault();

		const id = e.target.getAttribute("href");
		document.querySelector(id).scrollIntoView({ behavior: "smooth" });
	})
);

// Set sections as active
