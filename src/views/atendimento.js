import React from 'react';
import { Container, Grid, Segment, Header, Icon, Statistic } from 'semantic-ui-react';

const Atendimento = () => (
    <div className='atendimento'>
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.atendimento{
        height: 100%;
        background: linear-gradient(20deg, rgb(219, 112, 147), rgb(218, 163, 87));
      }
    `}
        </style>
        <Container>
            <Grid padded="vertically" textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>

                <Grid.Column>
                    <Segment textAlign="center" size="huge" inverted padded="very" className="painel-shadow">
                        <Header inverted as='h2' icon textAlign='center'>
                            <Icon color="green" name='check circle ' />
                            <Header.Content>CHEGOU SUA VEZ!</Header.Content>
                            <Header.Subheader>Dirija-se ao guichê para seu atendimento</Header.Subheader>
                        </Header>
                        <Statistic color='green' inverted>
                            <Statistic.Value>NR1243</Statistic.Value>
                            <Statistic.Label>MESA 2</Statistic.Label>
                        </Statistic>
                    </Segment>
                </Grid.Column>
            </Grid>
        </Container>
    </div>
);

export default Atendimento;