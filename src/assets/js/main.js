/*
Template Name: Domiex - Admin & Dashboard Template
Author: Pixeleyez
Version: 1.0.0
File: main Js File
*/
// import flatpickr from "flatpickr";

import us from '/assets/images/flag/us.svg';
import es from '/assets/images/flag/es.svg';
import fr from '/assets/images/flag/fr.svg';
import ru from '/assets/images/flag/ru.svg';
import de from '/assets/images/flag/de.svg';
import it from '/assets/images/flag/it.svg';
import cn from '/assets/images/flag/cn.svg';
import sa from '/assets/images/flag/sa.svg';
import tr from '/assets/images/flag/tr.svg';
import il from '/assets/images/flag/il.svg';
import vn from '/assets/images/flag/vn.svg';
import nl from '/assets/images/flag/nl.svg';
import kr from '/assets/images/flag/kr.svg';
import pt from '/assets/images/flag/pt.svg';

AOS.init();




document.querySelectorAll('button[data-toast]').forEach(button => {
    button.addEventListener('click', () => {
        const toastId = button.getAttribute('data-toast');
        const toastElement = document.getElementById(toastId);
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastElement);
        toastBootstrap.show();
    });
});

(function () {
	("use strict");
	let backDropOverlay = null;
	function drawerSetting() {
		const allDrawerButtons = document.querySelectorAll("[data-drawer-target]");
		const allDrawerCloseButtons = document.querySelectorAll("[data-drawer-close]");
		const allModalButtons = document.querySelectorAll("[data-modal-target]");
		const allModalCloseButtons = document.querySelectorAll("[data-modal-close]");
		const bodyElement = document.body;
		let openDrawerId = null;
		let openModalId = null;
		if (document.getElementById("backDropDiv")) {
			backDropOverlay = document.getElementById("backDropDiv");
		} else if (backDropOverlay == null) {
			backDropOverlay = document.createElement("div");
			backDropOverlay.className = "hidden backdrop-overlay";
			backDropOverlay.id = "backDropDiv";
		}
		// Function to toggle the state of drawers and modals
		function toggleElementState(elementId, show, delay) {
			const element = document.getElementById(elementId);
			if (element) {
				if (!show) {
					element.classList.add("show");
					backDropOverlay.classList.add("hidden");
					setTimeout(() => {
						element.classList.add("hidden");
					}, 350);
				} else {
					element.classList.remove("hidden");
					setTimeout(() => {
						element.classList.remove("show");
						backDropOverlay.classList.remove("hidden");
					}, delay);
				}
				bodyElement.classList.toggle("overflow-hidden", show);
				if (show) {
					openDrawerId = elementId;
					openModalId = elementId;
				} else {
					openDrawerId = null;
					openModalId = null;
				}
			}
		}
		// Attach click event listeners to drawer buttons
		allDrawerButtons.forEach((element) => {
			const drawerId = element.getAttribute("data-drawer-target");
			if (drawerId) {
				element.addEventListener("click", function () {
					toggleElementState(drawerId, true, 0);
					document.body.appendChild(backDropOverlay);
				});
			}
		});
		// Attach click event listeners to drawer close buttons
		allDrawerCloseButtons.forEach((element) => {
			const drawerId = element.getAttribute("data-drawer-close");
			if (drawerId) {
				element.addEventListener("click", function () {
					toggleElementState(drawerId, false, 0);
				});
			}
		});
		// Attach click event listeners to modal buttons
		allModalButtons.forEach((element) => {
			const modalId = element.getAttribute("data-modal-target");
			if (modalId) {
				element.addEventListener("click", function () {
					toggleElementState(modalId, true, 200);
					var modalElement = document.getElementById(modalId);
					if (modalElement)
						modalElement.appendChild(backDropOverlay);
				});
			}
		});
		// Attach click event listeners to modal close buttons
		allModalCloseButtons.forEach((element) => {
			const modalId = element.getAttribute("data-modal-close");
			if (modalId) {
				element.addEventListener("click", function () {
					toggleElementState(modalId, false, 200);
				});
			}
		});
		// Attach click event listener to backdrop-overlay
		backDropOverlay?.addEventListener("click", function () {
			if (openDrawerId)
				toggleElementState(openDrawerId, false, 0);
			if (openModalId)
				toggleElementState(openModalId, false, 200);
		});
	}

	function initFlatpickr() {
		const flatpickrExamples = document.querySelectorAll("[data-provider]");
		flatpickrExamples.forEach((item) => {
			const provider = item.getAttribute("data-provider");

			if (provider === "flatpickr")
				configureFlatpickr(item);
			else if (provider === "timepickr")
				configureTimePicker(item);
			else
				return; // Early return if provider is not supported
		});
	}

	function configureFlatpickr(item) {
		const dateData = getDatePickerOptions(item);
		flatpickr(item, dateData);
	}

	function configureTimePicker(item) {
		const timeData = getTimepickerOptions(item);
		setTimeout(() => {
			flatpickr(item, timeData);
		}, 750);
	}

	function getDatePickerOptions(item) {
		const attributes = item.attributes;
		const dateData = {};

		// Handle common options
		dateData.dateFormat = attributes["data-date-format"]?.value.toString() || "";
		if (attributes["data-enable-time"]) {
			dateData.enableTime = true;
			dateData.dateFormat += " H:i";
		}

		if (attributes["data-altFormat"]) {
			dateData.altInput = true;
			dateData.altFormat = attributes["data-altFormat"].value.toString();
		}

		if (attributes["data-minDate"])
			dateData.minDate = attributes["data-minDate"].value.toString();

		if (attributes["data-maxDate"])
			dateData.maxDate = attributes["data-maxDate"].value.toString();

		if (attributes["data-default-date"])
			dateData.defaultDate = attributes["data-default-date"].value.toString();

		if (attributes["data-multiple-date"])
			dateData.mode = "multiple";

		if (attributes["data-range-date"])
			dateData.mode = "range";

		if (attributes["data-inline-date"]) {
			dateData.inline = true;
			dateData.defaultDate = attributes["data-default-date"]?.value.toString();
		}

		if (attributes["data-disable-date"])
			dateData.disable = attributes["data-disable-date"].value.split(",");

		if (attributes["data-week-number"])
			dateData.weekNumbers = true;

		return dateData;
	}

	function getTimepickerOptions(item) {
		const attributes = item.attributes;
		const timeData = {};
		timeData.enableTime = true;
		timeData.noCalendar = true;
		timeData.dateFormat = "H:i";

		if (attributes["data-time-hrs"])
			timeData.time_24hr = true;

		if (attributes["data-min-time"])
			timeData.minTime = attributes["data-min-time"].value.toString();

		if (attributes["data-max-time"])
			timeData.maxTime = attributes["data-max-time"].value.toString();

		if (attributes["data-default-time"])
			timeData.defaultDate = attributes["data-default-time"].value.toString();

		if (attributes["data-time-inline"]) {
			timeData.inline = true;
			timeData.defaultDate = attributes["data-time-inline"].value.toString();
		}
		return timeData;
	}

	function init() {
		drawerSetting();
		initFlatpickr();
	}

	setTimeout(() => {
		init();
	}, 0);

	window.drawerSetting = drawerSetting;
})();

