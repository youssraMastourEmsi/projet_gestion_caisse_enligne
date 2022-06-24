import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import FormAgentPage from "./pages/admin/agents/formAgents";
import ListAgentPage from "./pages/admin/agents/listAgents";
import DashboardPage from "./pages/admin/dashboard";
import FormProduitPage from "./pages/admin/produits/formProduits";
import ListProduitPage from "./pages/admin/produits/listProduits";
import CaissePage from "./pages/agent/caisse";
import LoginPage from "./pages/login";
import NavBar from "./pages/shared/navBar";
import PrivateRoute from "./router/PrivateRoute";
import PublicRoute from "./router/PublicRoute";
import { isLogin } from "./utils";

function App() {

  return (
    <BrowserRouter>
      <div
        style={{
          height: '95vh',
        }}
      >
        <Routes>
          <Route exact path='/login' element={<PublicRoute restricted={true} />}>
            <Route exact path='/login' element={<LoginPage />} />
          </Route>
          <Route exact path='/' element={<PrivateRoute role='admin' />}>
            <Route exact path='/' element={<DashboardPage />} />
          </Route>
          <Route exact path='/caisse' element={<PrivateRoute role='agent' />}>
            <Route exact path='/caisse' element={<CaissePage />} />
          </Route>
          <Route exact path='/formProduit' element={<PrivateRoute role='admin' />}>
            <Route exact path='/formProduit' element={<FormProduitPage />} />
          </Route>
          <Route exact path='/formProduit/:id' element={<PrivateRoute role='admin' />}>
            <Route exact path='/formProduit/:id' element={<FormProduitPage />} />
          </Route>
          <Route exact path='/listProduit' element={<PrivateRoute role='admin' />}>
            <Route exact path='/listProduit' element={<ListProduitPage />} />
          </Route>
          <Route exact path='/formAgent' element={<PrivateRoute role='admin' />}>
            <Route exact path='/formAgent' element={<FormAgentPage />} />
          </Route>
          <Route exact path='/formAgent/:id' element={<PrivateRoute role='admin' />}>
            <Route exact path='/formAgent/:id' element={<FormAgentPage />} />
          </Route>
          <Route exact path='/listAgent' element={<PrivateRoute role='admin' />}>
            <Route exact path='/listAgent' element={<ListAgentPage />} />
          </Route>
          <Route path="*" element={<p style={{ width: '100%', height: '95vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '50px', fontWeight: 'bold' }}>Erreur 404: Page Introuvable !</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
