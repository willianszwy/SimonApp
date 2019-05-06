import React from 'react';
import { Container, Grid, GridRow, Input, GridColumn, Button } from 'semantic-ui-react';
import { Redirect, Link } from 'react-router-dom';
import { login } from '../services/auth';

class Codigo extends React.Component {
    state = {
        redirect: false,
        data: ""
    }

    login = () => {
        const { data } = this.state;
        if (data) {
            login(data);
            this.setState({ redirect: true });
        }
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/status' />;
        }
        return (
            <Container>
                <Grid container centered padded>
                    <Grid.Row >
                        <Grid.Column>
                            <Button as={Link} to='/' inverted floated='left' content='Voltar' icon='left arrow' labelPosition='left' />
                        </Grid.Column>
                    </Grid.Row>
                    <GridRow >
                        <GridColumn>
                            <br />
                            <br />
                            <Input fluid
                                size='massive'
                                icon='qrcode'
                                focus placeholder='Digite Código...'
                                onChange={e => this.setState({ data: e.target.value })}
                            />
                        </GridColumn>
                    </GridRow>
                    <GridRow>
                        <GridColumn>
                            <Button
                                onClick={this.login}
                                fluid inverted size="massive">Cadastrar</Button>
                        </GridColumn>
                    </GridRow>
                </Grid>
            </Container >)
    }
};

export default Codigo;