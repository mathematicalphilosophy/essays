class HeaderInc extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<header>
  				<div class="wrapper wrapper--narrow">
    					<center><a href="index.html"><img src="images/title.png" alt="MathematicalPhilosophy"></a></center>
  				</div>
			</header>
		`
	}
}

customElements.define('header-inc', HeaderInc)

class SidebarInc extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<div class="sidebar">
        			<div class ="menu">
        				<details class="menu-item">
          					<summary class="menu-item-summary">Menu</summary>
          						<div class="menu-item-content">
            							<ul>
              								<li><a href="index.html">Index</a></li>
              								<li><a href="essays.html">Essays</a></li>
            							</ul>
          						</div>
        				</details>
      				</div>
	  			<!--<div class ="menu">
        				<details class="menu-item">
          					<summary class="menu-item-summary">Društveni problemi</summary>
          						<div class="menu-item-content">
            							<ul>
              								<li><a href="ilustracije.html">Ilustracije problema</a></li>
            							</ul>
          						</div>
        				</details>
      				</div>-->
     			 </div>
	 	`
	}
}

customElements.define('sidebar-inc', SidebarInc)
