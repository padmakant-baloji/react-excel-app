import React from 'react'
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { connect } from "react-redux";
import { addComponayData } from '../../actions/HomepageActions'

class Form extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            name: "",
            department: "",
            address: "",
            active: false
        }
    }
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    addData = () => {

        const data = [];
        data.push({
            name: this.state.name,
            department: this.state.department,
            address: this.state.address
        })

        this.props.addComponayData(data)
        this.setState({
            name: "",
            address: "",
            department: ""
        })

    }

    render() {
        const { classes } = this.props;
        const data = this.state
        const active = (data.name != "" && data.address !== "" && data.department !== "") ? false : true;

        return (
            <Card>
                <CardContent>
                    <form noValidate autoComplete="off">
                        <h3 style={{ color: "#3f51b5" }}>Enter Company Details</h3>
                        <Divider />

                        <TextField
                            id="outlined-name"
                            label="Company name"
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                            variant="outlined"
                            style={{ margin: 5, width: 300 }}
                        />
                        <TextField
                            id="outlined-name"
                            label="Department name"
                            value={this.state.department}
                            onChange={this.handleChange('department')}
                            margin="normal"
                            variant="outlined"
                            style={{ margin: 5, width: 300 }}
                        />
                        <TextField
                            id="outlined-name"
                            label="Company Address"
                            value={this.state.address}
                            onChange={this.handleChange('address')}
                            margin="normal"
                            variant="outlined"
                            multiline={true}
                            size="50"
                            style={{ margin: 5, width: 300 }}
                            rows="2"
                        />
                        <br />
                        <br />
                        <Button variant="contained" color="primary" onClick={this.addData} disabled={active}>
                            Submit
                        </Button>

                    </form>

                </CardContent>
            </Card>
        )
    }
}


const mapStateToProps = state => ({
    data: state.homepagereducer.data,
});
const mapDispatchToProps = dispatch => ({
    addComponayData: (companyData) => {
        dispatch(addComponayData(companyData));
    }
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Form);