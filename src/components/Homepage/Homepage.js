import React from 'react';
import Form from './Form'
import { connect } from "react-redux";
import { addComponayData } from '../../actions/HomepageActions'
import CSV from './CSV'
import CompanyTable from './CompanyTable'
import ExportToExcel from './ExportToExcel'


class Homepage extends React.Component {

    constructor(props){
        super(props)
       
    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col col-md-8">
                        <Form />
                    </div>
                    <div className="col col-md-4">
                        <CSV />
                    </div>
                </div>
                <br/><br/><br/>
                <div className="row" >
                    <div className="col col-md-12">
                        <CompanyTable />
                    </div>
               
                </div>
            </div>
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

module.exports = connect(mapStateToProps, mapDispatchToProps)(Homepage);