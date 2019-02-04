import React from 'react';
import Form from './Form'
import Divider from '@material-ui/core/Divider';
import CSVReader from "react-csv-reader";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { connect } from "react-redux";
import { addComponayData } from '../../actions/HomepageActions';
class CSV extends React.Component {
    constructor(props) {
        super(props)
    }

    handleForce = data => {
        const csvdata = data.map(function (x,index) {
            if(index != 0){
                return {
                    name: x[0],
                    address: x[1],
                    department: x[2]
                };
            }
            else{
                return false
            }

        });
        this.props.addComponayData(csvdata)
    };

    render() {
        return (
            <Card style={{height:293}}>
                <CardContent>
                <h5 style={{ color: "#3f51b5" }}>Upload company details csv file</h5>
              
                <Divider />
                <br/>
                    <div className="container">
                        <CSVReader
                            cssClass="react-csv-input"
                            label=""
                            onFileLoaded={this.handleForce}
                        />
                    </div>
                    <br/>

                    <div>
                        <small style={{color:"red"}}>*** upload the csv file with the following header Company name, Address and Department </small>
                    </div>

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

module.exports = connect(mapStateToProps, mapDispatchToProps)(CSV);