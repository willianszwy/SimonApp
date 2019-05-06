import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Container, Grid, Button, Image, GridRow, Icon } from 'semantic-ui-react';
import { isAuthenticated } from '../services/auth';

import logo from './simon.png';

const Index = () => {
    if (isAuthenticated()) {
        return (<Redirect to='/status' />)
    }
    return (<Container>
        <Grid container centered verticalAlign="middle" padded>
            <GridRow  >

                <Image className="painel-shadow" src={logo} circular />

            </GridRow>
            <GridRow >
                <Button inverted size="massive" as={Link} to='/qrcode' fluid>
                    <Icon name='qrcode' />
                    Ler QRCode
                </Button>
            </GridRow>
            <GridRow>
                <Button inverted size="massive" as={Link} to='/codigo' fluid>
                    Digitar Codigo
                </Button>
            </GridRow>
        </Grid>
    </Container>);
};

export default Index;