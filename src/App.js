import React, { useState } from 'react';
import { ShoppingCart, Search, X, Heart, ChevronDown, Filter, CreditCard, Wallet } from 'lucide-react';
import './App.css';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('electronics');
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState(50000);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [sizeModal, setSizeModal] = useState(null);
  const [selectedSize, setSelectedSize] = useState('M');

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: '💳' },
    { id: 'upi', name: 'UPI', icon: '📱' },
  ];

  const products = {
    electronics: [
      { id: 1, name: 'iPhone 15 Pro Max', price: 140000, image: 'Iphone.jpg', rating: 4.9, reviews: 2543 },
      { id: 2, name: 'Samsung Galaxy S24 Ultra', price: 90000, image: 'samsung.jpg', rating: 4.8, reviews: 1876 },
      { id: 3, name: 'MacBook Pro 16"', price: 123000, image: 'macbook.jpg', rating: 4.9, reviews: 1234 },
      { id: 4, name: 'Sony WH-1000XM5', price: 30000, image: 'sony.jpg', rating: 4.9, reviews: 3421 },
      { id: 5, name: 'iPad Pro 12.9"', price: 80499, image: 'Ipad.jpg', rating: 4.8, reviews: 1543 },
      { id: 6, name: 'Apple Watch Series 9', price: 21000, image: 'applw watch.jpg', rating: 4.8, reviews: 2341 },
      { id: 7, name: 'Dell XPS 15', price: 165000, image: 'Dell XPS 15.jpg', rating: 4.7, reviews: 987 },
      { id: 8, name: 'Samsung Galaxy Tab S9', price: 70000, image: 'samsung galaxy tab s9.jpg', rating: 4.7, reviews: 876 },
      { id: 9, name: 'Sony A6700 Camera', price: 85000, image: 'camera.jpg', rating: 4.9, reviews: 654 },
      { id: 10, name: 'Apple AirPods Pro', price: 23000, image: 'airpods.jpg', rating: 4.8, reviews: 2156 },
      { id: 11, name: 'Nintendo Switch OLED', price: 34000, image: 'OLED.jpg', rating: 4.7, reviews: 3210 },
      { id: 12, name: 'Anker 737 Power Bank', price: 3000, image: 'powerbank.jpg', rating: 4.8, reviews: 5432 },
    ],
    fashion: [
      { id: 26, name: 'Nike Air Jordan 1', price: 10000, image: 'nike.jpg', rating: 4.9, reviews: 4321 },
      { id: 27, name: 'Designer Jeans', price: 3000, image: 'jean.jpg', rating: 4.9, reviews: 2654 },
      { id: 28, name: 'Leather Jacket', price: 2500, image: 'leatherjacket.jpg', rating: 4.8, reviews: 987 },
      { id: 29, name: 'Premium T-Shirt', price: 1200, image: 'T-shirt.jpg', rating: 4.8, reviews: 5432 },
      { id: 30, name: 'Designer Handbag', price: 5000, image: 'handbag.jpg', rating: 4.9, reviews: 1876 },
      { id: 31, name: 'Sunglasses UV Pro', price: 1549, image: 'Glass.jpg', rating: 4.9, reviews: 2143 },
      { id: 32, name: 'Casual Sneakers', price: 2000, image: 'sneakers.jpg', rating: 4.7, reviews: 3210 },
      { id: 33, name: 'Shirt for mens', price: 600, image: 'dress.jpg', rating: 4.8, reviews: 1987 },
      { id: 34, name: 'Wool Winter Coat', price: 650, image: 'wintercoat.jpg', rating: 4.7, reviews: 876 },
      { id: 35, name: 'Cotton Hoodie', price: 1000, image: 'hoodie.jpg', rating: 4.8, reviews: 3210 },
      { id: 36, name: 'Formal Dress Shirt', price: 999, image: 'formalshirt.jpg', rating: 4.8, reviews: 1876 },
      { id: 37, name: 'Silk Saree', price: 2000, image: 'saree.jpg', rating: 4.9, reviews: 1234 },
    ],
    food: [
      { id: 51, name: 'Hyderabadi Biryani', price: 349, image: 'hb.jpg', rating: 4.9, reviews: 6543 },
      { id: 52, name: 'Butter Chicken', price: 399, image: 'cb.jpg', rating: 4.9, reviews: 5432 },
      { id: 53, name: 'Margherita Pizza', price: 349, image: 'pizza.jpg', rating: 4.8, reviews: 5876 },
      { id: 54, name: 'Sushi Roll Set', price: 599, image: 'suchi.jpg', rating: 4.9, reviews: 2654 },
      { id: 55, name: 'Grilled Steak', price: 799, image: 'Steak.jpg', rating: 4.9, reviews: 1876 },
      { id: 56, name: 'Chocolate Cake', price: 249, image: 'cc.jpg', rating: 4.9, reviews: 4876 },
      { id: 57, name: 'Paneer Tikka', price: 299, image: 'paneer.jpg', rating: 4.8, reviews: 4321 },
      { id: 58, name: 'Ramen Noodles', price: 349, image: 'ramen.jpg', rating: 4.8, reviews: 3210 },
      { id: 59, name: 'Tandoori Chicken', price: 449, image: 'Tandoori.jpg', rating: 4.8, reviews: 3456 },
      { id: 60, name: 'Fish Curry', price: 399, image: 'fish.jpg', rating: 4.8, reviews: 2134 },
      { id: 61, name: 'Cheesecake', price: 299, image: 'cheese.jpg', rating: 4.9, reviews: 3210 },
    ],
  };

  const categories = [
    { id: 'electronics', name: 'Electronics' },
    { id: 'fashion', name: 'Fashion'},
    { id: 'food', name: 'Food' },
  ];

  const displayProducts = products[activeCategory];
  const filteredProducts = displayProducts.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) && p.price <= priceFilter
  );

  const addToCart = (product) => {
    if (activeCategory === 'fashion') {
      setSizeModal(product);
    } else {
      const existing = cartItems.find(item => item.id === product.id);
      if (existing) {
        setCartItems(cartItems.map(item => item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item));
      } else {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
      }
    }
  };

  const confirmAddToCart = (product, size) => {
    const existing = cartItems.find(item => item.id === product.id && item.size === size);
    if (existing) {
      setCartItems(cartItems.map(item => 
        item.id === product.id && item.size === size 
          ? { ...item, quantity: (item.quantity || 1) + 1 } 
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1, size }]);
    }
    setSizeModal(null);
  };

  const removeFromCart = (id, size) => {
    setCartItems(cartItems.filter(item => !(item.id === id && (size ? item.size === size : true))));
  };

  const updateQuantity = (id, qty, size) => {
    if (qty <= 0) removeFromCart(id, size);
    else setCartItems(cartItems.map(item => 
      item.id === id && (size ? item.size === size : true)
        ? { ...item, quantity: qty } 
        : item
    ));
  };

  const addToWishlist = (product) => {
    const existing = wishlistItems.find(item => item.id === product.id);
    if (!existing) {
      setWishlistItems([...wishlistItems, product]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const isInWishlist = (productId) => wishlistItems.some(item => item.id === productId);

  const moveToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const handlePayment = (method) => {
    alert(`Payment initiated with ${method}. Total: ₹${totalPrice.toFixed(0)}`);
    setCartItems([]);
    setCartOpen(false);
    setPaymentOpen(false);
  };
  const getHeroBackground = () => {
    if (activeCategory === 'electronics') {
      return ' url("bg.jpg")'; 
    } else if (activeCategory === 'fashion') {
      return ' url("bg.jpg")'; 
    } else {
      return ' url("bg.jpg")'; 
    }
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <div className="logo">ONEFORALL</div>
          </div>

          <div className="search-wrapper">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="navbar-right">
            <button className="icon-btn" onClick={() => setWishlistOpen(!wishlistOpen)}>
              <Heart size={24} />
              {wishlistItems.length > 0 && <span className="badge">{wishlistItems.length}</span>}
            </button>
            
            <div className="cart-wrapper">
              <button className="icon-btn cart-btn" onClick={() => setCartOpen(!cartOpen)}>
                <ShoppingCart size={24} />
                {totalItems > 0 && <span className="badge">{totalItems}</span>}
              </button>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setSearchQuery(''); }}
              className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.emoji} {cat.name}
            </button>
          ))}
        </div>
      </header>

      {/* HERO */}
      <section className="hero" style={{
        backgroundImage: getHeroBackground(),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Limited Time Offer</h1>
          <p>Up to 50% OFF on selected {categories.find(c => c.id === activeCategory).name}</p>
          <button className="hero-btn">Shop Now</button>
        </div>
        <div className="hero-emoji">{categories.find(c => c.id === activeCategory).emoji}</div>
      </section>

      {/* MAIN CONTENT */}
      <main className="main-container">
        <aside className="sidebar">
          <div className="filter-section">
            <h3 className="filter-title">Filters</h3>
            
            <div className="filter-group">
              <label className="filter-label">Price: ₹{priceFilter.toLocaleString()}</label>
              <input
                type="range"
                min="0"
                max="300000"
                value={priceFilter}
                onChange={(e) => setPriceFilter(parseInt(e.target.value))}
                className="price-slider"
              />
            </div>
          </div>
        </aside>

        <div className="products-section">
          <div className="section-header">
            <h2>{searchQuery ? `Search Results (${filteredProducts.length})` : `${categories.find(c => c.id === activeCategory).name} (${filteredProducts.length})`}</h2>
            <div className="sort-btn">
              <Filter size={18} />
              Sort by
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="no-products">
              <p>No products found</p>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    <button 
                      className={`wishlist-btn ${isInWishlist(product.id) ? 'liked' : ''}`}
                      onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)}
                    >
                      <Heart size={20} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
                    </button>
                    <button 
                      className="quick-add-btn"
                      onClick={() => addToCart(product)}
                    >
                      +
                    </button>
                  </div>
                  
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    
                    <div className="rating">
                      <span className="stars">⭐ {product.rating}</span>
                      <span className="reviews">({product.reviews.toLocaleString()})</span>
                    </div>

                    <div className="product-footer">
                      <span className="price">₹{product.price.toLocaleString()}</span>
                      <button 
                        className="add-btn"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* SIZE MODAL FOR FASHION */}
      {sizeModal && (
        <>
          <div className="modal-overlay" onClick={() => setSizeModal(null)} />
          <div className="size-modal">
            <div className="size-modal-header">
              <h3>Select Size</h3>
              <button className="close-btn" onClick={() => setSizeModal(null)}>
                <X size={24} />
              </button>
            </div>
            <div className="size-modal-content">
              <p className="product-name-modal">{sizeModal.name}</p>
              <div className="sizes-grid">
                {sizes.map(size => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="size-modal-footer">
              <button 
                className="confirm-size-btn"
                onClick={() => confirmAddToCart(sizeModal, selectedSize)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </>
      )}

      {/* WISHLIST SIDEBAR */}
      {wishlistOpen && (
        <>
          <div className="cart-overlay" onClick={() => setWishlistOpen(false)} />
          
          <div className="cart-panel wishlist-panel">
            <div className="cart-header">
              <h2>My Wishlist </h2>
              <button className="close-btn" onClick={() => setWishlistOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="cart-items">
              {wishlistItems.length === 0 ? (
                <div className="empty-cart">
                  <div className="empty-emoji"></div>
                  <p>Your wishlist is empty</p>
                </div>
              ) : (
                wishlistItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      <p className="cart-item-price">₹{item.price.toLocaleString()}</p>
                    </div>
                    <div className="wishlist-actions">
                      <button 
                        className="move-to-cart-btn"
                        onClick={() => moveToCart(item)}
                        title="Move to Cart"
                      >
                        <ShoppingCart size={18} />
                      </button>
                      <button 
                        className="remove-btn"
                        onClick={() => removeFromWishlist(item.id)}
                      >
                        <X size={18} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </>
      )}

      {/* CART SIDEBAR */}
      {cartOpen && (
        <>
          <div className="cart-overlay" onClick={() => setCartOpen(false)} />
          
          <div className="cart-panel">
            <div className="cart-header">
              <h2>Shopping Cart</h2>
              <button className="close-btn" onClick={() => setCartOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="cart-items">
              {cartItems.length === 0 ? (
                <div className="empty-cart">
                  <div className="empty-emoji">🛒</div>
                  <p>Your cart is empty</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={`${item.id}-${item.size || 'single'}`} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      {item.size && <p className="cart-item-size">Size: {item.size}</p>}
                      <p className="cart-item-price">₹{item.price}</p>
                      
                      <div className="quantity-control">
                        <button onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1, item.size)}>−</button>
                        <span>{item.quantity || 1}</span>
                        <button onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1, item.size)}>+</button>
                      </div>
                    </div>
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id, item.size)}
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="cart-summary">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>₹{totalPrice.toFixed(0)}</span>
                </div>
                <div className="summary-row">
                  <span>Delivery</span>
                  <span className="free">Free</span>
                </div>
                <div className="summary-total">
                  <span>Total</span>
                  <span>₹{totalPrice.toFixed(0)}</span>
                </div>
                
                <button 
                  className="checkout-btn"
                  onClick={() => setPaymentOpen(true)}
                >
                  Proceed to Payment
                </button>
                <button className="continue-btn" onClick={() => setCartOpen(false)}>
                  Continue Shopping
                </button>
              </div>
            )}
          </div>
        </>
      )}

      {/* PAYMENT MODAL */}
      {paymentOpen && (
        <>
          <div className="modal-overlay" onClick={() => setPaymentOpen(false)} />
          <div className="payment-modal">
            <div className="payment-modal-header">
              <h2>Select Payment Method</h2>
              <button className="close-btn" onClick={() => setPaymentOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="payment-modal-content">
              <div className="payment-summary">
                <h3>Order Summary</h3>
                <div className="summary-items">
                  {cartItems.map((item) => (
                    <div key={`${item.id}-${item.size || 'single'}`} className="summary-item">
                      <span>{item.name} {item.size && `(${item.size})`}</span>
                      <span>₹{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                <div className="summary-total-payment">
                  <span>Total Amount:</span>
                  <span className="total-amount">₹{totalPrice.toFixed(0)}</span>
                </div>
              </div>

              <div className="payment-methods">
                <h3>Payment Methods</h3>
                <div className="methods-grid">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      className="payment-method-btn"
                      onClick={() => handlePayment(method.name)}
                    >
                      <span className="payment-icon">{method.icon}</span>
                      <span className="payment-name">{method.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}