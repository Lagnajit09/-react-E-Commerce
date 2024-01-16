import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../hooks/useFetch";

const FeaturedProducts = (props) => {
  const { data, error, loading } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${props.type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{props.type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros
          ligula, consectetur sed ipsum sed, rutrum vestibulum felis. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus musLorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean eros ligula, consectetur sed ipsum sed, rutrum vestibulum
          felis. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong"
          : loading
          ? "Loading..."
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
