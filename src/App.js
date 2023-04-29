import React from "react";
import Modal from "./components/modal";
import Button from "./components/button";
import "./index.css";


class App extends React.Component {
  // state = {
  //   show: false
  // };
  // showModal = e => {
  //   this.setState({
  //     show: !this.state.show
  //   });
  // };
  state = {
    showFirstModal: false,
    showSecondModal: false,
    showButtons: true,
  };

 showModal = (modalName) => {
    this.setState((prevState) => ({
      [modalName]: !prevState[modalName],
      showButtons: false, // скрыть кнопки при открытии модального окна
    }));
  };

  hideModal = (modalName) => {
    this.setState((prevState) => ({
      [modalName]: !prevState[modalName],
      showButtons: true, // показать кнопки при закрытии модального окна
    }));
  };

  render() {
    const { showFirstModal, showSecondModal, showButtons } = this.state;

    return (
      <div className="App">
        {showButtons && ( // показать кнопки, если состояние showButtons установлено в true
          <div className="absolute">
            <Button
              className="toggle-button"
              id="centered-toggle-button"
              text='Open first modal'
              backgroundColor="red"
              hendleClick={e => {
                // this.showModal(e);
                this.showModal("showFirstModal");
              }}
            />
            <Button
              className="toggle-button"
              id="centered-toggle-button"
              text='Open second modal'
              backgroundColor="yellow"
              hendleClick={e => {
                // this.showModal(e);
                this.showModal("showSecondModal");
              }}
            />
          </div>
        )}
            
<Modal
          header="The First Modal"
          text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
          deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non
          fuga omnis a sed impedit explicabo accusantium nihil doloremque
          consequuntur."
          onClose={() => this.hideModal("showFirstModal")}
          show={showFirstModal}
        >
            </Modal>
            
       <Modal
          header="The Second Modal"
          text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
          deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non
          fuga omnis a sed impedit explicabo accusantium nihil doloremque
          consequuntur."
           onClose={() => this.hideModal("showSecondModal")}
          show={showSecondModal}
        >
            
         
        </Modal>
        </div>
        
    );
  }
}

export default App;