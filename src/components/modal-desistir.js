import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';
import { logout } from '../services/auth';


class ModalDesistir extends Component {
    constructor(props) {
        super(props);
        this.passar = this.passar.bind(this);
        this.state = { openDesistir: false, openPassar: false, redirect: false }
    }


    closeConfigShow = (openDesistir, openPassar) => () => {
        this.setState({ openPassar: openPassar, openDesistir: openDesistir })
    }

    close = () => this.setState({ openDesistir: false, openPassar: false })

    passar = () => {
        this.props.onPassarVez();
        this.close();
    }


    logout = () => {
        logout();
        this.setState({ redirect: true });
    }

    render() {
        const { openDesistir, openPassar, redirect } = this.state

        if (redirect) {
            return <Redirect to='/' />
        }

        return (
            <div>
                <Button.Group size="massive" widths='2'>
                    <Button onClick={this.closeConfigShow(true, false)} color="red">Desistir</Button>
                    <Button onClick={this.closeConfigShow(false, true)} inverted>Passar</Button>


                </Button.Group>
                <Modal
                    open={openDesistir}
                    closeOnEscape={true}
                    closeOnDimmerClick={true}
                    onClose={this.close}
                >
                    <Modal.Header>Atenção</Modal.Header>
                    <Modal.Content>
                        <p>Ao Desistir, você perderá automaticamente a sua posição na fila</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.close} negative>
                            Cancelar
                        </Button>
                        <Button
                            onClick={this.logout}
                            positive
                            labelPosition='right'
                            icon='checkmark'
                            content='Ok'
                        />
                    </Modal.Actions>
                </Modal>

                <Modal
                    open={openPassar}
                    closeOnEscape={true}
                    closeOnDimmerClick={true}
                    onClose={this.close}
                >
                    <Modal.Header>Atenção</Modal.Header>
                    <Modal.Content>
                        <p>Ao PASSAR A VEZ, você cederá 3 (três)  posições na fila</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.close} negative>
                            Cancelar
                        </Button>
                        <Button
                            onClick={this.passar}
                            positive
                            labelPosition='right'
                            icon='checkmark'
                            content='Ok'
                        />
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default ModalDesistir;