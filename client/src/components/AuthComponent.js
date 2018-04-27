import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const users = {
  bob: "bob",
  alice: "alice",
  carlos: "carlos"
};

const AuthComponent = ({

}) => (
    <Card className="container">
      <form action="/">
        <h2 className="card-heading">Login</h2>

        <div className="field-line">
          <a
            href={`?user=${users.bob}`}
            target="_blank"
          >
            <RaisedButton label={users.bob} type="submit" primary />
          </a>
        </div>

        <div className="field-line">
          <a
            href={`?user=${users.alice}`}
            target="_blank"
          >
            <RaisedButton label={users.alice} type="submit" primary />
          </a>
        </div>

        <div className="field-line">
          <a
            href={`?user=${users.carlos}`}
            target="_blank"
          >
            <RaisedButton label={users.carlos} type="submit" primary />
          </a>
        </div>
      </form>
    </Card>
  );


export default AuthComponent;