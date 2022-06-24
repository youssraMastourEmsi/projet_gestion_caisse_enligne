import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import agents from '../../../utils/agents.json';
import ModalElement from "../../shared/modal";

const ListAgentPage = ({}) => {
  const [filter, setFilter] = useState('tous');
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [listAgents, setListAgents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setLoading(true);
    setListAgents(agents);
    setLoading(false);
  }

  const editItem = (agent) => {
    navigate(`/formAgent/${agent.id}`, {state: agent});
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
            listAgents.map((item, key) => {
              return (
                <div key={key} className="col-md-3" style={{ cursor: 'pointer', position: 'relative', }} onClick={() => { editItem(item); }}>
                  <div style={{ boxShadow: '2px 2px 25px rgb(0 0 0 / 5%)', border: '1px solid rgba(1, 1, 1, 0.2)', padding: '10px', margin: '5px', borderRadius: '15px', textAlign: 'center', justifyContent: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                    <p style={{ width: "100%", fontSize: '0.9rem', fontWeight: '600', display: 'flex', alignItems: 'center', margin: '0px', }}>
                      {`${item.firstname} ${item.lastname}`}
                    </p>
                  </div>
                  <span style={{ position: 'absolute', top: '15px', right: '25px', width: '20px', height: '20px', backgroundColor: '#665eff', color: 'white', fontWeight: 'bold', fontSize: '12px', borderRadius: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                  </span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div style={{ position: 'absolute', top: '10px', right: '10px', paddingRight: '20px', paddingLeft: '20px', height: '40px', backgroundColor: '#665eff', fontSize: '20px', borderRadius: '20px', border: '1px solid lightGray', width: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: "white", fontWeight: '700', cursor: 'pointer', }} onClick={() => { navigate('/formAgent') }}>
        {`Ajouter    +`}
      </div>
    </div>
  );
};

export default ListAgentPage;
