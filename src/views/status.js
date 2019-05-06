import React from 'react';
import { Container, Grid, Message, Segment, Header } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import ModalDesistir from '../components/modal-desistir';

const square = { width: 220, height: 220, fontSize: '2.4rem' }

class Status extends React.Component {
    constructor(props) {
        super(props);
        this.handlePosicao = this.handlePosicao.bind(this);
        this.state = { posicao: 10, tempo_atendimento: 50 }
    }

    componentDidMount() {

        this.interval = setInterval(() => {
            this.setState((state) => ({
                posicao: state.posicao - 1,
                tempo_atendimento: (state.posicao - 1) * 5
            }))
        }, 3000)
    }

    componentWillUnmount() {
        this.stop();
    }

    stop() {
        clearInterval(this.interval);
    }

    handlePosicao() {
        this.setState((state) => ({ posicao: state.posicao + 3, tempo_atendimento: (state.posicao + 3) * 5 }));
    }


    render() {
        const { posicao, tempo_atendimento } = this.state;

        if (posicao === 0) {
            return <Redirect to='/atendimento' />
        }

        const color = (posicao > 5) ? 'green' : 'red';

        const messagem = (posicao > 5) ?
            <Message positive>
                <Message.Header  >Fique atento ao seu Tempo de espera</Message.Header>
                <p>Sua posição atualizara automaticamente</p>
            </Message>
            : <Message negative>
                <Message.Header  >Atendimento próximo</Message.Header>
                <p>Encaminhe-se ao local te atendimento</p>
            </Message>


        return (
            <Container>
                <Grid centered container verticalAlign="middle" padded style={{ height: '100%' }}>
                    <Grid.Row>
                        <Grid.Column>
                            {messagem}
                        </Grid.Column>

                    </Grid.Row>
                    <Grid.Row>
                        <Segment raised compact size="massive" circular inverted style={square} >
                            <Header as='h1' size="huge" color={color} inverted>
                                {posicao}º
                        <Header.Subheader>Posição</Header.Subheader>
                            </Header>
                        </Segment>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Segment textAlign="center" inverted>Faltam aproximadamente {tempo_atendimento} minutos</Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <ModalDesistir onPassarVez={this.handlePosicao} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container >
        )
    }
};

export default Status;