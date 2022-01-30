import React from "react";
import Navbar from "../Navbar/Navbar";
import Pays from "../Pays/Pays";
import FiltrePays from "../FiltrePays/FiltrePays";

import axios from "axios";
import { BrowserRouter, Routes } from "react-router-dom";

class PayListe extends React.Component {
  state = {
    listePays: [],
    loading: false,
    regionSelectionner: null,
    numeroPageActuelle: 1,
  };

  componentDidMount = () => {
    this.handleFilterParRegion("all");
  };

  handleFilterParRegion = (region) => {
    let param = "";
    if (region === "all") param = region;
    else param = `region/${region}`;

    this.setState({ loading: true });
    axios
      .get(`https://restcountries.com/v3.1/${param}`)
      .then((reponse) => {
        let listePays = reponse.data.map((pays) => {
          return {
            nom: pays.name,
            drapeau: pays.flags,
            capital: pays.capital,
            continents: pays.continents,
            population: pays.population,
            region: pays.region,
          };
        });
        this.setState({
          listePays,
          loading: false,
          regionSelectionner: region,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
  };

  render() {
    let pagination = [];
    let listePays = "";
    if (this.state.listePays) {
      let finPage = this.state.listePays.length / 12;
      if (finPage % 12 !== 0) finPage++;
      for (let i = 1; i <= finPage; i++) {
        pagination.push(
          <FiltrePays
            name={i}
            key={i}
            color="btn-primary"
            active={this.state.numeroPageActuelle === i}
            click={() => this.setState({ numeroPageActuelle: i })}
          />
        );
      }
      const debutPage = (this.state.numeroPageActuelle - 1) * 10;
      const finPageListe = (this.state.numeroPageActuelle - 1) *12 + 12;
      const listePaysParPagesReduite = this.state.listePays.slice(debutPage,finPageListe);
      listePays = listePaysParPagesReduite.map((payslist) => {
        console.log(payslist);
        return (
          <div className="col-12 col-md-4" key={payslist.nom.common}>
            <Pays {...payslist} />
          </div>
        );
      });
    }

    return (
      
        <div className="container">
          <Navbar />

          <FiltrePays
            active={this.state.regionSelectionner === "all"}
            color="btn-primary"
            name="Tous"
            click={() => this.handleFilterParRegion("all")}
          />
          <FiltrePays
            active={this.state.regionSelectionner === "Europe"}
            color="btn-primary"
            name="Eroupe"
            click={() => this.handleFilterParRegion("Europe")}
          />
          <FiltrePays
            active={this.state.regionSelectionner === "Americas"}
            color="btn-primary"
            name="Amérique"
            click={() => this.handleFilterParRegion("Americas")}
          />
          <FiltrePays
            active={this.state.regionSelectionner === "Oceania"}
            color="btn-primary"
            name="Océanie"
            click={() => this.handleFilterParRegion("Oceania")}
          />
          <FiltrePays
            active={this.state.regionSelectionner === "Africa"}
            color="btn-primary"
            name="Afrique"
            click={() => this.handleFilterParRegion("Africa")}
          />
          <FiltrePays
            active={this.state.regionSelectionner === "Asia"}
            color="btn-primary"
            name="Asie"
            click={() => this.handleFilterParRegion("Asia")}
          />
          <p className="text-primary text-center">
            Nombres de Pays : {this.state.listePays.length} Pays
          </p>

          {this.state.loading ? (
            <h4>Loading...</h4>
          ) : (
            <div className="row">{listePays}</div>
          )}
          <div>{pagination} </div>
        </div>
     
    );
  }
}
export default PayListe;
