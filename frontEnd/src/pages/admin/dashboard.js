import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dashboard from '../../utils/dashboard.json';

const DashboardPage = ({}) => {
  const [loading, setLoading] = useState(false);
  const [listCommandes, setListCommandes] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setLoading(true);
    setListCommandes(dashboard);
    setLoading(false);
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
          height: '90vh',
          overflowY: 'auto',
        }}
        className="col-md-12 style-1"
      >
        <div className="row">
          {
            listCommandes.map((item, key) => {
              return (
                <div key={key} className="col-md-3" style={{ position: 'relative', }}>
                  <div style={{ boxShadow: '2px 2px 25px rgb(0 0 0 / 5%)', border: '1px solid rgba(1, 1, 1, 0.2)', padding: '10px', margin: '5px', borderRadius: '15px', textAlign: 'center', justifyContent: 'center', }}>
                    <h3>
                      Commande N° {item.id}
                    </h3>
                    <p style={{ width: "100%", fontSize: '0.9rem', fontWeight: '600', display: 'flex', alignItems: 'center', margin: '0px', marginTop: '10px', }}>
                      Agent: {item.agent}
                    </p>
                    <div style={{ width: "100%", fontSize: '0.9rem', fontWeight: '600', margin: '0px', marginTop: '10px', textAlign: 'left', }}>
                      Produits:
                      {
                        item.produits.map((ele, key) => {
                          return (
                            <div key={key} className="row" style={{ marginTop: '6px', }}>
                              <div className="col-md-4">
                                <img src={ele.image} style={{ width: '60px', height: '60px', borderRadius: '7px', }} />
                              </div>
                              <div className="col-md-8">
                                <p style={{ width: "100%", fontSize: '0.7rem', fontWeight: '600', display: 'flex', alignItems: 'center', margin: '0px', marginTop: '10px', }}>
                                  {ele.name} <br /> Qte: {ele.Qte}
                                  <span style={{ marginLeft: 'auto', marginRight: '10px', color: '#665eff' }}>
                                    {ele.price} Dhs
                                  </span>
                                </p>
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                    <p style={{ width: "100%", fontSize: '0.8rem', fontWeight: '600', display: 'flex', alignItems: 'center', margin: '0px', marginTop: '20px', }}>
                      Date: {item.date}
                      <span style={{ marginLeft: 'auto', marginRight: '10px', color: '#665eff' }}>
                        Total: {item.total} Dhs
                      </span>
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
