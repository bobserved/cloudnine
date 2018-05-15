import React, { Component } from 'react';
import { SaloonList } from '../components/saloon-list';

export class SaloonContainer extends Component {
  render() {
    return (
      <div>
       <SaloonList />
      </div>
    );
  }
}