import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import Navbar from './Navbar';

const plants = [
  // ==========================
  // INDOOR PLANTS
  // ==========================

  {
    id: 1,
    name: 'Snake Plant',
    category: 'Indoor Plants',
    price: 25,
    image: '/images/snake-plant.jpg',
    description:
      'A hardy indoor plant with upright green leaves.',
  },

  {
    id: 2,
    name: 'Peace Lily',
    category: 'Indoor Plants',
    price: 22,
    image: '/images/peace-lily.jpg',
    description:
      'An elegant indoor plant with beautiful white flowers.',
  },

  {
    id: 3,
    name: 'ZZ Plant',
    category: 'Indoor Plants',
    price: 28,
    image: '/images/zz-plant.jpg',
    description:
      'A low-maintenance plant with glossy green leaves.',
  },

  {
    id: 4,
    name: 'Spider Plant',
    category: 'Indoor Plants',
    price: 18,
    image: '/images/spider-plant.jpg',
    description:
      'A popular plant with long, arching green leaves.',
  },

  {
    id: 5,
    name: 'Rubber Plant',
    category: 'Indoor Plants',
    price: 30,
    image: '/images/rubber-plant.jpg',
    description:
      'A beautiful plant with large glossy leaves.',
  },

  {
    id: 6,
    name: 'Golden Pothos',
    category: 'Indoor Plants',
    price: 20,
    image: '/images/golden-pothos.jpg',
    description:
      'A trailing plant with attractive heart-shaped leaves.',
  },

  // ==========================
  // SUCCULENTS
  // ==========================

  {
    id: 7,
    name: 'Aloe Vera',
    category: 'Succulents',
    price: 15,
    image: '/images/aloe-vera.jpg',
    description:
      'A popular succulent with thick green leaves.',
  },

  {
    id: 8,
    name: 'Jade Plant',
    category: 'Succulents',
    price: 19,
    image: '/images/jade-plant.jpg',
    description:
      'A compact succulent with thick rounded leaves.',
  },

  {
    id: 9,
    name: 'Echeveria',
    category: 'Succulents',
    price: 17,
    image: '/images/echeveria.jpg',
    description:
      'A beautiful succulent with a rosette shape.',
  },

  {
    id: 10,
    name: 'Haworthia',
    category: 'Succulents',
    price: 16,
    image: '/images/haworthia.jpg',
    description:
      'A small succulent suitable for desks and shelves.',
  },

  {
    id: 11,
    name: 'Zebra Haworthia',
    category: 'Succulents',
    price: 18,
    image: '/images/zebra-haworthia.jpg',
    description:
      'A distinctive succulent with striped leaves.',
  },

  {
    id: 12,
    name: 'String of Pearls',
    category: 'Succulents',
    price: 24,
    image: '/images/string-of-pearls.jpg',
    description:
      'A trailing succulent with bead-like leaves.',
  },

  // ==========================
  // FLOWERING PLANTS
  // ==========================

  {
    id: 13,
    name: 'Rose',
    category: 'Flowering Plants',
    price: 25,
    image: '/images/rose.jpg',
    description:
      'A classic flowering plant with beautiful blooms.',
  },

  {
    id: 14,
    name: 'Orchid',
    category: 'Flowering Plants',
    price: 35,
    image: '/images/orchid.jpg',
    description:
      'An elegant flowering plant with delicate blossoms.',
  },

  {
    id: 15,
    name: 'Anthurium',
    category: 'Flowering Plants',
    price: 28,
    image: '/images/anthurium.jpg',
    description:
      'A tropical flowering plant with colorful flowers.',
  },

  {
    id: 16,
    name: 'African Violet',
    category: 'Flowering Plants',
    price: 20,
    image: '/images/african-violet.jpg',
    description:
      'A small flowering plant with attractive blooms.',
  },

  {
    id: 17,
    name: 'Jasmine',
    category: 'Flowering Plants',
    price: 23,
    image: '/images/jasmine.jpg',
    description:
      'A fragrant plant with delicate white flowers.',
  },

  {
    id: 18,
    name: 'Geranium',
    category: 'Flowering Plants',
    price: 21,
    image: '/images/geranium.jpg',
    description:
      'A colorful flowering plant for your home.',
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const categories = [
    'Indoor Plants',
    'Succulents',
    'Flowering Plants',
  ];

  const isInCart = (plantId) => {
    return cartItems.some(
      (item) => item.id === plantId
    );
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="products-page">

      <Navbar />

      <header className="products-header">

        <h1>
          Our Plants
        </h1>

        <p>
          Explore our beautiful collection of
          plants for your home.
        </p>

      </header>

      {categories.map((category) => {

        const categoryPlants = plants.filter(
          (plant) =>
            plant.category === category
        );

        return (
          <section
            key={category}
            className="category-section"
          >

            <h2>
              {category}
            </h2>

            <div className="product-grid">

              {categoryPlants.map((plant) => (

                <article
                  key={plant.id}
                  className="product-card"
                >

                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="product-image"
                  />

                  <div className="product-info">

                    <h3>
                      {plant.name}
                    </h3>

                    <p className="product-description">
                      {plant.description}
                    </p>

                    <p className="product-price">
                      ${plant.price.toFixed(2)}
                    </p>

                    <button
                      type="button"
                      className="add-cart-btn"
                      disabled={isInCart(plant.id)}
                      onClick={() =>
                        handleAddToCart(plant)
                      }
                    >

                      {isInCart(plant.id)
                        ? 'Added to Cart'
                        : 'Add to Cart'}

                    </button>

                  </div>

                </article>

              ))}

            </div>

          </section>
        );
      })}

    </div>
  );
}

export default ProductList;