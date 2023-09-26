
const CandidatePage = () => {
  return (
    <div className="container p-4">
      <div className="d-flex flex-column align-items-center mb-5 mt-5">
        <h1 className="fs-2">Vous êtes bénévole ?</h1>
        <h1 className="fs-1">Viens rejoignez-nous!</h1>
      </div>
      <form className="row g-3">
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Nom</label>
    <input type="text" className="form-control" id="inputEmail4" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Prenom</label>
    <input type="text" className="form-control" id="inputPassword4" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputAddress" className="form-label">Email</label>
    <input type="Email" className="form-control" id="inputAddress" placeholder=".....@...." />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputAddress" className="form-label">Mot de Passe</label>
    <input type="password" className="form-control" id="inputAddress" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Adresse</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Adresse 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">Région</label>
    <input type="text" className="form-control" id="inputCity" />
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">Ville</label>
    <select id="inputState" className="form-select">
      <option defaultValue={"choix"}>choix...</option>
      <option value={"lyon"}>Lyon</option>
      <option value={"Paris"}>Paris</option>
      <option value={"Marseille"}>Marseille</option>
    </select>
  </div>
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">Code postale</label>
    <input type="text" className="form-control" id="inputZip" />
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-dark bg-black">S'inscrire</button>
  </div>
</form>
    </div>
  )
}

export default CandidatePage