//import Cart from './cart.js';
import {Link} from 'react-router-dom';

export default function Home(){
return <>
 <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div class="container">
		      <a class="navbar-brand" href="index.html"><span class="flaticon-pizza-1 mr-1"></span>Pizza<br/><small>Delicous</small></a>
		      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
		        <span class="oi oi-menu"></span> Menu
		      </button>
	      <div class="collapse navbar-collapse" id="ftco-nav">
	        <ul class="navbar-nav ml-auto">
	          <li class="nav-item active"><a href="menu.html" class="nav-link">Menu</a></li>
	          <li class="nav-item"><a href="offers.html" class="nav-link">Offers</a></li>
	          <li class="nav-item"><a href="register.html" class="nav-link">Register</a></li>
						<li class="nav-item"><a href="login.html" class="nav-link">login</a></li>
	        <li> <Link to={"/cart"}><img src="/images/cart.png"/></Link></li>
	        
	        </ul>
	      </div>
		  </div>
	  </nav>
		<section class="hero">
		<div class="container d-flex align-items-center justify-content-between mt-5 bg-light">
			<div class="col-6">
				<h6 class="text-lg"><em>We cooked your desire recipe</em></h6><br/>
				<h1 class="text-6xl font-bold">Don't wait !!!!</h1>
				<button class="px-4 py-1 rounded-pill text-white font-weight-bold mt-4 bg-primary">Order Now</button>
				</div>
				<div class="col-6">
					<img src="/images/pizza-1.jpg" alt=""/>
					</div>
					</div>
			</section>
			<section class="container">
			<h5 class="text-sm font-weight-bold mt-5">All pizzas</h5>
			<div class="row">
				<div class="col-4">
					<img class="mt-3" width="250px" height="250px" src="/images/pizza-2.jpg" alt=""/>
					<div>
						<h2 class="ml-4">Greek pizza</h2>
						<span class="px-4 py-4 ml-5 text-uppercase text-xs">small</span>
						<div class="mt-3 ml-4 flex align-items-center justify-content-around">
							<span class="font-weight-bold text-lg">Rs.250</span>
							<button class="px-4 py-1 ml-3 flex align-items-center rounded-pill bg-danger"><span>+</span>
							<span>Add</span>
							</button>
							</div>
						</div>
					</div>
					<div class="col-4">
					<img class="mt-3" width="250px" height="250px" src="/images/pizza-2.jpg" alt=""/>
					<div>
						<h2 class="ml-4">Greek pizza</h2>
						<span class="px-4 py-4 ml-5 text-uppercase text-xs">small</span>
						<div class="mt-3 ml-4 flex align-items-center justify-content-around">
							<span class="font-weight-bold text-lg">Rs.250</span>
							<button class="px-4 py-1 ml-3 flex align-items-center rounded-pill bg-danger"><span>+</span>
							<span>Add</span>
							</button>
							</div>
						</div>
					</div>
					</div>
			</section>
	
	
</>
} 