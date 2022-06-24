import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import products from '../../../utils/products.json';
import ModalElement from "../../shared/modal";

const ListProduitPage = ({}) => {
  const [filter, setFilter] = useState('tous');
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [listProducts, setListProducts] = useState([]);
  const navigate = useNavigate();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);

  function openModal(product) {
    setIsOpen(true);
    setModalInfo(product);
  }

  function closeModal() {
    setIsOpen(false);
  }

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

  const editItem = (product) => {
    navigate(`/formProduit/${product.name}`, {state: product});
  }

  const removeItem = (product) => {
    console.log("remove Item", product.name);
  }

  const viewItem = (product) => {
    openModal(product);
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
        position: 'relative',
        paddingTop: '30px',
      }}
      className="row"
    >
      <div
        style={{
          padding: '20px',
        }}
        className="col-md-3"
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
          height: '90vh',
          overflowY: 'auto',
        }}
        className="col-md-9 style-1"
      >
        <div className="row">
          {
            listProducts.map((item, key) => {
              if(item.cathegorie == filter || filter == 'tous') {
                return (
                  <div key={key} className="col-md-3" style={{ cursor: 'pointer', position: 'relative', }}>
                    <div style={{ boxShadow: '2px 2px 25px rgb(0 0 0 / 5%)', border: '1px solid rgba(1, 1, 1, 0.2)', padding: '10px', margin: '5px', borderRadius: '15px', textAlign: 'center', justifyContent: 'center', }}  onClick={() => { viewItem(item); }}>
                      <img src={item.image} style={{ width: '100%', height: '200px', borderRadius: '7px', }} />
                      <p style={{ width: "100%", fontSize: '0.7rem', fontWeight: '600', display: 'flex', alignItems: 'center', margin: '0px', marginTop: '10px', }}>
                        {item.name}
                        <span style={{ marginLeft: 'auto', marginRight: '10px', color: '#665eff' }}>
                          {item.price} Dhs
                        </span>
                      </p>
                    </div>
                    <span style={{ position: 'absolute', top: '15px', right: '25px', width: '20px', height: '20px', backgroundColor: '#665eff', color: 'white', fontWeight: 'bold', fontSize: '12px', borderRadius: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', }} onClick={() => { editItem(item); }}>
                      <i className="fa fa-pencil" aria-hidden="true"></i>
                    </span>
                  </div>
                )
              }
            })
          }
        </div>
      </div>
      <div style={{ position: 'absolute', top: '10px', right: '10px', paddingRight: '20px', paddingLeft: '20px', height: '40px', backgroundColor: '#665eff', fontSize: '20px', borderRadius: '20px', border: '1px solid lightGray', width: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: "white", fontWeight: '700', cursor: 'pointer', }} onClick={() => { navigate('/formProduit') }}>
        {`Ajouter    +`}
      </div>
      <ModalElement modalIsOpen={modalIsOpen} closeModal={closeModal} setIsOpen={setIsOpen} modalInfo={modalInfo} editItem={editItem} removeItem={removeItem} />
    </div>
  );
};

export default ListProduitPage;