// function sidebarMenu() {
// 	return {
// 		menu: menu,
// 		filteredMenu: menu,
// 		activeUrl: window.location.pathname,
// 		init() {
// 			this.fetchMenu();
// 			window.addEventListener('search-data', (event) => {
// 				this.filterData(event.detail.term);
// 			});
// 		},
// 		filterData(term) {
// 			if (term) {
// 				this.filteredMenu = this.menu.filter(item =>
// 					(item.title && item.title.toLowerCase().includes(term.toLowerCase())) ||
// 					(item.children && item.children.some(child => child.title.toLowerCase().includes(term.toLowerCase())))
// 				);
// 			} else
// 				this.filteredMenu = this.menu;
// 			this.fetchMenu();
// 		},
// 		chunkArray(array, chunkSize) {
// 			const chunks = [];
// 			for (let i = 0; i < array.length; i += chunkSize) {
// 				chunks.push(array.slice(i, i + chunkSize));
// 			}
// 			return chunks;
// 		},
// 		fetchMenu() {
// 			setTimeout(() => {
// 				lucide.createIcons();
// 			}, 0);
// 		}
// 	}
// }

document.addEventListener('DOMContentLoaded', () => {
	// Initialize Alpine.js
	document.addEventListener('alpine:init', () => {
		Alpine.data('dropdownBehavior', dropdownBehavior);
		Alpine.data('layoutSettings', layoutSettings);
		// Alpine.data('sidebarMenu', sidebarMenu);
	});
})

