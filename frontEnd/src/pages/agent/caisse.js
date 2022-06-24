import React, { useEffect, useState } from "react";
import products from '../../utils/products.json';

const CaissePage = ({}) => {
  const [filter, setFilter] = useState('tous');
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    extractCategories();
    loadData();
  }, []);

  const extractCategories = () => {
    const categories = [...new Set(products.map(o => o.cathegorie))];
    setCategories(categories);
  }

  const loadData = () => {
    setLoading(true);
    var productsOrigin = products.map(item => {
      return {
        ...item,
        qteCart: 1,
      }
    })
    setListProducts(productsOrigin);
    setLoading(false);
  }

  const filterBy = (category) => {
    setFilter(category);
  }

  const addItemToCart = (product) => {
    var currentCart = cart;
    var flag = false;
    currentCart = currentCart.map(item => {
      if (item.name == product.name) {
        flag = true;
      }
      return {
        ...item,
        qteCart: item.name == product.name ? item.qteCart+1 : item.qteCart,
      }
    })
    if (flag == false) {
      product.qteCart = 1;
      currentCart.push(product);
    }
    setCart(currentCart);
  }

  const removeItemFromCart = (product) => {
    var currentCart = [];
    currentCart = cart.filter(e => e.name != product.name);
    setCart(currentCart);
  }

  const getTotal = () => {
    var total = 0;
    cart.map(i => total += i.price*i.qteCart);
    return total;
  }

  const getTotalQte = () => {
    var total = 0;
    cart.map(i => total += i.qteCart);
    return total;
  }

  const facturer = () => {
    alert("Numero de Commande est le suivant : "+Math.floor(Math.random() * 99999));
    setCart([]);
  }

  if(loading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div
      style={{
        height: '99%',
        width: '100%',
      }}
      className="row"
    >
      <div
        style={{
          padding: '20px',
        }}
        className="col-md-2"
      >
        <div
          style={{
            width: '100%',
            height: '50px',
            borderRadius: '30px',
            boxShadow: '2px 2px 25px rgb(0 0 0 / 10%)',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '20px',
            cursor: 'pointer',
            backgroundColor: filter == 'tous' ? '#665eff' : 'rgba(255, 255, 255, .7)',
            color: filter == 'tous' ? 'white' : 'black',
            marginTop: '8px',
            textTransform: 'capitalize',
          }}
          onClick={() => { filterBy('tous'); }}
        >
          Tous
          <span style={{ marginLeft: 'auto', marginRight: '20px', }}>
            {'>'}
          </span>
        </div>
        {
          categories.map((item, key) => {
            return (
              <div
                key={key}
                style={{
                  width: '100%',
                  height: '50px',
                  borderRadius: '30px',
                  boxShadow: '2px 2px 25px rgb(0 0 0 / 10%)',
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '20px',
                  cursor: 'pointer',
                  backgroundColor: filter == item ? '#665eff' : 'rgba(255, 255, 255, .7)',
                  color: filter == item ? 'white' : 'black',
                  marginTop: '8px',
                  textTransform: 'capitalize',
                }}
                onClick={() => { filterBy(item); }}
              >
                {item}
                <span style={{ marginLeft: 'auto', marginRight: '20px', }}>
                  {'>'}
                </span>
              </div>
            )
          })
        }
      </div>
      <div
        style={{
          padding: '20px',
          height: '93vh',
          overflowY: 'auto',
        }}
        className="col-md-7 style-1"
      >
        <div className="row">
          {
            listProducts.map((item, key) => {
              if(item.cathegorie == filter || filter == 'tous') {
                return (
                  <div key={key} className="col-md-3" style={{ cursor: 'pointer', position: 'relative', }}>
                    <div style={{ boxShadow: '2px 2px 25px rgb(0 0 0 / 5%)', border: '1px solid rgba(1, 1, 1, 0.2)', padding: '10px', margin: '5px', borderRadius: '15px', textAlign: 'center', justifyContent: 'center', }}  onClick={() => { addItemToCart(item); }}>
                      <img src={item.image} style={{ width: '100%', height: '200px', borderRadius: '7px', }} />
                      <p style={{ width: "100%", fontSize: '0.7rem', fontWeight: '600', display: 'flex', alignItems: 'center', margin: '0px', marginTop: '10px', }}>
                        {item.name}
                        <span style={{ marginLeft: 'auto', marginRight: '10px', color: '#665eff' }}>
                          {item.price} Dhs
                        </span>
                      </p>
                    </div>
                    {
                      cart.length > 0 && cart.filter(e => e.name == item.name).map((i, index) => {
                        return (
                          <span key={index} style={{ position: 'absolute', top: '15px', right: '25px', width: '20px', height: '20px', backgroundColor: '#665eff', color: 'white', fontWeight: 'bold', fontSize: '12px', borderRadius: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                            {i.qteCart}
                          </span>
                        )
                      })
                    }
                    {
                      cart.length > 0 && cart.filter(e => e.name == item.name).map((i, index) => {
                        return (
                          <span key={index} style={{ position: 'absolute', top: '15px', left: '25px', width: '20px', height: '20px', backgroundColor: 'black', color: 'white', fontWeight: 'bold', fontSize: '12px', borderRadius: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', }} onClick={() => { removeItemFromCart(item); }}>
                            {'−'}
                          </span>
                        )
                      })
                    }
                  </div>
                )
              }
            })
          }
        </div>
      </div>
      <div className="col-md-3">
        <div className="" style={{ marginTop: '20px', }}>
          <h3>
            PANNIER:
          </h3>
          {
            cart.length == 0 ? (
              <p style={{ marginTop: '20px', color: '#665eff', fontSize: '25px', fontWeight: 'bold', }}> Pannier Vide ! </p>
            ) : (
              <div style={{ height: '87vh', width: '100%', position: 'relative', }}>
                <div className="container-fluid style-1" style={{ height: "89%", overflowY: 'auto', }}>
                  {
                    cart.map((item, key) => {
                      return (
                        <div key={key} className='row' style={{ boxShadow: '2px 2px 25px rgb(0 0 0 / 5%)', border: '1px solid rgb(102, 94, 255, 0.5)', borderRadius: '15px', width: '100%', marginTop: '10px', }}>
                          <div className="col-md-4" style={{ position: 'relative', }}>
                            <img src={item.image} style={{ width: '50px', height: '50px', borderRadius: '10px', }} />
                            <span style={{ position: 'absolute', bottom: '3px', right: '16px', width: '20px', height: '20px', backgroundColor: 'black', color: 'white', fontWeight: 'bold', fontSize: '12px', borderRadius: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                              {item.qteCart}
                            </span>
                          </div>
                          <div className="col-md-5" style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', }}>
                            {item.name}
                          </div>
                          <div className="col-md-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', }}>
                            {item.price} Dhs
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
                <div className="container-fluid" style={{ position: 'absolute', bottom: '0px', left: '0px', width: '100%', }}>
                  <div className="row">
                    <div className="col-md-12" style={{ padding: 0, }}>
                      <p style={{ margin: '0px', width: '100%', fontSize: '20px', textAlign: "center", padding: '5px', backgroundColor: '#665eff', color: 'white', borderRadius: '5px', }}>
                        TOTAL: {getTotal()} Dhs Pour {getTotalQte()}
                      </p>
                    </div>
                    <div className="col-md-12" style={{ textTransform: 'uppercase', marginTop: '5px', cursor: 'pointer', padding: 0, }} onClick={facturer}>
                      <p style={{ margin: '0px', width: '100%', fontSize: '20px', textAlign: "center", padding: '5px', backgroundColor: '#93bd1c', textTransform: 'uppercase', color: 'white', borderRadius: '5px', }}>
                        Facturer {'>'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default CaissePage;
