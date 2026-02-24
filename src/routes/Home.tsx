import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ChefCard from "../components/ChefCard.js";
import "./Home.css";

function Home() {

   // ── Scroll reveal ──
   useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-image-circle">
            <img src="/hero.png" alt="Premium Smoked Salmon" />
          </div>
          <div className="hero-sub">
          Wild-caught · Sustainably sourced · Premium quality
          </div>
          <h1>Sustainable. Traceable. Exceptional.</h1>
          <Link to="/order" className="btn btn-primary btn-hero">
            Order Now <ArrowRight size={16}/>
          </Link>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview">
        <div className="container about-container reveal">
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
          <div className="section-header reveal">
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
            <div className="product-card reveal">
              <div className="product-image">
                <img src="/king_salmon.jpg" alt="King Salmon" />
              </div>
              <h3>Benefishal King Salmon</h3>
              <p>Our signature premium smoked salmon</p>
            </div>
            <div className="product-card reveal reveal-d1">
              <div className="product-image">
                <img src="/smoked_trout.jpg" alt="Smoked Trout" />
              </div>
              <h3>Smoked Trout</h3>
              <p>Delicate and sustainably sourced trout</p>
            </div>
            <div className="product-card reveal reveal-d2">
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
          <div className="section-header chef-header reveal">
            <div className="subheading-container">
              <div className="line"></div>
              <span className="subheading">Culinary Partners</span>
            </div>
            <h2>Trusted by <em>Top Chefs</em></h2>
          </div>
          <div className="chef-card-container">
            <div className="reveal">
            <ChefCard
              image="./chef1.jpg"
              title="Chef Marco Reyes"
              description="Executive Chef · The Tidal Table, San Francisco"
              details="Chef Marco has built his reputation on coastal cuisine that honors the sea. He sources exclusively from Benefishal for their unmatched consistency and commitment to sustainability."
            />
            </div>
            <div className="reveal reveal-d1">
            <ChefCard
              image="./chef2.jpg"
              title="Chef Simone Archambault"
              description="Head Chef · Maison Bleu, New Orleans"
              details="A James Beard nominee known for her Gulf-inspired tasting menus, Simone relies on Benefishal's wild-caught selections to bring authenticity and freshness to every plate."
            />
            </div>
            <div className="reveal reveal-d2">
            <ChefCard
              image="./chef3.jpg"
              title="Chef Daniel Okafor"
              description="Chef-Owner · Harbour & Hearth, Seattle"
              details="Daniel opened Harbour & Hearth with one rule: know where your food comes from. Benefishal's traceable sourcing made the choice easy — they've been partners since day one."
            />
            </div>
            <div className="reveal reveal-d3">
            <ChefCard
              image="./chef4.jpg"
              title="Chef Yuki Tanaka"
              description="Culinary Director · Umi Omakase, New York"
              details="Precision and purity define Yuki's omakase experience. Benefishal's King Salmon is a centerpiece of her seasonal menu, prized for its clean flavor and impeccable texture."
            />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;