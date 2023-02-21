Vue.component("linkdrip-skin", {
	data: function () {
		return {
			linkdrip: this.$root.linkdrip,
			animate: false
		};
	},
	created: function () {
		var vue = this;
		setTimeout(() => {
			this.startEmblem("[data-emblem]");
			this.startAnimations();
		}, 100);
	},

	methods: {
		startAnimations: function () {
			this.animate = true;
		},
		startEmblem: function (el, str) {
			var element = document.querySelector(el);
			var text = str ? str : element.innerHTML;
			element.innerHTML = "";
			for (var i = 0; i < text.length; i++) {
				var letter = text[i];
				var span = document.createElement("span");
				var node = document.createTextNode(letter);
				var r = (360 / text.length) * i;
				var x = (Math.PI / text.length).toFixed(0) * i;
				var y = (Math.PI / text.length).toFixed(0) * i;
				span.appendChild(node);
				span.style.webkitTransform =
					"rotateZ(" + r + "deg) translate3d(" + x + "px," + y + "px,0)";
				span.style.transform =
					"rotateZ(" + r + "deg) translate3d(" + x + "px," + y + "px,0)";
				element.appendChild(span);
			}
		}
	},

	template: `<div data-container>
		<div data-profile-container :class="{ active: animate }">
				<h1 data-username v-text="linkdrip.profile.name.text"></h1>
				<div data-stream>
				<iframe 
				src="https://lvpr.tv?v=7073hkosnniban7j" 
				frameborder="0" 
				allowfullscreen 
				allow="autoplay; 
				encrypted-media; 
				picture-in-picture" 
				sandbox="allow-scripts">
				</iframe>
				 </div>
				<p data-description v-text="linkdrip.profile.description.text"></p>
		</div>
	
			
		<div data-avatar-container :class="{ active: animate }">
			<a data-avatar :href="linkdrip.profile.url" target="_blank">	
				<img data-avatar :src="linkdrip.profile.image" />
			</a>		
			
			
			<div data-emblem>
				<slot v-for="n in 1">{{'THIS NFT GIVES YOU MONEY AND POWER'+' ! '}}</slot>
			</div>
		</div>

			<ul data-links :class="{ active: animate }">
				<li data-link-container v-for="link in linkdrip.links" v-if="link.label !== ''">
					<a data-link :href="link.url" target="_blank">
						<span data-button-bg></span>
						<span data-button-label v-text="link.label"></span>
					</a>
				</li>
			</ul>
		</div>`
});

new Vue({
	el: "#app",
	data: {
		search: new URLSearchParams(window.location.search),
		visible: true,
		linktree: true,
		linkdrip: {
			skin: "SKIN_NAME",
			profile: {
				image:
					"https://gateway.ipfscdn.io/ipfs/QmcUYw9G6vDRJTi2JeQqJi2oeHV8CNBfhHQH6ekYV42Xp1/V4.gif",
				url: "https://metamodern-times.xyz/9fa5f2a580a14647865021c892d66612?v=a343fe09d2404840b05cd2f07cdf9936",
				name: {
					text: "METAMODERN TIMES"
				},
				description: {
					text:
						"Television 3.0"
				}
			},

			links: [
				{
					url: "https://www.tiktok.com/@metamoderntimes",
					label: "Tiktok"
				},
				{
					url: "https://twitter.com/MetamodernNFT",
					label: "Twitter"
				},
				{
					url: "https://t.me/METAMODERN_TIMES",
					label: "Telegram"
				},
				{
					url: "https://www.instagram.com/metamodern.nft/",
					label: "Instagram"
				},
				{
					url: "https://discord.gg/bsdPaxmQzc",
					label: "Discord"
				},
				{
					url: "https://metamodern-times.crew3.xyz",
					label: "Crew3"
				}
			]
		}
	}
});