const path = window.location.pathname.replace(/^\/|\/$/g, '');
const currentPath = path !== '' ? path : 'index.html';

function dropdownBehavior() {
	return {
		open: false,
		parent: null,
		toggle() {
			this.open = !this.open;
			if (this.open)
				this.calculatePosition();
		},
		toggleMenu() {
			if (!this.open)
				this.calculatePosition();
			setTimeout(() => {
				this.open = !this.open;
			}, 50);
		},
		close() {
			this.open = false;
		},
		getOpen(e) {
			if (this.$data.sidebar === 'default' && this.$data.layout !== 'horizontal') {
				if (!this.$refs.button.contains(e.target))
					return false;
			}
			return false;
		},
		getTopRight(buttonRect, dropdown) {
			let data = {
				left: 0,
				top: 0
			};
			if (window.innerWidth < buttonRect.right + dropdown.offsetWidth) {
				data.top = buttonRect.top;
				data.left = buttonRect.left - dropdown.clientWidth;
			}
			if (window.innerHeight < buttonRect.top + dropdown.offsetHeight) {
				data.top = (buttonRect.bottom - dropdown.offsetHeight) - buttonRect.height;
				data.left = buttonRect.right - dropdown.clientWidth;
			}
			return data;
		},
		getLeft(buttonRect, dropdown) {
			let data = {
				left: 0,
				top: 0
			};
			if (window.innerWidth < buttonRect.right + dropdown.offsetWidth) {
				data.top = buttonRect.bottom;
				data.left = buttonRect.right - dropdown.clientWidth;
			}
			if (window.innerHeight < buttonRect.top + dropdown.offsetHeight) {
				data.top = (buttonRect.bottom - dropdown.offsetHeight) - buttonRect.height;
				data.left = buttonRect.right - dropdown.clientWidth;
			}
			return data;
		},
		getRightLeft(buttonRect, dropdown) {
			let data = {
				left: 0,
				top: 0
			};
			if (buttonRect.x - dropdown.offsetWidth < 0) {
				data.top = buttonRect.bottom;
				data.left = buttonRect.left;
			}
			if (window.innerHeight < buttonRect.top + dropdown.offsetHeight) {
				data.top = buttonRect.top - dropdown.clientHeight;
				data.left = buttonRect.left;
			}
			return data;
		},
		calculatePosition() {
			setTimeout(() => {
				if (!this.$refs.button || !this.$refs.dropdown) {
					return false;
				}
				const buttonRect = this.$refs.button.parentElement ? this.$refs.button.parentElement.getBoundingClientRect() : this.$refs.button.getBoundingClientRect();
				const dropdown = this.$refs.dropdown;
				const position = dropdown.getAttribute("dropdown-position") || 'left';
				dropdown.classList.remove("hidden");
				let left = 0;
				let top = 0;

				switch (position) {
					case 'left':
						const data = this.getLeft(buttonRect, dropdown);
						if (data.top > 0 || data.left > 0) {
							top = data.top;
							left = data.left;
						}
						if (top == 0 && left == 0) {
							top = buttonRect.bottom;
							left = buttonRect.left;
						}
						break;
					case 'right':
						const data1 = this.getRightLeft(buttonRect, dropdown);
						if (data1.top > 0 || data1.left > 0) {
							top = data1.top;
							left = data1.left;
						}
						if (top == 0 && left == 0) {
							top = buttonRect.bottom;
							left = buttonRect.right - dropdown.clientWidth;
						}
						break;
					case 'right-top':
						const data2 = this.getTopRight(buttonRect, dropdown);
						if (data2.top > 0 || data2.left > 0) {
							top = data2.top;
							left = data2.left;
						}
						if (top == 0 && left == 0) {
							top = buttonRect.top;
							left = buttonRect.right;
						}
						break;
					case 'left-top':
						const data3 = this.getRightLeft(buttonRect, dropdown);
						if (data3.top > 0 || data3.left > 0) {
							top = data3.top;
							left = data3.left;
						}
						if (top == 0 && left == 0) {
							top = buttonRect.top;
							left = buttonRect.left - dropdown.offsetWidth;
						}
						break;
					default:
						const data4 = this.getLeft(buttonRect, dropdown);
						if (data4.top > 0 || data4.left > 0) {
							top = data4.top;
							left = data4.left;
						}
						if (top == 0 && left == 0) {
							top = buttonRect.bottom;
							left = buttonRect.left;
						}
						break;
				}
				dropdown.style.left = `${Math.max(0, left)}px`;
				dropdown.style.top = `${Math.max(0, top)}px`;
			}, 50);
		},
		scrollToActive() {
			setTimeout(() => {
				const container = document.querySelector('#sidebar');
				const activeElements = container.getElementsByClassName('active');

				(activeElements.length > 0)
					? activeElements[activeElements.length - 1].scrollIntoView({ behavior: 'smooth', block: 'center' })
					: console.log('No active element found')
			}, 0);
		},
		initializeDropdownActive() {
			if (currentPath) {
				setTimeout(() => {
					const matchingLink = this.$refs?.dropdown?.querySelector(`a[href="${currentPath}"]`);
					if (matchingLink) {
						matchingLink.classList.add('active');
						this.$refs?.button.classList.add('active');
						if (this.layout !== 'horizontal' && this.sidebar !== 'small')
							this.open = true;
						this.calculatePosition();
						let parentElement = matchingLink.closest('.dropdown-menu');
						while (parentElement && parentElement !== this.$refs.dropdown) {
							parentElement?.click();
							parentElement = parentElement.parentElement.closest('.dropdown-menu');
						}
						this.scrollToActive();
					} else {
						const matchingLinkButton = this.$refs?.navLink;
						if (matchingLinkButton && matchingLinkButton.getAttribute('href') == currentPath) {
							matchingLinkButton.classList.add('active');
							this.scrollToActive();
						}
					}
				}, 100);
			}
		},
	};
}

