import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ChefCard from "../components/ChefCard";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-image-circle">
            <img src="/hero.png" alt="Premium Smoked Salmon" />
          </div>
          <h1>Sustainable. Traceable. Exceptional.</h1>
          <Link to="/order" className="btn btn-primary btn-hero">
            Order Now <ArrowRight />
          </Link>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview">
        <div className="container about-container">
          <h2>Our Philosophy</h2>
          <p>
            At Benefishal, we believe that exceptional seafood starts with
            responsible practices. We source from well-managed wild fisheries
            and ethical fish farmers to bring you the finest quality seafood
            while protecting our oceans for future generations.
          </p>
          <Link to="/origins" className="link-arrow">
            Learn Our Story →
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <div className="header-left">
              <div className="subheading-container">
                <div className="line"></div>
                <span className="subheading">The Collection</span>
              </div>
              <h2 className="heading">Featured Products</h2>
            </div>
            <Link to="/services" className="btn btn-primary">
              View All Products
            </Link>
          </div>
          <div className="product-grid">
            <div className="product-card">
              <div className="product-image">
                <img src="/king_salmon.jpg" alt="King Salmon" />
              </div>
              <h3>Benefishal King Salmon</h3>
              <p>Our signature premium smoked salmon</p>
            </div>
            <div className="product-card">
              <div className="product-image">
                <img src="/smoked_trout.jpg" alt="Smoked Trout" />
              </div>
              <h3>Smoked Trout</h3>
              <p>Delicate and sustainably sourced trout</p>
            </div>
            <div className="product-card">
              <div className="product-image">
                <img src="/alaskan_cod.jpg" alt="Wild Cod" />
              </div>
              <h3>Wild Cod</h3>
              <p>Fresh from certified sustainable fisheries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Spotlight Preview */}
      <section className="chef-preview">
        <div className="container">
          <div className="section-header chef-header">
              <div className="subheading-container">
                <div className="line"></div>
                <span className="subheading">Culinary Partners</span>
              </div>
              <h2 className="heading">Trusted by Top Chefs</h2>
          </div>
          <p className="chef-description">
            Leading restaurants across the country trust Benefishal for their seafood needs.
          </p>
          <div className="chef-card-container">
          <ChefCard />
          <ChefCard />
          <ChefCard />
          <ChefCard />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;