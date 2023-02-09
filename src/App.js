import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React, { useState } from 'react';

function App() {

  function addItem(event) {
    event.preventDefault();

    const img = document.createElement('img');
    img.src = inputs.imageAddress;

    const sidebarSpan = document.createElement('span');
    sidebarSpan.innerText = inputs.actor;

    const containerSpan = document.createElement('span');
    containerSpan.innerText = inputs.film;

    const div = document.createElement('div');
    div.className = 'card';
    div.appendChild(img);
    div.appendChild(containerSpan);

    const container = document.querySelector('.container');
    container.appendChild(div);

    const sidebar = document.querySelector('.sidebar');
    sidebar.appendChild(sidebarSpan);

    setShow(false);

    onReset();
  }

  const [show, setShow] = useState(false);

  const [inputs, setInputs] = useState({
    actor: '',
    imageAddress: '',
    film: '',
  });

  const onReset = () => {
    setInputs({
      actor: '',
      imageAddress: '',
      film: '',
    })
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };  

  const { actor, imageAddress, film } = inputs;

  

  return (
    <div className="App">
      <header>
        <span className="title">cinema</span>
      </header>
      <main>
        <div className='sidebar'>
          <button id='open' onClick={() => setShow(true)}>add</button>
          {
            show ?
              <div className="modal">
                <div className='modal_overlay'>
                  <form className='modal_content' name='modal' onSubmit={addItem}>
                    <h1>add</h1>
                    <label>actor</label>
                    <input type='text' id='actor' placeholder='Adèle Haenel' name="actor" onChange={onChange} value={actor} autoFocus required></input>
                    <label>image&nbsp;&nbsp;address</label>
                    <input type="text" id="imageAddress" placeholder="e.g. https://homemcr.org/app/uploads/2016/11/The-Unknown-Girl.jpg" name='imageAddress' onChange={onChange} value={imageAddress} required></input>
                    <label>title</label>
                    <input type="text" id="film" placeholder="e.g. The Unknown Girl" name='film' onChange={onChange} value={film} required></input>
                    <button type="submit" className="addButton">add</button>
                    <button className="closeButton" onClick={() => {setShow(false); onReset();}}>close</button>
                  </form>
                </div>
              </div>
              : null
          }
          <span>Franz Rogowski</span>
          <span>Cillian Murphy</span>
          <span>David Tennant</span>
          <span>Tim Roth</span>
          <span>Gaspard Ulliel</span>
        </div>
        <section className="container">
          <div className="card">
            <img src="https://pbs.twimg.com/media/DdE1dl7V4AApyBc?format=jpg&name=900x900" alt="Franz Rogowski"></img>
            <span>Transit</span>
          </div>
          <div className="card">
            <img src="https://m.media-amazon.com/images/M/MV5BMTgwMjYxNzcxNl5BMl5BanBnXkFtZTYwNDgxOTM3._V1_FMjpg_UX485_.jpg" alt="Cillian Murphy"></img>
            <span>The Wind That Shakes the Barley</span>
          </div>
          <div className="card">
            <img src="https://i.ytimg.com/vi/514GKK0NXJ4/maxresdefault.jpg" alt="David Tennant"></img>
            <span>Broadchurch</span>
          </div>
          <div className="card">
            <img src="https://artlecture.com/data/page/202110/editor_upload_20211031005958_5682.png" alt="Tim Roth"></img>
            <span>Sundown</span>
          </div>
          <div className="card">
            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F256842335889C0010E" alt="Gaspard Ulliel"></img>
            <span>It's Only the End of the World</span>
          </div>
        </section>
      </main>

    </div>
  );
}

export default App;