function layoutSettings() {
	return {
		layout: localStorage.getItem('layout') || 'default', // ['default', 'horizontal', 'modern', 'boxed', 'semibox']
		navType: localStorage.getItem('navType') ?? 'default', // ['default', 'floating', 'boxed', 'pattern']
		contentWidth: localStorage.getItem('contentWidth') || 'default', //  ['default', 'fluid']
		layoutMode: localStorage.getItem('layoutMode') || 'light', // ['light', 'dark', 'auto', 'black-white']
		curLayoutMode: localStorage.getItem('layoutMode') || 'light', // ['light', 'dark', 'auto', 'black-white']
		sidebar: localStorage.getItem('sidebar') || 'default', // ['default', 'small', 'medium']
		sidebarColors: localStorage.getItem('sidebarColors') || 'light', // ['light', 'purple', 'dark', 'brand', 'sky']
		layoutDir: localStorage.getItem('layoutDir') || 'ltr', // ['ltr', 'rtl']
		primaryColors: localStorage.getItem('colors') || 'default', // ['default', 'purple', 'green', 'orange']
		darkModeColors: localStorage.getItem('darkModeColors') || '', // ['', 'gray', 'stone']
		backdrop: document.getElementById('backdrop'),
		sidebarMainDiv: document.getElementById('main-sidebar'),
		languages: {},
		scrollableDiv: document.getElementById('main-sidebar')?.querySelector('.simplebar-content-wrapper'),

		// language translation data
		currentLang: localStorage.getItem('language') || 'en', // Default language
		languageData: {},

		navTypeOld: this.navType || 'default',
		sidebarOld: this.sidebar || 'default',
		sidebarColorsOld: this.sidebarColors || 'light',
		darkModeColorsOld: this.darkModeColors || '',

		updateLanguage(lang) {
			if (lang !== this.currentLang) {
				this.currentLang = lang;
				localStorage.setItem('language', lang);
				this.fetchLanguage();
			}
			this.open = false;
		},
		updateAttributes(isResize = null) {
			const documentElement = document.documentElement;
			documentElement.setAttribute('data-layout', this.layout);
			documentElement.setAttribute('data-content-width', this.contentWidth);
			documentElement.setAttribute('data-bs-theme', this.layoutMode);
			documentElement.setAttribute('data-sidebar-colors', this.sidebarColors);
			(this.sidebar) ? documentElement.setAttribute('data-sidebar', this.sidebar) : documentElement.removeAttribute('data-sidebar', this.sidebar);
			(this.navType) ? documentElement.setAttribute('data-nav-type', this.navType) : documentElement.removeAttribute('data-nav-type');
			documentElement.setAttribute('dir', this.layoutDir);
			documentElement.setAttribute('data-colors', this.primaryColors);
			if (this.darkModeColors) documentElement.classList.add(this.darkModeColors);
			if (this.scrollableDiv) this.scrollableDiv.addEventListener('wheel', (e) => { this.handleMenuScroll(e, this) });

			// Save settings to localStorage
			localStorage.setItem('layout', this.layout);
			localStorage.setItem('navType', this.navType);
			localStorage.setItem('contentWidth', this.contentWidth);
			localStorage.setItem('layoutMode', this.layoutMode);
			localStorage.setItem('sidebar', this.sidebar);
			localStorage.setItem('layoutDir', this.layoutDir);
			localStorage.setItem('colors', this.primaryColors);
			if (isResize)
				setTimeout(() => { window.dispatchEvent(new Event('resize')); }, 0);
		},
		handleMenuScroll(event, layout) {
			event.preventDefault();
			if (layout.layout === "horizontal" && layout.scrollableDiv) {
				layout.scrollableDiv.scrollBy({
					left: event.deltaY * 3, // Use the vertical scroll delta to scroll horizontally
					behavior: 'smooth'  // Apply smooth scrolling
				});
			} else
				layout.scrollableDiv.scrollBy({
					top: event.deltaY * 3, // Use the vertical scroll delta to scroll vertically
					behavior: 'smooth'  // Apply smooth scrolling
				});
		},
		setLayout(newLayout) {
			this.layout = newLayout;
			if (newLayout === 'horizontal') {
				this.navTypeOld = this.navType || 'default';
				this.sidebarOld = this.sidebar || 'default';
				this.sidebarColorsOld = this.sidebarColors || 'light';
				this.navType = '';
				this.sidebar = '';
			} else if (newLayout === 'default') {
				if (this.navType != '') this.navTypeOld = this.navType;
				this.navType = '';
				this.sidebar = (this.sidebar != '') ? this.sidebar : this.sidebarOld;
				this.sidebarColors = (this.sidebarColorsOld != '') ? this.sidebarColorsOld : this.sidebarColors;
			} else if (newLayout === 'modern') {
				this.navType = (this.navType != '') ? this.navType : this.navTypeOld;
				this.sidebar = (this.sidebar != '') ? this.sidebar : this.sidebarOld;
				this.sidebarColors = (this.sidebarColorsOld != '') ? this.sidebarColorsOld : this.sidebarColors;
			} else if (newLayout === 'boxed') {
				if (this.navType != '') this.navTypeOld = this.navType;
				this.navType = '';
				this.sidebar = (this.sidebar != '') ? this.sidebar : this.sidebarOld;
				this.sidebarColors = (this.sidebarColorsOld != '') ? this.sidebarColorsOld : this.sidebarColors;
			} else if (newLayout === 'semibox') {
				if (this.navType != '') this.navTypeOld = this.navType;
				this.navType = '';
				this.sidebar = (this.sidebar != '') ? this.sidebar : this.sidebarOld;
				this.sidebarColors = (this.sidebarColorsOld != '') ? this.sidebarColorsOld : this.sidebarColors;
			} else {
				this.navType = this.navTypeOld;
				this.sidebar = this.sidebarOld;
			}
			this.updateAttributes();
		},

		setNavigation(newNavType) {
			this.navType = newNavType;
			this.updateAttributes();
		},
		setContentWidth(newContentWidth) {
			this.contentWidth = newContentWidth;
			this.updateAttributes();
		},
		setSidebar(newSidebar) {
			this.sidebar = newSidebar;
			this.updateAttributes();
		},
		setDirection(newLayoutDir) {
			this.layoutDir = newLayoutDir;
			this.updateAttributes();
		},
		setLayoutMode(newLayoutMode) {
			this.layoutMode = newLayoutMode;
			this.curLayoutMode = newLayoutMode;
			localStorage.setItem('curLayoutMode', newLayoutMode)
			if (newLayoutMode == 'auto') {
				const colorSchemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
				if (colorSchemeMediaQuery.matches) {
					newLayoutMode = "dark";
					this.layoutMode = "dark";
				}
			}
			if (newLayoutMode !== 'dark') {
				this.darkModeColors = '';
				if (this.darkModeColorsOld)
					document.documentElement.classList.remove(this.darkModeColorsOld);
				this.sidebarColors = this.sidebarColorsOld;
			} else {
				this.sidebarColorsOld = this.sidebarColors;
				this.sidebarColors = "light";
				if (this.darkModeColorsOld)
					document.documentElement.classList.add(this.darkModeColorsOld); // manage reset time remove color class
			}
			this.updateAttributes(true);
		},
		setDarkModeColors(newDarkModeColors) { // only for dark modes
			if (this.darkModeColorsOld) document.documentElement.classList.remove(this.darkModeColorsOld);
			this.darkModeColorsOld = newDarkModeColors;
			this.darkModeColors = newDarkModeColors;
			this.updateAttributes(true);
		},
		setSidebarColors(newSidebarColors) {
			this.sidebarColors = newSidebarColors;
			this.updateAttributes();
		},
		setPrimaryColors(newColors) {
			this.primaryColors = newColors;
			this.updateAttributes(true);
		},
		resetAttributes() {
			this.layout = 'default';
			this.navType = 'default';
			this.contentWidth = 'default';
			this.layoutMode = 'light';
			this.sidebar = 'default';
			this.sidebarColors = 'light';
			this.layoutDir = 'ltr';
			this.primaryColors = 'default';
			this.darkModeColors = '';
			this.updateAttributes();
		},
		toggleSidebar(isResize = false) {
			const isSmallScreen = window.innerWidth < 1024;
			if (isResize) {
				this.backdrop.classList.toggle('hidden', isSmallScreen);
				this.sidebarMainDiv.classList.toggle('hidden', isSmallScreen);
			} else {
				if (isSmallScreen) {
					const isHidden = this.backdrop.classList.contains('hidden');
					this.backdrop.classList.toggle('hidden', !isHidden);
					this.sidebarMainDiv.classList.toggle('hidden', !isHidden);
				} else {
					this.sidebar = (this.sidebar === 'small') ? 'default' : 'small';
					this.updateAttributes();
				}
			}
		},
		getFlag() {
			let flag = this.languages[this.currentLang].flag;
			if (flag) return flag;
			return this.languages['en'].flag;
		},
		fetchLanguage() {
			this.languages = {
				en: { id: 'us', flag: us, name: 'English' },
				es: { id: 'es', flag: es, name: 'Spanish' },
				fr: { id: 'fr', flag: fr, name: 'French' },
				ru: { id: 'ru', flag: ru, name: 'Russian' },
				de: { id: 'de', flag: de, name: 'German' },
				it: { id: 'it', flag: it, name: 'Italian' },
				zh: { id: 'cn', flag: cn, name: 'Chinese' },
				ar: { id: 'sa', flag: sa, name: 'Arabic' },
				tr: { id: 'tr', flag: tr, name: 'Turkish' },
				he: { id: 'il', flag: il, name: 'Hebrew' },
				vi: { id: 'vn', flag: vn, name: 'Vietnamese' },
				nl: { id: 'nl', flag: nl, name: 'Dutch' },
				ko: { id: 'kr', flag: kr, name: 'Korean' },
				pt: { id: 'pt', flag: pt, name: 'Portuguese' },
			}
			return fetch(`./assets/lang/${this.currentLang}.json`)
				.then(response => response.json())
				.then(data => {
					this.languageData = data;
					return data;
				})
				.catch(error => console.log('Error loading menu:', error));
		},
		initialize() {
			this.fetchLanguage();
			this.updateAttributes(true);
			const backdrop = document.querySelector('#backdrop');
			if (backdrop) {
				let resizeTimeout;
				window.addEventListener('resize', () => {
					if (resizeTimeout) clearTimeout(resizeTimeout);
					resizeTimeout = setTimeout(() => {
						this.toggleSidebar(true);
					}, 150);
				});
			}
		}
	};
}

// Initialize Alpine.js
window.onload = function () {
	window.Alpine.start();
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))