import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id : 1,
    title : 'Milo',
    price : 6,
    description : 'Beverage'
  },

  {
    id : 2,
    title : 'Peak',
    price : 7,
    description : 'Beverage'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
       {DUMMY_PRODUCTS.map((product) => (
        <ProductItem
        key={product.id}
        id = {product.id}
        title={product.title}
        price={product.price}
        description={product.description}
        />
       )
        )}
      </ul>
    </section>
  );
};

export default Products;
