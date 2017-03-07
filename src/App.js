import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class App extends Component {
    render() {
        return (
            <div>
                <section className="splash-container">
                    <Grid className="splash">
                        <div className="hero">
                            <h1>Timebox Designs</h1>
                            <p>
                                A consectetur himenaeos molestie nisi a a euismod varius inceptos libero non ornare nunc
                                rhoncus suspendisse nisi a.A vestibulum vulputate mi dapibus adipiscing ut vehicula a
                                neque proin at
                            </p>
                        </div>
                        <div className="ship"></div>
                    </Grid>
                </section>

                <section>
                    <Grid>
                        <Row>
                            <Col sm={12}>
                                A consectetur himenaeos molestie nisi a a euismod varius inceptos libero non ornare nunc
                                rhoncus suspendisse nisi a.A vestibulum vulputate mi dapibus adipiscing ut vehicula a
                                neque proin at
                            </Col>
                        </Row>
                    </Grid>
                </section>
            </div>
        );
    }
}

export default App;
