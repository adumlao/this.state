import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home'
import Bills from './components/Bills'
import BillsForm from './components/BillsForm'
import BillSearchResults from './components/BillSearchResults'
import Senate from './components/Senate'
import House from './components/House'
import PressRelease from './components/PressRelease'
import DisplayByState from './components/DisplayByState'
import FilterSenatorByStateForm from './components/FilterSenatorByStateForm'
import FilterHouseByStateForm from './components/FilterHouseByStateForm'
import GetSpecificSenatorForm from './components/GetSpecificSenatorForm'
import DisplaySpecificMember from './components/DisplaySpecificMember'

import {
  fetchSpecificMember,
  fetchHouseRepbyState,
  fetchSenatorbyState,
  pressRelease,
  fetchVote,
  fetchBill,
  fetchSenator,
  fetchHouseRep } from './services/api-helpers'

import './App.css';



class App extends Component {
  constructor() {
    super()

    this.state = {
      value: '',
      votes: [],
      keyword: [],
      senator: [],
      houseRep: [],
      press: [],
      senatorByState: [],
      houseRepByState: [],
      specificSenator: [],
      specificHouse: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitState = this.submitState.bind(this);
    this.submitHouse = this.submitHouse.bind(this);
    this.submitSpecificSenator = this.submitSpecificSenator.bind(this);
    this.submitSpecificHouse = this.submitSpecificHouse.bind(this);
  }

  handleChange(event) {
      this.setState({value: event.target.value});
    }

  async componentDidMount() {
    const displayVote = await fetchVote()
    const displaySenator = await fetchSenator()
    const displayHouseRep = await fetchHouseRep()
    const press = await pressRelease()

    this.setState({
      votes: displayVote,
      senator: displaySenator,
      houseRep: displayHouseRep,
      press: press
    })
  }

  async handleSubmit(ev) {
    ev.preventDefault();
    const keyword = await fetchBill(this.state.value)

    this.setState({
      keyword : keyword,
    })
  };

  async submitState(ev) {
    ev.preventDefault();
    const senatorByState = await fetchSenatorbyState(this.state.value)

    this.setState({
      senatorByState: senatorByState
    })
  }

  async submitHouse(ev) {
    ev.preventDefault();
    const houseRepByState = await fetchHouseRepbyState(this.state.value)

    this.setState({
      houseRepByState: houseRepByState
    })
  }

  async submitSpecificSenator(ev){
    ev.preventDefault();
    const specificSenator = await fetchSpecificMember(this.state.value)

    this.setState({
      specificSenator: specificSenator
    })
  }

  async submitSpecificHouse(ev){
    ev.preventDefault();
    const specificHouse = await fetchSpecificMember(this.state.value)

    this.setState({
      specificHouse: specificHouse
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <Header />
          <Nav />
        </header>

        <main>

         <Route exact path="/" render={() => (
           <div>
            <Home votes={this.state.votes} />
            </div>
         )} />

         <Route path ="/BillsArchive" render={() => (
           <div>
            <Bills />
            <BillsForm
            handleSubmit = {this.handleSubmit}
            handleChange = {this.handleChange}
            value = {this.state.keyword}/>
            <BillSearchResults keyword={this.state.keyword} />
           </div>
         )}/>

         <Route path ="/Senate" render={() => (
            <div className="politician">

            <div className="search-politician">
              <div className="search-headers">Search Specific Legislator</div>
              <DisplaySpecificMember names={this.state.specificSenator} />
              <div className="forms">
              <FilterSenatorByStateForm
              submitState = {this.submitState}
              handleChange = {this.handleChange}
              value = {this.state.senatorByState}/>
              <GetSpecificSenatorForm
              submitSpecificSenator = {this.submitSpecificSenator}
              handleChange = {this.handleChange}
              value = {this.state.keyword} />
              </div>
              <DisplayByState className="display-by-state" names={this.state.senatorByState}/>
            </div>

            <div className="scorecard">
              <Senate names={this.state.senator}/>
            </div>

            </div>
         )}/>

         <Route path ="/House" render={() => (
           <div className="politician">

           <div className="search-politician">
            <div className="search-headers">Search Specific Legislator</div>
            <DisplaySpecificMember names={this.state.specificHouse} />
            <div className="forms">
            <FilterHouseByStateForm
            submitHouse = {this.submitHouse}
            handleChange = {this.handleChange}
            value = {this.state.houseRepByState}/>
            <GetSpecificSenatorForm
            submitSpecificSenator = {this.submitSpecificHouse}
            handleChange = {this.handleChange}
            value = {this.state.keyword} />
            </div>
            <DisplayByState className="display-by-state" names={this.state.houseRepByState}/>
           </div>

           <div className="scorecard">
            <House names={this.state.houseRep}/>
           </div>

            </div>
         )}/>

         <Route path ="/PressRelease" render={() => (
           <div>
           <PressRelease press={this.state.press}/>
           </div>
         )}/>

        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
