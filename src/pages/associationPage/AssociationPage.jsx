const AssociationPage = () => {
  return (
    <div className="container p-4">
      <div className="d-flex flex-column align-items-center mb-5 mt-5">
        <h1 className="fs-2">Vous êtes association ?</h1>
        <h1 className="fs-2">vous pouvez nous rejoindre!</h1>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Nom de l'association
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Nom du représentant
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="inputAddress" className="form-label">
            Email
          </label>
          <input
            type="Email"
            className="form-control"
            id="inputAddress"
            placeholder=".....@...."
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputAddress" className="form-label">
            Mot de Passe
          </label>
          <input type="password" className="form-control" id="inputAddress" />
        </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Contact
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Adresse
          </label>
          <textarea
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <button type="submit" className="btn btn-secondary bg-black">
          Confirmer
        </button>
      </form>
    </div>
  );
};

export default AssociationPage;
