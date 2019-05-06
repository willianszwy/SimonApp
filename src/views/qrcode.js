import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import { Redirect, Link } from 'react-router-dom';
import { Container, Grid, Button } from 'semantic-ui-react';

import { login } from '../services/auth';

class QRCode extends Component {
    state = {
        redirect: false
    }

    handleScan = data => {
        if (data) {
            login(data);
            this.setState({ redirect: true });
        }
    }
    handleError = err => {
        console.log(err)
    }
    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/status' />;
        }

        return (
            <Container>
                <Grid padded="vertically" centered doubling columns={2}>
                    <Grid.Row >
                        <Grid.Column>
                            <Button as={Link} to='/' inverted floated='left' content='Voltar' icon='left arrow' labelPosition='left' />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <QrReader
                                delay={300}
                                onError={this.handleError}
                                onScan={this.handleScan}
                                style={{ width: '100%' }}
                            />

                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </Container>
        )
    }
}

export default QRCode;