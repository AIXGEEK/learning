import { useState } from 'react'
import React from 'react'
import { observable } from 'mobx';
import { observer } from "mobx-react";
import { Button } from 'antd'
import reactLogo from './assets/react.svg'
import './App.css'

@observer
export default class App extends React.Component {
  @observable secondsPassed = 0

  componentWillMount() {
    setInterval(() => {
      this.secondsPassed++
    }, 1000)
  }
  render() {
    return <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Antd5</h1>
      <Button type="primary">Antd5</Button>
      <span>Seconds passed: {this.secondsPassed} </span>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  }
}
